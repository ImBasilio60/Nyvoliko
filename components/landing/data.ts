import {
  Sprout,
  Map,
  CloudRain,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

interface NavLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const features: Feature[] = [
  {
    icon: Sprout,
    title: "Gestion des cultures",
    description:
      "Suivez l'évolution de toutes vos cultures en cours en temps réel, de la semence à la récolte.",
    iconColor: "text-brand-primary",
  },
  {
    icon: Map,
    title: "Parcelles & planning",
    description:
      "Visualisez vos parcelles, celles en culture et celles disponibles pour optimiser votre espace.",
    iconColor: "text-brand-primary",
  },
  {
    icon: CloudRain,
    title: "Météo & Actions",
    description:
      "Recevez des recommandations d'arrosage ou de traitement adaptées aux prévisions locales.",
    iconColor: "text-brand-accent",
  },
  {
    icon: BarChart3,
    title: "Rapports & revenus",
    description:
      "Analysez vos performances et augmentez vos revenus année après année grâce aux statistiques.",
    iconColor: "text-brand-highlight",
  },
];

const testimonials: Testimonial[] = [
  {
    quote: "Depuis que j'utilise Nyvoliko, mes dépenses en eau ont diminué de 30% et mes récoltes ont augmenté. C'est l'outil qui manquait à ma ferme.",
    name: "Jean Paul",
    role: "Maïsiculteur",
    avatar: "https://i.pravatar.cc/100?img=11",
  },
  {
    quote: "Les recommandations météo m'aident à toujours prendre les bonnes décisions au bon moment. Fini le stress des traitements emportés par la pluie.",
    name: "Marie Claire",
    role: "Maraîchère",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    quote: "Une application simple, fiable et vraiment adaptée à nos réalités d'agriculteurs. L'interface est claire, même pour quelqu'un qui n'est pas très tech.",
    name: "Andry",
    role: "Riziculteur",
    avatar: "https://i.pravatar.cc/100?img=8",
  },
];

const benefits: string[] = [
  "Évitez les dépenses inutiles (eau, engrais)",
  "Agissez au bon moment selon la météo",
  "Améliorez vos rendements par culture",
  "Suivez vos progrès facilement sur mobile",
];

const footerColumns: FooterColumn[] = [
  {
    title: "Produit",
    links: [
      { label: "Fonctionnalités", href: "#" },
      { label: "Tarifs", href: "#" },
      { label: "Mises à jour", href: "#" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Blog Agricole", href: "#" },
      { label: "Guides pratiques", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Mentions légales", href: "#" },
    ],
  },
];

const navLinks: NavLink[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Avantages", href: "#avantages" },
  { label: "Témoignages", href: "#temoignages" },
];

export type { Feature, Testimonial, FooterColumn };
export { features, testimonials, benefits, footerColumns, navLinks };
