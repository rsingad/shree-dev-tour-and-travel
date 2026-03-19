import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async'; 
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Services from './components/Services';
import Contact from './components/Contact';
import FutureHome from './components/FutureHome';
import Packages from './components/Packages';
import Preloader from './components/Preloader';
import Chatbot from './components/Chatbot';
import About from './components/About';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import FAQ from './components/FAQ';
import NotFound from './components/NotFound';
import TaxiInJodhpur from './components/TaxiInJodhpur';
import JodhpurToJaisalmerTaxi from './components/JodhpurToJaisalmerTaxi';
import JodhpurToJaipurTaxi from './components/JodhpurToJaipurTaxi';
import InnovaCrystaHireJodhpur from './components/InnovaCrystaHireJodhpur';
import JodhpurSightseeingTaxi from './components/JodhpurSightseeingTaxi';
import JodhpurToUdaipurTaxi from './components/JodhpurToUdaipurTaxi';
import TempoTravellerJodhpur from './components/TempoTravellerJodhpur';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  // Sitelinks Schema (Google Search mein premium look ke liye)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Shree Dev Tour And Travel Jodhpur",
    "url": "https://www.shreedevjodhpur.in/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.shreedevjodhpur.in/services?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      
      {/* --- GLOBAL SEO (Hyper-Optimized for Jodhpur & Competitors) --- */}
      <Helmet>
        {/* Title: Punchy & Keyword Rich */}
        <title>Shree Dev Tour & Travels Jodhpur | Best Car Rental & Cab Service</title>
        
        {/* Description: Highlighting Luxury & Specific Tour spots */}
        <meta name="description" content="Looking for Jodhpur car on rental? Shree Dev Tour And Travel offers premium Jodhpur cab & taxi services. Hire Innova Crysta, Force Urbania & book Jaisalmer desert safari packages at best rates." />
        
        {/* Exact Keywords + Competitor/Money Keywords */}
        <meta name="keywords" content="Jodhpur car on rental, Jodhpur cab & taxi, Jodhpur car, Jodhpur tour & travels, Shree Dev Tour And Travel jodhpur, taxi service in Jodhpur, Innova Crysta hire Jodhpur, Force Urbania Rajasthan, Mehrangarh fort taxi, Jaisalmer tour from Jodhpur, Jaipur to Jodhpur cab" />
        
        {/* Correct Canonical URL */}
        <link rel="canonical" href="https://www.shreedevjodhpur.in/" />
        
        {/* OG Tags for Social Media (WhatsApp/Facebook) */}
        <meta property="og:title" content="Shree Dev Tour & Travels | Premium Jodhpur Cab Service" />
        <meta property="og:description" content="Experience the best Jodhpur tour & travels with Shree Dev Tour And Travel. Safe, affordable, 24/7 service with GPS-enabled luxury cars." />
        <meta property="og:url" content="https://www.shreedevjodhpur.in/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.shreedevjodhpur.in/shree-dev-tour-and-travel.webp" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Jodhpur Tour & Travels | Shree Dev Tour And Travel" />
        <meta name="twitter:description" content="Book your Jodhpur cab & taxi or outstation tour packages today." />
        <meta name="twitter:image" content="https://www.shreedevjodhpur.in/shree-dev-tour-and-travel.webp" />

        {/* Injecting Sitelinks Schema */}
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
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
          
          <main className="flex-grow">
            <Routes>
              {/* FutureHome is the main landing page */}
              <Route path="/" element={<FutureHome />} />
              <Route path="/services" element={<Services />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/taxi-in-jodhpur" element={<TaxiInJodhpur />} />
              <Route path="/jodhpur-to-jaisalmer-taxi" element={<JodhpurToJaisalmerTaxi />} />
              <Route path="/jodhpur-to-jaipur-taxi" element={<JodhpurToJaipurTaxi />} />
              <Route path="/innova-crysta-hire-jodhpur" element={<InnovaCrystaHireJodhpur />} />
              <Route path="/jodhpur-sightseeing-taxi" element={<JodhpurSightseeingTaxi />} />
              <Route path="/jodhpur-to-udaipur-taxi" element={<JodhpurToUdaipurTaxi />} />
              <Route path="/tempo-traveller-jodhpur" element={<TempoTravellerJodhpur />} />
              <Route path="*" element={<NotFound />} />

            </Routes>
          </main>
          <Footer />
          <Chatbot />
          <Analytics />
        </>
      )}
      
    </div>
  );
}

export default App;