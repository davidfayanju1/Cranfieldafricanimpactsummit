import { useState, useEffect } from "react";

const Team = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Amina Okoro",
      role: "Founder & Executive Director",
      bio: "Former UN Development Advisor with 15+ years experience in African economic policy.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      id: 2,
      name: "Kwame Mensah",
      role: "Director of Strategy",
      bio: "Ex-McKinsey Partner specializing in African market growth strategies.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      id: 3,
      name: "Fatima Diallo",
      role: "Head of Partnerships",
      bio: "Former Director of African Development Bank's private sector division.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      id: 4,
      name: "Samuel Chukwu",
      role: "Director of Programs",
      bio: "Award-winning event producer with expertise in high-impact forums.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      id: 5,
      name: "Nadia Bello",
      role: "Head of Communications",
      bio: "Former BBC Africa correspondent and media strategist.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      id: 6,
      name: "James Ofori",
      role: "Logistics Director",
      bio: "20+ years experience managing large-scale international events across Africa.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      id: 7,
      name: "Leila Hassan",
      role: "Digital Strategy Lead",
      bio: "Tech entrepreneur focused on digital transformation in emerging markets.",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      id: 8,
      name: "David Kimani",
      role: "Finance Director",
      bio: "Chartered accountant with expertise in non-profit financial management.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      social: { twitter: "#", linkedin: "#" },
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-gray-50 to-white"></div>

      {/* Content */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-emerald-500"></div>
              <span className="text-emerald-600 text-sm tracking-widest uppercase font-medium">
                Meet the Team
              </span>
              <div className="w-12 h-px bg-emerald-500"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Organizing Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of passionate professionals dedicated to making
              the Cranfield Africa Impact Summit a transformative experience.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  hasMounted ? "opacity-100" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Profile Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Profile Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="text-emerald-600 font-medium mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a
                      href={member.social.linkedin}
                      className="text-gray-400 hover:text-emerald-600 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-gray-400 hover:text-emerald-600 transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Advisory Board Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Advisory Board
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Prof. Kwesi Atta",
                  role: "Former Minister of Trade",
                  org: "Government of Ghana",
                },
                {
                  name: "Dr. Zainab Ali",
                  role: "Director of Innovation",
                  org: "African Development Bank",
                },
                {
                  name: "John Kofi",
                  role: "CEO",
                  org: "Pan-African Investment Group",
                },
              ].map((advisor, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {advisor.name}
                  </h3>
                  <div className="text-emerald-600 font-medium mb-2">
                    {advisor.role}
                  </div>
                  <div className="text-gray-500 text-sm">{advisor.org}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to help drive
              Africa's transformation forward.
            </p>
            <button className="px-8 py-3 bg-white text-emerald-600 hover:bg-emerald-50 font-bold rounded-lg transition-all duration-300">
              View Open Positions
            </button>
          </div>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500">
              <span className="font-semibold">
                Cranfield Africa Impact Summit Team
              </span>{" "}
              •
              <span className="text-emerald-600 ml-2">
                Passionate about Africa's future
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
