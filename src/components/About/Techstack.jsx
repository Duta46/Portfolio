import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import { FaAws, FaDocker } from "react-icons/fa";
import {
  SiLaravel,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiN8N,
  SiCodeigniter,
  SiNextdotjs,
  SiDocker,
} from "react-icons/si";
import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";

function Techstack() {
  const { language } = useLanguage();

  const content = {
    en: {
      backend: "Backend & Languages",
      frontend: "Frontend & Styling",
      database: "Infrastructure & DB",
    },
    id: {
      backend: "Backend & Bahasa",
      frontend: "Frontend & Desain",
      database: "Infrastruktur & DB",
    },
  };

  const t = content[language];

  const stacks = [
    {
      title: t.backend,
      icons: [
        { icon: <SiLaravel />, name: "Laravel" },
        { icon: <SiCodeigniter />, name: "CodeIgniter" },
        { icon: <DiJavascript1 />, name: "JavaScript" },
        { icon: <DiNodejs />, name: "Node.js" },
        { icon: <DiPython />, name: "Python" },
      ],
    },
    {
      title: t.frontend,
      icons: [
        { icon: <DiReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <SiBootstrap />, name: "Bootstrap" },
      ],
    },
    {
      title: t.database,
      icons: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiRedis />, name: "Redis" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiN8N />, name: "n8n" },
        { icon: <DiGit />, name: "Git" },
      ],
    },
  ];

  return (
    <div className="space-y-16">
      {stacks.map((group, idx) => (
        <div key={idx} className="space-y-6">
          <h3 className="text-xl font-bold text-slate-400 text-center md:text-left">
            {group.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {group.icons.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-panel p-6 flex flex-col items-center justify-center gap-3 group hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl text-slate-400 group-hover:text-primary transition-colors">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-slate-500 group-hover:text-white uppercase tracking-widest transition-colors">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
