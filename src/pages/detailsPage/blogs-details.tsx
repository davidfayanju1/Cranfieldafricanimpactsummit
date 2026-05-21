// BlogsDetails.tsx
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import { getAuthorBySlug, getBlogPostById } from "../../data/blogs-data";

const BlogsDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [author, setAuthor] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [shareSuccess, setShareSuccess] = useState(false);

  useEffect(() => {
    const blogPost = getBlogPostById(Number(id));
    setPost(blogPost || null);

    if (blogPost) {
      const authorData = getAuthorBySlug(blogPost.authorSlug);
      setAuthor(authorData || null);
    }

    setLoading(false);
  }, [id]);

  // REAL SHARE FEATURE - Opens native share dialog on mobile
  const handleNativeShare = async () => {
    const shareData = {
      title: post?.title || "Cranfield Africa Impact Summit",
      text:
        post?.excerpt ||
        "Check out this article from Cranfield Africa Impact Summit",
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Shared successfully");
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
      } catch (error) {
        console.log("Error copying to clipboard:", error);
      }
    }
  };

  if (loading) {
    return (
      <DefaultLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        </div>
      </DefaultLayout>
    );
  }

  if (!post) {
    return (
      <DefaultLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Article Not Found
            </h2>
            <Link
              to="/blogs"
              className="text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <>
      {/* Hero Section with Image and Title */}
      <div className="relative h-[70vh] min-h-[600px]">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>

        <div className="absolute top-8 left-4 md:left-8 z-10">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 md:px-8 pb-16">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full mb-4 capitalize">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <Link
                to={`/author/${post.authorSlug}`}
                className="flex items-center gap-3 hover:text-emerald-300 transition-colors group"
              >
                {author?.image ? (
                  <img
                    src={author.image}
                    alt={post.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/30 group-hover:border-emerald-400 transition-colors"
                  />
                ) : (
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <span className="text-white font-bold text-lg">
                      {post.author
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-white/70">{post.authorTitle}</p>
                </div>
              </Link>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Author info repeated at top of content for scrollers */}
          <Link
            to={`/author/${post.authorSlug}`}
            className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-200 hover:bg-gray-50 transition-colors p-4 -m-4 rounded-xl group"
          >
            {author?.image ? (
              <img
                src={author.image}
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover group-hover:ring-2 group-hover:ring-emerald-400 transition-all"
              />
            ) : (
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-700 font-bold text-lg">
                  {post.author
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </span>
              </div>
            )}
            <div>
              <p className="font-medium text-gray-900 group-hover:text-emerald-600 transition-colors">
                {post.author}
              </p>
              <p className="text-sm text-gray-500">{post.authorTitle}</p>
            </div>
          </Link>

          {/* Article Content */}
          <div
            className="prose text-justify prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-headings:mt-8 prose-headings:mb-4 prose-headings:text-2xl prose-em:text-gray-700 prose-em:font-semibold"
            dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
          />

          {/* References - Only show for first blog post */}
          {post.references && post.references.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                References
              </h3>
              <ul className="space-y-2">
                {post.references.map((ref: string, index: number) => (
                  <li key={index} className="text-sm text-gray-500">
                    {ref}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Share success message for desktop fallback */}
          {shareSuccess && (
            <div className="mt-4 p-3 bg-emerald-50 text-emerald-700 rounded-lg text-sm text-center">
              Link copied to clipboard!
            </div>
          )}

          {/* Share and Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all articles
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Share:</span>
              <button
                onClick={handleNativeShare}
                className="text-gray-400 hover:text-emerald-600 transition-colors flex items-center gap-1 bg-gray-100 hover:bg-emerald-50 px-3 py-1.5 rounded-full"
                aria-label="Share article"
              >
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsDetails;
