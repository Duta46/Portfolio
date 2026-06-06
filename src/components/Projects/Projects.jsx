import React, { useState } from "react";
import ProjectCard from "./ProjectCards";
import simkvi from "../../Assets/Projects/SIMKVI.jpeg";
import ijts from "../../Assets/Projects/IJTS.png";
import KITAPTN from "../../Assets/Projects/KITAPTN.png";
import Japanify from "../../Assets/Projects/Japanify.png";
import muvii from "../../Assets/Projects/Muvii.png";
import elearning from "../../Assets/Projects/E-learning.png";
import AnimalCare from "../../Assets/Projects/AnimalCare.png";
import kelontong from "../../Assets/Projects/Kelontong.png";
import sapaAi from "../../Assets/Projects/SAPA AI.jpeg";
import tcpc from "../../Assets/Projects/TCPC.jpeg";
import ams from "../../Assets/Projects/AMS.png";
import amsDashboard from "../../Assets/Projects/Asset Management System/Dashboard.png";
import amsAsetBMN from "../../Assets/Projects/Asset Management System/Aset BMN.png";
import amsPeminjaman from "../../Assets/Projects/Asset Management System/Peminjaman.png";
import libBarcode from "../../Assets/Projects/Perpustakaan Barcode System.jpeg";
import parkirBarcode from "../../Assets/Projects/Parkir Barcode System.jpeg";
import alpukatPintar from "../../Assets/Projects/Aplikasi Alpukat Pintar.jpeg";
import dompetDigital from "../../Assets/Projects/Aplikasi Dompet Digital.jpeg";
import quranApp from "../../Assets/Projects/Aplikasi Quran.jpeg";

import { useLanguage } from "../LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export const projectContent = {
  en: {
    heading: "My Recent",
    subHeading: "Works",
    description: "A showcase of my projects across various technologies.",
    categories: {
      all: "All",
      web: "Web App",
      android: "Android App",
    },
    items: [
      {
        id: "parking-barcode",
        imgPath: parkirBarcode,
        title: "Parking Barcode System",
        description:
          "Automated parking management system utilizing barcode technology for efficient entry/exit tracking and secure vehicle management. Optimizes space utilization and provides real-time parking data.",
        ghLink: "https://github.com/Duta46",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      },
      {
        id: "library-barcode",
        imgPath: libBarcode,
        title: "Library Barcode System",
        description:
          "A digital library management system featuring barcode scanning for seamless book borrowing and inventory tracking. Streamlines administrative tasks and improves user experience for library members.",
        demoLink: "https://perpustakaansekolahfransiskuslawang.my.id/",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      },
      {
        id: "ams",
        imgPath: ams,
        title: "AMS (Asset Management)",
        description:
          "Comprehensive Asset Management System developed for Kemenko PMK. It integrates State Asset Management and Rental modules, streamlining the tracking and utilization of governmental resources.",
        ghLink: "https://github.com/Duta46",
        demoLink: "https://ams-kemenkopmk.id/",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        gallery: [amsDashboard, amsAsetBMN, amsPeminjaman],
      },
      {
        id: "tcpc",
        imgPath: tcpc,
        title: "TCPC",
        description:
          "Enterprise web application for a Japanese company. Focused on system optimization, data management, and providing a reliable digital infrastructure for international business operations.",
        ghLink: "https://github.com/Duta46",
        demoLink: "https://www.tcpc.co.jp/",
        category: "web",
        technologies: ["PHP", "MySQL", "AWS", "Bootstrap"],
      },
      {
        id: "sapa-ai",
        imgPath: sapaAi,
        title: "SAPA AI",
        description:
          "AI-powered application developed for Kemenko PMK. Features automated financial reporting and intelligent data analysis to streamline governmental workflows.",
        ghLink: "https://github.com/Duta46",
        demoLink: "https://sapa-ai.id/",
        category: "web",
        technologies: ["Next.js", "Supabase", "n8n"],
      },
      {
        id: "alpukat-pintar",
        imgPath: alpukatPintar,
        title: "Alpukat Pintar",
        description:
          "A Flutter-based mobile application integrated with TensorFlow Deep Learning to analyze avocado ripeness levels (raw, ripe, overripe) using computer vision.",
        ghLink: "https://github.com/Duta46",
        category: "android",
        technologies: ["Flutter", "TensorFlow", "Dart", "Python"],
      },
      {
        id: "digital-wallet-ai",
        imgPath: dompetDigital,
        title: "Digital Wallet with AI",
        description:
          "A modern digital wallet application featuring an AI-powered chatbot that helps users analyze their finances and manage expenses intelligently.",
        ghLink: "https://github.com/Duta46",
        category: "android",
        technologies: ["Flutter", "Dart", "OpenAI"],
      },
      {
        id: "quran-app",
        imgPath: quranApp,
        title: "Quran Application",
        description:
          "A mobile Quran application designed for easy reading and accessibility, providing a seamless spiritual experience on Android devices.",
        ghLink: "https://github.com/Duta46",
        category: "android",
        technologies: ["Flutter", "Dart"],
      },
      {
        id: "simkvi",
        imgPath: simkvi,
        title: "SIMKVI",
        description:
          "Integrated Monitoring System for faculty program heads at Unesa. Developed with CodeIgniter 4, streamlining academic performance tracking.",
        ghLink: "https://github.com/Duta46/SIMKVI",
        demoLink: "https://simkvi.mi.unesa.ac.id/login",
        category: "web",
        technologies: ["CodeIgniter 4", "PHP", "MySQL"],
      },
      {
        id: "ijts",
        imgPath: ijts,
        title: "IJTS",
        description:
          "JFT Examination Practice Platform. Built with a robust Laravel backend for timed assessments.",
        ghLink: "https://github.com/Duta46/soal-sji",
        demoLink: "https://ijts.pt-sjigroup.com/",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL"],
      },
      {
        id: "kitaptn",
        imgPath: KITAPTN,
        title: "KITAPTN",
        description:
          "UTBK Preparation Platform. Implemented the Fisher-Yates Shuffle algorithm for question randomization.",
        ghLink: "https://github.com/andarass/UTBK",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
      },
      {
        id: "japanify",
        imgPath: Japanify,
        title: "Japanify",
        description:
          "JLPT Simulation Web Application. Features include automated scoring and detailed result analysis.",
        ghLink: "https://github.com/Duta46/Japanify",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL"],
      },
      {
        id: "muvii",
        imgPath: muvii,
        title: "Muvii",
        description:
          "Premium Video Streaming Platform with Midtrans Payment integration.",
        ghLink: "https://github.com/Duta46/stream",
        category: "web",
        technologies: ["Laravel", "PHP", "Midtrans", "MySQL"],
      },
      {
        id: "elearning",
        imgPath: elearning,
        title: "E-learning",
        description:
          "Web-based learning application with quiz modules and student management.",
        ghLink: "https://github.com/Duta46/E-learning",
        demoLink: "https://e-learning-duta46.vercel.app/",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL"],
      },
      {
        id: "animal-care",
        imgPath: AnimalCare,
        title: "Animal Care",
        description:
          "Specialized pet care service interface focusing on high-quality UX/UI design.",
        ghLink: "https://github.com/Duta46/AnimalCare.git",
        category: "web",
        technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      },
      {
        id: "kelontong",
        imgPath: kelontong,
        title: "Kelontong",
        description:
          "Responsive E-commerce platform focusing on intuitive product navigation.",
        ghLink: "https://github.com/Duta46/e-commerce_duta",
        category: "web",
        technologies: ["React.js", "Tailwind CSS"],
      },
    ],
  },
  id: {
    heading: "Karya",
    subHeading: "Terbaru",
    description:
      "Kumpulan proyek yang telah saya kerjakan dengan berbagai teknologi.",
    categories: {
      all: "Semua",
      web: "Web App",
      android: "Android App",
    },
    items: [
      {
        id: "parking-barcode",
        imgPath: parkirBarcode,
        title: "Sistem Barcode Parkir",
        description:
          "Sistem manajemen parkir otomatis yang memanfaatkan teknologi barcode untuk pelacakan masuk/keluar yang efisien dan pengelolaan kendaraan yang aman. Mengoptimalkan penggunaan lahan dan menyediakan data parkir real-time.",
        ghLink: "https://github.com/Duta46",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      },
      {
        id: "library-barcode",
        imgPath: libBarcode,
        title: "Sistem Barcode Perpustakaan",
        description:
          "Sistem manajemen perpustakaan digital dengan fitur pemindaian barcode untuk peminjaman buku dan pelacakan inventaris yang mulus. Mempercepat tugas administratif dan meningkatkan pengalaman anggota perpustakaan.",
        demoLink: "https://perpustakaansekolahfransiskuslawang.my.id/",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      },
      {
        id: "ams",
        imgPath: ams,
        title: "AMS (Manajemen Aset)",
        description:
          "Sistem Manajemen Aset komprehensif yang dikembangkan untuk Kemenko PMK. Mengintegrasikan modul Manajemen Aset Negara dan modul Sewa, mempermudah pelacakan dan pemanfaatan sumber daya kementerian.",
        ghLink: "https://github.com/Duta46",
        demoLink: "https://ams-kemenkopmk.id/",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        gallery: [amsDashboard, amsAsetBMN, amsPeminjaman],
      },
      {
        id: "tcpc",
        imgPath: tcpc,
        title: "TCPC",
        description:
          "Aplikasi web enterprise untuk perusahaan Jepang. Berfokus pada optimalisasi sistem, manajemen data, dan penyediaan infrastruktur digital yang andal untuk operasional bisnis internasional.",
        ghLink: "https://github.com/Duta46",
        demoLink: "https://www.tcpc.co.jp/",
        category: "web",
        technologies: ["PHP", "MySQL", "AWS", "Bootstrap"],
      },
      {
        id: "sapa-ai",
        imgPath: sapaAi,
        title: "SAPA AI",
        description:
          "Aplikasi berbasis AI yang dikembangkan untuk Kemenko PMK. Memiliki fitur pelaporan keuangan otomatis dan analisis data cerdas untuk mempermudah alur kerja kementerian.",
        ghLink: "https://github.com/Duta46",
        demoLink: "https://sapa-ai.id/",
        category: "web",
        technologies: ["Next.js", "Supabase", "n8n"],
      },
      {
        id: "alpukat-pintar",
        imgPath: alpukatPintar,
        title: "Alpukat Pintar",
        description:
          "Aplikasi mobile berbasis Flutter yang terintegrasi dengan TensorFlow Deep Learning untuk menganalisa tingkat kematangan buah alpukat (mentah, matang, kematangan) menggunakan computer vision.",
        ghLink: "https://github.com/Duta46",
        category: "android",
        technologies: ["Flutter", "TensorFlow", "Dart", "Python"],
      },
      {
        id: "digital-wallet-ai",
        imgPath: dompetDigital,
        title: "Dompet Digital AI",
        description:
          "Aplikasi dompet digital modern yang dilengkapi dengan chatbot AI untuk membantu pengguna menganalisa keuangan dan mengelola pengeluaran secara cerdas.",
        ghLink: "https://github.com/Duta46",
        category: "android",
        technologies: ["Flutter", "Dart", "OpenAI"],
      },
      {
        id: "quran-app",
        imgPath: quranApp,
        title: "Aplikasi Quran",
        description:
          "Aplikasi Quran mobile yang dirancang untuk kemudahan membaca dan aksesibilitas, memberikan pengalaman spiritual yang mulus pada perangkat Android.",
        ghLink: "https://github.com/Duta46",
        category: "android",
        technologies: ["Flutter", "Dart"],
      },
      {
        id: "simkvi",
        imgPath: simkvi,
        title: "SIMKVI",
        description:
          "Sistem Monitoring Terintegrasi untuk kepala program studi di Unesa. Dikembangkan dengan CodeIgniter 4.",
        ghLink: "https://github.com/Duta46/SIMKVI",
        demoLink: "https://simkvi.mi.unesa.ac.id/login",
        category: "web",
        technologies: ["CodeIgniter 4", "PHP", "MySQL"],
      },
      {
        id: "ijts",
        imgPath: ijts,
        title: "IJTS",
        description:
          "Platform Latihan Ujian JFT. Dibangun dengan backend Laravel yang kokoh untuk simulasi ujian berwaktu.",
        ghLink: "https://github.com/Duta46/soal-sji",
        demoLink: "https://ijts.pt-sjigroup.com/",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL"],
      },
      {
        id: "kitaptn",
        imgPath: KITAPTN,
        title: "KITAPTN",
        description:
          "Platform Persiapan UTBK. Mengimplementasikan algoritma Fisher-Yates Shuffle untuk pengacakan soal.",
        ghLink: "https://github.com/andarass/UTBK",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
      },
      {
        id: "japanify",
        imgPath: Japanify,
        title: "Japanify",
        description:
          "Aplikasi Web Simulasi JLPT. Fitur mencakup penilaian otomatis dan analisis hasil detail.",
        ghLink: "https://github.com/Duta46/Japanify",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL"],
      },
      {
        id: "muvii",
        imgPath: muvii,
        title: "Muvii",
        description:
          "Platform Streaming Video Premium dengan integrasi Payment Gateway Midtrans.",
        ghLink: "https://github.com/Duta46/stream",
        category: "web",
        technologies: ["Laravel", "PHP", "Midtrans", "MySQL"],
      },
      {
        id: "elearning",
        imgPath: elearning,
        title: "E-learning",
        description:
          "Aplikasi pembelajaran berbasis web mencakup modul kuis dan manajemen siswa.",
        ghLink: "https://github.com/Duta46/E-learning",
        demoLink: "https://e-learning-duta46.vercel.app/",
        category: "web",
        technologies: ["Laravel", "PHP", "MySQL"],
      },
      {
        id: "animal-care",
        imgPath: AnimalCare,
        title: "Animal Care",
        description:
          "Antarmuka layanan perawatan hewan peliharaan berfokus pada desain UX/UI.",
        ghLink: "https://github.com/Duta46/AnimalCare.git",
        category: "web",
        technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      },
      {
        id: "kelontong",
        imgPath: kelontong,
        title: "Kelontong",
        description:
          "Platform E-commerce responsif berfokus pada navigasi produk yang intuitif.",
        ghLink: "https://github.com/Duta46/e-commerce_duta",
        category: "web",
        technologies: ["React.js", "Tailwind CSS"],
      },
    ],
  },
};

function Projects() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState("all");

  const t = projectContent[language];

  const filteredItems = t.items.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
          {t.heading} <span className="text-gradient">{t.subHeading}</span>
        </h1>
        <p className="text-slate-400 mt-4 text-lg">{t.description}</p>
        <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4">
        {Object.entries(t.categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
              filter === key
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "glass-panel text-slate-400 hover:text-white"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
