import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      desc: "Perfect for small businesses starting their digital journey.",
      features: ["Basic Web Design", "Responsive Layout", "Contact Form", "3 Revisions", "1 Year Support"],
      notIncluded: ["SEO Optimization", "E-commerce Features", "Payment Gateway"],
      highlight: false
    },
    {
      name: "Professional",
      desc: "Ideal for growing businesses needing a professional presence.",
      features: ["Premium Design", "SEO Optimization", "E-commerce Setup", "Unlimited Revisions", "2 Years Support", "Social Media Integration"],
      notIncluded: ["Custom CRM/ERP", "24/7 Priority Support"],
      highlight: true
    },
    {
      name: "Enterprise",
      desc: "Tailored solutions for large-scale enterprise requirements.",
      features: ["Custom Software", "Advanced Security", "Full API Integration", "Dedicated Project Manager", "Lifetime Support", "24/7 Priority Support"],
      notIncluded: [],
      highlight: false
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Quotation" 
        description="Request a personalized quotation for custom web and software solutions tailored to your unique business needs." 
        keywords="Pricing, Quotation, Project Cost, Custom Software Quote"
      />
      <section className="pt-40 pb-24 bg-primary text-white overflow-hidden relative">
        <div className="container" data-aos="fade-up">
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 text-text-primary tracking-tight">Tailored Solutions & <span className="text-primary italic">Quotations</span></h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed font-medium">
            We provide custom solutions tailored to your unique business needs. Request a personalized quotation for your project.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`glass p-12 relative flex flex-col rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border-white/50 bg-white/40 ${plan.highlight ? 'ring-2 ring-primary scale-105 z-10' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-primary italic">Request Quote</span>
                  </div>
                  <p className="mt-4 text-text-secondary">{plan.desc}</p>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={14} />
                      </div>
                      <span className="text-sm font-medium">{f}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((f, i) => (
                    <div key={i} className="flex items-center gap-3 opacity-50">
                      <div className="w-5 h-5 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <X size={14} />
                      </div>
                      <span className="text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.highlight ? 'btn-primary' : 'bg-bg-accent text-primary hover:bg-primary hover:text-white'}`}>
                  Get a Quotation
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (Mini) */}
      <section className="pt-40 pb-24 bg-bg-accent">
        <div className="container max-w-4xl">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What's included in the price?", a: "Every plan includes a dedicated project manager, quality assurance, and initial consultation." },
              { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade your plan at any time as your business requirements grow." },
              { q: "Do you offer custom pricing?", a: "Absolutely. For enterprise-level needs, we provide custom quotes tailored to specific needs." }
            ].map((faq, i) => (
              <div key={i} className="glass p-6 rounded-2xl" data-aos="fade-up">
                <h4 className="font-bold text-lg mb-2">{faq.q}</h4>
                <p className="text-text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
