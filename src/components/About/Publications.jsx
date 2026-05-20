import React from "react";
import { useLanguage } from "../LanguageContext";
import { motion } from "framer-motion";
import { Book, ExternalLink } from "lucide-react";

function Publications() {
  const { language } = useLanguage();

  const content = {
    en: {
      heading: "Books &",
      subHeading: "Publications",
      books: [
        {
          title: "User Interface Desain",
          publisher: "National Library of Indonesia (Perpusnas)",
          description: "A comprehensive guide to user interface design principles and best practices, officially registered and published in the national database.",
          link: "https://opac.perpusnas.go.id/ResultListOpac.aspx?pDataItem=Duta%20Alif%20Gunawan,%20I.G.P.%20(penulis)&pType=Author&pLembarkerja=-1&pPilihan=Author",
          linkText: "View on Perpusnas"
        },
        {
          title: "User Experience",
          publisher: "National Library of Indonesia (Perpusnas)",
          description: "An in-depth exploration of user experience design, focusing on creating meaningful and relevant experiences for users.",
          link: "https://opac.perpusnas.go.id/ResultListOpac.aspx?pDataItem=I.G.P.%20Asto%20Buditjahjanto%20(penulis)&pType=Author&pLembarkerja=-1&pPilihan=Author",
          linkText: "View on Perpusnas"
        }
      ]
    },
    id: {
      heading: "Buku &",
      subHeading: "Publikasi",
      books: [
        {
          title: "User Interface Desain",
          publisher: "Perpustakaan Nasional Republik Indonesia (Perpusnas)",
          description: "Panduan komprehensif mengenai prinsip-prinsip desain antarmuka pengguna dan praktik terbaik, yang secara resmi terdaftar dan diterbitkan dalam database nasional.",
          link: "https://opac.perpusnas.go.id/ResultListOpac.aspx?pDataItem=Duta%20Alif%20Gunawan,%20I.G.P.%20(penulis)&pType=Author&pLembarkerja=-1&pPilihan=Author",
          linkText: "Lihat di Perpusnas"
        },
        {
          title: "User Experience",
          publisher: "Perpustakaan Nasional Republik Indonesia (Perpusnas)",
          description: "Eksplorasi mendalam mengenai desain pengalaman pengguna (UX), berfokus pada penciptaan pengalaman yang bermakna dan relevan bagi pengguna.",
          link: "https://opac.perpusnas.go.id/ResultListOpac.aspx?pDataItem=I.G.P.%20Asto%20Buditjahjanto%20(penulis)&pType=Author&pLembarkerja=-1&pPilihan=Author",
          linkText: "Lihat di Perpusnas"
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
        <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {t.books.map((book, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 group relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform">
                <Book size={48} className="text-primary" />
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-secondary font-medium">{book.publisher}</p>
                </div>
                
                <p className="text-slate-400 leading-relaxed">
                  {book.description}
                </p>
                
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 hover:bg-primary text-white rounded-lg font-bold transition-all group/btn"
                >
                  {book.linkText}
                  <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Publications;
