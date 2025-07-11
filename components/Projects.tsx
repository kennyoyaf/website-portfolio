"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/assured-fx.png",
    title: "Assured Aim Forex Website",
    description:
      "Developed the official website for Assured Aim Forex, an educational and trading platform for forex traders. Built with modern frontend tools and deployed for fast performance, the site features responsive layouts, clean design, and informative sections about services, pricing, and mentorship offerings.",
    skills: [
      "Next.js",
      "Typescript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "styled-components",
      "MongoDB",
    ],
    link: "https://www.assuredaimforex.com",
  },
  {
    imagePath: "/cartclo.png",
    title: "Cartclo – Gym & Spa Discovery Platform",
    description:
      "Cartclo is a digital platform built for gym and spa lovers to discover, connect, and subscribe to fitness and wellness centers near them. It features a modern, user-friendly layout with smooth navigation, mobile responsiveness, and clean interface optimized for discovery and booking.",
    skills: ["React.js", "Typescript", "Supabase", "styled-component"],
    link: "https://www.cartclo.com",
  },
  {
    imagePath: "/coffee-sub.png",
    title: "Coffee Subscription Landing Page",
    description:
      "Created a modern landing page for a coffee subscription service. The page highlights features, benefits, and pricing tiers in a sleek, conversion-focused layout using clean animations and fast-loading images.",
    skills: ["React.js", "Styled-component", "JavaScript"],
    link: "https://coffee-subscription-site-three.vercel.app",
  },
  {
    imagePath: "/amazona.png",
    title: "Amazona Ecommerce App",
    description:
      "Full-featured ecommerce web application with product pages, cart, user authentication, admin dashboard, and Paypal integration. Built for a seamless shopping and management experience, with responsive layout and scalable design.",
    skills: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Paypal",
      "MUI",
      "Node.js",
      "Express.js",
    ],
    link: "https://amazona-ecommerce-rho.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border-transparent hover:border dark:lg:hover:border-t-blue-900 dark:lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:hover:bg-slate-100/50 lg:hover:border-t-blue-200">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={1080}
                  priority
                  className="bg-[#141414] mt-2 border border-muted-foreground rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="text-primary font-bold">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge key={index}>{skill}</Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
