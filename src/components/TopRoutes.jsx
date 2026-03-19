import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const TopRoutes = () => {
  // --- ADVANCED SEO: ItemList Schema for Google Carousels ---
  const topRoutesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Jodhpur Local Sightseeing & Mehrangarh Tour",
        "url": "https://shreedevjodhpur.in/packages"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Jaisalmer Desert Safari & Sand Dunes Camp",
        "url": "https://shreedevjodhpur.in/packages"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Jaipur Outstation Cab & Pink City Tour",
        "url": "https://shreedevjodhpur.in/packages"
      }
    ]
  };

  return (
    <section className="bg-slate-900 py-24 px-6 relative overflow-hidden" aria-label="Popular Rajasthan Tour Routes">
      
      {/* Injecting Schema directly into this component */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(topRoutesSchema) }} />

      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <header className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-widest text-sm uppercase">Explore Rajasthan</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Top Sightseeing Routes</h2>
          <p className="text-slate-400 mt-3 max-w-2xl mx-auto">Book premium cabs and tour packages for the most visited destinations in Rajasthan.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Jodhpur */}
          <DestinationCard 
            name="Jodhpur" 
            tag="Mehrangarh & Blue City" 
            image="https://images.pexels.com/photos/797824/pexels-photo-797824.jpeg"
            seoAlt="Jodhpur local sightseeing taxi and Mehrangarh fort tour"
            linkTo="/packages"
            linkTitle="Explore Jodhpur Taxi and Tour Packages"
          />
          {/* Jaisalmer */}
          <DestinationCard 
            name="Jaisalmer" 
            tag="Sand Dunes & Camel Ride" 
            image="https://images.pexels.com/photos/30573733/pexels-photo-30573733.jpeg"
            seoAlt="Jaisalmer desert safari tour packages from Jodhpur"
            linkTo="/packages"
            linkTitle="Book Jaisalmer Desert Safari Packages"
          />
          {/* Jaipur */}
          <DestinationCard 
            name="Jaipur" 
            tag="Amber Fort & Pink City" 
            image="https://images.pexels.com/photos/2588193/pexels-photo-2588193.jpeg"
            seoAlt="Jaipur to Jodhpur outstation cab service"
            linkTo="/packages"
            linkTitle="Hire Outstation Cabs for Jaipur Tour"
          />
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link 
            to="/packages" 
            title="View All Rajasthan Tour Packages"
            aria-label="View all Rajasthan tour packages" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-slate-700 hover:border-white pb-1 font-medium group"
          >
            View All Tour Packages <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// --- INTERACTIVE DESTINATION CARD COMPONENT ---
const DestinationCard = ({ name, tag, image, seoAlt, linkTo, linkTitle }) => (
  <Link 
    to={linkTo} 
    title={linkTitle}
    aria-label={linkTitle}
    className="block focus:outline-none focus:ring-4 focus:ring-blue-500/50 rounded-3xl"
  >
    <motion.div 
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.96 }} 
      className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/50"
    >
      <img src={image} alt={seoAlt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-8">
        {/* Animated Hover Button */}
        <div className="mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <span className="bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            View {name} Packages &rarr;
          </span>
        </div>

        <h3 className="text-3xl font-bold text-white mb-2">{name}</h3>
        <p className="text-slate-300 text-sm font-medium flex items-center gap-2">
            <MapPin size={14} className="text-blue-500" aria-hidden="true" /> {tag}
        </p>
      </div>
    </motion.div>
  </Link>
);

export default TopRoutes;