import React, { useState, useId } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Calendar, CheckCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Packages = () => {
  // JSON-LD Schema for Tour Packages (High SEO Value)
  const packagesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "TouristTrip",
          "name": "Jodhpur Heritage & City Tour",
          "description": "Explore Mehrangarh Fort, Umaid Bhawan, and the Blue City in a premium cab.",
          "provider": { "@type": "TravelAgency", "name": "Shree Dev Travels" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "TouristTrip",
          "name": "Jaisalmer Desert Safari & Camp",
          "description": "Premium desert safari from Jodhpur to Sam Sand Dunes with camel ride and Swiss tent stay.",
          "provider": { "@type": "TravelAgency", "name": "Shree Dev Travels" }
        }
      }
    ]
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white pt-20 font-sans selection:bg-blue-500/30">
      
      {/* --- ADVANCED SEO HELMET --- */}
      <Helmet>
        <title>Jodhpur & Jaisalmer Tour Packages | Shree Dev Travels</title>
        <meta name="description" content="Book premium Rajasthan tour packages. Enjoy Jaisalmer desert safari, Jodhpur city tours (Mehrangarh, Umaid Bhawan), and Jaipur sightseeing in luxury cabs." />
        <meta name="keywords" content="Jodhpur tour package, Jaisalmer desert safari from Jodhpur, Camel ride Jaisalmer, Mehrangarh Fort taxi, Rajasthan itineraries, Sam Sand Dunes camp booking, Jaipur sightseeing cab" />
        <script type="application/ld+json">
          {JSON.stringify(packagesSchema)}
        </script>
      </Helmet>

      {/* --- HERO HEADER (SEO Optimized H1) --- */}
      <header className="bg-slate-950 py-20 px-6 text-center border-b border-slate-800">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Premium <span className="text-blue-500">Rajasthan Tours</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Experience the royalty of Rajasthan with our expert drivers. Book complete itineraries in our luxury <strong>Innova Crysta</strong> or <strong>Force Urbania</strong> for a safe and comfortable journey.
        </p>
      </header>

      {/* --- PACKAGES GRID --- */}
      <main className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* PACKAGE 1: JODHPUR (COMPETITOR BAIT - Moved to Top) */}
          <PackageCard 
            title="Jodhpur Heritage & City Tour"
            duration="2 Days / 1 Night"
            price="₹5,500"
            image="https://images.pexels.com/photos/797824/pexels-photo-797824.jpeg"
            locations={['Mehrangarh Fort', 'Umaid Bhawan', 'Jaswant Thada', 'Clock Tower']}
            seoAlt="Jodhpur city tour package including Mehrangarh Fort and Umaid Bhawan taxi"
            itinerary={[
              { day: 'Day 1', plan: 'Arrival in Jodhpur. Hotel Check-in. Visit the magnificent Umaid Bhawan Palace Museum and Toorji Ka Jhalra (Stepwell).' },
              { day: 'Day 2', plan: 'Explore the grand Mehrangarh Fort and Jaswant Thada. Enjoy local street food and shopping at Ghanta Ghar (Clock Tower). Evening Drop-off.' }
            ]}
          />

          {/* PACKAGE 2: JAISALMER (HIGH MARGIN & HIGH SEARCH VOL) */}
          <PackageCard 
            title="Jaisalmer Desert Safari & Camp"
            duration="3 Days / 2 Nights"
            price="₹12,500"
            image="https://images.pexels.com/photos/12912712/pexels-photo-12912712.jpeg"
            locations={['Sam Sand Dunes', 'Camel Ride', 'Jeep Safari', 'Golden Fort']}
            seoAlt="Jaisalmer desert safari tour package with camel ride and Swiss tents"
            itinerary={[
              { day: 'Day 1', plan: 'Pickup in Jaisalmer or Jodhpur. Hotel Check-in. Visit the living Jaisalmer Fort (Golden Fort) and beautiful Patwon Ki Haveli. Evening at Gadisar Lake.' },
              { day: 'Day 2', plan: 'Move to Sam Sand Dunes. Experience thrilling Jeep Safari, evening Camel Ride, Rajasthani cultural folk dance, and dinner. Night stay in Swiss Tents.' },
              { day: 'Day 3', plan: 'Morning breakfast at the desert camp and transfer to Railway Station/Airport.' }
            ]}
          />

          {/* PACKAGE 3: JAIPUR */}
          <PackageCard 
            title="Jaipur Royal Darshan"
            duration="2 Days / 1 Night"
            price="₹4,500"
            image="https://images.pexels.com/photos/11750442/pexels-photo-11750442.jpeg"
            locations={['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jal Mahal']}
            seoAlt="Jaipur local sightseeing tour package by premium cab"
            itinerary={[
              { day: 'Day 1', plan: 'Pickup from Jaipur Airport/Station. Check-in. Visit City Palace, Jantar Mantar & Hawa Mahal. Evening shopping at Johri Bazar.' },
              { day: 'Day 2', plan: 'Morning visit to Amber Fort. Stop at Jal Mahal for photography & Nahargarh Fort for sunset views. Drop at Airport/Station.' }
            ]}
          />

          {/* PACKAGE 4: THE ULTIMATE COMBO */}
          <PackageCard 
            title="Ultimate Rajasthan (Jaipur-Jodhpur-Jaisalmer)"
            duration="6 Days / 5 Nights"
            price="₹28,000"
            image="https://media.istockphoto.com/id/1224021113/photo/indian-cameleers-camel-driver-with-camel-silhouettes-in-dunes-on-sunset-jaisalmer-rajasthan.jpg?s=2048x2048&w=is&k=20&c=7jfwu64-qz1QkDyB24lih3bwbgQYlKfF3ePozOU7shA="
            locations={['Jaipur', 'Jodhpur', 'Jaisalmer Camp', 'Sightseeing']}
            seoAlt="Complete Rajasthan tour package covering Jaipur, Jodhpur, and Jaisalmer"
            itinerary={[
              { day: 'Day 1 & 2', plan: 'Jaipur Arrival. Explore Amber Fort, Hawa Mahal, City Palace, and Chokhi Dhani.' },
              { day: 'Day 3', plan: 'Drive to Jodhpur in Innova/Urbania. Visit Mehrangarh Fort & Umaid Bhawan. Night stay in Jodhpur.' },
              { day: 'Day 4 & 5', plan: 'Drive to Jaisalmer. City tour on Day 4. Day 5 dedicated to Sam Sand Dunes (Camel Ride & Desert Camp).' },
              { day: 'Day 6', plan: 'Breakfast and drop-off for your return journey.' }
            ]}
          />

        </div>
      </main>
    </div>
  );
};

// --- EXPANDABLE CARD COMPONENT ---
const PackageCard = ({ title, duration, price, image, locations, itinerary, seoAlt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itineraryId = useId(); // For accessibility

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl"
    >
      {/* Image Header */}
      <div className="h-64 relative bg-slate-900">
        <img src={image} alt={seoAlt} className="w-full h-full object-cover" loading="lazy" />
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
        <div className="flex flex-wrap gap-2 mb-6" aria-label="Locations covered">
          {locations.map((loc, i) => (
            <span key={i} className="text-xs bg-slate-900 border border-slate-700 text-slate-400 px-3 py-1 rounded-full">
              {loc}
            </span>
          ))}
        </div>

        {/* Price & Action */}
        <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-6">
          <div>
            <p className="text-xs text-slate-500 uppercase font-semibold">Starting From</p>
            <p className="text-3xl font-bold text-white">{price}</p>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls={itineraryId}
            className="flex items-center gap-2 text-blue-400 hover:text-white transition font-bold"
          >
            {isOpen ? 'Hide Itinerary' : 'View Itinerary'} {isOpen ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
          </button>
        </div>

        {/* Expanded Itinerary */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              id={itineraryId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="space-y-4 mb-6 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                {itinerary.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                        {index + 1}
                      </div>
                      {index !== itinerary.length - 1 && <div className="w-0.5 h-full bg-slate-700 my-1"></div>}
                    </div>
                    <div>
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
          href={`https://wa.me/918890472581?text=Hi%20Shree%20Dev%20Travels,%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(title)}%20Package.`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-600 hover:bg-blue-500 text-white text-center py-4 rounded-xl font-bold transition shadow-lg shadow-blue-600/20 active:scale-95"
        >
          Book This Package
        </a>

      </div>
    </motion.article>
  );
};

export default Packages;