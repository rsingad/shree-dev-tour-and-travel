import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 0 se 100 tak fake loading animation (Speed control kar sakte hain)
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // 100% hone ke baad thoda wait karega fir hatega
          return 100;
        }
        return prev + 1; // Speed badhane ke liye +2 ya +5 kar sakte hain
      });
    }, 20); // Har 20ms mein update hoga

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center text-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }} // Upar ki taraf fade out hoga
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        
        {/* Logo / Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-2"
        >
          SHREE DEV <span className="text-blue-500">SYSTEMS</span>
        </motion.h1>

        <p className="text-blue-400 text-xs font-mono tracking-[0.5em] mb-10 animate-pulse">
          INITIALIZING FLEET PROTOCOLS...
        </p>

        {/* Progress Bar Container */}
        <div className="w-64 h-1 bg-slate-800 rounded-full overflow-hidden relative mx-auto">
          {/* Moving Bar */}
          <motion.div 
            className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Text */}
        <div className="mt-4 font-mono text-xl font-bold text-slate-500">
          {progress}%
        </div>

      </div>

      {/* Bottom decorative text */}
      <div className="absolute bottom-10 text-[10px] text-slate-600 font-mono">
        SECURE CONNECTION ESTABLISHED // V9.0
      </div>

    </motion.div>
  );
};

export default Preloader;