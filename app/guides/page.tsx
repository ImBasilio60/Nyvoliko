import Link from "next/link";
import { BookOpen, ArrowRight, FileText, Video, Download } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const guides = [
  {
    title: "Guide complet de l'irrigation intelligente",
    description:
      "Apprenez à gérer l'arrosage de vos cultures de façon optimale en utilisant les données météo et l'humidité du sol.",
    type: "PDF",
    icon: FileText,
    color: "text-brand-accent",
    bg: "bg-blue-50",
  },
  {
    title: "Calendrier des cultures tropicales",
    description:
      "Un guide mois par mois pour savoir quand semer, traiter et récolter vos cultures selon les saisons.",
    type: "PDF",
    icon: FileText,
    color: "text-brand-primary",
    bg: "bg-green-50",
  },
  {
    title: "Tutoriel vidéo : prise en main de Nyvoliko",
    description:
      "Une vidéo pas à pas pour configurer votre exploitation et commencer à suivre vos parcelles en moins de 10 minutes.",
    type: "Vidéo",
    icon: Video,
    color: "text-brand-highlight",
    bg: "bg-yellow-50",
  },
  {
    title: "Guide de la fertilisation raisonnée",
    description:
      "Optimisez vos apports en engrais grâce à nos recommandations personnalisées et réduisez vos coûts.",
    type: "PDF",
    icon: FileText,
    color: "text-brand-accent",
    bg: "bg-blue-50",
  },
  {
    title: "Checklist de la gestion quotidienne",
    description:
      "Une checklist imprimable pour ne rien oublier dans votre routine agricole quotidienne.",
    type: "Checklist",
    icon: Download,
    color: "text-brand-primary",
    bg: "bg-green-50",
  },
  {
    title: "Guide des rotations culturales",
    description:
      "Planifiez vos rotations pour préserver la santé de vos sols et maximiser vos rendements saison après saison.",
    type: "PDF",
    icon: FileText,
    color: "text-brand-highlight",
    bg: "bg-yellow-50",
  },
];

export default function GuidesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-brand-primary text-sm font-semibold mb-4">
                <BookOpen className="w-4 h-4" /> Guides pratiques
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Guides pratiques
              </h1>
              <p className="text-gray-600 text-lg">
                Des ressources téléchargeables pour vous accompagner au quotidien dans la gestion de votre exploitation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide) => (
                <div
                  key={guide.title}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-soft transition-all duration-300 group"
                >
                  <div
                    className={`w-14 h-14 ${guide.bg} rounded-xl flex items-center justify-center ${guide.color} mb-6`}
                  >
                    <guide.icon className="w-7 h-7" />
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      {guide.type}
                    </span>
                  </div>
                  <h2 className="font-bold text-lg mb-2">{guide.title}</h2>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {guide.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-brand-primary font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    Télécharger <ArrowRight className="w-4 h-4" />
                  </Link>
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
