"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Linkedin,
  Globe,
  Building2,
  MapPin,
  Calendar,
  Award,
  Quote,
  Users,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Briefcase,
  BookOpen,
  Target,
  Zap,
} from "lucide-react";
import DefaultLayout from "../../layout/DefaultLayout";

interface CommitteeMember {
  id: string;
  name: string;
  title: string;
  organization: string;
  role: string;
  expertise: string[];
  image: string;
  email?: string;
  linkedin?: string;
  website?: string;
  bio: string;
  yearsOfExperience: number;
  location: string;
  featuredQuote?: string;
  accentColor?: string;
  education?: string[];
  achievements?: string[];
  publications?: string[];
  speakingEngagements?: string[];
  committeeHistory?: string;
}

const AdvisoryDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [member, setMember] = useState<CommitteeMember | null>(null);
  const [loading, setLoading] = useState(true);

  const mockMembers: CommitteeMember[] = [
    {
      id: "1",
      name: "DR. Inyene Nkanta",
      title: "Lecturer in Business & Creative Industries",
      organization: "University of the West of Scotland",
      role: "Lecturer",
      expertise: ["Entrepreneurship", "Sustainability", "Circular Economy"],
      image: "/images/INYENE.jpeg",
      email: "sarah.johnson@africagrowthfund.com",
      linkedin: "inyene-nkanta-1a9b5590/",
      website: "https://africagrowthfund.com/leadership/sarah-johnson",
      bio: "Dr. Sarah Johnson is a visionary leader with over 22 years of experience in African financial markets and infrastructure development. As Chief Investment Officer at Africa Growth Fund, she oversees a $5 billion portfolio dedicated to sustainable development across the continent. Her strategic leadership has facilitated transformative investments in renewable energy, transportation, and digital infrastructure that have created over 50,000 jobs and connected millions to essential services.\n\nSarah pioneered the 'Impact-First Investment Framework' that has become a benchmark for sustainable investing in emerging markets. She serves on the board of the African Development Bank's Private Sector Investment Committee and has advised multiple African governments on economic policy formulation. Her work focuses on creating resilient, inclusive economies through strategic capital allocation and public-private partnerships.",
      yearsOfExperience: 22,
      location: "Johannesburg, South Africa",
      featuredQuote:
        "Sustainable investment is not just about returns—it's about building legacies that transform communities for generations.",
      accentColor: "emerald",
      education: [
        "PhD in Development Economics, University of Cambridge",
        "MBA in Finance, Harvard Business School",
        "BSc in Economics, University of Cape Town",
      ],
      achievements: [
        "Led $5B+ in sustainable infrastructure investments",
        "Named 'Top 50 Influential Women in African Finance' (2023)",
        "Recipient of the African Investment Leadership Award (2022)",
        "Published author of 'The New African Economy: Strategies for Growth'",
      ],
      publications: [
        "The New African Economy: Strategies for Sustainable Growth (2022)",
        "Infrastructure Investment in Emerging Markets: Risk and Reward (2020)",
        "Public-Private Partnerships for African Development (2019)",
        "Journal of African Economics: Regular Contributor",
      ],
      speakingEngagements: [
        "Keynote Speaker - World Economic Forum Africa Summit 2023",
        "Panelist - UN Sustainable Development Goals Conference 2022",
        "Featured Speaker - African Investment Forum 2021-2023",
        "Guest Lecturer - University of Oxford, Said Business School",
      ],
      committeeHistory:
        "Sarah joined the Advisory Committee in 2020 and was appointed Chairperson in 2022. She has been instrumental in shaping the committee's strategic direction, particularly in developing investment frameworks for climate-resilient infrastructure across Africa.",
    },
    {
      id: "2",
      name: "Michael Adebayo",
      title: "Managing Director",
      organization: "West Africa Ventures",
      role: "Vice Chair",
      expertise: [
        "Venture Capital",
        "Tech Startups",
        "Digital Transformation",
        "Fintech Innovation",
        "Entrepreneurship",
        "Scale-up Strategy",
      ],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "michael@westafricaventures.com",
      linkedin: "michael-adebayo",
      website: "https://westafricaventures.com/team/michael",
      bio: "Michael Adebayo is a pioneer in West Africa's technology ecosystem, with 15 years of experience building and scaling innovative startups. As Managing Director of West Africa Ventures, he has invested in over 50 early-stage companies, with a particular focus on fintech and agritech solutions that address Africa's unique challenges.\n\nHis portfolio companies have collectively created over 10,000 direct jobs and impacted millions through digital financial inclusion. Michael is known for his hands-on approach to venture building, often working closely with founders on product development, market expansion, and fundraising strategies. He founded the 'Techstars Lagos Accelerator' and serves as a mentor at the African Leadership University's entrepreneurship program.",
      yearsOfExperience: 15,
      location: "Lagos, Nigeria",
      featuredQuote:
        "The future of Africa is being written by its innovators today—our role is to provide the ink and the paper.",
      accentColor: "amber",
      education: [
        "MSc in Computer Science, Stanford University",
        "BA in Economics, University of Lagos",
        "Venture Capital Executive Program, MIT Sloan",
      ],
      achievements: [
        "Forbes 30 Under 30 - Technology (2018)",
        "Tech Investor of the Year - West Africa Awards (2021)",
        "Portfolio companies raised $500M+ in follow-on funding",
        "Created 10,000+ jobs across portfolio companies",
      ],
      publications: [
        "Building African Tech Unicorns: Lessons from the Frontlines (2023)",
        "Fintech Revolution in West Africa (2021)",
        "The African Startup Playbook (Monthly Newsletter)",
      ],
      speakingEngagements: [
        "Headline Speaker - TechCabal Live Lagos (2023)",
        "Judge - African Startup Battlefield Competition",
        "Guest - The Future of African Tech Podcast",
        "Mentor - Y Combinator Startup School Africa",
      ],
      committeeHistory:
        "Michael joined the Advisory Committee in 2019 and was appointed Vice Chair in 2021. He leads the committee's innovation and technology initiatives, focusing on bridging the gap between traditional finance and emerging tech ecosystems.",
    },
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundMember = mockMembers.find((m) => m.id === id);
      setMember(foundMember || null);
      setLoading(false);
    }, 300);
  }, [id]);

  const getAccentColor = (color?: string) => {
    const colors: Record<string, string> = {
      emerald: "bg-emerald-500",
      amber: "bg-amber-500",
      indigo: "bg-indigo-500",
      blue: "bg-blue-500",
      rose: "bg-rose-500",
      violet: "bg-violet-500",
    };
    return colors[color || "emerald"];
  };

  const getLightAccentColor = (color?: string) => {
    const colors: Record<string, string> = {
      emerald: "bg-emerald-50 border-emerald-100 text-emerald-700",
      amber: "bg-amber-50 border-amber-100 text-amber-700",
      indigo: "bg-indigo-50 border-indigo-100 text-indigo-700",
      blue: "bg-blue-50 border-blue-100 text-blue-700",
      rose: "bg-rose-50 border-rose-100 text-rose-700",
      violet: "bg-violet-50 border-violet-100 text-violet-700",
    };
    return colors[color || "emerald"];
  };

  const formatBio = (bio: string) => {
    return bio.split("\n\n").map((paragraph, index) => (
      <p key={index} className="mb-4 text-gray-600 leading-relaxed">
        {paragraph}
      </p>
    ));
  };

  if (loading) {
    return (
      <DefaultLayout>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500 font-light">Loading profile...</p>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  if (!member) {
    return (
      <DefaultLayout>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-6 py-32 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-3xl font-light text-gray-400 mb-4">
              Member Not Found
            </h1>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              The advisory committee member you're looking for doesn't exist or
              has been moved.
            </p>
            <button
              onClick={() => navigate("/advisory")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Committee
            </button>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Back Navigation */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="py-4">
              <button
                onClick={() => navigate("/advisory")}
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Advisory Committee
              </button>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-white z-0" />
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-100 rounded-full opacity-20 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-100 rounded-full opacity-20 translate-y-1/3 -translate-x-1/4" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left Column - Profile Image & Info */}
              <div className="lg:w-2/5">
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Accent Bar */}
                  <div
                    className={`absolute -bottom-3 left-6 right-6 h-2 rounded-full ${getAccentColor(
                      member.accentColor,
                    )}`}
                  />

                  {/* Role Badge */}
                  <div className="absolute -top-3 right-6">
                    <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                      <span className="text-sm font-medium text-gray-700">
                        {member.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-medium text-gray-500">
                        EXPERIENCE
                      </span>
                    </div>
                    <div className="text-2xl font-light text-gray-900">
                      {member.yearsOfExperience}
                    </div>
                    <div className="text-xs text-gray-500">Years</div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-medium text-gray-500">
                        LOCATION
                      </span>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {member.location}
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-sm font-medium text-gray-500 mb-4">
                    CONNECT
                  </h3>
                  <div className="space-y-3">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <Mail className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            Email
                          </div>
                          <div className="text-xs text-gray-500 truncate">
                            {member.email}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${member.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <Linkedin className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            LinkedIn
                          </div>
                          <div className="text-xs text-gray-500">
                            Professional Profile
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                      </a>
                    )}
                    {member.website && (
                      <a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                          <Globe className="w-5 h-5 text-amber-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            Website
                          </div>
                          <div className="text-xs text-gray-500">
                            Professional Bio
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - Profile Details */}
              <div className="lg:w-3/5">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-2 h-8 rounded-full ${getAccentColor(
                        member.accentColor,
                      )}`}
                    />
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      ADVISORY COMMITTEE
                    </span>
                  </div>
                  <h1 className="text-5xl font-light text-gray-900 mb-3">
                    {member.name}
                  </h1>
                  <div className="flex items-center gap-3 text-lg text-gray-600 mb-6">
                    <Building2 className="w-5 h-5" />
                    <span>{member.title}</span>
                    <span className="text-gray-300">•</span>
                    <span className="font-medium">{member.organization}</span>
                  </div>

                  {/* Featured Quote */}
                  {member.featuredQuote && (
                    <div className="relative bg-gradient-to-r from-emerald-50/80 to-white p-6 rounded-2xl border border-emerald-100 mb-8">
                      <Quote className="absolute top-4 left-4 w-8 h-8 text-emerald-200" />
                      <p className="text-lg italic text-gray-700 pl-8 leading-relaxed">
                        "{member.featuredQuote}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Content Sections (No Tabs) */}
                <div className="space-y-8">
                  {/* Expertise Section */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center gap-2">
                      <Target className="w-5 h-5 text-emerald-600" />
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {member.expertise.map((exp, index) => (
                        <span
                          key={index}
                          className={`px-4 py-2.5 rounded-full text-sm border ${getLightAccentColor(
                            member.accentColor,
                          )}`}
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Biography Section */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-emerald-600" />
                      Biography
                    </h3>
                    <div className="text-gray-600 space-y-4">
                      {formatBio(member.bio)}
                    </div>
                  </div>

                  {/* Education Section */}
                  {member.education && (
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center gap-2">
                        <Award className="w-5 h-5 text-emerald-600" />
                        Education & Credentials
                      </h3>
                      <div className="space-y-4">
                        {member.education.map((edu, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                          >
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center ${getAccentColor(
                                member.accentColor,
                              )}`}
                            >
                              <span className="text-xs font-medium text-white">
                                {index + 1}
                              </span>
                            </div>
                            <span className="text-gray-700">{edu}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements Section */}
                  {member.achievements && (
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-emerald-600" />
                        Key Achievements
                      </h3>
                      <div className="space-y-3">
                        {member.achievements.map((achievement, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-50/50 to-white rounded-xl border border-gray-100 hover:border-emerald-200 transition-colors"
                          >
                            <div
                              className={`w-2 h-2 rounded-full mt-2 ${getAccentColor(
                                member.accentColor,
                              )}`}
                            />
                            <span className="text-gray-700">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Publications Section */}
                  {member.publications && member.publications.length > 0 && (
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-emerald-600" />
                        Selected Publications
                      </h3>
                      <div className="space-y-3">
                        {member.publications.map((pub, index) => (
                          <div
                            key={index}
                            className="p-4 bg-white rounded-xl border border-gray-100 hover:border-emerald-200 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-2 h-2 rounded-full ${getAccentColor(
                                  member.accentColor,
                                )}`}
                              />
                              <span className="text-gray-700">{pub}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Speaking Engagements Section */}
                  {member.speakingEngagements && (
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-emerald-600" />
                        Recent Speaking Engagements
                      </h3>
                      <div className="space-y-4">
                        {member.speakingEngagements.map((engagement, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50/50 to-white rounded-xl border border-gray-100"
                          >
                            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-medium text-emerald-700">
                                {new Date().getFullYear() - index}
                              </span>
                            </div>
                            <span className="text-gray-700">{engagement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Committee History Section */}
                  {member.committeeHistory && (
                    <div className="bg-gradient-to-r from-emerald-50/80 to-white rounded-2xl p-6 border border-emerald-100 shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-6 flex items-center gap-2">
                        <Users className="w-5 h-5 text-emerald-600" />
                        Committee Contributions
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {member.committeeHistory}
                      </p>
                    </div>
                  )}

                  {/* Contribution Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-emerald-50/80 to-white p-6 rounded-2xl border border-emerald-100 shadow-sm">
                      <div className="text-3xl font-light text-emerald-700 mb-2">
                        {member.yearsOfExperience}+
                      </div>
                      <div className="text-sm font-medium text-emerald-600">
                        Years of Experience
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50/80 to-white p-6 rounded-2xl border border-amber-100 shadow-sm">
                      <div className="text-3xl font-light text-amber-700 mb-2">
                        10+
                      </div>
                      <div className="text-sm font-medium text-amber-600">
                        Committee Initiatives Led
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Member Navigation */}
        <div className="border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                  EXPLORE OTHER MEMBERS
                </h3>
                <p className="text-gray-700">
                  Discover more distinguished leaders in our advisory committee
                </p>
              </div>
              <button
                onClick={() => navigate("/advisory")}
                className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors group"
              >
                <Users className="w-5 h-5" />
                View All Members
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-100/20 to-amber-100/20 rounded-full translate-x-1/3 translate-y-1/3 -z-10" />
        <div className="fixed top-1/3 left-0 w-32 h-32 bg-gradient-to-br from-blue-100/10 to-violet-100/10 rounded-full -translate-x-1/2 -z-10" />
      </div>
    </>
  );
};

export default AdvisoryDetails;
