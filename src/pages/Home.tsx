import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Home/Hero';
import ServiceCard from '../components/Home/ServiceCard';
import CounterSection from '../components/Home/Counter';
import ClientCard from '../components/Clients/ClientCard';
import { useServices, usePortfolio, useClients } from '../hooks/useData';
import LoadingSkeleton from '../components/Common/LoadingSkeleton';
import { getIcon } from '../lib/icons';

const Home = () => {
  const { data: services, loading: servicesLoading } = useServices();
  const { data: portfolio, loading: portfolioLoading } = usePortfolio();
  const { data: clients, loading: clientsLoading } = useClients();

  return (
    <Layout>
      <SEO 
        title="Home" 
        description="TNXBD IT Solution brings world-class digital expertise to your doorstep. We build software that scales, websites that convert, and brands that dominate." 
        keywords="IT Solutions, Web Development, Software Development, Digital Transformation, Bangladesh IT, TNXBD"
      />
      <Hero />
      
      {/* Services Section */}
      <section className="section-padding bg-bg-secondary">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our <span className="text-primary">Services</span></h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We offer a wide range of IT services to help businesses thrive in the digital age. Our solutions are innovative, scalable, and tailored to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesLoading ? (
              <LoadingSkeleton count={6} />
            ) : services.length > 0 ? (
              services.map((service, index) => {
                const Icon = getIcon(service.icon_name);
                return (
                  <ServiceCard 
                    key={service.id || index} 
                    icon={Icon}
                    title={service.title}
                    description={service.description}
                    delay={index * 100}
                  />
                );
              })
            ) : (
              <div className="col-span-full text-center py-10 text-text-muted font-bold tracking-widest uppercase italic">No services available.</div>
            )}
          </div>
        </div>
      </section>

      <CounterSection />

      {/* Featured Portfolio Section */}
      <section className="section-padding overflow-hidden">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div data-aos="fade-right">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Success <span className="text-primary">Stories</span></h2>
              <p className="text-text-secondary max-w-xl">
                Take a look at some of our recent projects. We take pride in delivering high-quality solutions that exceed our clients' expectations.
              </p>
            </div>
            <div data-aos="fade-left">
              <a href="/portfolio" className="btn-outline">View All Projects</a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioLoading ? (
              <>
                <div className="bg-bg-secondary rounded-3xl aspect-video animate-pulse"></div>
                <div className="bg-bg-secondary rounded-3xl aspect-video animate-pulse"></div>
              </>
            ) : portfolio.length > 0 ? (
              portfolio.slice(0, 2).map((item, i) => (
                <div key={item.id} className="group relative rounded-3xl overflow-hidden aspect-video shadow-lg" data-aos={i === 0 ? "zoom-in-right" : "zoom-in-left"}>
                  <img src={item.image_url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <h3 className="text-white text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.category}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-text-muted font-bold tracking-widest uppercase italic">No projects showcase yet.</div>
            )}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-bg-accent">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div data-aos="fade-right">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">What Our Clients <span className="text-primary">Say</span></h2>
              <p className="text-text-secondary max-w-xl">
                We believe in building long-term relationships. Here's what some of our valued partners have to say about working with us.
              </p>
            </div>
            <div data-aos="fade-left">
              <a href="/clients" className="btn-outline">View All Clients</a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientsLoading ? (
              <LoadingSkeleton count={3} />
            ) : clients.length > 0 ? (
              clients.slice(0, 3).map((client) => (
                <ClientCard 
                  key={client.id} 
                  {...client} 
                  logo={client.logo_url}
                  avatar={client.avatar_url}
                  socials={{
                    linkedin: client.linkedin_url,
                    website: client.website_url
                  }}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10 text-text-muted font-bold tracking-widest uppercase italic">No client reviews yet.</div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden" data-aos="zoom-in">
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8">Ready to Start Your <br />Next Big Project?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join hundreds of happy clients and let's build something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-primary py-4 px-10 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors">Contact Us Now</a>
              <a href="/services" className="bg-transparent border-2 border-white/50 text-white py-4 px-10 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">Our Services</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
