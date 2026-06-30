import { Leaf, ArrowLeft, Mail, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function MotDePasseOubliePage() {
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
            <h1 className="text-2xl font-bold mb-2">Mot de passe oublié ?</h1>
            <p className="text-gray-500 text-sm mb-8">
              Saisissez votre adresse email. Nous vous enverrons un lien pour réinitialiser votre mot de passe.
            </p>

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

              <button
                type="button"
                className="w-full bg-brand-primary hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Envoyer le lien
              </button>
            </form>

            <Link
              href="/login"
              className="mt-4 inline-flex items-center justify-center gap-1 w-full text-sm text-gray-500 hover:text-brand-dark transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Retour à la connexion
            </Link>

            <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-100 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                Si cette adresse est associée à un compte Nyvoliko, vous recevrez un email avec les instructions pour réinitialiser votre mot de passe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
