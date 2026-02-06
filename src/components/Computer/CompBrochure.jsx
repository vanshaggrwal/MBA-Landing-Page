import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import brochurePDF from "../../assets/images/Prospect.pdf";
import NPFWidget from "../NPFWidget";

function CompBrochure() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setIsVisible(true), 10);

    // Auto download after 5 sec
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = brochurePDF;
      link.download = "Prospect.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 5000);
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  return (
    <>
      {/* FULL WIDTH SECTION (same outer color) */}
      <section id="comp-brochure" className="w-full bg-[#10404A] py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto">
          {/* CTA BOX (same color as before) */}
          <div className="relative bg-[#3AAFA9] rounded-3xl px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#F37021] shadow-xl">
            
            {/* Text */}
            <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl text-center md:text-left">
              Get the brochure to explore our industry-aligned, outcome-based
              curriculum and complete programme details.
            </p>

            {/* Button */}
            <button
              onClick={openModal}
              className="bg-[#10404A] border border-[#F37021] text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition duration-300 flex items-center gap-3 text-sm sm:text-base md:text-lg"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download Brochure
            </button>
          </div>
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

export default CompBrochure;
