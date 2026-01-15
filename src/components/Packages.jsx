import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Calendar, CheckCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Packages = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white pt-20 font-sans selection:bg-blue-500/30">
      <Helmet>
        <title>Premium Tour Packages | Rajasthan & India</title>
      </Helmet>

      {/* --- HERO HEADER --- */}
      <div className="bg-slate-950 py-20 px-6 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Curated <span className="text-blue-500">Experiences</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Don't just travel, explore. Select from our expertly crafted itineraries designed for comfort and discovery.
        </p>
      </div>

      {/* --- PACKAGES GRID --- */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <PackageCard 
            title="Jaipur Royal Darshan"
            duration="2 Days / 1 Night"
            price="₹4,500"
            image="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop"
            locations={['Amber Fort', 'Hawa Mahal', 'City Palace', 'Nahargarh']}
            itinerary={[
              { day: 'Day 1', plan: 'Pickup from Airport/Station. Check-in. Visit City Palace, Jantar Mantar & Hawa Mahal. Evening shopping at Johri Bazar.' },
              { day: 'Day 2', plan: 'Morning Elephant ride at Amber Fort. Visit Jal Mahal & Nahargarh Fort for sunset. Drop at Airport.' }
            ]}
          />

          <PackageCard 
            title="Udaipur Lake Fantasy"
            duration="3 Days / 2 Nights"
            price="₹12,000"
            image="https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1974&auto=format&fit=crop"
            locations={['City Palace', 'Lake Pichola', 'Fateh Sagar', 'Sajjangarh']}
            itinerary={[
              { day: 'Day 1', plan: 'Departure from Jaipur (6 hrs drive). Hotel Check-in. Evening Boat ride at Lake Pichola.' },
              { day: 'Day 2', plan: 'Full day sightseeing: City Palace, Jagdish Temple, Saheliyon Ki Bari. Sunset at Monsoon Palace.' },
              { day: 'Day 3', plan: 'Visit Fateh Sagar Lake and drive back to Jaipur.' }
            ]}
          />

          <PackageCard 
            title="Golden Triangle (Delhi-Agra-Jaipur)"
            duration="5 Days / 4 Nights"
            price="₹25,000"
            image="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop"
            locations={['Taj Mahal', 'India Gate', 'Amber Fort', 'Red Fort']}
            itinerary={[
              { day: 'Day 1', plan: 'Pickup in Delhi. Sightseeing (India Gate, Qutub Minar). Night stay in Delhi.' },
              { day: 'Day 2', plan: 'Drive to Agra. Visit Taj Mahal & Agra Fort. Night stay in Agra.' },
              { day: 'Day 3', plan: 'Drive to Jaipur via Fatehpur Sikri. Evening at Chokhi Dhani.' },
              { day: 'Day 4', plan: 'Jaipur Sightseeing (Amber Fort, City Palace). Night stay in Jaipur.' },
              { day: 'Day 5', plan: 'Shopping and Drop back to Delhi.' }
            ]}
          />

          <PackageCard 
            title="Jaisalmer Desert Safari"
            duration="4 Days / 3 Nights"
            price="₹18,500"
            image="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1886&auto=format&fit=crop"
            locations={['Golden Fort', 'Sam Sand Dunes', 'Gadisar Lake', 'Patwon Ki Haveli']}
            itinerary={[
              { day: 'Day 1', plan: 'Drive to Jaisalmer. Hotel Check-in. Relax.' },
              { day: 'Day 2', plan: 'Jaisalmer Fort & City Tour. Gadisar Lake boating.' },
              { day: 'Day 3', plan: 'Desert Camp Stay. Camel Ride, Jeep Safari, Cultural Dance & Dinner on Dunes.' },
              { day: 'Day 4', plan: 'Breakfast at Camp and drive back.' }
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
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4">
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
                      <h4 className="font-bold text-white text-sm">{item.day}</h4>
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
          href={`https://wa.me/918890472581?text=I am interested in ${title} Package`}
          className="block w-full bg-blue-600 hover:bg-blue-500 text-white text-center py-4 rounded-xl font-bold transition shadow-lg shadow-blue-600/20"
        >
          Book This Package
        </a>

      </div>
    </motion.div>
  );
};

export default Packages;