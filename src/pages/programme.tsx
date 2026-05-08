import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DefaultLayout from "../layout/DefaultLayout";
import { scheduleData } from "../data/programme";

// Configuration for the grid
const START_HOUR = 8; // 8 AM - Changed to 8 to accommodate 8:30 registration
const HOUR_HEIGHT = 120; // px per hour
const MINUTE_HEIGHT = HOUR_HEIGHT / 60;

const Programme = () => {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const calculatePosition = (time: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    return (hours - START_HOUR) * HOUR_HEIGHT + minutes * MINUTE_HEIGHT;
  };

  const calculateHeight = (start: string, end: string) => {
    return calculatePosition(end) - calculatePosition(start);
  };

  return (
    <DefaultLayout>
      {/* Hero Section with Studio Background Vibe */}
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900">
        {/* Studio Background Pattern - Subtle grid and lighting effects */}
        <div className="absolute inset-0 opacity-20">
          {/* Main grid pattern */}

          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Diagonal light rays */}
          <div
            className="absolute inset-0"
            style={{
              background: `repeating-linear-gradient(45deg, 
              transparent 0px, 
              transparent 100px, 
              rgba(255,255,255,0.03) 100px, 
              rgba(255,255,255,0.03) 200px)`,
            }}
          />

          {/* Soft gradient overlays for depth */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-emerald-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Small badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 backdrop-blur-sm mb-6">
              <span className="text-emerald-300 text-xs font-medium tracking-wide">
                May 8, 2026
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              CAIS <span className="text-emerald-400">2026</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-emerald-100/80 mb-4 max-w-2xl mx-auto">
              Cranfield Africa Impact Summit
            </p>

            {/* Description */}
            <p className="text-base text-emerald-100/60 max-w-xl mx-auto">
              Shaping Africa's future through innovation, collaboration, and
              sustainable development
            </p>
          </motion.div>

          {/* Decorative elements - studio lighting effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
          <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-teal-500/5 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-green-500/5 blur-2xl pointer-events-none" />
        </div>
      </div>

      {/* Schedule Section - Slightly adjusted spacing */}
      <div className="bg-gray-50 min-h-screen text-gray-900 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8 flex justify-between items-center border-b border-gray-200 pb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                Event Schedule
              </h2>
              <p className="text-gray-500 text-sm">
                Friday, May 8 • Cranfield University
              </p>
            </div>
          </header>

          <div className="relative bg-white rounded-xl border border-gray-200 shadow-lg overflow-x-auto">
            {/* The Grid Header */}
            <div className="flex border-b border-gray-200 bg-white sticky top-0 z-20">
              <div className="w-20 md:w-32 border-r border-gray-200 p-4 text-center text-xs font-bold uppercase text-gray-500">
                Time
              </div>
              <div className="flex-1 p-4 text-sm font-bold text-emerald-600">
                Friday, May 8
              </div>
            </div>

            <div
              className="relative flex"
              style={{ height: `${9 * HOUR_HEIGHT}px` }}
            >
              {/* Time Gutter */}
              <div className="w-20 md:w-32 border-r border-gray-200 bg-gray-50 relative">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full text-right pr-4 text-[10px] font-mono text-gray-500"
                    style={{ top: `${i * HOUR_HEIGHT}px` }}
                  >
                    {START_HOUR + i}:00
                  </div>
                ))}
              </div>

              {/* Event Area */}
              <div className="flex-1 relative overflow-hidden bg-[linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:100%_60px]">
                {/* Horizontal Hour Lines */}
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-full border-b border-gray-200"
                    style={{ top: `${i * HOUR_HEIGHT}px` }}
                  />
                ))}

                {/* The Events */}
                {scheduleData.map((event) => {
                  const top = calculatePosition(event.start);
                  const height = calculateHeight(event.start, event.end);
                  // Determine layout based on available height
                  const isVerySmallEvent = height < 40;

                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onMouseEnter={() => setHoveredEvent(event.id)}
                      onMouseLeave={() => setHoveredEvent(null)}
                      className={`absolute left-2 right-4 rounded-lg border-l-4 cursor-pointer transition-all z-0 hover:z-30 shadow-md ${
                        event.type === "highlight"
                          ? "bg-emerald-50 border-emerald-500 text-emerald-900"
                          : event.type === "panel"
                            ? "bg-blue-50 border-blue-500 text-blue-900"
                            : "bg-gray-50 border-gray-400 text-gray-700"
                      } ${isVerySmallEvent ? "p-1.5" : "p-2"}`}
                      style={{ top: `${top}px`, height: `${height - 4}px` }}
                    >
                      <div className="flex flex-col h-full overflow-hidden">
                        {isVerySmallEvent ? (
                          // Compact layout for very short events (10-15 min)
                          <>
                            <span className="text-[9px] font-semibold opacity-70 uppercase tracking-wide leading-none">
                              {event.start} - {event.end}
                            </span>
                            <h4 className="font-bold text-[10px] leading-tight mt-0.5 line-clamp-2">
                              {event.title}
                            </h4>
                          </>
                        ) : (
                          // Normal layout for longer events
                          <>
                            <span className="text-[10px] font-bold opacity-70 mb-0.5 uppercase tracking-wider">
                              {event.start} - {event.end}
                            </span>
                            <h4 className="font-bold text-sm md:text-base leading-tight">
                              {event.title}
                            </h4>
                            {/* Additional details only for taller cards */}
                            {height > 60 && (
                              <p className="text-xs mt-1 opacity-60 line-clamp-2">
                                {event.details}
                              </p>
                            )}
                          </>
                        )}
                      </div>

                      <AnimatePresence>
                        {hoveredEvent === event.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute left-0 -bottom-2 translate-y-full w-80 bg-white border border-gray-200 p-4 rounded-xl shadow-2xl z-50 pointer-events-none"
                          >
                            <p className="text-emerald-600 text-[10px] font-black uppercase mb-1">
                              Session Details
                            </p>
                            <p className="text-sm font-bold text-gray-900 mb-2">
                              {event.title}
                            </p>
                            <div className="h-px bg-gray-200 my-2" />
                            <p className="text-xs text-gray-600 mb-2">
                              {event.details}
                            </p>
                            <div className="h-px bg-gray-200 my-2" />
                            <p className="text-xs text-gray-700">
                              <span className="font-semibold">Speakers:</span>{" "}
                              {event.speakers}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Programme;
