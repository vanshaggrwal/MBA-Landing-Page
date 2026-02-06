import { useEffect } from "react";
import ProgramImage from "../../assets/images/overview.jpg";
import HatImage from "../../assets/images/hat.png";
import AOS from "aos";
import "aos/dist/aos.css";

function ProgramOverview() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="program-overview" className="bg-white px-6 sm:px-10 md:px-16 py-16 poppins-regular">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT IMAGE */}
        <div
          className="w-full md:w-1/2"
          data-aos="fade-right"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={ProgramImage}
              alt="Programme Overview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="w-full md:w-1/2 relative"
          data-aos="fade-left"
        >
          {/* Floating Hat */}
          <img
            src={HatImage}
            alt="Hat"
            className="absolute -left-6 -top-10 w-14 h-14 animate-floating"
          />

          <h2 className="text-3xl md:text-4xl font-bold text-[#10404A] mb-4">
            MBA Programme Overview
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
            Indira Global School of Business (IGSB) offers a transformative
            two-year AICTE-approved MBA programme that blends academic excellence
            with real-world business insights. With global collaborations,
            diverse specializations, and industry-driven training, the programme
            emphasizes leadership, innovation, and ethical practices.
            Experiential learning through live projects, case studies, and
            international exposure ensures students gain the skills to thrive in
            a dynamic global economy.
          </p>

          {/* CTA */}
          <button className="inline-flex items-center gap-2 bg-[#F37021] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#d85f1a] transition">
            Know More
            <span className="text-lg">↗</span>
          </button>
        </div>
      </div>

      {/* Floating animation */}
      <style>{`
        @keyframes floating {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-floating {
          animation: floating 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default ProgramOverview;
