import React from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

function ExperienceCard(props) {
  return (
    <div className="glass-panel p-8 hover:bg-white/5 transition-all duration-300 group">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors">
            {props.title}
          </h3>
          <p className="text-lg font-bold text-slate-400 mt-1">
            {props.company}
          </p>
        </div>
        <div className="flex flex-col md:items-end text-sm font-semibold text-slate-500 gap-1">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-primary" />
            <span>{props.duration}</span>
          </div>
          {props.location && (
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-secondary" />
              <span>{props.location}</span>
            </div>
          )}
        </div>
      </div>

      <p className="text-slate-400 leading-relaxed text-justify mb-6">
        {props.description}
      </p>
      
      {props.certLink && (
        <a
          href={props.certLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all font-bold text-sm"
        >
          <ExternalLink size={16} />
          {props.btnText || "View Certificate"}
        </a>
      )}
    </div>
  );
}

export default ExperienceCard;
