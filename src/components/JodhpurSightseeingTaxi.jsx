import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Camera, Sunrise, MapPin, Compass, Phone, MessageCircle } from 'lucide-react';
import BookingWidget from './BookingWidget';

const JodhpurSightseeingTaxi = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 pt-24 pb-20 overflow-x-hidden">
      
      {/* --- ADVANCED SEO HELMET --- */}
      <Helmet>
        <title>Jodhpur Local Sightseeing Taxi | Best Darshan Cab | Shree Dev Tour</title>
        <meta name="description" content="Book the best Jodhpur sightseeing taxi and explore Mehrangarh Fort, Umaid Bhawan, and Jaswant Thada. Affordable full-day and half-day local cab rentals." />
        <meta name="keywords" content="Jodhpur sightseeing taxi, Jodhpur local cab, Jodhpur darshan cab, hire taxi for Jodhpur local tour, Mehrangarh Fort taxi, full day taxi Jodhpur" />
      </Helmet>

      {/* --- PAGE HEADER --- */}
      <div className="text-center mb-16 relative z-10 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
            #1 Local Sightseeing Cab
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Jodhpur <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Sightseeing Taxi</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Experience the majestic Blue City with our expert local drivers. We offer customized <strong>Jodhpur Darshan</strong> tours covering all major historical monuments, lively markets, and hidden gems.
          </p>
        </motion.div>
      </div>

      {/* --- ITINERARY HIGHLIGHTS --- */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-2xl font-bold text-center text-white mb-8">What You Will See</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <HighlightCard 
            icon={<Camera size={32} className="text-blue-500" />}
            title="Mehrangarh Fort"
            desc="One of the largest forts in India, offering spectacular views of the Blue City."
          />
          <HighlightCard 
            icon={<Sunrise size={32} className="text-orange-500" />}
            title="Jaswant Thada"
            desc="The stunning white marble cenotaph often called the Taj Mahal of Marwar."
          />
          <HighlightCard 
            icon={<Compass size={32} className="text-teal-500" />}
            title="Umaid Bhawan"
            desc="A magnificent palace that is part museum, part luxury hotel, and part royal residence."
          />
          <HighlightCard 
            icon={<MapPin size={32} className="text-indigo-500" />}
            title="Mandore Gardens"
            desc="Ancient rock terraces and gorgeous cenotaphs of the former rulers."
          />
        </div>
      </div>

      {/* --- BOOKING WIDGET --- */}
      <div className="container mx-auto px-4 mb-20 relative z-20">
        <BookingWidget />
      </div>

      {/* --- SEO CONTENT SECTION --- */}
      <div className="container mx-auto px-6 bg-slate-800/30 rounded-3xl p-8 md:p-12 mb-10 border border-slate-700/50">
        <h2 className="text-3xl font-bold text-white mb-6">Why Hire a Dedicated Sightseeing Cab in Jodhpur?</h2>
        <div className="space-y-6 text-slate-300 leading-relaxed text-sm md:text-base">
          <p>
            Navigating the narrow, bustling streets of Jodhpur can be overwhelming for tourists. Booking a dedicated <strong>Jodhpur sightseeing taxi</strong> with Shree Dev Tour And Travel is the smartest way to ensure you maximize your vacation time. Rather than hailing auto-rickshaws at every stop and haggling over fares, a fixed full-day cab allows you to leave your shopping bags safely inside the car while you explore.
          </p>
          <p>
            Our drivers are born and raised in Rajasthan. They know the best times to visit Mehrangarh Fort to avoid the crowds, the perfect sunset spots near Rao Jodha Desert Rock Park, and the most authentic places to try Jodhpuri Mirchi Bada and Makhaniya Lassi. By booking our <strong>Jodhpur Local Cab</strong>, you are essentially getting a reliable driver and a local guide in one package.
          </p>
          <p>
            Choose from efficient Sedans for couples or spacious Innova Crystas for larger families. We offer 8-hour / 80km and 12-hour / 120km packages tailored for comprehensive city tours.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <a href="tel:8890472581" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-blue-500/20">
            <Phone size={18} /> Book Sightseeing Cab
          </a>
          <a href="https://wa.me/918890472581?text=Hi%20Shree%20Dev%20Tour%20And%20Travel,%20I%20want%20to%20book%20a%20local%20sightseeing%20taxi%20in%20Jodhpur." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-green-500/20">
            <MessageCircle size={18} /> Plan on WhatsApp
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

export default JodhpurSightseeingTaxi;
