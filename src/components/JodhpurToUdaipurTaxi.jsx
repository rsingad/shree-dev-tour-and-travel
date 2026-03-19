import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Map, Clock, Shield, Star, Phone, MessageCircle } from 'lucide-react';
import BookingWidget from './BookingWidget';

const JodhpurToUdaipurTaxi = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 pt-24 pb-20 overflow-x-hidden">
      
      {/* --- ADVANCED SEO HELMET --- */}
      <Helmet>
        <title>Jodhpur to Udaipur Taxi | Best Cab Fare | Shree Dev Tour And Travel</title>
        <meta name="description" content="Book an outstation taxi from Jodhpur to Udaipur. Enjoy a comfortable ride via the Ranakpur Jain Temple and Kumbhalgarh Fort. Affordable per km rates." />
        <meta name="keywords" content="Jodhpur to Udaipur taxi, Jodhpur to Udaipur cab, Jodhpur to Udaipur taxi fare, outstation cab Jodhpur to Udaipur, Ranakpur Kumbhalgarh tour" />
      </Helmet>

      {/* --- PAGE HEADER --- */}
      <div className="text-center mb-16 relative z-10 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
            Scenic Outstation Route
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Jodhpur to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600">Udaipur Taxi</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Travel from the majestic Blue City to the romantic City of Lakes. Our premium <strong>Jodhpur to Udaipur cab service</strong> ensures you arrive refreshed while offering stops at historical monuments on the way.
          </p>
        </motion.div>
      </div>

      {/* --- TRIP HIGHLIGHTS --- */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HighlightCard 
            icon={<Map size={32} className="text-teal-500" />}
            title="Distance"
            desc="Approximately 250 KM between Jodhpur and Udaipur."
          />
          <HighlightCard 
            icon={<Clock size={32} className="text-blue-500" />}
            title="Travel Time"
            desc="Roughly 4.5 to 5 hours of scenic driving through the Aravalli hills."
          />
          <HighlightCard 
            icon={<Shield size={32} className="text-green-500" />}
            title="Safe Journey"
            desc="GPS-tracked fleet with expert drivers proficient in hill driving."
          />
          <HighlightCard 
            icon={<Star size={32} className="text-amber-500" />}
            title="En-route Stops"
            desc="Option to visit Kumbhalgarh Fort and Ranakpur Jain Temple."
          />
        </div>
      </div>

      {/* --- BOOKING WIDGET --- */}
      <div className="container mx-auto px-4 mb-20 relative z-20">
        <BookingWidget />
      </div>

      {/* --- SEO CONTENT SECTION --- */}
      <div className="container mx-auto px-6 bg-slate-800/30 rounded-3xl p-8 md:p-12 mb-10 border border-slate-700/50">
        <h2 className="text-3xl font-bold text-white mb-6">Make Your Jodhpur to Udaipur Trip Unforgettable</h2>
        <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
          <p>
            The road trip from Jodhpur to Udaipur is arguably one of the most scenic drives in Rajasthan, transitioning from the arid desert landscapes into the lush, mountainous terrain of the Aravalli Range. By booking a <strong>Jodhpur to Udaipur taxi</strong> with us, you turn a simple transit into a memorable part of your holiday.
          </p>
          <p>
            Most of our clients opt for our specialized sightseeing route, which allows you to break the journey midway. You can explore the intricate marble carvings of the <strong>Ranakpur Jain Temple</strong> or visit the massive <strong>Kumbhalgarh Fort</strong> (with the second longest contiguous wall in the world). Our drivers will patiently wait while you explore these historic marvels.
          </p>
          <p>
            We offer transparent <strong>Jodhpur to Udaipur cab fares</strong> based on per-km rates, ensuring no hidden costs. Whether you need a simple drop or a tailored sightseeing journey in an Innova Crysta or a Sedan, Shree Dev Tour And Travel guarantees a premium experience.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <a href="tel:8890472581" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-blue-500/20">
            <Phone size={18} /> Call to Book
          </a>
          <a href="https://wa.me/918890472581?text=Hi%20Shree%20Dev%20Tour%20And%20Travel,%20I%20want%20to%20book%20a%20taxi%20from%20Jodhpur%20to%20Udaipur." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-green-500/20">
            <MessageCircle size={18} /> WhatsApp
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

export default JodhpurToUdaipurTaxi;
