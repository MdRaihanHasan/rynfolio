export type Certification = {
  title: string;
  issuer: string;
  /** ISO date (YYYY-MM-DD) the certificate was earned */
  date: string;
  image: string;
  verifyUrl: string;
};

const IMAGE_BASE = "/assets/images/certifications";
const VERIFY_BASE = "https://www.coursera.org/account/accomplishments/verify";

export const certifications: Certification[] = [
  {
    title: "Google Cloud IAM and Networking for AWS Professionals",
    issuer: "Google Cloud",
    date: "2024-01-27",
    image: `${IMAGE_BASE}/google-cloud-iam-networking-aws-professionals.jpeg`,
    verifyUrl: `${VERIFY_BASE}/44NRBJ48KZ3U`,
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "2024-01-25",
    image: `${IMAGE_BASE}/programming-with-javascript.jpeg`,
    verifyUrl: `${VERIFY_BASE}/NKX3FQ99TRYF`,
  },
  {
    title: "Laravel: Configure, Validate, Authenticate and Authorize",
    issuer: "Infosec",
    date: "2024-01-25",
    image: `${IMAGE_BASE}/laravel-configure-validate-authenticate-authorize.jpeg`,
    verifyUrl: `${VERIFY_BASE}/U6WCAJPZ6ERH`,
  },
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services",
    date: "2024-01-24",
    image: `${IMAGE_BASE}/aws-cloud-technical-essentials.jpeg`,
    verifyUrl: `${VERIFY_BASE}/KGG5X7KUPJZK`,
  },
  {
    title: "Introduction to Microsoft Azure Cloud Services",
    issuer: "Microsoft",
    date: "2024-01-24",
    image: `${IMAGE_BASE}/introduction-microsoft-azure-cloud-services.jpeg`,
    verifyUrl: `${VERIFY_BASE}/CLQRYRTDU7CY`,
  },
  {
    title: "Introduction to Git and GitHub",
    issuer: "Google",
    date: "2024-01-24",
    image: `${IMAGE_BASE}/introduction-git-github.jpeg`,
    verifyUrl: `${VERIFY_BASE}/9XQXZACES5KD`,
  },
  {
    title: "Learn Typescript",
    issuer: "Scrimba",
    date: "2024-01-24",
    image: `${IMAGE_BASE}/learn-typescript.jpeg`,
    verifyUrl: `${VERIFY_BASE}/2HJ5BDRZK86L`,
  },
  {
    title: "Wire Up an Auction Website with GraphQL",
    issuer: "Coursera Project Network",
    date: "2024-01-24",
    image: `${IMAGE_BASE}/wire-up-auction-website-graphql.jpeg`,
    verifyUrl: `${VERIFY_BASE}/XWTWU6X2HGZJ`,
  },
  {
    title: "Typescript in React: Get started",
    issuer: "Coursera Project Network",
    date: "2024-01-24",
    image: `${IMAGE_BASE}/typescript-in-react-get-started.jpeg`,
    verifyUrl: `${VERIFY_BASE}/YBMJ7V2JDM3G`,
  },
  {
    title: "Ajax Basics",
    issuer: "Board Infinity",
    date: "2024-01-24",
    image: `${IMAGE_BASE}/ajax-basics.jpeg`,
    verifyUrl: `${VERIFY_BASE}/AJZKZYGZL8FR`,
  },
  {
    title: "Optimization with Next.js: Build a Product Portfolio Website",
    issuer: "Coursera Project Network",
    date: "2024-01-23",
    image: `${IMAGE_BASE}/optimization-with-nextjs.jpeg`,
    verifyUrl: `${VERIFY_BASE}/DH7RUDWZVJUA`,
  },
  {
    title: "Advanced React",
    issuer: "Meta",
    date: "2024-01-23",
    image: `${IMAGE_BASE}/advanced-react.jpeg`,
    verifyUrl: `${VERIFY_BASE}/AN98JGTB2K9Q`,
  },
  {
    title: "Build a Server Rendered Website with Next.js",
    issuer: "Coursera Project Network",
    date: "2024-01-23",
    image: `${IMAGE_BASE}/build-server-rendered-website-nextjs.jpeg`,
    verifyUrl: `${VERIFY_BASE}/8R66W9CLGFAC`,
  },
  {
    title: "Master Full-Stack Web Development with Laravel & PHP",
    issuer: "Board Infinity",
    date: "2024-01-23",
    image: `${IMAGE_BASE}/master-full-stack-laravel-php.jpeg`,
    verifyUrl: `${VERIFY_BASE}/3CZH9FHSCUE5`,
  },
  {
    title: "Build a Full Website using WordPress",
    issuer: "Coursera Project Network",
    date: "2024-01-23",
    image: `${IMAGE_BASE}/build-full-website-wordpress.jpeg`,
    verifyUrl: `${VERIFY_BASE}/X8SJD53BJDQ3`,
  },
];

export function formatCertDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}
