import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Sticky Header with Shadow
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* 1. Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide">
            Shree Dev <span className="text-orange-500">Travels</span>
          </Link>

          {/* 2. Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-orange-400 transition">Home</Link>
            <Link to="/services" className="hover:text-orange-400 transition">Services</Link>
            <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
          </div>

          {/* 3. Call Button */}
          <div className="flex items-center">
            <a href="tel:8890472581" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-bold flex items-center gap-2 transition">
              <Phone size={18} />
              <span className="hidden sm:block">88904-72581</span>
            </a>
          </div>

          {/* 4. Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center ml-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-orange-400" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" className="block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-orange-400" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-orange-400" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;