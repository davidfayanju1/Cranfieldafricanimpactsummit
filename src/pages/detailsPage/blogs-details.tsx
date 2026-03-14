import { Calendar, Clock, ArrowLeft } from "lucide-react";
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

  useEffect(() => {
    // In a real app, you'd fetch this from an API
    // For now, we'll use the blog post data
    const blogPost: Blog = {
      id: 1,
      title:
        "From Dependency to Dignity: Why Impact Investment in African SMEs Matters",
      excerpt:
        "Africa's struggle for development has long been framed through the language of deficits—what the continent lacks, who must help, and how much aid is required. Reclaiming Africa's agency and dignity demands a decisive shift: from dependency to ownership, from consumption to production, and from aid to impact-driven investment.",
      author: "Ayodele Babatomiwa Oluwaropo",
      authorTitle:
        "PhD Researcher, Bettany Centre for Entrepreneurship, Cranfield University",
      date: "March 14, 2026",
      readTime: "8 min read",
      category: "africa",
      image: "/images/blog-1.jpeg",
      featured: true,
      content: `
        <p>Africa's struggle for development has long been framed through the language of deficits—what the continent lacks, who must help, and how much aid is required. While external assistance has played a role in addressing humanitarian needs, an overreliance on aid has often weakened Africa's agency by externalising decision-making, distorting local incentives, and sidelining domestic productive capacity.</p>
        
        <p>Reclaiming Africa's agency and dignity demands a decisive shift: from dependency to ownership, from consumption to production, and from aid to impact-driven investment. At the centre of this shift lie Africa's small and medium-sized enterprises (SMEs).</p>
        
        <h2>SMEs: The Backbone of African Economies</h2>
        
        <p>SMEs are the backbone of African economies. They account for over 90% of businesses and provide approximately 80% of employment across the continent. From agribusinesses improving food security, to renewable energy firms expanding last-mile access, to health and education enterprises serving underserved communities, African SMEs are already delivering tangible development outcomes.</p>
        
        <p>Yet paradoxically, they remain chronically underfunded. The International Finance Corporation estimates the SME financing gap of over 100 developing economies including Africa to be US$5.7 trillion with women- and youth-led enterprises being disproportionately excluded.</p>
        
        <h2>A Failure of Development Imagination</h2>
        
        <p>This persistent underinvestment is not merely a market failure; it is a failure of development imagination. Africa's transformation cannot be imported—it must be built. Impact investment offers a powerful pathway for reclaiming Africa's agency by mobilising capital that aligns financial returns with social, environmental, and developmental outcomes.</p>
        
        <p>Unlike traditional aid, impact investment treats African enterprises not as beneficiaries, but as partners and drivers of change.</p>
        
        <h2>Looking Inward: Africa's Untapped Capital</h2>
        
        <p>Crucially, reclaiming agency through impact investment requires looking inward. Africa holds significant pools of domestic capital—pension funds, sovereign wealth funds, diaspora remittances, and private savings—that remain largely disconnected from productive SME financing. In 2024 alone, remittances to Africa exceeded USD 90 billion, surpassing foreign direct investment (FDI) and official development assistance.</p>
        
        <p>Redirecting even a fraction of this capital into structured, well-governed SME impact vehicles could unlock transformative growth while retaining African ownership and control.</p>
        
        <h2>Alignment with Development Frameworks</h2>
        
        <p>To be truly transformative, however, SME-focused impact investment must be intentionally aligned with Africa's development frameworks—particularly the Sustainable Development Goals (SDGs) and Agenda 2063. Too often, development strategies reference these frameworks rhetorically while capital allocation remains misaligned.</p>
        
        <p>SMEs operating across priority sectors—clean energy (SDG 7), food systems (SDG 2), decent work (SDG 8), climate action (SDG 13)—and industrialisation (Agenda 2063 Aspiration 1) are uniquely positioned to translate continental aspirations into lived realities.</p>
        
        <p>Consider renewable energy SMEs delivering off-grid solar solutions to rural communities. These enterprises advance energy access, create local jobs, reduce carbon emissions, and enhance productivity—simultaneously contributing to SDGs and Agenda 2063's vision of inclusive growth.</p>
        
        <p>Similar multiplier effects can be seen in climate-smart agriculture, digital health, affordable housing, and circular economy ventures. Yet many of these enterprises remain trapped in the "missing middle": too large for microfinance, too small or risky for commercial banks.</p>
        
        <h2>Reforming Ecosystems</h2>
        
        <p>Reclaiming Africa's dignity also means reforming the ecosystems that constrain SME growth. This includes strengthening local financial institutions' capacity for SME risk assessment, embedding impact measurement standards that reflect African realities, and reforming policies that penalise enterprise formalisation.</p>
        
        <p>Development finance institutions and donors still have a role—but as catalytic partners, not agenda-setters. Blended finance should crowd in private capital, not crowd out African initiative.</p>
        
        <h2>Conclusion: A Question of Power</h2>
        
        <p>Ultimately, to reclaim our dignity as a continent we need to look at power—who defines value, who allocates capital, and who shapes the future. Investing in African SMEs aligned with the SDGs and Agenda 2063 is not charity; it is strategy.</p>
        
        <p>It affirms Africa's dignity by backing its entrepreneurs, trusting its markets, and financing its solutions. Transformation will not come from aid flows alone, but from intentional investments that enable Africans to build, own, and scale the systems that sustain their societies.</p>
        
        <p>Africa does not lack ideas, ambition, or enterprise. What it requires is capital that believes in its innovation and the courage to deploy it accordingly.</p>
      `,
      references: [
        "United Nations. Micro-, Small and Medium-sized Enterprises Day.",
        "World Bank. Small and Medium Enterprises (SMEs) Finance.",
        "World Economic Forum. Rethinking Remittances: The Overlooked Billions Sustaining African Households.",
        "United Nations. Sustainable Development Goals.",
        "African Union Commission. Agenda 2063: The Africa We Want — Overview.",
      ],
    };

    setPost(blogPost);
    setLoading(false);
  }, [id]);

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
            {/* <div className="ml-auto flex items-center gap-3 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div> */}
          </div>

          {/* Article Content */}
          <div
            className="prose text-justify prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
          />

          {/* References */}
          {post.references && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                References
              </h3>
              <ul className="space-y-2">
                {post.references.map((ref, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    [{index + 1}] {ref}
                  </li>
                ))}
              </ul>
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
                title="button"
                className="text-gray-400 hover:text-emerald-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button
                title="button"
                className="text-gray-400 hover:text-emerald-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsDetails;
