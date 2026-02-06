import { useState } from "react";
import marketingImg from "../../assets/images/mm-CRASWm9F.avif";
import financeImg from "../../assets/images/fm-s7bAl5qI.avif";
import hrImg from "../../assets/images/hrm-DfuHU7ta.avif";
import logi from "../../assets/images/logi-sup-OMcpAP5C.avif";
import NPFWidget from "../NPFWidget";

const mbaCourses = [
  {
    title: "Marketing Management",
    subtitle: "MBA Specialization",
    img: marketingImg,
    popular: true,
  },
  {
    title: "Financial Management",
    subtitle: "MBA Specialization",
    img: financeImg,
    popular: false,
  },
  {
    title: "Human Resource Management",
    subtitle: "MBA Specialization",
    img: hrImg,
    popular: true,
  },
  {
    title: "Operations Management",
    subtitle: "MBA Specialization",
    img: logi,
    popular: false,
  },
];

const MBACourses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  return (
    <>
      {/* Section */}
      <section  id="mba-courses" className="py-16 bg-white px-4 md:px-10 lg:px-16">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Our <span className="text-[#F37021]">MBA</span> Courses
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mbaCourses.map((course, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* POPULAR Badge */}
              {course.popular && (
                <span className="absolute top-3 left-3 bg-[#F37021] text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  POPULAR
                </span>
              )}

              {/* Image */}
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Content */}
              <div className="p-5 bg-white transition-all duration-300 group-hover:-translate-y-3">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {course.subtitle}
                </p>

                <div className="flex items-center justify-between">
                  <button
                    onClick={openModal}
                    className="text-sm font-semibold text-[#F37021] hover:underline"
                  >
                    Explore Course →
                  </button>

                  <button
                    onClick={openModal}
                    className="px-4 py-2 text-sm font-semibold text-white bg-[#3AAFA9] rounded-md hover:bg-[#2e9e98] transition"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(6px)",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            className="relative max-w-md w-full p-6 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.25)",
              transform: isVisible ? "scale(1)" : "scale(0.95)",
              transition: "all 0.3s ease",
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-white text-2xl hover:text-gray-300"
            >
              ×
            </button>
            <NPFWidget />
          </div>
        </div>
      )}
    </>
  );
};

export default MBACourses;
