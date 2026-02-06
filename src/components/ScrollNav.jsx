import React, { useEffect, useRef, useState } from "react";

const ACCENT = "#F37021";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [labelTop, setLabelTop] = useState(0);
  const dashRefs = useRef([]);

  /* -------- Scroll Observer -------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex(
              (s) => s.id === entry.target.id
            );
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* -------- Sync label with real dash position -------- */
  useEffect(() => {
    const dash = dashRefs.current[activeIndex];
    if (dash) {
      const rect = dash.getBoundingClientRect();
      const parentRect = dash.parentElement.getBoundingClientRect();
      setLabelTop(rect.top - parentRect.top + 14);
    }
  }, [activeIndex]);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex">
      <div className="relative flex flex-col items-start">

        {/* Vertical Line */}
        <div
          className="absolute left-[6px] top-0 h-full w-[1px]"
          style={{ backgroundColor: "#00000033" }}
        />

        {/* Clickable Dashes */}
        <div className="flex flex-col gap-12">
          {sections.map((sec, i) => (
            <button
              key={sec.id}
              ref={(el) => (dashRefs.current[i] = el)}
              onClick={() => {
                const target = document.getElementById(sec.id);
                if (target) {
                  target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="cursor-pointer focus:outline-none"
              aria-label={`Go to ${sec.label}`}
            >
              <span
                className="block h-[2px]"
                style={{
                  width: i === activeIndex ? "36px" : "18px",
                  backgroundColor: ACCENT,
                  transition: "all 0.3s ease",
                }}
              />
            </button>
          ))}
        </div>

        {/* Active Label */}
        <div
          className="absolute left-0"
          style={{
            top: labelTop,
            transform: "translateY(12px)",
            transition: "top 0.35s ease",
          }}
        >
          <span
            className="text-sm font-medium tracking-wide"
            style={{ color: ACCENT, whiteSpace: "nowrap" }}
          >
            {sections[activeIndex].label}
          </span>
        </div>
      </div>
    </div>
  );
}
