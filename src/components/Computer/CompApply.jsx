import React, { useState } from "react";
import backgroundImage from "../../assets/images/plane.png";
import NPFWidget from "../NPFWidget";

const steps = [
  "Fill out the online application form on our website.",
  "Submit the required documents (mark sheets, ID, etc.).",
  "Pay the application fee securely online.",
  "Attend the counseling and interview session.",
  "Confirm your seat and join IGSB!",
];

const AdmissionProcess = () => {
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
      {/* SECTION */}
      <section id="comp-apply"
        className="relative px-6 sm:px-12 md:px-16 py-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#10404A]/90"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
           How To Apply?
          </h2>
          <p className="text-base md:text-lg mb-12 max-w-3xl mx-auto">
            Follow these simple steps to apply for the MBA Programme at IGSB, Pune
          </p>

          {/* TIMELINE */}
          <div className="relative">
            {/* Horizontal line (desktop only) */}
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-[2px] bg-[#F37021]"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {steps.map((text, index) => (
                <div key={index} className="relative text-center">
                  {/* Step Circle */}
                  <div className="mx-auto w-12 h-12 rounded-full bg-[#F37021] text-white flex items-center justify-center font-bold text-lg shadow-lg z-10 relative">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className="mt-6 bg-white text-[#10404A] p-5 rounded-xl shadow-lg min-h-[140px] flex items-center justify-center">
                    <p className="text-sm md:text-base">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* APPLY BUTTON */}
          <div className="mt-14">
            <button
              onClick={openModal}
              className="bg-[#F37021] hover:bg-[#d65c1a] text-white py-3 px-10 rounded-full text-lg font-semibold shadow-xl transition-all"
            >
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            background: "rgba(16, 64, 74, 0.6)",
            backdropFilter: "blur(6px)",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            className="relative p-6 rounded-xl max-w-md w-full"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
              transform: isVisible ? "scale(1)" : "scale(0.95)",
              transition: "all 0.3s ease",
            }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-white text-2xl hover:text-[#F37021]"
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

export default AdmissionProcess;
