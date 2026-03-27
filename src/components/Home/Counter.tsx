import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const CounterItem: React.FC<CounterProps> = ({ end, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end]);

  return (
    <div ref={elementRef} className="text-center group">
      <div className="text-4xl lg:text-6xl font-black text-white mb-3 transition-transform group-hover:scale-110 duration-500">
        {count}{suffix}
      </div>
      <div className="text-blue-100/60 font-bold uppercase tracking-[0.2em] text-xs lg:text-sm">
        {label}
      </div>
    </div>
  );
};

const CounterSection = () => {
  const stats = [
    { end: 5, suffix: "+", label: "Years Experience" },
    { end: 500, suffix: "+", label: "Projects Completed" },
    { end: 35, suffix: "+", label: "Happy Clients" },
    { end: 10, suffix: "+", label: "Tech Experts" },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-950 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px]"></div>
      </div>
      <div className="container">
        <div className="glass-dark p-12 lg:p-20 rounded-[3.5rem] border-white/5 shadow-2xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-primary/30 rounded-full blur-[2px]"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-x divide-white/5">
            {stats.map((stat, index) => (
              <div key={index} className={index === 0 ? "" : "lg:pl-8"}>
                <CounterItem {...stat} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
