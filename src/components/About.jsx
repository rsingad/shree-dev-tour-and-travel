import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Map, Star, Award, HeartHandshake, Car, User } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  // JSON-LD Schema for About Page (E-E-A-T SEO Boost)
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "TravelAgency",
      "name": "Shree Dev Tour & Travels",
      "description": "Leading travel agency and premium car rental service in Jodhpur, Rajasthan with over a decade of local expertise.",
      "url": "https://www.shreedevjodhpur.in/about",
      "founder": {
        "@type": "Person",
        "name": "Raju Bhai"
      },
      "foundingLocation": {
        "@type": "City",
        "name": "Jodhpur"
      }
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans pt-20 overflow-x-hidden selection:bg-blue-500/30">

      {/* --- ADVANCED SEO HELMET --- */}
      <Helmet>
        <title>About Us | Best Travel Agency in Jodhpur - Shree Dev Tour And Travel</title>
        <meta name="description" content="Learn about Shree Dev Tour And Travel, Jodhpur's most trusted travel agency. Discover our story, our premium fleet, and our commitment to safe Rajasthan tours." />
        <meta name="keywords" content="About Shree Dev Tour And Travel, Jodhpur travel agency, Best tour operator Rajasthan, Raju bhai Jodhpur taxi, reliable cab service Jodhpur" />
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>

      {/* --- HERO SECTION --- */}
      <section className="relative py-24 px-6 text-center border-b border-slate-800 bg-slate-950 overflow-hidden">
        {/* Background Decorative Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="text-blue-500 font-bold tracking-[0.3em] text-xs md:text-sm uppercase mb-4 block">
            Our Story & Legacy
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            More Than Just A Cab Service. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              We Are Rajasthan's Local Experts.
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            Namaste! 🙏 Welcome to Shree Dev Tour And Travel. Born in the heart of the Blue City (Jodhpur), our mission is to show you the real royalty, culture, and colors of Rajasthan with unmatched comfort and safety.
          </p>
        </motion.div>
      </section>

      {/* --- THE FOUNDER STORY SECTION --- */}
      <section className="py-20 px-6 container mx-auto" aria-label="Company Story">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Crafting Unforgettable Journeys Since Day One</h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              Started by <strong>Raju Ji</strong>, a passionate local from Rajasthan, Shree Dev Tour And Travel began with a simple vision: to eliminate the hidden costs and poor service standard in the local taxi market.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              Today, we pride ourselves on managing a premium fleet of <strong>Innova Crystas, Force Urbanias</strong>, and comfortable sedans. Whether it's navigating the narrow streets of Jodhpur to reach Mehrangarh Fort, or conquering the Sam Sand Dunes in Jaisalmer, our highly trained drivers act as your personal local guides.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-4">
                <img className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover" src="https://images.pexels.com/photos/8112164/pexels-photo-8112164.jpeg" alt="Happy Client 1" />
                <img className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover" src="https://images.pexels.com/photos/8112164/pexels-photo-8112164.jpeg" alt="Happy Client 2" />
                <img className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover" src="https://images.pexels.com/photos/8112164/pexels-photo-8112164.jpeg" alt="Happy Client 3" />
                <div className="w-12 h-12 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center text-xs font-bold text-white">+50k</div>
              </div>
              <p className="text-sm font-bold text-slate-300">Happy Travelers <br />Across India & Abroad</p>
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="/raju.png"
              alt="Rajasthan Fort Tour"
              className="rounded-3xl h-64 w-full object-cover shadow-2xl"
            />
            <img
              src="/pkg-jaisalmer.png"
              alt="Jodhpur Blue City"
              className="rounded-3xl h-64 w-full object-cover shadow-2xl mt-8"
            />
          </motion.div>
        </div>
      </section>

      {/* --- OUR PARTNERS SECTION --- */}
      <section className="py-20 px-6 container mx-auto border-t border-slate-800" aria-label="Our Partners">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Founding Partners</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">The proud owners and managing partners driving Shree Dev Tour And Travel to new heights of hospitality.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          <PartnerCard name="Raju Gurjar" role="Managing Partner & Owner" avatarUrl="/raju.png" />
          <PartnerCard name="Dev Gurjar" role="Managing Partner & Owner" avatarUrl="/raju.png" />
          <PartnerCard name="Deva Gurjar" role="Managing Partner & Owner" avatarUrl="/raju.png" />
        </div>
      </section>

      {/* --- CORE VALUES (WHY CHOOSE US) --- */}
      <section className="bg-slate-950 py-24 border-t border-slate-800" aria-label="Our Core Values">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why We Stand Out</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">We don't just rent cars; we build relationships. Here is what makes Shree Dev Tour And Travel the top choice in Jodhpur.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon={<Shield size={32} className="text-blue-500" />}
              title="100% Safety First"
              desc="All our vehicles are regularly serviced, sanitized, and GPS-enabled. Our drivers are background-verified for your family's safety."
            />
            <ValueCard
              icon={<HeartHandshake size={32} className="text-blue-500" />}
              title="Transparent Pricing"
              desc="No hidden charges, no driver bata surprises. We offer crystal clear per-km rates for both cabs and tour packages."
            />
            <ValueCard
              icon={<Map size={32} className="text-blue-500" />}
              title="Local Expert Drivers"
              desc="Our drivers are born in Rajasthan. They know the best dhabas, the shortest routes, and the hidden gems you won't find on Google."
            />
            <ValueCard
              icon={<Car size={32} className="text-blue-500" />}
              title="Premium Fleet"
              desc="From the luxurious Innova Crysta to the spacious Force Urbania (12/17 seater), we have the perfect vehicle for any group size."
            />
            <ValueCard
              icon={<Star size={32} className="text-blue-500" />}
              title="5-Star Rated Service"
              desc="With hundreds of glowing reviews on Google, our commitment to hospitality is recognized by travelers worldwide."
            />
            <ValueCard
              icon={<Award size={32} className="text-blue-500" />}
              title="24/7 Trip Support"
              desc="From the moment you book until you reach home, our dedicated support line is always active to assist you."
            />
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6" aria-label="Call to Action">
        <div className="container mx-auto max-w-4xl bg-gradient-to-br from-blue-900 to-slate-900 border border-blue-500/20 p-10 md:p-16 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to Experience the Magic of Rajasthan?</h2>
          <p className="text-blue-200 mb-10 max-w-2xl mx-auto relative z-10 text-lg">
            Let's plan your perfect itinerary. Contact us today for a free quote on our cabs and tour packages.
          </p>

          <a
            href="https://wa.me/918890472581?text=Hi%20Shree%20Dev%20Tour%20And%20Travel,%20I%20visited%20your%20About%20page%20and%20want%20to%20plan%20a%20trip."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-full transition shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] relative z-10 hover:-translate-y-1 active:scale-95"
          >
            Chat with Raju Bhai on WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
};

// --- HELPER COMPONENT ---
const ValueCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl shadow-lg hover:shadow-blue-500/10 transition-all group"
  >
    <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-blue-500/50 transition-colors shadow-inner">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

const PartnerCard = ({ name, role, avatarUrl }) => {
  // const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0f172a&color=38bdf8&size=200&font-size=0.4&bold=true`;
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-slate-950 border border-slate-800 p-8 rounded-[2rem] shadow-2xl flex flex-col items-center text-center w-full sm:w-72"
    >
      <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-1 mb-6 shadow-[0_0_20px_rgba(37,99,235,0.4)] relative overflow-hidden group">
        <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-slate-800 overflow-hidden">
          <img src={avatarUrl} alt={name} className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <div className="h-1 w-12 bg-blue-500 rounded-full mb-3"></div>
      <p className="text-blue-300 font-medium text-sm">{role}</p>
    </motion.div>
  );
};

export default About;