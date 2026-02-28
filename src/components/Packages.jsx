import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Calendar, CheckCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Packages = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white pt-20 font-sans selection:bg-blue-500/30">
      
      {/* --- ADVANCED SEO HELMET --- */}
      <Helmet>
        <title>Rajasthan Tour Packages: Jodhpur, Jaisalmer Safari & Jaipur</title>
        <meta name="description" content="Book affordable Rajasthan tour packages. Enjoy Jaisalmer desert safari, camel rides, Jodhpur city tours (Mehrangarh, Umaid Bhawan), and Jaipur sightseeing." />
        <meta name="keywords" content="Jodhpur tour package, Jaisalmer desert safari, Camel ride Jaisalmer, Mehrangarh Fort taxi, Umaid Bhawan tour, Rajasthan itineraries, hire cab for Rajasthan tour, Sam Sand Dunes camp" />
      </Helmet>

      {/* --- HERO HEADER (SEO Optimized H1) --- */}
      <div className="bg-slate-950 py-20 px-6 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Rajasthan <span className="text-blue-500">Tour Packages</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Experience the royalty of Rajasthan. From the blue streets of Jodhpur to the golden sand dunes of Jaisalmer, explore our best-selling itineraries.
        </p>
      </div>

      {/* --- PACKAGES GRID --- */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* PACKAGE 1: JAIPUR */}
          <PackageCard 
            title="Jaipur Royal Darshan"
            duration="2 Days / 1 Night"
            price="₹4,500"
            image="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop"
            locations={['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jal Mahal']}
            itinerary={[
              { day: 'Day 1', plan: 'Pickup from Jaipur Airport/Station. Check-in. Visit City Palace, Jantar Mantar & Hawa Mahal. Evening shopping at Johri Bazar.' },
              { day: 'Day 2', plan: 'Morning visit to Amber Fort. Stop at Jal Mahal for photography & Nahargarh Fort for sunset views. Drop at Airport/Station.' }
            ]}
          />

          {/* PACKAGE 2: JODHPUR (COMPETITOR BAIT 🎯) */}
          <PackageCard 
            title="Jodhpur Heritage & City Tour"
            duration="2 Days / 1 Night"
            price="₹5,500"
            image="https://images.unsplash.com/photo-1599557404456-11f879bfac12?q=80&w=1935&auto=format&fit=crop"
            locations={['Mehrangarh Fort', 'Umaid Bhawan', 'Jaswant Thada', 'Clock Tower']}
            itinerary={[
              { day: 'Day 1', plan: 'Arrival in Jodhpur. Hotel Check-in. Visit the magnificent Umaid Bhawan Palace Museum and Toorji Ka Jhalra (Stepwell).' },
              { day: 'Day 2', plan: 'Explore the grand Mehrangarh Fort and Jaswant Thada. Enjoy local street food and shopping at Ghanta Ghar (Clock Tower). Evening Drop-off.' }
            ]}
          />

          {/* PACKAGE 3: JAISALMER (HIGH MARGIN & HIGH SEARCH VOL 🎯) */}
          <PackageCard 
            title="Jaisalmer Desert Safari & Camp"
            duration="3 Days / 2 Nights"
            price="₹12,500"
            image="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1886&auto=format&fit=crop"
            locations={['Sam Sand Dunes', 'Camel Ride', 'Jeep Safari', 'Golden Fort']}
            itinerary={[
              { day: 'Day 1', plan: 'Pickup in Jaisalmer. Hotel Check-in. Visit the living Jaisalmer Fort (Golden Fort) and beautiful Patwon Ki Haveli. Evening at Gadisar Lake.' },
              { day: 'Day 2', plan: 'Move to Sam Sand Dunes. Experience thrilling Jeep Safari, evening Camel Ride, Rajasthani cultural folk dance, and dinner. Night stay in Swiss Tents.' },
              { day: 'Day 3', plan: 'Morning breakfast at the desert camp and transfer to Railway Station/Airport.' }
            ]}
          />

          {/* PACKAGE 4: THE ULTIMATE COMBO */}
          <PackageCard 
            title="The Ultimate Rajasthan (Jaipur-Jodhpur-Jaisalmer)"
            duration="6 Days / 5 Nights"
            price="₹28,000"
            image="https://images.unsplash.com/photo-1604312591603-f01e18cc8564?q=80&w=2072&auto=format&fit=crop"
            locations={['Jaipur', 'Jodhpur', 'Jaisalmer Camp', 'Sightseeing']}
            itinerary={[
              { day: 'Day 1 & 2', plan: 'Jaipur Arrival. Explore Amber Fort, Hawa Mahal, City Palace, and Chokhi Dhani.' },
              { day: 'Day 3', plan: 'Drive to Jodhpur in Innova/Urbania. Visit Mehrangarh Fort & Umaid Bhawan. Night stay in Jodhpur.' },
              { day: 'Day 4 & 5', plan: 'Drive to Jaisalmer. City tour on Day 4. Day 5 dedicated to Sam Sand Dunes (Camel Ride & Desert Camp).' },
              { day: 'Day 6', plan: 'Breakfast and drop-off for your return journey.' }
            ]}
          />

        </div>
      </div>
    </div>
  );
};

// --- EXPANDABLE CARD COMPONENT ---
const PackageCard = ({ title, duration, price, image, locations, itinerary }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl"
    >
      {/* Image Header */}
      <div className="h-64 relative">
        {/* SEO Alt Tag updated dynamically */}
        <img src={image} alt={`${title} Booking Rajasthan`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          {/* Main Title changed to H2 for SEO Hierarchy */}
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <div className="flex items-center gap-4 text-sm text-slate-300 mt-1">
            <span className="flex items-center gap-1"><Clock size={14} className="text-blue-500"/> {duration}</span>
            <span className="flex items-center gap-1"><MapPin size={14} className="text-blue-500"/> {locations.length} Stops</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Locations Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {locations.map((loc, i) => (
            <span key={i} className="text-xs bg-slate-900 border border-slate-700 text-slate-400 px-3 py-1 rounded-full">
              {loc}
            </span>
          ))}
        </div>

        {/* Price & Action */}
        <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-6">
          <div>
            <p className="text-xs text-slate-500 uppercase">Starting From</p>
            <p className="text-3xl font-bold text-white">{price}</p>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-blue-400 hover:text-white transition font-semibold"
          >
            {isOpen ? 'Hide Itinerary' : 'View Itinerary'} {isOpen ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
          </button>
        </div>

        {/* Expanded Itinerary */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 mb-6 bg-slate-900/50 p-4 rounded-xl">
                {itinerary.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                        {index + 1}
                      </div>
                      {index !== itinerary.length - 1 && <div className="w-0.5 h-full bg-slate-700 my-1"></div>}
                    </div>
                    <div>
                      {/* Sub-headings changed to H3 for SEO */}
                      <h3 className="font-bold text-white text-sm">{item.day}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.plan}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Book Button */}
        <a 
          href={`https://wa.me/918890472581?text=Hi,%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(title)}%20Package.`}
          className="block w-full bg-blue-600 hover:bg-blue-500 text-white text-center py-4 rounded-xl font-bold transition shadow-lg shadow-blue-600/20"
        >
          Book This Package
        </a>

      </div>
    </motion.div>
  );
};

export default Packages;