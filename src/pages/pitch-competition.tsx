// PitchCompetition.tsx
import { useState, useEffect, useCallback } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import {
  CheckCircle,
  ExternalLink,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

const APPLICATION_FORM_URL = "https://forms.gle/XMUQJhW8MiZTyojd9";

// Press release pages first, flyers last
const promoImages = [
  {
    src: "/images/partnership-promotional-content/1.jpg",
    alt: "InnoPower x Cranfield Founder Pathway - Press Release, page 1",
  },
  {
    src: "/images/partnership-promotional-content/2.jpg",
    alt: "InnoPower x Cranfield Founder Pathway - Press Release, page 2",
  },
  {
    src: "/images/partnership-promotional-content/innopower-1.png",
    alt: "InnoPower x Cranfield Founder Pathway - Are you a student or recent graduate with a bold idea?",
  },
  {
    src: "/images/partnership-promotional-content/innopower-2.png",
    alt: "InnoPower x Cranfield Founder Pathway - A launchpad for African university entrepreneurs",
  },
];

const PitchCompetition = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((current) =>
      current === null
        ? null
        : (current - 1 + promoImages.length) % promoImages.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? null : (current + 1) % promoImages.length,
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
              <span className="inline-block bg-emerald-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Applications Open
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Pitch <span className="text-emerald-300">Competition</span>
              </h1>
              <p className="text-xl text-gray-200 mb-4">
                The InnoPower &times; Cranfield Founder Pathway is here for
                students and recent graduates with a bold idea.
              </p>
              <div className="flex justify-center items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5" />
                <span>6th August, 2026 &ndash; 24th August, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Are you a student or recent graduate with a bold idea?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The InnoPower &times; Cranfield Founder Pathway is helping
            African university talent transform innovative ideas into
            scalable businesses. Full details, eligibility, and submission
            requirements are on the application form.
          </p>
        </div>

        {/* Promo Images: press release first, flyers last */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
          {promoImages.map((image, index) => (
            <button
              key={image.src}
              onClick={() => setLightboxIndex(index)}
              className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>

        {/* Apply CTA */}
        <div className="max-w-2xl mx-auto bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center">
          <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Ready to apply?
          </h3>
          <p className="text-gray-600 mb-6">
            Fill out the application form to register your interest.
          </p>
          <a
            href={APPLICATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
          >
            Apply Now
            <ExternalLink className="w-4 h-4" />
          </a>
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
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={showNext}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <img
            src={promoImages[lightboxIndex].src}
            alt={promoImages[lightboxIndex].alt}
            className="relative max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-black/50 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
            {lightboxIndex + 1} / {promoImages.length}
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default PitchCompetition;
