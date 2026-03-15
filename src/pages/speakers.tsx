import DefaultLayout from "../layout/DefaultLayout";
import {
  Mic2,
  Calendar,
  Bell,
  ArrowRight,
  Clock,
  MapPin,
  Trophy,
} from "lucide-react";
import { useState, useEffect } from "react";

const Speakers = () => {
  const [notifyCount, setNotifyCount] = useState(0);
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
      <div className="relative bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto pt-[8rem] px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-emerald-700/30 backdrop-blur-sm text-emerald-200 px-4 py-2 rounded-full mb-6">
              <Mic2 className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
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
        {/* Upcoming Event Spotlight */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-4">
              <Calendar className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                Mark Your Calendar
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Us at the Main Event
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While we finalize our speaker lineup, secure your spot at the
              Cranfield Africa Impact Summit 2026.
            </p>
          </div>

          {/* Event Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Event Image */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src="/images/upcoming-2.jpeg"
                  alt="Cranfield Africa Impact Summit 2026"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-transparent"></div>

                {/* Featured Badge */}
                <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  Featured Event
                </div>
              </div>

              {/* Event Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  CRANFIELD-AFRICA IMPACT SUMMIT 2026
                </h3>
                <p className="text-emerald-600 font-medium mb-4">
                  Solving Africa's Wicked Problems
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5 text-emerald-500" />
                    <span>Friday, May 8, 2026</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-emerald-500" />
                    <span>9:00 AM - 6:00 PM GMT</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                    <span>Cranfield University, UK</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  Join us for our flagship summit exploring AI-driven solutions,
                  innovative energy systems, and sustainable development
                  strategies for Africa's most pressing challenges.
                </p>

                <div className="bg-emerald-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-semibold text-emerald-800">
                        Early Bird Tickets
                      </span>
                      <p className="text-xs text-emerald-600 mt-1">
                        Limited availability
                      </p>
                    </div>
                    <span className="text-xl font-light text-emerald-800">
                      Free
                    </span>
                  </div>
                </div>

                <a
                  href="https://www.eventbrite.co.uk/e/solving-africas-wicked-problems-in-poverty-health-energy-tickets-1984427524144?aff=oddtdtcreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-300 gap-2 group"
                >
                  Get Tickets on Eventbrite
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Speakers Coming Soon Section */}
        <div className="relative bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-12 text-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="relative">
            <div className="inline-flex p-4 bg-emerald-100 rounded-full mb-6">
              <Mic2 className="w-8 h-8 text-emerald-600" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Speaker Lineup Coming Soon
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We're finalizing conversations with exceptional thought leaders
              from across Africa and beyond. The full speaker lineup will be
              announced in the coming weeks.
            </p>

            {/* Timeline Indicator */}
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-500">
                  Confirming Speakers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                <span className="text-sm text-gray-500">Announcing Soon</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowEventModal(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                <Calendar className="w-4 h-4" />
                View Event Details
              </button>

              <button
                onClick={() => setNotifyCount(notifyCount + 1)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-emerald-200 hover:border-emerald-300 text-emerald-700 font-medium rounded-lg transition-colors duration-300"
              >
                <Bell className="w-4 h-4" />
                Get Speaker Alerts
              </button>
            </div>

            {notifyCount > 0 && (
              <p className="mt-4 text-sm text-emerald-600 animate-pulse">
                ✨ Thanks! We'll notify you when speakers are announced.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Event Modal */}
      {showEventModal && (
        <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowEventModal(false)}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100 animate-fadeIn">
            {/* Event Image */}
            <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
              <img
                src="/images/upcoming-2.jpeg"
                alt="Cranfield Africa Impact Summit 2026"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

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
