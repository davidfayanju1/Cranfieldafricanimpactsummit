import DefaultLayout from "../layout/DefaultLayout";
import { ArrowRight, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { speakersData } from "../data/speaker";
import { Link } from "react-router-dom";

const Speakers = () => {
  const [centerIndex, setCenterIndex] = useState(-1);
  const trackRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null); // Reference to the grid section

  // Search and Pagination States
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  // Filter speakers based on search query
  const filteredSpeakers = speakersData.filter((speaker) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      speaker.name.toLowerCase().includes(searchTerm) ||
      speaker.role.toLowerCase().includes(searchTerm) ||
      speaker.organization.toLowerCase().includes(searchTerm) ||
      (speaker.panel && speaker.panel.toLowerCase().includes(searchTerm))
    );
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentSpeakers = filteredSpeakers.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredSpeakers.length / itemsPerPage);

  // Function to scroll to top of grid section
  const scrollToGridTop = () => {
    if (gridRef.current) {
      const offset = 100; // Offset for header height
      const elementPosition = gridRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle page change with scroll to top
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Small delay to ensure DOM updates before scrolling
    setTimeout(() => {
      scrollToGridTop();
    }, 100);
  };

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
  };

  // Detect which card is exactly at the center of the screen
  useEffect(() => {
    const updateCenterCard = () => {
      if (!trackRef.current) return;

      const cards = trackRef.current.querySelectorAll(".marquee-card");
      const viewportCenter = window.innerWidth / 2;
      const threshold = 100;

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

      if (closestCard !== -1) {
        setCenterIndex(closestCard);
      } else {
        setCenterIndex(-1);
      }
    };

    let animationFrame: number;
    const updateLoop = () => {
      updateCenterCard();
      animationFrame = requestAnimationFrame(updateLoop);
    };

    animationFrame = requestAnimationFrame(updateLoop);
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

      {/* ── Search and Speaker Grid Section ── */}
      <div className="container mx-auto px-4 md:px-8 py-16" ref={gridRef}>
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, role, organization, or panel..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-gray-700 placeholder:text-gray-400"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Search Results Count */}
          {searchQuery && (
            <p className="text-center text-gray-500 mt-3 text-sm">
              Found {filteredSpeakers.length} speaker
              {filteredSpeakers.length !== 1 ? "s" : ""} matching "{searchQuery}
              "
            </p>
          )}
        </div>

        {/* Speaker Grid */}
        {currentSpeakers.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentSpeakers.map((speaker) => (
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
                    {speaker.isSpecialGuest && (
                      <span className="absolute top-4 left-4 z-10 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Special Guest
                      </span>
                    )}
                    {speaker.isModeRator && (
                      <span className="absolute top-4 left-4 z-10 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Moderator
                      </span>
                    )}
                    {speaker.isMC && (
                      <span className="absolute top-4 left-4 z-10 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        MC
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-12">
                <button
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg transition-all ${
                    currentPage === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white border border-gray-200 text-gray-700 hover:bg-emerald-50 hover:border-emerald-300"
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-10 h-10 rounded-lg font-medium transition-all ${
                          currentPage === pageNum
                            ? "bg-emerald-600 text-white shadow-md"
                            : "bg-white border border-gray-200 text-gray-700 hover:bg-emerald-50 hover:border-emerald-300"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() =>
                    handlePageChange(Math.min(currentPage + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg transition-all ${
                    currentPage === totalPages
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white border border-gray-200 text-gray-700 hover:bg-emerald-50 hover:border-emerald-300"
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        ) : (
          // No results state
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No speakers found
            </h3>
            <p className="text-gray-500 mb-4">
              We couldn't find any speakers matching "{searchQuery}"
            </p>
            <button
              onClick={clearSearch}
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Speakers;
