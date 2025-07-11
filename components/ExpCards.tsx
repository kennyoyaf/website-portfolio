"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "2025 – Present",
    currentPosition: "Frontend Developer",
    place: "Tielle Travel",
    previousPositions: [""],
    description:
      "Develop and maintain responsive travel web application interfaces using React and TypeScript. Translate UI/UX designs into functional components and integrate APIs for dynamic travel data like destinations and bookings.",
    skills: [
      "React",
      "TypeScript",
      "API Integration",
      "UI/UX",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
  {
    timeline: "2023 – Present",
    currentPosition: "Junior Web Developer",
    place: "Panthers Insight Solution Ltd",
    previousPositions: [""],
    description:
      "Built user-friendly interfaces with React and Tailwind CSS. Collaborated with designers and backend developers to create seamless web applications, ensured cross-device compatibility and improved frontend performance.",
    skills: [
      "React",
      "Tailwind CSS",
      "HTML",
      "JavaScript",
      "Cross-device Compatibility",
      "Collaboration",
    ],
  },
  {
    timeline: "2023",
    currentPosition: "Fullstack Developer (Freelance)",
    place: "Taelolu Venture Import/Export App",
    previousPositions: [""],
    description:
      "Developed a responsive web platform for crop import/export services with Next.js and styled-components. Built backend APIs with Node.js and Express to handle crop data and buyer details.",
    skills: [
      "Next.js",
      "Node.js",
      "Express",
      "Styled-components",
      "API Development",
      "MongoDB",
    ],
  },
  {
    timeline: "2023 – 2024",
    currentPosition: "Fullstack Developer (Freelance)",
    place: "Assured FX - Forex Training Website",
    previousPositions: [""],
    description:
      "Built a modern, responsive forex training platform with Next.js and styled-components. Integrated secure backend services, user authentication, and admin course management.",
    skills: [
      "Next.js",
      "Node.js",
      "Express",
      "Styled-components",
      "Authentication",
      "Admin Management",
    ],
  },
  {
    timeline: "2024",
    currentPosition: "Frontend Developer",
    place: "BabiesnStuffs E-commerce Frontend",
    previousPositions: [""],
    description:
      "Developed a responsive frontend using Next.js and Material-UI. Integrated RTK Query for efficient API data handling and implemented features like category filtering and cart integration.",
    skills: [
      "Next.js",
      "React",
      "Material-UI",
      "RTK Query",
      "API Integration",
      "Responsive Design",
    ],
  },
  {
    timeline: "2024",
    currentPosition: "Fullstack Developer",
    place: "Amazona E-commerce Project",
    previousPositions: [""],
    description:
      "Developed a fullstack e-commerce site with Next.js and Express.js. Integrated PayPal payments, handled authentication with cookie-js, and managed products and cart features.",
    skills: [
      "Next.js",
      "Express.js",
      "PayPal Integration",
      "Cookie-js",
      "JavaScript",
      "Fullstack Development",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200"
          >
            <CardHeader className="h-full w-full p-0">
              <CardTitle className="text-base text-slate-400 whitespace-nowrap">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0">
              <p className="text-foreground font-bold">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, idx) => (
                <p key={idx} className="text-slate-400 text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 text-muted-foreground">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, idx) => (
                  <Badge key={idx}>{skill}</Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="mailto:kehindeoyafemi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight text-foreground group"
        >
          <span className="border-b border-transparent pb-px transition hover:border-primary motion-reduce:transition-none">
            Reach out for Full Resume
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
