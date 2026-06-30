import { Scale, Shield, FileText, Cookie } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-brand-primary text-sm font-semibold mb-4">
                <Scale className="w-4 h-4" /> Mentions légales
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Mentions légales
              </h1>
            </div>

            <div className="max-w-3xl mx-auto space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-brand-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold">Éditeur</h2>
                </div>
                <div className="bg-brand-light rounded-xl p-6 text-gray-700 space-y-2">
                  <p><strong>Nyvoliko SAS</strong></p>
                  <p>Antananarivo 101, Madagascar</p>
                  <p>Email : contact@nyvoliko.mg</p>
                  <p>Téléphone : +261 34 00 000 00</p>
                  <p>Immatriculation : RCS Antananarivo 2026 B 00001</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-brand-accent">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold">Protection des données</h2>
                </div>
                <div className="bg-brand-light rounded-xl p-6 text-gray-700 space-y-3">
                  <p>
                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la
                    loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de
                    rectification et de suppression des données vous concernant.
                  </p>
                  <p>
                    Les données collectées via Nyvoliko sont utilisées uniquement dans le cadre de
                    la fourniture de nos services et ne sont jamais revendues à des tiers.
                  </p>
                  <p>
                    Pour exercer vos droits, contactez-nous à : contact@nyvoliko.mg
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-yellow-50 rounded-xl flex items-center justify-center text-brand-highlight">
                    <Cookie className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold">Cookies</h2>
                </div>
                <div className="bg-brand-light rounded-xl p-6 text-gray-700 space-y-2">
                  <p>
                    Notre site utilise des cookies strictement nécessaires à son fonctionnement.
                    Nous n&apos;utilisons pas de cookies publicitaires ou de traçage tiers.
                  </p>
                  <p>
                    Vous pouvez paramétrer vos préférences de cookies à tout moment depuis les
                    paramètres de votre navigateur.
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center text-brand-primary">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold">Propriété intellectuelle</h2>
                </div>
                <div className="bg-brand-light rounded-xl p-6 text-gray-700 space-y-2">
                  <p>
                    L&apos;ensemble du contenu de ce site (textes, graphismes, logos, icônes) est
                    la propriété exclusive de Nyvoliko SAS. Toute reproduction ou distribution
                    sans autorisation préalable est interdite.
                  </p>
                  <p>
                    Les marques et noms commerciaux cités appartiennent à leurs propriétaires
                    respectifs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
