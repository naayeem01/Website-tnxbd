import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import { Layout as LayoutIcon, Globe, Smartphone, Shield, Database, BarChart, Server, Cpu } from 'lucide-react';
import ServiceCard from '../components/Home/ServiceCard';

const Services = () => {
  const allServices = [
    { icon: Globe, title: "Web Development", description: "Modern, responsive, and SEO-optimized websites." },
    { icon: Smartphone, title: "Mobile Apps", description: "iOS and Android apps with native performance." },
    { icon: Database, title: "Software Solutions", description: "Custom ERP, CRM, and business automation tools." },
    { icon: Shield, title: "Cybersecurity", description: "Protecting your data from evolving digital threats." },
    { icon: Server, title: "Cloud Computing", description: "AWS, Azure, and Google Cloud infrastructure." },
    { icon: BarChart, title: "Digital Marketing", description: "SEO, SEM, and social media growth strategies." },
    { icon: Cpu, title: "AI & Machine Learning", description: "Smart solutions to automate complex tasks." },
    { icon: LayoutIcon, title: "UI/UX Design", description: "User-centric designs that convert and engage." },
  ];

  return (
    <Layout>
      <SEO 
        title="Our Services" 
        description="Explore our premium IT solutions including web development, mobile apps, bespoke software, and cybersecurity." 
        keywords="Web Development Services, Mobile App Development, Cybersecurity Solutions, Cloud Computing, UI/UX Design"
      />
      <section className="pt-40 pb-24 bg-bg-secondary">
        <div className="container">
          <div className="max-w-3xl text-center mx-auto" data-aos="fade-up">
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight text-text-primary">Our <span className="text-primary">Expertise</span></h1>
            <p className="text-xl text-text-secondary leading-relaxed font-medium">
              We provide end-to-end technology solutions to help your business stay ahead in a competitive market.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} delay={index * 50} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Section */}
      <section className="section-padding bg-text-primary text-white overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-bold mb-8">How We <span className="text-primary">Deliver</span> Excellence</h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Discovery", desc: "We understand your business goals and requirements thoroughly." },
                  { step: "02", title: "Planning", desc: "Creating a detailed roadmap and architecture for your solution." },
                  { step: "03", title: "Execution", desc: "Agile development with continuous feedback and improvements." },
                  { step: "04", title: "Deployment", desc: "Seamless launch and ongoing support for your product." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-8 rounded-3xl hover:bg-white/5 transition-all duration-300 border border-white/10 glass-dark group">
                    <span className="text-4xl font-black text-primary group-hover:scale-110 transition-transform">{item.step}</span>
                    <div>
                      <h4 className="text-xl font-extrabold mb-3 text-white">{item.title}</h4>
                      <p className="text-blue-100/70 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"></div>
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Process" className="relative z-10 rounded-[3rem] shadow-2xl rotate-3" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
