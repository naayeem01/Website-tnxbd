import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import { usePortfolio } from '../hooks/useData';
import LoadingSkeleton from '../components/Common/LoadingSkeleton';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const { data: projects, loading, error } = usePortfolio();

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <Layout>
      <SEO 
        title="Portfolio" 
        description="View our successful projects, including FinTech apps, E-Commerce platforms, and Smart ERP solutions." 
        keywords="Portfolio, Project Showcase, E-commerce Portfolio, Fintech Apps, ERP Solutions"
      />
      <section className="pt-40 pb-24 bg-bg-accent">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h1 className="text-5xl font-bold mb-6 tracking-tighter uppercase tracking-tighter">Our <span className="text-primary italic">Portfolio</span></h1>
            <p className="text-xl text-text-secondary leading-relaxed font-medium">
              A collection of our best work across various industries. We bring ideas to life.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            {['All', 'Web Dev', 'Mobile App', 'Software'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  filter === cat ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-bg-secondary text-text-primary hover:bg-bg-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <LoadingSkeleton count={6} />
          ) : error ? (
            <div className="text-center py-20 bg-rose-50 rounded-[3rem] border border-rose-100">
              <p className="text-rose-600 font-bold text-xl">Error loading portfolio: {error}</p>
              <button onClick={() => window.location.reload()} className="mt-4 btn-primary">Try Again</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-xl border border-white/40" 
                  data-aos="zoom-in"
                >
                  <img src={project.image_url} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <span className="text-primary font-bold mb-2 uppercase tracking-widest text-sm">{project.category}</span>
                    <h3 className="text-white text-2xl font-black tracking-tight">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

    </Layout>
  );
};

export default Portfolio;
