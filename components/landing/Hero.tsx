import Image from "next/image";
import {
  Leaf,
  PlayCircle,
  TrendingDown,
  Target,
  TrendingUp,
  Sun,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      <div className="absolute top-0 right-0 -z-10 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100 via-brand-light to-brand-light opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Gérez mieux.
              <br />
              <span className="text-gray-600">Dépensez moins.</span>
              <br />
              <span className="text-brand-primary">Gagnez plus.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              <strong>Nyvoliko</strong> est votre assistant agricole intelligent
              qui vous aide à prendre les bonnes décisions au bon moment pour
              des récoltes plus rentables et une gestion sereine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#"
                className="flex justify-center items-center gap-2 bg-brand-primary hover:bg-green-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-glow hover:-translate-y-1"
              >
                Commencer maintenant
                <Leaf className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex justify-center items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <PlayCircle className="w-5 h-5 text-brand-primary" />
                Voir la démo
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-brand-primary">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm">Réduisez vos dépenses</h3>
                <p className="text-xs text-gray-500">
                  grâce à une meilleure planification
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-brand-accent">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm">Optimisez vos actions</h3>
                <p className="text-xs text-gray-500">
                  selon la météo et vos cultures
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-brand-highlight">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-sm">Augmentez vos revenus</h3>
                <p className="text-xs text-gray-500">
                  avec des décisions basées sur les données
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:ml-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-secondary rounded-[2.5rem] rotate-3 scale-105 opacity-20 blur-xl" />
            <Image
              src="/hero-nyvoliko.png"
              alt="Agriculteur utilisant Nyvoliko"
              width={600}
              height={600}
              className="relative rounded-[2rem] shadow-2xl object-cover h-[600px] w-full z-10 border-4 border-white"
            />

            <div
              className="absolute -left-12 top-20 bg-white p-4 rounded-2xl shadow-soft z-20 flex items-center gap-4 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-brand-highlight">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">
                  Météo du jour
                </p>
                <p className="text-lg font-bold">32°C Ensoleillé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
