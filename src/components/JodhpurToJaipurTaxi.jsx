import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Map, Clock, Shield, Star, Phone, MessageCircle } from 'lucide-react';
import BookingWidget from './BookingWidget';

const JodhpurToJaipurTaxi = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 pt-24 pb-20 overflow-x-hidden">
      
      {/* --- ADVANCED SEO HELMET --- */}
      <Helmet>
        <title>Jodhpur to Jaipur Taxi | Outstation Cab Service | Shree Dev Tour And Travel</title>
        <meta name="description" content="Looking for a taxi from Jodhpur to Jaipur? Shree Dev Tour And Travel offers premium Innova Crysta and sedans for a smooth outstation trip to the Pink City." />
        <meta name="keywords" content="Jodhpur to Jaipur taxi, Jodhpur to Jaipur cab, Jodhpur to Jaipur Innova, Pink City tour from Jodhpur, Rajasthan outstation cab" />
      </Helmet>

      {/* --- PAGE HEADER --- */}
      <div className="text-center mb-16 relative z-10 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
            Premium Intercity Travel
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Jodhpur to <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-600">Jaipur Taxi</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Travel from the Blue City to the Pink City seamlessly. Our <strong>Jodhpur to Jaipur cab service</strong> ensures you reach your destination safely and on time, with transparent per-km billing.
          </p>
        </motion.div>
      </div>

      {/* --- TRIP HIGHLIGHTS --- */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HighlightCard 
            icon={<Map size={32} className="text-pink-500" />}
            title="Distance"
            desc="Approximately 330 KM between Jodhpur and Jaipur."
          />
          <HighlightCard 
            icon={<Clock size={32} className="text-blue-500" />}
            title="Travel Time"
            desc="Around 6 to 6.5 hours via the well-maintained highway."
          />
          <HighlightCard 
            icon={<Shield size={32} className="text-teal-500" />}
            title="Verified Drivers"
            desc="Polite, professional drivers who know the Rajasthan highways."
          />
          <HighlightCard 
            icon={<Star size={32} className="text-indigo-500" />}
            title="En-route Stops"
            desc="Option to visit Pushkar or Ajmer Sharif Dargah seamlessly."
          />
        </div>
      </div>

      {/* --- BOOKING WIDGET --- */}
      <div className="container mx-auto px-4 mb-20 relative z-20">
        <BookingWidget />
      </div>

      {/* --- SEO CONTENT SECTION --- */}
      <div className="container mx-auto px-6 bg-slate-800/30 rounded-3xl p-8 md:p-12 mb-10 border border-slate-700/50">
        <h2 className="text-3xl font-bold text-white mb-6">Experience the Best Journey from Jodhpur to Jaipur</h2>
        <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
          <p>
            Whether you are catching a flight from Jaipur Airport or continuing your Rajasthan tour to the capital city, booking a reliable <strong>Jodhpur to Jaipur taxi</strong> makes all the difference. While trains and buses exist, a private outstation cab provides the flexibility to travel at your own pace and schedule.
          </p>
          <p>
            Many of our clients love to make a short pilgrimage stop in Ajmer or Pushkar along the way. With Shree Dev Tour And Travel, you have the flexibility to customize your journey. Our fleet includes spacious Innova Crystas, comfortable Sedans, and even 12-seater Force Urbanias for large families.
          </p>
          <p>
            Say goodbye to cramped journeys and unreliable operators. Experience premium, sanitized cars with professional drivers who prioritize your safety above all else.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <a href="tel:8890472581" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-blue-500/20">
            <Phone size={18} /> Contact Us
          </a>
          <a href="https://wa.me/918890472581?text=Hi%20Shree%20Dev%20Tour%20And%20Travel,%20I%20want%20to%20book%20a%20taxi%20from%20Jodhpur%20to%20Jaipur." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-green-500/20">
            <MessageCircle size={18} /> Quote on WhatsApp
          </a>
        </div>
      </div>

    </div>
  );
};

const HighlightCard = ({ icon, title, desc }) => (
  <div className="bg-slate-800/40 p-6 rounded-2xl hover:bg-slate-800 transition-colors border border-slate-700/30 group">
    <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg border border-slate-700/50 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default JodhpurToJaipurTaxi;
