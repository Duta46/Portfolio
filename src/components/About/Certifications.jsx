import React from "react";
import ExperienceCard from "../Experience/ExperienceCard";
import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";

function Certifications() {
  const { language } = useLanguage();

  const content = {
    en: {
      heading: "Certifications &",
      subHeading: "Training",
      viewCert: "View Certificate",
      items: [
        {
          title: "Microsoft Training Graduation",
          company: "Microsoft x Kemenko PMK",
          duration: "2025",
          description: "Completed specialized technical training provided by Microsoft in collaboration with Kemenko PMK.",
          certLink: "https://drive.google.com/file/d/1g9oI2LjWznAE38_Zse20bIxqutqmUb7K/view"
        },
        {
          title: "Cloud & Generative AI Fundamentals",
          company: "AWS x Dicoding Indonesia",
          duration: "2024",
          description: "Learned the core concepts of AWS Cloud infrastructure and the fundamentals of Generative AI.",
          certLink: "https://drive.google.com/file/d/1haVaRqQb-F4t8ufBOZUzzNX3F6xAEJ4n/view"
        },
        {
          title: "Assistant Mentor",
          company: "Ruang Guru",
          duration: "2024",
          description: "Served as an Assistant Mentor at Ruang Guru, contributing to student guidance and educational development.",
          certLink: "https://drive.google.com/file/d/1ZbOTNTpwjIAmx21-5zaPq-uM2nW2j6qo/view"
        }
      ]
    },
    id: {
      heading: "Sertifikasi &",
      subHeading: "Pelatihan",
      viewCert: "Lihat Sertifikat",
      items: [
        {
          title: "Kelulusan Pelatihan Microsoft",
          company: "Microsoft x Kemenko PMK",
          duration: "2025",
          description: "Menyelesaikan pelatihan teknis khusus yang diselenggarakan oleh Microsoft berkolaborasi dengan Kemenko PMK.",
          certLink: "https://drive.google.com/file/d/1g9oI2LjWznAE38_Zse20bIxqutqmUb7K/view"
        },
        {
          title: "Dasar Cloud & Generative AI",
          company: "AWS x Dicoding Indonesia",
          duration: "2024",
          description: "Mempelajari konsep inti infrastruktur AWS Cloud dan dasar-dasar Generative AI.",
          certLink: "https://drive.google.com/file/d/1haVaRqQb-F4t8ufBOZUzzNX3F6xAEJ4n/view"
        },
        {
          title: "Asisten Mentor",
          company: "Ruang Guru",
          duration: "2024",
          description: "Bertugas sebagai Asisten Mentor di Ruang Guru, berkontribusi dalam bimbingan siswa dan pengembangan pendidikan.",
          certLink: "https://drive.google.com/file/d/1ZbOTNTpwjIAmx21-5zaPq-uM2nW2j6qo/view"
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
        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
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

export default Certifications;
