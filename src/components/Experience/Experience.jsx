import React from "react";
import ExperienceCard from "./ExperienceCard";
import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";

function Experience() {
  const { language } = useLanguage();

  const content = {
    en: {
      heading: "Professional",
      subHeading: "Experience",
      description: "My professional journey and key contributions.",
      viewCert: "View Certificate",
      items: [
        {
          title: "PJP Software Developer",
          company: "Kemenko PMK",
          duration: "Sep 2025 - Dec 2025",
          location: "Jakarta, Indonesia",
          description: "Developed an Integrated Asset Management System and an AI-powered financial application. Instrumental in automating complex data workflows and optimizing internal reporting, which contributed to the team securing 2nd Place in the National Innovation Award.",
          certLink: "https://drive.google.com/file/d/1Eis7aTPcdMngMH5M6fp4One33vEAOvoI/view"
        },
        {
          title: "Software Developer",
          company: "Maxart",
          duration: "Aug 2024 - Aug 2025",
          location: "Remote",
          description: "Maintained and optimized high-traffic Japanese enterprise web applications. Developed the Maxart Audit system and resolved critical production issues through advanced AWS database debugging, ensuring high system reliability and performance for international clients.",
        },
        {
          title: "Internship - Web Developer",
          company: "PT Sahabat Jepang Indonesia",
          duration: "Aug 2023 - Dec 2023",
          location: "Sidoarjo, Indonesia",
          description: "Designed and implemented a web-based learning management system (LMS). Features included an automated exam evaluation engine, timed assessment modules, and a comprehensive admin dashboard for curriculum management.",
        },
        {
          title: "Founder",
          company: "Warkod",
          duration: "2022 - Present",
          location: "Remote",
          description: "Leading the end-to-end development of custom digital solutions. Successfully launched KITAPTN (UTBK practice platform), QR-based library systems, and Laravel-powered payment integrations, focusing on digital transformation for educational institutions.",
        }
      ]
    },
    id: {
      heading: "Pengalaman",
      subHeading: "Profesional",
      description: "Perjalanan profesional dan kontribusi utama saya.",
      viewCert: "Lihat Sertifikat",
      items: [
        {
          title: "PJP Software Developer",
          company: "Kemenko PMK",
          duration: "Sep 2025 - Des 2025",
          location: "Jakarta, Indonesia",
          description: "Mengembangkan Sistem Manajemen Aset Terintegrasi dan aplikasi keuangan berbasis AI. Berperan penting dalam otomatisasi alur kerja data yang kompleks dan optimalisasi pelaporan internal, yang berkontribusi pada tim meraih Juara 2 dalam National Innovation Award.",
          certLink: "https://drive.google.com/file/d/1Eis7aTPcdMngMH5M6fp4One33vEAOvoI/view"
        },
        {
          title: "Software Developer",
          company: "Maxart",
          duration: "Agu 2024 - Agu 2025",
          location: "Remote",
          description: "Memelihara dan mengoptimalkan aplikasi web enterprise Jepang dengan trafik tinggi. Mengembangkan sistem Maxart Audit dan menyelesaikan masalah produksi kritis melalui debugging database AWS tingkat lanjut, memastikan keandalan dan performa sistem yang tinggi untuk klien internasional.",
        },
        {
          title: "Magang - Web Developer",
          company: "PT Sahabat Jepang Indonesia",
          duration: "Agu 2023 - Des 2023",
          location: "Sidoarjo, Indonesia",
          description: "Merancang dan mengimplementasikan sistem manajemen pembelajaran (LMS) berbasis web. Fitur-fiturnya mencakup mesin evaluasi ujian otomatis, modul penilaian berwaktu, dan dashboard admin yang komprehensif untuk manajemen kurikulum.",
        },
        {
          title: "Founder",
          company: "Warkod",
          duration: "2022 - Sekarang",
          location: "Remote",
          description: "Memimpin pengembangan solusi digital kustom dari awal hingga akhir. Berhasil meluncurkan KITAPTN (platform latihan UTBK), sistem perpustakaan berbasis QR, dan integrasi pembayaran berbasis Laravel, dengan fokus pada transformasi digital untuk institusi pendidikan.",
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
          {t.heading} <span className="text-gradient">{t.subHeading}</span>
        </h2>
        <p className="text-slate-400 mt-2">{t.description}</p>
        <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </div>

      <div className="space-y-6">
        {t.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ExperienceCard
              {...item}
              btnText={t.viewCert}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
