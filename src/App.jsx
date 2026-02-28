import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; 

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import FutureHome from './components/FutureHome';
import Packages from './components/Packages';
import Preloader from './components/Preloader';
import Chatbot from './components/Chatbot';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      
      {/* --- GLOBAL SEO (Safety Net) --- */}
      {/* Ye tag har page par default apply hoga jahan apna personal Helmet nahi hoga */}
      <Helmet>
        <title>Shree Dev Tour and Travel | Premium Cabs in Jaipur, Jodhpur & Jaisalmer</title>
        <meta name="description" content="Explore Rajasthan with Shree Dev Tour and Travel. We provide affordable, safe, and luxury taxi services, outstation cabs, and custom tour packages for Jaipur, Jodhpur, Jaisalmer, and Bikaner." />
        <meta name="keywords" content="Shree Dev Tour and Travel, taxi in Jaipur, cab service Jodhpur, Jaisalmer desert safari, Bikaner taxi, Rajasthan outstation cabs, hire Innova in Jaipur" />
        <link rel="canonical" href="https://www.shreedevtravels.com/" />
      </Helmet>

      {/* --- PRELOADER LOGIC --- */}
      <AnimatePresence mode='wait'>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* --- MAIN WEBSITE --- */}
      {!loading && (
        <>
          <ScrollToTop />
          <Navbar />
          
          <div className="flex-grow">
            <Routes>
              {/* FutureHome hi aapka main landing page lag raha hai */}
              <Route path="/" element={<FutureHome />} />
              <Route path="/services" element={<Services />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          <Footer />
          <Chatbot />
        </>
      )}
      
    </div>
  );
}

export default App;