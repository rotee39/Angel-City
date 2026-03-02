import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DownloadSection from "./components/Download";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll to top when changing sections
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Hero onStart={() => setActiveSection("download")} />
            </motion.div>
          )}

          {activeSection === "download" && (
            <motion.div
              key="download"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <DownloadSection />
            </motion.div>
          )}

          {/* Placeholder for other sections */}
          {(activeSection === "topup" || activeSection === "shop" || activeSection === "login") && (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-screen flex items-center justify-center pt-20"
            >
              <div className="glass-card p-12 text-center max-w-md">
                <h2 className="text-3xl font-black text-cyan-500 mb-4 uppercase">Coming Soon</h2>
                <p className="text-gray-400 mb-8">ระบบกำลังอยู่ระหว่างการพัฒนาและจะเปิดให้บริการในเร็วๆ นี้</p>
                <button 
                  onClick={() => setActiveSection("home")}
                  className="btn-primary w-full justify-center"
                >
                  กลับหน้าแรก
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-black/80 border-t border-white/5 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase tracking-tighter">Angel City</h3>
              <p className="text-xs text-gray-500">© 2026 Angel City Community. All rights reserved.</p>
            </div>
          </div>

          <div className="flex gap-8">
            <a href="https://discord.gg/bUbhzwkx" target="_blank" className="text-gray-400 hover:text-white transition-colors">Discord</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
