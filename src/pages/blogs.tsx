import DefaultLayout from "../layout/DefaultLayout";
import { Calendar, User, Clock, ArrowRight, Tag, Search } from "lucide-react";
import { useState } from "react";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const blogCategories = [
    { id: "all", name: "All Posts", count: 12 },
    { id: "innovation", name: "Innovation", count: 4 },
    { id: "africa", name: "Africa Focus", count: 3 },
    { id: "sustainability", name: "Sustainability", count: 2 },
    { id: "events", name: "Event Recaps", count: 3 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of African Innovation: Trends Shaping 2025",
      excerpt:
        "Exploring the key technological and social innovations that are driving progress across the African continent and creating new opportunities for impact-driven entrepreneurship.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2025",
      readTime: "6 min read",
      category: "innovation",
      image: "/images/blog1.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Sustainable Development in Emerging Markets",
      excerpt:
        "How innovative approaches to sustainability are creating resilient economies and empowering communities across Africa through technology and collaboration.",
      author: "Michael Adebayo",
      date: "March 10, 2025",
      readTime: "8 min read",
      category: "sustainability",
      image: "/images/blog2.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Recap: Africa Innovation Lab Ideas Mapping Session",
      excerpt:
        "A comprehensive look at the outcomes from our recent innovation lab, highlighting key insights and solutions proposed by participants.",
      author: "Cranfield Africa Summit Team",
      date: "February 28, 2025",
      readTime: "5 min read",
      category: "events",
      image: "/images/blog3.jpg",
      featured: true,
    },
    {
      id: 4,
      title: "Youth Empowerment Through Digital Skills",
      excerpt:
        "How digital literacy programs are transforming opportunities for young people in Africa and creating the next generation of tech leaders.",
      author: "Amina Mohammed",
      date: "February 20, 2025",
      readTime: "7 min read",
      category: "africa",
      image: "/images/blog4.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Circular Economy Models for African Cities",
      excerpt:
        "Examining successful circular economy implementations in African urban centers and their potential for scale across the continent.",
      author: "Kwame Nkrumah",
      date: "February 15, 2025",
      readTime: "9 min read",
      category: "sustainability",
      image: "/images/blog5.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Fintech Revolution: Banking the Unbanked",
      excerpt:
        "The transformative power of fintech in providing financial inclusion to millions across Africa and its socioeconomic impact.",
      author: "David Osei",
      date: "February 10, 2025",
      readTime: "6 min read",
      category: "innovation",
      image: "/images/blog6.jpg",
      featured: false,
    },
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

  const featuredPost = blogPosts.find((post) => post.featured);

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
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-400 w-5 h-5" />
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

        {/* Featured Post (Large) */}
        {featuredPost && activeCategory === "all" && searchQuery === "" && (
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="h-10 w-1 bg-emerald-500 mr-3"></div>
              <h2 className="text-2xl font-bold text-gray-900">
                Featured Article
              </h2>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <div className="h-64 md:h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-transparent z-10"></div>
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:w-3/5 p-8">
                  <div className="mb-4">
                    <span className="inline-block bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      {featuredPost.category.charAt(0).toUpperCase() +
                        featuredPost.category.slice(1)}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-emerald-600 transition-colors duration-300">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-emerald-500" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-emerald-500" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-emerald-500" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <button className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div>
          <div className="flex items-center mb-6">
            <div className="h-10 w-1 bg-emerald-500 mr-3"></div>
            <h2 className="text-2xl font-bold text-gray-900">
              {activeCategory === "all"
                ? "Latest Articles"
                : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Articles`}
            </h2>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-emerald-200 group"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-emerald-500 text-white px-2 py-1 rounded text-xs font-medium">
                        {post.category.charAt(0).toUpperCase() +
                          post.category.slice(1)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1 text-emerald-500" />
                        <span className="truncate max-w-[120px]">
                          {post.author}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-emerald-500" />
                        <span>{post.date.split(",")[0]}</span>
                      </div>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                      <button className="inline-flex items-center text-emerald-600 font-medium text-sm hover:text-emerald-700 transition-colors duration-300 group/btn">
                        Read more
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-gradient-to-r from-emerald-50 to-white rounded-2xl p-12 text-center border-2 border-dashed border-emerald-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6">
                <Search className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                No articles found
              </h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                {searchQuery
                  ? `No articles match "${searchQuery}". Try searching for something else or browse all categories.`
                  : "No articles in this category yet."}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="inline-flex items-center text-emerald-600 font-medium hover:text-emerald-700"
              >
                View all articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          )}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-emerald-700 to-emerald-800 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/20 rounded-full translate-y-24 -translate-x-24"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-emerald-100 px-4 py-2 rounded-full mb-6">
              <Tag className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Stay Updated</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Never Miss an Insight</h3>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to receive new
              articles, event updates, and exclusive content about innovation
              and impact in Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-emerald-300/30 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:border-transparent"
              />
              <button className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Blogs;
