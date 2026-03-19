import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Briefcase, Shield, Snowflake, Phone, MessageCircle } from 'lucide-react';
import BookingWidget from './BookingWidget';

const InnovaCrystaHireJodhpur = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 pt-24 pb-20 overflow-x-hidden">
      
      {/* --- ADVANCED SEO HELMET --- */}
      <Helmet>
        <title>Innova Crysta Hire in Jodhpur | Best Taxi Rental | Shree Dev Tour And Travel</title>
        <meta name="description" content="Looking for an Innova Crysta on rent in Jodhpur? Shree Dev Tour And Travel offers premium 7-seater Innova Crysta taxis for outstation trips and local sightseeing." />
        <meta name="keywords" content="Innova Crysta hire Jodhpur, Innova on rent Jodhpur, 7 seater taxi Jodhpur, premium SUV rental Jodhpur, Jodhpur to Jaisalmer Innova" />
      </Helmet>

      {/* --- PAGE HEADER --- */}
      <div className="text-center mb-16 relative z-10 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
            Premium SUV Fleet
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Innova Crysta</span> in Jodhpur
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Experience the ultimate comfort for your family trips. Rent our top-of-the-line <strong>Innova Crysta</strong> for Jodhpur local sightseeing or multi-day Rajasthan outstation tours.
          </p>
        </motion.div>
      </div>

      {/* --- TRIP HIGHLIGHTS --- */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HighlightCard 
            icon={<Users size={32} className="text-blue-500" />}
            title="Spacious Seating"
            desc="Comfortably seats 6 to 7 passengers with ample legroom."
          />
          <HighlightCard 
            icon={<Briefcase size={32} className="text-cyan-500" />}
            title="Luggage Capacity"
            desc="Easily fits 4 large bags, perfect for long outstation trips."
          />
          <HighlightCard 
            icon={<Snowflake size={32} className="text-teal-500" />}
            title="Premium AC"
            desc="Powerful dual air-conditioning beats the Rajasthan heat."
          />
          <HighlightCard 
            icon={<Shield size={32} className="text-indigo-500" />}
            title="Top Safety"
            desc="Multiple airbags and ABS ensuring complete peace of mind."
          />
        </div>
      </div>

      {/* --- BOOKING WIDGET --- */}
      <div className="container mx-auto px-4 mb-20 relative z-20">
        <BookingWidget />
      </div>

      {/* --- SEO CONTENT SECTION --- */}
      <div className="container mx-auto px-6 bg-slate-800/30 rounded-3xl p-8 md:p-12 mb-10 border border-slate-700/50">
        <h2 className="text-3xl font-bold text-white mb-6">Why is Innova Crysta the Best Choice for Rajasthan?</h2>
        <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
          <p>
            When traveling across the vast landscapes of Rajasthan, comfort and reliability are paramount. The Toyota Innova Crysta is undoubtedly the undisputed king of Indian highways. By choosing an <strong>Innova Crysta hire in Jodhpur</strong>, you ensure that your family or group travels without fatigue, even on long journeys like Jodhpur to Jaisalmer or Udaipur.
          </p>
          <p>
            At Shree Dev Tour And Travel, we maintain a flawless fleet of premium SUVs. Our Innova Crystas are meticulously serviced, deep-cleaned before every trip, and driven by courteous, verified chauffeurs who double as your local guide. Whether it is a quick airport transfer or a 7-day complete Rajasthan package, the Innova Crysta delivers an unmatched premium experience.
          </p>
          <p>
            Book your 7-seater premium taxi today and enjoy transparent per-km billing with absolutely no hidden driver bata or toll surprises. 
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <a href="tel:8890472581" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-blue-500/20">
            <Phone size={18} /> Book Innova Now
          </a>
          <a href="https://wa.me/918890472581?text=Hi%20Shree%20Dev%20Tour%20And%20Travel,%20I%20want%20to%20hire%20an%20Innova%20Crysta%20in%20Jodhpur." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-green-500/20">
            <MessageCircle size={18} /> WhatsApp Enquiry
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

export default InnovaCrystaHireJodhpur;
