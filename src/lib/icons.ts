import { 
  Globe, 
  Smartphone, 
  Shield, 
  Database, 
  BarChart, 
  Server, 
  Cpu, 
  Layout as LayoutIcon,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Building2,
  type LucideIcon
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  Globe,
  Smartphone,
  Shield,
  Database,
  BarChart,
  Server,
  Cpu,
  Layout: LayoutIcon,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Building2,
};

export const getIcon = (name: string): LucideIcon => {
  return iconMap[name] || Globe;
};
