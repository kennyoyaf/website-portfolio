import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  alternates: {
    canonical: "http://localhost:3000",
  },
  title: "Kehinde Oyafemi – Full Stack Developer",
  description:
    "I help startups and digital platforms in e-commerce, logistics, and fitness tech build responsive, user-focused web applications—turning complex workflows into intuitive tools people love to use.",
  keywords:
    "Kehinde Oyafemi, Full Stack Developer, React, Next.js, React Native, Supabase, MongoDB, E-commerce, Logistics, Fitness Tech, UI/UX",
  openGraph: {
    locale: "en_US",
    siteName: "Kehinde Oyafemi",
    type: "website",
    title: "Kehinde Oyafemi – Full Stack Developer",
    description:
      "I help startups and digital platforms in e-commerce, logistics, and fitness tech build responsive, user-focused web applications—turning complex workflows into intuitive tools people love to use.",
    url: "http://localhost:3000",
    images: [
      {
        url: "/public/my-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kehinde Oyafemi – Full Stack Developer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
