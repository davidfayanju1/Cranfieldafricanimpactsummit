"use client";

import { useState, useEffect } from "react";
import DefaultLayout from "../layout/DefaultLayout";
import {
  Target,
  Globe,
  Shield,
  Zap,
  TrendingUp,
  BarChart3,
  Clock,
  ChevronRight,
  CheckCircle,
  Lightbulb,
  Handshake,
  Scale,
  Leaf,
  Network,
  BookOpen,
  GraduationCap,
  Rocket,
} from "lucide-react";

const Agenda = () => {
  const [activePillar, setActivePillar] = useState<string>("economic");
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Strategic Pillars
  const strategicPillars = [
    {
      id: "economic",
      title: "Economic Sovereignty",
      description: "Building self-sufficient, resilient African economies",
      icon: <Scale className="w-6 h-6" />,
      color: "emerald",
      initiatives: [
        "Intra-African trade facilitation",
        "Local currency capital markets",
        "Strategic resource management",
        "Industrial policy development",
      ],
    },
    {
      id: "innovation",
      title: "Innovation Ecosystem",
      description: "Fostering homegrown technological advancement",
      icon: <Zap className="w-6 h-6" />,
      color: "blue",
      initiatives: [
        "Tech talent development programs",
        "Startup acceleration platforms",
        "Research & Development hubs",
        "Digital infrastructure expansion",
      ],
    },
    {
      id: "sustainability",
      title: "Sustainable Development",
      description: "Balancing growth with environmental stewardship",
      icon: <Leaf className="w-6 h-6" />,
      color: "green",
      initiatives: [
        "Climate adaptation strategies",
        "Green energy transition",
        "Circular economy models",
        "Biodiversity preservation",
      ],
    },
    {
      id: "governance",
      title: "Strategic Governance",
      description: "Strengthening institutions and policy frameworks",
      icon: <Shield className="w-6 h-6" />,
      color: "violet",
      initiatives: [
        "Policy harmonization efforts",
        "Transparency initiatives",
        "Capacity building programs",
        "Digital governance systems",
      ],
    },
  ];

  // Core Agendas
  const coreAgendas = [
    {
      title: "Intra-African Investment",
      description: "Catalyzing $100B+ in cross-border capital flows by 2030",
      progress: 35,
      metrics: ["$35B deployed", "12 countries engaged", "45 projects funded"],
      timeline: "2025-2030",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      title: "Digital Transformation",
      description:
        "Connecting 500M Africans to digital services and opportunities",
      progress: 42,
      metrics: ["200M connected", "8 digital corridors", "3,000+ startups"],
      timeline: "2024-2028",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "Human Capital Development",
      description: "Training 1M African professionals in critical skills",
      progress: 28,
      metrics: ["280K trained", "150 institutions", "40 specializations"],
      timeline: "2025-2027",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      title: "Green Infrastructure",
      description: "Developing 10GW of renewable energy capacity",
      progress: 18,
      metrics: ["1.8GW operational", "15 projects", "$4.2B investment"],
      timeline: "2025-2030",
      icon: <Leaf className="w-5 h-5" />,
    },
  ];

  // Key Initiatives
  const keyInitiatives = [
    {
      name: "African Capital Markets Initiative",
      status: "Active",
      timeline: "2024-2027",
      partners: ["AFDB", "African Exchanges", "Pension Funds"],
      impact: "Liquidity pool expansion",
      icon: <BarChart3 className="w-4 h-4" />,
    },
    {
      name: "Digital Trade Corridors",
      status: "Implementation",
      timeline: "2025-2026",
      partners: ["AU Commission", "National Governments", "Tech Giants"],
      impact: "Trade cost reduction",
      icon: <Globe className="w-4 h-4" />,
    },
    {
      name: "Climate Finance Facility",
      status: "Launching",
      timeline: "2025-2030",
      partners: ["Climate Funds", "DFIs", "Private Sector"],
      impact: "Carbon reduction targets",
      icon: <Leaf className="w-4 h-4" />,
    },
    {
      name: "Innovation Fellowship Program",
      status: "Ongoing",
      timeline: "2024-2026",
      partners: ["Universities", "Corporates", "VC Firms"],
      impact: "Talent retention",
      icon: <Rocket className="w-4 h-4" />,
    },
  ];

  // Our Approach
  const approachSteps = [
    {
      step: "01",
      title: "Strategic Diagnosis",
      description:
        "Comprehensive analysis of systemic challenges and opportunities",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      step: "02",
      title: "Multi-stakeholder Engagement",
      description:
        "Bringing together governments, private sector, and civil society",
      icon: <Network className="w-5 h-5" />,
    },
    {
      step: "03",
      title: "Solution Co-creation",
      description: "Developing African-led, context-specific interventions",
      icon: <Lightbulb className="w-5 h-5" />,
    },
    {
      step: "04",
      title: "Implementation Framework",
      description: "Structured execution with clear accountability and metrics",
      icon: <Target className="w-5 h-5" />,
    },
    {
      step: "05",
      title: "Impact Measurement",
      description: "Rigorous tracking of outcomes and continuous improvement",
      icon: <BarChart3 className="w-5 h-5" />,
    },
  ];

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      emerald: "bg-emerald-500 text-emerald-50",
      blue: "bg-blue-500 text-blue-50",
      green: "bg-green-500 text-green-50",
      violet: "bg-violet-500 text-violet-50",
    };
    return colors[color] || "bg-emerald-500 text-emerald-50";
  };

  const getBorderColor = (color: string) => {
    const colors: Record<string, string> = {
      emerald: "border-emerald-200",
      blue: "border-blue-200",
      green: "border-green-200",
      violet: "border-violet-200",
    };
    return colors[color] || "border-emerald-200";
  };

  return (
    <DefaultLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section with Background Image */}
        <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Blur and Dark Overlay */}
          <div className="absolute inset-0 z-0">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80"
                alt="Africa strategic development background"
                className="w-full h-full object-cover blur-md scale-110"
                loading="eager"
              />
            </div>

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

            {/* Subtle Color Overlay for Branding */}
            <div className="absolute inset-0 bg-emerald-900/10 mix-blend-overlay" />

            {/* Subtle Geometric Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]" />
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
            <div className="text-center">
              {/* Badge with Glass Effect */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                <span className="text-xs font-medium text-white/90 tracking-widest">
                  STRATEGIC BODY
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
                <span className="block">Cranfield Africa</span>
                <span className="block text-emerald-300 font-normal mt-2">
                  Impact Summit
                </span>
              </h1>

              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                A continental body dedicated to driving systemic transformation
                through strategic coordination, evidence-based policy, and
                catalytic partnerships.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mt-16">
                {[
                  {
                    value: "15+",
                    label: "Member Countries",
                    icon: <Globe className="w-4 h-4" />,
                  },
                  {
                    value: "200+",
                    label: "Strategic Partners",
                    icon: <Handshake className="w-4 h-4" />,
                  },
                  {
                    value: "$50B+",
                    label: "Catalyzed Investment",
                    icon: <TrendingUp className="w-4 h-4" />,
                  },
                  {
                    value: "50+",
                    label: "Active Initiatives",
                    icon: <Target className="w-4 h-4" />,
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center transform transition-all duration-500 ${
                      hasMounted
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="text-emerald-300">{stat.icon}</div>
                      <div className="text-3xl font-bold text-white">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-sm text-white/80 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Indicator */}
              <div className="mt-16 animate-bounce">
                <ChevronRight className="w-6 h-6 text-white/60 rotate-90 mx-auto" />
                <span className="text-xs text-white/60 mt-2 block">
                  Explore Our Work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mandate Section */}
        <div className="bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-8 h-px bg-emerald-500" />
                  <span className="text-emerald-600 text-sm font-medium tracking-widest uppercase">
                    OUR MANDATE
                  </span>
                </div>
                <h2 className="text-3xl font-light text-gray-900 mb-6">
                  Catalyzing Africa's{" "}
                  <span className="text-emerald-600 font-normal">
                    Systemic Transformation
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We operate as a strategic coordination body that bridges
                  policy, investment, and innovation to address Africa's most
                  pressing development challenges.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Facilitate cross-border collaboration and knowledge
                      exchange
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Develop evidence-based policy frameworks and
                      implementation roadmaps
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Mobilize catalytic capital for high-impact initiatives
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-xl font-medium text-gray-900 mb-6">
                  Our Unique Value Proposition
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Neutral Platform",
                      desc: "Trusted convenor across sectors and geographies",
                    },
                    {
                      title: "Deep Contextual Knowledge",
                      desc: "African-led solutions for African challenges",
                    },
                    {
                      title: "Multi-stakeholder Approach",
                      desc: "Bridging public, private, and civil society",
                    },
                    {
                      title: "Focus on Implementation",
                      desc: "Moving beyond dialogue to tangible impact",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-full ${getColorClass(
                          "emerald"
                        )} flex items-center justify-center flex-shrink-0`}
                      >
                        <span className="font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Pillars */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-emerald-500" />
                <span className="text-emerald-600 text-sm font-medium tracking-widest uppercase">
                  STRATEGIC PILLARS
                </span>
                <div className="w-12 h-px bg-emerald-500" />
              </div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Our{" "}
                <span className="text-emerald-600 font-normal">
                  Focus Areas
                </span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Four interconnected pillars that form the foundation of our work
              </p>
            </div>

            {/* Pillar Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {strategicPillars.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    activePillar === pillar.id
                      ? `${getColorClass(pillar.color)} shadow-sm`
                      : `bg-white text-gray-600 hover:text-gray-900 border border-gray-200`
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {pillar.icon}
                    <span>{pillar.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Pillar Detail */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              {strategicPillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className={`p-8 md:p-12 transition-all duration-300 ${
                    activePillar === pillar.id ? "block" : "hidden"
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`w-16 h-16 rounded-full ${getColorClass(
                            pillar.color
                          )} flex items-center justify-center`}
                        >
                          {pillar.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-light text-gray-900">
                            {pillar.title}
                          </h3>
                          <p className="text-gray-600">{pillar.description}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-medium text-gray-900">
                          Key Initiatives
                        </h4>
                        <ul className="space-y-3">
                          {pillar.initiatives.map((initiative, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div
                                className={`w-2 h-2 rounded-full mt-2 bg-${pillar.color}-500`}
                              />
                              <span className="text-gray-700">
                                {initiative}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                      <h4 className="font-medium text-gray-900 mb-4">
                        Current Focus
                      </h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Policy Development</span>
                            <span>85%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-${pillar.color}-500 rounded-full w-4/5`}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Stakeholder Engagement</span>
                            <span>70%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-${pillar.color}-500 rounded-full w-7/10`}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Implementation Readiness</span>
                            <span>45%</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-${pillar.color}-500 rounded-full w-45/100`}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Agendas */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-emerald-500" />
                <span className="text-emerald-600 text-sm font-medium tracking-widest uppercase">
                  CORE AGENDAS
                </span>
                <div className="w-12 h-px bg-emerald-500" />
              </div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                What We're{" "}
                <span className="text-emerald-600 font-normal">Working On</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Tangible, measurable initiatives driving systemic change across
                the continent
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {coreAgendas.map((agenda, index) => (
                <div
                  key={index}
                  className={`bg-white border ${getBorderColor(
                    "emerald"
                  )} rounded-xl p-6 hover:shadow-md transition-shadow ${
                    hasMounted
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        {agenda.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {agenda.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{agenda.timeline}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-600">
                        {agenda.progress}%
                      </div>
                      <div className="text-xs text-gray-500">Progress</div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">
                    {agenda.description}
                  </p>
                  <div className="space-y-3">
                    {agenda.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-gray-700">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                How We{" "}
                <span className="text-emerald-600 font-normal">Operate</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                A structured methodology for driving sustainable impact at scale
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 transform -translate-y-1/2" />

              <div className="grid lg:grid-cols-5 gap-6">
                {approachSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div
                      className={`bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow ${
                        hasMounted
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95"
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg font-bold mb-4 mx-auto">
                        {step.step}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 mx-auto">
                        {step.icon}
                      </div>
                      <h3 className="font-medium text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Initiatives */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-6">
                Active{" "}
                <span className="text-emerald-600 font-normal">
                  Initiatives
                </span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Current projects and partnerships driving our agenda forward
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {keyInitiatives.map((initiative, index) => (
                  <div
                    key={index}
                    className={`p-6 border-b md:border-b-0 md:border-r border-gray-200 hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? "md:border-r" : ""
                    } ${index < 2 ? "border-b" : ""}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                          {initiative.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {initiative.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span
                              className={`px-2 py-1 text-xs rounded-full ${
                                initiative.status === "Active"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : initiative.status === "Implementation"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-amber-100 text-amber-800"
                              }`}
                            >
                              {initiative.status}
                            </span>
                            <span className="text-xs text-gray-500">
                              {initiative.timeline}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">
                          Key Partners
                        </div>
                        <div className="text-sm text-gray-700">
                          {initiative.partners.slice(0, 2).join(", ")}
                          {initiative.partners.length > 2 &&
                            ` +${initiative.partners.length - 2}`}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">
                          Expected Impact
                        </div>
                        <div className="text-sm text-gray-700">
                          {initiative.impact}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center text-white">
              <h2 className="text-3xl font-light mb-6">
                Join Us in Shaping Africa's Future
              </h2>
              <p className="text-emerald-100 text-lg max-w-3xl mx-auto mb-8">
                Our work depends on strategic partnerships with governments,
                institutions, and visionary leaders committed to Africa's
                transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-emerald-600 hover:bg-emerald-50 font-medium rounded-lg transition-colors flex items-center gap-2 justify-center">
                  Explore Partnership Opportunities
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-lg transition-colors">
                  Download Annual Report
                </button>
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
                {" • "}A continental body driving systemic transformation since
                2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Agenda;
