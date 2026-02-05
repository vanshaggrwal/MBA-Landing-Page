import { useState, useEffect, useMemo } from "react";
import backgroundImage from "../../assets/images/bgmba.jpg";
import NPFWidget from "../NPFWidget";
import brochurePDF from "../../assets/images/Prospect.pdf";

function CompHero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [open, setOpen] = useState(false);
const handleDownload = () => {
  const link = document.createElement("a");
  link.href = brochurePDF;
  link.download = "IGSB_MBA_Brochure.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const words = useMemo(() => ["Lead.", "Excel.", "Inspire."], []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        }
      } else {
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        } else {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
        }
      }
    }, isDeleting ? 80 : 120);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <>
      {/* HERO */}
      <section
        className="relative px-6 sm:px-8 md:px-16 py-20 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 max-w-6xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            <span className="text-[#F37021] font-bold">MBA</span> at IGSB is
            designed to make you{" "}
            <span className="inline-block">
              {currentText}
              <span className="ml-1 animate-blink">|</span>
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl max-w-2xl">
            Learn, innovate, and lead with an MBA aligned to global standards and
            industry needs.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
           <button
  onClick={handleDownload}
  className="bg-[#F37021] text-white px-6 py-3 rounded-md hover:bg-[#ff8a3d] transition"
>
  Download Brochure
</button>


            <button
              onClick={() => setOpen(true)}
              className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-100 transition"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </section>
      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur">
          <div className="relative w-full max-w-md bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-xl">
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

export default CompHero;
