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
    { id: 1, text: "Khamma Ghani sa! 🙏 Main Raju bol raha hu Shree Dev Travels se. Rajasthan ghumne ka man bana liya? Aapka shubh naam kya hai?", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);
  useEffect(() => { if (transcript) setInput(transcript); }, [transcript]);

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text.replace(/[*#]/g, ""));
    utterance.lang = lang;
    synth.speak(utterance);
  };

  const handleSend = (textOverride) => {
    const messageText = textOverride || input;
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
      const systemPrompt = `
        You are 'Raju', the legendary and super-smart owner of 'Shree Dev Tour and Travel' in Rajasthan.
        
        BEHAVIOR:
        1. YOU ARE HUMAN: Talk like a local expert. Use 'Hukum', 'Bhaiya', 'Padharo Mare Desh'.
        2. BE PROACTIVE: If they say 'Jodhpur', tell them about the 'Blue City' magic or 'Mishrilal ki Lassi'.
        3. SALES GENIUS: If they look for a car, explain why Innova is better for family comfort. 
        4. LEAD CAPTURE: You MUST find out: Name, No. of People, Travel Dates, and Budget level.
        5. NO ROBOT TALK: Keep it short (2 sentences), very friendly, and always end with a question to keep them talking.
      `;

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${GROQ_API_KEY}` },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [{ role: "system", content: systemPrompt }, ...chatHistory.slice(-10).map(m => ({ role: m.sender === 'bot' ? 'assistant' : 'user', content: m.text }))],
          temperature: 0.8
        })
      });
      const data = await response.json();
      const aiReply = data.choices[0].message.content;
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now(), text: aiReply, sender: 'bot' }]);
      speak(aiReply);
    } catch (e) { setIsTyping(false); }
  };

  const generateDetailedReport = async () => {
    setIsTyping(true);
    const chatLog = messages.map(m => `${m.sender.toUpperCase()}: ${m.text}`).join("\n");

    const analysisPrompt = `
      Analyze this chat and create a detailed VIP LEAD REPORT for the owner.
      Chat: ${chatLog}
      
      Format in Hinglish with Emojis:
      - 👤 GUEST NAME: 
      - 📍 DESTINATION:
      - 👥 MEMBERS:
      - 📅 DATES:
      - 💬 WHAT HAPPENED: (Summarize the whole deal, promises made, prices discussed in 4-5 lines)
      - ⚡ ACTION: (What should Raju do next?)
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
      window.open(`https://wa.me/${OWNER_NUMBER}?text=${encodeURIComponent(data.choices[0].message.content)}`, "_blank");
      setIsTyping(false);
    } catch (e) { setIsTyping(false); }
  };

  return (
    <>
      {/* Floating Button with Pulse */}
      <motion.button 
        onClick={() => setIsOpen(!isOpen)} 
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 bg-gradient-to-tr from-blue-700 to-blue-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] z-50 border border-white/20"
      >
        {isOpen ? <X size={24}/> : <MessageSquare size={24}/>}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-[360px] md:w-[420px] h-[650px] max-h-[85vh] bg-slate-950 border border-slate-800 rounded-[2rem] shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Royal Header */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 p-5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white/20 shadow-inner">
                        <Bot size={22} className="text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-slate-950 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-base tracking-tight">Raju AI <span className="text-[10px] bg-yellow-500 text-black px-1.5 py-0.5 rounded-full ml-1">Expert</span></h3>
                  <p className="text-blue-200 text-xs">Shree Dev Tour & Travels</p>
                </div>
              </div>
              <Sparkles className="text-yellow-400" size={20}/>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-900 to-black scrollbar-hide">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
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

            {/* Dynamic Suggestions (The Smart Part) */}
            <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-slate-900/50">
                {[
                  { icon: <Map size={12}/>, text: "Top 5 Places?" },
                  { icon: <Car size={12}/>, text: "Innova Rates?" },
                  { icon: <Coffee size={12}/>, text: "Local Food?" }
                ].map((item, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleSend(item.text)}
                      className="flex items-center gap-1.5 whitespace-nowrap bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] px-3 py-2 rounded-full border border-slate-700 transition-colors"
                    >
                        {item.icon} {item.text}
                    </button>
                ))}
            </div>

            {/* Input Section */}
            <div className="p-4 bg-slate-950 border-t border-slate-800">
               <button 
                  onClick={generateDetailedReport}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white py-3 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 mb-4 shadow-xl shadow-green-900/20 transition-all active:scale-95"
               >
                  <FileText size={16} /> Save & Send Full Deal to WhatsApp
               </button>
               
               <div className="flex gap-3 items-center bg-slate-900 p-2 rounded-2xl border border-slate-800 focus-within:border-blue-500 transition-all">
                 <button 
                    onClick={() => listening ? SpeechRecognition.stopListening() : SpeechRecognition.startListening({ language: lang })} 
                    className={`p-2.5 rounded-xl transition-all ${listening ? 'bg-red-500/20 text-red-500 animate-pulse' : 'bg-slate-800 text-slate-400'}`}
                 >
                   {listening ? <MicOff size={20}/> : <Mic size={20}/>}
                 </button>
                 
                 <input 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()} 
                    placeholder="Ask Raju about your trip..." 
                    className="flex-1 bg-transparent text-white text-sm outline-none placeholder:text-slate-600" 
                 />
                 
                 <button 
                    onClick={() => handleSend()} 
                    className="bg-blue-600 hover:bg-blue-500 text-white p-2.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all"
                 >
                    <Send size={20}/>
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