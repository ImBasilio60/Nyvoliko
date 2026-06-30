import { HelpCircle, ChevronDown } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const faqs = [
  {
    question: "Qu'est-ce que Nyvoliko ?",
    answer:
      "Nyvoliko est une application d'aide à la décision pour les agriculteurs. Elle vous permet de suivre vos cultures, de planifier vos actions selon la météo, et d'analyser vos performances pour optimiser vos rendements.",
  },
  {
    question: "Nyvoliko est-il gratuit ?",
    answer:
      "Nyvoliko propose un essai gratuit de 7 jours sans engagement. Après cette période, vous pouvez choisir parmi nos formules d'abonnement adaptées à la taille de votre exploitation.",
  },
  {
    question: "Puis-je utiliser Nyvoliko hors-ligne ?",
    answer:
      "Oui, Nyvoliko est conçu pour fonctionner dans les zones rurales avec une connectivité limitée. Vous pouvez consulter vos données et saisir des informations hors-ligne ; elles seront synchronisées automatiquement dès que vous serez connecté.",
  },
  {
    question: "Comment Nyvoliko m'aide à économiser de l'eau ?",
    answer:
      "Nyvoliko analyse les prévisions météo locales et le stade de vos cultures pour vous recommander le moment idéal pour arroser. Cela évite les arrosages inutiles et permet de réduire votre consommation d'eau jusqu'à 30 %.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Absolument. Nous utilisons un chiffrement de bout en bout pour protéger vos données. Vos informations agricoles vous appartiennent et ne sont jamais partagées sans votre consentement.",
  },
  {
    question: "Puis-je ajouter plusieurs parcelles ?",
    answer:
      "Oui, vous pouvez ajouter autant de parcelles que vous le souhaitez. Chaque parcelle peut avoir ses propres cultures, son historique et ses recommandations personnalisées.",
  },
  {
    question: "Nyvoliko fonctionne-t-il pour tous les types de cultures ?",
    answer:
      "Nyvoliko est conçu pour une grande variété de cultures : maïs, riz, légumes, fruits, café, etc. L'application s'adapte aux spécificités de chaque type de culture.",
  },
  {
    question: "Comment installer Nyvoliko ?",
    answer:
      "Nyvoliko est disponible sur Android via Google Play. Il vous suffit de télécharger l'application, de créer un compte et de configurer votre exploitation en quelques minutes.",
  },
  {
    question: "Puis-je partager l'accès avec mon équipe ?",
    answer:
      "Oui, vous pouvez inviter les membres de votre équipe à collaborer sur votre exploitation. Chaque membre peut avoir des permissions différentes selon son rôle.",
  },
  {
    question: "Comment sont calculées les recommandations ?",
    answer:
      "Nos recommandations sont basées sur les données météo locales, le type de culture, le stade de croissance et les meilleures pratiques agronomiques. Les algorithmes sont développés avec des agronomes.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-brand-primary text-sm font-semibold mb-4">
                <HelpCircle className="w-4 h-4" /> FAQ
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Foire aux questions
              </h1>
              <p className="text-gray-600 text-lg">
                Vous avez une question ? Nous avons probablement la réponse.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-brand-light rounded-xl border border-gray-100 open:shadow-soft transition-all duration-300"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h2 className="font-semibold text-brand-dark pr-4">
                      {faq.question}
                    </h2>
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
