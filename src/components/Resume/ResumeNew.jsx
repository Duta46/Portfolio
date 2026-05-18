import React, { useState, useEffect } from "react";
import pdf from "../../Assets/CV_New.pdf";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="py-24 px-6 max-w-5xl mx-auto space-y-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-8"
      >
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
          My <span className="text-gradient">Resume</span>
        </h1>
        
        <div className="flex justify-center">
          <a
            href={pdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-panel overflow-hidden"
      >
        <iframe
          src={pdf}
          width="100%"
          height="800px"
          title="CV"
          className="border-none bg-white/5"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center"
      >
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-secondary/20 text-secondary border border-secondary/30 rounded-2xl font-black uppercase tracking-widest hover:bg-secondary hover:text-white transition-all"
        >
          <Download size={20} />
          Download CV
        </a>
      </motion.div>
    </div>
  );
}

export default ResumeNew;