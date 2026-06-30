import { Sparkles, Sprout, Map, CloudRain, BarChart3, Bell, Smartphone, Users } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const extendedFeatures = [
  {
    icon: Sprout,
    title: "Gestion des cultures",
    description:
      "Suivez l'évolution de toutes vos cultures en temps réel, de la semence à la récolte. Recevez des rappels pour chaque étape clé et ne laissez plus rien au hasard.",
    details: [
      "Création et suivi de cycles de culture",
      "Notifications pour chaque phase (semis, irrigation, fertilisation, récolte)",
      "Historique complet par parcelle",
      "Estimation automatisée des rendements",
    ],
    color: "text-brand-primary",
    bg: "bg-green-50",
  },
  {
    icon: Map,
    title: "Parcelles & planning",
    description:
      "Visualisez vos parcelles sur une carte interactive. Planifiez les rotations et optimisez l'utilisation de votre espace disponible.",
    details: [
      "Cartographie interactive de vos parcelles",
      "Planification des rotations culturales",
      "Indicateurs de disponibilité et d'occupation",
      "Suggestions d'assolement optimal",
    ],
    color: "text-brand-primary",
    bg: "bg-green-50",
  },
  {
    icon: CloudRain,
    title: "Météo & Actions",
    description:
      "Recevez des recommandations personnalisées basées sur les prévisions météorologiques locales. Arrosez et traitez au moment idéal.",
    details: [
      "Prévisions météo à 7 jours par localisation",
      "Alertes en cas de risque (gel, sécheresse, tempête)",
      "Recommandations d'arrosage ajustées",
      "Calendrier d'actions optimisé selon la météo",
    ],
    color: "text-brand-accent",
    bg: "bg-blue-50",
  },
  {
    icon: BarChart3,
    title: "Rapports & revenus",
    description:
      "Analysez vos performances culturales avec des tableaux de bord clairs. Suivez votre rentabilité année après année.",
    details: [
      "Tableau de bord des performances",
      "Analyse coûts / revenus par culture",
      "Comparaison saisonnière",
      "Export des rapports en PDF",
    ],
    color: "text-brand-highlight",
    bg: "bg-yellow-50",
  },
  {
    icon: Bell,
    title: "Alertes intelligentes",
    description:
      "Soyez averti au bon moment. Nos alertes contextuelles vous préviennent quand une action est nécessaire sur vos cultures.",
    details: [
      "Notifications push personnalisées",
      "Alertes de traitement préventif",
      "Rappels d'entretien programmés",
      "Seuils personnalisables",
    ],
    color: "text-brand-primary",
    bg: "bg-green-50",
  },
  {
    icon: Smartphone,
    title: "Application mobile",
    description:
      "Accédez à toutes vos données agricoles depuis votre smartphone. Nyvoliko est conçu pour fonctionner même hors-ligne.",
    details: [
      "Application disponible sur Android",
      "Mode hors-ligne pour les zones peu connectées",
      "Interface intuitive adaptée au terrain",
      "Synchronisation automatique",
    ],
    color: "text-brand-accent",
    bg: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Partage & collaboration",
    description:
      "Collaborez avec votre équipe en temps réel. Partagez les tâches et suivez les interventions de chacun.",
    details: [
      "Gestion des rôles et permissions",
      "Assignation des tâches aux membres",
      "Suivi des interventions en direct",
      "Messagerie intégrée",
    ],
    color: "text-brand-highlight",
    bg: "bg-yellow-50",
  },
];

export default function FonctionnalitesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-brand-primary text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" /> Fonctionnalités
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Découvrez toutes les fonctionnalités de Nyvoliko
              </h1>
              <p className="text-gray-600 text-lg">
                Explorez en détail chaque outil et voyez comment Nyvoliko
                peut transformer votre façon de cultiver au quotidien.
              </p>
            </div>

            <div className="space-y-16">
              {extendedFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center ${feature.color} mb-6`}
                    >
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-brand-primary flex-shrink-0 mt-0.5">
                            <span className="w-2 h-2 rounded-full bg-current" />
                          </span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`${feature.bg} rounded-[2rem] p-8 lg:p-12 hidden lg:block ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div className="aspect-[4/3] rounded-xl bg-white/60 backdrop-blur border border-white/50 flex items-center justify-center">
                      <feature.icon
                        className={`w-24 h-24 ${feature.color} opacity-30`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
