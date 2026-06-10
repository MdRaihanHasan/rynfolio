export type Service = {
  title: string;
  description: string;
  icon: string;
  features: string[];
};

export const services: Service[] = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building complete web applications from backend to frontend using Laravel, React, and Next.js with modern development best practices",
    icon: "/assets/images/icons/service1.png",
    features: ["Laravel & PHP", "React & Next.js", "End-to-End Delivery"],
  },
  {
    title: "Backend API Development",
    description:
      "Creating robust RESTful APIs and GraphQL endpoints with Laravel, Node.js, and cloud-native services for seamless data integration",
    icon: "/assets/images/icons/service2.png",
    features: ["RESTful & GraphQL", "Laravel & Node.js", "Cloud-Native Services"],
  },
  {
    title: "Database Architecture",
    description:
      "Designing scalable database systems with MySQL, PostgreSQL, and Redis optimization for high-performance web applications",
    icon: "/assets/images/icons/service3.png",
    features: ["MySQL & PostgreSQL", "Redis Caching", "High-Performance Tuning"],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description:
      "Deploying and managing scalable infrastructure on AWS and Google Cloud with Docker, Kubernetes, and CI/CD pipelines",
    icon: "/assets/images/icons/service4.png",
    features: ["AWS & Google Cloud", "Docker & Kubernetes", "CI/CD Pipelines"],
  },
  {
    title: "Performance Optimization",
    description:
      "Enhancing web application performance through code optimization, caching strategies, and Web Vitals improvement",
    icon: "/assets/images/icons/service1.png",
    features: ["Code Optimization", "Caching Strategies", "Web Vitals Tuning"],
  },
  {
    title: "System Architecture & Consulting",
    description:
      "Providing expert technical consultation for application architecture, technology stack selection, and system scalability planning",
    icon: "/assets/images/icons/service2.png",
    features: ["Application Architecture", "Tech Stack Selection", "Scalability Planning"],
  },
];
