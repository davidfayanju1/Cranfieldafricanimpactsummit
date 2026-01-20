import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  Linkedin,
  MapPin,
  Calendar,
  BookOpen,
  Briefcase,
  Users,
  ChevronRight,
  ExternalLink,
  GraduationCap,
  Target,
  Sparkles,
} from "lucide-react";
import DefaultLayout from "../../layout/DefaultLayout";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  fullBio: string;
  image: string;
  linkedin: string;
  email: string;
  location: string;
  yearsAtCranfield: number;
  education: string[];
  expertise: string[];
  achievements?: string[];
  publications?: string[];
}

const TeamMemberDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [member, setMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Nseobong Umoh",
      role: "Vice President",
      bio: "Nseobong Umoh is the Vice President of the Cranfield Africa Impact Society. He is an MBA alumnus (Class of 2025) of the Cranfield University School of Management and is currently completing an MSc in Systems Engineering (part-time), with a focus on applying systems engineering and systems thinking to complex, real-world challenges.",
      fullBio: `Nseobong Umoh is the Vice President of the Cranfield Africa Impact Society. He is an MBA alumnus (Class of 2025) of the Cranfield University School of Management and is currently completing an MSc in Systems Engineering (part-time), with a focus on applying systems engineering and systems thinking to complex, real-world challenges.

With over 8 years of experience in project management and strategic planning, Nseobong has worked across multiple sectors including technology, education, and social impact initiatives. He is passionate about driving sustainable development in Africa through innovative solutions and collaborative partnerships.

At Cranfield, Nseobong has been instrumental in building cross-cultural connections and fostering meaningful dialogue around Africa's development agenda. His leadership style emphasizes inclusivity, data-driven decision making, and sustainable impact.`,
      image: "/images/Obong.jpeg",
      linkedin: "https://www.linkedin.com/in/nseobong-umoh-9830257a/",
      email: "nseobong.umoh@example.com",
      location: "London, UK",
      yearsAtCranfield: 2,
      education: [
        "MBA, Cranfield University School of Management (2025)",
        "MSc in Systems Engineering, Cranfield University (Ongoing)",
        "BEng in Mechanical Engineering, University of Lagos",
      ],
      expertise: [
        "Strategic Planning",
        "Project Management",
        "Systems Thinking",
        "Stakeholder Engagement",
        "Cross-cultural Leadership",
      ],
      achievements: [
        "Led the organization of the 2023 Africa Impact Summit",
        "Increased society membership by 40% in 2024",
        "Established partnerships with 3 major African organizations",
        "Received the Cranfield Leadership Excellence Award (2023)",
      ],
      publications: [
        "Systems Thinking for Sustainable Development in Africa",
        "The Role of Education in African Innovation Ecosystems",
      ],
    },
    {
      id: 2,
      name: "Obed Oduro Asamoah",
      role: "Media & Digital Relations Lead",
      bio: "Obed Oduro Asamoah is the Media & Digital Relations Lead of the Cranfield Africa Impact Society. He is a current MSc student at Cranfield University, Faculty of Environmental and Applied Science, offering Environmental Engineering (full-time).",
      fullBio: `Obed Oduro Asamoah is the Media & Digital Relations Lead of the Cranfield Africa Impact Society. He is a current MSc student at Cranfield University, Faculty of Environmental and Applied Science, offering Environmental Engineering (full-time).

With a strong background in digital communication and environmental advocacy, Obed specializes in creating compelling narratives that bridge technical knowledge with public engagement. He has worked on several environmental campaigns and digital outreach programs across West Africa.

As Media Lead, Obed is responsible for shaping the society's digital presence, managing content strategy, and building relationships with media partners. He believes in the power of storytelling to drive environmental awareness and sustainable action.`,
      image: "/images/obed.jpeg",
      linkedin: "https://www.linkedin.com/in/obed-asamoah-4b2249385/",
      email: "obed.asamoah@example.com",
      location: "Accra, Ghana",
      yearsAtCranfield: 1,
      education: [
        "MSc in Environmental Engineering, Cranfield University (Ongoing)",
        "BSc in Environmental Science, University of Ghana",
      ],
      expertise: [
        "Digital Media Strategy",
        "Content Creation",
        "Environmental Communication",
        "Social Media Management",
        "Public Relations",
      ],
      achievements: [
        "Grew social media following by 300% in 6 months",
        "Produced award-winning documentary on African environmental initiatives",
        "Managed successful digital campaign reaching 50,000+ people",
      ],
    },
    // Add other team members similarly
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundMember = teamMembers.find((m) => m.id === Number(id));
      setMember(foundMember || null);
      setLoading(false);
    }, 300);
  }, [id]);

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
              Team Member Not Found
            </h1>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              The team member you're looking for doesn't exist.
            </p>
            <button
              onClick={() => navigate("/team")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Team
            </button>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    // <DefaultLayout>
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Navigation */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="py-4">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Team
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Profile Info */}
          <div className="lg:w-1/3 space-y-8">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              {/* Profile Image */}
              <div className="relative h-64">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                {/* Role Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h1>
                <div className="text-emerald-600 font-medium mb-6">
                  {member.role}
                </div>

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  {member.email && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Email</div>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-sm font-medium text-gray-900 hover:text-emerald-600"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {member.linkedin && member.linkedin !== "#" && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <Linkedin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">LinkedIn</div>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-gray-900 hover:text-emerald-600 inline-flex items-center gap-1"
                        >
                          Connect on LinkedIn
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}

                  {member.location && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Location</div>
                        <div className="text-sm font-medium text-gray-900">
                          {member.location}
                        </div>
                      </div>
                    </div>
                  )}

                  {member.yearsAtCranfield && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-violet-100 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-violet-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Experience</div>
                        <div className="text-sm font-medium text-gray-900">
                          {member.yearsAtCranfield} year
                          {member.yearsAtCranfield > 1 ? "s" : ""} at Cranfield
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-600" />
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-sm rounded-full border border-emerald-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Info */}
          <div className="lg:w-2/3 space-y-8">
            {/* Biography */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-1 bg-emerald-500 rounded-full"></div>
                Biography
              </h2>
              <div className="prose prose-emerald max-w-none">
                {formatBio(member.fullBio)}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-1 bg-emerald-500 rounded-full"></div>
                <BookOpen className="w-6 h-6 text-emerald-600" />
                Education
              </h2>
              <div className="space-y-4">
                {member.education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{edu}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements (if available) */}
            {member.achievements && member.achievements.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-1 bg-emerald-500 rounded-full"></div>
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                  Key Achievements
                </h2>
                <div className="space-y-3">
                  {member.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50/50 to-white rounded-xl border border-emerald-100"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Publications (if available) */}
            {member.publications && member.publications.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-1 bg-emerald-500 rounded-full"></div>
                  <Briefcase className="w-6 h-6 text-emerald-600" />
                  Publications
                </h2>
                <div className="space-y-3">
                  {member.publications.map((publication, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-gray-700">{publication}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back to Team Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/team")}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-100 text-gray-700 rounded-full hover:bg-emerald-50 hover:text-emerald-700 transition-colors group"
          >
            <Users className="w-5 h-5" />
            View All Team Members
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
    // </DefaultLayout>
  );
};

export default TeamMemberDetails;
