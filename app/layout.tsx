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
    "Nyvoliko est votre assistant agricole intelligent qui vous aide à prendre les bonnes décisions au bon moment pour des récoltes plus rentables et une gestion sereine.",
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
