import React, { useState, useId } from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const BookingWidget = () => {
  const [tripType, setTripType] = useState('oneWay');
  
  const [fromLoc, setFromLoc] = useState('');
  const [toLoc, setToLoc] = useState('');
  const [travelDate, setTravelDate] = useState('');

  // Generate unique IDs for accessibility (SEO Hack)
  const fromId = useId();
  const toId = useId();
  const dateId = useId();

  const handleSearch = (e) => {
    e.preventDefault();
    
    const typeLabel = tripType === 'oneWay' ? 'One Way Trip' : 
                      tripType === 'roundTrip' ? 'Round Trip' : 'Rajasthan Tour Package';
    
    // Defaulting to Jodhpur because of the domain www.shreedevjodhpur.in
    const finalFrom = fromLoc || 'Jodhpur';
    const finalTo = toLoc || 'Jaisalmer / Jaipur';
    const finalDate = travelDate || 'As soon as possible';

    const message = `Hello Shree Dev Tour And Travel! 🚖\nI need a quotation for a cab:\n\n*Trip Type:* ${typeLabel}\n*Pickup:* ${finalFrom}\n*Drop:* ${finalTo}\n*Travel Date:* ${finalDate}\n\nPlease share the best per-km price for Innova Crysta or Force Urbania.`;

    const whatsappUrl = `https://wa.me/918890472581?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section 
      aria-label="Quick Cab Booking Widget" 
      className="w-full max-w-4xl mx-auto bg-slate-900/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl relative z-20 -mt-24 mb-20 mx-4"
    >
      
      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-white/10 pb-4" role="tablist">
        <button 
          role="tab"
          aria-selected={tripType === 'oneWay'}
          onClick={() => setTripType('oneWay')}
          className={`pb-2 text-sm font-bold transition outline-none ${tripType === 'oneWay' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-slate-400 hover:text-white focus:text-blue-400'}`}
        >
          One Way Trip
        </button>
        <button 
          role="tab"
          aria-selected={tripType === 'roundTrip'}
          onClick={() => setTripType('roundTrip')}
          className={`pb-2 text-sm font-bold transition outline-none ${tripType === 'roundTrip' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-slate-400 hover:text-white focus:text-blue-400'}`}
        >
          Round Trip
        </button>
        <button 
          role="tab"
          aria-selected={tripType === 'package'}
          onClick={() => setTripType('package')}
          className={`pb-2 text-sm font-bold transition outline-none ${tripType === 'package' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-slate-400 hover:text-white focus:text-blue-400'}`}
        >
          Tour Package
        </button>
      </div>

      {/* Inputs Grid wrapped in a Form for Semantic SEO */}
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* From Input */}
        <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 flex items-center gap-3 focus-within:border-blue-500 transition-colors shadow-inner">
          <MapPin size={20} className="text-blue-500 shrink-0" aria-hidden="true" />
          <div className="w-full">
            <label htmlFor={fromId} className="block text-[10px] text-slate-400 uppercase font-bold cursor-pointer">Pickup City</label>
            <input 
              id={fromId}
              type="text" 
              placeholder="Jodhpur / Jaipur" 
              value={fromLoc}
              onChange={(e) => setFromLoc(e.target.value)}
              className="w-full bg-transparent text-white font-semibold outline-none text-sm placeholder-slate-500" 
            />
          </div>
        </div>

        {/* To Input */}
        <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 flex items-center gap-3 focus-within:border-blue-500 transition-colors shadow-inner">
          <MapPin size={20} className="text-blue-500 shrink-0" aria-hidden="true" />
          <div className="w-full">
            <label htmlFor={toId} className="block text-[10px] text-slate-400 uppercase font-bold cursor-pointer">Drop City / Tour</label>
            <input 
              id={toId}
              type="text" 
              placeholder="Jaisalmer / Udaipur" 
              value={toLoc}
              onChange={(e) => setToLoc(e.target.value)}
              className="w-full bg-transparent text-white font-semibold outline-none text-sm placeholder-slate-500" 
            />
          </div>
        </div>

        {/* Date Input */}
        <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700 flex items-center gap-3 focus-within:border-blue-500 transition-colors shadow-inner">
          <Calendar size={20} className="text-blue-500 shrink-0" aria-hidden="true" />
          <div className="w-full">
            <label htmlFor={dateId} className="block text-[10px] text-slate-400 uppercase font-bold cursor-pointer">Pick Up Date</label>
            <input 
              id={dateId}
              type="date" 
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full bg-transparent text-white font-semibold outline-none text-sm cursor-pointer" 
              style={{ colorScheme: "dark" }}
            />
          </div>
        </div>

        {/* Search/Book Button */}
        <button 
          type="submit"
          aria-label="Get Best Price on WhatsApp"
          className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl flex items-center justify-center gap-2 font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] py-3 md:py-0 active:scale-95"
        >
          Get Best Price <ArrowRight size={18} aria-hidden="true" />
        </button>

      </form>
    </section>
  );
};

export default BookingWidget;