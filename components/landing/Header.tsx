"use client";

import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { navLinks } from "./data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="#accueil"
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-glow">
              <Leaf className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-brand-dark">
              nyvoliko
            </span>
          </a>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={
                  link.href === "#accueil"
                    ? "text-brand-primary font-medium border-b-2 border-brand-primary py-1"
                    : "text-gray-500 hover:text-brand-dark font-medium transition-colors py-1"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-brand-dark font-medium transition-colors"
            >
              Se connecter
            </a>
            <a
              href="#"
              className="bg-brand-primary hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              S&apos;inscrire
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-brand-dark p-2"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-600 hover:text-brand-dark font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-gray-100" />
            <a
              href="#"
              className="block text-gray-600 hover:text-brand-dark font-medium py-2"
            >
              Se connecter
            </a>
            <a
              href="#"
              className="block text-center bg-brand-primary hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              S&apos;inscrire
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
