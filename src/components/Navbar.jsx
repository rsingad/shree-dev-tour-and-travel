import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Scroll detection logic (Header shadow appear effect)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen
                    ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3'
                    : 'bg-transparent py-5'
                }`}
            aria-label="Main Navigation"
        >
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* --- LOGO WOLF + TEXT (SEO Optimized Alt Tag) --- */}
                <Link to="/" className="text-2xl font-bold text-white tracking-tight flex items-center gap-3 z-50" aria-label="Shree Dev Travels Home">
                    <img 
                        src="/wolf-logo.png" 
                        alt="Shree Dev Tour and Travel - Best Taxi in Jodhpur" 
                        className="w-10 h-10 object-contain rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] border border-blue-500/40"
                    />
                    <span>SHREE DEV <span className="text-blue-500">TRAVELS</span></span>
                </Link>

                {/* DESKTOP MENU (SEO Optimized Labels) */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink to="/" text="Home" />
                    <NavLink to="/services" text="Premium Fleet" /> {/* Keyword rich */}
                    <NavLink to="/packages" text="Rajasthan Tours" /> {/* Keyword rich */}
                    <NavLink to="/contact" text="Contact" />
                    <NavLink to="/about" text="About" />
                    <NavLink to="/privacy-policy" text="Privacy" />
                    <NavLink to="/terms" text="Terms" /> 
                    <NavLink to="/faq" text="FAQ" /> 
                    

                    <a
                        href="tel:8890472581"
                        title="Call for Cab Booking in Jodhpur"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-medium transition shadow-lg shadow-blue-500/20 active:scale-95"
                    >
                        <Phone size={18} /> Book Now
                    </a>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
                    aria-label="Toggle Menu"
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition z-50"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE MENU DROPDOWN */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: '100vh', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="fixed inset-0 top-0 left-0 w-full h-screen bg-slate-900 md:hidden flex flex-col pt-24 px-6 z-40"
                    >
                        <div className="flex flex-col gap-6">
                            <MobileNavLink to="/" text="Home" onClick={() => setIsOpen(false)} />
                            <MobileNavLink to="/services" text="Premium Cabs" onClick={() => setIsOpen(false)} />
                            <MobileNavLink to="/packages" text="Tour Packages" onClick={() => setIsOpen(false)} />
                            <MobileNavLink to="/contact" text="Contact Support" onClick={() => setIsOpen(false)} />

                            {/* Mobile Action Buttons (Optimized for Conversions) */}
                            <div className="flex flex-col gap-3 mt-8">
                                {/* Call Button */}
                                <a
                                    href="tel:8890472581"
                                    className="flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold active:scale-95 transition shadow-lg shadow-blue-600/20"
                                >
                                    <Phone size={20} /> Call Now
                                </a>

                                {/* WhatsApp Button with Pre-filled message */}
                                <a
                                    href="https://wa.me/918890472581?text=Hi%20Shree%20Dev%20Travels,%20I%20am%20looking%20for%20a%20taxi/tour%20package%20in%20Rajasthan."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center gap-2 bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl font-bold active:scale-95 transition shadow-lg shadow-green-600/20"
                                >
                                    <MessageCircle size={20} /> WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

// Sub-components
const NavLink = ({ to, text }) => (
    <Link
        to={to}
        className="text-slate-300 hover:text-white font-medium transition relative group"
    >
        {text}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
    </Link>
);

const MobileNavLink = ({ to, text, onClick }) => (
    <Link
        to={to}
        onClick={onClick}
        className="text-2xl font-semibold text-slate-300 hover:text-blue-400 border-b border-slate-700 pb-4"
    >
        {text}
    </Link>
);

export default Navbar;