import React, { useState } from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const BookingWidget = () => {
  const [tripType, setTripType] = useState('oneWay');
  
  // Naye State variables banaye hain user ka input save karne ke liye
  const [fromLoc, setFromLoc] = useState('');
  const [toLoc, setToLoc] = useState('');
  const [travelDate, setTravelDate] = useState('');

  // Ye function dynamic WhatsApp message banayega
  const handleSearch = (e) => {
    e.preventDefault();
    
    // Trip type ko human-readable format mein convert karna
    const typeLabel = tripType === 'oneWay' ? 'One Way Trip' : 
                      tripType === 'roundTrip' ? 'Round Trip' : 'Tour Package';
    
    // Agar user ne input khali chhoda hai, toh default values use hongi
    const finalFrom = fromLoc || 'Jaipur';
    const finalTo = toLoc || 'Jodhpur / Jaisalmer';
    const finalDate = travelDate || 'Soon';

    // WhatsApp Message Format
    const message = `Hello Shree Dev Travels! I need cab details:
*Trip Type:* ${typeLabel}
*From:* ${finalFrom}
*To:* ${finalTo}
*Date:* ${finalDate}

Please share the best price for Innova/Urbania.`;

    // WhatsApp URL generate karke naye tab mein open karna
    const whatsappUrl = `https://wa.me/918890472581?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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
        
        {/* From Input */}
        <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 flex items-center gap-3 focus-within:border-blue-500 transition-colors">
          <MapPin size={20} className="text-blue-500" />
          <div className="w-full">
            <label className="block text-[10px] text-slate-400 uppercase font-bold">From</label>
            <input 
              type="text" 
              placeholder="Jaipur / Jodhpur" 
              value={fromLoc}
              onChange={(e) => setFromLoc(e.target.value)}
              className="w-full bg-transparent text-white font-semibold outline-none text-sm placeholder-slate-600" 
            />
          </div>
        </div>

        {/* To Input (Target Keywords added in placeholder) */}
        <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 flex items-center gap-3 focus-within:border-blue-500 transition-colors">
          <MapPin size={20} className="text-blue-500" />
          <div className="w-full">
            <label className="block text-[10px] text-slate-400 uppercase font-bold">To</label>
            <input 
              type="text" 
              placeholder="Jaisalmer / Bikaner" 
              value={toLoc}
              onChange={(e) => setToLoc(e.target.value)}
              className="w-full bg-transparent text-white font-semibold outline-none text-sm placeholder-slate-600" 
            />
          </div>
        </div>

        {/* Date Input */}
        <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 flex items-center gap-3 focus-within:border-blue-500 transition-colors">
          <Calendar size={20} className="text-blue-500" />
          <div className="w-full">
            <label className="block text-[10px] text-slate-400 uppercase font-bold">Pick Up Date</label>
            <input 
              type="date" 
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full bg-transparent text-white font-semibold outline-none text-sm" 
              // Style fix for date picker icon on some browsers
              style={{ colorScheme: "dark" }}
            />
          </div>
        </div>

        {/* Search/Book Button */}
        <button 
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl flex items-center justify-center gap-2 font-bold transition shadow-lg shadow-blue-600/25 py-3 md:py-0 active:scale-95"
        >
          Get Best Price <ArrowRight size={18} />
        </button>

      </div>
    </div>
  );
};

export default BookingWidget;