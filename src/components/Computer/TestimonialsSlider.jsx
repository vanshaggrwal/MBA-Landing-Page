import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// images from src/assets
import stud1 from "../../assets/stud1.webp";
import stud2 from "../../assets/stud2.jpg";
import stud3 from "../../assets/stud4.jpg";

const students = [
  {
    name: "Abhinav Singh",
    package: "₹29 Lakh Package",
    text:
      "Abhinav Singh, an MBA graduate, secured a distinguished placement with Sobha Realty, earning an annual package of ₹29 lakh.",
    image: stud1,
  },
  {
    name: "Rahul Ratan Sinha",
    package: "₹24 Lakh Package",
    text:
      "Rahul’s journey reflects strong industry exposure and hands-on learning that prepared him for leadership roles.",
    image: stud2,
  },
  {
    name: "Omar Mohammed",
    package: "₹23.7 Lakh Package",
    text:
      "Omar Mohammed developed a global-ready profile through rigorous academics and practical industry training.",
    image: stud3,
  },
];

export default function StudentSuccessTestimonials() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,

    // 🔥 AUTO SLIDE FIX
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 900,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: false,

    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section  id="comp-testimonials-slider" className="bg-[#3AAFA9] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-center">

        {/* LEFT FIXED CONTENT */}
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-6">
            Student Success: <br /> From Classroom to Career
          </h2>

          <p className="text-white/90 leading-relaxed">
            Our students stand out with exceptional placements, driven by
            a future-ready curriculum, strong industry collaborations,
            and hands-on exposure that builds global careers.
          </p>
        </div>

        {/* RIGHT AUTO SLIDER */}
        <div className="md:col-span-2">
          <Slider {...settings}>
            {students.map((s, i) => (
              <div key={i} className="px-3">
                <div className="relative group rounded-2xl overflow-hidden shadow-xl">

                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-[400px] object-cover"
                  />

                  {/* HOVER OVERLAY */}
                  <div
                    className="
                      absolute inset-0
                      bg-black/70
                      opacity-0
                      group-hover:opacity-100
                      transition duration-500
                      flex items-center p-6
                    "
                  >
                    <p className="text-white text-sm leading-relaxed">
                      “{s.text}”
                    </p>
                  </div>
                </div>

                <div className="mt-4 text-white">
                  <p className="text-sm font-bold">{s.package}</p>
                  <p className="text-base font-semibold">{s.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}
