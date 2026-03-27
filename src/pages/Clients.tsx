import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import ClientCard, { type Client } from '../components/Clients/ClientCard';
import { Users, Search, Filter } from 'lucide-react';
import { useState } from 'react';

// Mock Client Data
export const clientsData: Client[] = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    company: "TechNova UK",
    logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    avatar: "https://i.pravatar.cc/150?u=client1",
    testimonial: "TNXBD IT Solution has been a game-changer for our business. Their technical expertise and dedication are unmatched. Highly recommended!",
    rating: 5,
    socials: { linkedin: "https://linkedin.com", website: "https://technova.co.uk" }
  },
  {
    id: 2,
    name: "Sarah Ahmed",
    role: "Founder",
    company: "EcoStore BD",
    logo: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    avatar: "https://i.pravatar.cc/150?u=client2",
    testimonial: "The mobile app they developed for us has significantly increased our customer engagement. The team is professional and very responsive.",
    rating: 5,
    socials: { linkedin: "https://linkedin.com", website: "https://ecostore.com.bd" }
  },
  {
    id: 3,
    name: "Robert Wilson",
    role: "Director",
    company: "Global Logistics",
    logo: "https://images.unsplash.com/photo-1614850523020-c05b2209c75a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    avatar: "https://i.pravatar.cc/150?u=client3",
    testimonial: "Exceptional ERP solution. It streamlined our entire supply chain process. Their post-deployment support is outstanding.",
    rating: 5,
    socials: { linkedin: "https://linkedin.com", website: "https://globallogistics.com" }
  },
  {
    id: 4,
    name: "Emily Chen",
    role: "Marketing Head",
    company: "Visionary Group",
    logo: "https://images.unsplash.com/photo-1627163430034-032240209423?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    avatar: "https://i.pravatar.cc/150?u=client4",
    testimonial: "Their creative design and web development skills transformed our brand identity. We've seen a 40% increase in lead generation.",
    rating: 5,
    socials: { linkedin: "https://linkedin.com", website: "https://visionarygroup.com" }
  },
  {
    id: 5,
    name: "David Smith",
    role: "CTO",
    company: "DataStream USA",
    logo: "https://images.unsplash.com/photo-1614850523020-c05b2209c75a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    avatar: "https://i.pravatar.cc/150?u=client5",
    testimonial: "A truly talented team of engineers. They handled our complex cloud migration with zero downtime. Reliable and cost-effective.",
    rating: 5,
    socials: { linkedin: "https://linkedin.com", website: "https://datastream.ai" }
  },
  {
    id: 6,
    name: "Nabila Tabassum",
    role: "Principal",
    company: "Springfield School",
    logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    avatar: "https://i.pravatar.cc/150?u=client6",
    testimonial: "The school management system (EduSmart) has made our administrative tasks much easier. Excellent support and regular updates.",
    rating: 5,
    socials: { linkedin: "https://linkedin.com", website: "https://springfield.edu.bd" }
  }
];

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClients = clientsData.filter(client => 
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClients.map((client) => (
              <ClientCard key={client.id} {...client} />
            ))}
          </div>

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
