import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectContent } from "./Projects";
import { useLanguage } from "../LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaPlay, FaArrowLeft, FaTimes } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [selectedImg, setSelectedImg] = useState(null);
  
  const t = projectContent[language];
  const project = t.items.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          {language === "en" ? "Project Not Found" : "Proyek Tidak Ditemukan"}
        </h2>
        <button
          onClick={() => navigate("/project")}
          className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-white font-bold transition-all hover:scale-105"
        >
          <FaArrowLeft /> {language === "en" ? "Back to Projects" : "Kembali ke Proyek"}
        </button>
      </div>
    );
  }

  const isAndroid = project.category === "android";

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-32 px-6 max-w-5xl mx-auto min-h-screen"
    >
      <button
        onClick={() => navigate("/project")}
        className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-12 group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-bold uppercase tracking-widest text-sm">
          {language === "en" ? "Back to Projects" : "Kembali ke Proyek"}
        </span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Project Image/Frame */}
        <div className="glass-panel p-8 flex items-center justify-center overflow-hidden">
          {isAndroid ? (
            <div className="relative w-full max-w-[280px] aspect-[9/19] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />
              <img
                src={project.imgPath}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-full">
              <div className="relative aspect-video bg-slate-900 rounded-t-xl border-[6px] border-slate-800 overflow-hidden shadow-2xl">
                <img
                  src={project.imgPath}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-3 bg-slate-700 rounded-b-xl relative mx-[-12px] shadow-lg">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-slate-600 rounded-full" />
              </div>
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              {project.title}
            </h1>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-6" />
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 text-xs font-bold uppercase tracking-widest bg-white/5 border border-white/10 text-slate-300 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-widest">
              {language === "en" ? "About Project" : "Tentang Proyek"}
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed text-justify">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <a
              href={project.ghLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-all font-bold uppercase tracking-widest text-sm"
            >
              <FaGithub size={20} /> GitHub
            </a>
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-primary/20 border border-primary/30 text-primary hover:bg-primary hover:text-white transition-all font-bold uppercase tracking-widest text-sm shadow-lg shadow-primary/10"
              >
                {isAndroid ? <FaPlay size={16} /> : <CgWebsite size={20} />}
                {isAndroid ? "Play Store" : "Live Demo"}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="mt-20 space-y-8">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-bold text-white uppercase tracking-widest">
              {language === "en" ? "Project Gallery" : "Galeri Proyek"}
            </h3>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImg(img)}
                className="glass-panel p-4 overflow-hidden group cursor-pointer"
              >
                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/20">
                      {language === "en" ? "View Image" : "Lihat Gambar"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl w-full h-full flex items-center justify-center"
            >
              <img
                src={selectedImg}
                alt="Project Screenshot Full"
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImg(null);
                }}
                className="absolute top-0 right-0 md:-top-12 md:-right-12 p-3 text-white/50 hover:text-white transition-colors"
              >
                <FaTimes size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default ProjectDetail;
