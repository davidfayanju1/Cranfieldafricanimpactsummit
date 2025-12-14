import { useState, useEffect } from "react";

const AboutHero = () => {
  const [, setHasMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image - Single powerful image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1755705152396-4b719047af56?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
            filter: "brightness(0.7) contrast(1.1)",
          }}
        >
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-linear-to-b from-gray-900/60 via-gray-900/40 to-gray-900/80"></div>
        </div>
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto w-full text-center">
          {/* "Our Story" */}
          <div className="mb-6">
            <span className="text-emerald-300 text-lg tracking-widest uppercase font-light">
              Our Story
            </span>
          </div>

          {/* Large Main Heading */}
          <div className="mb-6">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-normal text-white">
              Investing in Impact,
              <br />
              <span className="text-emerald-300 font-light">
                Transforming Africa.
              </span>
            </h1>
          </div>

          {/* Smaller Subtext */}
          <div className="max-w-2xl mx-auto mb-10">
            <p className="text-lg text-gray-200 font-light">
              The Cranfield-Africa Impact Summit is a convergence of
              visionaries, innovators, and leaders dedicated to unlocking the
              immense potential of the African continent.
            </p>
          </div>

          {/* Simple CTA - Centered */}
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-all duration-300">
              Register Now
            </button>
            <button className="px-8 py-3 bg-transparent border border-white/30 hover:border-white text-white font-medium rounded-lg transition-all duration-300">
              View Agenda
            </button>
          </div>

          {/* Subtle Brand Note */}
          <div className="mt-16 pt-6 border-t border-white/10 mx-auto max-w-md">
            <p className="text-white/50 text-sm font-light">
              Cranfield Africa Impact Summit • 2025
            </p>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-px h-8 bg-linear-to-b from-white/80 via-white/40 to-transparent mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
