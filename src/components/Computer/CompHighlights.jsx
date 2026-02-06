import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faAward,
  faMedal,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function CompHighlights() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const highlights = [
    {
      icon: faTrophy,
      text:
        "Ranked 49th in Top 100 Private Engineering Institutes and Ranked 61st in Top 140 Engineering Institutes conducted by Times of India Engineering Colleges.",
    },
    {
      icon: faAward,
      text:
        "Ranking Survey - 2019 Winners of SmartIndia Hackathon for consecutive three years organized by Ministry of HRD, AICTE in association with NASSCOM.",
    },
    {
      icon: faMedal,
      text:
        "Received Outstanding Education Institute (West) Award by National Education Awards 2018.",
    },
    {
      icon: faCertificate,
      text:
        "IGSB has been accredited with ‘B++’ grade by National Accreditation and Assessment Council (NAAC).",
    },
  ];

  return (
    <section id="comp-highlights" className="bg-white py-16 px-6 sm:px-10 md:px-16 poppins-regular">
      
      {/* Heading */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-14"
        data-aos="fade-up"
      >
        IGSB <span className="text-[#F37021]">Highlights</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
          >
            {/* Icon box */}
            <div className="w-14 h-14 rounded-xl bg-[#3AAFA9] flex items-center justify-center mb-6">
              <FontAwesomeIcon
                icon={item.icon}
                className="text-white text-xl"
              />
            </div>

            {/* Text */}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompHighlights;
