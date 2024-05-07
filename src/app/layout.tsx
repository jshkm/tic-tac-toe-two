import type { Metadata } from "next";
// import {  } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: '../../public/myFont.ttf'})
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
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
