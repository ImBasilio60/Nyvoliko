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
      "Gardez un œil sur chaque cycle de culture, du semis à la récolte, avec des rappels pour chaque étape clé.",
    iconColor: "text-brand-primary",
  },
  {
    icon: Map,
    title: "Parcelles & planning",
    description:
      "Cartographiez vos terrains et visualisez en un coup d'œil les disponibilités pour mieux organiser vos rotations.",
    iconColor: "text-brand-primary",
  },
  {
    icon: CloudRain,
    title: "Météo & Actions",
    description:
      "Anticipez les caprices du ciel avec des prévisions localisées et des conseils adaptés à vos cultures.",
    iconColor: "text-brand-accent",
  },
  {
    icon: BarChart3,
    title: "Rapports & revenus",
    description:
      "Suivez l'évolution de vos performances et identifiez vos cultures les plus rentables saison après saison.",
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
  "Moins de gaspillage, plus d'économies sur chaque parcelle",
  "Des interventions agricoles calées sur la météo",
  "Des rendements qui grimpent saison après saison",
  "Un tableau de bord dans votre poche, accessible partout",
];

const footerColumns: FooterColumn[] = [
  {
    title: "Produit",
    links: [
      { label: "Accueil", href: "/" },
      { label: "Fonctionnalités", href: "/fonctionnalites" },
      { label: "Avantages", href: "/avantages" },
      { label: "Témoignages", href: "/temoignages" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Blog Agricole", href: "/blog" },
      { label: "Guides pratiques", href: "/guides" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Contact", href: "/contact" },
      { label: "Mentions légales", href: "/mentions-legales" },
    ],
  },
];

const navLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Fonctionnalités", href: "/fonctionnalites" },
  { label: "Avantages", href: "/avantages" },
  { label: "Témoignages", href: "/temoignages" },
];

export type { Feature, Testimonial, FooterColumn };
export { features, testimonials, benefits, footerColumns, navLinks };
