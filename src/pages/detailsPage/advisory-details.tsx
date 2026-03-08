"use client";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Linkedin,
  Building2,
  MapPin,
  Quote,
  Users,
  ChevronRight,
  ExternalLink,
  Target,
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
  linkedin?: string;
  bio: string;
  location: string;
  featuredQuote?: string;
  accentColor?: string;
}

const AdvisoryDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [member, setMember] = useState<CommitteeMember | null>(null);
  const [loading, setLoading] = useState(true);

  // Real data from the PDF
  const committeeMembers: CommitteeMember[] = [
    // Advisory Circle - Mentor
    {
      id: "1",
      name: "DR. INYENE NKANTA",
      title: "Lecturer in Business & Creative Industries",
      organization: "University of the West of Scotland",
      role: "Mentor",
      expertise: ["Entrepreneurship", "Sustainability", "Circular Economy"],
      image: "/images/INYENE.jpeg",
      linkedin: "inyene-nkanta-1a9b5590",
      bio: "Dr. Inyene is a Lecturer in Business and the Creative Industries at the University of the West of Scotland, United Kingdom. She holds a Doctorate degree from the University of Wolverhampton and is a specialist in Entrepreneurship, Sustainability, and the Circular Economy.\n\nHer research explores entrepreneurship, sustainable business models, circular economy practices, and social impact initiatives within global and African contexts. She collaborates on international projects across Europe and Africa and currently serves as a Visiting Lecturer at several universities, including VIVES University of Applied Sciences (Belgium), Liberec University of Technology (Czech Republic), CBS (Germany), and Western Norway University of Applied Sciences (HVL, Norway).\n\nShe is also the Chair of the Sustainability Special Interest Group within the Academy for African Studies, where she leads interdisciplinary research and sustainability focused initiatives. A passionate advocate for youth empowerment and responsible digital influence, she uses social media to champion positive narratives around education, sustainability, and global citizenship. She is also the founder of the Academic Baddie, a group of dedicated African scholars.",
      location: "United Kingdom",
      featuredQuote:
        "A passionate advocate for youth empowerment and responsible digital influence.",
      accentColor: "emerald",
    },
    // Advisory Circle - Member
    {
      id: "2",
      name: "Lilian Awuor",
      title: "Product Manager",
      organization: "Tesco Technology",
      role: "Advisory Circle Member",
      expertise: ["Payments", "Product Innovation", "Financial Technology"],
      image: "/images/Lilian.jpeg",
      linkedin: "lilianawuor",
      bio: "Lilian Awuor is a payments and product innovation leader with 7+ years of experience spanning financial services, emerging technologies, and large-scale customer-centric financial technology products.\n\nShe currently serves as a Product Manager at Tesco Technology, where she leads the development of secure, scalable, and user-focused payment solutions used across the organisation's retail ecosystem in the UK and Central Europe.\n\nWith a background in the Financial Technology sector in the UK and the broader EEMEA market, Lilian brings a unique blend of technical expertise, strategic thinking, and market insight. Recognised for her collaborative leadership and ability to translate complex challenges into actionable product strategies.",
      location: "UK",
      featuredQuote:
        "Bringing technical expertise, strategic thinking, and market insight to payment innovation.",
      accentColor: "amber",
    },
    // Advisory Circle - Member
    {
      id: "3",
      name: "Olawunmi ('Wunmi) Adelusi",
      title: "Financial Sector Specialist",
      organization: "World Bank Group",
      role: "Advisory Circle Member",
      expertise: [
        "Development Finance",
        "Financial Inclusion",
        "Policy Development",
      ],
      image: "/images/Olawunmi.jpeg",
      linkedin: "wunmiadelusi",
      bio: "Wunmi is a finance professional dedicated to shaping policies that unlock economic opportunity, expand access to finance, and strengthen inclusive, resilient financial systems across Africa. She brings over a decade of experience spanning development finance, banking supervision, financial regulation, and policy development.\n\nShe currently serves as a Financial Sector Specialist at the World Bank Group, where she supports financial-sector reforms, unlocking long-term local currency financing, innovative financing mechanisms for MSMEs, and gender-responsive financial inclusion initiatives. Prior to joining the World Bank, she worked in the Banking Supervision Department of the Central Bank of Nigeria, contributing to key reforms in financial stability, cross-border supervision, digital financial inclusion, and regulatory policy development.\n\nWunmi holds an M.Sc. in Accounting and Finance (Distinction) from the University of Leeds, an MBA in Financial Management, and a B.Sc. in Accounting. She is a Chartered Accountant (ACA) and an Associate of the Chartered Institute of Bankers of Nigeria (ACIB). She is a published author of The Millennial Employee and a prolific writer whose thought leadership spans financial inclusion, women's economic empowerment, digital finance regulation, and leadership development. She is also a career columnist for BellaNaija, where she has published 40 articles. Her work on supervisory technology earned her the prestigious Toronto Centre Essay Competition Award.\n\nA lifelong learner, Wunmi is currently pursuing a PhD in Public Policy and Administration at Walden University (USA). She is also an alumna of the WIMBIZ Board Fellowship Program, reflecting her commitment to governance, leadership, and women's economic advancement.\n\nBeyond her technical expertise, Wunmi is deeply committed to mentoring the next generation of leaders. She currently serves as a mentor with the Amfani Zhiba Foundation and has previously supported emerging professionals through MentorMe Nigeria, Career Mums, and the HOPE Foundation.\n\nHer contributions to development finance and gender equality have earned her several recognitions, including being named one of the Top 100 Women Making Impact in Africa (2023), one of Nigeria's Top 100 Career Women by 9to5Chick, a finalist in RMB's 2025 Gender Mainstreaming Awards as one of Africa's \"Fearless Thinkers,\" and Winner of the Positive Role Model (West Africa) Award at the Gender Mainstreaming Awards.\n\nBeyond her professional pursuits, Wunmi finds deep joy in family life. She is happily married and a devoted mother to three children.",
      location: "USA / Nigeria",
      featuredQuote:
        "Shaping policies that unlock economic opportunity across Africa.",
      accentColor: "indigo",
    },
    // Patron
    {
      id: "4",
      name: "THELMA EKIYOR",
      title: "International Chief Executive Officer",
      organization: "Women for Women International",
      role: "Patron",
      expertise: [
        "Women's Economic Empowerment",
        "Philanthropy",
        "Impact Investing",
      ],
      image: "/images/THELMA.jpeg",
      linkedin: "thelma-ekiyor-34a484120",
      bio: "Thelma Ekiyor is an award-winning global leader in women's economic empowerment, philanthropy, impact investing, and international development, with over 25 years of experience across Africa, Europe, and the UK. Starting her early career in women, peace, and security, Thelma went on to pioneer and lead multiple organisations, including as founding CEO of SME.NG, Afrigrants, TY Danjuma Foundation and the West African Civil Society Institute (WACSI).\n\nThelma is also a doctoral researcher on women's entrepreneurship at Cranfield University, UK. She holds an MBA from Imperial College London and an LLB from the University of Buckingham, UK. She has served on numerous boards and investment committees in Africa and Europe, with additional expertise spanning gender lens investing, catalytic finance, philanthropy advisory, and entrepreneurship development.",
      location: "UK / Africa",
      featuredQuote:
        "Award-winning global leader in women's economic empowerment and impact investing.",
      accentColor: "blue",
    },
    // President/Chair
    {
      id: "5",
      name: "Ayodele Oluwaropo",
      title: "President/Chair",
      organization: "Cranfield Africa Impact Summit Society",
      role: "President/Chair",
      expertise: [
        "Climate Finance",
        "Impact Investment",
        "SME Advisory",
        "Youth Development",
      ],
      image: "/images/Ayodele.jpeg",
      linkedin: "ayodeleoluwaropo",
      bio: "Ayodele Oluwaropo is a PhD researcher at the Bettany Centre for Entrepreneurship, Cranfield University. He earned a bachelor's degree in Economics and Finance as well as an MSc in Finance and Investment Management from the University of Hertfordshire. Ayodele is committed to advancing Africa's sustainable development through policy, finance, and private sector innovation.\n\nWith experience spanning climate finance consulting, impact investment, SME advisory, and youth development, Ayodele has supported initiatives focused on climate policy implementation, access to sustainable finance, and SME Growth. His work bridges academia and practice, with research centred on how improved access to finance can enable African SMEs to scale, create jobs, and contribute meaningfully to the SDGs and Africa Agenda 2063.\n\nDriven by a passion for convening ideas and people, Ayodele founded the Cranfield Africa Impact Summit Society to create a platform for dialogue, mentorship, collaboration, and action among African change-makers within and beyond Cranfield University. His work reflects a deep commitment to building inclusive, resilient, and investment-ready pathways for Africa's future.",
      location: "UK",
      featuredQuote:
        "Advancing Africa's sustainable development through policy, finance, and private sector innovation.",
      accentColor: "violet",
    },
    // Vice President
    {
      id: "6",
      name: "Nseobong Umoh",
      title: "Vice President",
      organization: "Cranfield Africa Impact Society",
      role: "Vice President",
      expertise: [
        "Systems Engineering",
        "Technology Innovation",
        "Business Strategy",
      ],
      image: "/images/Nseobong.jpeg",
      linkedin: "nseobong-umoh-9830257a",
      bio: "Nseobong Umoh is the Vice President of the Cranfield Africa Impact Society. He is an MBA alumnus (Class of 2025) of the Cranfield University School of Management and is currently completing an MSc in Systems Engineering (part-time), with a focus on applying systems engineering and systems thinking to complex, real-world challenges.\n\nWith an engineering background and over a decade of industry experience, Nseobong operates at the intersection of technology, engineering, and commercial decision-making, bridging technical depth with business insight. He is an Incorporated Engineer (IEng) registered with the Engineering Council and a member of the Nigerian Society of Engineers.\n\nHis interests centre on translating technical innovation into commercially viable and scalable solutions, particularly within emerging markets, where the effective integration of technology, systems, and business models is critical to achieving sustainable impact.",
      location: "UK",
      featuredQuote:
        "Translating technical innovation into commercially viable solutions for emerging markets.",
      accentColor: "rose",
    },
    // Media & Digital Relations
    {
      id: "7",
      name: "Obed Oduro Asamoah",
      title: "Media & Digital Relations Lead",
      organization: "Cranfield Africa Impact Society",
      role: "Media & Digital Relations",
      expertise: [
        "Environmental Engineering",
        "Sustainable Solutions",
        "Digital Media",
      ],
      image: "/images/Obed.jpeg",
      linkedin: "obed-asamoah-4b2249385",
      bio: "Obed Oduro Asamoah is the Media & Digital Relations Lead of the Cranfield Africa Impact Society. He is a current MSc student at Cranfield University, Faculty of Environmental and Applied Science, studying Environmental Engineering (full-time).\n\nWith an Information Technology in Education background as an undergraduate program at AAMUSTED, Ghana. His interest lies in finding sustainable solutions to environmental problems through technology, critical thinking, and teamwork.",
      location: "UK / Ghana",
      featuredQuote:
        "Finding sustainable solutions to environmental problems through technology and teamwork.",
      accentColor: "teal",
    },
  ];

  useEffect(() => {
    // Find the member by ID
    setTimeout(() => {
      const foundMember = committeeMembers.find((m) => m.id === id);
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
      teal: "bg-teal-500",
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
      teal: "bg-teal-50 border-teal-100 text-teal-700",
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

                {/* Location */}
                <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-500">
                      LOCATION
                    </span>
                  </div>
                  <div className="text-lg font-light text-gray-900">
                    {member.location}
                  </div>
                </div>

                {/* Social Links - Only LinkedIn if available */}
                {member.linkedin && (
                  <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-sm font-medium text-gray-500 mb-4">
                      CONNECT
                    </h3>
                    <div className="space-y-3">
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
                    </div>
                  </div>
                )}
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

                {/* Content Sections */}
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
                      Biography
                    </h3>
                    <div className="text-gray-600 space-y-4">
                      {formatBio(member.bio)}
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
