import React, { useState } from 'react';
import { MapPin, Calendar, Car, ArrowRight } from 'lucide-react';

const BookingWidget = () => {
  const [tripType, setTripType] = useState('oneWay');

  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl relative z-20 -mt-24 mb-20 mx-4">
      
      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-white/10 pb-4">
        <button 
          onClick={() => setTripType('oneWay')}
          className={`pb-2 text-sm font-bold transition ${tripType === 'oneWay' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-slate-400 hover:text-white'}`}
        >
          One Way Trip
        </button>
        <button 
          onClick={() => setTripType('roundTrip')}
          className={`pb-2 text-sm font-bold transition ${tripType === 'roundTrip' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-slate-400 hover:text-white'}`}
        >
          Round Trip
        </button>
        <button 
          onClick={() => setTripType('package')}
          className={`pb-2 text-sm font-bold transition ${tripType === 'package' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-slate-400 hover:text-white'}`}
        >
          Tour Package
        </button>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* From */}
        <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 flex items-center gap-3">
          <MapPin size={20} className="text-blue-500" />
          <div className="w-full">
            <label className="block text-[10px] text-slate-400 uppercase font-bold">From</label>
            <input type="text" placeholder="Jaipur" className="w-full bg-transparent text-white font-semibold outline-none text-sm placeholder-slate-600" />
          </div>
        </div>

        {/* To */}
        <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 flex items-center gap-3">
          <MapPin size={20} className="text-blue-500" />
          <div className="w-full">
            <label className="block text-[10px] text-slate-400 uppercase font-bold">To</label>
            <input type="text" placeholder="Delhi / Udaipur" className="w-full bg-transparent text-white font-semibold outline-none text-sm placeholder-slate-600" />
          </div>
        </div>

        {/* Date */}
        <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 flex items-center gap-3">
          <Calendar size={20} className="text-blue-500" />
          <div className="w-full">
            <label className="block text-[10px] text-slate-400 uppercase font-bold">Pick Up Date</label>
            <input type="date" className="w-full bg-transparent text-white font-semibold outline-none text-sm" />
          </div>
        </div>

        {/* Search Button */}
        <a href="https://wa.me/918890472581?text=I want to search for a cab" className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl flex items-center justify-center gap-2 font-bold transition shadow-lg shadow-blue-600/25">
          Search Cabs <ArrowRight size={18} />
        </a>

      </div>
    </div>
  );
};

export default BookingWidget;