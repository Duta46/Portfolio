import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <AiFillGithub size={20} />,
      href: "https://github.com/Duta46",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      href: "https://www.linkedin.com/in/duta-gunawan/",
      label: "LinkedIn",
    },
    {
      icon: <AiFillInstagram size={20} />,
      href: "https://www.instagram.com/hello_duta/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="mt-20 py-10 border-t border-white/5 bg-background">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-slate-400 font-medium">
            Designed & Developed by{" "}
            <span className="text-white">Duta Alif Gunawan</span>
          </p>
          <p className="text-slate-500 text-sm mt-1">
            Copyright © {year} • All Rights Reserved
          </p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-panel hover:bg-white/10 text-slate-400 hover:text-primary transition-all duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
