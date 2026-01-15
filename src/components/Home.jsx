import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Car, Star, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Helmet>
        <title>Shree Dev Tour and Travel | Premium Taxi Service</title>
      </Helmet>

      {/* --- NEW MODERN HERO SECTION --- */}
      <div className="relative min-h-screen flex items-center justify-center lg:justify-start overflow-hidden">
        
        {/* Full Screen Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1590766940555-7f239b49b6f4?q=80&w=2070&auto=format&fit=crop")' }} // Car Image
        >
          {/* Black Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-20">
          
          {/* Left Side: Big Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-medium text-yellow-300">
              <Star size={14} fill="currentColor" /> #1 Travel Agency in Jaipur
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Explore India <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                In Luxury
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
              Premium Innova, Etios & Tempo Travellers for Outstation, Airport Pickup & Rajasthan Tours. 
            </p>

            <div className="flex gap-4 pt-4">
              <a href="tel:8890472581" className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition flex items-center gap-2">
                Book a Ride <ArrowRight size={20}/>
              </a>
              <a href="/services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition">
                View Fleet
              </a>
            </div>
          </motion.div>

          {/* Right Side: Glass Booking Card (Floating) */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl text-white max-w-md ml-auto"
          >
            <h3 className="text-2xl font-bold mb-6">Quick Enquiry</h3>
            
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                <MapPin className="text-yellow-400" />
                <div>
                  <p className="text-xs text-gray-400 uppercase">Pickup Location</p>
                  <p className="font-semibold">Jaipur, Rajasthan</p>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                <MapPin className="text-yellow-400" />
                <div>
                  <p className="text-xs text-gray-400 uppercase">Drop Location</p>
                  <p className="font-semibold">Anywhere in India</p>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-3">
                <Calendar className="text-yellow-400" />
                <div>
                  <p className="text-xs text-gray-400 uppercase">Date</p>
                  <p className="font-semibold">Today / Tomorrow</p>
                </div>
              </div>

              <a href="https://wa.me/918890472581" className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl text-center transition mt-4">
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* --- SERVICES STRIP (Clean Look) --- */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Car size={40} className="text-yellow-600"/>} 
              title="Premium Fleet" 
              desc="Clean, Sanitzed Innova Crysta & Etios." 
            />
            <FeatureCard 
              icon={<Phone size={40} className="text-yellow-600"/>} 
              title="24/7 Support" 
              desc="Always available on 88904-72581." 
            />
            <FeatureCard 
              icon={<Star size={40} className="text-yellow-600"/>} 
              title="Top Rated Drivers" 
              desc="Experienced, polite and safe drivers." 
            />
        </div>
      </div>

    </div>
  );
};

const FeatureCard = ({icon, title, desc}) => (
  <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
    <div className="bg-yellow-50 p-3 rounded-lg">{icon}</div>
    <div>
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  </div>
);

export default Home;