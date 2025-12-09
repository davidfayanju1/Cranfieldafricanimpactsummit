const Metrics = () => {
  const metrics = [
    {
      id: 1,
      number: 50,
      label: "Industry Leaders",
      description: "Global experts shaping Africa's future",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      number: 30,
      label: "Impact Projects",
      description: "Sustainable initiatives across Africa",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      number: 15,
      label: "African Nations",
      description: "Countries participating in transformation",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      number: 100,
      label: "Million+ Impact",
      description: "Lives transformed through initiatives",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-[50vh] bg-linear-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Our Impact in Numbers
          </h2>
          <div className="w-16 h-0.5 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
            Quantifying our commitment to sustainable development and meaningful
            change across Africa
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="group relative bg-white rounded-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
            >
              {/* Icon */}
              <div className="absolute -top-4 left-8 w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                <div className="text-emerald-600">{metric.icon}</div>
              </div>

              {/* Metric Number */}
              <div className="mb-4 pt-4">
                <div className="flex items-baseline">
                  <span className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                    {metric.number}
                  </span>
                  {metric.id === 4 && (
                    <span className="text-lg text-emerald-600 font-medium ml-1">
                      M+
                    </span>
                  )}
                </div>
              </div>

              {/* Metric Label */}
              <h3 className="text-xl font-normal text-gray-900 mb-2 tracking-tight">
                {metric.label}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {metric.description}
              </p>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Optional: Animated Counter (if you want numbers to count up) */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 rounded-full">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-emerald-700 font-medium">
              Real-time impact tracking • Updated quarterly
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
