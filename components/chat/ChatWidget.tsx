"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ChatWidget.module.css";

type Msg = { role: "user" | "assistant"; content: string };

const AVATAR = "/assets/images/hero/me.png";
const MAX_LEN = 1000;
const GREETING =
  "👋 Hi! I'm Lyra, Raihan's AI assistant. Ask me about his experience, skills, projects or services.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [booted, setBooted] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [blocked, setBlocked] = useState(false);

  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  // Lead-capture form fields
  const [fName, setFName] = useState("");
  const [fEmail, setFEmail] = useState("");
  const [fPhone, setFPhone] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [formError, setFormError] = useState("");

  const bodyRef = useRef<HTMLDivElement>(null);

  // Bootstrap: does the server already know this visitor?
  useEffect(() => {
    let active = true;
    fetch("/api/chat")
      .then((r) => r.json())
      .then((d) => {
        if (!active) return;
        if (d.registered) {
          setRegistered(true);
          setRemaining(d.remaining);
          setBlocked(d.remaining <= 0);
          setMessages([{ role: "assistant", content: GREETING }]);
        } else {
          setRemaining(d.limit ?? null);
        }
      })
      .catch(() => {})
      .finally(() => active && setBooted(true));
    return () => {
      active = false;
    };
  }, []);

  // Keep the latest message in view.
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, sending, open]);

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    if (!fName.trim() || !fEmail.trim()) {
      setFormError("Please share your name and email.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/chat/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fName, email: fEmail, phone: fPhone, company }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        setFormError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setRegistered(true);
      setRemaining(data.remaining ?? null);
      setBlocked((data.remaining ?? 1) <= 0);
      setMessages([{ role: "assistant", content: GREETING }]);
    } catch {
      setFormError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  }

  async function handleSend() {
    const text = input.trim();
    if (!text || sending || blocked) return;
    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setSending(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      if (res.status === 401) {
        setRegistered(false);
        return;
      }
      const data = await res.json();
      if (data.error) {
        setMessages((m) => [
          ...m,
          { role: "assistant", content: "Sorry, something went wrong. Please try again." },
        ]);
        return;
      }
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
      if (typeof data.remaining === "number") setRemaining(data.remaining);
      if (data.limitReached) setBlocked(true);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content: "Network error — please check your connection and try again.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  function onComposerKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  const remainingLabel =
    remaining === null
      ? "Powered by AI"
      : remaining === 1
        ? "1 question remaining"
        : `${remaining} questions remaining this week`;

  return (
    <>
      {!open && (
        <button
          className={styles.launcher}
          aria-label="Chat with Lyra, Raihan's assistant"
          onClick={() => setOpen(true)}
        >
          <i className="far fa-comment-dots" aria-hidden="true"></i>
          {booted && !registered && <span className={styles.dot} />}
        </button>
      )}

      {open && (
        <div className={styles.panel} role="dialog" aria-label="Chat assistant">
          <div className={styles.header}>
            <img className={styles.avatar} src={AVATAR} alt="Raihan" />
            <div className={styles.headerText}>
              <p className={styles.headerTitle}>Lyra</p>
              <p className={styles.headerSub}>
                <span className={styles.online} /> Raihan&rsquo;s AI Assistant · replies instantly
              </p>
            </div>
            <button className={styles.close} aria-label="Close chat" onClick={() => setOpen(false)}>
              <i className="fas fa-times" aria-hidden="true"></i>
            </button>
          </div>

          <div className={styles.body} ref={bodyRef}>
            {!registered ? (
              <>
                <p className={styles.introText}>
                  👋 Hi! I&rsquo;m Lyra, Raihan&rsquo;s AI assistant — I can tell you about his
                  experience, skills, projects, services and availability. Before we start, tell me a
                  little about you so Raihan can follow up if needed.
                </p>
                <form className={styles.form} onSubmit={handleRegister}>
                  <input
                    className={styles.input}
                    placeholder="Your name *"
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                    autoComplete="name"
                    maxLength={120}
                  />
                  <input
                    className={styles.input}
                    type="email"
                    placeholder="Your email *"
                    value={fEmail}
                    onChange={(e) => setFEmail(e.target.value)}
                    autoComplete="email"
                    maxLength={200}
                  />
                  <input
                    className={styles.input}
                    placeholder="Phone (optional)"
                    value={fPhone}
                    onChange={(e) => setFPhone(e.target.value)}
                    autoComplete="tel"
                    maxLength={60}
                  />
                  {/* Honeypot */}
                  <input
                    className={styles.hidden}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    name="company"
                  />
                  {formError && <p className={styles.error}>{formError}</p>}
                  <button className={styles.primaryBtn} type="submit" disabled={sending}>
                    {sending ? "Starting…" : "Start Chat"}
                  </button>
                </form>
              </>
            ) : (
              <>
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`${styles.msg} ${m.role === "user" ? styles.msgUser : styles.msgAI}`}
                  >
                    <div
                      className={`${styles.bubble} ${
                        m.role === "user" ? styles.bubbleUser : styles.bubbleAI
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
                {sending && (
                  <div className={`${styles.msg} ${styles.msgAI}`}>
                    <div className={`${styles.bubble} ${styles.bubbleAI} ${styles.thinking}`}>
                      <span>Thinking</span>
                      <span className={styles.dots}>
                        <span />
                        <span />
                        <span />
                      </span>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {registered && (
            <div className={styles.footer}>
              <div className={styles.inputRow}>
                <textarea
                  className={styles.composer}
                  rows={1}
                  maxLength={MAX_LEN}
                  placeholder={blocked ? "Weekly limit reached" : "Type your message…"}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onComposerKey}
                  disabled={blocked || sending}
                />
                <button
                  className={styles.send}
                  onClick={handleSend}
                  disabled={blocked || sending || !input.trim()}
                  aria-label="Send message"
                >
                  <i className="fas fa-paper-plane" aria-hidden="true"></i>
                </button>
              </div>
              <p className={styles.meta}>
                {blocked ? "Raihan will reply to you by email soon." : remainingLabel}
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}
