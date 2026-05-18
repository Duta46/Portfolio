import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myImg from "../../Assets/avatar.svg";
import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";

function Home2() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Let me introduce myself",
      body: (
        <>
          I am a passionate{" "}
          <span className="text-primary font-bold">Software Developer</span>{" "}
          with a strong focus on building scalable web applications and
          efficient backend systems.
          <br />
          <br />
          I've mastered languages like
          <span className="text-secondary font-bold">
            {" "}
            PHP (Laravel), JavaScript (React.js), and Python.
          </span>
          <br />
          <br />I specialize in the{" "}
          <span className="text-accent font-bold">Laravel Ecosystem</span>,
          building secure, robust, and high-performance applications for diverse
          clients.
        </>
      ),
      findMe: "Connect with me",
      connect:
        "Feel free to reach out for collaborations or just a friendly chat!",
    },
    id: {
      title: "Izinkan saya memperkenalkan diri",
      body: (
        <>
          Saya adalah seorang{" "}
          <span className="text-primary font-bold">Software Developer</span>{" "}
          yang berdedikasi dengan fokus pada pengembangan aplikasi web skalabel
          dan sistem backend efisien.
          <br />
          <br />
          Saya menguasai teknologi seperti
          <span className="text-secondary font-bold">
            {" "}
            PHP (Laravel), JavaScript (React.js), dan Python.
          </span>
          <br />
          <br />
          Saya berspesialisasi dalam{" "}
          <span className="text-accent font-bold">Ekosistem Laravel</span>,
          membangun aplikasi aman dan berperforma tinggi untuk berbagai klien.
        </>
      ),
      findMe: "Terhubung dengan saya",
      connect:
        "Jangan ragu untuk menghubungi saya untuk kolaborasi atau sekadar menyapa!",
    },
  };

  const t = content[language];

  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Main Intro Card */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-8 glass-panel p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8 uppercase tracking-tighter">
              {t.title}
            </h2>
            <div className="text-lg text-slate-400 leading-relaxed">
              {t.body}
            </div>
          </motion.div>

          {/* Avatar Card */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-4 glass-panel p-8 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-transparent"
          >
            <img
              src={myImg}
              alt="avatar"
              className="w-48 h-48 object-contain hover:scale-110 transition-transform duration-500"
            />
          </motion.div>

          {/* Social Card */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-12 glass-panel p-10 flex flex-col md:flex-row items-center justify-between gap-8 mt-4"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">{t.findMe}</h3>
              <p className="text-slate-400">{t.connect}</p>
            </div>

            <div className="flex gap-4">
              {[
                {
                  href: "https://github.com/Duta46",
                  icon: <AiFillGithub size={24} />,
                  label: "Github",
                },
                {
                  href: "https://www.linkedin.com/in/duta-gunawan/",
                  icon: <FaLinkedinIn size={24} />,
                  label: "LinkedIn",
                },
                {
                  href: "https://www.instagram.com/hello_duta/",
                  icon: <AiFillInstagram size={24} />,
                  label: "Instagram",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 flex items-center justify-center rounded-2xl glass-panel hover:bg-primary hover:text-white transition-all duration-300 text-slate-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
