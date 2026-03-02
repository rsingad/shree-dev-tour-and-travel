import React, { useState, useId } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Mail, Send, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });

  // Unique IDs for Form Accessibility (SEO Hack)
  const nameId = useId();
  const phoneId = useId();
  const dateId = useId();
  const msgId = useId();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Booking Enquiry - shreedevjodhpur.in*%0A-----------------------%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Travel Date:* ${formData.date}%0A*Requirement:* ${formData.message}`;
    window.open(`https://wa.me/918890472581?text=${text}`, '_blank');
  };

  // Contact Page Specific Schema
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Shree Dev Travels Jodhpur",
      "image": "https://shreedevjodhpur.in/wolf-logo.webp",
      "telephone": "+918890472581",
      "email": "booking@shreedev.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jodhpur",
        "addressRegion": "Rajasthan",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="font-sans text-slate-200 bg-slate-900 min-h-screen pt-20 selection:bg-blue-500/30 overflow-hidden">
      
      {/* --- ADVANCED SEO HELMET --- */}
      <Helmet>
        <title>Contact Shree Dev Travels | Cab Booking in Jodhpur & Rajasthan</title>
        <meta name="description" content="Contact Shree Dev Tour and Travel Jodhpur for instant cab booking. 24/7 support for outstation taxis, Innova Crysta hire, and Rajasthan tour packages." />
        <meta name="keywords" content="Contact travel agency Jodhpur, cab booking Jodhpur, hire taxi Jaisalmer, Shree Dev Travels contact number, Rajasthan tour booking, Force Urbania booking Jodhpur" />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      {/* --- PAGE HEADER (SEO H1) --- */}
      <header className="relative py-20 px-6 text-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-2 block">
            24/7 Cab Booking Support
          </span>
          {/* H1 Tag for Google Local SEO */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Our Travel Experts</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Need an <strong>Innova Crysta</strong> for Jodhpur or a complete Rajasthan tour package? Our local experts are ready to assist you.
          </p>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* --- LEFT SIDE: CONTACT INFO (Wrapped in Address tag for SEO) --- */}
        <motion.address 
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8 not-italic"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Direct Booking Lines</h2>
            <p className="text-slate-400">Skip the middleman. Get the best per-km rates directly from the owner.</p>
          </div>

          <div className="space-y-6">
            <ContactItem 
              icon={<Phone className="text-blue-500" aria-hidden="true" />}
              title="Call for Instant Booking"
              desc={<>
                <a href="tel:8890472581" title="Call Shree Dev Travels" className="block font-bold text-white hover:text-blue-400 transition text-lg">+91 88904-72581</a>
                <a href="tel:8290071304" title="Alternative Booking Number" className="block font-bold text-slate-400 hover:text-blue-400 transition">+91 82900-71304</a>
              </>}
            />
            
            <ContactItem 
              icon={<MapPin className="text-blue-500" aria-hidden="true" />}
              title="Headquarters & Service Area"
              desc="Based in Jodhpur & Jaipur. Providing premium cabs across Rajasthan including Jaisalmer & Bikaner."
            />

            <ContactItem 
              icon={<ShieldCheck className="text-blue-500" aria-hidden="true" />}
              title="Verified Agency"
              desc="Trusted by 50,000+ travelers for safe, sanitized, and GPS-enabled outstation rides."
            />

            <ContactItem 
              icon={<Clock className="text-blue-500" aria-hidden="true" />}
              title="Operating Hours"
              desc="24 Hours / 7 Days a Week - Always Ready to Drive."
            />
          </div>

          {/* Valid Google Map Embed (Local SEO Booster - Real Jodhpur Map Query) */}
          <div className="w-full h-64 bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-700 mt-8 relative group" aria-label="Location Map">
            <iframe 
              title="Shree Dev Travels Jodhpur Location"
              src="https://maps.google.com/maps?q=Jodhpur,+Rajasthan&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%)' }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            ></iframe>
          </div>
        </motion.address>

        {/* --- RIGHT SIDE: BOOKING FORM --- */}
        <motion.section 
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-slate-700"
          aria-label="Contact Form"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white">Send WhatsApp Enquiry</h3>
            <p className="text-sm text-slate-400 mt-1">Fill the details below to get instant quotes for Innova, Urbania, or Tour Packages.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor={nameId} className="block text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 cursor-pointer">Your Name</label>
              <input 
                id={nameId}
                type="text" name="name" required
                className="w-full p-4 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 text-white outline-none transition placeholder-slate-600 shadow-inner"
                placeholder="Ex. Rahul Sharma"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor={phoneId} className="block text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 cursor-pointer">Phone Number</label>
                <input 
                  id={phoneId}
                  type="tel" name="phone" required
                  className="w-full p-4 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 text-white outline-none transition placeholder-slate-600 shadow-inner"
                  placeholder="9876543210"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor={dateId} className="block text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 cursor-pointer">Travel Date</label>
                <input 
                  id={dateId}
                  type="date" name="date" required
                  className="w-full p-4 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 text-slate-200 outline-none transition shadow-inner cursor-pointer"
                  style={{ colorScheme: "dark" }}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor={msgId} className="block text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 cursor-pointer">Your Requirement</label>
              <textarea 
                id={msgId}
                name="message" rows="4" required
                className="w-full p-4 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 text-white outline-none transition placeholder-slate-600 shadow-inner"
                placeholder="E.g., I want to book an Innova Crysta for a 3-day Jaisalmer trip..."
                onChange={handleChange}
              ></textarea>
            </div>

            <button 
              type="submit"
              aria-label="Send Enquiry to WhatsApp"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] transition flex items-center justify-center gap-2 hover:-translate-y-1 transform active:scale-95"
            >
              <Send size={20} aria-hidden="true" /> Get Price on WhatsApp
            </button>
          </form>
        </motion.section>

      </main>
    </div>
  );
};

// --- SUB-COMPONENT ---
const ContactItem = ({ icon, title, desc }) => (
  <div className="flex items-start gap-4">
    <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-blue-500 shadow-lg">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <div className="text-slate-400 text-sm mt-1">{desc}</div>
    </div>
  </div>
);

export default Contact;