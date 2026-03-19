import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Map, Clock, Shield, Star, Phone, MessageCircle } from 'lucide-react';
import BookingWidget from './BookingWidget';

const JodhpurToJaisalmerTaxi = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 pt-24 pb-20 overflow-x-hidden">
      
      {/* --- ADVANCED SEO HELMET --- */}
      <Helmet>
        <title>Jodhpur to Jaisalmer Taxi | Best Cab Service & Fare | Shree Dev Tour And Travel</title>
        <meta name="description" content="Book a premium Jodhpur to Jaisalmer taxi with Shree Dev Tour And Travel. Enjoy clean cabs, experienced drivers, and transparent fares for your desert journey." />
        <meta name="keywords" content="Jodhpur to Jaisalmer taxi, Jodhpur to Jaisalmer cab, cab fare Jodhpur Jaisalmer, hire taxi for Jaisalmer, Jodhpur Jaisalmer tour" />
      </Helmet>

      {/* --- PAGE HEADER --- */}
      <div className="text-center mb-16 relative z-10 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
            Top Rated Outstation Route
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Jodhpur to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600">Jaisalmer Taxi</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Planning a trip to the Golden City? Our premium <strong>Jodhpur to Jaisalmer cab service</strong> offers the most comfortable and reliable journey across the Thar Desert with no hidden charges.
          </p>
        </motion.div>
      </div>

      {/* --- TRIP HIGHLIGHTS --- */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HighlightCard 
            icon={<Map size={32} className="text-yellow-500" />}
            title="Distance"
            desc="Approximately 280 KM between Jodhpur and Jaisalmer."
          />
          <HighlightCard 
            icon={<Clock size={32} className="text-blue-500" />}
            title="Travel Time"
            desc="Roughly 4.5 to 5 hours of smooth, comfortable driving."
          />
          <HighlightCard 
            icon={<Shield size={32} className="text-teal-500" />}
            title="Safe Journey"
            desc="GPS-enabled fleet with highly experienced highway drivers."
          />
          <HighlightCard 
            icon={<Star size={32} className="text-indigo-500" />}
            title="Sightseeing"
            desc="Stop at Ramdevra Temple or Pokhran on the way!"
          />
        </div>
      </div>

      {/* --- BOOKING WIDGET --- */}
      <div className="container mx-auto px-4 mb-20 relative z-20">
        <BookingWidget />
      </div>

      {/* --- SEO CONTENT SECTION --- */}
      <div className="container mx-auto px-6 bg-slate-800/30 rounded-3xl p-8 md:p-12 mb-10 border border-slate-700/50">
        <h2 className="text-3xl font-bold text-white mb-6">Why Book Your Jodhpur to Jaisalmer Cab With Us?</h2>
        <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
          <p>
            The road trip from Jodhpur to Jaisalmer is one of the most popular routes in Rajasthan. Booking a reliable <strong>Jodhpur to Jaisalmer taxi</strong> ensures that you can enjoy the shifting landscapes of the Thar Desert in absolute comfort, without worrying about driving, navigation, or public transport delays.
          </p>
          <p>
            At Shree Dev Tour And Travel, we transparently offer the best cab fares. Whether you are a couple looking for a cozy sedan, or a group needing an <strong>Innova Crysta</strong> or a <strong>Tempo Traveller</strong>, we are equipped to handle your requirements. Our chauffeurs act as local guides and can recommend the best places to eat and rest along the highway.
          </p>
          <p>
            Don't let travel logistics ruin your desert adventure. Get a fast, hassle-free booking experience with our 24/7 customer support. Call us anytime to secure your outstation cab.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <a href="tel:8890472581" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-blue-500/20">
            <Phone size={18} /> Call to Book
          </a>
          <a href="https://wa.me/918890472581?text=Hi%20Shree%20Dev%20Tour%20And%20Travel,%20I%20want%20to%20book%20a%20taxi%20from%20Jodhpur%20to%20Jaisalmer." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-green-500/20">
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

export default JodhpurToJaisalmerTaxi;
