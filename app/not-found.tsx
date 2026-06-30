import { Leaf, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-6">
            <Leaf className="w-8 h-8" />
          </div>
          <h1 className="text-6xl font-extrabold text-brand-dark mb-2">404</h1>
          <p className="text-xl font-semibold text-gray-700 mb-2">
            Page introuvable
          </p>
          <p className="text-gray-500 mb-8">
            La page que vous cherchez n&apos;existe pas ou a été déplacée.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Home className="w-4 h-4" /> Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
