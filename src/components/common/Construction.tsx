import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Mail, Calendar } from "lucide-react";

const ConstructionPage = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 pt-32 relative overflow-hidden font-sans">
      {/* Minimal background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <div className="text-center">
          {/* Header */}
          <div className="mb-16">
            <div className="mb-8">
              <div className="h-px w-32 bg-gray-300 mx-auto mb-6" />
              <span className="text-xs tracking-[0.3em] font-medium text-gray-600 uppercase">
                Coming Soon
              </span>
              <div className="h-px w-32 bg-gray-300 mx-auto mt-6" />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-6"
            >
              Refinement
              <span className="block mt-4 text-gray-700">In Progress</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed font-light"
            >
              We are crafting an exceptional digital experience. Our team is
              putting the finishing touches on something truly special.
            </motion.p>
          </div>

          {/* Countdown/Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="inline-flex items-center justify-center space-x-8 mb-8">
              {[
                { label: "Design", value: "90%" },
                { label: "Development", value: "75%" },
                { label: "Testing", value: "60%" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl font-light text-gray-900 mb-2">
                    {item.value}
                  </div>
                  <div className="text-xs tracking-wider text-gray-500 uppercase">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-md mx-auto">
              <div className="h-px bg-gray-200 relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gray-900"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Signup Form */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-md mx-auto mb-20"
          >
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-gray-600 mr-3" />
                <h3 className="text-lg font-medium text-gray-900">
                  Be the first to know
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-8">
                Enter your email to receive exclusive updates on our launch.
              </p>
            </div>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 border border-gray-200 rounded-lg"
              >
                <div className="text-gray-900 mb-2">
                  Thank you for your interest
                </div>
                <div className="text-sm text-gray-600">
                  We'll notify you when we're ready
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-white border border-gray-300 rounded-none focus:outline-none focus:border-gray-900 placeholder-gray-400 text-gray-900 text-center transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 h-full px-6 bg-gray-900 text-white hover:bg-gray-800 transition-colors flex items-center"
                  >
                    <span className="text-sm tracking-wide">Notify Me</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-8 border-t border-gray-200"
          >
            <div className="flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
              <div className="flex items-center mb-4 md:mb-0">
                <Calendar className="w-4 h-4 mr-2" />
                <span>London • Launching Spring 2026</span>
              </div>
              <div className="space-x-6">
                <span className="cursor-pointer hover:text-gray-900 transition-colors">
                  Privacy
                </span>
                <span className="cursor-pointer hover:text-gray-900 transition-colors">
                  Terms
                </span>
                <span className="cursor-pointer hover:text-gray-900 transition-colors">
                  Contact
                </span>
              </div>
            </div>
            <div className="mt-6 text-xs text-gray-500">
              © {new Date().getFullYear()} All rights reserved
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements (Minimal) */}
      <motion.div
        className="absolute top-1/4 right-10 w-64 h-px bg-gray-200"
        animate={{
          opacity: [0.5, 1, 0.5],
          scaleX: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-48 h-px bg-gray-200"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scaleX: [0.6, 1.2, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default ConstructionPage;
