import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Mail, Send, MessageCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  // --- FORM LOGIC (Send to WhatsApp) ---
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Booking Enquiry*%0A-----------------------%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Date:* ${formData.date}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/918890472581?text=${text}`, '_blank');
  };

  return (
    <div className="font-sans text-slate-200 bg-slate-900 min-h-screen pt-20 selection:bg-blue-500/30">
      <Helmet>
        <title>Contact Support | Shree Dev Travels</title>
        <meta name="description" content="Contact Shree Dev Tour and Travel Jaipur. Call 8890472581 for taxi booking." />
      </Helmet>

      {/* --- PAGE HEADER --- */}
      <div className="relative py-20 px-6 text-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-2 block">
            24/7 Support
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Plan your journey with us. Our support team is ready to assist you anytime.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* --- LEFT SIDE: CONTACT INFO --- */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Contact Information</h2>
            <p className="text-slate-400">Direct lines for instant booking and support.</p>
          </div>

          <div className="space-y-6">
            <ContactItem 
              icon={<Phone className="text-blue-500" />}
              title="Phone Number"
              desc={<>
                <a href="tel:8890472581" className="block font-bold text-white hover:text-blue-400 transition">+91 88904-72581</a>
                <a href="tel:8290071304" className="block font-bold text-slate-400 hover:text-blue-400 transition">+91 82900-71304</a>
              </>}
            />
            
            <ContactItem 
              icon={<MapPin className="text-blue-500" />}
              title="Headquarters"
              desc="Jaipur, Rajasthan, India (Service available Pan-India)"
            />

            <ContactItem 
              icon={<Mail className="text-blue-500" />}
              title="Email Address"
              desc={<a href="mailto:booking@shreedev.com" className="hover:text-blue-400 transition">booking@shreedev.com</a>}
            />

            <ContactItem 
              icon={<Clock className="text-blue-500" />}
              title="Operating Hours"
              desc="24 Hours / 7 Days a Week"
            />
          </div>

          {/* Google Map Embed (Dark Border) */}
          <div className="w-full h-64 bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-700 mt-8 relative group">
            <iframe 
              title="Jaipur Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d75.65046970649679!3d26.88544791796718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1705260000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} // Map ko Dark Mode jaisa banata hai
              allowFullScreen="" 
              loading="lazy"
              className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
            ></iframe>
          </div>
        </motion.div>

        {/* --- RIGHT SIDE: BOOKING FORM --- */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-slate-700"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white">Send Enquiry</h3>
            <p className="text-sm text-slate-400 mt-1">Fill the form and we will connect via WhatsApp instantly.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Your Name</label>
              <input 
                type="text" name="name" required
                className="w-full p-4 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 text-white outline-none transition placeholder-slate-600"
                placeholder="Ex. Rahul Sharma"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Phone</label>
                <input 
                  type="tel" name="phone" required
                  className="w-full p-4 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 text-white outline-none transition placeholder-slate-600"
                  placeholder="9876543210"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Travel Date</label>
                <input 
                  type="date" name="date"
                  className="w-full p-4 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 text-slate-400 outline-none transition"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Message</label>
              <textarea 
                name="message" rows="4"
                className="w-full p-4 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 text-white outline-none transition placeholder-slate-600"
                placeholder="I want to book Innova for 3 days trip..."
                onChange={handleChange}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition flex items-center justify-center gap-2 hover:-translate-y-1 transform"
            >
              <Send size={20} /> Send Enquiry via WhatsApp
            </button>
          </form>
        </motion.div>

      </div>
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
      <h4 className="text-lg font-bold text-white">{title}</h4>
      <div className="text-slate-400 text-sm mt-1">{desc}</div>
    </div>
  </div>
);

export default Contact;