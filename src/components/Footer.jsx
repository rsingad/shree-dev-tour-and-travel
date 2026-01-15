import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook, Instagram, Twitter, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white tracking-tight">
              SHREE DEV <span className="text-blue-500">TRAVELS</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Premium inter-city travel services. We redefine luxury with our GPS-enabled fleet, ensured safety, and highly professional chauffeurs.
            </p>
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 pt-2">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Explore</h3>
            <ul className="space-y-3">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/services" text="Our Premium Fleet" />
              <FooterLink to="/contact" text="Contact Support" />
              <FooterLink to="/services" text="Jaipur Sightseeing" />
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex flex-col items-center md:items-start gap-1">
                 <div className="flex items-center gap-2 text-blue-500 font-bold">
                    <MapPin size={18} /> Headquarters
                 </div>
                 <p className="text-sm">Jaipur, Rajasthan (India)</p>
              </div>

              <div className="flex flex-col items-center md:items-start gap-1">
                 <div className="flex items-center gap-2 text-blue-500 font-bold">
                    <Phone size={18} /> 24/7 Dispatch
                 </div>
                 <a href="tel:8890472581" className="text-white hover:text-blue-400 transition text-lg font-semibold">
                   +91 88904-72581
                 </a>
                 <a href="tel:8290071304" className="text-slate-400 hover:text-blue-400 transition text-sm">
                   +91 82900-71304
                 </a>
              </div>

              <div className="flex flex-col items-center md:items-start gap-1">
                 <div className="flex items-center gap-2 text-blue-500 font-bold">
                    <Mail size={18} /> Email Us
                 </div>
                 <a href="mailto:contact@shreedev.com" className="text-sm hover:text-white transition">
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
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

// --- Helper Components for Cleaner Code ---

const SocialIcon = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
    {icon}
  </a>
);

const FooterLink = ({ to, text }) => (
  <li>
    <Link to={to} className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors group">
      <ChevronRight size={14} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
      {text}
    </Link>
  </li>
);

export default Footer;