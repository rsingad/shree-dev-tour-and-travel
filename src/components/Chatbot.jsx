import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Mic, MicOff, Volume2, Globe, Sparkles, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// --- CONFIGURATION ---

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const API_URL = import.meta.env.VITE_API_URL; 
const OWNER_NUMBER = "919460595989"; 

const LANGUAGES = [
  { code: 'en-US', name: 'English' },
  { code: 'hi-IN', name: 'Hindi (हिंदी)' },
  { code: 'gu-IN', name: 'Gujarati (ગુજરાતી)' },
  { code: 'bn-IN', name: 'Bengali (বাংলা)' },
  { code: 'es-ES', name: 'Spanish' },
  { code: 'fr-FR', name: 'French' },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState('en-US'); 
  const [messages, setMessages] = useState([
    { id: 1, text: "Namaste! Main Shree Dev Travels se hu. Kaise madad kar sakta hu aapki aaj? 🚕✨", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    setInput(transcript);
  }, [transcript]);

  const speak = (text) => {
    const synth = window.speechSynthesis;
    synth.cancel(); 
    const cleanText = text.replace(/[*#]/g, "").replace(/https?:\/\/[^\s]+/g, "WhatsApp Link");
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang; 
    utterance.rate = 1; 
    synth.speak(utterance);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { id: Date.now(), text: input, sender: 'user' };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    resetTranscript();
    
    // Call AI Logic
    getGroqResponse(newMessages);
  };

  // --- 🧠 1. SMART PROFILING LOGIC ---
  const getGroqResponse = async (chatHistory) => {
    setIsTyping(true);

    try {
      if (!GROQ_API_KEY.startsWith("gsk_")) throw new Error("Invalid API Key");

      const currentLangName = LANGUAGES.find(l => l.code === lang)?.name || "English";

      // YEH HAI SABSE ZARURI CHANGE: AI KO SIKHANA KI WO DETAIL NIKALE
      const systemPrompt = `
        You are 'Raju', a senior travel consultant at "Shree Dev Tour and Travel" (Jaipur).
        
        YOUR GOAL: 
        Not just to book a car, but to **Profile the Client** so we can assign the perfect driver.
        
        INSTRUCTIONS:
        1. **Be Conversational:** Don't ask a list of questions. Ask one by one naturally.
        2. **Dig Deeper:**
           - If they say "Jaipur Sightseeing", ask: "Do you like history/forts or are you more into shopping and food?"
           - Ask about their group: "Elderly people hain sath me? To main kam chalne wala plan banaunga."
           - Ask about driver preference: "Driver shant chahiye ya guide jaisa jo baatein kare?"
        3. **Language:** Speak in **${currentLangName}** (Use Hinglish if Hindi).
        4. **Knowledge:** Sedan (10/km), Innova (14/km).
        
        Keep replies short (max 2-3 sentences) so the chat feels fast.
      `;

      const apiMessages = chatHistory.map(msg => ({
        role: msg.sender === 'bot' ? 'assistant' : 'user',
        content: msg.text
      }));

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile", 
          messages: [
            { role: "system", content: systemPrompt },
            ...apiMessages.slice(-10) 
          ],
          temperature: 0.7, 
          max_tokens: 1024 
        })
      });

      const data = await response.json();
      const aiReply = data.choices[0].message.content;
      
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now(), text: aiReply, sender: 'bot' }]);
      speak(aiReply);

    } catch (error) {
      console.error("AI Error", error);
      setIsTyping(false);
    }
  };

  // --- 📝 2. DETAILED BEHAVIORAL REPORT ---
  const generateReportAndSend = async () => {
    setIsTyping(true);
    
    // YE PROMPT REPORT KO "HUMAN" JAISA BANATA HAI
    const summaryPrompt = `
      You are writing a secret briefing report to the Business Owner (Raju Ji) about this client.
      
      TASK: Analyze the entire conversation above and write a detailed narrative report.
      
      FORMAT THE REPORT LIKE THIS:
      
      *New Lead Analysis* 🕵️‍♂️
      
      👤 **Client Vibe:** (E.g., "Very polite but strictly budget conscious", "High-end client, wants luxury", "Confused, needs a guide-driver")
      
      📍 **The Plan:** (Where they want to go, dates, pickup point)
      
      🚗 **Vehicle Need:** (Which car and why? E.g., "Suggested Innova because they have grandparents")
      
      💡 **Special Tip for Driver:** (E.g., "Driver should not smoke", "They want to eat authentic Rajasthani food", "Don't take them to expensive shops")
      
      📝 **Summary:** (2 lines on what happened)
      
      Write this in English (or Hinglish) so Raju Ji understands quickly. No Markdown, just plain text with emojis.
    `;

    const apiMessages = messages.map(msg => ({
        role: msg.sender === 'bot' ? 'assistant' : 'user',
        content: msg.text
    }));

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${GROQ_API_KEY}` },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                messages: [...apiMessages, { role: "system", content: summaryPrompt }],
                max_tokens: 1000 // Report lambi ho sakti hai
            })
        });

        const data = await response.json();
        const report = data.choices[0].message.content;

        const waUrl = `https://wa.me/${OWNER_NUMBER}?text=${encodeURIComponent(report)}`;
        window.open(waUrl, "_blank");
        
        setIsTyping(false);

    } catch (error) {
        window.open(`https://wa.me/${OWNER_NUMBER}?text=Hi, sending booking details.`, "_blank");
        setIsTyping(false);
    }
  };

  // --- UI ---
  const handleLangChange = (e) => {
    setLang(e.target.value);
    if (listening) {
      SpeechRecognition.stopListening();
      setTimeout(() => SpeechRecognition.startListening({ continuous: true, language: e.target.value }), 200);
    }
  };

  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true, language: lang });
    }
  };

  if (!browserSupportsSpeechRecognition) return null;

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] border border-blue-400"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 h-[600px] bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-900 to-slate-900 p-3 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h3 className="text-white font-bold text-sm flex items-center gap-1">Shree Dev AI <Sparkles size={10} className="text-yellow-400"/></h3>
                </div>
              </div>
              
              <div className="relative">
                <Globe size={14} className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <select 
                  value={lang} 
                  onChange={handleLangChange}
                  className="bg-slate-800 text-white text-xs pl-7 pr-2 py-1.5 rounded-full border border-slate-600 focus:outline-none appearance-none cursor-pointer hover:bg-slate-700"
                >
                  {LANGUAGES.map((l) => (
                    <option key={l.code} value={l.code}>{l.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-700">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 text-sm rounded-xl relative ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none'}`}>
                    {msg.sender === 'bot' && <Volume2 size={12} className="absolute -top-4 left-0 text-slate-500"/>}
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                  <div className="flex justify-start">
                     <div className="text-slate-400 text-xs animate-pulse ml-2">Analyzing...</div>
                  </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* --- ACTION AREA --- */}
            <div className="p-2 bg-slate-900 border-t border-slate-800 flex justify-center">
                 <button 
                    onClick={generateReportAndSend}
                    className="w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition"
                 >
                    <FileText size={16} /> Send Booking Report to Owner
                 </button>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-800 border-t border-slate-700 flex gap-2 items-center">
              <button onClick={toggleListening} className={`p-3 rounded-full transition-all ${listening ? 'bg-red-500 animate-pulse text-white shadow-[0_0_15px_red]' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'}`}>
                {listening ? <MicOff size={18} /> : <Mic size={18} />}
              </button>
              <input type="text" placeholder="Type or Speak..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} className="flex-1 bg-slate-900 text-white text-sm px-4 py-2 rounded-full border border-slate-600 focus:border-blue-500 outline-none" />
              <button onClick={handleSend} className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-full transition"><Send size={18} /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;