import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import BookingWidget from './BookingWidget';
import FAQ from './FAQ';
import TopRoutes from './TopRoutes';


const WOLF_LOGO = "/wolf-logo.webp";

const FutureHome = () => {
  return (
    <div className="relative w-full min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">

      <Helmet>
        <title>Best Taxi Service in Jodhpur & Jaisalmer Tour | Shree Dev Travels</title>
        <meta name="description" content="Book the best taxi service in Jodhpur. Rent Innova Crysta, Force Urbania for local sightseeing, Mehrangarh fort, and Jaisalmer desert safari. Affordable per km rates." />
      </Helmet>

      {/* ================= SECTION 1: HERO (Logo Showcase) ================= */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center" aria-label="Hero Section">

        {/* BACKGROUND GRADIENT & LIGHT EFFECTS */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: HERO TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-1 px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-300 uppercase bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-md">
              <Star size={12} className="text-blue-400" fill="currentColor" /> #1 Premium Taxi in Jodhpur
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Shree Dev <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Travels
              </span>
            </h1>

            <p className="text-slate-300 text-lg mb-8 max-w-lg font-medium leading-relaxed">
              Premium <strong>Innova Crysta</strong> & <strong>Force Urbania</strong> services for Jodhpur sightseeing and Rajasthan tours. Fast, reliable, and expert drivers.
            </p>

            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-600/20">
                Book Now
              </button>
            </div>
          </motion.div>

          {/* RIGHT: WOLF LOGO (Replacing 3D) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative group">
              {/* Logo Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/20 blur-[60px] group-hover:bg-blue-500/40 transition-all duration-500"></div>
              <img
                src={WOLF_LOGO}
                alt="Shree Dev Travels Wolf Logo"
                // Width aur Height attributes zaroor dein (Pixels mein)
                width="450"
                height="450"
                className="relative w-[450px] h-auto object-contain drop-shadow-2xl filter brightness-110"
                fetchpriority="high"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </section>

      {/* ================= SECTION 2: BOOKING ENGINE ================= */}
      <section className="relative z-20 -mt-20 container mx-auto px-4">
        <BookingWidget />
      </section>

      {/* ================= SECTION 3: STATS ================= */}
      <section className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem number="100+" label="Premium Cabs" />
          <StatItem number="1.5M+" label="Kilometers Driven" />
          <StatItem number="50k+" label="Happy Tourists" />
          <StatItem number="4.9/5" label="Google Rating" />
        </div>
      </section>

      {/* ================= SECTION 4: INFO ================= */}
      <section className="bg-white text-slate-900 py-24 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-blue-600 font-bold tracking-wider text-sm mb-2 uppercase">Why Choose Us</h3>
            <h2 className="text-4xl font-bold mb-6">Top-Rated Travel Agency <br />in Jodhpur.</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Expert guides for <strong>Mehrangarh Fort</strong>, <strong>Umaid Bhawan</strong>, and desert safaris in <strong>Jaisalmer</strong>.
            </p>
            <ul className="space-y-4">
              <FeatureItem text="Transparent per KM Billing" />
              <FeatureItem text="Clean & Sanatized Vehicles" />
              <FeatureItem text="24/7 Support for Tourists" />
            </ul>
          </div>

          <div className="relative h-[400px] bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/11750442/pexels-photo-11750442.jpeg"
              className="w-full h-full object-cover"
              alt="Tourists in Rajasthan"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section><TopRoutes /></section>
      <section><FAQ /></section>

    </div>
  );
};

// --- HELPERS ---
const StatItem = ({ number, label }) => (
  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{number}</div>
    <div className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-semibold">{label}</div>
  </div>
);

const FeatureItem = ({ text }) => (
  <li className="flex items-center gap-3 font-medium text-slate-700">
    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
      <ChevronRight size={14} strokeWidth={3} />
    </div>
    <span>{text}</span>
  </li>
);

export default FutureHome;