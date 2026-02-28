import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("INITIALIZING SECURE CONNECTION...");

  useEffect(() => {
    // 0 se 100 tak loading animation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); 
          return 100;
        }
        
        // --- UX/SEO HACK: Loading ke time alag-alag premium services dikhana ---
        if (prev === 20) setLoadingText("LOCATING PREMIUM FLEET (URBANIA, FORTUNER)...");
        if (prev === 40) setLoadingText("SYNCING JODHPUR & JAISALMER TOURS...");
        if (prev === 60) setLoadingText("PREPARING DESERT SAFARI PROTOCOLS...");
        if (prev === 80) setLoadingText("READY FOR DEPARTURE...");

        return prev + 1; 
      });
    }, 20); 

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center text-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }} // Upar fade out hoga
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        
        {/* Brand Name Consistent rakha hai */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-2"
        >
          SHREE DEV <span className="text-blue-500">TRAVELS</span>
        </motion.h1>

        {/* Dynamic Loading Text - Premium Feel */}
        <p className="text-blue-400 text-xs md:text-sm font-mono tracking-[0.2em] md:tracking-[0.5em] mb-10 animate-pulse h-4">
          {loadingText}
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden relative mx-auto">
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
      <div className="absolute bottom-10 text-[10px] text-slate-600 font-mono tracking-widest">
        SHREE DEV TOUR AND TRAVEL // RAJASTHAN
      </div>

    </motion.div>
  );
};

export default Preloader;