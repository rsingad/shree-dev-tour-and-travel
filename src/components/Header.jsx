import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Sticky Header with Glassmorphism & Shadow
    <nav className="bg-slate-900/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. Logo (Wolf Logo Integrated + SEO Alt text) */}
          <Link to="/" className="flex items-center gap-3" aria-label="Shree Dev Travels Home">
            <img 
               src="/wolf-logo.png" 
               alt="Shree Dev Travels - Best Taxi in Jaipur & Jodhpur" 
               className="w-10 h-10 object-contain rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            />
            <div className="text-2xl font-bold tracking-wide">
              SHREE DEV <span className="text-blue-500">TRAVELS</span>
            </div>
          </Link>

          {/* 2. Desktop Menu (SEO Keyword Links) */}
          <div className="hidden md:flex space-x-8 items-center font-medium">
            <Link to="/" className="text-slate-300 hover:text-white hover:text-blue-400 transition">Home</Link>
            <Link to="/services" className="text-slate-300 hover:text-white hover:text-blue-400 transition">Premium Fleet</Link>
            <Link to="/packages" className="text-slate-300 hover:text-white hover:text-blue-400 transition">Rajasthan Tours</Link>
            <Link to="/contact" className="text-slate-300 hover:text-white hover:text-blue-400 transition">Contact</Link>
          </div>

          {/* 3. Call Button (Conversion Optimized) */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:8890472581" 
              title="Call for Cab Booking"
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 transition shadow-lg shadow-blue-600/30 active:scale-95"
            >
              <Phone size={18} />
              <span>88904-72581</span>
            </a>
          </div>

          {/* 4. Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              aria-label="Toggle Navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-slate-300 hover:text-white focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Dropdown Menu (With WhatsApp CTA) */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 shadow-2xl absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/" className="block px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-200 font-medium border-b border-slate-800/50" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" className="block px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-200 font-medium border-b border-slate-800/50" onClick={() => setIsMenuOpen(false)}>Premium Cabs</Link>
            <Link to="/packages" className="block px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-200 font-medium border-b border-slate-800/50" onClick={() => setIsMenuOpen(false)}>Tour Packages</Link>
            <Link to="/contact" className="block px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-200 font-medium mb-4" onClick={() => setIsMenuOpen(false)}>Contact Support</Link>
            
            {/* Mobile Actions: Call & WhatsApp */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-800">
              <a href="tel:8890472581" className="bg-blue-600 text-white px-4 py-3 rounded-xl font-bold flex justify-center items-center gap-2 shadow-lg">
                <Phone size={20} /> Call Now
              </a>
              <a href="https://wa.me/918890472581?text=Hi,%20I%20am%20looking%20for%20a%20taxi/tour%20package." target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-4 py-3 rounded-xl font-bold flex justify-center items-center gap-2 shadow-lg">
                <MessageCircle size={20} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;