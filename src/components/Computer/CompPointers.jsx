import React, { useEffect } from "react";
import {
  FaRegClock,
  FaListUl,
  FaCheckCircle,
  FaGraduationCap,
  FaBookOpen,
  FaBolt,
  FaBriefcase,
  FaSuitcase,
  FaMoneyBillWave,
  FaCalendarAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function CompPointers() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  const items = [
    {
      icon: <FaRegClock />,
      title: "Duration",
      value: "2 Years | 4 Semesters",
    },
    {
      icon: <FaListUl />,
      title: "Credit System",
      value: "Choice Based Credit and Grading System",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Programme Format",
      value: "Offline (On-Campus) Full-Time Programme",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Programme Fees",
      value: "₹ 1,56,000 (Inclusive of all taxes)",
    },
    {
      icon: <FaBookOpen />,
      title: "Pedagogy",
      value: "Experiential & Case Based Learning Model",
    },
    {
      icon: <FaBolt />,
      title: "Methodology",
      value: "Outcome Based Education",
    },
    {
      icon: <FaBriefcase />,
      title: "Placements",
      value: "650+ Recruiting Partners",
    },
    {
      icon: <FaSuitcase />,
      title: "Internships",
      value: "Industry Exposure Programmes",
    },
  ];

  return (
    <section id="comp-pointers" className="px-6 md:px-16 py-16 bg-white poppins-regular">
      
      {/* POINTER GRID (same as 2nd image) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
        {items.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 80}
            className="flex items-start gap-4"
          >
            {/* Icon */}
            <div className="min-w-[52px] min-h-[52px] rounded-full border-2 border-[#F37021] flex items-center justify-center text-[#F37021] text-xl">
              {item.icon}
            </div>

            {/* Text */}
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-1">
                {item.title}
              </h4>
              <p className="text-gray-900 font-medium text-sm leading-snug">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* OLD STYLE NOTE (unchanged color) */}
      <div
        className="mt-14 bg-[#10404A] rounded-xl p-6 text-center shadow-lg"
        data-aos="fade-up"
      >
        <p className="text-white text-base md:text-lg">
          ₹ 55,000 is charged separately for{" "}
          <span className="text-[#F37021] font-semibold">
            CLDP (Career & Leadership Development Programme)
          </span>
          .
        </p>
      </div>
    </section>
  );
}

export default CompPointers;
