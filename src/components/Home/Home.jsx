import React from "react";
import Type from "./Type";
import homeLogo from "../../Assets/home-main.svg";
import Home2 from "./Home2";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center pt-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-medium text-primary">
                Hi there! <span className="animate-bounce inline-block">👋🏻</span>
              </h2>
              <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                I'm <span className="text-gradient">Duta Alif</span>
                <br />
                Gunawan
              </h1>
            </div>

            <div className="h-20 text-2xl md:text-4xl font-bold text-slate-400">
              <Type />
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all active:scale-95">
                View My Works
              </button>
              <button className="px-8 py-3 glass-panel text-white rounded-full font-bold hover:bg-white/5 transition-all active:scale-95">
                Contact Me
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={homeLogo}
                alt="hero"
                className="relative w-full max-w-md drop-shadow-2xl animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
