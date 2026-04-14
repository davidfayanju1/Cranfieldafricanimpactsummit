import DefaultLayout from "../layout/DefaultLayout";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { speakersData } from "../data/speaker";
import { Link } from "react-router-dom";

const Speakers = () => {
  const [showEventModal, setShowEventModal] = useState(false);

  // Show event modal on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEventModal(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-emerald-900 to-emerald-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto pt-32 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet Our <span className="text-emerald-300">Speakers</span>
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're curating an exceptional lineup of thought leaders,
              innovators, and change-makers for the Cranfield Africa Impact
              Summit. Get ready to be inspired.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
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

      {/* Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 z-100000 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowEventModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100 animate-fadeIn">
            {/* Event Image */}
            <div className="relative h-48 md:h-56 overflow-hidden shrink-0">
              <img
                src="/images/upcoming-2.jpeg"
                alt="Cranfield Africa Impact Summit 2026"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

              {/* Date Badge */}
              <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold">
                May 8, 2026
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                  CRANFIELD-AFRICA IMPACT SUMMIT 2026
                </h2>
                <p className="text-emerald-200 text-xs md:text-sm">
                  Main Summit • Solving Africa's Wicked Problems
                </p>
              </div>
            </div>

            {/* Modal Body */}
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
                  <div className="text-right">
                    <span className="text-base md:text-lg font-light text-emerald-800">
                      Free
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
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

      {/* Add animation keyframes */}
      <style>{`
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
      `}</style>
    </DefaultLayout>
  );
};

export default Speakers;
