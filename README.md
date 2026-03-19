# 🐺 Shree Dev Tour And Travel - Premium 3D & AI-Powered Travel Portal

![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-3D_Engine-black?style=for-the-badge&logo=three.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Groq AI](https://img.shields.io/badge/Groq_AI-Llama_3-orange?style=for-the-badge)
![SEO](https://img.shields.io/badge/SEO-Enterprise_Grade-brightgreen?style=for-the-badge)

A next-generation travel agency website and highly converting booking application designed for **Shree Dev Tour and Travel (Jodhpur & Jaipur)**. 
This project combines **High-Fidelity 3D Graphics**, a **Human-Like AI Salesman**, an expansive **Tour Package System**, and **Enterprise-Grade Technical SEO** to dominate the local travel market in Rajasthan.

---

## ✨ Key Features

### 🗺️ 15+ Premium Rajasthan Tour Packages
- **Curated Authentic Itineraries:** Detailed day-by-day plans for top destinations (Jodhpur, Jaisalmer, Udaipur, Ranthambore, Jawai, Khatu Shyam).
- **15-Year Expert Persona:** Distinct "Local Expert" tips and knowledge baked into the UI to drastically increase user trust and bookings.
- **Rich Media & Authentic Assets:** Photorealistic, high-res destination images hosted locally for lightning-fast speeds and high reliability.

### 🏎️ 3D Immersive Experience & Premium Fleet
- **Interactive Showroom:** Features a realistic 3D car model rendered using **React Three Fiber**.
- **The Premium Fleet:** Detailed showcases for specialized vehicles like **Toyota Innova Crysta**, **Force Urbania**, and **Tempo Traveller**, matched with beautiful local UI imagery.
- **Cinematic Intro:** A sci-fi "System Boot" preloader animation greeting visitors.

### 🤖 Smart AI Salesman (Voice-Enabled)
- **Powered by Groq (Llama 3.3):** Uses the ultra-fast Llama-3.3-70b model for instant replies.
- **Voice-to-Voice Interaction:** Users can talk to the bot via Microphone, generating responses in multiple languages including Hindi and English.
- **Intelligent Profiling:** Asks about family, preferences, and suggests tour packages based on the conversation to heavily boost conversion.
- **Automated Lead Reporting:** Analyzes the chat history to generate a **"Psychological Client Report"** and routes it directly to the Business Owner's WhatsApp.

### 📈 Enterprise-Grade SEO & Local Trust
- **Rich Snippet Schemas:** Extensive integration of JSON-LD schemas (`WebSite`, `TravelAgency`, `FAQPage`, `ItemList`) for Zero-Click Google searches.
- **Dynamic SEO:** Configured `sitemap.xml`, `robots.txt`, and canonical tags alongside categorized `seo_keywords.txt` targeting high-intent long-tail keywords.
- **High-Trust UI:** A dedicated **About Us** section highlighting the Founding Partners **Raju Gurjar**, **Dev Gurjar**, and **Deva Gurjar** using dynamic letter-avatars.
- **Legal Compliance:** Completed with **Privacy Policy**, **Terms & Conditions**, and **Interactive FAQs** complying with Google & Meta Ad policies.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite), React Router DOM
- **Styling & Animations:** Tailwind CSS, Framer Motion, Lucide-React
- **3D Engine:** Three.js, React Three Fiber, Drei
- **AI Integration:** Groq API (Llama-3.3-70b-versatile)
- **Speech Engine:** `react-speech-recognition` & Web Speech API
- **SEO Management:** React Helmet Async

---

## 🚀 Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/rsingad/shree-dev-travels.git
cd shree-dev-travels
\`\`\`

### 2. Install Dependencies
Important: Since this project uses React 19, use the legacy peer deps flag.
\`\`\`bash
npm install --legacy-peer-deps
\`\`\`

### 3. Setup Environment Variables
Create a \`.env\` file in the root directory and add your Groq API Key:
\`\`\`env
VITE_GROQ_API_KEY=gsk_your_secret_key_here
\`\`\`

### 4. Add 3D Asset
Ensure your \`/public/cars.glb\` is correctly placed to power the React Three Fiber canvas.

### 5. Run the Project
\`\`\`bash
npm run dev
\`\`\`

---

## 📂 Project Structure

\`\`\`text
src/
├── components/
│   ├── Chatbot.jsx       # The AI Brain (Voice + Logic + Report Gen)
│   ├── FutureHome.jsx    # Complete Homepage with Testimonials & Fleet
│   ├── TopRoutes.jsx     # SEO ItemList Schema injected routes
│   ├── Packages.jsx      # Complex Tour Itineraries UI
│   ├── Services.jsx      # Physics-based Premium Fleet Catalog
│   ├── FAQ.jsx           # Expandable FAQPage with Schema
│   ├── About.jsx         # E-E-A-T Trust Building & Founding Partners
│   ├── Privacy.jsx       # Ad-Compliant Privacy Policy
│   ├── Terms.jsx         # Booking & Cancellation Terms
│   ├── Contact.jsx       # Contact Form & Maps
│   ├── Footer.jsx        # Smart Internal Linking
│   ├── Navbar.jsx        # Floating Glass Navbar with Mobile CTA
│   └── Preloader.jsx     # Sci-Fi Loading Screen
├── data/
│   └── packagesData.js   # 15+ Localized Rajasthan Tour Data
├── App.jsx               # Main React Router & Helmet Meta Tags
├── main.jsx              # Entry Point
\`\`\`

---

## 🛡️ Security Note
The API Key is secured using Environment Variables. Ensure \`.env\` is added to your \`.gitignore\` file to prevent leaking secrets on GitHub.

## 📞 Contact & Support
**Shree Dev Tour and Travel** 📍 Jodhpur, Rajasthan

- **Owners & Managing Partners:** Raju Gurjar, Dev Gurjar, Deva Gurjar
- **Contact:** +91 88904-72581

*Made with ❤️ by Ramesh Singad*