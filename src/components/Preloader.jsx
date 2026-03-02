import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("INITIALIZING SECURE CONNECTION...");

  useEffect(() => {
    // 0 se 100 tak loading animation (Total time: ~2 seconds)
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); 
          return 100;
        }
        
        // --- UX/SEO HACK: Injecting Competitor & High-Value Keywords during load ---
        if (prev === 20) setLoadingText("LOCATING PREMIUM FLEET (INNOVA CRYSTA, URBANIA)...");
        if (prev === 40) setLoadingText("SYNCING JODHPUR & JAISALMER TOUR ROUTES...");
        if (prev === 60) setLoadingText("PREPARING DESERT SAFARI & MEHRANGARH PROTOCOLS...");
        if (prev === 80) setLoadingText("READY FOR LUXURY DEPARTURE...");

        return prev + 1; 
      });
    }, 20); 

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center text-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }} // Smooth upward fade out
      transition={{ duration: 0.8, ease: "easeInOut" }}
      aria-busy="true"
      aria-live="polite"
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        
        {/* --- BRANDING: Glowing Wolf Logo --- */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/wolf-logo.png" 
          alt="Shree Dev Travels Logo" 
          className="w-24 h-24 object-contain rounded-full shadow-[0_0_30px_rgba(59,130,246,0.5)] border border-blue-500/30 mb-6"
        />

        {/* Brand Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-2"
        >
          SHREE DEV <span className="text-blue-500">TRAVELS</span>
        </motion.h1>

        {/* Dynamic Loading Text - Premium Feel */}
        <p className="text-blue-400 text-[10px] md:text-xs font-mono tracking-[0.2em] md:tracking-[0.4em] mb-10 animate-pulse h-4 uppercase">
          {loadingText}
        </p>

        {/* Progress Bar (SEO Accessible) */}
        <div 
          className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden relative mx-auto"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <motion.div 
            className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <div className="mt-4 font-mono text-xl font-bold text-slate-500">
          {progress}%
        </div>

      </div>

      {/* Bottom decorative text */}
      <div className="absolute bottom-10 text-[10px] text-slate-600 font-mono tracking-widest text-center px-4">
        PREMIUM CABS & TOURS // JODHPUR, RAJASTHAN
      </div>

    </motion.div>
  );
};

export default Preloader;