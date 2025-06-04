import { 
  UtensilsCrossed, 
  Smartphone, 
  IceCream, 
  MessageCircle, 
  UserCircle,
  MapPin,
  Star
} from 'lucide-react';

export const RESTAURANT_INFO = {
  name: "Liá Bistrô",
  slogan: "Bistrô brasileiro de essência paraibana e coração cajazeirense",
  logo: "/lia-bistro-cajazeiras.png",
  address: "Av. Dr. Aldo Matos de Sá, 1030 - Centro, Cajazeiras - PB, 58900-000",
  year: new Date().getFullYear(),
};

export interface LinkButtonProps {
  text: string;
  url: string;
  icon: typeof UtensilsCrossed;
  special?: boolean;
  bgColorOnHover?: string;
}

export const LINKS: LinkButtonProps[] = [
  {
    text: "Pedir Delivery",
    url: "https://liabistro.com.br/",
    icon: UtensilsCrossed,
    special: true
  },
  {
    text: "App Quero Delivery",
    url: "https://querodelivery.app.link/NZV8Xz8CHMb",
    icon: Smartphone
  },
  {
    text: "Liá Gelato Artesanal",
    url: "https://www.instagram.com/liagelatopuro/",
    icon: IceCream
  },
  {
    text: "Atendimento no WhatsApp",
    url: "http://wa.me/5583988801021",
    icon: MessageCircle,
    bgColorOnHover: "#25D366"
  },
  {
    text: "Falar com Gestão",
    url: "http://wa.me/558393206539",
    icon: UserCircle
  },
  {
    text: "Onde Estamos",
    url: "https://maps.app.goo.gl/Jvj3UEh3fPzHBeCFA",
    icon: MapPin
  },
  {
    text: "Avalie-nos no Google",
    url: "https://g.page/r/CcyUihsVEXr2EBM/review",
    icon: Star
  }
];

export interface ScheduleItem {
  days: string;
  hours: string;
}

export const SCHEDULE: ScheduleItem[] = [
  {
    days: "Segunda e Terça",
    hours: "11:30 às 21:00"
  },
  {
    days: "Quarta à Sexta",
    hours: "11:30 às 22:30"
  },
  {
    days: "Sábado",
    hours: "11:30 às 23:00"
  }
];