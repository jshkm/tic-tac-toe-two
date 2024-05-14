import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import { Inter, } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter"});
const bit = localFont({ src: '../../public/8bit.ttf', variable: "--bit-font"})
const bold = localFont({ src: '../../public/bold.ttf', variable: "--bold-font"})
const jacq = localFont({ src: '../../public/jacq.ttf', variable: "--jacq-font"})
const script = localFont({ src: '../../public/script.ttf', variable: "--script-font"})
const serif = localFont({ src: '../../public/serif.ttf', variable: "--serif-font"})

export const metadata: Metadata = {
  title: "Tic Tac Toe Two",
  description: "The new way to play tic tac toe :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className={`${bit.variable} ${inter.variable} ${bold.variable} ${jacq.variable} ${script.variable} ${serif.variable}`}>
        <body>{children}</body>
      </html>
      <Analytics></Analytics>
    </>
  );
}
