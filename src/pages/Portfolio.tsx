import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    { id: 1, title: "FinTech App", category: "Mobile App", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" },
    { id: 2, title: "E-Commerce Platform", category: "Web Dev", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80" },
    { id: 3, title: "Smart City ERP", category: "Software", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" },
    { id: 4, title: "Health Monitoring", category: "Mobile App", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" },
    { id: 5, title: "Real Estate Portal", category: "Web Dev", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80" },
    { id: 6, title: "Logistics Manager", category: "Software", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" },
  ];

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
            <h1 className="text-5xl font-bold mb-6">Our <span className="text-primary">Portfolio</span></h1>
            <p className="text-xl text-text-secondary">
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
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  filter === cat ? 'bg-primary text-white shadow-lg' : 'bg-bg-secondary text-text-primary hover:bg-bg-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg" 
                data-aos="zoom-in"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <span className="text-primary font-semibold mb-2">{project.category}</span>
                  <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
