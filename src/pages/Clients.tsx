import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import ClientCard from '../components/Clients/ClientCard';
import { Users, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import { useClients } from '../hooks/useData';
import LoadingSkeleton from '../components/Common/LoadingSkeleton';

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: clients, loading, error } = useClients();

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    client.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <SEO 
        title="Our Clients" 
        description="Meet our global partners and clients. TNXBD IT Solution brings world-class digital expertise to diverse industries." 
        keywords="Our Clients, Partners, Business Success, Global Projects"
      />
      <section className="pt-40 pb-24 bg-bg-accent relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -z-10 blur-[120px]"></div>
        <div className="container" data-aos="fade-up">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 py-2 px-4 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
              <Users size={16} /> Our Global Partners
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 text-text-primary tracking-tight">Meet Our <span className="text-primary italic">Clients</span></h1>
            <p className="text-xl text-text-secondary leading-relaxed font-medium">
              We take pride in our diverse client portfolio. From startups to global enterprises, we value every partnership and strive for collective success.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6" data-aos="fade-up">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
              <input 
                type="text" 
                placeholder="Search clients or companies..." 
                className="w-full pl-12 pr-6 py-4 bg-bg-secondary rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 border-none transition-all shadow-inner"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-4 bg-bg-secondary rounded-2xl font-bold hover:bg-bg-accent transition-colors shadow-sm">
                <Filter size={18} /> Filter by Industry
              </button>
            </div>
          </div>

          {/* Client Grid */}
          {loading ? (
            <LoadingSkeleton count={6} />
          ) : error ? (
            <div className="text-center py-20 bg-rose-50 rounded-[3rem] border border-rose-100">
              <p className="text-rose-600 font-bold text-xl">Error loading testimonials: {error}</p>
              <button onClick={() => window.location.reload()} className="mt-4 btn-primary">Try Again</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClients.map((client) => (
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
              ))}
            </div>
          )}

          {filteredClients.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl font-bold text-text-muted">No clients found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding">
        <div className="container">
          <div className="glass-dark p-12 lg:p-20 rounded-[4rem] text-center relative overflow-hidden bg-text-primary shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 relative z-10">Join Our Network of Success</h2>
            <p className="text-blue-100/70 text-xl max-w-2xl mx-auto mb-10 relative z-10">
              Your success is our priority. Let's build a lasting partnership and achieve your business goals together.
            </p>
            <button className="btn-primary py-5 px-12 text-lg relative z-10">
              Become a Partner
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
