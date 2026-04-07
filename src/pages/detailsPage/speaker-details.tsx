import { useParams, Link } from "react-router-dom";
import { speakersData } from "../../data/speaker";
import {
  ArrowLeft,
  Award,
  Briefcase,
  Linkedin,
  Mic,
  Shield,
  Sparkles,
} from "lucide-react";
import { useState, useEffect } from "react";

// Improved helper function to extract years of experience from bio
const extractYearsOfExperience = (bio: string[]): number | null => {
  const bioText = bio.join(" ");
  // Match patterns like: "over 30 years", "30+ years", "30 years of experience"
  const patterns = [
    /(?:over|more than)?\s*(\d+)\+?\s*(?:years?|yrs?)\s*(?:of\s+experience)?/i,
    /(\d+)\+?\s*(?:years?|yrs?)\s+of\s+experience/i,
    /(\d+)\s*years?/i,
  ];

  for (const pattern of patterns) {
    const matches = bioText.match(pattern);
    if (matches && matches[1]) {
      return parseInt(matches[1]);
    }
  }
  return null;
};

// Improved helper function to extract countries from bio
const extractCountries = (bio: string[]): number | null => {
  const bioText = bio.join(" ");
  const patterns = [
    /(?:across|spanning)\s*(\d+)\+?\s*countries/i,
    /(\d+)\+?\s*countries/i,
  ];

  for (const pattern of patterns) {
    const matches = bioText.match(pattern);
    if (matches && matches[1]) {
      return parseInt(matches[1]);
    }
  }
  return null;
};

const SpeakerDetail = () => {
  const { id } = useParams();
  const speaker = speakersData.find((s) => s.id === id);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState<"bio" | "achievements">("bio");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const yearsExperience = speaker
    ? extractYearsOfExperience(speaker.bio)
    : null;
  const countriesCount = speaker ? extractCountries(speaker.bio) : null;

  if (!speaker) {
    return (
      <div className="pt-40 pb-20 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎤</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Speaker Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            The speaker you're looking for doesn't exist.
          </p>
          <Link
            to="/speakers"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Speakers
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative pt-24 pb-12 overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto px-4 z-10">
          <Link
            to="/speakers"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
            <span>Back to Speakers</span>
          </Link>
        </div>

        <div className="relative container mx-auto px-4 z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl z-10"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl">
                {!isImageLoaded && (
                  <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className={`w-full h-full object-cover transition duration-700 ${isImageLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
                  onLoad={() => setIsImageLoaded(true)}
                />
              </div>
              {speaker.isKeynote && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-1 z-20">
                  <Sparkles className="w-4 h-4" />
                  Keynote Speaker
                </div>
              )}
            </div>

            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
                <Mic className="w-3 h-3 text-emerald-300" />
                <span className="text-white/80 text-sm font-medium">
                  Featured Speaker
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-3 leading-tight">
                {speaker.name}
              </h1>
              <p className="text-xl lg:text-2xl text-emerald-200 font-medium mb-6">
                {speaker.role} at {speaker.organization}
              </p>

              {/* LinkedIn - only show if URL exists */}
              {speaker.linkedin && (
                <div className="flex gap-3 justify-center lg:justify-start">
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition flex items-center justify-center hover:scale-110 transform duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* Stats Cards - only show if data exists */}
            {(yearsExperience || countriesCount) && (
              <div className="flex flex-row gap-4">
                {yearsExperience && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-center min-w-[120px]">
                    <div className="text-2xl font-bold text-white">
                      {yearsExperience}+
                    </div>
                    <div className="text-white/70 text-sm">
                      Years Experience
                    </div>
                  </div>
                )}
                {countriesCount && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-center min-w-[120px]">
                    <div className="text-2xl font-bold text-white">
                      {countriesCount}+
                    </div>
                    <div className="text-white/70 text-sm">Countries</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L1440 120L1440 0C1440 0 1320 40 720 40C120 40 0 0 0 0L0 120Z"
              fill="#f9fafb"
            />
          </svg>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {speaker.panel && (
            <div className="mb-12 animate-fadeInUp">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gradient-to-br from-emerald-600 to-teal-600 md:w-2 justify-center hidden md:block"></div>
                  <div className="p-6 md:p-8 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="bg-emerald-100 rounded-full p-3 shrink-0">
                        <Mic className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                            Session Panel
                          </div>
                          {speaker.isModeRator && (
                            <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-amber-200">
                              <Shield className="w-3 h-3" />
                              Moderator
                            </span>
                          )}
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                          {speaker.panel}
                        </h2>
                        <p className="text-gray-600">
                          Join this insightful session exploring the future of
                          innovation and workforce development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-emerald-500" />
                  Quick Info
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Organization</span>
                    <span className="font-medium text-gray-800">
                      {speaker.organization || "Not specified"}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-500">Role</span>
                    <span className="font-medium text-gray-800">
                      {speaker.role || "Not specified"}
                    </span>
                  </div>
                  {speaker.isKeynote && (
                    <div className="flex justify-between py-2">
                      <span className="text-gray-500">Session Type</span>
                      <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                        Keynote
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
                <div className="flex border-b border-gray-100">
                  <button
                    onClick={() => setActiveTab("bio")}
                    className={`flex-1 px-6 py-4 text-center font-medium transition relative ${
                      activeTab === "bio"
                        ? "text-emerald-600"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Biography
                    {activeTab === "bio" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                    )}
                  </button>
                  {speaker.achievements && speaker.achievements.length > 0 && (
                    <button
                      onClick={() => setActiveTab("achievements")}
                      className={`flex-1 px-6 py-4 text-center font-medium transition relative ${
                        activeTab === "achievements"
                          ? "text-emerald-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      Impact & Achievements
                      {activeTab === "achievements" && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                      )}
                    </button>
                  )}
                </div>

                <div className="p-6 md:p-8">
                  {activeTab === "bio" ? (
                    <div className="space-y-5 text-gray-600 leading-relaxed">
                      {speaker.bio.map((paragraph, idx) => (
                        <p
                          key={idx}
                          className="animate-fadeIn"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {speaker.achievements?.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50/50 to-transparent rounded-xl animate-fadeIn"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          <div className="bg-emerald-500 rounded-full p-1 mt-0.5 shrink-0">
                            <Award className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center shadow-lg">
                <h3 className="text-white text-xl font-bold mb-2">
                  Meet {speaker.name.split(" ")[0]} at CAIS 2026
                </h3>
                <p className="text-emerald-100 mb-6">
                  Don't miss this opportunity to connect with industry leaders
                  and change-makers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.eventbrite.co.uk/e/solving-africas-wicked-problems-in-poverty-health-energy-tickets-1984427524144?aff=oddtdtcreator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-md inline-block"
                  >
                    Register for Event
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default SpeakerDetail;
