"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Map,
  Sprout,
  Settings,
  Sun,
  Moon,
  User,
  Leaf,
  Menu,
  X,
  ChevronLeft,
  LogOut,
} from "lucide-react";

const sidebarLinks = [
  { label: "Dashboard", href: "/espace", icon: LayoutDashboard },
  { label: "Stocks", href: "/espace/stocks", icon: Package },
  { label: "Localisation", href: "/espace/localisation", icon: Map },
  { label: "Cultures", href: "/espace/cultures", icon: Sprout },
  { label: "Paramètres", href: "/espace/parametres", icon: Settings },
];

export default function EspaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pageTitle = sidebarLinks.find((l) => l.href === pathname)?.label
    || (pathname.startsWith("/espace/localisation/") ? "Terrain" : "");
  const [collapsed, setCollapsed] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [userInfoOpen, setUserInfoOpen] = useState(false);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <aside
        className={`fixed inset-y-0 left-0 z-40 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-all duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } ${collapsed ? "w-16" : "w-64"}`}
      >
        <Link href="/espace" className={`flex items-center h-16 border-b border-gray-200 dark:border-gray-700 ${collapsed ? "justify-center px-4" : "px-6"}`}>
          <Leaf className="w-8 h-8 text-brand-primary flex-shrink-0" />
          <span className={`font-bold text-xl text-brand-dark dark:text-white ml-2 transition-opacity duration-300 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
            nyvoliko
          </span>
        </Link>

        <nav className="p-3 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center rounded-lg text-sm font-medium transition-colors ${
                  collapsed
                    ? "justify-center w-full py-2.5"
                    : "gap-3 px-4 py-2.5"
                } ${
                  isActive
                    ? "bg-brand-primary text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <link.icon className="w-5 h-5 flex-shrink-0" />
                <span className={`transition-opacity duration-300 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 w-6 h-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 shadow-sm transition-transform hidden lg:flex"
        >
          <ChevronLeft className={`w-3.5 h-3.5 transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </aside>

      <div className={`transition-all duration-300 ${collapsed ? "lg:pl-16" : "lg:pl-64"}`}>
        <header className="sticky top-0 z-30 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 lg:px-8">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 text-gray-500 dark:text-gray-400 hover:text-brand-dark dark:hover:text-white"
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="flex items-center gap-3">
            {pageTitle && <span className="text-lg font-semibold text-gray-900 dark:text-white">{pageTitle}</span>}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <User className="w-5 h-5" />
              </button>

              {userMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setUserMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        setUserInfoOpen(true);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <User className="w-4 h-4" /> Informations
                    </button>
                    <Link
                      href="/espace/parametres"
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Settings className="w-4 h-4" /> Paramètres
                    </Link>
                    <hr className="my-2 border-gray-100 dark:border-gray-700" />
                    <button
                      onClick={() => {
                        setUserMenuOpen(false);
                        setShowLogoutConfirm(true);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      <LogOut className="w-4 h-4" /> Déconnexion
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        <main className="p-6 lg:p-8">{children}</main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {showLogoutConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="fixed inset-0 bg-black/50" onClick={() => setShowLogoutConfirm(false)} />
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Déconnexion</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Êtes-vous sûr de vouloir vous déconnecter ?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
              >
                Annuler
              </button>
              <button
                onClick={() => {
                  setShowLogoutConfirm(false);
                  router.push("/login");
                }}
                className="flex-1 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition-colors text-sm"
              >
                Se déconnecter
              </button>
            </div>
          </div>
        </div>
      )}

      {userInfoOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/30" onClick={() => setUserInfoOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white dark:bg-gray-800 shadow-xl border-l border-gray-200 dark:border-gray-700 transform transition-transform duration-300 translate-x-0">
            <div className="flex items-center justify-between px-6 h-16 border-b border-gray-200 dark:border-gray-700">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white">Informations</h2>
              <button
                onClick={() => setUserInfoOpen(false)}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4 pb-6 border-b border-gray-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                  J
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-900 dark:text-white">Jean</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Agriculteur</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-sm text-gray-900 dark:text-white">jean@example.com</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Téléphone</p>
                  <p className="text-sm text-gray-900 dark:text-white">+261 34 00 000 00</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Localisation</p>
                  <p className="text-sm text-gray-900 dark:text-white">Région d'Antananarivo, Madagascar</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">Membre depuis</p>
                  <p className="text-sm text-gray-900 dark:text-white">Janvier 2026</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
