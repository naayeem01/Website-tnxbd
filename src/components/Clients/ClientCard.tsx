import React from 'react';
import { Star, Globe, Quote } from 'lucide-react';

export interface Client {
  id: number;
  name: string;
  role: string;
  company: string;
  logo: string;
  avatar: string;
  testimonial: string;
  rating: number;
  socials: {
    linkedin?: string;
    website?: string;
  };
}

const ClientCard: React.FC<Client> = ({ name, role, company, logo, avatar, testimonial, rating, socials }) => {
  return (
    <div 
      className="glass p-8 rounded-[2.5rem] shadow-lg border border-white/50 bg-white/40 hover:bg-white/60 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 blur-2xl"></div>
      
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-white shadow-inner p-2 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
           <img src={logo} alt={company} className="max-w-full max-h-full object-contain" />
        </div>
        <div className="flex gap-1 text-orange-400">
          {[...Array(rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
        </div>
      </div>

      <div className="relative mb-8 pt-4">
        <Quote className="absolute -top-2 -left-2 text-primary/10 w-12 h-12 -z-10 rotate-180" />
        <p className="text-text-secondary italic leading-relaxed font-medium">
          "{testimonial}"
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100/50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full ring-2 ring-primary/10 overflow-hidden shadow-sm">
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-bold text-text-primary text-lg">{name}</h4>
            <p className="text-xs text-text-muted font-bold tracking-wider uppercase">{role}, {company}</p>
          </div>
        </div>
        <div className="flex gap-2">
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-primary/5 text-primary rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
              <Globe size={18} />
            </a>
          )}
          {socials.website && (
            <a href={socials.website} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-bg-accent text-text-muted rounded-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
              <Globe size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
