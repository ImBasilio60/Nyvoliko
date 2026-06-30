import { Package, AlertTriangle, CheckCircle } from "lucide-react";

const stockItems = [
  { name: "Engrais NPK 15-15-15", quantity: "250 kg", seuil: "50 kg", status: "ok" },
  { name: "Insecticide biologique", quantity: "15 L", seuil: "20 L", status: "warning" },
  { name: "Semences maïs hybride", quantity: "10 kg", seuil: "30 kg", status: "warning" },
  { name: "Fongicide cuivre", quantity: "5 L", seuil: "10 L", status: "warning" },
  { name: "Herbicide sélectif", quantity: "40 L", seuil: "10 L", status: "ok" },
  { name: "Tuyau d'arrosage", quantity: "100 m", seuil: "50 m", status: "ok" },
  { name: "Gants de protection", quantity: "3 paires", seuil: "5 paires", status: "warning" },
  { name: "Engrais organique", quantity: "500 kg", seuil: "100 kg", status: "ok" },
];

export default function StocksPage() {
  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <th className="text-left px-6 py-3 font-semibold text-gray-600 dark:text-gray-400">Produit</th>
                <th className="text-left px-6 py-3 font-semibold text-gray-600 dark:text-gray-400">Quantité</th>
                <th className="text-left px-6 py-3 font-semibold text-gray-600 dark:text-gray-400">Seuil</th>
                <th className="text-left px-6 py-3 font-semibold text-gray-600 dark:text-gray-400">Statut</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {stockItems.map((item) => (
                <tr key={item.name} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                  <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">{item.name}</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{item.quantity}</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{item.seuil}</td>
                  <td className="px-6 py-4">
                    {item.status === "ok" ? (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
                        <CheckCircle className="w-4 h-4" /> OK
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-yellow-600 dark:text-yellow-400">
                        <AlertTriangle className="w-4 h-4" /> À réapprovisionner
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
