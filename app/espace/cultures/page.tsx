"use client";

import { useState } from "react";
import { Sprout, Calendar, TrendingUp, Clock, Plus, X } from "lucide-react";

const cultures = [
  { nom: "Maïs", variete: "Hybride IRAT 200", surface: "2.5 ha", stade: "Floraison", dateSemis: "15 Nov 2025", dateRecolte: "Avril 2026", progression: 65 },
  { nom: "Tomates", variete: "Mongal F1", surface: "1.2 ha", stade: "Fructification", dateSemis: "20 Déc 2025", dateRecolte: "Mars 2026", progression: 80 },
  { nom: "Riz", variete: "NERICA 4", surface: "3.0 ha", stade: "Semis", dateSemis: "Jan 2026", dateRecolte: "Mai 2026", progression: 15 },
  { nom: "Haricots", variete: "Local", surface: "1.0 ha", stade: "Croissance", dateSemis: "10 Jan 2026", dateRecolte: "Mars 2026", progression: 40 },
];

export default function CulturesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-end">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 bg-brand-primary hover:bg-green-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm"
        >
          <Plus className="w-4 h-4" /> Nouvelle culture
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setOpen(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-lg mx-4 shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Nouvelle culture</h2>
              <button onClick={() => setOpen(false)} className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="space-y-4" onSubmit={e => { e.preventDefault(); setOpen(false); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="Maïs" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Variété</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="Hybride IRAT 200" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Surface</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="2.5 ha" />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium transition-colors">Annuler</button>
                <button type="submit" className="px-4 py-2 rounded-lg bg-brand-primary hover:bg-green-700 text-white font-medium transition-colors">Ajouter</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {cultures.map((c) => (
          <div
            key={c.nom}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center text-brand-primary">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">{c.nom}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">{c.variete}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs">Surface</p>
                <p className="font-medium text-gray-900 dark:text-white">{c.surface}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs">Stade</p>
                <p className="font-medium text-gray-900 dark:text-white">{c.stade}</p>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Semis</p>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">{c.dateSemis}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-gray-400 dark:text-gray-500" />
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Récolte</p>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">{c.dateRecolte}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500 dark:text-gray-400">Progression</span>
                <span className="font-medium text-gray-900 dark:text-white">{c.progression}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-primary rounded-full transition-all"
                  style={{ width: `${c.progression}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
