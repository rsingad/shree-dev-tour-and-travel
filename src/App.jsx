import React, { useEffect ,useState } from 'react';
import { Routes, Route ,useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // 
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import FutureHome from './components/FutureHome';
import Packages from './components/Packages';
import Preloader from './components/Preloader';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
function App() {
  const [loading, setLoading] = useState(true); // Default loading true rakhein

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      
      {/* --- PRELOADER LOGIC --- */}
      <AnimatePresence mode='wait'>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* --- MAIN WEBSITE --- */}
      {/* Jab loading false ho jayega, tabhi website dikhegi */}
      {!loading && (
        <>
          <ScrollToTop />
          <Navbar />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<FutureHome />} />
              <Route path="/services" element={<Services />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          <Footer />
        </>
      )}
      
    </div>
  );
}

export default App;