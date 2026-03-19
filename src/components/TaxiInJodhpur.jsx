import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Clock, MapPin, Star, Phone, MessageCircle } from 'lucide-react';
import BookingWidget from './BookingWidget';

const TaxiInJodhpur = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 pt-24 pb-20 overflow-x-hidden">
      
      {/* --- ADVANCED SEO HELMET --- */}
      <Helmet>
        <title>Best Taxi in Jodhpur & Premium Car Service in Jodhpur | Shree Dev Tour And Travel</title>
        <meta name="description" content="Looking for a reliable taxi in Jodhpur? Shree Dev Tour And Travel offers the best car service in Jodhpur. Hire Innova Crysta, sedans, and more at affordable per-km rates." />
        <meta name="keywords" content="Taxi in jodhpur, Car service in jodhpur, Jodhpur cab booking, rent a car in Jodhpur, best taxi service Jodhpur Rajasthan" />
      </Helmet>

      {/* --- PAGE HEADER --- */}
      <div className="text-center mb-16 relative z-10 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
            #1 Rated Car Service in Jodhpur
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Taxi in Jodhpur</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Whether you need a quick airport drop, local sightseeing around Mehrangarh Fort, or a multi-day Rajasthan tour, our premium <strong>car service in Jodhpur</strong> provides unmatched comfort, safety, and reliability.
          </p>
        </motion.div>
      </div>

      {/* --- WHY CHOOSE US --- */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Shield size={32} className="text-blue-500" />}
            title="Safe & Sanitized"
            desc="Every taxi in our fleet is cleaned and sanitized before every trip."
          />
          <FeatureCard 
            icon={<Clock size={32} className="text-cyan-500" />}
            title="24/7 Availability"
            desc="Need a car service in Jodhpur at midnight? We are always ready."
          />
          <FeatureCard 
            icon={<MapPin size={32} className="text-teal-500" />}
            title="Local Experts"
            desc="Our drivers know Jodhpur inside out. Discover hidden gems with us."
          />
          <FeatureCard 
            icon={<Star size={32} className="text-indigo-500" />}
            title="Top Rated"
            desc="Trusted by thousands of travelers for the best taxi service in Jodhpur."
          />
        </div>
      </div>

      {/* --- BOOKING WIDGET (REUSE) --- */}
      <div className="container mx-auto px-4 mb-20 relative z-20">
        <BookingWidget />
      </div>

      {/* --- SEO CONTENT SECTION --- */}
      <div className="container mx-auto px-6 bg-slate-800/30 rounded-3xl p-8 md:p-12 mb-10 border border-slate-700/50">
        <h2 className="text-3xl font-bold text-white mb-6">Why Book Your Car Service in Jodhpur With Us?</h2>
        <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
          <p>
            Finding a reliable <strong>taxi in Jodhpur</strong> can sometimes be a hassle. At Shree Dev Tour And Travel, we eliminate the stress by providing transparent pricing, professional chauffeurs, and a diverse fleet of well-maintained cars. From budget-friendly sedans like the Maruti Dzire to luxury vehicles like the Innova Crysta and Toyota Fortuner, we have the perfect ride for every budget.
          </p>
          <p>
            Our <strong>car service in Jodhpur</strong> is not just about getting from point A to point B. It is about experiencing the royal heritage of the Blue City in absolute comfort. Whether you are visiting the majestic Mehrangarh Fort, the beautiful Umaid Bhawan Palace, or taking a trip out to the Thar Desert, our drivers act as your personal local guides.
          </p>
          <p>
            Avoid the last-minute rush and hidden driver bata charges that are common with generic tour operators. Book your premium taxi in Jodhpur today and travel with peace of mind.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <a href="tel:8890472581" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-blue-500/20">
            <Phone size={18} /> Call Us Now
          </a>
          <a href="https://wa.me/918890472581?text=Hi%20Shree%20Dev%20Tour%20And%20Travel,%20I%20am%20looking%20for%20a%20taxi%20in%20Jodhpur." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-green-500/20">
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </div>

    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-slate-800/40 p-6 rounded-2xl hover:bg-slate-800 transition-colors border border-slate-700/30 group">
    <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg border border-slate-700/50 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default TaxiInJodhpur;
