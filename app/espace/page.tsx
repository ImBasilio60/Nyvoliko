"use client";

import { useState, useEffect } from "react";
import {
  Sprout,
  Droplets,
  TrendingUp,
  Package,
  Sun,
  CloudRain,
  Cloud,
  Thermometer,
  Wind,
  Droplet,
} from "lucide-react";

const stats = [
  { label: "Cultures actives", value: "12", icon: Sprout, color: "text-brand-primary", bg: "bg-green-50 dark:bg-green-900/20" },
  { label: "Parcelles en cours", value: "8", icon: Droplets, color: "text-brand-accent", bg: "bg-blue-50 dark:bg-blue-900/20" },
  { label: "Rendement moyen", value: "+20%", icon: TrendingUp, color: "text-brand-highlight", bg: "bg-yellow-50 dark:bg-yellow-900/20" },
  { label: "Stocks disponibles", value: "15", icon: Package, color: "text-brand-primary", bg: "bg-green-50 dark:bg-green-900/20" },
];

const recentActions = [
  { action: "Arrosage effectué", parcelle: "Parcelle 3B - Maïs", time: "Il y a 2h" },
  { action: "Fertilisation planifiée", parcelle: "Parcelle 1A - Tomates", time: "Demain" },
  { action: "Récolte terminée", parcelle: "Parcelle 2C - Riz", time: "Hier" },
];

type WeatherData = {
  temp: number;
  feels_like: number;
  humidity: number;
  wind_speed: number;
  description: string;
  main: string;
  icon: string;
  rain?: number;
};

function getWeatherIcon(main: string) {
  switch (main) {
    case "Rain":
    case "Drizzle":
    case "Thunderstorm":
      return CloudRain;
    case "Clouds":
      return Cloud;
    case "Clear":
    case "Sunny":
      return Sun;
    default:
      return Cloud;
  }
}

function getAdvice(weather: WeatherData) {
  if (["Rain", "Drizzle", "Thunderstorm"].includes(weather.main)) {
    return { text: "Pluie détectée, pas d'arrosage nécessaire aujourd'hui", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" };
  }
  if (weather.main === "Snow") {
    return { text: "Neige au programme, pas d'arrosage", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-900/20" };
  }
  if (weather.temp > 30) {
    return { text: "Fortes chaleurs, arrosage conseillé en soirée", color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-50 dark:bg-yellow-900/20" };
  }
  return { text: "Temps sec, arrosage conseillé si nécessaire", color: "text-green-600 dark:text-green-400", bg: "bg-green-50 dark:bg-green-900/20" };
}

export default function DashboardPage() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = (lat: number, lon: number) => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric&lang=fr`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather({
            temp: Math.round(data.main.temp),
            feels_like: Math.round(data.main.feels_like),
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            description: data.weather[0].description,
            main: data.weather[0].main,
            icon: data.weather[0].icon,
            rain: data.rain?.["1h"],
          });
          setLoading(false);
        })
        .catch(() => setLoading(false));
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => fetchWeather(pos.coords.latitude, pos.coords.longitude),
        () => fetchWeather(-18.8792, 47.5079),
        { timeout: 5000 }
      );
    } else {
      fetchWeather(-18.8792, 47.5079);
    }
  }, []);

  return (
    <div className="space-y-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stat.label}
              </span>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Sun className="w-5 h-5 text-yellow-500" /> Météo du jour
          </h2>
          {loading ? (
            <p className="text-gray-500 dark:text-gray-400 text-sm">Chargement...</p>
          ) : weather ? (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                {(() => {
                  const Icon = getWeatherIcon(weather.main);
                  return <Icon className="w-12 h-12 text-brand-primary" />;
                })()}
                <div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{weather.temp}°C</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">{weather.description}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Thermometer className="w-4 h-4" /> {weather.feels_like}°C
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Droplet className="w-4 h-4" /> {weather.humidity}%
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Wind className="w-4 h-4" /> {weather.wind_speed} m/s
                </div>
              </div>
              <div className={`${getAdvice(weather).bg} rounded-lg px-4 py-3 ${getAdvice(weather).color} text-sm font-medium flex items-center gap-2`}>
                <Droplets className="w-4 h-4 flex-shrink-0" />
                {getAdvice(weather).text}
              </div>
            </div>
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-sm">Météo indisponible</p>
          )}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm">
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">
            Actions récentes
          </h2>
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {recentActions.map((item) => (
              <div key={item.action} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{item.action}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.parcelle}</p>
                </div>
                <span className="text-xs text-gray-400 dark:text-gray-500">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
