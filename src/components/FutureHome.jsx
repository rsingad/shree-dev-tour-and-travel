import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronRight, Star, Quote, CarFront } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BookingWidget from './BookingWidget';
import FAQ from './FAQ';
import TopRoutes from './TopRoutes';
import { packagesData } from '../data/packagesData';

const WOLF_LOGO = "/shree-dev-tour-and-travel.webp";

const FutureHome = () => {
  return (
    <div className="relative w-full min-h-screen bg-slate-900 text-white font-sans selection:bg-blue-500/30 overflow-x-hidden">

      <Helmet>
        <title>Best Taxi Service in Jodhpur & Jaisalmer Tour | Shree Dev Tour And Travel</title>
        <meta name="description" content="Book the best taxi service in Jodhpur. Rent Innova Crysta, Force Urbania for local sightseeing, Mehrangarh fort, and Jaisalmer desert safari. Affordable per km rates." />
      </Helmet>

      {/* ================= SECTION 1: HERO (Logo Showcase) ================= */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center" aria-label="Hero Section">

        {/* BACKGROUND GRADIENT & LIGHT EFFECTS */}
        <div className="absolute inset-0 z-0 bg-slate-950">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: HERO TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-1 px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-blue-300 uppercase bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-md">
              <Star size={12} className="text-blue-400" fill="currentColor" /> #1 Premium Taxi in Jodhpur
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Shree Dev <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Tour And Travel
              </span>
            </h1>

            <p className="text-slate-300 text-lg mb-8 max-w-lg font-medium leading-relaxed">
              Premium <strong>Innova Crysta</strong> & <strong>Force Urbania</strong> services for Jodhpur sightseeing and Rajasthan tours. Fast, reliable, and expert drivers.
            </p>

            <div className="flex gap-4">
              <Link to="/services" className="bg-blue-600 hover:bg-blue-500 px-8 py-3.5 rounded-full font-bold transition-all shadow-lg shadow-blue-600/25 active:scale-95 text-center">
                Explore Cabs
              </Link>
              <Link to="/packages" className="bg-slate-800 border border-slate-700 hover:bg-slate-700 px-8 py-3.5 rounded-full font-bold transition-all active:scale-95 text-center hidden sm:block">
                Tour Packages
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: WOLF LOGO (Replacing 3D) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative group">
              {/* Logo Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/20 blur-[60px] group-hover:bg-blue-500/40 transition-all duration-500"></div>
              <img
                src={WOLF_LOGO}
                alt="Shree Dev Tour And Travel Wolf Logo"
                // Width aur Height attributes zaroor dein (Pixels mein)
                width="450"
                height="450"
                className="relative w-[450px] h-auto object-contain drop-shadow-2xl filter brightness-110"
                fetchpriority="high"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </section>

      {/* ================= SECTION 2: BOOKING ENGINE ================= */}
      <section className="relative z-20 -mt-20 container mx-auto px-4">
        <BookingWidget />
      </section>

      {/* ================= SECTION 3: STATS ================= */}
      <section className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem number="100+" label="Premium Cabs" />
          <StatItem number="1.5M+" label="Kilometers Driven" />
          <StatItem number="50k+" label="Happy Tourists" />
          <StatItem number="4.9/5" label="Google Rating" />
        </div>
      </section>

      {/* ================= SECTION 4: INFO ================= */}
      <section className="bg-white text-slate-900 py-24 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-blue-600 font-bold tracking-wider text-sm mb-2 uppercase">Why Choose Us</h3>
            <h2 className="text-4xl font-bold mb-6">Top-Rated Travel Agency <br />in Jodhpur.</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Expert guides for <strong>Mehrangarh Fort</strong>, <strong>Umaid Bhawan</strong>, and desert safaris in <strong>Jaisalmer</strong>.
            </p>
            <ul className="space-y-4">
              <FeatureItem text="Transparent per KM Billing" />
              <FeatureItem text="Clean & Sanitized Vehicles" />
              <FeatureItem text="24/7 Support for Tourists" />
            </ul>
          </div>

          <div className="relative h-[400px] bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/11750442/pexels-photo-11750442.jpeg"
              className="w-full h-full object-cover"
              alt="Tourists in Rajasthan"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: POPULAR PACKAGES PREVIEW ================= */}
      <section className="bg-slate-950 py-24 px-6 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-emerald-400 font-bold tracking-widest text-sm uppercase mb-3">Handcrafted by Locals</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Top Rated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Rajasthan Tours</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packagesData.slice(0, 3).map((pkg) => (
              <div key={pkg.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group hover:-translate-y-2 hover:border-blue-500/50 transition-all duration-300 flex flex-col">
                <div className="h-56 overflow-hidden relative">
                  <img src={pkg.image} alt={pkg.seoAlt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">{pkg.duration}</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3">{pkg.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3 italic">"{pkg.expertTip}"</p>
                  <div className="flex justify-between items-center border-t border-slate-800 mt-auto pt-5">
                    <span className="text-emerald-400 font-bold text-xl">{pkg.price}</span>
                    <Link to="/packages" className="text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-white transition group-hover:underline">View Itinerary →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/packages" className="inline-block border-2 border-slate-700 text-slate-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3.5 rounded-full font-bold transition-all hover:shadow-lg hover:shadow-blue-500/20 active:scale-95">
              Explore All 15+ Packages
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: OUR PREMIUM FLEET ================= */}
      <section className="bg-slate-900 py-24 px-6 border-t border-slate-800">
         <div className="container mx-auto text-center">
            <h3 className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-3 flex items-center justify-center gap-2"><CarFront size={18}/> Travel in Luxury</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">Our Premium Fleet</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FleetCard 
                name="Toyota Innova Crysta" 
                desc="Perfect for families and small groups. Extremely comfortable for long Rajasthan highway drives."
                img="/innova-crysta.png"
                seats="6+1 Seater" 
              />
              <FleetCard 
                name="Force Urbania" 
                desc="Ultra-luxury spacious van with recliner seats, perfect for 9 to 12 passengers."
                img="/force-urbania.png"
                seats="10+1 Seater" 
              />
              <FleetCard 
                name="Tempo Traveller" 
                desc="Ideal for large tour groups. Plenty of luggage space and push-back seats."
                img="/tempo-traveller.png"
                seats="12 to 17 Seater" 
              />
            </div>
         </div>
      </section>

      {/* ================= SECTION 7: TESTIMONIALS ================= */}
      <section className="bg-slate-950 py-24 px-6 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-amber-400 font-bold tracking-widest text-sm uppercase mb-3 flex items-center justify-center gap-2">Read Our Reviews</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What Our Guests Say</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Trusted by thousands of travelers from across the globe for safety, comfort, and local expertise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReviewCard name="Rahul Sharma" text="Booked Innova for Jaisalmer. The driver was basically a very knowledgeable guide. Truly a 15-year expert service! Cannot think of anyone else." rating={5} />
            <ReviewCard name="Sarah Jenkins" text="Safe, clean, and punctual. Being a solo female traveler, I felt incredibly safe with Shree Dev Tours. They made my Rajasthan trip." rating={5} />
            <ReviewCard name="Amit Desai" text="We took the 6-day Golden Triangle package based on their recommendation. Everything was seamless from hotels to the desert camp. Flawless execution." rating={5} />
          </div>
        </div>
      </section>

      <section><TopRoutes /></section>
      <section><FAQ /></section>

    </div>
  );
};

// --- HELPERS ---
const FleetCard = ({ name, desc, img, seats }) => (
  <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 text-left hover:border-blue-500/50 transition duration-300">
    <div className="h-48 bg-slate-900 rounded-xl mb-6 overflow-hidden">
      <img src={img} alt={name} className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500" loading="lazy" />
    </div>
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <span className="text-[10px] font-bold bg-blue-500/20 text-blue-400 px-2 flex items-center h-6 rounded-md uppercase tracking-wider">{seats}</span>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const ReviewCard = ({ name, text, rating }) => (
  <div className="bg-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col">
    <Quote className="text-blue-500/40 mb-5" size={32} />
    <p className="text-slate-300 text-base leading-relaxed mb-6 italic flex-grow">"{text}"</p>
    <div className="flex justify-between items-center border-t border-slate-800 pt-5 mt-auto">
      <div className="font-bold text-white">{name}</div>
      <div className="flex gap-1 text-amber-400">
        {[...Array(rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
      </div>
    </div>
  </div>
);

const StatItem = ({ number, label }) => (
  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{number}</div>
    <div className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-semibold">{label}</div>
  </div>
);

const FeatureItem = ({ text }) => (
  <li className="flex items-center gap-3 font-medium text-slate-700">
    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
      <ChevronRight size={14} strokeWidth={3} />
    </div>
    <span>{text}</span>
  </li>
);

export default FutureHome;