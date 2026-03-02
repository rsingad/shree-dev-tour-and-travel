import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  // --- GOOGLE RICH SNIPPET SCHEMA (MAGIC SEO) ---
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Innova Crysta fare from Jaipur to Jodhpur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The per-km fare for an Innova Crysta from Jaipur to Jodhpur is approximately ₹14 to ₹16. Shree Dev Travels provides transparent pricing with no hidden charges, making us a reliable alternative to expensive Jodhpur tour operators."
        }
      },
      {
        "@type": "Question",
        "name": "Is Force Urbania comfortable for a 10-15 person family trip in Rajasthan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the Force Urbania is highly comfortable for group trips of 10 to 17 people. It features luxury push-back seats, ample legroom, and powerful AC, perfect for long Rajasthan tours including Jaisalmer desert safaris."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide airport taxi drops to Taj Hari Mahal or Umaid Bhawan Palace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We offer 24/7 premium cab services for drops from Jodhpur Airport to top luxury hotels like Taj Hari Mahal, Umaid Bhawan Palace, and Raas Jodhpur."
        }
      },
      {
        "@type": "Question",
        "name": "How to plan a 3-day family trip to Jaisalmer from Jodhpur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A perfect 3-day Jaisalmer trip includes: Day 1 - Travel from Jodhpur and visit the Golden Fort & Gadisar Lake. Day 2 - Jeep safari, Camel ride, and night stay in Swiss Tents at Sam Sand Dunes. Day 3 - Return journey. We offer customized cab packages for this exact route."
        }
      }
    ]
  };

  const faqs = [
    {
      q: "What is the Innova Crysta fare from Jaipur to Jodhpur?",
      a: "The per-km fare for an Innova Crysta from Jaipur to Jodhpur is approximately ₹14 to ₹16. Looking for a reliable and affordable alternative to expensive Jodhpur tour operators? Choose Shree Dev Travels for transparent billing with no hidden driver bata."
    },
    {
      q: "Is Force Urbania comfortable for a 10-15 person trip in Rajasthan?",
      a: "Yes! The Force Urbania is the best luxury mini-bus for big groups. It features premium push-back seats, heavy AC, and huge luggage space. It is much more comfortable than traditional tempo travellers for long trips like Jodhpur to Jaisalmer."
    },
    {
      q: "Do you provide airport taxi drops to Taj Hari Mahal or Umaid Bhawan Palace?",
      a: "Absolutely! We offer 24/7 premium cab services for local sightseeing and direct drops from Jodhpur Airport/Railway Station to luxury spots like Taj Hari Mahal, Umaid Bhawan Palace, and Mehrangarh Fort."
    },
    {
      q: "How to plan a 3-day family trip to Jaisalmer from Jodhpur?",
      a: "A perfect 3-day itinerary: Day 1 - Travel from Jodhpur, visit the Golden Fort & Patwon ki Haveli. Day 2 - Desert experience at Sam Sand Dunes with Jeep safari, Camel ride, and night stay in Swiss Tents. Day 3 - Safe return journey. We provide complete taxi packages for this route."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0); // Pehla question default open rakha hai

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800" aria-label="Frequently Asked Questions">
      {/* Injecting FAQ Schema into the DOM */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-2 block">
            Tourist Guide & FAQs
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Rajasthan Travel <span className="text-blue-500">Insights</span>
          </h2>
          <p className="text-slate-400">Everything you need to know about booking cabs and planning tours in Jodhpur & Jaisalmer.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`border ${openIndex === index ? 'border-blue-500 bg-slate-800/80' : 'border-slate-700 bg-slate-800/30'} rounded-2xl overflow-hidden transition-all duration-300`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4">
                  <HelpCircle size={20} className={openIndex === index ? 'text-blue-400' : 'text-slate-500'} />
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                    {faq.q}
                  </span>
                </div>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-blue-400 shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-slate-500 shrink-0" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 ml-9 text-slate-400 leading-relaxed border-t border-slate-700/50 mt-2">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;