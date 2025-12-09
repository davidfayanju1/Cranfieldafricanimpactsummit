import { useState, type JSX } from "react";

// Define types for the content structure
interface ContentFeature {
  icon: JSX.Element;
  title: string;
  description: string;
}

interface ContentTab {
  title: string;
  description: string;
  features: ContentFeature[];
}

interface ContentType {
  mission: ContentTab;
  approach: ContentTab;
  impact: ContentTab;
}

type TabId = keyof ContentType;

const WhyUs = () => {
  const [activeTab, setActiveTab] = useState<TabId>("mission");

  const tabs: { id: TabId; label: string }[] = [
    { id: "mission", label: "Our Mission" },
    { id: "approach", label: "Our Approach" },
    { id: "impact", label: "Our Impact" },
  ];

  const content: ContentType = {
    mission: {
      title: "Forging Africa's Future Through Strategic Collaboration",
      description:
        "The Cranfield Africa Impact Summit serves as a premier platform uniting visionaries, policymakers, and innovators committed to sustainable development across the African continent. We bridge academic rigor with practical implementation.",
      features: [
        {
          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
          title: "Evidence-Based Solutions",
          description: "Grounded in research and data-driven insights",
        },
        {
          icon: (
            <svg
              className="w-5 h-5"
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
          title: "Multi-Stakeholder Engagement",
          description:
            "Connecting governments, private sector, and communities",
        },
        {
          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          ),
          title: "Sustainable Transformation",
          description: "Long-term impact beyond immediate interventions",
        },
      ],
    },
    approach: {
      title: "A Holistic Framework for Lasting Change",
      description:
        "Our methodology integrates academic excellence, practical wisdom, and cultural sensitivity to create solutions that are both innovative and contextually appropriate for Africa's diverse landscapes.",
      features: [
        {
          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          ),
          title: "Research Integration",
          description: "Leveraging Cranfield's academic expertise",
        },
        {
          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
          title: "Long-Term Vision",
          description: "Planning for generational impact",
        },
        {
          icon: (
            <svg
              className="w-5 h-5"
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
          title: "Cultural Intelligence",
          description: "Respecting and integrating local knowledge",
        },
      ],
    },
    impact: {
      title: "Measurable Change Across the Continent",
      description:
        "Through strategic partnerships and evidence-based interventions, we catalyze sustainable development that addresses Africa's most pressing challenges while unlocking its immense potential.",
      features: [
        {
          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          ),
          title: "Capacity Building",
          description: "Empowering local leaders and institutions",
        },
        {
          icon: (
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          ),
          title: "Economic Empowerment",
          description: "Creating sustainable livelihoods",
        },
        {
          icon: (
            <svg
              className="w-5 h-5"
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
          title: "Policy Influence",
          description: "Shaping development agendas",
        },
      ],
    },
  };

  const testimonials = [
    {
      quote:
        "The summit provided unparalleled access to thought leadership and practical tools for sustainable development.",
      author: "Dr. Amina Okoro",
      role: "Minister of Sustainable Development, Nigeria",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80&sat=-30",
    },
    {
      quote:
        "A transformative experience that bridges academic excellence with on-the-ground implementation.",
      author: "Prof. Kwame Mensah",
      role: "Director, Pan-African Development Institute",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80&sat=-30",
    },
    {
      quote:
        "The connections forged here have led to tangible projects impacting millions across the continent.",
      author: "Sarah Johnson",
      role: "CEO, Sustainable Futures Foundation",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80&sat=-30",
    },
  ];

  return (
    <div className="min-h-[80vh] bg-linear-to-b from-gray-50 to-white py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2311776e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "120px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Why The Cranfield Africa Impact Summit?
          </h2>
          <div className="w-16 h-0.5 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg font-light leading-relaxed">
            A premier convergence of intellect, innovation, and intention
            dedicated to Africa's sustainable future
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-emerald-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-normal text-gray-900 mb-4 tracking-tight">
                {content[activeTab].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {content[activeTab].description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {content[activeTab].features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center group-hover:bg-emerald-100 transition-colors duration-300">
                    <div className="text-emerald-600">{feature.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-normal text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-sm font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <button className="px-6 py-3 bg-[#11766E] text-white font-normal tracking-wide rounded-sm transition-all duration-300 hover:bg-emerald-800 hover:shadow-md hover:translate-y-px active:translate-y-0">
                Join Our Community
              </button>
            </div>
          </div>

          {/* Right Column - Visual/Image */}
          <div className="relative h-96 lg:h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-gray-100 rounded-lg overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&sat=-20")`,
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-5xl font-light text-emerald-800 mb-2">
                    →
                  </div>
                  <p className="text-gray-700 font-light italic">
                    "Where vision meets action for Africa's tomorrow"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-normal text-gray-900 mb-8 text-center tracking-tight">
            Voices of Impact
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="absolute -top-4 left-4 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-emerald-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div className="bg-gray-50 rounded-lg p-6 pt-8">
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-emerald-700">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>Proudly supported by Cranfield University</span>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
