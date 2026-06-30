import { Leaf, Target, Eye, Heart } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export default function AProposPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-brand-primary text-sm font-semibold mb-4">
                <Leaf className="w-4 h-4" /> À propos
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                À propos de Nyvoliko
              </h1>
              <p className="text-gray-600 text-lg">
                Notre mission : rendre l&apos;agriculture intelligente accessible à chaque agriculteur.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mb-20">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Nyvoliko est née d&apos;un constat simple : les agriculteurs disposent aujourd&apos;hui
                de peu d&apos;outils numériques adaptés à leurs réalités quotidiennes. Entre les
                cahiers papier, les relevés météo épars et les décisions prises à l&apos;instinct,
                il manquait une solution centralisée et intelligente.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Notre équipe, composée d&apos;agronomes, de développeurs et de passionnés
                d&apos;agriculture, a conçu Nyvoliko pour répondre aux vrais besoins du terrain.
                Nous croyons que la technologie doit être un levier de performance et de
                durabilité pour toutes les exploitations, quelle que soit leur taille.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Aujourd&apos;hui, Nyvoliko accompagne déjà plus de 500 agriculteurs dans leur
                quotidien et les aide à prendre de meilleures décisions, chaque jour.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="text-center p-8 bg-brand-light rounded-2xl">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-brand-primary mx-auto mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Notre mission</h3>
                <p className="text-gray-600">
                  Donner à chaque agriculteur les moyens de piloter son exploitation avec
                  précision, pour des récoltes plus rentables et une gestion plus sereine.
                </p>
              </div>
              <div className="text-center p-8 bg-blue-50 rounded-2xl">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-brand-accent mx-auto mb-4">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Notre vision</h3>
                <p className="text-gray-600">
                  Un monde où chaque agriculteur prend ses décisions éclairées par des
                  données fiables, accessibles en un clin d&apos;œil sur son téléphone.
                </p>
              </div>
              <div className="text-center p-8 bg-yellow-50 rounded-2xl">
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-brand-highlight mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nos valeurs</h3>
                <p className="text-gray-600">
                  Simplicité, fiabilité et accessibilité. Nous concevons chaque fonctionnalité
                  avec l&apos;utilisateur final au centre de nos réflexions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
