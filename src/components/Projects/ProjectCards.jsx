import React from "react";
import { FaGithub, FaPlay } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function ProjectCard(props) {
  const isAndroid = props.category === "android";

  return (
    <div className="glass-panel h-full flex flex-col overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={props.imgPath}
          alt={props.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-black text-white mb-3 group-hover:text-primary transition-colors">
          {props.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow text-justify">
          {props.description}
        </p>

        <div className="flex gap-3">
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

