import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import { Target, Eye, Award, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <SEO 
        title="About Us" 
        description="TNXBD IT Solution started with a vision to revolutionize the digital landscape of Bangladesh and beyond." 
        keywords="About TNXBD, IT Mission, Tech Visionaries, Software Company History"
      />
      <section className="pt-40 pb-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl" data-aos="fade-right">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight">Our Story & <br /><span className="text-blue-200">Mission</span></h1>
            <p className="text-xl text-blue-50 leading-relaxed font-medium">
              TNXBD IT Solution started with a vision to revolutionize the digital landscape of Bangladesh and beyond. We are a team of passionate innovators dedicated to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Team" className="rounded-[2rem] shadow-2xl" />
            </div>
            <div className="space-y-8" data-aos="fade-left">
              <h2 className="text-4xl font-bold">Why Choose <span className="text-primary">TNXBD?</span></h2>
              <p className="text-lg text-text-secondary">
                With over a decade of experience, we've helped hundreds of businesses transform their operations through technology. Our approach is client-centric, focusing on results and long-term partnerships.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Expert Team Professionals",
                  "24/7 Technical Support",
                  "Global Standard Quality",
                  "On-time Project Delivery",
                  "Innovative Solutions",
                  "Strategic Consultancy"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-primary" size={20} />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-secondary">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass p-10 text-center rounded-[2rem] hover:bg-white transition-all duration-500" data-aos="fade-up">
              <div className="mx-auto w-16 h-16 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">Our Mission</h3>
              <p className="text-text-secondary">
                To empower businesses with innovative IT solutions that drive growth and create lasting value in the global market.
              </p>
            </div>
            <div className="glass p-10 text-center rounded-[2rem] hover:bg-white transition-all duration-500" data-aos="fade-up" data-aos-delay="100">
              <div className="mx-auto w-16 h-16 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">Our Vision</h3>
              <p className="text-text-secondary">
                To be the most trusted and influential IT solution provider in Bangladesh, recognized worldwide for our excellence and innovation.
              </p>
            </div>
            <div className="glass p-10 text-center rounded-[2rem] hover:bg-white transition-all duration-500" data-aos="fade-up" data-aos-delay="200">
              <div className="mx-auto w-16 h-16 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-primary">Core Values</h3>
              <p className="text-text-secondary">
                Integrity, Innovation, Customer Success, and Continuous Excellence are the pillars that guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our <span className="text-primary">Leadership</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group" data-aos="zoom-in" data-aos-delay={i * 100}>
                <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-100 aspect-[3/4]">
                  <img src={`https://i.pravatar.cc/400?u=team${i}`} alt="Leader" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h4 className="text-xl font-bold">Team Member {i}</h4>
                <p className="text-text-muted">Executive Director</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
