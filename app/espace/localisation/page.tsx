"use client";

import { useState } from "react";
import { MapPin, Plus, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const terrains = [
  { id: "1", nom: "Terrain Nord", localisation: "Antananarivo", surface: "5.2 ha", parcelles: 3 },
  { id: "2", nom: "Terrain Est", localisation: "Toamasina", surface: "3.8 ha", parcelles: 2 },
  { id: "3", nom: "Terrain Ouest", localisation: "Mahajanga", surface: "4.5 ha", parcelles: 1 },
];

export default function LocalisationPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-end">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 bg-brand-primary hover:bg-green-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm"
        >
          <Plus className="w-4 h-4" /> Nouveau terrain
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {terrains.map((t) => (
          <Link
            key={t.id}
            href={`/espace/localisation/${t.id}`}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center text-brand-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-brand-primary transition-colors" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{t.nom}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{t.localisation}</p>
            <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>{t.surface}</span>
              <span>{t.parcelles} parcelle{t.parcelles > 1 ? "s" : ""}</span>
            </div>
          </Link>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setOpen(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-lg mx-4 shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Nouveau terrain</h2>
              <button onClick={() => setOpen(false)} className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="space-y-4" onSubmit={e => { e.preventDefault(); setOpen(false); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="Terrain Sud" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Localisation</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="Fianarantsoa" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Surface</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="6.0 ha" />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium transition-colors">Annuler</button>
                <button type="submit" className="px-4 py-2 rounded-lg bg-brand-primary hover:bg-green-700 text-white font-medium transition-colors">Ajouter</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
