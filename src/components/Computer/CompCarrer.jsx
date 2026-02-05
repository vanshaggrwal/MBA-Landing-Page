import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUserGraduate,
  faTrophy,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import Testimonials from "./CompTestimonials";
import CompApply from "./CompApply";

function IGSBLandingPage() {
  const features = [
    {
      icon: faGraduationCap,
      title: "Top-notch Curriculum",
      desc:
        "Our MBA programme offers a robust curriculum designed to prepare you for the future of technology. Learn from experts in the field and gain hands-on experience.",
    },
    {
      icon: faUserGraduate,
      title: "Experienced Faculty",
      desc:
        "Learn from experienced professors and industry experts who are passionate about educating the next generation of entrepreneurs.",
    },
    {
      icon: faTrophy,
      title: "Practical Learning Approach",
      desc:
        "The MBA programme will facilitate practical learning of different functional areas of management with an integrated approach to various functions of management.",
    },
    {
      icon: faRocket,
      title: "Excellent Placements",
      desc:
        "Our MBA graduates have gone on to secure prestigious positions in top companies, with an outstanding placement rate year after year.",
    },
  ];

  return (
    <div className="py-16 poppins-regular bg-white">
      <div className="px-6 sm:px-12 md:px-16">
        {/* WHY CHOOSE MBA */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12">
            Why Choose <span className="text-[#F37021]">MBA</span> at IGSB College?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-[#3AAFA9] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="text-white text-2xl"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Process */}
        <CompApply />

        {/* Testimonials */}
        <Testimonials />
      </div>
    </div>
  );
}

export default IGSBLandingPage;
