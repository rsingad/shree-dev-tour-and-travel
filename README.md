# 🚗 Shree Dev Travels - AI-Powered Premium Travel Portal

![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-3D_Engine-black?style=for-the-badge&logo=three.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Groq AI](https://img.shields.io/badge/Groq_AI-Llama_3-orange?style=for-the-badge)

A next-generation travel agency website designed for **Shree Dev Tour and Travel (Jaipur)**. 
This project combines **High-Fidelity 3D Graphics** with a **Human-Like AI Salesman** to create a futuristic booking experience.

---

## ✨ Key Features

### 🏎️ 3D Immersive Experience
- **Interactive Showroom:** Features a realistic 3D car model (`s11.glb`) rendered using **React Three Fiber**.
- **Performance Optimized:** Uses `AdaptiveDpr` and `ContactShadows` to ensure smooth 60FPS performance even on mobile devices.
- **Cinematic Intro:** A sci-fi "System Boot" preloader animation.

### 🤖 Smart AI Salesman (Voice-Enabled)
- **Powered by Groq (Llama 3):** Uses the ultra-fast Llama-3.3-70b model for instant replies.
- **Multilingual Support (12 Languages):** Speaks and understands Hindi, English, Gujarati, French, Spanish, etc.
- **Voice-to-Voice Interaction:** Users can talk to the bot via Microphone, and the bot replies with voice (Text-to-Speech).
- **Intelligent Profiling:** The bot acts like a human manager—it asks about family, preferences, and suggests cars (Sedan vs Innova) based on the conversation.
- **Automated Lead Reporting:** Analyzes the chat history to generate a **"Psychological Client Report"** and sends it directly to the Business Owner's WhatsApp.

### 🎨 Modern UI/UX
- **Glassmorphism:** Premium blurred glass effects across the UI.
- **Physics-Based Cards:** Service cards respond to mouse movements (Tilt effect).
- **Dark Mode Aesthetic:** A luxury slate-blue theme tailored for a premium feel.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS
- **3D Engine:** Three.js, React Three Fiber, Drei
- **AI Integration:** Groq API (Llama-3.3-70b-versatile)
- **Speech Engine:** `react-speech-recognition` & Web Speech API
- **Animations:** Framer Motion
- **Icons:** Lucide React

---

## 🚀 Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/shree-dev-travels.git](https://github.com/your-username/shree-dev-travels.git)
cd shree-dev-travels
2. Install Dependencies
Important: Since this project uses React 19, use the legacy peer deps flag.
npm install --legacy-peer-deps
3. Setup Environment Variables
Create a .env file in the root directory and add your Groq API Key:
VITE_GROQ_API_KEY=gsk_your_secret_key_here
4. Add 3D Asset
5. Run the Project
npm run dev

src/
├── components/
│   ├── Chatbot.jsx       # The AI Brain (Voice + Logic + Report Gen)
│   ├── FutureHome.jsx    # 3D Hero Section & Optimization
│   ├── Services.jsx      # Physics-based Fleet Cards
│   ├── Packages.jsx      # Tour Itineraries
│   ├── Contact.jsx       # Contact Form
│   ├── Navbar.jsx        # Floating Glass Navbar
│   └── Preloader.jsx     # Sci-Fi Loading Screen
├── App.jsx               # Main Routing & Layout
├── main.jsx              # Entry Point
public/
└── car.glb               # 3D Car Model Asset

🤖 How the AI Salesman Works
Selection: User selects their language (e.g., Hindi) from the chatbot header.

Conversation: User speaks via Mic: "Jaipur ghumne ka plan hai."

Processing: - Speech is converted to text.

Sent to Groq API with a "Human Salesman" system prompt.

AI analyzes intent (Budget vs Luxury) and replies in the selected language.

Closing: When the user is ready, they click "Send Booking Report".

Reporting: The AI summarizes the entire chat into a professional lead report and opens the Owner's WhatsApp with the details pre-filled.

🛡️ Security Note
The API Key is secured using Environment Variables. Ensure .env is added to your .gitignore file to prevent leaking secrets on GitHub.
.env
node_modules
dist

📞 Contact & Support
Shree Dev Tour and Travel 📍 Jaipur, Rajasthan

📞 Owner: +91 88904-72581
Made  ❤️ by ramesh singad