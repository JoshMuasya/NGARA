import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import EndFooter from "@/components/EndFooter";
import BackTop from "@/components/BackTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NEFEA",
  description: "Network on Forest Enterprises in Africa",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <BackTop />
        <EndFooter />
      </body>
    </html>
  );
}
