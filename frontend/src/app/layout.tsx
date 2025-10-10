import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";


const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Timed Task Tracker",
  description: "A simple app to track tasks with time and notes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white font-sans antialiased text-slate-800 dark:bg-slate-950 dark:text-slate-200`}
      >
        <main className="py-10 lg:px-12 lg:col-start-2">{children}</main>
      </body>
    </html>
  );
}
