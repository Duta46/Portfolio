import React from "react";
import ProjectCard from "./ProjectCards";
import simkvi from "../../Assets/Projects/proyek_1.png";
import ijts from "../../Assets/Projects/IJTS.png";
import KITAPTN from "../../Assets/Projects/KITAPTN.png";
import Japanify from "../../Assets/Projects/Japanify.png";
import muvii from "../../Assets/Projects/Muvii.png";
import elearning from "../../Assets/Projects/E-learning.png";
import AnimalCare from "../../Assets/Projects/AnimalCare.png";
import kelontong from "../../Assets/Projects/Kelontong.png";
import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";

function Projects() {
  const { language } = useLanguage();

  const content = {
    en: {
      heading: "My Recent",
      subHeading: "Works",
      description: "A showcase of my projects across various technologies.",
      items: [
        { imgPath: simkvi, title: "SIMKVI", description: "Integrated Monitoring System for faculty program heads at Unesa. Developed with Laravel, streamlining academic performance tracking.", ghLink: "https://github.com/Duta46/SIMKVI", demoLink: "https://simkvi.mi.unesa.ac.id/login" },
        { imgPath: ijts, title: "IJTS", description: "JFT Examination Practice Platform. Built with a robust Laravel backend for timed assessments.", ghLink: "https://github.com/Duta46/soal-sji", demoLink: "https://ijts.pt-sjigroup.com/" },
        { imgPath: KITAPTN, title: "KITAPTN", description: "UTBK Preparation Platform. Implemented the Fisher-Yates Shuffle algorithm for question randomization.", ghLink: "https://github.com/andarass/UTBK" },
        { imgPath: Japanify, title: "Japanify", description: "JLPT Simulation Web Application. Features include automated scoring and detailed result analysis.", ghLink: "https://github.com/Duta46/Japanify" },
        { imgPath: muvii, title: "Muvii", description: "Premium Video Streaming Platform with Midtrans Payment integration.", ghLink: "https://github.com/Duta46/stream" },
        { imgPath: elearning, title: "E-learning", description: "Web-based learning application with quiz modules and student management.", ghLink: "https://github.com/Duta46/E-learning", demoLink: "https://e-learning-duta46.vercel.app/" },
        { imgPath: AnimalCare, title: "Animal Care", description: "Specialized pet care service interface focusing on high-quality UX/UI design.", ghLink: "https://github.com/Duta46/AnimalCare.git" },
        { imgPath: kelontong, title: "Kelontong", description: "Responsive E-commerce platform focusing on intuitive product navigation.", ghLink: "https://github.com/Duta46/e-commerce_duta" }
      ]
    },
    id: {
      heading: "Karya",
      subHeading: "Terbaru",
      description: "Kumpulan proyek yang telah saya kerjakan dengan berbagai teknologi.",
      items: [
        { imgPath: simkvi, title: "SIMKVI", description: "Sistem Monitoring Terintegrasi untuk kepala program studi di Unesa. Dikembangkan dengan Laravel.", ghLink: "https://github.com/Duta46/SIMKVI", demoLink: "https://simkvi.mi.unesa.ac.id/login" },
        { imgPath: ijts, title: "IJTS", description: "Platform Latihan Ujian JFT. Dibangun dengan backend Laravel yang kokoh untuk simulasi ujian berwaktu.", ghLink: "https://github.com/Duta46/soal-sji", demoLink: "https://ijts.pt-sjigroup.com/" },
        { imgPath: KITAPTN, title: "KITAPTN", description: "Platform Persiapan UTBK. Mengimplementasikan algoritma Fisher-Yates Shuffle untuk pengacakan soal.", ghLink: "https://github.com/andarass/UTBK" },
        { imgPath: Japanify, title: "Japanify", description: "Aplikasi Web Simulasi JLPT. Fitur mencakup penilaian otomatis dan analisis hasil detail.", ghLink: "https://github.com/Duta46/Japanify" },
        { imgPath: muvii, title: "Muvii", description: "Platform Streaming Video Premium dengan integrasi Payment Gateway Midtrans.", ghLink: "https://github.com/Duta46/stream" },
        { imgPath: elearning, title: "E-learning", description: "Aplikasi pembelajaran berbasis web mencakup modul kuis dan manajemen siswa.", ghLink: "https://github.com/Duta46/E-learning", demoLink: "https://e-learning-duta46.vercel.app/" },
        { imgPath: AnimalCare, title: "Animal Care", description: "Antarmuka layanan perawatan hewan peliharaan berfokus pada desain UX/UI.", ghLink: "https://github.com/Duta46/AnimalCare.git" },
        { imgPath: kelontong, title: "Kelontong", description: "Platform E-commerce responsif berfokus pada navigasi produk yang intuitif.", ghLink: "https://github.com/Duta46/e-commerce_duta" }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
          {t.heading} <span className="text-gradient">{t.subHeading}</span>
        </h1>
        <p className="text-slate-400 mt-4 text-lg">{t.description}</p>
        <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.items.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
