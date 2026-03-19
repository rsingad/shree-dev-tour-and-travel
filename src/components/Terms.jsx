import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ScrollText, CreditCard, Ban, AlertTriangle, Scale, Car } from 'lucide-react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans pt-20 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- SEO HELMET --- */}
      <Helmet>
        <title>Terms & Conditions | Shree Dev Tour And Travel Jodhpur</title>
        <meta name="description" content="Read the Terms and Conditions for booking cabs and tour packages with Shree Dev Tour and Travel in Rajasthan." />
        <meta name="robots" content="noindex, follow" />
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
              <ScrollText size={32} className="text-blue-500" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-slate-400 text-sm md:text-base">
            Please read these terms carefully before booking your Rajasthan trip.
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
              <CreditCard size={24} className="text-blue-500" /> 1. Booking & Payments
            </h2>
            <ul className="list-disc list-inside text-slate-400 space-y-3 ml-2 leading-relaxed">
              <li>To confirm a booking for outstation cabs (Innova Crysta, Force Urbania) or Tour Packages, an <strong>advance payment of 20% to 30%</strong> of the total estimated fare is required.</li>
              <li>The remaining balance must be paid directly to the driver during the trip or before the completion of the journey.</li>
              <li>Toll taxes, parking fees, and state border taxes are generally extra and to be paid by the customer unless explicitly mentioned in the package.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Ban size={24} className="text-blue-500" /> 2. Cancellation & Refund Policy
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              We understand that plans can change. Our cancellation policy is as follows:
            </p>
            <ul className="list-disc list-inside text-slate-400 space-y-3 ml-2 leading-relaxed">
              <li><strong>Cancellation 48 hours before pickup:</strong> 100% of the advance amount will be refunded.</li>
              <li><strong>Cancellation 24-48 hours before pickup:</strong> 50% of the advance amount will be refunded.</li>
              <li><strong>Cancellation within 24 hours of pickup:</strong> No refund of the advance amount will be provided.</li>
              <li>If the booking is cancelled from our end due to unavoidable circumstances, a full refund will be initiated immediately.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Car size={24} className="text-blue-500" /> 3. Vehicle & Trip Policies
            </h2>
            <ul className="list-disc list-inside text-slate-400 space-y-3 ml-2 leading-relaxed">
              <li><strong>AC Policy:</strong> Air Conditioning will be turned off while driving in hilly areas (e.g., Mount Abu) for passenger safety and vehicle performance.</li>
              <li><strong>Luggage:</strong> We are not responsible for the loss or damage of any personal belongings left in the cab.</li>
              <li><strong>Conduct:</strong> Smoking and consumption of alcohol are strictly prohibited inside our premium vehicles. The driver reserves the right to terminate the ride if rules are broken.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle size={24} className="text-blue-500" /> 4. Unforeseen Circumstances
            </h2>
            <p className="text-slate-400 leading-relaxed">
              In case of a vehicle breakdown during the journey, Shree Dev Tour And Travel will make every effort to provide an alternate vehicle of similar standard in the shortest possible time. However, we are not liable for any delays or missed flights/trains caused by traffic, weather, or mechanical failures.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-slate-900 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Scale size={20} className="text-blue-500" /> 5. Legal Jurisdiction
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Any disputes arising from these terms and conditions or the services provided by Shree Dev Tour and Travel shall be subject to the exclusive jurisdiction of the courts in <strong>Jodhpur, Rajasthan</strong>.
            </p>
          </section>

        </motion.div>
      </main>

    </div>
  );
};

export default Terms;