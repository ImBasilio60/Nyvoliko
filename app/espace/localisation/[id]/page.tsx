"use client";

import { useState } from "react";
import { MapPin, Droplets, Sprout, Plus, X, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const terrains: Record<string, { nom: string; localisation: string; parcelles: { nom: string; culture: string; surface: string; eau: string }[] }> = {
  "1": {
    nom: "Terrain Nord",
    localisation: "Antananarivo",
    parcelles: [
      { nom: "Parcelle A", culture: "Maïs", surface: "2.5 ha", eau: "Arrosage dans 2j" },
      { nom: "Parcelle B", culture: "Tomates", surface: "1.2 ha", eau: "Arrosé aujourd'hui" },
      { nom: "Parcelle C", culture: "Riz", surface: "1.5 ha", eau: "Arrosage demain" },
    ],
  },
  "2": {
    nom: "Terrain Est",
    localisation: "Toamasina",
    parcelles: [
      { nom: "Parcelle D", culture: "Haricots", surface: "2.0 ha", eau: "Dans 3j" },
      { nom: "Parcelle E", culture: "Manioc", surface: "1.8 ha", eau: "Non applicable" },
    ],
  },
  "3": {
    nom: "Terrain Ouest",
    localisation: "Mahajanga",
    parcelles: [
      { nom: "Parcelle F", culture: "Coton", surface: "4.5 ha", eau: "Arrosage dans 5j" },
    ],
  },
};

export default function TerrainPage() {
  const { id } = useParams<{ id: string }>();
  const terrain = terrains[id];
  const [open, setOpen] = useState(false);

  if (!terrain) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 dark:text-gray-400">Terrain introuvable</p>
        <Link href="/espace/localisation" className="text-brand-primary hover:underline mt-4 inline-block">Retour</Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <Link href="/espace/localisation" className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-brand-dark dark:hover:text-white mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Localisation
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">{terrain.nom}</h1>
            <p className="text-gray-500 dark:text-gray-400">{terrain.localisation}</p>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 bg-brand-primary hover:bg-green-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg text-sm"
          >
            <Plus className="w-4 h-4" /> Nouvelle parcelle
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {terrain.parcelles.map((p) => (
          <div key={p.nom} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center text-brand-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white">{p.nom}</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Sprout className="w-4 h-4 text-gray-400 dark:text-gray-500" /> {p.culture}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500" /> {p.surface}
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-gray-400 dark:text-gray-500" /> {p.eau}
              </div>
            </div>
          </div>
        ))}
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
                <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all" placeholder="Parcelle G" />
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
    </div>
  );
}
