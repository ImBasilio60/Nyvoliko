import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nyvoliko | L'agriculture intelligente pour un avenir meilleur",
  description:
    "Nyvoliko vous accompagne au quotidien dans la gestion de votre exploitation : suivi des cultures, prévisions météo, alertes intelligentes et analyses de rentabilité.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-brand-light text-brand-dark font-sans antialiased selection:bg-brand-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
