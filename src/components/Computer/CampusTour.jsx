import React, { useState } from "react";
import campus1 from "../../assets/images/campus.webp";
import campus2 from "../../assets/images/smartclass.webp"
import campus3 from "../../assets/images/Lab3.webp";
import campus4 from "../../assets/images/nature1.webp";
import campus5 from "../../assets/images/Sports1.webp"
import campus6 from "../../assets/images/Gym3.webp"
import campus7 from "../../assets/images/Navratri.jpeg"
import campus8 from "../../assets/images/canteen.webp"
import campus9 from "../../assets/images/Lib4.webp"
const campusData = [
  {
    title: "Campus Overview",
    image: campus1,
    large: true,
    isVideo: true,
    youtubeId: "Nuyja6rQolM", 
  },
  { title: "Smart Classrooms", image: campus2 },
  { title: "Computer Lab", image: campus3 },
  { title: "Nature", image: campus4 },
  { title: "Sports", image: campus5 },
  { title: "Gym Facility", image: campus6 },
  { title: "Student Activity Center", image: campus7 },
  { title: "Cafeteria", image: campus8 },
  { title: "Library", image: campus9 },
];

const CampusTour = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <section id ="campus-tours" className="py-16 bg-white px-4 md:px-10 lg:px-16">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Campus <span className="text-[#F37021]">Tour</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[220px]">
          {campusData.map((item, index) => (
            <div
              key={index}
              onClick={() => item.isVideo && setActiveVideo(item.youtubeId)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer
              ${item.large ? "lg:col-span-2 lg:row-span-2 auto-rows-[460px]" : ""}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-all duration-300" />

              {/* Label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <p className="text-white font-semibold text-sm md:text-base">
                  {item.title}
                </p>

                {/* Play icon */}
                {item.isVideo && (
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-black text-lg font-bold">
                    ▶
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-[90%] max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-3xl"
            >
              ×
            </button>
            {/*YouTube iframe*/}
            <iframe width="1000" height="502" src="https://www.youtube.com/embed/Nuyja6rQolM?si=voTkSUp2pZ87IKKa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      )}
    </>
  );
};
export default CampusTour;