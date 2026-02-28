import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook, Instagram, Twitter, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Changed grid to 4 columns for extra SEO links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
          
          {/* Column 1: Brand Info & Logo */}
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="flex items-center justify-center sm:justify-start gap-3" aria-label="Shree Dev Travels Home">
              <img 
                 src="/wolf-logo.png" 
                 alt="Shree Dev Tour and Travel Logo" 
                 className="w-12 h-12 object-contain rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)] border border-blue-500/20"
              />
              <h3 className="text-2xl font-bold text-white tracking-tight">
                SHREE DEV <span className="text-blue-500">TRAVELS</span>
              </h3>
            </Link>
            {/* SEO Optimized Description */}
            <p className="text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Rajasthan's top-rated travel agency. We provide luxury Innova Crysta, Force Urbania, and customized tour packages for Jaipur, Jodhpur, and Jaisalmer.
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4 pt-2">
              <SocialIcon icon={<Facebook size={18} />} link="#" ariaLabel="Facebook" />
              <SocialIcon icon={<Instagram size={18} />} link="#" ariaLabel="Instagram" />
              <SocialIcon icon={<Twitter size={18} />} link="#" ariaLabel="Twitter" />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Explore</h3>
            <ul className="space-y-3">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/services" text="Our Premium Fleet" />
              <FooterLink to="/packages" text="Rajasthan Tour Packages" />
              <FooterLink to="/contact" text="Contact Support" />
            </ul>
          </div>

          {/* Column 3: The SEO Goldmine (Top Routes & Keywords) */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Top Routes</h3>
            <ul className="space-y-3">
              <FooterLink to="/services" text="Jaipur to Jodhpur Taxi" />
              <FooterLink to="/packages" text="Jaisalmer Desert Safari" />
              <FooterLink to="/services" text="Innova Crysta on Rent" />
              <FooterLink to="/packages" text="Umaid Bhawan & Fort Tours" />
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex flex-col items-center sm:items-start gap-1">
                 <div className="flex items-center gap-2 text-blue-500 font-bold">
                    <MapPin size={18} /> Headquarters
                 </div>
                 <p className="text-sm">Jaipur, Rajasthan (India)</p>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-1">
                 <div className="flex items-center gap-2 text-blue-500 font-bold">
                    <Phone size={18} /> 24/7 Cab Booking
                 </div>
                 <a href="tel:8890472581" className="text-white hover:text-blue-400 transition text-lg font-semibold">
                   +91 88904-72581
                 </a>
                 <a href="tel:8290071304" className="text-slate-400 hover:text-blue-400 transition text-sm">
                   +91 82900-71304
                 </a>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-1">
                 <div className="flex items-center gap-2 text-blue-500 font-bold">
                    <Mail size={18} /> Email Us
                 </div>
                 <a href="mailto:booking@shreedev.com" className="text-sm hover:text-white transition">
                   booking@shreedev.com
                 </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="border-t border-slate-900 mt-16 pt-8 text-center flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Shree Dev Tour and Travel. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex gap-4">
            <span className="hover:text-slate-400 cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer transition">Terms of Service</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

// --- Helper Components for Cleaner Code ---

const SocialIcon = ({ icon, link, ariaLabel }) => (
  <a 
    href={link} 
    aria-label={ariaLabel}
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, text }) => (
  <li>
    <Link to={to} className="flex items-center justify-center sm:justify-start gap-2 text-sm hover:text-white hover:translate-x-1 transition-all group">
      <ChevronRight size={14} className="text-blue-600 group-hover:text-blue-400 transition-colors" />
      {text}
    </Link>
  </li>
);

export default Footer;