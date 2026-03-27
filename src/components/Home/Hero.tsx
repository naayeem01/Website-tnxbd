import { ChevronRight, Play, ArrowUpRight, Cloud, Server, Database, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const techLogos = [
    { name: "AWS", icon: <Cloud size={24} /> },
    { name: "Digital Ocean", icon: <Server size={24} /> },
    { name: "Google Cloud", icon: <Cloud size={24} /> },
    { name: "Microsoft Azure", icon: <Cloud size={24} /> },
    { name: "MongoDB", icon: <Database size={24} /> },
    { name: "React", icon: <Globe size={24} /> },
    { name: "Node.js", icon: <Server size={24} /> }
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center pt-36 pb-12 overflow-hidden">
      {/* Premium Mesh Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-white">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-sky-200/50 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 py-2 px-4 bg-primary/5 border border-primary/10 text-primary rounded-full text-sm font-bold mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Leading IT Excellence in Bangladesh
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] text-text-primary tracking-tight">
              Innovating the <br />
              <span className="gradient-text italic">Future of Tech</span> <br />
              Successfully.
            </h1>
            
            <p className="text-lg text-text-secondary mb-8 max-w-lg leading-relaxed font-medium">
              TNXBD IT Solution brings world-class digital expertise to your doorstep. We build software that scales, websites that convert, and brands that dominate.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <Link to="/contact" className="btn-primary group py-4 px-10">
                Start Project <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="btn-outline group py-4 px-10">
                View Gallery <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Tech Partners Section inside Hero */}
            <div className="pt-8 border-t border-gray-100 overflow-hidden relative">
              <p className="text-xs uppercase tracking-[0.2em] font-black text-text-muted mb-6">Our Infrastructure Partners</p>
              
              <div className="flex relative overflow-hidden group/marquee">
                <div className="animate-marquee flex gap-12 items-center grayscale opacity-40 group-hover/marquee:grayscale-0 group-hover/marquee:opacity-100 transition-all duration-700">
                  {/* First Set of Logos */}
                  {techLogos.map((tech, i) => (
                    <div key={`tech-1-${i}`} className="flex items-center gap-3 group/tech cursor-pointer shrink-0">
                      <div className="text-text-primary group-hover/tech:text-primary transition-colors">
                        {tech.icon}
                      </div>
                      <span className="text-sm font-black text-text-primary tracking-tight">{tech.name}</span>
                    </div>
                  ))}
                  {/* Duplicate Set for Infinite Scroll */}
                  {techLogos.map((tech, i) => (
                    <div key={`tech-2-${i}`} className="flex items-center gap-3 group/tech cursor-pointer shrink-0">
                      <div className="text-text-primary group-hover/tech:text-primary transition-colors">
                        {tech.icon}
                      </div>
                      <span className="text-sm font-black text-text-primary tracking-tight">{tech.name}</span>
                    </div>
                  ))}
                </div>
                
                {/* Gradient Fades for Smooth Edges */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
              </div>
            </div>
          </div>

          <div className="relative group lg:block hidden" data-aos="fade-left" data-aos-delay="200">
            {/* Animated Glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2.5rem] blur-3xl opacity-30 group-hover:opacity-60 transition-opacity animate-pulse-soft"></div>
            
            {/* Main Interactive Media Container */}
            <div className="relative glass p-4 rounded-[3rem] shadow-2xl bg-white/20 border-white/30 backdrop-blur-md">
              <div className="relative rounded-[2rem] aspect-square overflow-hidden group/main">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover/main:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                
                {/* Play Button Overlay */}
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group/play z-10">
                  <Play fill="currentColor" size={20} className="ml-1 group-hover/play:scale-110 transition-transform" />
                </button>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl animate-float z-30 flex items-center gap-3 border-white/40">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shadow-inner">
                  <ChevronRight size={20} />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest font-black text-text-muted">Experience</p>
                  <p className="text-base font-black text-text-primary">5+ Years</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-10 glass p-4 rounded-2xl shadow-xl animate-float-oblique z-30 flex items-center gap-3 border-white/40">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center shadow-inner">
                  <span className="font-black text-sm">35+</span>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest font-black text-text-muted">Partners</p>
                  <p className="text-base font-black text-text-primary">Success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
