import React from "react";
import { FaGithub, FaPlay } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function ProjectCard(props) {
  const isAndroid = props.category === "android";

  return (
    <div className="glass-panel h-full flex flex-col overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
      {/* Device Frame Container */}
      <div className="p-4 bg-black/20 flex items-center justify-center overflow-hidden">
        {isAndroid ? (
          /* Phone Frame */
          <div className="relative w-[200px] aspect-[9/19] bg-slate-900 rounded-[3rem] border-[6px] border-slate-800 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-800 rounded-b-2xl z-20" />
            <img
              src={props.imgPath}
              alt={props.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Glossy Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ) : (
          /* Laptop Frame */
          <div className="w-full max-w-[280px] group-hover:scale-105 transition-transform duration-500">
            {/* Screen */}
            <div className="relative aspect-video bg-slate-900 rounded-t-lg border-[4px] border-slate-800 overflow-hidden shadow-xl">
              <img
                src={props.imgPath}
                alt={props.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Keyboard Base */}
            <div className="h-2 bg-slate-700 rounded-b-lg relative mx-[-10px] shadow-lg">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-slate-600 rounded-full" />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-black text-white mb-3 group-hover:text-primary transition-colors">
          {props.title}
        </h3>
        
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {props.technologies && props.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-slate-400 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow text-justify line-clamp-4">
          {props.description}
        </p>

        <div className="flex gap-3 mt-auto">
          <a
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-all font-bold text-xs uppercase tracking-widest"
          >
            <FaGithub size={14} /> GitHub
          </a>
          {props.demoLink && (
            <a
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary/20 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all font-bold text-xs uppercase tracking-widest"
            >
              {isAndroid ? <FaPlay size={12} /> : <CgWebsite size={14} />}
              {isAndroid ? "Play Store" : "Live Demo"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
