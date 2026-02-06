import { FaGraduationCap, FaBriefcase, FaDesktop } from "react-icons/fa";
import { useEffect } from "react";
import { gsap } from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";

function CompOfferings() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const cards = document.querySelectorAll(".offer-card");

    cards.forEach((card) => {
      const circle = card.querySelector(".circle");
      const icon = card.querySelector(".icon");

      gsap.set(circle, { opacity: 0, x: -30 });
      gsap.set(icon, { rotateY: 180 });

      const onEnter = () => {
        gsap.to(circle, { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" });
        gsap.to(icon, { rotateY: 0, duration: 0.3 });
      };

      const onLeave = () => {
        gsap.to(circle, { opacity: 0, x: -30, duration: 0.3 });
        gsap.to(icon, { rotateY: 180, duration: 0.3 });
      };

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
    });
  }, []);

  return (
    <section id="comp-offerings" className="px-6 sm:px-8 md:px-16 py-14 poppins-regular bg-gradient-to-r from-[#10404A] via-[#3AAFA9] to-[#10404A]">
      
      {/* Heading */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        data-aos="fade-up"
      >
        What sets <span className="text-[#F37021]">IGSB</span> apart?
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Card 1 */}
        <div
          className="offer-card bg-white/90 backdrop-blur-lg p-8 shadow-2xl flex flex-col items-center text-center relative rounded-2xl transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <div className="icon mb-5 p-4 rounded-full bg-[#F37021] text-white shadow-lg">
            <FaGraduationCap size={36} />
          </div>
          <p className="text-lg md:text-xl font-semibold text-[#10404A]">
            Excellent Academic Interface
          </p>
          <div className="circle absolute -bottom-4 -right-4 w-12 h-12 bg-[#3AAFA9] rounded-full shadow-xl"></div>
        </div>

        {/* Card 2 */}
        <div
          className="offer-card bg-white/90 backdrop-blur-lg p-8 shadow-2xl flex flex-col items-center text-center relative rounded-2xl transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="icon mb-5 p-4 rounded-full bg-[#F37021] text-white shadow-lg">
            <FaBriefcase size={36} />
          </div>
          <p className="text-lg md:text-xl font-semibold text-[#10404A]">
            Top Campus Placements for Core Branches
          </p>
          <div className="circle absolute -bottom-4 -right-4 w-12 h-12 bg-[#3AAFA9] rounded-full shadow-xl"></div>
        </div>

        {/* Card 3 */}
        <div
          className="offer-card bg-white/90 backdrop-blur-lg p-8 shadow-2xl flex flex-col items-center text-center relative rounded-2xl transition-transform duration-300 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="icon mb-5 p-4 rounded-full bg-[#F37021] text-white shadow-lg">
            <FaDesktop size={36} />
          </div>
          <p className="text-lg md:text-xl font-semibold text-[#10404A]">
            Training & Placement Programme
          </p>
          <div className="circle absolute -bottom-4 -right-4 w-12 h-12 bg-[#3AAFA9] rounded-full shadow-xl"></div>
        </div>

      </div>
    </section>
  );
}

export default CompOfferings;
