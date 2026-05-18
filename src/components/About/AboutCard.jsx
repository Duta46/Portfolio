import React from "react";
import { CircleCheck } from "lucide-react";
import { useLanguage } from "../LanguageContext";

function AboutCard() {
  const { language } = useLanguage();

  const content = {
    en: {
      text: (
        <>
          Hi Everyone, I am <span className="text-primary font-bold">Duta Alif Gunawan</span> from <span className="text-secondary font-bold">Surabaya, Indonesia.</span>
          <br /><br />
          I am a Software Developer and a Computer Science student at <span className="text-accent font-bold">Surabaya State University</span>.
          <br /><br />
          Beyond my professional work, I am committed to continuous learning and exploring the intersection of technology and community impact.
        </>
      ),
      activities: [
        "Exploring New Technologies",
        "Contributing to Open Source",
        "Engaging in Creative Communities"
      ],
      quote: "Designing systems that simplify lives and drive innovation."
    },
    id: {
      text: (
        <>
          Halo semuanya, saya <span className="text-primary font-bold">Duta Alif Gunawan</span> dari <span className="text-secondary font-bold">Surabaya, Indonesia.</span>
          <br /><br />
          Saya adalah seorang Software Developer dan mahasiswa Teknik Informatika di <span className="text-accent font-bold">Universitas Negeri Surabaya</span>.
          <br /><br />
          Di luar pekerjaan profesional, saya berkomitmen untuk terus belajar dan mengeksplorasi potensi teknologi dalam memberikan dampak positif bagi masyarakat.
        </>
      ),
      activities: [
        "Eksplorasi Teknologi Baru",
        "Berkontribusi pada Open Source",
        "Terlibat dalam Komunitas Kreatif"
      ],
      quote: "Merancang sistem yang menyederhanakan kehidupan dan mendorong inovasi."
    }
  };

  const t = content[language];

  return (
    <div className="space-y-8">
      <div className="text-lg text-slate-300 leading-relaxed text-justify">
        {t.text}
      </div>

      <div className="space-y-3">
        {t.activities.map((activity, index) => (
          <div key={index} className="flex items-center gap-3 text-slate-400 group">
            <CircleCheck size={18} className="text-secondary group-hover:scale-125 transition-transform" />
            <span>{activity}</span>
          </div>
        ))}
      </div>

      <div className="relative p-6 bg-white/5 border-l-4 border-primary rounded-r-xl italic">
        <p className="text-xl text-white mb-2">"{t.quote}"</p>
        <cite className="text-slate-500 not-italic text-sm">— Duta Alif Gunawan</cite>
      </div>
    </div>
  );
}

export default AboutCard;
