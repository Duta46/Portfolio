import React from "react";
import Typewriter from "typewriter-effect";
import { useLanguage } from "../LanguageContext";

function Type() {
  const { language } = useLanguage();

  const strings = {
    en: [
      "Software Developer",
      "Laravel Specialist",
      "React Enthusiast",
      "Lifelong Learner",
    ],
    id: [
      "Pengembang Perangkat Lunak",
      "Spesialis Laravel",
      "Pecinta React",
      "Pembelajar Sejati",
    ],
  };

  return (
    <Typewriter
      options={{
        strings: strings[language],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        wrapperClassName: "text-gradient",
        cursorClassName: "text-primary",
      }}
    />
  );
}

export default Type;
