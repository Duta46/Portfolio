import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  User, 
  Briefcase, 
  Mail, 
  Languages, 
  Menu, 
  X 
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

function NavBar() {
  const [navColour, updateNavbar] = useState(false);
  const [expand, updateExpanded] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  const content = {
    en: { home: "Home", about: "About", works: "Projects", contact: "Contact" },
    id: { home: "Beranda", about: "Tentang", works: "Proyek", contact: "Kontak" }
  };

  const t = content[language];

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 20) updateNavbar(true);
      else updateNavbar(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navLinks = [
    { to: "/", icon: <Home size={18} />, label: t.home },
    { to: "/about", icon: <User size={18} />, label: t.about },
    { to: "/project", icon: <Briefcase size={18} />, label: t.works },
    { to: "/contact", icon: <Mail size={18} />, label: t.contact }
  ];

  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-0`}>
      <div className={`max-w-4xl mx-auto glass-panel px-6 py-3 flex justify-between items-center transition-all duration-300 ${navColour ? "bg-surface/80 shadow-2xl scale-[1.02]" : "bg-surface/40"}`}>
        <Link to="/" className="text-xl font-black text-white tracking-tighter flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white text-xs group-hover:rotate-12 transition-transform">
            DA
          </div>
          <span className="hidden sm:inline">PORTFOLIO</span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((item) => (
            <Link 
              key={item.to} 
              to={item.to} 
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm ${
                location.pathname === item.to 
                ? "bg-primary text-white" 
                : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
          
          <div className="w-px h-6 bg-white/10 mx-2" />
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center space-x-2 text-slate-400 hover:text-secondary transition-all p-2 rounded-full hover:bg-white/5"
            title="Toggle Language"
          >
            <Languages size={18} />
            <span className="text-xs font-bold uppercase">{language}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => updateExpanded(!expand)}
        >
          {expand ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {expand && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 mx-4 glass-panel p-4 flex flex-col space-y-2 overflow-hidden"
          >
            {navLinks.map((item) => (
              <Link 
                key={item.to} 
                to={item.to} 
                onClick={() => updateExpanded(false)}
                className={`flex items-center space-x-3 p-3 rounded-xl transition-all ${
                  location.pathname === item.to 
                  ? "bg-primary/20 text-primary border border-primary/20" 
                  : "text-slate-400 hover:bg-white/5"
                }`}
              >
                {item.icon}
                <span className="font-semibold">{item.label}</span>
              </Link>
            ))}
            <button 
              onClick={() => {
                toggleLanguage();
                updateExpanded(false);
              }}
              className="flex items-center space-x-3 p-3 text-slate-400 hover:bg-white/5 rounded-xl transition-all"
            >
              <Languages size={18} />
              <span className="font-semibold uppercase">{language === 'en' ? 'Bahasa Indonesia' : 'English'}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavBar;
