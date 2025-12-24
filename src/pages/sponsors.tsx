import DefaultLayout from "../layout/DefaultLayout";
import {
  Building,
  Globe,
  Users,
  Target,
  HeartHandshake,
  Award,
  ChevronRight,
  Mail,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const Sponsors = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Current Sponsors - All at same level
  const currentSponsors = [
    {
      name: "Cranfield University",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Cranfield_University_logo.svg/1200px-Cranfield_University_logo.svg.png",
      category: "academic",
      description:
        "World-leading postgraduate university specializing in technology and management",
      since: "2024",
      link: "https://www.cranfield.ac.uk",
    },
    {
      name: "African Development Bank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/African_Development_Bank_%28logo%29.svg/1200px-African_Development_Bank_%28logo%29.svg.png",
      category: "strategic",
      description: "Regional multilateral development finance institution",
      since: "2025",
      link: "https://www.afdb.org",
    },
    {
      name: "Tech Innovate Africa",
      logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      category: "technology",
      description: "Leading African technology innovation hub",
      since: "2025",
      link: "#",
    },
  ];

  // Partnership Categories (not tiers)
  const partnerCategories = [
    {
      id: "all",
      name: "All Partners",
      description: "Our valued network of supporters",
    },
    {
      id: "academic",
      name: "Academic",
      description: "Educational and research institutions",
    },
    {
      id: "strategic",
      name: "Strategic",
      description: "Key development partners",
    },
    {
      id: "technology",
      name: "Technology",
      description: "Innovation and tech partners",
    },
  ];

  // Partnership Opportunities - Flexible for startups
  const partnershipOpportunities = [
    {
      title: "Event Support",
      description: "Contribute to our gatherings and sessions",
      icon: <Building className="w-6 h-6" />,
      flexible: true,
    },
    {
      title: "Innovation Programs",
      description: "Support workshops and labs",
      icon: <Sparkles className="w-6 h-6" />,
      flexible: true,
    },
    {
      title: "Youth Engagement",
      description: "Sponsor student participation",
      icon: <Users className="w-6 h-6" />,
      flexible: true,
    },
    {
      title: "Research Initiatives",
      description: "Fund impact research projects",
      icon: <Award className="w-6 h-6" />,
      flexible: true,
    },
  ];

  // Benefits for Partners
  const partnerBenefits = [
    {
      title: "Network Access",
      description: "Connect with African leaders and innovators",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Brand Visibility",
      description: "Recognition as a catalyst for change",
      icon: <Target className="w-5 h-5" />,
    },
    {
      title: "Impact Contribution",
      description: "Directly support African development",
      icon: <HeartHandshake className="w-5 h-5" />,
    },
    {
      title: "Thought Leadership",
      description: "Position at the forefront of innovation",
      icon: <Globe className="w-5 h-5" />,
    },
  ];

  return (
    <DefaultLayout>
      {/* Hero Section - Simplified metrics */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Sponsorship background"
              className="w-full h-full object-cover blur-md scale-110"
              loading="eager"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-800/60 to-emerald-700/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-44 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <span className="text-xs font-medium text-white/90 tracking-widest">
                PARTNERSHIPS & SUPPORT
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
              <span className="block">Join Forces</span>
              <span className="block text-emerald-300 font-normal mt-2">
                Transform Africa Together
              </span>
            </h1>

            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 font-light leading-relaxed bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              Partner with us to drive innovation, foster collaboration, and
              create lasting impact across the African continent. Every
              partnership, big or small, helps us move forward.
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                {
                  value: "Growing",
                  label: "Network",
                  icon: <HeartHandshake className="w-4 h-4" />,
                },
                {
                  value: "Impact",
                  label: "Driven",
                  icon: <Target className="w-4 h-4" />,
                },
                {
                  value: "Open",
                  label: "to New Partners",
                  icon: <Users className="w-4 h-4" />,
                },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="text-emerald-300">{stat.icon}</div>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm text-white/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Current Sponsors Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-px bg-emerald-500 mr-4" />
              <span className="text-emerald-600 text-sm font-medium tracking-widest uppercase">
                OUR PARTNERS
              </span>
              <div className="w-12 h-px bg-emerald-500 ml-4" />
            </div>
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Current{" "}
              <span className="text-emerald-600 font-normal">Partners</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're grateful for the visionary organizations supporting our
              mission. As a startup initiative, every partnership is invaluable
              to us.
            </p>
          </div>

          {/* Partner Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {partnerCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-emerald-500 text-white"
                    : "bg-white text-gray-600 hover:text-gray-900 border border-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {currentSponsors
              .filter(
                (sponsor) =>
                  activeCategory === "all" ||
                  sponsor.category === activeCategory
              )
              .map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-white rounded-lg border border-gray-200 p-3 flex items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                        {sponsor.name}
                      </h3>
                      <span className="text-xs text-gray-500 mt-1 block">
                        Partner since {sponsor.since}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {sponsor.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="px-2 py-1 bg-gray-100 rounded text-xs">
                      {sponsor.category === "academic"
                        ? "Academic Partner"
                        : sponsor.category === "strategic"
                        ? "Strategic Partner"
                        : "Technology Partner"}
                    </span>
                    {sponsor.link && (
                      <a
                        href={sponsor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-600 hover:text-emerald-700 font-medium"
                      >
                        Visit →
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center bg-emerald-50 rounded-xl p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-4">
              Building Our Network
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              As a growing initiative, we welcome partners of all sizes and
              types. Whether you're a corporation, academic institution, or
              individual supporter, there's a place for you in our journey.
            </p>
            <button className="px-6 py-3 bg-emerald-600 text-white hover:bg-emerald-700 font-medium rounded-lg transition-colors inline-flex items-center gap-2">
              Explore Partnership
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Partnership Opportunities */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-6">
              Partnership{" "}
              <span className="text-emerald-600 font-normal">
                Opportunities
              </span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer flexible partnership opportunities tailored to your
              capacity and interests. No contribution is too small.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partnershipOpportunities.map((opp, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  {opp.icon}
                </div>
                <h4 className="font-medium text-gray-900 mb-2">{opp.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{opp.description}</p>
                <div className="flex items-center gap-2 text-emerald-600 font-medium text-sm">
                  <span>Flexible support options</span>
                </div>
              </div>
            ))}
          </div>

          {/* Why Partner Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Why{" "}
                <span className="text-emerald-600 font-normal">Partner</span>{" "}
                With Us?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join us in shaping Africa's future through innovative
                partnerships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Partnership Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                Flexible{" "}
                <span className="text-emerald-600 font-normal">
                  Partnerships
                </span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're open to all types of support. Let's create a partnership
                that works for both of us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <h4 className="font-medium text-gray-900">Ways to Support:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Financial contributions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      In-kind services or resources
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Expertise and mentorship
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">
                      Network and introductions
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-medium text-gray-900 mb-4">
                  Start a Conversation
                </h4>
                <p className="text-gray-600 text-sm mb-6">
                  We'd love to discuss how we can work together. Share your
                  interests and let's build something meaningful.
                </p>
                <a
                  href="mailto:partnerships@cranfield-africa.org"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white hover:bg-emerald-700 font-medium rounded-lg transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Contact Our Partnership Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center text-white">
            <h2 className="text-3xl font-light mb-6">
              Ready to Join Our Journey?
            </h2>
            <p className="text-emerald-100 text-lg max-w-3xl mx-auto mb-8">
              As a growing initiative, every partnership matters. Together, we
              can drive meaningful change and create lasting impact across
              Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-white text-emerald-600 hover:bg-emerald-50 font-medium rounded-lg transition-colors flex items-center gap-2 justify-center">
                Learn More About Us
                <ChevronRight className="w-4 h-4" />
              </button>
              <a
                href="mailto:partnerships@cranfield-africa.org"
                className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-colors"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center text-gray-500 text-sm">
            <p>
              <span className="font-medium text-gray-700">
                Cranfield Africa Impact Initiative
              </span>
              {" • "}Open to all types of partnerships
            </p>
            <p className="mt-2 text-xs">
              Contact: partnerships@cranfield-africa.org
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Sponsors;
