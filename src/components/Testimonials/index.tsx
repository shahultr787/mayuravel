import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Priya Nair",
    designation: "Temple Trustee, Thiruvalla",
    content:
      "Mayuravel's camphor tablets burn with exceptional purity and fragrance. Our temple has been using them for years and the devotees always appreciate the divine atmosphere they create.",
    image: "/images/testimonials/auth.jpg",
    star: 5,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    designation: "Religious Store Owner, Kochi",
    content:
      "The wax candles from Mayuravel Industries last longer and burn cleaner than any others we've stocked. Our customers keep coming back for these premium quality products.",
    image: "/images/testimonials/auth.jpg",
    star: 5,
  },
  {
    id: 3,
    name: "Ananya Menon",
    designation: "Housewife, Pathanamthitta",
    content:
      "The wickless lamps have transformed our daily pooja. They're so convenient and safe, yet maintain the traditional essence. Mayuravel truly understands spiritual needs.",
    image: "/images/testimonials/auth.jpg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 dark:bg-bg-color-dark relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Customers Say"
          paragraph="Hear from devotees, temple authorities, and retailers who trust Mayuravel Industries for their spiritual product needs."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <SingleTestimonial testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements with spiritual motif */}
      <div className="absolute right-0 top-5 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M422.819 -70.8145C422.819 -70.8145 618.819 470.793 422.819 470.793C226.819 470.793 422.819 -70.8145 422.819 -70.8145Z"
            fill="url(#paint0_linear_83:2)"
          />
          <path
            opacity="0.3"
            d="M426.568 144.886C426.568 144.886 486.322 686.493 426.568 686.493C366.814 686.493 426.568 144.886 426.568 144.886Z"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="422.819"
              y1="-70.8145"
              x2="422.819"
              y2="470.793"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD700" />
              <stop offset="1" stopColor="#FFD700" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="426.568"
              y1="144.886"
              x2="426.568"
              y2="686.493"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD700" />
              <stop offset="1" stopColor="#FFD700" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-5 left-0 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 60L50.0728 122.855C55.5501 127.022 70.8513 133.759 88.2373 127.369C109.97 119.382 116.861 108.964 156.615 111.742C178.778 113.291 195.31 117.299 205.911 110.353C216.513 103.408 224.994 95.7682 243.016 97.1572C255.835 98.1453 265.278 98.8936 278 93.3373"
              stroke="url(#paint1_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD700" stopOpacity="0" />
              <stop offset="1" stopColor="#FFD700" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="101.672"
              x2="-40.8688"
              y2="56.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFD700" stopOpacity="0" />
              <stop offset="1" stopColor="#FFD700" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;
