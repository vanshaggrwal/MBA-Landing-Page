import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import logos
import logo1 from "../../assets/images/came/BAGIC.png";
import logo2 from "../../assets/images/came/Bank-of-New-York-Mellon.png";
import logo3 from "../../assets/images/came/Barclays.png";
import logo4 from "../../assets/images/came/FINCART.png";
import logo5 from "../../assets/images/came/Fin-destination.png";
import logo6 from "../../assets/images/came/HDFC-Sales-Pvt-Ltd.png";
import logo7 from "../../assets/images/came/Indigo-Paints.png";
import logo8 from "../../assets/images/came/Juspay.png";
import logo9 from "../../assets/images/came/Kohler.png";
import logo10 from "../../assets/images/came/LandMark-Group.png";
import logo11 from "../../assets/images/came/Master-Card.png";
import logo12 from "../../assets/images/came/Mr-Kitchen.png";
import logo13 from "../../assets/images/came/Nestle.png";
import logo14 from "../../assets/images/came/Patterns-Technologies.png";
import logo15 from "../../assets/images/came/Payatu.png";
import logo16 from "../../assets/images/came/Real-Estate-Mall.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,
  logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16,
];

const RecruitersSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 6000,              // controls smoothness
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,         // REQUIRED for continuous motion
    cssEase: "linear",        // KEY for marquee effect
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="py-12 px-6 md:px-16 bg-white poppins-regular overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-4xl font-semibold text-[#10404A] mb-10">
        Our Recruiters
      </h2>

      {/* Slider */}
      <Slider {...settings}>
        {logos.concat(logos).map((logo, idx) => (
          <div key={idx} className="px-2">
            <div
  className="bg-white 
             border border-gray-200 
             rounded-xl 
             shadow-sm 
             flex items-center justify-center 
             h-28 px-6 
             hover:shadow-md transition"
>¸

              <img
                src={logo}
                alt={`Recruiter ${idx}`}
                className="h-20 max-w-[160px] mx-auto object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default RecruitersSlider;
