"use client";

import { useState } from "react";
import { Map, Droplets, Sprout, Plus, X } from "lucide-react";

const parcelles = [
  { nom: "Parcelle A", culture: "Maïs", surface: "2.5 ha", etat: "En culture", eau: "Arrosage dans 2j", color: "text-brand-primary", bg: "bg-green-50 dark:bg-green-900/20" },
  { nom: "Parcelle B", culture: "Tomates", surface: "1.2 ha", etat: "En culture", eau: "Arrosé aujourd'hui", color: "text-brand-accent", bg: "bg-blue-50 dark:bg-blue-900/20" },
  { nom: "Parcelle C", culture: "Riz", surface: "3.0 ha", etat: "En préparation", eau: "Non applicable", color: "text-brand-highlight", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
  { nom: "Parcelle D", culture: "Haricots", surface: "1.0 ha", etat: "En culture", eau: "Arrosage demain", color: "text-brand-primary", bg: "bg-green-50 dark:bg-green-900/20" },
  { nom: "Parcelle E", culture: "Manioc", surface: "1.8 ha", etat: "En jachère", eau: "Non applicable", color: "text-gray-500", bg: "bg-gray-50 dark:bg-gray-900/20" },
];

export default function ParcellesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-end">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 bg-brand-primary hover:bg-green-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm"
        >
          <Plus className="w-4 h-4" /> Nouvelle parcelle
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => setOpen(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-lg mx-4 shadow-xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Nouvelle parcelle</h2>
              <button onClick={() => setOpen(false)} className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form className="space-y-4" onSubmit={e => { e.preventDefault(); setOpen(false); }}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="Parcelle F" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Culture</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="Maïs" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Surface</label>
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="1.5 ha" />
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium transition-colors">Annuler</button>
                <button type="submit" className="px-4 py-2 rounded-lg bg-brand-primary hover:bg-green-700 text-white font-medium transition-colors">Ajouter</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {parcelles.map((p) => (
          <div
            key={p.nom}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${p.bg} ${p.color}`}>
                <Map className="w-5 h-5" />
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                p.etat === "En culture" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                p.etat === "En préparation" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
              }`}>
                {p.etat}
              </span>
            </div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">{p.nom}</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Sprout className="w-4 h-4 text-gray-400 dark:text-gray-500" /> {p.culture}
              </div>
              <div className="flex items-center gap-2">
                <Map className="w-4 h-4 text-gray-400 dark:text-gray-500" /> {p.surface}
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-gray-400 dark:text-gray-500" /> {p.eau}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
