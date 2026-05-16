import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vice Verse",
  description: "A high-end cinematic portfolio experience.",
};

export const viewport: Viewport = {
  width: "1280",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-[#121212]`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/pricedown" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
