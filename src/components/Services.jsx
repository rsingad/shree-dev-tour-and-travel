import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Car, Users, Briefcase, Snowflake, Phone, MessageCircle, Shield, Zap } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Services = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 pt-24 pb-20 overflow-x-hidden">
      <Helmet>
        <title>Quantum Fleet | Shree Dev Travels</title>
      </Helmet>

      {/* --- HERO HEADER --- */}
      <div className="text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.2em] mb-4">
            FLEET CLASS: TITANIUM
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hyper<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Velocity</span> Fleet
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Physics-driven comfort. Select your vehicle for inter-city traversal.
            Interact with the cards below.
          </p>
        </motion.div>
      </div>

      {/* --- PHYSICS CARDS GRID --- */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <PhysicsFleetCard 
            title="Sedan Prime"
            model="Etios / Dzire"
            price="₹10 - ₹11"
            image="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
            specs={{ seats: '4 Pax', bags: '2 Bags', type: 'Economy' }}
            accent="from-blue-600 to-slate-900"
          />

          <PhysicsFleetCard 
            title="Royal SUV"
            model="Innova Crysta"
            price="₹14 - ₹18"
            image="https://images.unsplash.com/photo-1609529669235-c07e4e1bd6e9?q=80&w=2071&auto=format&fit=crop"
            specs={{ seats: '7 Pax', bags: '4 Bags', type: 'Premium' }}
            isPopular={true}
            accent="from-cyan-500 to-blue-800"
          />

          <PhysicsFleetCard 
            title="Voyager Bus"
            model="Tempo Traveller"
            price="₹22 - ₹26"
            image="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
            specs={{ seats: '12+ Pax', bags: '10 Bags', type: 'Luxury' }}
            accent="from-purple-600 to-slate-900"
          />

        </div>
      </div>

      {/* --- BOTTOM INFO --- */}
      <div className="container mx-auto px-6 mt-32 border-t border-slate-800 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <InfoBlock icon={<Shield className="text-blue-500"/>} title="Energy Shields" desc="Sanitized & Safe Cabins" />
            <InfoBlock icon={<Zap className="text-blue-500"/>} title="Warp Speed" desc="On-Time, Every Time" />
            <InfoBlock icon={<Phone className="text-blue-500"/>} title="24/7 Comms" desc="Always Connected Support" />
        </div>
      </div>

    </div>
  );
};

// --- PHYSICS CARD COMPONENT (The Magic) ---
const PhysicsFleetCard = ({ title, model, price, image, specs, isPopular, accent }) => {
  const ref = useRef(null);

  // Motion Values for Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth physics (Mass & Tension like real object)
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Transform Mouse Position to Rotation Degrees (3D Tilt)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
  // Glare Effect Movement
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to card center (-0.5 to 0.5)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Snap back to center
    x.set(0);
    y.set(0);
  };

  const waLink = `https://wa.me/918890472581?text=Booking Inquiry for ${title}`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d", // Crucial for 3D effect
      }}
      className="relative h-[500px] rounded-3xl bg-slate-800 border border-slate-700/50 group cursor-pointer perspective-1000"
    >
      {/* Popular Badge */}
      {isPopular && (
        <div style={{ transform: "translateZ(60px)" }} className="absolute -top-4 -right-4 bg-cyan-500 text-black font-bold px-4 py-1 rounded-full text-xs shadow-lg shadow-cyan-500/40 z-50">
          TOP CHOICE
        </div>
      )}

      {/* --- LAYER 1: BACKGROUND & GRADIENT --- */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

      {/* --- LAYER 2: CAR IMAGE (Floating in 3D) --- */}
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="absolute top-0 left-0 w-full h-64 overflow-hidden rounded-t-3xl"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800 z-10"></div>
        <img 
          src={image} 
          alt={model} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>

      {/* --- LAYER 3: CONTENT (Floating higher) --- */}
      <div 
        style={{ transform: "translateZ(70px)" }} 
        className="absolute bottom-0 left-0 w-full p-8"
      >
        <div className="flex justify-between items-end mb-4">
          <div>
            <p className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">{specs.type}</p>
            <h3 className="text-3xl font-bold text-white">{title}</h3>
            <p className="text-slate-400 text-sm">{model}</p>
          </div>
          <div className="text-right">
             <div className="text-2xl font-bold text-white">{price}</div>
             <div className="text-[10px] text-slate-500 uppercase">Per KM</div>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 mb-6 text-xs text-slate-300 font-medium">
          <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-700 text-center flex flex-col items-center gap-1">
             <Users size={14} className="text-blue-500"/> {specs.seats}
          </div>
          <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-700 text-center flex flex-col items-center gap-1">
             <Briefcase size={14} className="text-blue-500"/> {specs.bags}
          </div>
          <div className="bg-slate-900/50 p-2 rounded-lg border border-slate-700 text-center flex flex-col items-center gap-1">
             <Snowflake size={14} className="text-blue-500"/> AC
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <a href={waLink} className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-600/20 transition-all active:scale-95">
            <MessageCircle size={16} /> Book
          </a>
          <a href="tel:8890472581" className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl font-bold text-sm transition-all active:scale-95">
            <Phone size={16} /> Call
          </a>
        </div>
      </div>

      {/* --- LAYER 4: DYNAMIC GLARE (Reflection) --- */}
      <motion.div 
        style={{ 
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.1), transparent 80%)`,
          opacity: 0
        }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 rounded-3xl pointer-events-none z-40 mix-blend-overlay"
      />

    </motion.div>
  );
};

const InfoBlock = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center">
    <div className="mb-4 bg-slate-800 p-4 rounded-full border border-slate-700 shadow-xl">{icon}</div>
    <h4 className="text-white font-bold text-lg">{title}</h4>
    <p className="text-slate-500 text-sm">{desc}</p>
  </div>
);

export default Services;