import { useState, useEffect } from "react";

const Mission = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2304d399' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-emerald-500"></div>
                <span className="text-emerald-600 text-sm tracking-widest uppercase font-medium">
                  Our Purpose
                </span>
                <div className="w-12 h-px bg-emerald-500"></div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Our Mission & Story
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Founded in 2025, we exist to create meaningful impact across
                Africa through leadership, innovation, and strategic
                collaboration.
              </p>
            </div>

            {/* Mission Statement Card */}
            <div
              className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 transform transition-all duration-700 ${
                hasMounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="flex items-start gap-6">
                <div className="hidden md:block">
                  <div className="w-4 h-24 bg-emerald-500 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Our Mission
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-gray-700 leading-relaxed">
                      To catalyze sustainable transformation across Africa by
                      connecting visionary leaders, fostering innovative
                      solutions, and building strategic partnerships that drive
                      economic growth, social progress, and environmental
                      stewardship.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Story */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Our Story
              </h2>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Founding Story */}
                <div
                  className={`space-y-6 transform transition-all duration-700 delay-300 ${
                    hasMounted
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-10 opacity-0"
                  }`}
                >
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <div className="text-emerald-600 text-lg font-semibold mb-2">
                      Founded 2025
                    </div>
                    <p className="text-gray-700">
                      The Cranfield Africa Impact Summit was born from a simple
                      yet powerful realization: Africa's potential remains
                      largely untapped due to fragmented efforts and lack of
                      coordinated leadership platforms.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="text-gray-800 text-lg font-semibold mb-2">
                      The Vision
                    </div>
                    <p className="text-gray-700">
                      Our founders envisioned a premier continental platform
                      where Africa's brightest minds could converge,
                      collaborate, and create actionable strategies for
                      sustainable development.
                    </p>
                  </div>

                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <div className="text-emerald-600 text-lg font-semibold mb-2">
                      The First Summit
                    </div>
                    <p className="text-gray-700">
                      In 2025, we successfully hosted our inaugural summit,
                      bringing together 500+ leaders from 30 African nations,
                      resulting in 15 strategic partnerships and $50M in
                      committed investments.
                    </p>
                  </div>
                </div>

                {/* Visual Timeline */}
                <div
                  className={`transform transition-all duration-700 delay-500 ${
                    hasMounted
                      ? "translate-x-0 opacity-100"
                      : "translate-x-10 opacity-0"
                  }`}
                >
                  <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>

                    {/* Timeline Items */}
                    <div className="space-y-12 relative">
                      {[
                        {
                          year: "2025",
                          title: "Foundation",
                          desc: "Summit concept developed and founding team assembled",
                        },
                        {
                          year: "2025",
                          title: "Launch",
                          desc: "Inaugural summit hosted with 500+ leaders from 30 nations",
                        },
                        {
                          year: "2025",
                          title: "First Impact",
                          desc: "Grants in committed investments and partnerships formed",
                        },
                        {
                          year: "Present",
                          title: "Growth",
                          desc: "Expanding to reach 50+ African nations and 1,000+ leaders annually",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-6">
                          <div className="w-16 h-16 text-[.9rem] bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg z-10 flex-shrink-0">
                            {item.year}
                          </div>
                          <div className="pt-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Our Core Values
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "African Excellence",
                    desc: "Championing homegrown solutions and celebrating African achievement",
                    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
                  },
                  {
                    title: "Collaborative Impact",
                    desc: "Believing that lasting change comes from working together across sectors",
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                  },
                  {
                    title: "Sustainable Growth",
                    desc: "Prioritizing solutions that benefit people, planet, and prosperity",
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-emerald-200 transition-all duration-300 hover:scale-105 transform ${
                      hasMounted
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-emerald-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={value.icon}
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-center">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div
              className={`bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-center transform transition-all duration-700 delay-700 ${
                hasMounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Join Our Movement
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Be part of Africa's transformation story. Together, we can build
                a more prosperous, sustainable, and equitable future for the
                continent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-emerald-600 hover:bg-emerald-50 font-bold rounded-lg transition-all duration-300 hover:scale-105">
                  Partner With Us
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-300 hover:scale-105">
                  View Our Impact
                </button>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-16 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-500">
                <span className="font-semibold">
                  Cranfield Africa Impact Summit
                </span>{" "}
                • Founded 2025 •
                <span className="text-emerald-600 ml-2">
                  Continuing to shape Africa's future
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
