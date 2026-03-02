import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col items-center justify-center text-center px-6 selection:bg-blue-500/30">
      <div className="bg-blue-500/10 p-4 rounded-full mb-6 border border-blue-500/20 animate-pulse">
        <AlertTriangle size={48} className="text-blue-500" />
      </div>
      <h1 className="text-7xl md:text-9xl font-black text-white mb-4 tracking-tighter">4<span className="text-blue-500">0</span>4</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-slate-300 mb-6">Oops! Route Not Found</h2>
      <p className="text-slate-500 max-w-md mb-10">
        Lagta hai aap galat raste par aa gaye hain! Ye page exist nahi karta. Chaliye wapas Jodhpur chalte hain.
      </p>
      <Link 
        to="/" 
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
      >
        <Home size={20} /> Back to Home
      </Link>
    </div>
  );
};

export default NotFound;