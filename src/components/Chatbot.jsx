import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Mic, MicOff, Volume2, Globe, Sparkles, FileText, Map, Coffee, Car } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const API_URL = "https://api.groq.com/openai/v1/chat/completions"; 
const OWNER_NUMBER = "918890472581"; 

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('hi-IN'); 
  const [messages, setMessages] = useState([
    { id: 1, text: "Khamma Ghani sa! 🙏 Main Raju bol raha hu Shree Dev Tour And Travel se. Rajasthan ghumne ka man bana liya? Aapka shubh naam kya hai?", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => { if (transcript) setInput(transcript); }, [transcript]);

  const speak = (text) => {
    if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text.replace(/[*#]/g, ""));
        utterance.lang = lang;
        synth.speak(utterance);
    }
  };

  const handleSend = (textOverride) => {
    const messageText = typeof textOverride === 'string' ? textOverride : input;
    
    if (!messageText.trim()) return;
    
    const userMsg = { id: Date.now(), text: messageText, sender: 'user' };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    resetTranscript();
    getGroqResponse(newMessages);
  };

  const getGroqResponse = async (chatHistory) => {
    setIsTyping(true);
    try {
      if (!GROQ_API_KEY) throw new Error("API Key Missing");

      const systemPrompt = `
        You are 'Raju', the smart and friendly owner of 'Shree Dev Tour and Travel' in Rajasthan.
        CRITICAL RULES:
        1. STRICT CONTEXT LOCK: Only talk about the places the user mentions.
        2. CLOSING THE DEAL: If user seems satisfied, firmly say: "Sir, sab set hai! Booking confirm karne ke liye bas niche 'Save & Send Full Deal' wale hare button pe click kar dijiye."
        3. YOU ARE HUMAN: Use Hinglish ('Hukum', 'Bhaiya', 'Haan ji').
        4. KEEP IT SHORT: Max 2-3 sentences. No bullet points.
        5. PRICES: Innova Crysta ~₹14/km. Force Urbania for groups. Sedan ~₹10/km.
      `;

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${GROQ_API_KEY}` },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "system", content: systemPrompt }, ...chatHistory.slice(-6).map(m => ({ role: m.sender === 'bot' ? 'assistant' : 'user', content: m.text }))],
          temperature: 0.6 
        })
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error.message);

      const aiReply = data.choices[0].message.content;
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now(), text: aiReply, sender: 'bot' }]);
      speak(aiReply);
    } catch (e) { 
      console.error(e);
      setIsTyping(false); 
      setMessages(prev => [...prev, { id: Date.now(), text: "Arre sir thoda network issue aa raha hai. Aap direct mujhe WhatsApp pe text kar dijiye niche wale button se!", sender: 'bot' }]);
    }
  };

  const generateDetailedReport = async () => {
    setIsTyping(true);
    const chatLog = messages.map(m => `${m.sender.toUpperCase()}: ${m.text}`).join("\n");

    const analysisPrompt = `
      Analyze this chat log and create a highly detailed VIP LEAD REPORT for Raju Ji.
      Chat Log: ${chatLog}
      Output format strictly exactly like this (in Hinglish with Emojis):
      *New Booking Lead* 🚨
      👤 *Name:* [Extract]
      📍 *Dest:* [Extract]
      👥 *Pax:* [Extract]
      📅 *Dates:* [Extract]
      🚗 *Car:* [Extract]
      💬 *Summary:* [3-4 lines]
    `;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${GROQ_API_KEY}` },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "user", content: analysisPrompt }],
        })
      });
      const data = await response.json();
      const reportContent = data.choices[0].message.content;
      
      window.open(`https://wa.me/${OWNER_NUMBER}?text=${encodeURIComponent(reportContent)}`, "_blank");
      setIsTyping(false);
    } catch (e) { 
      console.error(e);
      window.open(`https://wa.me/${OWNER_NUMBER}?text=Hi,%20sending%20booking%20details%20from%20website.`, "_blank");
      setIsTyping(false); 
    }
  };

  return (
    <>
      {/* Floating Button with Pulse - Z-Index updated for mobile */}
      <motion.button 
        aria-label="Open AI Assistant"
        onClick={() => setIsOpen(!isOpen)} 
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-gradient-to-tr from-blue-700 to-blue-500 text-white p-3.5 md:p-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] z-[100] border border-white/20"
      >
        {isOpen ? <X size={24}/> : <MessageSquare size={24}/>}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            /* MOBILE OPTIMIZED CLASSES HERE 👇 */
            className="fixed bottom-20 left-4 right-4 md:left-auto md:right-6 md:w-[400px] h-[calc(100dvh-100px)] md:h-[650px] max-h-[85vh] bg-slate-950 border border-slate-800 rounded-2xl md:rounded-[2rem] shadow-2xl z-[90] flex flex-col overflow-hidden"
          >
            {/* Royal Header */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 p-4 md:p-5 flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="w-9 h-9 md:w-10 md:h-10 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white/20 shadow-inner">
                        <Bot size={20} className="text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-3.5 md:h-3.5 bg-green-500 border-2 border-slate-950 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm md:text-base tracking-tight flex items-center gap-1.5">
                    Raju AI 
                    <span className="text-[9px] md:text-[10px] bg-yellow-500 text-black px-1.5 py-0.5 rounded-full font-bold">Expert</span>
                  </h3>
                  <p className="text-blue-200 text-[10px] md:text-xs">Shree Dev Tour & Travels</p>
                </div>
              </div>
              
              {/* Extra close button for mobile convenience */}
              <button onClick={() => setIsOpen(false)} className="md:hidden text-slate-300 hover:text-white p-1">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-4 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-900 to-black scrollbar-hide">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`max-w-[90%] md:max-w-[85%] p-3.5 md:p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-600/20' 
                      : 'bg-slate-800/80 backdrop-blur-md text-slate-100 border border-slate-700 rounded-tl-none shadow-md'
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                </div>
              ))}
              {isTyping && <div className="text-blue-400 text-[10px] font-mono animate-pulse tracking-widest ml-1">RAJU IS THINKING...</div>}
              <div ref={messagesEndRef} />
            </div>

            {/* Dynamic Suggestions */}
            <div className="px-3 py-2 md:px-4 flex gap-2 overflow-x-auto no-scrollbar bg-slate-900/50 shrink-0">
                {[
                  { icon: <Map size={12}/>, text: "Top 5 Places?" },
                  { icon: <Car size={12}/>, text: "Innova Rates?" },
                  { icon: <Coffee size={12}/>, text: "Local Food?" }
                ].map((item, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleSend(item.text)}
                      className="flex items-center gap-1.5 whitespace-nowrap bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] px-3 py-1.5 md:py-2 rounded-full border border-slate-700 transition-colors"
                    >
                        {item.icon} {item.text}
                    </button>
                ))}
            </div>

            {/* Input Section */}
            <div className="p-3 md:p-4 bg-slate-950 border-t border-slate-800 shrink-0">
               {/* THE BIG GREEN CTA BUTTON */}
               <button 
                  onClick={generateDetailedReport}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white py-2.5 md:py-3 rounded-xl md:rounded-2xl text-[11px] md:text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 mb-3 shadow-xl shadow-green-900/20 transition-all active:scale-95"
               >
                  <FileText size={14} /> Save & Send Full Deal
               </button>
               
               <div className="flex gap-2 md:gap-3 items-center bg-slate-900 p-1.5 md:p-2 rounded-xl md:rounded-2xl border border-slate-800 focus-within:border-blue-500 transition-all">
                 {/* Smart Mic Button */}
                 {browserSupportsSpeechRecognition ? (
                     <button 
                        onClick={() => listening ? SpeechRecognition.stopListening() : SpeechRecognition.startListening({ language: lang })} 
                        className={`p-2 md:p-2.5 rounded-lg md:rounded-xl transition-all ${listening ? 'bg-red-500/20 text-red-500 animate-pulse' : 'bg-slate-800 text-slate-400'}`}
                     >
                       {listening ? <MicOff size={18}/> : <Mic size={18}/>}
                     </button>
                 ) : (
                     <button disabled className="p-2 md:p-2.5 rounded-lg md:rounded-xl bg-slate-800 text-slate-600 cursor-not-allowed">
                         <MicOff size={18}/>
                     </button>
                 )}
                 
                 <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()} 
                    placeholder="Ask Raju..." 
                    className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-slate-600 px-1" 
                 />
                 
                 <button 
                    onClick={() => handleSend()} 
                    className="bg-blue-600 hover:bg-blue-500 text-white p-2 md:p-2.5 rounded-lg md:rounded-xl shadow-lg shadow-blue-600/30 transition-all"
                 >
                    <Send size={18}/>
                 </button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;