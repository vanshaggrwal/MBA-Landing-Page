import React, { useState } from "react";
import NPFWidget from "../NPFWidget";

function CompJoin() {
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
      {/* FULL-WIDTH CTA SECTION */}
      <section id="comp-join" className="relative w-full bg-[#3AAFA9] py-20 px-4 md:px-16 overflow-hidden">
        {/* Soft overlay shapes (optional CU-style feel) */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-white/10 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join MBA Programme at IGSB, Pune
          </h2>

          <p className="text-white/90 text-base md:text-lg max-w-4xl mx-auto mb-10">
            Shaping visionary business leaders of tomorrow. Elevate your future
            with our dynamic curriculum, global exposure, and industry-driven
            expertise.
          </p>

          <button
            onClick={openModal}
            className="inline-flex items-center gap-2 bg-white text-[#3AAFA9] font-semibold px-10 py-3 rounded-full text-lg hover:bg-[#F37021] hover:text-white transition-all"
          >
            Apply Now →
          </button>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{
            background: "rgba(0,0,0,0.35)",
            backdropFilter: "blur(6px)",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <div
            className="relative max-w-md w-full p-6 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.12)",
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
}

export default CompJoin;
