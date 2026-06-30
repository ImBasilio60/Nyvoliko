import { Leaf, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <Link href="/" className="flex items-center justify-center gap-2 mb-10">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-glow">
              <Leaf className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-brand-dark">
              nyvoliko
            </span>
          </Link>

          <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-8">
            <h1 className="text-2xl font-bold text-center mb-2">
              Se connecter
            </h1>


            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Mot de passe
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex items-center justify-end text-sm">
                <Link href="/mot-de-passe-oublie" className="text-brand-primary hover:underline font-medium">
                  Mot de passe oublié ?
                </Link>
              </div>

              <button
                type="button"
                className="w-full bg-brand-primary hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Se connecter
              </button>
            </form>

            <Link
              href="/"
              className="mt-6 inline-flex items-center justify-center gap-1 w-full text-sm text-gray-500 hover:text-brand-dark transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
