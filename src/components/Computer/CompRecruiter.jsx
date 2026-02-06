import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Auto-import all logos
const allLogos = Object.values(
  import.meta.glob("../../assets/images/logo/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
);
// Split logos into 3 equal rows
const chunkSize = Math.ceil(allLogos.length / 3);
const rows = [
  allLogos.slice(0, chunkSize),
  allLogos.slice(chunkSize, chunkSize * 2),
  allLogos.slice(chunkSize * 2),
];
const sliderSettings = (reverse = false) => ({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 7000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  pauseOnHover: false,
  rtl: reverse, // alternate direction
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
});
const RecruitersSlider = () => {
  return (
    <section id="comp-recruiters" className="py-14 px-6 md:px-16 bg-white poppins-regular overflow-hidden">
      
      <h2 className="text-center text-2xl md:text-4xl font-semibold text-[#10404A] mb-12">
        Our Recruiters
      </h2>
      <div className="space-y-6">
        {rows.map((logos, rowIndex) => (
          <Slider
            key={rowIndex}
            {...sliderSettings(rowIndex % 2 !== 0)}
            className="recruiter-slider"
          >
            {logos.concat(logos).map((logo, idx) => (
              <div key={idx} className="px-3">
                <div
                  className="
                    bg-white
                    border border-gray-200
                    rounded-2xl
                    shadow-sm
                    flex items-center justify-center
                    h-[90px]
                    px-6
                    transition
                    hover:shadow-md
                  "
                >
                  <img
                    src={logo}
                    alt="Recruiter Logo"
                    className="max-h-[50px] max-w-[150px] object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        ))}
      </div>
    </section>
  );
};
export default RecruitersSlider;
