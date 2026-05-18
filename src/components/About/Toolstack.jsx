import React from "react";
import {
  SiPostman,
  SiNpm,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaWindows } from "react-icons/fa";
import { motion } from "framer-motion";

function Toolstack() {
  const tools = [
    { icon: <FaWindows />, name: "Windows" },
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiNpm />, name: "NPM" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {tools.map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05, y: -5 }}
          className="glass-panel p-6 flex flex-col items-center justify-center gap-3 group hover:border-secondary/50 transition-colors"
        >
          <div className="text-4xl text-slate-400 group-hover:text-secondary transition-colors">
            {item.icon}
          </div>
          <span className="text-xs font-bold text-slate-500 group-hover:text-white uppercase tracking-widest transition-colors">
            {item.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default Toolstack;
