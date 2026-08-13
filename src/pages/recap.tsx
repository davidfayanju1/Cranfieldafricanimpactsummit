// Recap.tsx
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import DefaultLayout from "../layout/DefaultLayout";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  { src: "/images/summit-images/summit35.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit37.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit39.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit41.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit42.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit45.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit48.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit52.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit55.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit56.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit60.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit62.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit65.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit71.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit-cover.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit-main.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit1.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit2.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit3.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit4.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit5.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit6.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit7.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit8.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit9.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit10.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit11.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit13.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit14.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit15.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit18.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit20.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit21.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit23.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit26.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit27.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit29.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit30.jpg", alt: "CAIS2026 Summit" },
  { src: "/images/summit-images/summit31.jpg", alt: "CAIS2026 Summit" },
];

const Recap = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((current) =>
      current === null
        ? null
        : (current - 1 + galleryImages.length) % galleryImages.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % galleryImages.length,
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/images/summit-images/summit-cover.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-transparent"></div>
        </div>

        <div className="relative pt-34 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                CAIS2026 <span className="text-emerald-300">Recap</span>
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                Relive the highlights, sessions, and connections from the
                Cranfield Africa Impact Summit 2026.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Gallery CTA */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Photo Grid - Masonry */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 md:gap-4 [column-fill:balance]">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.src}
              onClick={() => setLightboxIndex(index)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: Math.min((index % 8) * 0.06, 0.4),
                ease: "easeOut",
              }}
              className="group relative block w-full mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/90"
            onClick={closeLightbox}
          ></div>

          <button
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={showPrev}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={showNext}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="relative max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Recap;
