import { BrainCircuit, Check, DollarSign, Clock, Shield, LineChart, CloudSun, Smartphone } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const benefitItems = [
  {
    icon: DollarSign,
    title: "Maîtrisez vos intrants",
    description:
      "En planifiant précisément vos arrosages, fertilisations et traitements, vous évitez le gaspillage d'eau, d'engrais et de produits phytosanitaires. Nos utilisateurs économisent en moyenne 30 % sur leurs intrants.",
    color: "text-brand-primary",
    bg: "bg-green-50",
  },
  {
    icon: Clock,
    title: "Intervenez au bon moment",
    description:
      "Nos recommandations sont basées sur les prévisions météo locales et le stade de vos cultures. Fini les traitements lessivés par la pluie ou les arrosages en pleine chaleur.",
    color: "text-brand-accent",
    bg: "bg-blue-50",
  },
  {
    icon: LineChart,
    title: "Maximisez votre production",
    description:
      "En suivant les bonnes pratiques au bon moment, vos cultures donnent leur plein potentiel. Nos utilisateurs constatent une augmentation moyenne de 20 % de leurs rendements.",
    color: "text-brand-highlight",
    bg: "bg-yellow-50",
  },
  {
    icon: Smartphone,
    title: "Suivez tout depuis votre mobile",
    description:
      "Depuis votre téléphone, consultez l'historique de vos parcelles, comparez les saisons et visualisez vos améliorations année après année.",
    color: "text-brand-primary",
    bg: "bg-green-50",
  },
  {
    icon: CloudSun,
    title: "Anticipez les aléas climatiques",
    description:
      "Recevez des alertes en cas de risques de gel, sécheresse prolongée ou fortes pluies. Prenez une longueur d'avance pour protéger vos cultures.",
    color: "text-brand-accent",
    bg: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Gardez le contrôle total",
    description:
      "Toutes vos données agricoles au même endroit. Plus de cahiers perdus ou de notes éparpillées. Une vision claire et complète de votre exploitation.",
    color: "text-brand-highlight",
    bg: "bg-yellow-50",
  },
];

export default function AvantagesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-accent text-sm font-semibold mb-4">
                <BrainCircuit className="w-4 h-4" /> Avantages
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Pourquoi choisir Nyvoliko ?
              </h1>
              <p className="text-gray-600 text-lg">
                Une solution complète qui fait la différence sur le terrain, chaque jour.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefitItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-transparent"
                >
                  <div
                    className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center ${item.color} mb-6`}
                  >
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-20 bg-white border border-gray-100 rounded-[2rem] p-10 lg:p-14 shadow-soft">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                    Nyvoliko en chiffres
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Des résultats concrets mesurés auprès de nos utilisateurs
                    après une saison d&apos;utilisation.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-brand-light rounded-xl">
                      <p className="text-4xl font-extrabold text-brand-primary">
                        -30 %
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Dépenses en intrants
                      </p>
                    </div>
                    <div className="text-center p-6 bg-brand-light rounded-xl">
                      <p className="text-4xl font-extrabold text-brand-accent">
                        +20 %
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Rendement moyen
                      </p>
                    </div>
                    <div className="text-center p-6 bg-brand-light rounded-xl">
                      <p className="text-4xl font-extrabold text-brand-highlight">
                        4.8/5
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Satisfaction client
                      </p>
                    </div>
                    <div className="text-center p-6 bg-brand-light rounded-xl">
                      <p className="text-4xl font-extrabold text-brand-primary">
                        500+
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Agriculteurs actifs
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-brand-light rounded-[1.5rem] p-8 lg:p-10">
                  <h3 className="font-bold text-lg mb-4">
                    Ce que nos utilisateurs disent
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        quote: "Je dépense moins en eau et en engrais tout en produisant plus. Nyvoliko m'a fait gagner en efficacité et en sérénité.",
                        name: "Rakoto F.",
                      },
                      {
                        quote: "Le suivi météo personnalisé m'évite de perdre des traitements. Je recommande à tous les agriculteurs.",
                        name: "Lala H.",
                      },
                      {
                        quote: "Simple, pratique et adapté à nos besoins. L'application est devenue mon outil de travail quotidien.",
                        name: "Mamy R.",
                      },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="bg-white rounded-xl p-4 border border-gray-100"
                      >
                        <p className="text-sm text-gray-700 mb-2">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                        <p className="text-xs font-semibold text-brand-dark">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
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
