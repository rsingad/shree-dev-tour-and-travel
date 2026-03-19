import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans pt-20 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- SEO HELMET --- */}
      <Helmet>
        <title>Privacy Policy | Shree Dev Travels Jodhpur</title>
        <meta name="description" content="Read the Privacy Policy of Shree Dev Tour and Travel. Learn how we protect your personal data, booking information, and ensure a secure experience." />
        <meta name="robots" content="noindex, follow" /> {/* Privacy pages mostly noindex rakhte hain SEO focus main pages par rakhne ke liye */}
      </Helmet>

      {/* --- HERO HEADER --- */}
      <section className="relative py-16 px-6 text-center border-b border-slate-800 bg-slate-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-blue-500/10 p-3 rounded-2xl border border-blue-500/20">
              <ShieldCheck size={32} className="text-blue-500" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400 text-sm md:text-base">
            Last Updated: {new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
          </p>
        </motion.div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <main className="container mx-auto px-6 py-16 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 border border-slate-700 p-8 md:p-12 rounded-3xl shadow-xl space-y-10"
        >
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Eye size={24} className="text-blue-500" /> Introduction
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Welcome to <strong>Shree Dev Tour and Travel</strong> ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website (<strong>shreedevjodhpur.in</strong>) or book our taxi and tour services in Rajasthan.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FileText size={24} className="text-blue-500" /> Information We Collect
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              To provide you with the best cab booking and tour package experience, we may collect the following information:
            </p>
            <ul className="list-disc list-inside text-slate-400 space-y-2 ml-2">
              <li><strong>Personal Details:</strong> Name, Email Address, and Phone Number.</li>
              <li><strong>Booking Details:</strong> Pickup/Drop locations, travel dates, and vehicle preferences (e.g., Innova Crysta, Force Urbania).</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and operating system (collected automatically via cookies to improve site performance).</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <ShieldCheck size={24} className="text-blue-500" /> How We Use Your Information
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              We do not sell, rent, or trade your personal information. We use your data strictly for:
            </p>
            <ul className="list-disc list-inside text-slate-400 space-y-2 ml-2">
              <li>Confirming and managing your taxi or tour bookings.</li>
              <li>Communicating with you via WhatsApp or Phone regarding your trip.</li>
              <li>Sending quotations and itinerary details.</li>
              <li>Improving our website and customer service.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock size={24} className="text-blue-500" /> Data Sharing & Security
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Your safety is our priority. We implement appropriate security measures to protect your personal information. 
            </p>
            <p className="text-slate-400 leading-relaxed">
              We only share necessary details (like your name and phone number) with our verified drivers or partnered hotels (if you book a complete tour package) to ensure a smooth travel experience in Jodhpur, Jaisalmer, or Jaipur.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or your data, please contact us directly:
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-slate-300"><strong>Business Name:</strong> Shree Dev Tour and Travel</p>
              <p className="text-slate-300"><strong>Phone:</strong> <a href="tel:8890472581" className="text-blue-400 hover:underline">+91 88904-72581</a></p>
              <p className="text-slate-300"><strong>Email:</strong> <a href="mailto:booking@shreedev.com" className="text-blue-400 hover:underline">booking@shreedev.com</a></p>
              <p className="text-slate-300"><strong>Location:</strong> Jodhpur, Rajasthan, India</p>
            </div>
          </section>

        </motion.div>
      </main>

    </div>
  );
};

export default Privacy;