"use client";

import { useState, useRef, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting && videoRef.current) {
        videoRef.current.play();
      } else if (videoRef.current) {
        videoRef.current.pause();
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 overflow-hidden">
      <div className="container">
        <SectionTitle
          title="Experience Mayuvel Industry"
          paragraph="Immerse yourself in the world of Mayuvel Industry – Crafting premium camphor, artisanal wax candles, and sacred products that elevate your spiritual journey and bring peace to your daily life."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[900px] overflow-hidden rounded-xl shadow-2xl shadow-gray-200 dark:shadow-gray-800 transition-all duration-300 hover:shadow-3xl hover:shadow-gray-300 dark:hover:shadow-gray-900"
              data-wow-delay=".15s"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative aspect-[16/9] items-center justify-center group">
                {/* Enhanced Preview Image */}
                <img
                  src="/images/video/video.jpg"
                  alt="Preview of Mayuvel Industry's artisanal products and spiritual ambiance"
                  className={`w-full h-full object-cover transition-opacity duration-500 ${
                    !isLoading ? "opacity-0" : "opacity-100"
                  }`}
                />

                {/* Improved Loading Animation */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900/80 to-gray-700/80">
                    <div className="relative">
                      <div className="w-16 h-16 border-4 border-t-transparent border-primary rounded-full animate-spin"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium">
                        Loading
                      </div>
                    </div>
                  </div>
                )}

                {/* Enhanced Video Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    className={`w-full h-full object-cover rounded-xl transition-all duration-500 ${
                      isHovered ? "scale-105" : "scale-100"
                    }`}
                    onCanPlay={handleCanPlay}
                    preload="auto"
                    disablePictureInPicture
                  >
                    <source src="/videos/video.mp4" type="video/mp4" />
                    Your browser does not support this video experience. Please enjoy our static content instead.
                  </video>

                  {/* Subtle Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>

                  {/* Play Icon Overlay on Hover */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    isHovered && !isLoading ? "opacity-100" : "opacity-0"
                  }`}>
                    <svg
                      className="w-16 h-16 text-white drop-shadow-lg transform hover:scale-110 transition-transform duration-200"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Shape */}
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat opacity-80 animate-pulse-slow"></div>
    </section>
  );
};

export default Video;