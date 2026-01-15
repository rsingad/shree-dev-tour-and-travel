import React, { useRef, useState, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, ContactShadows, Grid, SpotLight } from '@react-three/drei';
import { Phone, MapPin, ChevronRight, Star, Shield, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import BookingWidget from './BookingWidget'; // Ensure file exists

// --- 3D CAR MODEL ---
const RealCarModel = () => {
  const { scene } = useGLTF('/cars.glb'); 
  const carRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    carRef.current.rotation.y = Math.sin(t / 4) * 0.2; 
  });

  return (
    <primitive 
      ref={carRef}
      object={scene} 
      scale={0.6} 
      position={[0, 0, 0]} 
      rotation={[0, -0.5, 0]}
    />
  );
};

// --- MAIN PAGE COMPONENT ---
const FutureHome = () => {
  return (
    <div className="relative w-full min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-500/30">
      <Helmet>
        <title>Shree Dev | Future of Travel</title>
      </Helmet>

      {/* ================= SECTION 1: HERO (3D SHOWROOM) ================= */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        
        {/* 3D CANVAS */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          <Canvas camera={{ position: [3, 1.5, 5], fov: 50 }} shadows>
            <ambientLight intensity={0.5} />
            <Environment preset="city" />
            <SpotLight position={[0, 5, 0]} distance={10} angle={0.5} attenuation={5} anglePower={5} color="#fff" intensity={20} />

            <Suspense fallback={null}>
              <RealCarModel />
            </Suspense>

            <ContactShadows resolution={1024} scale={10} blur={1} opacity={0.6} far={1} color="#000" />
            <Grid renderOrder={-1} position={[0, -0.01, 0]} infiniteGrid cellSize={0.6} sectionSize={3} fadeDistance={25} sectionColor="#4f46e5" cellColor="#334155" />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2.1} />
          </Canvas>
          
          {/* Bottom Fade Overlay (Taaki search bar smooth lage) */}
          <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        {/* HERO TEXT LAYER */}
        <div className="absolute inset-0 z-10 container mx-auto px-6 pt-32 pointer-events-none">
          <motion.div 
             initial={{ opacity: 0, y: 30 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.8 }}
             className="max-w-3xl"
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-300 uppercase bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-md">
              #1 Premium Fleet in Rajasthan
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-2xl">
              Travel Beyond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Expectations
              </span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-lg drop-shadow-md">
              Luxury SUVs, Professional Chauffeurs, and Seamless Inter-city Travel.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= SECTION 2: BOOKING ENGINE (OVERLAPPING) ================= */}
      <div className="relative z-20 -mt-32 container mx-auto px-4">
        {/* Booking Widget Import */}
        <BookingWidget />
      </div>

      {/* ================= SECTION 3: TRUST STRIP (NEW) ================= */}
      <div className="bg-slate-900 py-12 border-b border-slate-800">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem number="500+" label="Premium Cars" />
            <StatItem number="1.2M" label="Kilometers Driven" />
            <StatItem number="50k+" label="Happy Travelers" />
            <StatItem number="4.9/5" label="Google Rating" />
        </div>
      </div>

      {/* ================= SECTION 4: WHITE INFO SECTION ================= */}
      <div className="bg-white text-slate-900 py-20 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h3 className="text-blue-600 font-bold tracking-wider text-sm mb-2">WHY CHOOSE US</h3>
            <h2 className="text-4xl font-bold mb-6">Driven by Technology, <br/>Defined by Service.</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Unlike traditional taxi services, Shree Dev utilizes advanced fleet management to ensure on-time arrivals. 
              Our cars are equipped with GPS tracking, speed governors, and luxury interiors.
            </p>
            
            <ul className="space-y-4">
              <FeatureItem text="Zero Cancellation Policy" />
              <FeatureItem text="Transparent Billing (No Hidden Costs)" />
              <FeatureItem text="24/7 Customer Support via WhatsApp" />
            </ul>
          </div>

          <div className="relative h-80 bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" className="w-full h-full object-cover" alt="Travel" />
             <div className="absolute inset-0 bg-blue-900/10"></div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 5: POPULAR DESTINATIONS ================= */}
      <div className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-500 font-semibold tracking-widest text-sm uppercase">Explore Rajasthan</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">Curated Journeys</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DestinationCard 
              name="Jaipur" 
              tag="The Pink City" 
              image="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop"
              dist="Local / Outstation"
            />
            <DestinationCard 
              name="Udaipur" 
              tag="City of Lakes" 
              image="https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1974&auto=format&fit=crop"
              dist="400 KM from Jaipur"
            />
            <DestinationCard 
              name="Jaisalmer" 
              tag="Golden Fort" 
              image="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1886&auto=format&fit=crop"
              dist="550 KM from Jaipur"
            />
          </div>

          <div className="mt-16 text-center">
            <a href="/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors border-b border-slate-700 hover:border-white pb-1">
              View All Destinations <ChevronRight size={16} />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

// --- HELPER COMPONENTS ---

const StatItem = ({ number, label }) => (
  <div>
    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{number}</div>
    <div className="text-sm text-slate-400 uppercase tracking-widest">{label}</div>
  </div>
);

const DestinationCard = ({ name, tag, image, dist }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-black/50"
  >
    <img src={image} alt={name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
    <div className="absolute bottom-0 left-0 w-full p-8">
      <div className="mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">{dist}</span>
      </div>
      <h3 className="text-3xl font-bold text-white mb-1">{name}</h3>
      <p className="text-slate-300 text-sm font-medium flex items-center gap-2"><MapPin size={14} className="text-blue-500" /> {tag}</p>
    </div>
  </motion.div>
);

const FeatureItem = ({ text }) => (
  <li className="flex items-center gap-3 font-medium text-slate-700">
    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600"><ChevronRight size={14} strokeWidth={3} /></div>
    {text}
  </li>
);

export default FutureHome;