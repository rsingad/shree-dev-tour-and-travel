import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, Briefcase, Snowflake, Phone, MessageCircle, Navigation2 } from 'lucide-react';
import BookingWidget from './BookingWidget';

const TempoTravellerJodhpur = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 pt-24 pb-20 overflow-x-hidden">
      
      {/* --- ADVANCED SEO HELMET --- */}
      <Helmet>
        <title>Tempo Traveller on Rent in Jodhpur | 12/17 Seater | Shree Dev Tour</title>
        <meta name="description" content="Hire 10, 12, 14, and 17-seater Tempo Travellers & Force Urbanias in Jodhpur for group tours, weddings, and outstation trips with Rajasthan's best travel agency." />
        <meta name="keywords" content="Tempo traveller on rent Jodhpur, 12 seater tempo traveller Jodhpur, Force Urbania hire Jodhpur, group tour taxi Jodhpur, 14 seater tempo traveller Jodhpur" />
      </Helmet>

      {/* --- PAGE HEADER --- */}
      <div className="text-center mb-16 relative z-10 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
            Best for Group Travel
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Hire <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500">Tempo Traveller</span> in Jodhpur
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Planning a trip with your extended family, corporate group, or friends? Our premium fleet of <strong>Tempo Travellers and Force Urbanias</strong> ensures everybody travels together comfortably and safely across Rajasthan.
          </p>
        </motion.div>
      </div>

      {/* --- HIGHLIGHTS --- */}
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HighlightCard 
            icon={<Users size={32} className="text-teal-500" />}
            title="Multiple Seating Options"
            desc="10, 12, 14, and 17-seater variations available to fit any group size."
          />
          <HighlightCard 
            icon={<Briefcase size={32} className="text-blue-500" />}
            title="Extensive Luggage Space"
            desc="Spacious roof carriers and rear boot space for completely hassle-free luggage transport."
          />
          <HighlightCard 
            icon={<Snowflake size={32} className="text-indigo-500" />}
            title="Premium Air Conditioning"
            desc="Individual AC vents for every seat for maximum comfort in the desert heat."
          />
          <HighlightCard 
            icon={<Navigation2 size={32} className="text-green-500" />}
            title="Rajasthan Tours"
            desc="Perfect for full Rajasthan packages including Jaisalmer, Udaipur, and Mount Abu."
          />
        </div>
      </div>

      {/* --- BOOKING WIDGET --- */}
      <div className="container mx-auto px-4 mb-20 relative z-20">
        <BookingWidget />
      </div>

      {/* --- SEO CONTENT SECTION --- */}
      <div className="container mx-auto px-6 bg-slate-800/30 rounded-3xl p-8 md:p-12 mb-10 border border-slate-700/50">
        <h2 className="text-3xl font-bold text-white mb-6">Why Rent a Tempo Traveller or Force Urbania in Jodhpur?</h2>
        <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
          <p>
            When traveling in a group, taking multiple sedans splits the fun and destroys the camaraderie of the journey. An organized group tour requires a reliable large vehicle, and a <strong>Tempo Traveller on rent in Jodhpur</strong> is the ultimate solution. At Shree Dev Tour And Travel, we offer top-tier luxury variants equipped with pushback seats, quality music systems, and charging ports.
          </p>
          <p>
            For those seeking the absolute peak of modern luxury group travel, we highly recommend our newer <strong>Force Urbania</strong> fleet. The Urbania offers aircraft-style seating, immense headroom (you can stand up and walk inside), and superior suspension that eliminates the bumpy feeling on rural Rajasthan roads.
          </p>
          <p>
            Whether you are attending a grand Rajasthani wedding, organizing a corporate offsite, or taking a multi-day family vacation to Jaisalmer or Udaipur, our Tempo Travellers and Urbanias deliver an economical per-head cost without sacrificing premium quality.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <a href="tel:8890472581" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-blue-500/20">
            <Phone size={18} /> Call for Quote
          </a>
          <a href="https://wa.me/918890472581?text=Hi%20Shree%20Dev%20Tour%20And%20Travel,%20I%20want%20to%20hire%20a%20Tempo%20Traveller%20/%20Urbania%20in%20Jodhpur." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-green-500/20">
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

export default TempoTravellerJodhpur;
