import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Kahve Dünyası",
  description: "Kahve kültürü, tarifleri ve hikayeleri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="min-h-screen bg-[#f8f3e7]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
