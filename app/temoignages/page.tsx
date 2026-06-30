import Image from "next/image";
import Link from "next/link";
import { Quote, Star, Sparkles } from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

const allTestimonials = [
  {
    quote:
      "Les alertes intelligentes me préviennent quand il faut arroser ou traiter. Je n'ai plus à deviner, l'appli me guide pas à pas et mes rendements ont grimpé.",
    name: "Jean Paul",
    role: "Maïsiculteur",
    avatar: "https://i.pravatar.cc/100?img=11",
    rating: 5,
    location: "Région d'Antananarivo",
  },
  {
    quote:
      "Avant, je traitais à l'aveugle. Maintenant je consulte Nyvoliko avant chaque intervention. Fini les traitements gâchés, je fais des économies et ma production a augmenté.",
    name: "Marie Claire",
    role: "Maraîchère",
    avatar: "https://i.pravatar.cc/100?img=5",
    rating: 5,
    location: "Région de Fianarantsoa",
  },
  {
    quote:
      "Ce que j'apprécie le plus, c'est la simplicité. Je ne suis pas un expert en technologie, mais l'application est tellement intuitive que je l'utilise tous les jours sans difficulté.",
    name: "Andry",
    role: "Riziculteur",
    avatar: "https://i.pravatar.cc/100?img=8",
    rating: 5,
    location: "Région de Toamasina",
  },
  {
    quote:
      "La fonction de planification des cultures m'a permis d'optimiser mes rotations et d'augmenter ma production de 25 % en une seule saison. Nyvoliko est devenu indispensable.",
    name: "Faly",
    role: "Polyculteur",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    location: "Région de Mahajanga",
  },
  {
    quote:
      "Je peux suivre l'évolution de toutes mes parcelles depuis mon téléphone, même quand je ne suis pas sur le terrain. La vue d'ensemble est incroyablement pratique.",
    name: "Mialisoa",
    role: "Productrice de légumes",
    avatar: "https://i.pravatar.cc/100?img=9",
    rating: 4,
    location: "Région d'Antsirabe",
  },
  {
    quote:
      "Les alertes intelligentes m'évitent d'oublier les traitements importants. Je suis plus organisé et mes cultures s'en portent mieux. Merci Nyvoliko !",
    name: "Tahina",
    role: "Arboriculteur",
    avatar: "https://i.pravatar.cc/100?img=13",
    rating: 5,
    location: "Région de Toliara",
  },
  {
    quote:
      "L'analyse des coûts et revenus m'a ouvert les yeux sur les cultures les plus rentables. J'ai réorienté ma production et mes bénéfices ont doublé.",
    name: "Bako",
    role: "Éleveur-agriculteur",
    avatar: "https://i.pravatar.cc/100?img=14",
    rating: 5,
    location: "Région de Diego-Suarez",
  },
  {
    quote:
      "Ce que j'apprécie le plus, c'est la simplicité d'utilisation. Les rapports sont clairs et je peux partager les informations avec ma famille qui m'aide sur l'exploitation.",
    name: "Voahangy",
    role: "Agricultrice",
    avatar: "https://i.pravatar.cc/100?img=25",
    rating: 4,
    location: "Région de Moramanga",
  },
  {
    quote:
      "Nyvoliko m'a fait gagner un temps précieux dans la gestion quotidienne. Je consacre plus de temps à mes cultures et moins à la paperasse. Un outil formidable.",
    name: "Haja",
    role: "Producteur de café",
    avatar: "https://i.pravatar.cc/100?img=16",
    rating: 5,
    location: "Région d'Ambatondrazaka",
  },
];

export default function TemoignagesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-brand-primary text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" /> Témoignages
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Ce que nos utilisateurs disent de Nyvoliko
              </h1>
              <p className="text-gray-600 text-lg">
                Des retours d&apos;expérience authentiques d&apos;agriculteurs
                comme vous, partout à Madagascar.
              </p>
            </div>

            <div className="mb-16 bg-brand-light rounded-[2rem] p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <p className="text-6xl font-extrabold text-brand-primary mb-2">
                    4.8
                  </p>
                  <div className="flex justify-center lg:justify-start gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-brand-highlight text-brand-highlight"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">
                    Basé sur plus de <strong>200 avis</strong> d&apos;agriculteurs
                    utilisant Nyvoliko au quotidien.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Satisfaction", value: "98 %" },
                    { label: "Recommandation", value: "96 %" },
                    { label: "Fidélité", value: "92 %" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white rounded-xl p-4 text-center border border-gray-100"
                    >
                      <p className="text-2xl font-extrabold text-brand-primary">
                        {stat.value}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allTestimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-brand-light p-8 rounded-2xl relative border border-gray-100 hover:shadow-soft transition-shadow duration-300"
                >
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-green-100" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-brand-highlight text-brand-highlight"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 relative z-10 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-sm text-brand-dark">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                      <p className="text-xs text-brand-primary/60">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-[2rem] p-10 lg:p-14">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Découvrez Nyvoliko par vous-même
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Téléchargez l&apos;application et explorez ses fonctionnalités
                pour voir comment elle peut améliorer votre quotidien.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 bg-brand-primary hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-glow"
              >
                Découvrir l&apos;application
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
