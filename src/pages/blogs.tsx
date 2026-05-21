// Blogs.tsx
import DefaultLayout from "../layout/DefaultLayout";
import {
  ArrowRight,
  Search,
  Feather,
  Edit3,
  Sparkles,
  PenTool,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogs-data";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Calculate category counts dynamically
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return blogPosts.length;
    return blogPosts.filter((post) => post.category === categoryId).length;
  };

  const blogCategories = [
    { id: "all", name: "All Posts" },
    { id: "africa", name: "Africa Focus" },
    { id: "healthcare", name: "Healthcare" },
    { id: "innovation", name: "Innovation" },
    { id: "sustainability", name: "Sustainability" },
  ].map((cat) => ({
    ...cat,
    count: getCategoryCount(cat.id),
  }));

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
              insights on innovation, sustainability, healthcare, and impact
              across Africa.
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

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                to={`/blog/${post.id}`}
                key={post.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-48 bg-emerald-100 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full capitalize">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <Link
                        to={`/author/${post.authorSlug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-gray-500 hover:text-emerald-600 transition-colors block"
                      >
                        {post.author}
                      </Link>
                    </div>
                    <span className="text-emerald-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="min-h-[60vh] flex items-center justify-center py-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-emerald-200/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative inline-flex">
                  <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-20"></div>
                  <div className="relative z-10 w-28 h-28 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full flex items-center justify-center shadow-xl">
                    <div className="absolute inset-0 rounded-full border-2 border-emerald-200/50 animate-spin-slow"></div>
                    <PenTool className="w-12 h-12 text-emerald-600 transform -rotate-12" />
                  </div>
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

              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
                No Articles Found
              </h2>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-700">
                  Try different keywords
                </span>
              </div>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                We couldn't find any articles matching your search. Try
                adjusting your filters or explore different categories.
              </p>

              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-300 group"
              >
                Clear filters
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        )}
      </div>

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
