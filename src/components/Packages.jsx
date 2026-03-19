import React, { useState, useId } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Calendar, CheckCircle, ChevronDown, ChevronUp, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { packagesData } from '../data/packagesData';
import FAQ from './FAQ';

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
          "provider": { "@type": "TravelAgency", "name": "Shree Dev Tour And Travel" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "TouristTrip",
          "name": "Jaisalmer Desert Safari & Camp",
          "description": "Premium desert safari from Jodhpur to Sam Sand Dunes with camel ride and Swiss tent stay.",
          "provider": { "@type": "TravelAgency", "name": "Shree Dev Tour And Travel" }
        }
      }
    ]
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white pt-20 font-sans selection:bg-blue-500/30">

      {/* --- ADVANCED SEO HELMET --- */}
      <Helmet>
        <title>Jodhpur & Jaisalmer Tour Packages | Shree Dev Tour And Travel</title>
        <meta name="description" content="Book premium Rajasthan tour packages. Enjoy Jaisalmer desert safari, Jodhpur city tours (Mehrangarh, Umaid Bhawan), and Jaipur sightseeing in luxury cabs." />
        <meta name="keywords" content="Jodhpur tour package, Jaisalmer desert safari from Jodhpur, Camel ride Jaisalmer, Mehrangarh Fort taxi, Rajasthan itineraries, Sam Sand Dunes camp booking, Jaipur sightseeing cab" />
        <script type="application/ld+json">
          {JSON.stringify(packagesSchema)}
        </script>
      </Helmet>

      {/* --- HERO HEADER (15-Year Expert Persona) --- */}
      <header className="bg-slate-950 py-20 px-6 text-center border-b border-slate-800 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-900/10 blur-3xl rounded-full"></div>
        <div className="relative z-10">
          <p className="text-blue-500 font-bold tracking-widest uppercase mb-4 text-sm flex items-center justify-center gap-2">
            <CheckCircle size={18} /> 15+ Years of Trust & Local Expertise
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Discover the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Real Rajasthan</span>
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed italic border-l-4 border-blue-500 pl-4 text-left md:text-center md:border-l-0 md:pl-0">
            "खम्मा घणी! I've spent the last 15 years showing travelers the true colors, culture, and hidden gems of Rajasthan.
            These aren't just standard taxi tours; these are handcrafted experiences from a local who knows every street, sunset point, and story of this royal land."
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300 font-medium">
            <span className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700 shadow-lg"><MapPin size={16} className="text-emerald-400" /> Authentic Local Routes</span>
            <span className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700 shadow-lg"><CheckCircle size={16} className="text-blue-400" /> Hidden Photo Spots</span>
            <span className="flex items-center gap-2 bg-slate-800/80 px-4 py-2 rounded-full border border-slate-700 shadow-lg"><CheckCircle size={16} className="text-amber-400" /> Safe & Premium Drivers</span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {packagesData.map((pkg) => (
          <PackageCard
            key={pkg.id}
            title={pkg.title}
            duration={pkg.duration}
            price={pkg.price}
            image={pkg.image}
            locations={pkg.locations}
            seoAlt={pkg.seoAlt}
            expertTip={pkg.expertTip}
            itinerary={pkg.itinerary}
          />
        ))}

      </div>
      
      <section className="mt-20"><FAQ /></section>

    </div>

  );
};

// --- EXPANDABLE CARD COMPONENT ---
const PackageCard = ({ title, duration, price, image, locations, itinerary, seoAlt, expertTip }) => {
  const [isOpen, setIsOpen] = useState(false);
  const itineraryId = useId();

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 shadow-xl group hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Header */}
      <div className="h-64 relative bg-slate-900 overflow-hidden">
        <img src={image} alt={seoAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight drop-shadow-md">{title}</h2>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="flex items-center gap-1.5 bg-slate-800/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-700 font-medium"><Clock size={16} className="text-blue-400" /> {duration}</span>
            <span className="flex items-center gap-1.5 bg-slate-800/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-slate-700 font-medium"><MapPin size={16} className="text-emerald-400" /> {locations.length} Sites</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">

        {/* Expert Tip Box */}
        {expertTip && (
          <div className="bg-gradient-to-br from-blue-900/30 to-slate-800 border border-blue-500/30 rounded-xl p-5 mb-6 relative mt-2 shadow-inner">
            <div className="absolute -top-3 left-4 bg-blue-600 px-3 py-0.5 rounded-full text-[10px] md:text-xs font-bold text-white tracking-widest uppercase flex items-center gap-1.5 shadow-md border border-blue-400">
              <CheckCircle size={12} /> My 15-Year Expert Tip
            </div>
            <p className="text-sm text-blue-100/90 italic leading-relaxed pt-1">
              "{expertTip}"
            </p>
          </div>
        )}

        {/* Locations Tags */}
        <div className="flex flex-wrap gap-2 mb-6" aria-label="Locations covered">
          {locations.map((loc, i) => (
            <span key={i} className="text-xs font-medium bg-slate-900/80 border border-slate-700/80 text-slate-300 px-3 py-1.5 rounded-full shadow-sm hover:border-slate-500 transition-colors">
              {loc}
            </span>
          ))}
        </div>

        {/* Price & Action */}
        <div className="flex justify-between items-end mb-6 border-b border-slate-700/50 pb-6 mt-auto">
          <div>
            <p className="text-sm text-slate-400 uppercase font-bold tracking-wider mb-1">Starting From</p>
            <p className="text-3xl md:text-4xl font-extrabold text-white">{price}</p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls={itineraryId}
            className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition font-bold text-sm bg-emerald-400/10 hover:bg-emerald-400/20 px-4 py-2.5 rounded-lg border border-emerald-400/20"
          >
            {isOpen ? 'Close' : 'View Plan'} {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
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
              <div className="space-y-6 mb-6 bg-slate-900/60 p-5 md:p-6 rounded-2xl border border-slate-700/50 relative">
                {itinerary.map((item, index) => (
                  <div key={index} className="flex gap-4 relative z-10 group">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white shadow-[0_0_10px_rgba(37,99,235,0.4)] ring-4 ring-slate-900 group-hover:bg-blue-500 transition-colors">
                        {index + 1}
                      </div>
                      {index !== itinerary.length - 1 && <div className="w-0.5 h-full bg-slate-700/80 my-2 rounded-full"></div>}
                    </div>
                    <div className="pb-2">
                      <h3 className="font-bold text-white text-base mb-1.5">{item.day}</h3>
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
          href={`https://wa.me/918890472581?text=Hi%20Shree%20Dev%20Tour%20And%20Travel,%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(title)}%20Package.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-center py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 active:scale-[0.98] text-lg"
        >
          <Phone size={20} className="animate-pulse" /> Book This Experience
        </a>

      </div>
    </motion.article>
  );
};

export default Packages;