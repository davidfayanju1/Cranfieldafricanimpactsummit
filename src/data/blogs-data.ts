// data/blogs.ts
export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  authorTitle: string;
  authorSlug: string;
  authorImage?: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  content?: string;
  references?: string[];
}

export interface Author {
  slug: string;
  name: string;
  title: string;
  bio: string;
  longBio?: string;
  image?: string;
  location?: string;
  expertise?: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
    email?: string;
  };
  posts?: Blog[];
}

export const blogPosts: Blog[] = [
  {
    id: 1,
    title:
      "From Dependency to Dignity: Why Impact Investment in African SMEs Matters",
    excerpt:
      "Africa's struggle for development has long been framed through the language of deficits what the continent lacks, who must help, and how much aid is required. Reclaiming Africa's agency and dignity demands a decisive shift: from dependency to ownership, from consumption to production, and from aid to impact driven investment.",
    author: "Ayodele Babatomiwa Oluwaropo",
    authorTitle:
      "PhD Researcher, Bettany Centre for Entrepreneurship, Cranfield University",
    authorSlug: "ayodele-oluwaropo",
    authorImage: "/images/blog-authors/ayodele.jpeg",
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
  },
  {
    id: 2,
    title: "The patients modern medicine forgot",
    excerpt:
      "People of African ancestry make up 17% of the global population but represent less than 2% of all sequenced genomes. This is the story of why that matters and what one founder is doing to close the gap.",
    author: "Linia Zambezi",
    authorTitle: "CEO & Founder, Afromics",
    authorSlug: "linia-zambezi",
    authorImage: "/images/blog-authors/linia.jpeg",
    date: "May 21, 2026",
    readTime: "6 min read",
    category: "healthcare",
    image: "/images/blog-covers/afromics.svg",
    featured: false,
    content: `
      <h2><strong><i>The question I couldn't stop asking</i></strong></h2>
      
      <p><em><strong>By Linia Zambezi, CEO & Founder, Afromics</strong></em></p>
      
      <p>I was sitting in a genomics lecture at the University of Cape Town when something stopped me. We were on the African continent, studying at one of its most respected universities, and yet almost everything we were learning, from how diseases develop to how drugs are metabolised, was based on data from people of European ancestry.</p>
      
      <br />
      
      <p>I put my hand up and asked why.</p>
      
      <br />
      
      <p>The answer was simple: there just isn't enough genomic data for people of African ancestry.</p>
      
      <br />
      
      <p>I wrote it down, put my pen on the desk, and couldn't shake the feeling that this was one of the most consequential sentences I had ever heard.</p>
      
      <br />
      
      <h2><strong>What that sentence actually means</strong></h2>
      
      <p>People of African ancestry make up 17% of the global population but represent less than 2% of all sequenced genomes. African genomes are, paradoxically, the most genetically diverse in the world, and yet they are the most absent from the databases that underpin modern medicine.</p>
      
      <br />
      
      <p>This is not a minor technical oversight. It means that dosing guidelines, disease risk models, and treatment protocols, the foundations of how doctors make decisions, are built on data that does not represent 1.5 billion people. The promise of precision medicine, treatments tailored to your own DNA, was not built with us in mind.</p>
      
      <br />
      
      <p>Everyone agrees the gap exists. Far fewer are building the infrastructure to close it.</p>
      
      <br />
      
      <h2><strong>The cost of invisibility</strong></h2>
      
      <p>Nowhere is this more apparent than in sickle cell disease. Over 515,000 babies are born with SCD every year. Today, 7.74 million people live with the condition, 75% of them of African ancestry. The number has grown by 41% since 2000. In all that time, only two approved therapies have emerged, and for many patients, care has not meaningfully changed in decades.</p>
      
      <br />
      
      <p>Pain crises are one of the most defining and debilitating features of the disease. In the UK, around 17,500 people with SCD regularly receive NHS care, often treated with codeine and tramadol during severe episodes. But a recent study found that 36.6% of African SCD patients carry genetic variants that affect how they respond to these drugs meaning around 6,405 UK patients may be receiving pain medication without the genetic information to confirm it is safe or effective for them.</p>
      
      <br />
      
      <p>This is what the gap costs: pain that could be prevented.</p>
      
      <br />
      
      <h2><strong>What I decided to do about it</strong></h2>
      
      <p>I pursued a Master's in Genomic Medicine at Cambridge to understand this problem more deeply. What I found confirmed what I had felt in that lecture hall: this was not a gap that would close on its own. Someone had to build the infrastructure.</p>
      
      <br />
      
      <p>That is why I founded Afromics.</p>
      
      <br />
      
      <p>We are building a genomic biobank focused on people of African ancestry, starting with sickle cell disease but designed to address a much broader gap in how genomic data is collected, used, and translated into care.</p>
      
      <br />
      
      <p>What makes this approach different is simple: participants do not just contribute data, they receive value from it. Each individual receives a personalised pharmacogenomic report that clinicians can use to guide safer, more effective treatment based on their DNA.</p>
      
      <br />
      
      <p>Because representation in data is not enough. It has to change care.</p>
      
      <br />
      
      <p>We are working across clinical and research settings in the UK and Africa to ensure that the datasets being built reflect the full breadth of African genetic diversity. The goal is not just to generate data, but to make it usable so that researchers and drug developers can design treatments that are not only innovative, but effective across all populations. Because without representative data, even the most advanced therapies risk being precisely wrong.</p>
      
      <br />
      
      <h2><strong>Why this moment matters</strong></h2>
      
      <p>Conversations about solving Africa's health challenges often focus on geography, infrastructure, or resource constraints. But some of the most urgent problems run deeper. They are problems of whose data gets collected, whose biology gets studied, and whose suffering gets treated as a scientific priority.</p>
      
      <br />
      
      <p>For too long, the answer to all three questions has excluded people of African ancestry.</p>
      
      <br />
      
      <p>That question I asked in Cape Town never really went away. We just chose to do something about it.</p>
      
      <br />
      
      <p><em>Linia Tendai Zambezi is the Founder and CEO of Afromics, a genomics startup focused on building African genomic datasets for inclusive precision medicine. She holds degrees in Biomedicine, Bioinformatics, and Genomic Medicine, and is passionate about addressing global disparities in genetic research. Find out more at <a href="https://www.afromics.org" target="_blank" rel="noopener noreferrer" class="text-emerald-600 hover:underline">afromics.org</a>.</em></p>
    `,
  },
];

// data/blogs-data.ts (add author images and Instagram if needed)
export const authors: Author[] = [
  {
    slug: "ayodele-oluwaropo",
    name: "Ayodele Babatomiwa Oluwaropo",
    title:
      "PhD Researcher, Bettany Centre for Entrepreneurship, Cranfield University",
    bio: "Ayodele is a PhD Researcher at the Bettany Centre for Entrepreneurship, Cranfield University, focusing on impact investment and sustainable development in African economies.",
    longBio: `Ayodele Babatomiwa Oluwaropo is a PhD Researcher at the Bettany Centre for Entrepreneurship at Cranfield University, where his research focuses on impact investment and sustainable development in African economies.

With over a decade of experience in development finance and entrepreneurship, Ayodele has worked with numerous African SMEs to help them access capital and scale their operations. His research explores how patient capital and ecosystem building can transform African SMEs into engines of inclusive growth.

Ayodele holds an MSc in Development Economics from the University of Oxford and a BSc in Economics from the University of Lagos. He is a regular speaker at conferences on impact investing and African economic development.`,
    image: "/images/blog-authors/ayodele.jpeg",
    location: "Cranfield, UK / Lagos, Nigeria",
    expertise: [
      "Impact Investment",
      "SME Development",
      "Economic Policy",
      "Entrepreneurship",
    ],
    social: {
      linkedin: "https://linkedin.com/in/ayodele-oluwaropo",
      twitter: "https://twitter.com/ayodele",
      email: "ayodele.oluwaropo@cranfield.ac.uk",
    },
    posts: blogPosts.filter((post) => post.authorSlug === "ayodele-oluwaropo"),
  },
  {
    slug: "linia-zambezi",
    name: "Linia Zambezi",
    title: "CEO & Founder, Afromics",
    bio: "Linia Tendai Zambezi is the Founder and CEO of Afromics, a genomics startup focused on building African genomic datasets for inclusive precision medicine.",
    longBio: `Linia Tendai Zambezi is the Founder and CEO of Afromics, a genomics startup focused on building African genomic datasets for inclusive precision medicine. She holds degrees in Biomedicine, Bioinformatics, and Genomic Medicine from the University of Cape Town and Cambridge University.

Her journey began in a genomics lecture at the University of Cape Town, where she discovered the critical gap in genomic data for people of African ancestry. This realization led her to pursue a Master's in Genomic Medicine at Cambridge and eventually found Afromics.

Linia is passionate about addressing global disparities in genetic research and ensuring that precision medicine works for all populations. She has been recognized as a leading voice in African genomics and has spoken at numerous international conferences about the importance of diverse genetic datasets.`,
    image: "/images/blog-authors/linia.jpeg",
    location: "Cambridge, UK / Harare, Zimbabwe",
    expertise: [
      "Genomics",
      "Precision Medicine",
      "Bioinformatics",
      "Healthcare Innovation",
    ],
    social: {
      linkedin: "https://linkedin.com/in/linia-zambezi",
      twitter: "https://twitter.com/linia_zambezi",
      //   instagram: "https://instagram.com/linia_zambezi",
      website: "https://www.afromics.org",
      email: "linia@afromics.org",
    },
    posts: blogPosts.filter((post) => post.authorSlug === "linia-zambezi"),
  },
];

// Helper function to get author by slug
export const getAuthorBySlug = (slug: string): Author | undefined => {
  return authors.find((author) => author.slug === slug);
};

// Helper function to get blog post by id
export const getBlogPostById = (id: number): Blog | undefined => {
  return blogPosts.find((post) => post.id === id);
};

// Helper function to get blog posts by category
export const getBlogPostsByCategory = (category: string): Blog[] => {
  return blogPosts.filter((post) => post.category === category);
};

// Helper function to get blog posts by author
export const getBlogPostsByAuthor = (authorSlug: string): Blog[] => {
  return blogPosts.filter((post) => post.authorSlug === authorSlug);
};
