import DefaultLayout from "../layout/DefaultLayout";
import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { speakersData } from "../data/speaker";
import { Link } from "react-router-dom";

const Speakers = () => {
  const [showEventModal, setShowEventModal] = useState(false);
  const [centerIndex, setCenterIndex] = useState(-1);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEventModal(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Detect which card is exactly at the center of the screen
  useEffect(() => {
    const updateCenterCard = () => {
      if (!trackRef.current) return;

      const cards = trackRef.current.querySelectorAll(".marquee-card");
      const viewportCenter = window.innerWidth / 2;
      const threshold = 100; // Pixel threshold for "exact center"

      let closestCard = -1;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < minDistance && distance < threshold) {
          minDistance = distance;
          closestCard = index;
        }
      });

      // Only update if we found a card close enough to center
      if (closestCard !== -1) {
        setCenterIndex(closestCard);
      } else {
        setCenterIndex(-1);
      }
    };

    // Update on animation frame for smooth detection
    let animationFrame: number;
    const updateLoop = () => {
      updateCenterCard();
      animationFrame = requestAnimationFrame(updateLoop);
    };

    animationFrame = requestAnimationFrame(updateLoop);

    // Also update on resize
    window.addEventListener("resize", updateCenterCard);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", updateCenterCard);
    };
  }, []);

  // Create tripled array for seamless loop
  const allSpeakers = [...speakersData, ...speakersData, ...speakersData];

  return (
    <DefaultLayout>
      {/* ── Hero with Smooth Continuous Marquee ── */}
      <div className="speakers-hero">
        {/* Single marquee row - all speakers side by side */}
        <div className="marquee-wrapper">
          <div className="marquee-track" ref={trackRef}>
            {allSpeakers.map((speaker, i) => {
              const isCenter = i === centerIndex;

              return (
                <div key={`${speaker.id}-${i}`} className="marquee-card">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className={`marquee-img ${isCenter ? "marquee-img-center" : ""}`}
                  />
                  <div
                    className={`marquee-card-overlay ${isCenter ? "marquee-card-overlay-visible" : ""}`}
                  >
                    <p className="marquee-card-name">{speaker.name}</p>
                    <p className="marquee-card-role">{speaker.role}</p>
                    <p className="marquee-card-org">{speaker.organization}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hero text centered */}
        <div className="hero-text-container">
          <p className="hero-eyebrow">Cranfield Africa Impact Summit 2026</p>
          <h1 className="hero-heading">
            Meet Our <span className="hero-accent">Speakers</span>
          </h1>
          <p className="hero-sub">
            Thought leaders, innovators, and change-makers shaping Africa's
            future gathered in one room.
          </p>
        </div>
      </div>

      {/* ── Speaker Grid ── */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Distinguished Speakers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakersData.map((speaker) => (
            <Link
              to={`/speakers/${speaker.id}`}
              key={speaker.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="aspect-square overflow-hidden relative">
                {speaker.isKeynote && (
                  <span className="absolute top-4 left-4 z-10 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Keynote
                  </span>
                )}
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {speaker.name}
                </h3>
                <p className="text-emerald-600 font-medium text-sm mb-2">
                  {speaker.role}
                </p>
                <p className="text-gray-500 text-sm mb-4">
                  {speaker.organization}
                </p>
                <div className="flex items-center text-emerald-700 font-semibold text-sm group-hover:gap-2 transition-all">
                  View Profile <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Event Modal ── */}
      {showEventModal && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowEventModal(false)}
          />
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn">
            <div className="relative h-48 md:h-56 overflow-hidden shrink-0">
              <img
                src="/images/upcoming-2.jpeg"
                alt="Cranfield Africa Impact Summit 2026"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold">
                May 8, 2026
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                  CRANFIELD-AFRICA IMPACT SUMMIT 2026
                </h2>
                <p className="text-emerald-200 text-xs md:text-sm">
                  Main Summit • Solving Africa's Wicked Problems
                </p>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                Don't Miss Our Main Event!
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                Join us on{" "}
                <span className="font-semibold text-emerald-600">
                  Friday, May 8, 2026
                </span>{" "}
                at Cranfield University for our flagship summit exploring
                AI-driven solutions, innovative energy systems, and sustainable
                development strategies for Africa's most pressing challenges.
              </p>
              <div className="bg-emerald-50 rounded-xl p-4 mb-6 md:mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs md:text-sm text-emerald-700 font-medium">
                      Early Bird Tickets Available
                    </span>
                    <p className="text-xs text-emerald-600 mt-1">
                      Secure your spot today
                    </p>
                  </div>
                  <span className="text-base md:text-lg font-light text-emerald-800">
                    Free
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href="https://www.eventbrite.co.uk/e/solving-africas-wicked-problems-in-poverty-health-energy-tickets-1984427524144?aff=oddtdtcreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 md:px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg text-center transition-all duration-300 flex items-center justify-center gap-2 text-sm md:text-base"
                >
                  Get Tickets on Eventbrite
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
                <button
                  onClick={() => setShowEventModal(false)}
                  className="px-4 md:px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-all duration-300 text-sm md:text-base"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        /* ── Hero Section ── */
        .speakers-hero {
          position: relative;
          width: 100%;
          height: 70vh;
          min-height: 600px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
        }

        /* ── Single Marquee Wrapper ── */
        .marquee-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        /* ── Continuous Side-by-Side Track ── */
        .marquee-track {
          display: flex;
          width: max-content;
          height: 100%;
          animation: marquee-scroll 100s linear infinite;
          will-change: transform;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        /* Keep animation running even on hover */
        .marquee-track:hover {
          animation-play-state: running;
        }

        /* ── Individual Speaker Card ── */
        .marquee-card {
          position: relative;
          width: 280px;
          height: 100%;
          flex-shrink: 0;
          overflow: hidden;
        }

        .marquee-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: brightness(0.5) saturate(0.7);
          transition: filter 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Center card - bright and vibrant */
        .marquee-img-center {
          filter: brightness(1.15) saturate(1.2) !important;
        }

        /* Card overlay - hidden by default */
        .marquee-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            rgba(0, 0, 0, 0.3) 50%,
            transparent 80%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px 24px;
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        /* Center card overlay - visible */
        .marquee-card-overlay-visible {
          opacity: 1;
        }

        .marquee-card-name {
          color: #ffffff;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 6px 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
          transform: translateY(0);
          transition: transform 0.4s ease;
        }

        .marquee-card-overlay:not(.marquee-card-overlay-visible) .marquee-card-name {
          transform: translateY(10px);
        }

        .marquee-card-role {
          color: #6ee7b7;
          font-size: 14px;
          font-weight: 600;
          margin: 0 0 4px 0;
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.8);
        }

        .marquee-card-org {
          color: rgba(255, 255, 255, 0.85);
          font-size: 12px;
          font-weight: 400;
          margin: 0;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
        }

        /* ── Hero Text Container ── */
        .hero-text-container {
          position: relative;
          z-index: 20;
          text-align: center;
          padding: 0 32px;
          max-width: 720px;
          animation: heroFadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) both;
          pointer-events: none;
        }

        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-eyebrow {
          color: #6ee7b7;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 20px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
        }

        .hero-heading {
          color: #ffffff;
          font-size: clamp(2.8rem, 7vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        }

        .hero-accent {
          color: #34d399;
        }

        .hero-sub {
          color: rgba(255, 255, 255, 0.95);
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          line-height: 1.6;
          max-width: 540px;
          margin: 0 auto;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
        }

        /* ── Modal Animation ── */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        /* ── Responsive Design ── */
        @media (max-width: 768px) {
          .marquee-card {
            width: 220px;
          }
          
          .marquee-card-name {
            font-size: 18px;
          }
          
          .marquee-card-role {
            font-size: 13px;
          }
          
          .marquee-card-org {
            font-size: 11px;
          }
          
          .marquee-card-overlay {
            padding: 24px 18px;
          }
          
          .hero-text-container {
            padding: 0 20px;
          }
        }

        @media (max-width: 480px) {
          .marquee-card {
            width: 180px;
          }
          
          .hero-eyebrow {
            font-size: 11px;
            letter-spacing: 0.15em;
          }
          
          .hero-heading {
            font-size: 2.2rem;
          }
        }

        /* Respect user preference for reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </DefaultLayout>
  );
};

export default Speakers;
