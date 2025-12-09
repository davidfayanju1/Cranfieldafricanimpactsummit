import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Elegant, sophisticated images showing progress, evolution, and institutional presence
  const slides = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80&sat=-30&blur=20",
      overlay: "from-gray-900/80 via-gray-900/40 to-emerald-900/20",
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80&sat=-30&blur=20",
      overlay: "from-gray-900/70 via-gray-900/30 to-emerald-900/25",
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80&sat=-30&blur=20",
      overlay: "from-gray-900/75 via-gray-900/35 to-emerald-900/15",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // Slower transitions for elegance

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Carousel Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image with sophisticated darkening */}
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundPosition: "center center",
                filter: "brightness(0.7) contrast(1.1)",
              }}
            >
              {/* Elegant gradient overlay */}
              <div
                className={`absolute inset-0 bg-linear-to-t ${slide.overlay}`}
              ></div>

              {/* Subtle texture overlay */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundSize: "300px",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content - Minimal & Classy */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          {/* Main Institution Name */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-4">
              <span className="block font-normal mt-2">Cranfield Africa</span>
              <span className="block font-light text-emerald-300 mt-1">
                Impact Summit
              </span>
            </h1>
          </div>

          {/* Single Powerful Statement */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl text-gray-200 font-light tracking-wide leading-relaxed max-w-2xl mx-auto">
              Shaping Africa's future through meaningful connections and
              transformative impact.
            </p>
          </div>

          {/* Subtle CTA */}
          <div className="mt-16">
            <button className="px-8 py-3 bg-transparent border border-emerald-400/50 hover:border-emerald-300 text-emerald-300 hover:text-white font-light tracking-wide rounded-sm transition-all duration-500 hover:bg-emerald-400/10 backdrop-blur-sm text-lg">
              Discover Our Vision
            </button>
          </div>
        </div>
      </div>

      {/* Elegant Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-700 ${
              index === currentSlide
                ? "bg-emerald-300 w-8 opacity-100"
                : "bg-white/30 hover:bg-white/50 opacity-70"
            }`}
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Institution Badge */}
      <div className="absolute bottom-6 left-6 z-30 hidden md:block">
        <div className="text-xs text-emerald-300/70 tracking-widest uppercase">
          Est. 2025 • Cranfield
        </div>
      </div>

      {/* Subtle Navigation Arrows - Only show on hover */}
      <div className="absolute inset-0 z-30 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors duration-300"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors duration-300"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
        <div className="animate-pulse">
          <div className="w-px h-8 bg-linear-to-b from-emerald-300/50 to-transparent mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
