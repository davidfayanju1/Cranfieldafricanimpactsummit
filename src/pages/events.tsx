import DefaultLayout from "../layout/DefaultLayout";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Camera,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

// Define types
type EventType = "workshop" | "social" | "summit";

interface Event {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  dateObj: Date;
  time: string;
  venue: string;
  description: string;
  organizedBy: string;
  tagline: string;
  highlights: string[];
  image: string;
  images?: string[];
  category: EventType;
  featured: boolean;
}

type FilterType = "all" | "upcoming" | "past";

// Component for Event Card (Grid View)
const EventCard = ({
  event,
  onOpenModal,
}: {
  event: Event;
  onOpenModal: (event: Event) => void;
}) => {
  const isEventPassed = (dateString: string): boolean => {
    if (dateString.includes("TBD")) return false;
    const eventDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate < today;
  };

  const isPast = isEventPassed(event.date);
  const isTBD = event.date.includes("TBD");

  return (
    <div
      onClick={() => onOpenModal(event)}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 h-full flex flex-col"
    >
      {/* Image Container - Fixed height */}
      <div className="relative h-56 flex-shrink-0 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
          }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {event.featured && (
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Featured
            </span>
          )}
          {isPast ? (
            <span className="bg-gray-800/90 backdrop-blur-sm text-gray-200 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Camera className="w-3 h-3" />
              Past Event
            </span>
          ) : isTBD ? (
            <span className="bg-purple-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Coming Soon
            </span>
          ) : (
            <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              Upcoming
            </span>
          )}
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full">
            {event.category}
          </span>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-xl mb-1">{event.title}</h3>
          <p className="text-emerald-200 text-sm">{event.subtitle}</p>
        </div>
      </div>

      {/* Content - Flexible to fill remaining space */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Date and Time */}
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" />
            <span className="line-clamp-1">{event.date}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" />
            <span className="line-clamp-1">{event.time}</span>
          </div>
        </div>

        {/* Venue */}
        <div className="flex items-start mb-4">
          <MapPin className="w-4 h-4 mr-2 text-emerald-500 mt-1 flex-shrink-0" />
          <span className="text-gray-600 text-sm line-clamp-2">
            {event.venue}
          </span>
        </div>

        {/* Spacer to push content to bottom */}
        <div className="flex-grow"></div>

        {/* View Details Button */}
        <div className="flex items-center justify-end pt-4 border-t border-gray-100">
          <span className="text-emerald-600 text-sm font-medium group-hover:translate-x-2 transition-transform flex items-center gap-1">
            View Details
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );
};

// Component for Event Row (List View)
const EventRow = ({
  event,
  onOpenModal,
}: {
  event: Event;
  onOpenModal: (event: Event) => void;
}) => {
  const isEventPassed = (dateString: string): boolean => {
    if (dateString.includes("TBD")) return false;
    const eventDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate < today;
  };

  const isPast = isEventPassed(event.date);

  return (
    <div
      onClick={() => onOpenModal(event)}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-emerald-200"
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/4 h-48 md:h-auto relative overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-transparent"></div>

          {/* Badge */}
          {event.featured && (
            <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="md:w-3/4 p-6">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {event.title}
              </h3>
              <p className="text-emerald-600 font-medium">{event.subtitle}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                isPast
                  ? "bg-gray-100 text-gray-600"
                  : "bg-emerald-100 text-emerald-700"
              }`}
            >
              {isPast ? "Past Event" : "Upcoming"}
            </span>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2 text-emerald-500" />
              {event.date}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-2 text-emerald-500" />
              {event.time}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-2 text-emerald-500" />
              {event.venue}
            </div>
          </div>

          <div className="flex items-center justify-end pt-4 border-t border-gray-100">
            <span className="text-emerald-600 text-sm font-medium group-hover:translate-x-2 transition-transform flex items-center gap-1">
              View Details
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for Single Image Display in Modal
const SingleImageDisplay = ({ event }: { event: Event }) => (
  <div className="relative h-96 overflow-hidden">
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-full object-cover"
      style={{ objectPosition: "center 30%" }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-8 left-8 right-8">
      <span className="inline-block bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
        {event.organizedBy}
      </span>
      <h2 className="text-3xl font-bold text-white mb-2">{event.title}</h2>
      <p className="text-emerald-200 text-lg">{event.subtitle}</p>
    </div>
  </div>
);

// Component for Multiple Images Carousel Display in Modal
const MultipleImagesDisplay = ({
  event,
  currentSlide,
  onPrevSlide,
  onNextSlide,
  onGoToSlide,
}: {
  event: Event;
  currentSlide: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onGoToSlide: (index: number) => void;
}) => (
  <div className="relative h-96 overflow-hidden group">
    {/* Slides Container */}
    <div
      className="flex h-full transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {event.images?.map((image: string, index: number) => (
        <div key={index} className="w-full h-full flex-shrink-0">
          <img
            src={image}
            alt={`Event image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none"></div>

    {/* Content */}
    <div className="absolute bottom-8 left-8 right-8 z-20">
      <span className="inline-block bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
        {event.organizedBy}
      </span>
      <h2 className="text-3xl font-bold text-white mb-2">{event.title}</h2>
      <p className="text-emerald-200 text-lg">{event.subtitle}</p>
    </div>

    {/* Navigation Buttons */}
    <button
      title="Previous slide"
      onClick={onPrevSlide}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
    >
      <ChevronLeft className="w-6 h-6 text-white" />
    </button>
    <button
      title="Next slide"
      onClick={onNextSlide}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
    >
      <ChevronRight className="w-6 h-6 text-white" />
    </button>

    {/* Slide Indicators */}
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
      {event.images?.map((_: string, index: number) => (
        <button
          key={index}
          onClick={() => onGoToSlide(index)}
          className={`transition-all duration-300 rounded-full ${
            index === currentSlide
              ? "w-8 h-2 bg-emerald-400"
              : "w-2 h-2 bg-white/60 hover:bg-white"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>

    {/* Slide Counter */}
    <div className="absolute top-4 right-4 z-30 bg-black/50 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full flex items-center gap-2">
      <Camera className="w-4 h-4" />
      {currentSlide + 1} / {event.images?.length || 0}
    </div>
  </div>
);

const Events = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [viewMode] = useState<"grid" | "list">("grid");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  // Auto slide functionality for the selected event
  useEffect(() => {
    if (!isAutoPlaying || !showEventModal || !selectedEvent?.images) return;

    const interval = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % (selectedEvent.images?.length || 1),
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, showEventModal, selectedEvent]);

  // Reset slide when modal opens with new event
  useEffect(() => {
    if (showEventModal) {
      setCurrentSlide(0);
      setIsAutoPlaying(true);
    }
  }, [showEventModal, selectedEvent]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const goToPrevSlide = useCallback(() => {
    if (!selectedEvent?.images) return;
    setCurrentSlide(
      (prev) =>
        (prev - 1 + (selectedEvent.images?.length || 0)) %
        (selectedEvent.images?.length || 1),
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [selectedEvent]);

  const goToNextSlide = useCallback(() => {
    if (!selectedEvent?.images) return;
    setCurrentSlide((prev) => (prev + 1) % (selectedEvent.images?.length || 1));
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [selectedEvent]);

  // Helper function to check if an event date has passed
  const isEventPassed = (dateString: string): boolean => {
    if (dateString.includes("TBD")) return false;
    const eventDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate < today;
  };

  // All events data - each event can have its own images array
  const allEvents: Event[] = [
    {
      id: 1,
      title: "AFRICA INNOVATION LAB",
      subtitle: "Ideas Mapping Session",
      date: "Friday, November 21, 2025",
      dateObj: new Date("2025-11-21"),
      time: "6:30 PM",
      venue: "Building 111 Lecture Room 2",
      description:
        "A high-energy session designed to identify real challenges across African countries, map existing solutions, and spark innovation through collective brainstorming.",
      organizedBy: "Cranfield Africa Impact Summit Society",
      tagline: "Mapping Problems → Connecting Solutions → Inspiring Impact",
      highlights: [
        "Identify real challenges faced across African countries",
        "Map solutions that exist in other regions",
        "Spark innovation through collective brainstorming",
        "Build ideas for research, entrepreneurship & impact projects",
      ],
      image: "/images/event1.jpeg",
      images: [
        "/images/event1.jpeg",
        "/images/event2.jpeg",
        "/images/event3.jpeg",
        "/images/event4.jpeg",
        "/images/event5.jpeg",
        "/images/event6.jpeg",
        "/images/event7.jpeg",
      ],
      category: "workshop",
      featured: false,
    },
    {
      id: 2,
      title: "AfricaEnds Socials",
      subtitle: "Jollof & Tea",
      date: "Friday, February 13, 2026",
      dateObj: new Date("2026-02-13"),
      time: "6:00 PM",
      venue: "CSA Lounge",
      description:
        "A relaxed evening of networking, cultural exchange, and great food. No pens, no notebooks—just good mood, Jollof rice, tea, and meaningful conversations.",
      organizedBy: "Cranfield Africa Impact Society",
      tagline: "#Meets #Network #Jollof&Tea #Chill",
      highlights: [
        "Network with like-minded professionals",
        "Enjoy authentic Jollof rice and tea",
        "Relaxed atmosphere with no formal agenda",
        "Connect with the Africa Impact community",
      ],
      image: "/images/social_image1.jpeg",
      images: [
        "/images/social_image1.jpeg",
        "/images/social_image3.jpeg",
        "/images/social_image4.jpeg",
        "/images/social_image5.jpeg",
        "/images/social_image6.jpeg",
        "/images/social_image7.jpeg",
        "/images/social_image8.jpeg",
      ],
      category: "social",
      featured: false,
    },
    {
      id: 3,
      title: "CRANFIELD-AFRICA IMPACT SUMMIT 2026",
      subtitle: "Mentorship Circle",
      date: "Friday, March 6, 2026",
      dateObj: new Date("2026-03-06"),
      time: "6:00 PM",
      venue: "Online: Microsoft Teams",
      description:
        "Developing Tech Solutions for Impact in Emerging Markets. Join us for an exclusive session with Lillian Awuro, Fintech & Payments Expert and Former Mastercard (EMEA) leader.",
      organizedBy: "Cranfield Africa Impact Summit Society",
      tagline: "Investing in Impact, Transforming Africa • #CAIS2026",
      highlights: [
        "Design strategies for tech solutions in emerging markets",
        "Learn about payment access and financial inclusion in Africa",
        "Connect with Lillian Awuro, Fintech & Payments Expert",
        "Explore intersection of finance, technology & social impact",
        "Network with professionals in the African tech ecosystem",
      ],
      image: "/images/upcoming-3.jpeg",
      category: "summit",
      featured: true,
    },
    {
      id: 4,
      title: "CRANFIELD-AFRICA IMPACT SUMMIT 2026",
      subtitle: "Main Summit",
      date: "Fri, 8 March, 2026",
      dateObj: new Date("2026-05-08"),
      time: "9:00 AM",
      venue: "Cranfield University",
      description:
        "From Research to Impact: Solving Africa's Wicked Problems in Health, Energy & Innovation through AI, Capital and Policy.",
      organizedBy: "Cranfield Africa Impact Summit Society",
      tagline: "From Research to Impact • #CAIS2026",
      highlights: [
        "Explore AI-driven solutions for healthcare challenges in Africa",
        "Discuss innovative energy storage and renewable energy systems",
        "Bridge the gap between policy and capital for sustainable development",
        "Connect with leading researchers, industry experts, and investors",
        "Collaborative workshops on wicked problems in health and energy",
        "Networking opportunities with African innovation leaders",
      ],
      image: "/images/upcoming-2.jpeg",
      category: "summit",
      featured: true,
    },
  ];

  // Sort events: upcoming first, then by date (newest first)
  const sortedEvents = [...allEvents].sort((a, b) => {
    // Check if dates are TBD
    const aIsTBD = a.date.includes("TBD");
    const bIsTBD = b.date.includes("TBD");

    // TBD events should come last
    if (aIsTBD && !bIsTBD) return 1;
    if (!aIsTBD && bIsTBD) return -1;

    // Check if events are upcoming or past
    const aIsPast = isEventPassed(a.date);
    const bIsPast = isEventPassed(b.date);

    // Upcoming events come before past events
    if (!aIsPast && bIsPast) return -1;
    if (aIsPast && !bIsPast) return 1;

    // If both are upcoming, sort by date (closest first)
    if (!aIsPast && !bIsPast) {
      return a.dateObj.getTime() - b.dateObj.getTime();
    }

    // If both are past, sort by date (most recent first)
    return b.dateObj.getTime() - a.dateObj.getTime();
  });

  // Filter events based on selected filter
  const getFilteredEvents = (): Event[] => {
    if (activeFilter === "all") return sortedEvents;
    if (activeFilter === "upcoming")
      return sortedEvents.filter(
        (event) => !isEventPassed(event.date) && !event.date.includes("TBD"),
      );
    return sortedEvents.filter((event) => isEventPassed(event.date));
  };

  const filteredEvents = getFilteredEvents();

  // Open event modal
  const openEventModal = (event: Event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  return (
    <DefaultLayout>
      {/* Hero Section - Original Version */}
      <div className="relative h-96 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-transparent"></div>
        </div>

        <div className="relative pt-34 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Events & <span className="text-emerald-300">Gatherings</span>
              </h1>
              <p className="text-xl text-gray-200 mb-6">
                Join us for transformative experiences that spark innovation,
                foster collaboration, and drive impact across Africa.
              </p>
              <div className="flex justify-center items-center space-x-2 text-gray-300">
                <Clock className="w-6 h-6" />
                <span>Stay tuned for upcoming events</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Filter Tabs */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-full">
            {(["all", "upcoming", "past"] as FilterType[]).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)} Events
              </button>
            ))}
          </div>
        </div>

        {/* Events Display */}
        {filteredEvents.length > 0 ? (
          viewMode === "grid" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onOpenModal={openEventModal}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredEvents.map((event) => (
                <EventRow
                  key={event.id}
                  event={event}
                  onOpenModal={openEventModal}
                />
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              No Events Found
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {activeFilter === "upcoming"
                ? "No upcoming events at the moment. Check back later!"
                : activeFilter === "past"
                  ? "No past events to display."
                  : "No events available at this time."}
            </p>
            <button
              onClick={() => setActiveFilter("all")}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Events
            </button>
          </div>
        )}
      </div>

      {/* Event Details Modal */}
      {showEventModal && selectedEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70"
            onClick={() => setShowEventModal(false)}
          ></div>

          {/* Modal */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Image Section - Use multiple images if available, otherwise single image */}
              {selectedEvent.images ? (
                <MultipleImagesDisplay
                  event={selectedEvent}
                  currentSlide={currentSlide}
                  onPrevSlide={goToPrevSlide}
                  onNextSlide={goToNextSlide}
                  onGoToSlide={goToSlide}
                />
              ) : (
                <SingleImageDisplay event={selectedEvent} />
              )}

              {/* Details Section */}
              <div className="p-8">
                {/* Description */}
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  {selectedEvent.description}
                </p>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                    Session Highlights
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedEvent.highlights.map(
                      (highlight: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Event Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center">
                    <div className="p-3 bg-emerald-50 rounded-lg mr-4">
                      <Calendar className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-semibold text-gray-900">
                        {selectedEvent.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="p-3 bg-emerald-50 rounded-lg mr-4">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Time</p>
                      <p className="font-semibold text-gray-900">
                        {selectedEvent.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="p-3 bg-emerald-50 rounded-lg mr-4">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Venue</p>
                      <p className="font-semibold text-gray-900">
                        {selectedEvent.venue}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setShowEventModal(false)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Events;
