import React, { useRef, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  useGLTF, 
  Environment, 
  ContactShadows, 
  Grid, 
  SpotLight,
  AdaptiveDpr, 
  AdaptiveEvents 
} from '@react-three/drei';
import { MapPin, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import BookingWidget from './BookingWidget';
import FAQ from './FAQ';
import TopRoutes from './TopRoutes';

// --- 3D CAR MODEL (No changes, perfectly optimized) ---
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
    <div className="relative w-full min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ================= ADVANCED SEO HELMET ================= */}
      <Helmet>
        <title>Best Taxi Service in Jodhpur & Jaisalmer Tour | Shree Dev Travels</title>
        <meta name="description" content="Book the best taxi service in Jodhpur. Rent Innova Crysta, Force Urbania for local sightseeing, Mehrangarh fort, and Jaisalmer desert safari. Affordable per km rates." />
        <meta name="keywords" content="Jodhpur taxi, Cab service in Jodhpur, Jodhpur to Jaisalmer cab, Innova Crysta rent Jodhpur, Force Urbania Rajasthan, Best travel agency in Jodhpur, Mehrangarh fort taxi" />
      </Helmet>

      {/* ================= SECTION 1: HERO (3D SHOWROOM) ================= */}
      <section className="relative h-[85vh] w-full overflow-hidden" aria-label="Hero Section">
        
        {/* 3D CANVAS - OPTIMIZED FOR MOBILE */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
          <Canvas 
            camera={{ position: [3, 1.5, 5], fov: 50 }} 
            shadows 
            dpr={[1, 1.5]} 
            performance={{ min: 0.5 }} 
          >
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />

            <ambientLight intensity={0.5} />
            <Environment preset="city" />
            <SpotLight position={[0, 5, 0]} distance={10} angle={0.5} attenuation={5} anglePower={5} color="#fff" intensity={20} />

            <Suspense fallback={null}>
              <RealCarModel />
            </Suspense>

            <ContactShadows resolution={512} scale={10} blur={1} opacity={0.6} far={1} color="#000" frames={1} />
            
            <Grid renderOrder={-1} position={[0, -0.01, 0]} infiniteGrid cellSize={0.6} sectionSize={3} fadeDistance={25} sectionColor="#4f46e5" cellColor="#334155" />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2.1} />
          </Canvas>
          
          <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        {/* HERO TEXT LAYER (SEO H1) */}
        <div className="absolute inset-0 z-10 container mx-auto px-6 pt-32 pointer-events-none">
          <motion.div 
             initial={{ opacity: 0, y: 30 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.8 }}
             className="max-w-3xl pointer-events-auto"
          >
            <div className="inline-flex items-center gap-1 px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-300 uppercase bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-md shadow-lg">
              <Star size={12} className="text-brand-light" fill="currentColor"/> #1 Premium Taxi in Jodhpur
            </div>
            {/* Extremely Powerful Local SEO H1 */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-2xl">
              Premium Cabs & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Rajasthan Tours
              </span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-lg drop-shadow-md font-medium">
              Book luxury SUVs like <strong>Innova Crysta</strong>, <strong>Force Urbania</strong>, and reliable sedans for local sightseeing and outstation travel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 2: BOOKING ENGINE ================= */}
      <section className="relative z-20 -mt-32 container mx-auto px-4" aria-label="Cab Booking Widget">
        <BookingWidget />
      </section>

      {/* ================= SECTION 3: TRUST STRIP ================= */}
      <section className="bg-slate-900 py-12 border-b border-slate-800" aria-label="Company Stats">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem number="100+" label="Premium Cabs" />
            <StatItem number="1.5M+" label="Kilometers Driven" />
            <StatItem number="50k+" label="Happy Tourists" />
            <StatItem number="4.9/5" label="Google Rating" />
        </div>
      </section>

      {/* ================= SECTION 4: WHITE INFO SECTION (Competitor Keywords) ================= */}
      <section className="bg-white text-slate-900 py-20 px-6" aria-label="Why Choose Shree Dev Travels">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h3 className="text-blue-600 font-bold tracking-wider text-sm mb-2 uppercase">Why Choose Shree Dev Travels</h3>
            {/* SEO H2 Tag */}
            <h2 className="text-4xl font-bold mb-6">Top-Rated Travel Agency <br/>in Jodhpur.</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Whether you need a reliable cab for <strong>Jodhpur local sightseeing (Mehrangarh Fort, Umaid Bhawan Palace)</strong> or an outstation taxi from <strong>Jodhpur to Jaisalmer</strong>, we provide seamless travel experiences. Our premium fleet features GPS-tracked vehicles for ultimate comfort and safety.
            </p>
            
            <ul className="space-y-4">
              <FeatureItem text="Transparent Billing (No Hidden Costs per KM)" />
              <FeatureItem text="Expert Local Drivers & Guides" />
              <FeatureItem text="24/7 WhatsApp Support for Outstation Tours" />
            </ul>
          </div>

          <div className="relative h-80 bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
             {/* Optimized Image Alt Tag */}
             <img 
               src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
               className="w-full h-full object-cover" 
               alt="Premium outstation taxi and cab service in Jodhpur Rajasthan" 
               loading="lazy"
             />
             <div className="absolute inset-0 bg-blue-900/10"></div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: POPULAR DESTINATIONS ================= */}
      <section  aria-label="Popular Rajasthan Tour Routes">
        
        
        <TopRoutes/>
      </section>
      <section>
        <FAQ/>
      </section>

    </div>
  );
};

// --- HELPER COMPONENTS ---

const StatItem = ({ number, label }) => (
  <div>
    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{number}</div>
    <div className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-semibold">{label}</div>
  </div>
);


const FeatureItem = ({ text }) => (
  <li className="flex items-center gap-3 font-medium text-slate-700">
    <div className="w-6 h-6 min-w-[24px] rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shadow-sm"><ChevronRight size={14} strokeWidth={3} /></div>
    <span dangerouslySetInnerHTML={{ __html: text }} />
  </li>
);

export default FutureHome;