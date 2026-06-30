import { Newspaper, Calendar, User } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const articles = [
  {
    title: "Comment optimiser l'irrigation de vos cultures avec la météo",
    excerpt:
      "Découvrez comment utiliser les prévisions météo pour planifier vos arrosages au moment idéal et réduire votre consommation d'eau jusqu'à 30 %.",
    author: "Nyvoliko",
    date: "12 Juin 2026",
    category: "Conseils",
  },
  {
    title: "Les bonnes pratiques pour la fertilisation de saison",
    excerpt:
      "Apprenez à adapter votre fertilisation en fonction du stade de vos cultures et des conditions climatiques pour maximiser vos rendements.",
    author: "Nyvoliko",
    date: "28 Mai 2026",
    category: "Techniques",
  },
  {
    title: "5 erreurs courantes en gestion de parcelle (et comment les éviter)",
    excerpt:
      "De la planification des rotations au suivi des traitements, voici les erreurs les plus fréquentes et nos solutions pour les corriger.",
    author: "Nyvoliko",
    date: "15 Mai 2026",
    category: "Conseils",
  },
  {
    title: "L'agriculture intelligente : un guide pour débutants",
    excerpt:
      "Vous débutez dans l'agriculture de précision ? Ce guide vous explique les bases et comment Nyvoliko peut vous accompagner pas à pas.",
    author: "Nyvoliko",
    date: "2 Mai 2026",
    category: "Guide",
  },
  {
    title: "Pourquoi le suivi des rendements est la clé de la rentabilité",
    excerpt:
      "Analyser vos performances culture par culture vous permet d'identifier ce qui fonctionne et d'ajuster votre stratégie pour la saison suivante.",
    author: "Nyvoliko",
    date: "18 Avril 2026",
    category: "Analyse",
  },
  {
    title: "Comment Nyvoliko vous aide à anticiper les aléas climatiques",
    excerpt:
      "Avec le changement climatique, anticiper les risques devient essentiel. Découvrez comment nos alertes vous protègent.",
    author: "Nyvoliko",
    date: "5 Avril 2026",
    category: "Fonctionnalité",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-brand-primary text-sm font-semibold mb-4">
                <Newspaper className="w-4 h-4" /> Blog Agricole
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Blog Agricole Nyvoliko
              </h1>
              <p className="text-gray-600 text-lg">
                Conseils, astuces et actualités pour optimiser votre exploitation agricole.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="bg-brand-light rounded-2xl overflow-hidden border border-gray-100 hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="h-48 bg-gradient-to-br from-green-100 to-blue-50 flex items-center justify-center">
                    <Newspaper className="w-16 h-16 text-brand-primary/30" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                      <span className="px-2 py-1 rounded-full bg-green-50 text-brand-primary text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h2 className="font-bold text-lg mb-2 group-hover:text-brand-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" /> {article.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {article.date}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
