import { BrainCircuit, Check, Droplets, Leaf, MoreHorizontal } from "lucide-react";
import { benefits } from "./data";

export default function Benefits() {
  return (
    <section id="avantages" className="py-20 bg-brand-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-accent text-sm font-semibold mb-4">
              <BrainCircuit className="w-4 h-4" /> Outil décisionnel
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Des données précises pour de meilleures décisions
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Nyvoliko collecte et analyse les données de votre ferme pour vous
              donner des recommandations claires et actionnables chaque jour. Ne
              laissez plus la météo ou les oublis impacter vos rendements.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-brand-primary flex-shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-primary opacity-5 blur-3xl rounded-[3rem]" />
            <div className="relative bg-white border border-gray-100 p-6 rounded-[2rem] shadow-soft flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold text-sm">Parcelles</h4>
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </div>
                <div className="w-full h-40 bg-green-100 rounded-lg mb-4 relative overflow-hidden border-2 border-green-200">
                  <div className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-xs px-2 py-1 rounded-md font-medium text-brand-primary">
                    Parcelle A (Maïs)
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-3 h-3 rounded-full bg-brand-primary" />{" "}
                    En culture
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-3 h-3 rounded-full bg-brand-highlight" />{" "}
                    En préparation
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h4 className="font-semibold text-sm mb-4">
                  Calendrier d&apos;actions
                </h4>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-2 font-medium">
                      Aujourd&apos;hui
                    </p>
                    <div className="bg-white border border-blue-100 rounded-lg p-3 shadow-sm flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-accent flex-shrink-0">
                        <Droplets className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-dark">
                          Arrosage conseillé
                        </p>
                        <p className="text-xs text-gray-500">
                          Parcelle 3B - Maïs
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-2 font-medium">
                      Demain
                    </p>
                    <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm flex items-start gap-3 opacity-70">
                      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-brand-primary flex-shrink-0">
                        <Leaf className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-dark">
                          Fertilisation
                        </p>
                        <p className="text-xs text-gray-500">
                          Parcelle 1A - Tomates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
