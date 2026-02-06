import React, { useEffect, useState } from "react";

const sections = [
  { id: "comp-hero", label: "Home" },
  { id: "comp-pointers", label: "Pointers" },
  { id: "comp-recruiters", label: "Recruiters" },
  { id: "program-overview", label: "Overview" },
  { id: "mba-courses", label: "Courses" },
  { id: "campus-tours", label: "Campus Tour" },
  { id: "comp-offerings", label: "Offerings" },
  { id: "comp-study", label: "Studying" },
  { id: "core-pillars", label: "Core Pillars" },
  { id: "comp-highlights", label: "Highlights" },
  { id: "comp-join", label: "Join Us" },
  { id: "comp-career", label: "Careers" },
  { id: "comp-testimonials-slider", label: "Testimonials" },
  { id: "campus-visit", label: "Campus Visit" },
];

export default function ScrollNav() {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex">
      <div className="relative flex flex-col items-start gap-6">

        {/* VERTICAL LINE */}
        <div className="absolute left-[6px] top-0 h-full w-[1px] bg-black/40" />

        {sections.map((sec) => (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            className="relative group flex items-center"
          >
            {/* HORIZONTAL TICK */}
            <span
              className={`
                h-[2px] w-6 transition-all duration-300
                ${activeId === sec.id
                  ? "bg-black"
                  : "bg-black/40"}
              `}
            />

            {/* LABEL */}
            <span
              className={`
                ml-4 text-sm whitespace-nowrap transition
                opacity-0 group-hover:opacity-100
                ${activeId === sec.id
                  ? "text-black font-medium"
                  : "text-black/70"}
              `}
            >
              {sec.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
