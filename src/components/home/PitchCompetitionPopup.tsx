import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, Lightbulb, ArrowRight } from "lucide-react";

const SESSION_KEY = "pitchCompetitionPopupSeen";

const PitchCompetitionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setIsOpen(false);
    sessionStorage.setItem(SESSION_KEY, "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70"
            onClick={close}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-emerald-200" />
              </div>
              <span className="inline-block bg-white/15 text-white text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-3">
                Applications Open
              </span>
              <h2 className="text-2xl font-bold text-white">
                Pitch Competition
              </h2>
            </div>

            <div className="p-8 text-center">
              <p className="text-gray-600 mb-6">
                Got a big idea for Africa's future? Pitch it to the
                Cranfield Africa Impact Summit community and take your idea
                further.
              </p>
              <Link
                to="/pitch-competition"
                onClick={close}
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PitchCompetitionPopup;
