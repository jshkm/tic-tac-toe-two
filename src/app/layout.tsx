import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter"});
const myFont = localFont({ src: '../../public/myFont.ttf', variable: "--myFont"})

export const metadata: Metadata = {
  title: "Tic Tac Toe Two",
  description: "The new way to play tic tac toe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${myFont.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
