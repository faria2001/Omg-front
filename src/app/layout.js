import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Oh My God",
  description:
    "OhMyGod Token 🦝 The next big thing in crypto where community, innovation, and growth collide. $OMG | Join the revolution, get in early!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/assets/Border-bg.svg" />
        <link rel="preload" as="image" href="/assets/mob-hero-bg.svg" />
        <link rel="preload" as="image" href="/assets/omg-7.png" />
        <link rel="preload" as="image" href="/assets/omg-project-1.svg" />
        <link rel="preload" as="image" href="/assets/omg-3.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
