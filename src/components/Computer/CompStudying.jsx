import React, { useEffect } from "react";
import {
  FaStar,
  FaBuilding,
  FaUsers,
  FaLaptop,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import BgImage from "../../assets/images/studying.jpg"; // 👈 background image

function CompStudying() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const cards = [
    { icon: FaStar, text: "30+ Years of Academic Excellence" },
    { icon: FaUsers, text: "350+ Leading Recruiters on Campus" },
    { icon: FaBuilding, text: "State of the Art Infrastructure" },
    { icon: FaLaptop, text: "Career & Leadership Programme" },
    { icon: FaGraduationCap, text: "13.8 LPA Highest Package Offered" },
    { icon: FaChartLine, text: "Practice-Oriented Learning" },
  ];

  return (
    <section id="comp-study"
      className="relative py-16 px-6 md:px-16 poppins-regular overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Studying with{" "}
            <span className="text-[#FBCB2C]">
              Indira Global School of Business
            </span>
          </h2>
        </div>

        {/* Required paragraph (UNCHANGED) */}
        <p className="text-center text-white/90 text-sm md:text-lg max-w-4xl mx-auto mb-14 leading-relaxed">
          At IGSB, learning goes beyond classrooms to build globally aware,
          industry-ready leaders. Our AICTE-approved MBA programmes combine
          academic rigor with real-world exposure to prepare students for
          dynamic global markets.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="flex items-start gap-5"
            >
              {/* Icon */}
              <div className="text-[#FBCB2C] text-3xl mt-1">
                <card.icon />
              </div>

              {/* Text */}
              <p className="text-white text-sm md:text-base leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CompStudying;
