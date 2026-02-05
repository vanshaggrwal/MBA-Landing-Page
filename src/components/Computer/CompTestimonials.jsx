import React, { useState } from "react";
import Slider from "react-slick";
import { FaUserCircle, FaQuoteLeft } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import brochurePDF from "../../assets/images/Prospect.pdf";
import NPFWidget from "../NPFWidget";

function TestimonialsWithCTA() {
  const [open, setOpen] = useState(false);

  const testimonials = [
    {
      name: "Vikrant Kulkarni",
      role: "Nayara Energy Limited",
      text:
        "I am grateful to Indira Global Business School for helping me unleash my worth in these 2 years. The curriculum and activities provided a strong professional platform.",
    },
    {
      name: "Akshay Shirke",
      role: "Amazon",
      text:
        "The support system and industry exposure at IGSB helped me become industry-ready with confidence and global exposure.",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <>
      {/* FULL STRIP */}
      <section className="bg-[#10404A] py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-center">

          {/* LEFT – TESTIMONIALS */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-8">
              Student Testimonials
            </h2>

            <div className="bg-[#3AAFA9] rounded-2xl p-6 md:p-8 shadow-xl">
              <Slider {...settings}>
                {testimonials.map((t, i) => (
                  <div key={i}>
                    <FaQuoteLeft className="text-white/40 text-3xl mb-4" />

                    <p className="text-white text-base md:text-lg leading-relaxed mb-6">
                      “{t.text}”
                    </p>

                    <div className="flex items-center gap-4">
                      <FaUserCircle className="text-white text-4xl" />
                      <div>
                        <p className="text-white font-semibold">{t.name}</p>
                        <p className="text-white/80 text-sm">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* RIGHT – CTA */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Ready to Lead?
            </h3>

            <p className="text-white/90 mb-6">
              Get the full programme details and curriculum insights.
            </p>

            <button
              onClick={() => setOpen(true)}
              className="
                bg-[#F37021]
                hover:bg-[#ff8a3d]
                text-white
                px-8 py-3
                rounded-full
                flex items-center gap-3
                mx-auto md:mx-0
                shadow-lg
                transition
              "
            >
              <FontAwesomeIcon icon={faDownload} />
              Download Brochure
            </button>
          </div>

        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur">
          <div className="relative bg-white/10 backdrop-blur-xl p-6 rounded-xl max-w-md w-full">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-3 text-white text-2xl"
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

export default TestimonialsWithCTA;
