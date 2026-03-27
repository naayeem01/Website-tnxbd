import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <div className="glass p-10 h-full flex flex-col items-start gap-8 group rounded-[2rem] hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border-white/50" data-aos="fade-up" data-aos-delay={delay}>
      <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
        <Icon size={32} />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
      <a href="/services" className="mt-auto text-primary font-bold flex items-center gap-2 group/link">
        Explore Service 
        <span className="group-hover/link:translate-x-2 transition-transform">→</span>
      </a>
    </div>
  );
};

export default ServiceCard;
