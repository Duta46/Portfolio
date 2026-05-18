import React from "react";
import GitHubCalendar from "react-github-calendar";
import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";

function Github() {
  const { language } = useLanguage();
  
  // Handle potential ESM/CJS interop issues with default export
  const GitHubCalendarComp = GitHubCalendar.default || GitHubCalendar;
  
  const title = {
    en: { first: "Days I", last: "Code" },
    id: { first: "Hari-hari Saya", last: "Coding" }
  };

  const t = title[language];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
          {t.first} <span className="text-gradient">{t.last}</span>
        </h2>
        <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full" />
      </div>

      <div className="glass-panel p-8 flex flex-col items-center gap-12">
        <div className="w-full overflow-x-auto flex justify-center py-4">
          {typeof GitHubCalendarComp === 'function' ? (
            <GitHubCalendarComp
              username="Duta46"
              blockSize={12}
              blockMargin={4}
              color="#8b5cf6"
              fontSize={14}
              theme={{
                level0: '#1e293b',
                level1: '#4c1d95',
                level2: '#6d28d9',
                level3: '#7c3aed',
                level4: '#8b5cf6',
              }}
            />
          ) : (
            <p className="text-slate-500">Calendar failed to load</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex justify-center"
          >
            <img
              src="https://github-readme-stats-tau-beige.vercel.app/api?username=Duta46&show_icons=true&theme=dracula&title_color=8b5cf6&icon_color=8b5cf6&text_color=cbd5e1&bg_color=0f172a&hide_border=true"
              alt="GitHub Stats"
              className="w-full max-w-[450px] rounded-xl shadow-2xl shadow-black/50"
            />
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="flex justify-center"
          >
            <img
              src="https://github-readme-stats-tau-beige.vercel.app/api/top-langs?username=Duta46&layout=compact&theme=dracula&title_color=38bdf8&icon_color=38bdf8&text_color=cbd5e1&bg_color=0f172a&hide_border=true"
              alt="Top Languages"
              className="w-full max-w-[400px] rounded-xl shadow-2xl shadow-black/50"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Github;
