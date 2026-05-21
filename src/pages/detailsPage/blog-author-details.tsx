// AuthorDetails.tsx
import {
  Calendar,
  Clock,
  Linkedin,
  Mail,
  MapPin,
  ArrowLeft,
  User,
  Award,
  Heart,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import DefaultLayout from "../../layout/DefaultLayout";
import { getAuthorBySlug } from "../../data/blogs-data";

const AuthorDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const author = getAuthorBySlug(slug || "");

  if (!author) {
    return (
      <DefaultLayout>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-4">
              Author not found
            </h1>
            <Link
              to="/blogs"
              className="text-gray-900 underline hover:text-gray-600 transition-colors"
            >
              Return to Blogs
            </Link>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <>
      {/* Hero Section - Vogue style with large typography */}
      <div className="relative min-h-[60vh] bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl px-4 pt-32 pb-16">
          {/* Back button */}
          <Link
            to="/blogs"
            className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-12 transition-colors text-sm tracking-wide group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            BACK TO BLOG
          </Link>

          {/* Author Header - Vogue editorial style */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Author Image - Large and prominent */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full blur-xl opacity-50"></div>
                <div className="relative w-64 h-64 mx-auto lg:w-full lg:h-auto aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  {author.image ? (
                    <img
                      src={author.image}
                      alt={author.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <User className="w-20 h-20 text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Author Info - Vogue typography */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs tracking-widest text-gray-400 uppercase">
                    <Award className="w-3 h-3" />
                    <span>Contributor</span>
                  </div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 tracking-tight leading-tight">
                    {author.name.split(" ")[0]}
                    <br />
                    <span className="font-serif italic text-gray-400">
                      {author.name.split(" ").slice(1).join(" ")}
                    </span>
                  </h1>
                </div>

                <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
                  {author.title}
                </p>

                {author.location && (
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{author.location}</span>
                  </div>
                )}

                {/* Social Links - Minimal Vogue style */}
                {author.social && (
                  <div className="flex gap-4 pt-4">
                    {author.social.linkedin && (
                      <a
                        href={author.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}

                    {author.social.email && (
                      <a
                        href={`mailto:${author.social.email}`}
                        className="text-gray-400 hover:text-gray-900 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Editorial layout */}
      <div className="bg-white border-t border-gray-100">
        <div className="container mx-auto max-w-5xl px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Stats and Expertise */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Expertise Section */}
                {author.expertise && author.expertise.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xs tracking-widest text-gray-400 uppercase font-semibold">
                      Areas of Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {author.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs tracking-wide hover:bg-gray-100 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact Card */}
                {author.social?.email && (
                  <div className="space-y-4 pt-8 border-t border-gray-100">
                    <h3 className="text-xs tracking-widest text-gray-400 uppercase font-semibold">
                      Contact
                    </h3>
                    <a
                      href={`mailto:${author.social.email}`}
                      className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {author.social.email}
                    </a>
                  </div>
                )}

                {/* Stats */}
                <div className="pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">
                        {author.posts?.length || 0}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                        Articles
                      </div>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div className="text-center">
                      <div className="text-2xl font-light text-gray-900">
                        {author.posts?.reduce((total, post) => {
                          const minutes = parseInt(post.readTime);
                          return total + (isNaN(minutes) ? 0 : minutes);
                        }, 0) || 0}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                        Minutes Read
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Bio and Articles */}
            <div className="lg:col-span-2">
              {/* Biography - Vogue editorial style */}
              <div className="space-y-6 mb-12">
                <h2 className="text-2xl font-light text-gray-900 tracking-tight">
                  Biography
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed font-light text-lg whitespace-pre-line">
                    {author.longBio || author.bio}
                  </p>
                </div>
              </div>

              {/* Articles Section - Editorial grid */}
              {author.posts && author.posts.length > 0 && (
                <div className="space-y-8">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <h2 className="text-2xl font-light text-gray-900 tracking-tight">
                      Featured Articles
                    </h2>
                    <Heart className="w-4 h-4 text-gray-300" />
                  </div>

                  <div className="space-y-8">
                    {author.posts.map((post, index) => (
                      <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                        className="group block transition-all duration-300"
                      >
                        <article className="border-b border-gray-50 pb-8 last:border-0">
                          <div className="space-y-3">
                            {/* Article number for editorial feel */}
                            <div className="text-sm text-gray-300 font-light tracking-wide">
                              {String(index + 1).padStart(2, "0")}
                            </div>

                            <h3 className="text-xl font-light text-gray-900 group-hover:text-gray-600 transition-colors leading-relaxed">
                              {post.title}
                            </h3>

                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 font-light">
                              {post.excerpt}
                            </p>

                            <div className="flex items-center gap-4 text-xs text-gray-400">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {post.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                              </span>
                            </div>

                            {/* Subtle hover indicator */}
                            <div className="w-0 h-px bg-gray-300 group-hover:w-12 transition-all duration-300"></div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quote or signature - Vogue style */}
              <div className="mt-16 pt-8 border-t border-gray-100">
                <blockquote className="text-center">
                  <p className="text-gray-400 text-sm italic font-light tracking-wide">
                    "Writing about ideas that shape the future of Africa"
                  </p>
                  <div className="w-12 h-px bg-gray-200 mx-auto mt-4"></div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorDetails;
