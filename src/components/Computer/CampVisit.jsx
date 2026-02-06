import React from "react";
import campusImg from "../../assets/images/IGSB.webp"; 
// ⬆️ replace with your actual image path

export default function CampVisit() {
  return (
    <section id="campus-visit" className="relative w-full h-[420px] md:h-[520px] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src={campusImg}
        alt="Campus Visit"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-3xl text-white">

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Visit the Campus
          </h2>

          <p className="text-white/90 text-base md:text-lg mb-8">
            Spend the day soaking in the vibe. Take a guided stroll through
            the campus and experience how your future begins here.
          </p>

          <button
            className="
              bg-[#3AAFA9]
              hover:bg-[#1e9400]
              text-white
              px-8 py-3
              rounded-full
              font-semibold
              transition
              shadow-lg
            "
          >
            Schedule a Visit →
          </button>

        </div>
      </div>
    </section>
  );
}
