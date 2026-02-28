import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Briefcase, Snowflake, Phone, MessageCircle, Shield, Zap } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Services = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 pt-24 pb-20 overflow-x-hidden">
      
      <Helmet>
        <title>Our Fleet: Innova Crysta, Urbania & Carens | Shree Dev Travels</title>
      </Helmet>

      <div className="text-center mb-20 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block py-1 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.3em] mb-6 uppercase">
            Premium Rajasthan Fleet
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Luxury<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"> Cabs & Urbania</span>
          </h1>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          <PhysicsFleetCard 
            title="Royal SUV"
            model="Innova Crysta"
            price="₹14 - ₹18"
            image="https://images.unsplash.com/photo-1609529669235-c07e4e1bd6e9?q=80&w=2071&auto=format&fit=crop"
            specs={{ seats: '7 Pax', bags: '4 Bags', type: 'Luxury' }}
            isPopular={true}
            accent="from-cyan-500 to-blue-800"
          />

          <PhysicsFleetCard 
            title="Luxury Mini-Bus"
            model="Force Urbania"
            price="₹24 - ₹28"
            image="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2071&auto=format&fit=crop"
            specs={{ seats: '10-17 Pax', bags: '8 Bags', type: 'Premium' }}
            accent="from-amber-600 to-slate-900"
          />

          <PhysicsFleetCard 
            title="Sedan Prime"
            model="Maruti Dzire"
            price="₹10 - ₹11"
            image="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
            specs={{ seats: '4 Pax', bags: '2 Bags', type: 'Economy' }}
            accent="from-blue-600 to-slate-900"
          />
        </div>
      </div>
    </div>
  );
};

const PhysicsFleetCard = ({ title, model, price, image, specs, isPopular, accent }) => {
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

  const waLink = `https://wa.me/918890472581?text=Hi, I want to book ${model} (${title})`;

  return (
    <div 
      className="relative h-[550px] group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      {/* 1. ANIMATED BACKGROUND LAYER (Yeh sirf ghumega) */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="absolute inset-0 rounded-[2.5rem] bg-slate-800/80 border border-slate-700/50 overflow-hidden shadow-2xl pointer-events-none"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-10`}></div>
        
        {/* Car Image with Tilt */}
        <div style={{ transform: "translateZ(50px)" }} className="h-64 w-full relative">
            <img src={image} alt={model} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
        </div>

        {/* Text Details with Tilt */}
        <div style={{ transform: "translateZ(70px)" }} className="p-8">
            <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest mb-1">{specs.type}</p>
            <h2 className="text-3xl font-black text-white leading-none mb-1">{title}</h2>
            <p className="text-slate-500 text-xs font-bold uppercase">{model}</p>
            
            <div className="flex justify-between items-center mt-6">
                <div className="text-2xl font-black text-white tracking-tighter">{price} <span className="text-[10px] text-slate-500 uppercase">/ KM</span></div>
            </div>
        </div>
      </motion.div>

      {/* 2. STATIC INTERACTION LAYER (Yeh nahi ghumega - Click yahin hoga) */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-[100]">
        
        {/* Specs Grid (Static for better visibility) */}
        <div className="grid grid-cols-3 gap-2 mb-8 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-700 text-center">
              <Users size={14} className="mx-auto text-blue-500 mb-1"/>
              <span className="text-[9px] font-bold">{specs.seats}</span>
           </div>
           <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-700 text-center">
              <Briefcase size={14} className="mx-auto text-blue-500 mb-1"/>
              <span className="text-[9px] font-bold">{specs.bags}</span>
           </div>
           <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-700 text-center">
              <Snowflake size={14} className="mx-auto text-blue-500 mb-1"/>
              <span className="text-[9px] font-bold">AC</span>
           </div>
        </div>

        {/* ACTUAL BUTTONS (TOP LAYER) */}
        <div className="grid grid-cols-2 gap-4">
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl transition-all active:scale-95 z-[110]"
          >
            <MessageCircle size={16} /> Book
          </a>
          <a 
            href="tel:8890472581" 
            className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 z-[110]"
          >
            <Phone size={16} /> Call
          </a>
        </div>
      </div>

      {isPopular && (
        <div className="absolute -top-3 -right-2 bg-cyan-500 text-black font-black px-4 py-1.5 rounded-full text-[10px] shadow-xl z-[120] uppercase tracking-tighter">
          Popular
        </div>
      )}
    </div>
  );
};

export default Services;