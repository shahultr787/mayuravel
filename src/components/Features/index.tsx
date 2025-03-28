"use client"; // Add this directive at the top

import { useEffect, useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* Section Title */}
        <div>
          <SectionTitle
            title="Main Features"
            paragraph="Explore our range of premium spiritual products, including natural camphor, handcrafted candles, eco-friendly light wickles, divine offerings, and organic food items. Each product is made with devotion, ensuring purity, long-lasting fragrance, and sustainability, perfect for rituals, relaxation, and gifting."
            center
          />
        </div>

        {/* Swiper (Carousel) for Small Screens */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {featuresData.map((feature, index) => (
              <SwiperSlide key={feature.title || `feature-${index}`}>
                <div className="px-4"> {/* Added padding for better mobile display */}
                  <SingleFeature feature={feature} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid Layout for Larger Screens */}
        <div className="hidden md:grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <div 
              key={feature.title || `feature-${index}`} 
              className="w-full transform transition-transform duration-300 hover:scale-105"
            >
              <SingleFeature feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;