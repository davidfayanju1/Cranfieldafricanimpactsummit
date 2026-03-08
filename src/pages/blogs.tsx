import DefaultLayout from "../layout/DefaultLayout";
import {
  Calendar,
  ArrowRight,
  Tag,
  Search,
  BookOpen,
  Feather,
  Edit3,
  Sparkles,
  PenTool,
} from "lucide-react";
import { useState } from "react";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const blogCategories = [
    { id: "all", name: "All Posts", count: 0 },
    { id: "innovation", name: "Innovation", count: 0 },
    { id: "africa", name: "Africa Focus", count: 0 },
    { id: "sustainability", name: "Sustainability", count: 0 },
    { id: "events", name: "Event Recaps", count: 0 },
  ];

  const blogPosts: any[] = [
    // {
    //   id: 1,
    //   title: "The Future of African Innovation: Trends Shaping 2025",
    //   excerpt:
    //     "Exploring the key technological and social innovations that are driving progress across the African continent and creating new opportunities for impact-driven entrepreneurship.",
    //   author: "Dr. Sarah Johnson",
    //   date: "March 15, 2025",
    //   readTime: "6 min read",
    //   category: "innovation",
    //   image: "/images/blog1.jpg",
    //   featured: true,
    // },
    // {
    //   id: 2,
    //   title: "Sustainable Development in Emerging Markets",
    //   excerpt:
    //     "How innovative approaches to sustainability are creating resilient economies and empowering communities across Africa through technology and collaboration.",
    //   author: "Michael Adebayo",
    //   date: "March 10, 2025",
    //   readTime: "8 min read",
    //   category: "sustainability",
    //   image: "/images/blog2.jpg",
    //   featured: false,
    // },
    // {
    //   id: 3,
    //   title: "Recap: Africa Innovation Lab Ideas Mapping Session",
    //   excerpt:
    //     "A comprehensive look at the outcomes from our recent innovation lab, highlighting key insights and solutions proposed by participants.",
    //   author: "Cranfield Africa Summit Team",
    //   date: "February 28, 2025",
    //   readTime: "5 min read",
    //   category: "events",
    //   image: "/images/blog3.jpg",
    //   featured: true,
    // },
    // {
    //   id: 4,
    //   title: "Youth Empowerment Through Digital Skills",
    //   excerpt:
    //     "How digital literacy programs are transforming opportunities for young people in Africa and creating the next generation of tech leaders.",
    //   author: "Amina Mohammed",
    //   date: "February 20, 2025",
    //   readTime: "7 min read",
    //   category: "africa",
    //   image: "/images/blog4.jpg",
    //   featured: false,
    // },
    // {
    //   id: 5,
    //   title: "Circular Economy Models for African Cities",
    //   excerpt:
    //     "Examining successful circular economy implementations in African urban centers and their potential for scale across the continent.",
    //   author: "Kwame Nkrumah",
    //   date: "February 15, 2025",
    //   readTime: "9 min read",
    //   category: "sustainability",
    //   image: "/images/blog5.jpg",
    //   featured: false,
    // },
    // {
    //   id: 6,
    //   title: "Fintech Revolution: Banking the Unbanked",
    //   excerpt:
    //     "The transformative power of fintech in providing financial inclusion to millions across Africa and its socioeconomic impact.",
    //   author: "David Osei",
    //   date: "February 10, 2025",
    //   readTime: "6 min read",
    //   category: "innovation",
    //   image: "/images/blog6.jpg",
    //   featured: false,
    // },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-900 to-emerald-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto pt-[8rem] px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center bg-emerald-700/30 backdrop-blur-sm text-emerald-200 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">Thought Leadership</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & <span className="text-emerald-300">Perspectives</span>
            </h1>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Discover thought-provoking articles, event recaps, and expert
              insights on innovation, sustainability, and impact across Africa.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search className="absolute z-30 left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-emerald-300/30 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Browse Categories
            </h2>
            <div className="text-sm text-gray-500">
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "article" : "articles"} found
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-emerald-500 text-white shadow-emerald-200 shadow-sm"
                    : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                }`}
              >
                <span>{category.name}</span>
                <span
                  className={`px-2 py-0.5 text-xs rounded-full ${
                    activeCategory === category.id
                      ? "bg-white/20"
                      : "bg-emerald-200/50"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Empty State - Beautiful Design */}
        <div className="min-h-[60vh] flex items-center justify-center py-16">
          <div className="max-w-3xl mx-auto text-center">
            {/* Animated Icon Container */}
            <div className="relative mb-8">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>

              {/* Main Icon Circle */}
              <div className="relative inline-flex">
                <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-20"></div>
                <div className="relative z-10 w-28 h-28 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full flex items-center justify-center shadow-xl">
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-200/50 animate-spin-slow"></div>
                  <PenTool className="w-12 h-12 text-emerald-600 transform -rotate-12" />
                </div>

                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 animate-float-slow">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shadow-lg">
                    <Feather className="w-6 h-6 text-amber-600" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 animate-float">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shadow-lg">
                    <Edit3 className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Empty State Message */}
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Coming Soon
            </h2>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                First Edition
              </span>
            </div>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We're crafting insightful stories and expert perspectives on
              <span className="text-emerald-600 font-medium"> innovation</span>,
              <span className="text-emerald-600 font-medium">
                {" "}
                sustainability
              </span>
              , and
              <span className="text-emerald-600 font-medium"> impact</span>{" "}
              across Africa. Our first articles will be published soon.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Expert Insights
                </h3>
                <p className="text-sm text-gray-500">
                  Thought leadership from industry pioneers
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Calendar className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Event Recaps
                </h3>
                <p className="text-sm text-gray-500">
                  Highlights from our summits and gatherings
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Tag className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Case Studies
                </h3>
                <p className="text-sm text-gray-500">
                  Real-world impact stories from Africa
                </p>
              </div>
            </div>

            {/* Newsletter Signup - Prominent */}
            {/* <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Be the First to Know
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Subscribe to receive notifications when we publish new articles
                and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 outline-none transition-all"
                />
                <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-300 whitespace-nowrap">
                  Notify Me
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                No spam, only quality content. Unsubscribe anytime.
              </p>
            </div> */}

            {/* Browse Categories Link */}
            <div className="mt-8">
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors group"
              >
                Browse all categories
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup - Original (commented out or removed) */}
        {/* Remove the original newsletter signup since we have a better one in the empty state */}
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </DefaultLayout>
  );
};

export default Blogs;
