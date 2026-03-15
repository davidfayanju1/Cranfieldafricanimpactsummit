import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DefaultLayout from "../../layout/DefaultLayout";

interface Blog {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorTitle: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  content?: string;
  references?: string[];
}

const BlogsDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [shareSuccess, setShareSuccess] = useState(false);

  useEffect(() => {
    const blogPost: Blog = {
      id: 1,
      title:
        "From Dependency to Dignity: Why Impact Investment in African SMEs Matters",
      excerpt:
        "Africa's struggle for development has long been framed through the language of deficits—what the continent lacks, who must help, and how much aid is required. Reclaiming Africa's agency and dignity demands a decisive shift: from dependency to ownership, from consumption to production, and from aid to impact driven investment.",
      author: "Ayodele Babatomiwa Oluwaropo",
      authorTitle:
        "PhD Researcher, Bettany Centre for Entrepreneurship, Cranfield University",
      date: "March 14, 2026",
      readTime: "8 min read",
      category: "africa",
      image: "/images/blog-1.jpeg",
      featured: true,
      content: `
        <p>Africa's struggle for development has long been framed through the language of deficits what the continent lacks, who must help, and how much aid is required. While external assistance has played a role in addressing humanitarian needs, an overreliance on aid has often weakened Africa's agency by externalising decision making, distorting local incentives, and sidelining domestic productive capacity. Reclaiming Africa's agency and dignity demands a decisive shift: from dependency to ownership, from consumption to production, and from aid to impact driven investment. At the centre of this shift lie Africa's small and medium sized enterprises (SMEs).</p>
        
        <br />
        
        <p>SMEs are the backbone of African economies. They account for over 90% of businesses and provide approximately 80% of employment across the continent. From agribusinesses improving food security, to renewable energy firms expanding last mile access, to health and education enterprises serving underserved communities, African SMEs are already delivering tangible development outcomes. Yet paradoxically, they remain chronically underfunded. The International Finance Corporation estimates the SME financing gap of over 100 developing economies including Africa to be US$5.7 trillion with women and youth led enterprises being disproportionately excluded.</p>
        
        <br />
        
        <p>This persistent underinvestment is not merely a market failure; it is a failure of development imagination. Africa's transformation cannot be imported it must be built. Impact investment offers a powerful pathway for reclaiming Africa's agency by mobilising capital that aligns financial returns with social, environmental, and developmental outcomes. Unlike traditional aid, impact investment treats African enterprises not as beneficiaries, but as partners and drivers of change.</p>
        
        <br />

        <p>Crucially, reclaiming agency through impact investment requires looking inward. Africa holds significant pools of domestic capital pension funds, sovereign wealth funds, diaspora remittances, and private savings that remain largely disconnected from productive SME financing. In 2024 alone, remittances to Africa exceeded USD 90 billion, surpassing foreign direct investment (FDI) and official development assistance. Redirecting even a fraction of this capital into structured, well governed SME impact vehicles could unlock transformative growth while retaining African ownership and control.</p>
        
        <br />
        
        <p>To be truly transformative, however, SME focused impact investment must be intentionally aligned with Africa's development frameworks particularly the Sustainable Development Goals (SDGs) and Agenda 2063. Too often, development strategies reference these frameworks rhetorically while capital allocation remains misaligned. SMEs operating across priority sectors clean energy (SDG 7), food systems (SDG 2), decent work (SDG 8), climate action (SDG 13) and industrialisation (Agenda 2063 Aspiration 1) are uniquely positioned to translate continental aspirations into lived realities.</p>
        
        <br />

        <p>Consider renewable energy SMEs delivering off grid solar solutions to rural communities. These enterprises advance energy access, create local jobs, reduce carbon emissions, and enhance productivity simultaneously contributing to SDGs and Agenda 2063's vision of inclusive growth. Similar multiplier effects can be seen in climate smart agriculture, digital health, affordable housing, and circular economy ventures. Yet many of these enterprises remain trapped in the "missing middle": too large for microfinance, too small or risky for commercial banks.</p>
        
        <br />
        
        <p>Reclaiming Africa's dignity also means reforming the ecosystems that constrain SME growth. This includes strengthening local financial institutions' capacity for SME risk assessment, embedding impact measurement standards that reflect African realities, and reforming policies that penalise enterprise formalisation. Development finance institutions and donors still have a role but as catalytic partners, not agenda setters. Blended finance should crowd in private capital, not crowd out African initiative.</p>
        
        <br />
        
        <p>Ultimately, to reclaim our dignity as a continent we need to look at power who defines value, who allocates capital, and who shapes the future. Investing in African SMEs aligned with the SDGs and Agenda 2063 is not charity; it is strategy. It affirms Africa's dignity by backing its entrepreneurs, trusting its markets, and financing its solutions. Transformation will not come from aid flows alone, but from intentional investments that enable Africans to build, own, and scale the systems that sustain their societies.</p>
        
       <br />

        <p>Africa does not lack ideas, ambition, or enterprise. What it requires is capital that believes in its innovation and the courage to deploy it accordingly.</p>
      `,
      references: [
        "United Nations. Micro , Small and Medium sized Enterprises Day.",
        "World Bank. Small and Medium Enterprises (SMEs) Finance.",
        "World Economic Forum. Rethinking Remittances: The Overlooked Billions Sustaining African Households.",
        "United Nations. Sustainable Development Goals.",
        "African Union Commission. Agenda 2063: The Africa We Want — Overview.",
      ],
    };

    setPost(blogPost);
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

    // Check if Web Share API is supported
    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log("Shared successfully");
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback for desktop - copy link to clipboard
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
              to="/blog"
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
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        </div>

        {/* Back Button */}
        <div className="absolute top-8 left-4 md:left-8 z-10">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 container mx-auto px-4 md:px-8 pb-16">
          <div className="max-w-4xl">
            {/* Category */}
            <span className="inline-block px-4 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author and Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-white/70">{post.authorTitle}</p>
                </div>
              </div>
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
          <div className="flex items-center gap-4 pb-8 mb-8 border-b border-gray-200">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <span className="text-emerald-700 font-bold text-lg">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <p className="font-medium text-gray-900">{post.author}</p>
              <p className="text-sm text-gray-500">{post.authorTitle}</p>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose text-justify prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
          />

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

              {/* Native Share Button - This opens the real share dialog on mobile */}
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
