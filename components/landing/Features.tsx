import { Sparkles } from "lucide-react";
import { features } from "./data";

export default function Features() {
  return (
    <section id="fonctionnalites" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-brand-primary text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" /> Fonctionnalités
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            L&apos;essentiel pour piloter votre exploitation
          </h2>
          <p className="text-gray-600">
            Des outils conçus pour le terrain, accessibles depuis votre poche,
            pour une agriculture plus sereine au quotidien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-brand-light rounded-2xl p-8 hover:bg-white hover:shadow-soft transition-all duration-300 border border-transparent hover:border-gray-100 group"
            >
              <div
                className={`w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center ${feature.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
