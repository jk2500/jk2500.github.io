import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Library | Projects and Experiments",
  description: "A focused library of projects, experiments, and writeups."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>
        <div className="page-shell">
          <header className="site-header">
            <div className="brand">
              <Link href="/" className="logo">
                Library
              </Link>
              <p className="muted">Projects, notes, and ongoing experiments.</p>
            </div>
            <nav className="nav">
              <Link href="/">Home</Link>
              <Link href="/projects">Projects</Link>
            </nav>
          </header>
          <main className="content">{children}</main>
          <footer className="site-footer">
            <span className="muted">Crafted in Next.js — ready for more shelves.</span>
            <div className="nav">
              <Link href="/projects">Browse projects</Link>
              <Link href="/">Back home</Link>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
