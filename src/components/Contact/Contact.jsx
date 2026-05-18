import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";
import { Download, Send, Mail, MapPin, Phone } from "lucide-react";
import pdf from "../../Assets/CV_New.pdf";
import { motion } from "framer-motion";

function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const content = {
    en: {
      title: "Get In", titleColor: "Touch",
      desc: "I'm always open to new opportunities and collaborations.",
      labels: { name: "Full Name", email: "Email Address", subject: "Subject", message: "Your Message" },
      sendBtn: "Send Message", resumeBtn: "Download CV",
      infoTitle: "Contact Information",
      successMsg: "Message sent! I'll get back to you soon."
    },
    id: {
      title: "Hubungi", titleColor: "Saya",
      desc: "Saya selalu terbuka untuk peluang dan kolaborasi baru.",
      labels: { name: "Nama Lengkap", email: "Alamat Email", subject: "Subjek", message: "Pesan Anda" },
      sendBtn: "Kirim Pesan", resumeBtn: "Unduh CV",
      infoTitle: "Informasi Kontak",
      successMsg: "Pesan terkirim! Saya akan segera menghubungi Anda."
    }
  };

  const t = content[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t.successMsg);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-5 space-y-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
              {t.title} <span className="text-gradient">{t.titleColor}</span>
            </h1>
            <p className="text-slate-400 mt-4 text-lg">
              {t.desc}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">{t.infoTitle}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</p>
                  <p className="text-white font-medium">duta.alif@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 glass-panel flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Location</p>
                  <p className="text-white font-medium">Surabaya, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <a 
              href={pdf} 
              download="CV_Duta_Alif_Gunawan.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-105 transition-all"
            >
              <Download size={20} /> {t.resumeBtn}
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-7"
        >
          <div className="glass-panel p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">{t.labels.name}</label>
                  <input 
                    type="text" required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">{t.labels.email}</label>
                  <input 
                    type="email" required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">{t.labels.subject}</label>
                <input 
                  type="text" required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all"
                  placeholder="Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">{t.labels.message}</label>
                <textarea 
                  rows="5" required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all resize-none"
                  placeholder="Tell me more..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-black uppercase tracking-[0.2em] shadow-xl hover:shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
              >
                <Send size={20} /> {t.sendBtn}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
