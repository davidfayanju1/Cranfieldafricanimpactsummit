import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DefaultLayout from "../layout/DefaultLayout";

// Configuration for the grid
const START_HOUR = 8; // 8 AM
const HOUR_HEIGHT = 120; // px per hour
const MINUTE_HEIGHT = HOUR_HEIGHT / 60;

const scheduleData = [
  {
    id: 1,
    start: "08:30",
    end: "09:00",
    title: "Registration & Networking",
    details: "Arrival, check-in, informal networking",
    speakers: "All participants",
    type: "break",
  },
  {
    id: 2,
    start: "09:00",
    end: "09:10",
    title: "Opening & Welcome",
    details: "Summit objectives, overview of the day",
    speakers: "Host / MC",
    type: "highlight",
  },
  {
    id: 3,
    start: "09:10",
    end: "09:20",
    title: "Welcome Address",
    details: "Cranfield University",
    speakers: "Pro Vice-Chancellor",
    type: "highlight",
  },
  {
    id: 4,
    start: "09:20",
    end: "09:35",
    title: "Goodwill Message",
    details: "Patron",
    speakers: "Thelma Ekiyor - International CEO Women for Women Intl.",
    type: "highlight",
  },
  {
    id: 5,
    start: "09:35",
    end: "09:55",
    title: "Keynote Address",
    details: "Beyond Aid: Who Funds Africa's Future?",
    speakers: "Mojisola Hunponu-Wusu - President Woodhall Capital",
    type: "highlight",
  },
  {
    id: 6,
    start: "09:55",
    end: "10:40",
    title: "Panel 1: Solutions",
    details:
      "Why Africa's Solutions Don't Scale and What Research, Policy, and Practice Are Missing",
    speakers:
      "Dr. Jennifer Daniel, Dr. Inyene Nkanta, Edidiong Uwemakpan, Dr May Sule, Dr Fred Amonya",
    type: "panel",
  },
  {
    id: 7,
    start: "10:40",
    end: "10:50",
    title: "Pitch Session",
    details: "Pitch 1 & 2 (2 × 5 mins)",
    speakers: "Desmond Evurani & Mayowa",
    type: "breakout",
  },
  {
    id: 8,
    start: "10:50",
    end: "11:05",
    title: "Coffee Break & Networking",
    details: "Refreshments & connections",
    speakers: "All",
    type: "break",
  },
  {
    id: 9,
    start: "11:05",
    end: "11:15",
    title: "Research Presentation",
    details: "Mitigating Conflict and Climate Obstacles to Africa's Potential",
    speakers: "Dr Colin D. Robinson - Kings College London",
    type: "breakout",
  },
  {
    id: 10,
    start: "11:15",
    end: "12:00",
    title: "Panel 2: AI Hype",
    details:
      "Can AI Solve Africa's Wicked Problems or Is the Hype Ahead of Reality?",
    speakers:
      "Lillian Awuor, Kayode Adeniyi, Ayantola Alayande, Dr Desmond Bisandu",
    type: "panel",
  },
  {
    id: 11,
    start: "12:00",
    end: "12:10",
    title: "Research Presentation",
    details: "Know Your BloodLine: Sickle Cell Genetic Inheritance",
    speakers: "Mary Adeturinmo - Imperial College",
    type: "breakout",
  },
  {
    id: 12,
    start: "12:10",
    end: "12:55",
    title: "Breakout Sessions",
    details:
      "A: AI, Data & Healthcare | B: Energy Access Financing | C: Skills & Workforce Innovation",
    speakers: "Various Experts",
    type: "breakout",
  },
  {
    id: 13,
    start: "12:55",
    end: "13:00",
    title: "Pitch 3",
    details: "Pitch Your Wicked Solution",
    speakers: "Mary Wambugu (University of Leeds)",
    type: "breakout",
  },
  {
    id: 14,
    start: "13:00",
    end: "13:20",
    title: "Special Presentation",
    details: "Africapitalism - Rethinking Capitalism for Africa",
    speakers:
      "Prof. Kenneth Amaeshi - Chair in Business and Sustainable Development",
    type: "highlight",
  },
  {
    id: 15,
    start: "13:20",
    end: "14:20",
    title: "Lunch Break",
    details: "Networking & Showcases",
    speakers: "All",
    type: "break",
  },
  {
    id: 16,
    start: "14:20",
    end: "14:30",
    title: "Research Presentation",
    details: "Mycotoxins in Africa",
    speakers: "Dr Carol Verheecke-Vaesse - Cranfield University",
    type: "breakout",
  },
  {
    id: 17,
    start: "14:30",
    end: "15:15",
    title: "Panel 3: Funding",
    details:
      "Beyond Aid: Who Funds Africa's Future? (Impact Investment, Domestic Capital, Sovereign Funds)",
    speakers:
      "Mojisola Hunponu-Wusu, Ade Ayeyemi, Prof. Kenneth Amaeshi, Olu Omoyele",
    type: "panel",
  },
  {
    id: 18,
    start: "15:15",
    end: "15:20",
    title: "Research Presentation",
    details: "Clean Cooling",
    speakers: "Dr Natalia Falagán - Cranfield University",
    type: "breakout",
  },
  {
    id: 19,
    start: "15:20",
    end: "15:30",
    title: "Pitch 4 & 5",
    details: "Pitch Your Wicked Solution",
    speakers: "Nadjette and Crystal",
    type: "breakout",
  },
  {
    id: 20,
    start: "15:30",
    end: "15:45",
    title: "Reflections & Takeaways",
    details: "Synthesis of insights from panels, breakouts, and discussions",
    speakers: "Moderator / Selected Speakers",
    type: "breakout",
  },
  {
    id: 21,
    start: "15:45",
    end: "16:00",
    title: "Closing Remarks",
    details: "Summary, acknowledgements, next steps",
    speakers: "Host / Organisers",
    type: "highlight",
  },
  {
    id: 22,
    start: "16:00",
    end: "17:00",
    title: "Networking & Dinner",
    details: "Strategic networking, relationship building",
    speakers: "All participants",
    type: "break",
  },
];

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
                  const isSmallEvent = height < 50;

                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onMouseEnter={() => setHoveredEvent(event.id)}
                      onMouseLeave={() => setHoveredEvent(null)}
                      className={`absolute left-2 right-4 rounded-lg border-l-4 p-2 cursor-pointer transition-all z-0 hover:z-30 shadow-md ${
                        event.type === "highlight"
                          ? "bg-emerald-50 border-emerald-500 text-emerald-900"
                          : event.type === "panel"
                            ? "bg-blue-50 border-blue-500 text-blue-900"
                            : "bg-gray-50 border-gray-400 text-gray-700"
                      }`}
                      style={{ top: `${top}px`, height: `${height - 4}px` }}
                    >
                      <div className="flex flex-col h-full overflow-hidden">
                        <span className="text-[10px] font-bold opacity-70 mb-0.5 uppercase tracking-wider">
                          {event.start} - {event.end}
                        </span>

                        {isSmallEvent ? (
                          <h4 className="font-bold text-xs leading-tight truncate">
                            {event.title}
                          </h4>
                        ) : (
                          <>
                            <h4 className="font-bold text-sm md:text-base leading-tight">
                              {event.title}
                            </h4>
                            {height > 80 && (
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
