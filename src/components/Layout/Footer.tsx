import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

import logoSrc from '../../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logoSrc} 
                alt="TNXBD Logo" 
                className="w-auto h-12 object-contain hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-400">
              Transforming businesses through innovative technology solutions. Empowering Digital Bangladesh with excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog & News</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Software Solutions</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">IT Support & Security</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Upazila Muktijoddha Complex, Delduar 1910, Tangail</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary mt-1 flex-shrink-0" size={20} />
                <span>Swapnanagar Residential Area - 2, <br />Section - 9, Mirpur, Dhaka - 1216</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary" size={20} />
                <span>+880 1793 526 558<br />+880 1884 444 299</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary" size={20} />
                <span>info@tnxbd.com<br />support@tnxbd.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {currentYear} TNXBD IT Solution. All rights reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-white transition-colors uppercase font-bold tracking-tighter">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors uppercase font-bold tracking-tighter">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
