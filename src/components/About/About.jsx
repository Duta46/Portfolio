import React from "react";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Experience from "../Experience/Experience";
import Certifications from "./Certifications";
import Publications from "./Publications";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-24">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase">
            Get to know <span className="text-gradient">Me</span>
          </h1>
          <div className="glass-panel p-8">
            <AboutCard />
          </div>{" "}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-1 md:order-2 flex justify-center"
        >
          <img
            src={laptopImg}
            alt="about"
            className="w-full max-w-md drop-shadow-2xl animate-float"
          />
        </motion.div>
      </div>

      {/* Skillsets */}
      <div className="space-y-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
              Professional <span className="text-gradient">Skillset</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          </div>
          <Techstack />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
              Essential <span className="text-gradient">Tools</span>
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          </div>
          <Toolstack />
        </motion.div>

        <Experience />
        <Publications />
        <Certifications />
        <Github />
      </div>
    </section>
  );
}

export default About;
