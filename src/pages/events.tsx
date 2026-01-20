import DefaultLayout from "../layout/DefaultLayout";
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const Events = () => {
  // Event images array
  const eventImages = [
    "/images/event1.jpeg",
    "/images/event2.jpeg",
    "/images/event3.jpeg",
    "/images/event4.jpeg",
    "/images/event5.jpeg",
    "/images/event6.jpeg",
    "/images/event7.jpeg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, eventImages.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);

    // Resume auto play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + eventImages.length) % eventImages.length,
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [eventImages.length]);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % eventImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, [eventImages.length]);

  const pastEvents = [
    {
      id: 1,
      title: "AFRICA INNOVATION LAB - Ideas Mapping Session",
      date: "Friday, November 21, 2025",
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
    },
  ];

  const upcomingEvents = [];

  return (
    <DefaultLayout>
      {/* Hero Section with Overlay - Updated to green branding */}
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
            <div className="max-w-2xl  mx-auto text-center">
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
        {/* Upcoming Events Section - Updated to green branding */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="h-12 w-1 bg-emerald-500 mr-4"></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Upcoming Events
              </h2>
              <p className="text-gray-600 mt-2">
                Future gatherings will be posted here
              </p>
            </div>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Map through upcoming events here */}
            </div>
          ) : (
            <div className="bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-12 text-center border-2 border-dashed border-emerald-200">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                <Calendar className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                More Events Coming Soon!
              </h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                We're planning exciting events and gatherings. Check back
                regularly to stay updated on upcoming opportunities to connect,
                learn, and innovate.
              </p>
              <div className="inline-flex items-center text-emerald-600 font-medium">
                <Clock className="w-5 h-5 mr-2" />
                Stay tuned for announcements
              </div>
            </div>
          )}
        </section>

        {/* Past Events Section - Updated to green branding */}
        <section>
          <div className="flex items-center mb-8">
            <div className="h-12 w-1 bg-gray-400 mr-4"></div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Past Events</h2>
              <p className="text-gray-600 mt-2">
                Relive our previous gatherings and discussions
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className="md:flex">
                  {/* Event Image Carousel - Updated with slider */}
                  <div className="md:w-2/5 relative group">
                    {/* Carousel Container */}
                    <div className="relative h-64 md:h-full overflow-hidden">
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-transparent z-10"></div>

                      {/* Slides Container */}
                      <div
                        className="flex h-full transition-transform duration-700 ease-in-out"
                        style={{
                          transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                      >
                        {eventImages.map((image, index) => (
                          <div
                            key={index}
                            className="w-full h-full flex-shrink-0"
                          >
                            <img
                              src={image}
                              alt={`Event image ${index + 1}`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src =
                                  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                              }}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="inline-block bg-emerald-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg mb-4 font-semibold">
                            Event Completed
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-2">
                            Innovation Lab
                          </h3>
                          <p className="text-emerald-100">
                            Ideas Mapping Session
                          </p>
                        </div>
                      </div>

                      {/* Navigation Buttons */}
                      <button
                        onClick={goToPrevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
                        aria-label="Previous slide"
                      >
                        <ChevronLeft className="w-6 h-6 text-white" />
                      </button>
                      <button
                        onClick={goToNextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
                        aria-label="Next slide"
                      >
                        <ChevronRight className="w-6 h-6 text-white" />
                      </button>

                      {/* Slide Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
                        {eventImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToSlide(index)}
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
                      <div className="absolute bottom-4 right-4 z-30 bg-black/40 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                        {currentSlide + 1} / {eventImages.length}
                      </div>

                      {/* Auto-play Indicator */}
                      <div className="absolute top-4 right-4 z-30">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-3 h-3 rounded-full ${isAutoPlaying ? "bg-emerald-400 animate-pulse" : "bg-gray-400"}`}
                          />
                          <span className="text-xs text-white/80 bg-black/30 px-2 py-1 rounded">
                            {isAutoPlaying ? "Auto" : "Manual"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="md:w-3/5 p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                          {event.organizedBy}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {event.title}
                        </h3>
                        <p className="text-emerald-600 italic mb-4 font-medium">
                          {event.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{event.description}</p>

                    {/* Event Highlights - Updated to green branding */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                        Session Highlights
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {event.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Event Details - Updated to green branding */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                      <div className="flex items-center">
                        <div className="p-3 bg-emerald-50 rounded-lg mr-4">
                          <Calendar className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Date</p>
                          <p className="font-semibold text-gray-900">
                            {event.date}
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
                            {event.time}
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
                            {event.venue}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action - Updated to green branding */}
        <div className="mt-16 bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Want to Stay Updated on Future Events?
          </h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter or follow us on social media to be the
            first to know about upcoming events, workshops, and innovation
            sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300">
              Follow on Social Media
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Events;
