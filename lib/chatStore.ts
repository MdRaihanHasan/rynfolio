// Server-side visitor store for the chat assistant.
//
// This project has no database, so usage counts and conversations are persisted
// to a JSON file. The store is the SOURCE OF TRUTH for the weekly question limit —
// a visitor is keyed by email, so deleting the browser cookie cannot reset it.
//
// Deployment note: this works for a single long-running Node server (`next start`
// on a VPS). On multi-instance/serverless hosting, point CHAT_DATA_DIR at shared
// storage or swap this module for a real DB/KV — the routes only use the helpers
// exported here.

import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

export type StoredMessage = {
  role: "user" | "assistant";
  content: string;
  known?: boolean;
  at: number;
};

export type VisitorRecord = {
  id: string;
  name: string;
  email: string;
  phone: string;
  count: number; // questions asked in the current 7-day window
  resetAt: number; // epoch ms when the window rolls over
  limitEmailed: boolean; // owner already notified about this week's limit
  createdAt: number;
  lastIp?: string;
  messages: StoredMessage[];
};

const DATA_DIR = process.env.CHAT_DATA_DIR || path.join(process.cwd(), ".data");
const FILE = path.join(DATA_DIR, "chat-visitors.json");
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;

// Serialize read-modify-write so concurrent requests don't clobber the file.
let queue: Promise<unknown> = Promise.resolve();
function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = queue.then(fn, fn);
  queue = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}

function normEmail(email: string): string {
  return email.trim().toLowerCase();
}

async function readAll(): Promise<Record<string, VisitorRecord>> {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8")) as Record<string, VisitorRecord>;
  } catch {
    return {};
  }
}

async function writeAll(data: Record<string, VisitorRecord>): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(data, null, 2), "utf8");
}

export async function getVisitorByEmail(email: string): Promise<VisitorRecord | null> {
  const all = await readAll();
  return all[normEmail(email)] ?? null;
}

/**
 * Create or update a visitor record atomically. The `mutate` callback receives
 * the current (or a freshly initialized) record and returns the next one.
 */
export async function upsertVisitor(
  email: string,
  mutate: (rec: VisitorRecord) => VisitorRecord
): Promise<VisitorRecord> {
  return withLock(async () => {
    const all = await readAll();
    const key = normEmail(email);
    const now = Date.now();
    const base: VisitorRecord =
      all[key] ??
      ({
        id: randomUUID(),
        name: "",
        email: key,
        phone: "",
        count: 0,
        resetAt: now + WEEK_MS,
        limitEmailed: false,
        createdAt: now,
        messages: [],
      } satisfies VisitorRecord);

    const next = mutate({ ...base, messages: [...base.messages] });
    all[key] = next;
    await writeAll(all);
    return next;
  });
}

/** Roll the 7-day window forward if it has expired (pure — returns a new record). */
export function rollWindow(rec: VisitorRecord, now: number): VisitorRecord {
  if (now > rec.resetAt) {
    return { ...rec, count: 0, resetAt: now + WEEK_MS, limitEmailed: false };
  }
  return rec;
}

export { WEEK_MS };
