import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Briefcase, Snowflake, Phone, MessageCircle, Shield, Zap } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Services = () => {

  // JSON-LD Schema for Local Car Rental Service (SEO Boost)
  const fleetSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": "Shree Dev Tour & Travels Fleet",
    "url": "https://shreedevjodhpur.in/services",
    "telephone": "+918890472581",
    "priceRange": "₹10 - ₹28 per km",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jodhpur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Premium Car Rental Jodhpur",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Innova Crysta on Rent" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Force Urbania 12/17 Seater" }
        },
        {
          "@type": "Offer",
          "itemOffered": { "@type": "Service", "name": "Maruti Dzire Taxi" }
        }
      ]
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 pt-24 pb-20 overflow-x-hidden">
      
      {/* --- ADVANCED SEO HELMET --- */}
      <Helmet>
        <title>Hire Innova Crysta & Force Urbania in Jodhpur | Shree Dev Travels</title>
        <meta name="description" content="Looking for premium cabs in Jodhpur? Rent Innova Crysta, Force Urbania, or Sedans at the best per-km rates. Safe, sanitized, and GPS-enabled outstation taxis." />
        <meta name="keywords" content="Innova Crysta rent Jodhpur, Force Urbania taxi Rajasthan, hire Innova in Jodhpur, premium cab Jodhpur, Jodhpur to Jaisalmer taxi, 12 seater Urbania Jodhpur, best car rental Rajasthan" />
        <script type="application/ld+json">
          {JSON.stringify(fleetSchema)}
        </script>
      </Helmet>

      {/* --- PAGE HEADER (SEO Optimized H1) --- */}
      <div className="text-center mb-20 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
            Top Rated Car Rental in Rajasthan
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Fleet</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto px-4 text-sm md:text-base">
            From comfortable Sedans for local Jodhpur sightseeing to luxury <strong>Innova Crysta</strong> and <strong>Force Urbania</strong> for complete Rajasthan tours.
          </p>
        </motion.div>
      </div>

      {/* --- FLEET GRID --- */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          <PhysicsFleetCard 
            title="Premium SUV"
            model="Innova Crysta"
            price="₹14 - ₹18"
            image="https://images.pexels.com/photos/1239228/pexels-photo-1239228.jpeg"
            specs={{ seats: '6-7 Pax', bags: '4 Bags', type: 'Luxury Tour' }}
            isPopular={true}
            accent="from-cyan-500 to-blue-800"
            seoAlt="Innova Crysta on rent in Jodhpur for Rajasthan Tour"
          />

          {/* Targeted Competitor Keyword: Force Urbania */}
          <PhysicsFleetCard 
            title="Luxury Mini-Bus"
            model="Force Urbania"
            price="₹24 - ₹28"
            image="https://images.pexels.com/photos/18029632/pexels-photo-18029632.jpeg"
            specs={{ seats: '10-17 Pax', bags: '8 Bags', type: 'Group Travel' }}
            accent="from-amber-600 to-slate-900"
            seoAlt="Force Urbania 12 17 seater taxi in Jodhpur Rajasthan"
          />

          <PhysicsFleetCard 
            title="Sedan Prime"
            model="Maruti Dzire"
            price="₹10 - ₹11"
            image="https://images.pexels.com/photos/30648753/pexels-photo-30648753.jpeg"
            specs={{ seats: '4 Pax', bags: '2 Bags', type: 'Economy / Local' }}
            accent="from-blue-600 to-slate-900"
            seoAlt="Maruti Dzire Etios taxi service in Jodhpur"
          />
        </div>
      </div>
    </div>
  );
};

// --- 3D INTERACTIVE CARD COMPONENT ---
const PhysicsFleetCard = ({ title, model, price, image, specs, isPopular, accent, seoAlt }) => {
  const cardRef = useRef(null);
  
  // Motion Values for Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Smart WhatsApp Link with Context
  const waLink = `https://wa.me/918890472581?text=Hi%20Shree%20Dev%20Travels,%20I%20want%20to%20enquire%20about%20booking%20the%20${encodeURIComponent(model)}%20(${encodeURIComponent(title)})%20for%20a%20Rajasthan%20trip.`;

  return (
    <div 
      className="relative h-[550px] group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      {/* 1. ANIMATED BACKGROUND LAYER */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="absolute inset-0 rounded-[2.5rem] bg-slate-800/80 border border-slate-700/50 overflow-hidden shadow-2xl pointer-events-none"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-10`}></div>
        
        {/* Car Image with SEO Alt tag */}
        <div style={{ transform: "translateZ(50px)" }} className="h-64 w-full relative bg-slate-800">
            <img src={image} alt={seoAlt} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
        </div>

        {/* Text Details */}
        <div style={{ transform: "translateZ(70px)" }} className="p-8">
            <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest mb-1">{specs.type}</p>
            {/* Changed to h2 for better SEO Hierarchy */}
            <h2 className="text-3xl font-black text-white leading-none mb-1">{title}</h2>
            <h3 className="text-slate-500 text-xs font-bold uppercase">{model}</h3>
            
            <div className="flex justify-between items-center mt-6">
                <div className="text-2xl font-black text-white tracking-tighter">{price} <span className="text-[10px] text-slate-500 uppercase">/ KM</span></div>
            </div>
        </div>
      </motion.div>

      {/* 2. STATIC INTERACTION LAYER */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-[100]">
        
        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 mb-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-700 text-center shadow-lg">
              <Users size={14} className="mx-auto text-blue-500 mb-1"/>
              <span className="text-[9px] font-bold">{specs.seats}</span>
           </div>
           <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-700 text-center shadow-lg">
              <Briefcase size={14} className="mx-auto text-blue-500 mb-1"/>
              <span className="text-[9px] font-bold">{specs.bags}</span>
           </div>
           <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-700 text-center shadow-lg">
              <Snowflake size={14} className="mx-auto text-blue-500 mb-1"/>
              <span className="text-[9px] font-bold">AC</span>
           </div>
        </div>

        {/* ACTUAL BUTTONS */}
        <div className="grid grid-cols-2 gap-4">
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label={`Book ${model} on WhatsApp`}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl transition-all active:scale-95 z-[110]"
          >
            <MessageCircle size={16} /> Book
          </a>
          <a 
            href="tel:8890472581" 
            aria-label={`Call to book ${model}`}
            className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 z-[110]"
          >
            <Phone size={16} /> Call
          </a>
        </div>
      </div>

      {isPopular && (
        <div className="absolute -top-3 -right-2 bg-cyan-500 text-black font-black px-4 py-1.5 rounded-full text-[10px] shadow-xl z-[120] uppercase tracking-tighter">
          High Demand
        </div>
      )}
    </div>
  );
};

export default Services;