"use client";
/* eslint-disable */

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start text-muted-foreground lg:px-6">
          Throughout my journey from frontend design to fullstack development,
          I’ve been guided by a simple belief:{" "}
          <span className="text-white">
            software should be practical, intuitive, and empower real people.
          </span>{" "}
          At the intersection of e-commerce, fitness tech, and digital
          platforms, I focus on building web applications that turn complex
          workflows into seamless, everyday tools.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          As a fullstack developer, I’ve worked across projects like{" "}
          <span className="text-primary dark:text-white">Cart-Clo</span>, a gym
          management platform;{" "}
          <span className="text-primary dark:text-white">Taelolu Venture</span>,
          an import/export logistics system; and{" "}
          <span className="text-primary dark:text-white">BabiesnStuffs</span>,
          an e-commerce site for baby products. On these projects, I handled
          everything from designing responsive, user-friendly interfaces with
          React and Next.js to implementing backend APIs with Node.js and
          Express, integrating real-time features using Supabase, and managing
          databases like MongoDB.
        </p>
        <p className="text-start text-muted-foreground lg:px-6">
          Across all my work, I’ve had the privilege of translating ideas into
          functional products that serve real needs—whether helping users manage
          gym memberships, browse curated catalogs, or streamline logistics
          data. I believe in making technology feel human: creating applications
          that are clear, responsive, and delightfully simple to use, while
          ensuring performance and scalability behind the scenes.
        </p>
      </div>
    </section>
  );
}
