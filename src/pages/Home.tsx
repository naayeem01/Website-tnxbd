import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import Hero from '../components/Home/Hero';
import ServiceCard from '../components/Home/ServiceCard';
import CounterSection from '../components/Home/Counter';
import { Code, Smartphone, Globe, Shield, Database, BarChart } from 'lucide-react';
import ClientCard from '../components/Clients/ClientCard';
import { clientsData } from './Clients';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Node.js, and Python.",
      delay: 0
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "High-performance iOS and Android apps that provide seamless user experiences.",
      delay: 100
    },
    {
      icon: Database,
      title: "Software Solutions",
      description: "Enterprise-grade software tailored to your business needs, from ERP to custom CRM systems.",
      delay: 200
    },
    {
      icon: Shield,
      title: "IT Support & Security",
      description: "24/7 technical support and robust cybersecurity solutions to protect your digital assets.",
      delay: 300
    },
    {
      icon: Globe,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services using AWS, Azure, and Google Cloud.",
      delay: 400
    },
    {
      icon: BarChart,
      title: "Digital Strategy",
      description: "Data-driven insights and digital transformation strategies to grow your business globally.",
      delay: 500
    }
  ];

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
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CounterSection />

      {/* Featured Portfolio Section (Compact) */}
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
            <div className="group relative rounded-3xl overflow-hidden aspect-video shadow-lg" data-aos="zoom-in-right">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80" alt="Project 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2">E-Commerce Ecosystem</h3>
                <p className="text-gray-300">Web Development • USA Client</p>
              </div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden aspect-video shadow-lg" data-aos="zoom-in-left">
              <img src="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=1170&q=80" alt="Project 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold mb-2">FinTech Mobile App</h3>
                <p className="text-gray-300">App Development • UK Client</p>
              </div>
            </div>
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
            {clientsData.slice(0, 3).map((client) => (
              <ClientCard key={client.id} {...client} />
            ))}
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
