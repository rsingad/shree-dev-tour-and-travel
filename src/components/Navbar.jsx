import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react'; // MessageCircle import kiya WhatsApp ke liye
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Scroll detection logic
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
        >
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* LOGO */}
                <Link to="/" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2 z-50">
                    SHREE DEV <span className="text-blue-500">TRAVELS</span>
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink to="/" text="Home" />
                    <NavLink to="/services" text="Fleet & Services" />
                    <NavLink to="/packages" text="Tour Packages" />
                    <NavLink to="/contact" text="Contact" />

                    <a
                        href="tel:8890472581"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-medium transition shadow-lg shadow-blue-500/20"
                    >
                        <Phone size={18} /> Book Now
                    </a>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button
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
                            <MobileNavLink to="/services" text="Our Fleet" onClick={() => setIsOpen(false)} />
                            <MobileNavLink to="/packages" text="Tour Packages" onClick={() => setIsOpen(false)} />
                            <MobileNavLink to="/contact" text="Contact Us" onClick={() => setIsOpen(false)} />

                            {/* Mobile Action Buttons */}
                            <div className="flex flex-col gap-3 mt-8">
                                {/* Call Button */}
                                <a
                                    href="tel:8890472581"
                                    className="flex justify-center items-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold active:scale-95 transition"
                                >
                                    <Phone size={20} /> Call Now
                                </a>

                                {/* WhatsApp Button */}
                                <a
                                    href="https://wa.me/918890472581"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center items-center gap-2 bg-green-600 text-white py-3 rounded-xl font-bold active:scale-95 transition"
                                >
                                    <MessageCircle size={20} /> WhatsApp
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
        className="text-2xl font-semibold text-slate-300 hover:text-blue-400 border-b border-white/10 pb-4"
    >
        {text}
    </Link>
);

export default Navbar;