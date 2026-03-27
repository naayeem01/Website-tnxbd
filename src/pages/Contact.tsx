import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <SEO 
        title="Contact Us" 
        description="Get in touch with TNXBD IT Solution. Reach out to our Dhaka or Tangail office for any IT inquiries and project proposals." 
        keywords="Contact TNXBD, Hire Developers, IT Inquiry, Project Proposal"
      />
      <section className="pt-40 pb-24 bg-bg-accent">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 text-text-primary tracking-tight">Get in <span className="text-primary italic">Touch</span></h1>
            <p className="text-xl text-text-secondary leading-relaxed font-medium">
              Have a question or a project in mind? We'd love to hear from you. Reach out to us and let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <p className="text-text-secondary mb-10">
                  Fill out the form and our team will get back to you within 24 hours. We're here to help you succeed.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-5 p-6 glass rounded-2xl hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-text-secondary">+880 1793 526 558</p>
                    <p className="text-text-secondary">+880 1884 444 299</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 glass rounded-2xl hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-text-secondary">info@tnxbd.com</p>
                    <p className="text-text-secondary">support@tnxbd.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 glass rounded-2xl hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-1">Tangail Office</h4>
                      <p className="text-text-secondary italic">Upazila Muktijoddha Complex, <br />Delduar 1910, Tangail</p>
                    </div>
                    <div className="pt-4 border-t border-gray-100">
                      <h4 className="font-bold mb-1 text-secondary">Dhaka Office</h4>
                      <p className="text-text-secondary italic">Swapnanagar Residential Area - 2, <br />Section - 9, Mirpur, Dhaka - 1216.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <a key={i} href="#" className="w-10 h-10 bg-bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                      <Globe size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7" data-aos="fade-left">
              <div className="glass p-8 lg:p-12 relative overflow-hidden rounded-[3rem] bg-white/40 border-white/50 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 animate-pulse"></div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text-primary">First Name</label>
                      <input type="text" className="w-full px-5 py-4 bg-bg-secondary border border-gray-200 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-text-primary">Last Name</label>
                      <input type="text" className="w-full px-5 py-4 bg-bg-secondary border border-gray-200 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-primary">Email Address</label>
                    <input type="email" className="w-full px-5 py-4 bg-bg-secondary border border-gray-200 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-primary">Subject</label>
                    <select className="w-full px-5 py-4 bg-bg-secondary border border-gray-200 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                      <option>General Inquiry</option>
                      <option>Project Proposal</option>
                      <option>Service Quotation</option>
                      <option>Support Request</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-text-primary">Message</label>
                    <textarea rows={5} className="w-full px-5 py-4 bg-bg-secondary border border-gray-200 rounded-xl focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full py-5 text-lg justify-center gap-3">
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-200 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.2541922437!2d90.39578148715822!3d23.8695972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4125714041b%3A0x2db4c205513238ed!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1711550000000!5m2!1sen!2sbd" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </Layout>
  );
};

export default Contact;
