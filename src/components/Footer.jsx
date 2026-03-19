import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook, Instagram, Twitter, Mail, ChevronRight, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800 font-sans" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-6">

        {/* Changed grid to 4 columns for extra SEO links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">

          {/* Column 1: Brand Info & Logo */}
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="flex items-center justify-center sm:justify-start gap-3" aria-label="Shree Dev Tour And Travel Home">
              <img
                src="/shree-dev-tour-and-travel.webp" // Naya optimized format
                alt="Shree Dev Tour and Travel Logo - Best Jodhpur Taxi"
                width="48"  // w-12 = 48px
                height="48" // h-12 = 48px
                loading="lazy" // Footer ke liye lazy load sahi hai (LCP impact nahi karega)
                className="w-12 h-12 object-contain rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)] border border-blue-500/20"
              />
              <h3 className="text-2xl font-bold text-white tracking-tight">
                SHREE DEV <span className="text-blue-500">TOUR AND TRAVEL</span>
              </h3>
            </Link>
            {/* SEO Optimized Description (Jodhpur focused) */}
            <p className="text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Jodhpur & Rajasthan's top-rated travel agency. We provide premium <strong>Innova Crysta</strong>, <strong>Force Urbania</strong>, and customized tour packages for Jaisalmer and Jaipur.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4 pt-2">
              <SocialIcon icon={<Facebook size={18} />} link="#" ariaLabel="Facebook Page" />
              <SocialIcon icon={<Instagram size={18} />} link="#" ariaLabel="Instagram Profile" />
              <SocialIcon icon={<Twitter size={18} />} link="#" ariaLabel="Twitter Profile" />
            </div>
          </div>

          {/* Column 2: Quick Links (Updated with New Pages) */}
          <nav aria-label="Footer Quick Links">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Explore</h3>
            <ul className="space-y-3">
              <FooterLink to="/" text="Home" />
              <FooterLink to="/about" text="About Us" />
              <FooterLink to="/services" text="Our Premium Fleet" />
              <FooterLink to="/packages" text="Rajasthan Tour Packages" />
              <FooterLink to="/faq" text="Travel FAQs" />
              <FooterLink to="/contact" text="Contact Support" />

            </ul>
          </nav>

          {/* Column 3: The SEO Goldmine (Top Routes & Keywords) */}
          <nav aria-label="Top Tour Routes">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Top Routes</h3>
            <ul className="space-y-3">
              <FooterLink to="/taxi-in-jodhpur" text="Taxi in Jodhpur" />
              <FooterLink to="/jodhpur-sightseeing-taxi" text="Jodhpur Sightseeing Taxi" />
              <FooterLink to="/jodhpur-to-jaisalmer-taxi" text="Jodhpur to Jaisalmer Taxi" />
              <FooterLink to="/jodhpur-to-jaipur-taxi" text="Jodhpur to Jaipur Taxi" />
              <FooterLink to="/jodhpur-to-udaipur-taxi" text="Jodhpur to Udaipur Taxi" />
              <FooterLink to="/innova-crysta-hire-jodhpur" text="Innova Crysta Hire Jodhpur" />
              <FooterLink to="/tempo-traveller-jodhpur" text="Tempo Traveller on Rent" />
            </ul>
          </nav>

          {/* Column 4: Contact Info (Wrapped in <address> for Local SEO) */}
          <address className="not-italic">
            <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex flex-col items-center sm:items-start gap-1">
                <div className="flex items-center gap-2 text-blue-500 font-bold">
                  <MapPin size={18} aria-hidden="true" /> Service Area
                </div>
                <p className="text-sm">Jodhpur & Jaipur, Rajasthan (India)</p>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-1">
                <div className="flex items-center gap-2 text-blue-500 font-bold">
                  <Phone size={18} aria-hidden="true" /> 24/7 Cab Booking
                </div>
                <a href="tel:8890472581" className="text-white hover:text-blue-400 transition text-lg font-semibold" title="Call Shree Dev Tour And Travel">
                  +91 88904-72581
                </a>
                <a href="https://wa.me/918290071304" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-green-500 hover:text-green-400 transition text-sm font-semibold" title="WhatsApp Us">
                  <MessageCircle size={14} /> +91 82900-71304
                </a>
              </div>

              <div className="flex flex-col items-center sm:items-start gap-1">
                <div className="flex items-center gap-2 text-blue-500 font-bold">
                  <Mail size={18} aria-hidden="true" /> Email Us
                </div>
                <a href="mailto:booking@shreedev.com" className="text-sm hover:text-white transition" title="Email Shree Dev Tour And Travel">
                  booking@shreedev.com
                </a>
              </div>
            </div>
          </address>

        </div>

        {/* Copyright & Legal Links Line */}
        <div className="border-t border-slate-900 mt-16 pt-8 text-center flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Shree Dev Tour and Travel. All rights reserved.</p>

          {/* Legal Pages (Privacy & Terms) Added Here */}
          <div className="flex gap-6 mt-4 md:mt-0 font-medium">
            <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link>
          </div>

          {/* Proud Freelancer Signature! 🐺 */}
          <p className="mt-4 md:mt-0 font-medium">
            Developed by <span className="text-blue-500 font-bold tracking-wider hover:text-blue-400 transition cursor-pointer">The Wolf Freelancers Group 🐺</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

// --- Helper Components ---

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
    <Link to={to} title={text} className="flex items-center justify-center sm:justify-start gap-2 text-sm hover:text-white hover:translate-x-1 transition-all group">
      <ChevronRight size={14} className="text-blue-600 group-hover:text-blue-400 transition-colors" aria-hidden="true" />
      {text}
    </Link>
  </li>
);

export default Footer;