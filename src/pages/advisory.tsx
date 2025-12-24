"use client";

import { useState } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import {
  Search,
  Mail,
  Linkedin,
  Globe,
  Building2,
  Award,
  ChevronRight,
  Filter,
  ChevronDown,
  Users,
  Target,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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
}

const AdvisoryCommittee = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState<string>("all");
  const [expandedMember] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [showFilters] = useState(false);

  const navigate = useNavigate();

  const committeeMembers: CommitteeMember[] = [
    {
      id: "1",
      name: "Dr. Sarah Johnson",
      title: "Chief Investment Officer",
      organization: "Africa Growth Fund",
      role: "Chairperson",
      expertise: [
        "Investment Strategy",
        "Economic Development",
        "Private Equity",
      ],
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "sarah.johnson@example.com",
      linkedin: "sarah-johnson",
      website: "https://africagrowthfund.com",
      bio: "Over 20 years of experience in African markets, specializing in infrastructure investment and economic policy advising for multiple African governments. Sarah has led investments totaling over $5 billion across the continent.",
      yearsOfExperience: 22,
      location: "Johannesburg, South Africa",
      featuredQuote:
        "Sustainable investment is not just about returns—it's about building legacies.",
      accentColor: "emerald",
    },
    {
      id: "2",
      name: "Michael Adebayo",
      title: "Managing Director",
      organization: "West Africa Ventures",
      role: "Vice Chair",
      expertise: ["Venture Capital", "Tech Startups", "Digital Transformation"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "michael@waventures.com",
      linkedin: "michael-adebayo",
      website: "https://westafricaventures.com",
      bio: "Pioneer in West Africa's tech ecosystem, having invested in over 50 early-stage startups with a focus on fintech and agritech solutions. Michael's portfolio companies have created over 10,000 jobs across the region.",
      yearsOfExperience: 15,
      location: "Lagos, Nigeria",
      featuredQuote:
        "The future of Africa is being written by its innovators today.",
      accentColor: "amber",
    },
    {
      id: "3",
      name: "Prof. Amina Diop",
      title: "Director of Research",
      organization: "Pan-African Economic Institute",
      role: "Research Lead",
      expertise: [
        "Economic Policy",
        "Sustainable Development",
        "Climate Finance",
      ],
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b786d4d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "amina.diop@research.org",
      linkedin: "amina-diop",
      website: "https://paei.org",
      bio: "Leading researcher on sustainable economic models for Africa, author of multiple publications on climate-resilient development strategies. Professor Diop's work has influenced policy decisions in 15 African nations.",
      yearsOfExperience: 18,
      location: "Dakar, Senegal",
      featuredQuote:
        "Research must inform action—our continent's development depends on it.",
      accentColor: "indigo",
    },
    {
      id: "4",
      name: "David Omondi",
      title: "CEO",
      organization: "East Africa Energy Solutions",
      role: "Energy Sector Advisor",
      expertise: [
        "Renewable Energy",
        "Infrastructure",
        "Public-Private Partnerships",
      ],
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "david.omondi@eaenergy.com",
      linkedin: "david-omondi",
      website: "https://eastafricaenergy.com",
      bio: "Expert in renewable energy infrastructure with extensive experience in developing and implementing large-scale solar and hydro projects across East Africa. Under his leadership, the company has brought power to over 2 million people.",
      yearsOfExperience: 25,
      location: "Nairobi, Kenya",
      featuredQuote:
        "Energy access is the foundation of economic transformation.",
      accentColor: "blue",
    },
    {
      id: "5",
      name: "Chloe Williams",
      title: "Partner",
      organization: "Global Impact Partners",
      role: "International Relations",
      expertise: [
        "International Development",
        "Cross-border Investment",
        "Policy Advocacy",
      ],
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "chloe.williams@gipartners.org",
      linkedin: "chloe-williams",
      website: "https://globalimpactpartners.org",
      bio: "Specializes in connecting African enterprises with global capital and fostering international partnerships for sustainable development. Chloe has facilitated over $3 billion in cross-border investments into African markets.",
      yearsOfExperience: 20,
      location: "London, UK",
      featuredQuote:
        "Bridging global capital with local wisdom creates transformative impact.",
      accentColor: "rose",
    },
    {
      id: "6",
      name: "Kwame Mensah",
      title: "Executive Director",
      organization: "African Innovation Hub",
      role: "Innovation Advisor",
      expertise: [
        "Technology Innovation",
        "Entrepreneurship",
        "Capacity Building",
      ],
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      email: "kwame@africaninnovation.org",
      linkedin: "kwame-mensah",
      website: "https://africaninnovationhub.org",
      bio: "Dedicated to fostering innovation ecosystems across Africa, with a track record of mentoring over 200 entrepreneurs and innovators. Kwame's programs have accelerated startups that have collectively raised over $500 million.",
      yearsOfExperience: 12,
      location: "Accra, Ghana",
      featuredQuote: "Innovation is Africa's most renewable resource.",
      accentColor: "violet",
    },
  ];

  const expertiseAreas = Array.from(
    new Set(committeeMembers.flatMap((member) => member.expertise))
  );

  const filteredMembers = committeeMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.expertise.some((exp) =>
        exp.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      member.bio.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesExpertise =
      selectedExpertise === "all" ||
      member.expertise.includes(selectedExpertise);

    return matchesSearch && matchesExpertise;
  });

  const toggleMemberDetails = (memberId: string) => {
    navigate(`/advisory-details/${memberId}`);

    // setExpandedMember(expandedMember === memberId ? null : memberId);
  };

  const getAccentColor = (color?: string) => {
    const colors: Record<string, string> = {
      emerald: "border-emerald-200 text-emerald-700 bg-emerald-50",
      amber: "border-amber-200 text-amber-700 bg-amber-50",
      indigo: "border-indigo-200 text-indigo-700 bg-indigo-50",
      blue: "border-blue-200 text-blue-700 bg-blue-50",
      rose: "border-rose-200 text-rose-700 bg-rose-50",
      violet: "border-violet-200 text-violet-700 bg-violet-50",
    };
    return colors[color || "emerald"];
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section with Subtle Background */}
        <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-gray-50 via-white to-emerald-50">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(16,185,129,0.03)_25%,rgba(16,185,129,0.03)_50%,transparent_50%,transparent_75%,rgba(16,185,129,0.03)_75%)] bg-[length:4px_4px]" />

            {/* Very Subtle Background Image */}
            <div className="absolute inset-0 opacity-5">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/30 to-white" />
          </div>

          {/* Hero Content - Moved Down */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
            {/* Main Title Section */}
            {/* Main Title Section */}
            <div className="mb-12">
              {/* Add the image badge here */}
              <div className="relative inline-block mb-8">
                <div className="absolute -top-2 -right-2 w-24 h-24 z-10">
                  <img
                    src={"/images/strategic_advisory_circle.png"}
                    alt="Strategic Advisory Circle"
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>

                <div className="inline-flex items-center justify-center gap-4 mb-10 relative">
                  <div className="w-20 h-px bg-linear-to-r from-transparent via-emerald-400 to-transparent" />
                  <div className="flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-emerald-100 relative z-20">
                    <Users className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-700 text-sm font-medium tracking-[0.2em]">
                      ADVISORY COMMITTEE
                    </span>
                  </div>
                  <div className="w-20 h-px bg-linear-to-r from-transparent via-emerald-400 to-transparent" />
                </div>
              </div>

              <h1 className="text-5xl md:text-8xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tighter leading-[0.85]">
                <span className="block">Our</span>
                <span className="block mt-4 text-emerald-600 font-normal">
                  Leaders
                </span>
              </h1>
            </div>

            {/* Subtitle and Description */}
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-xl text-gray-700 font-light leading-relaxed mb-8">
                Distinguished leaders guiding Africa's sustainable future
                through strategic insight and transformative partnership.
              </p>

              <div className="flex items-center justify-center gap-8 text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Target className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium">Strategic Vision</div>
                    <div className="text-xs text-gray-500">
                      Global Perspective
                    </div>
                  </div>
                </div>

                <div className="h-8 w-px bg-gray-300" />

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium">112+ Years</div>
                    <div className="text-xs text-gray-500">
                      Collective Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-12 animate-bounce">
              <ChevronDown className="w-8 h-8 text-emerald-500 mx-auto" />
              <span className="text-xs text-gray-500 mt-2 block">
                Explore Members
              </span>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="max-w-5xl mx-auto px-6 py-16 -mt-12 relative z-20">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="sticky top-24">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-700">
                      Distinguished Leadership
                    </span>
                  </div>
                  <h2 className="text-3xl font-light text-gray-900 mb-4">
                    Guiding Excellence Across Africa
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Our committee represents the pinnacle of strategic
                    leadership and industry expertise.
                  </p>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Global Reach
                    </h3>
                    <p className="text-gray-700">
                      Members spanning 6 countries with deep regional expertise
                      across the African continent and global markets.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Sector Expertise
                    </h3>
                    <p className="text-gray-700">
                      Comprehensive coverage across investment, technology,
                      energy, research, and international development.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Strategic Impact
                    </h3>
                    <p className="text-gray-700">
                      Collective leadership in deploying over $10B in
                      transformative investments across Africa.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Innovation Focus
                    </h3>
                    <p className="text-gray-700">
                      Driving cutting-edge solutions in fintech, renewable
                      energy, climate finance, and digital transformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Search and Filter Bar */}
          <div className="top-4 z-30 mb-16 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
              <div className="lg:w-[80%] w-full">
                <div className="flex items-center gap-3 mb-4">
                  <Search className="w-5 h-5 text-emerald-600" />
                  <h3 className="text-lg font-medium text-gray-900">
                    Find Committee Members
                  </h3>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by name, expertise, organization..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 text-gray-700 placeholder-gray-400 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all text-base"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
                    {filteredMembers.length} of {committeeMembers.length}
                  </div>
                </div>
              </div>

              <div className="lg:w-[20%]">
                <div className="flex">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Filter className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-700">
                        Filter by Expertise
                      </span>
                    </div>
                    <select
                      title="select"
                      value={selectedExpertise}
                      onChange={(e) => setSelectedExpertise(e.target.value)}
                      className="w-full px-4 py-4 bg-gray-50 border-2 border-gray-200 text-gray-700 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all"
                    >
                      <option value="all">All Expertise Areas</option>
                      {expertiseAreas.map((expertise) => (
                        <option key={expertise} value={expertise}>
                          {expertise}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="px-6 py-3 bg-emerald-50 text-emerald-700 rounded-xl border border-emerald-200 hover:bg-emerald-100 block transition-colors font-medium"
                  >
                    {showFilters ? "Hide Filters" : "More Filters"}
                  </button> */}
                </div>

                {/* Quick Filter Chips */}
                {showFilters && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap gap-3">
                      {expertiseAreas.slice(0, 8).map((expertise) => (
                        <button
                          key={expertise}
                          onClick={() => {
                            setSelectedExpertise(expertise);
                            setActiveFilter(expertise);
                          }}
                          className={`px-4 py-2 rounded-full text-sm transition-all ${
                            activeFilter === expertise
                              ? "bg-emerald-600 text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {expertise}
                        </button>
                      ))}
                      <button
                        onClick={() => {
                          setSelectedExpertise("all");
                          setActiveFilter("all");
                        }}
                        className="px-4 py-2 text-sm text-emerald-600 hover:text-emerald-700"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="group relative bg-white border border-gray-100 hover:border-emerald-200 transition-all duration-500 hover:shadow-2xl rounded-2xl overflow-hidden"
              >
                {/* Accent Strip */}
                <div
                  className={`h-2 w-full ${
                    member.accentColor === "emerald"
                      ? "bg-emerald-500"
                      : member.accentColor === "amber"
                      ? "bg-amber-500"
                      : member.accentColor === "indigo"
                      ? "bg-indigo-500"
                      : member.accentColor === "blue"
                      ? "bg-blue-500"
                      : member.accentColor === "rose"
                      ? "bg-rose-500"
                      : "bg-violet-500"
                  }`}
                />

                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent z-10" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Role Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
                      {member.role}
                    </span>
                  </div>

                  {/* Years Badge */}
                  <div className="absolute bottom-4 right-4 z-20">
                    <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-xs font-medium text-white rounded-full">
                      {member.yearsOfExperience} Years
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-light text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-light">
                      {member.title}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Building2 className="w-4 h-4" />
                    <span className="truncate">{member.organization}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                    <Globe className="w-4 h-4" />
                    <span>{member.location}</span>
                  </div>

                  {/* Expertise Preview */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.expertise.slice(0, 3).map((exp, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1.5 text-xs rounded-full border ${getAccentColor(
                          member.accentColor
                        )}`}
                      >
                        {exp}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <button
                      onClick={() => toggleMemberDetails(member.id)}
                      className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors group/readmore"
                    >
                      {expandedMember === member.id
                        ? "Show Less"
                        : "View Profile"}
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-300 group-hover/readmore:translate-x-1 ${
                          expandedMember === member.id ? "rotate-90" : ""
                        }`}
                      />
                    </button>

                    <div className="flex items-center gap-2">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="p-2 text-gray-400 hover:text-emerald-600 transition-colors rounded-full hover:bg-emerald-50"
                          title="Send email"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={`https://linkedin.com/in/${member.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-emerald-600 transition-colors rounded-full hover:bg-emerald-50"
                          title="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-32">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 mb-8">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-light text-gray-400 mb-3">
                No members found
              </h3>
              <p className="text-gray-400 font-light max-w-md mx-auto">
                Try adjusting your search criteria or explore all expertise
                areas
              </p>
            </div>
          )}
        </div>

        {/* Mission Statement */}
        <div className="bg-linear-to-b from-white to-gray-50">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="bg-linear-to-br from-emerald-50 to-white rounded-3xl p-12 border border-emerald-100">
              <div className="text-center">
                <div className="inline-flex items-center gap-4 mb-10">
                  <div className="w-16 h-px bg-linear-to-r from-transparent via-emerald-400 to-transparent" />
                  <span className="text-emerald-700 text-sm font-medium tracking-[0.3em]">
                    OUR PURPOSE
                  </span>
                  <div className="w-16 h-px bg-linear-to-r from-transparent via-emerald-400 to-transparent" />
                </div>

                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                  Strategic Leadership for
                  <br />
                  <span className="text-emerald-600">Sustainable Impact</span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 font-light">
                  Our advisory committee embodies our commitment to excellence,
                  innovation, and sustainable growth. Through strategic guidance
                  and deep sector expertise, they ensure our initiatives create
                  lasting impact across the continent.
                </p>

                <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full">
                  <span className="text-sm font-medium">
                    Advisory Committee • {new Date().getFullYear()}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container mx-auto">
            <img
              src={"/images/strategic_advisory_circle.png"}
              alt="Strategic Advisory Circle"
              className="w-[25rem] h-[25rem] mx-auto object-cover"
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AdvisoryCommittee;
