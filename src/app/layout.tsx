import type { Metadata } from "next";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mediterranean Agrofood Competence Center (MACC)",
  description: "Innovation for sustainable development. Empowering Networking, Promoting Growth in Mediterranean Precision Agriculture.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-[#1a1a1a] antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
