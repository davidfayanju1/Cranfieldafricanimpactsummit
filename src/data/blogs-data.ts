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
  {
    id: 3,
    title:
      "Competition Law as a Lever for Sustainable Development: Rethinking African Markets in an Age of Green Value Chains",
    excerpt:
      "For most of the 20th century, competition law spoke a narrow language of prices, output, and consumer welfare. As Africa stands at the centre of two of the world's most consequential Global Value Chains, critical minerals and agricultural commodities, this article argues that competition policy must be reimagined as an instrument of sustainable development.",
    author: "Omowonuola Adekanmbi",
    authorTitle:
      "LLM Candidate, Bettany Centre for Entrepreneurship, Cranfield University",
    authorSlug: "omowonuola-adekanmbi",
    authorImage: "/images/blog-authors/wonuola.jpg",
    date: "June 30, 2026",
    readTime: "12 min read",
    category: "sustainability",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    featured: false,
    content: `
      <h2><strong>Introduction</strong></h2>

      <p>For most of the 20th century, competition law spoke a narrow language: prices, output, consumer welfare and market efficiency. In Africa, this vocabulary was inherited largely intact from the Global North's model, even though the continent's economic realities demanded a wider conversation. Now, that conversation is finally opening up.</p>

      <br />

      <p>Across the continent, competition authorities are quietly redrawing the boundaries of what their mandate covers. Public interest provisions are being broadened to include environmental sustainability. Merger reviews are now going beyond considering the traditional likelihood of price increases to the potential adverse effects on environmental outcomes, labor markets and small producers. This shift is important and is happening as Africa stands at the center of two of the world's most consequential Global Value Chains (GVCs): critical minerals for the energy transition and agricultural commodities for global food systems. How African competition regimes evolve over the next decade will shape whether the continent extracts genuine value from these chains or remains locked into the upstream extractive role it has played for generations.</p>

      <br />

      <p>This article argues that competition policy across Africa must be reimagined as an instrument of sustainable development (by integrating non-price parameters) and not its competitor. It examines how specific African countries, namely Nigeria, Kenya, Egypt and South Africa, are navigating that reframing, how regional bodies can harmonise these efforts, and concludes with actionable policy recommendations.</p>

      <br />

      <h2><strong>Evolving Approaches to Competition Law and Sustainability</strong></h2>

      <p>Competition law analysis was largely anchored to a consumer welfare standard, measured predominantly through short term price and output effects. However, as Khan has argued, this narrow focus is ill suited to capturing the full architecture of market power in the modern economy, particularly where dominant platforms can entrench structural advantages through strategies that do not immediately manifest in higher consumer prices but nonetheless undermine the competitive process and diminish long term consumer interests, including product diversity and innovation. More recently, scholars and policymakers have extended this critique further, recognising that the competitive harms left unregistered by a price centric framework may also include the deterioration of environmental quality and sustainability outcomes. Consequently, authorities have started shifting, for example, the OECD's work on sustainability and the 2023 EU Horizontal Guidelines (Chapter 9), which provide a dedicated framework for assessing sustainability agreements between competitors. Similarly, the UK's Competition and Markets Authority and the Dutch Authority for Consumers and Markets have introduced frameworks to ensure that competition enforcement does not chill green cooperation.</p>

      <br />

      <p>Within the African context, the case for a broader mandate is even stronger. <strong>First</strong>, many African nations face institutional capacity constraints in standalone environmental or labour regulators, making the competition authority a vital catch all for market oversight. <strong>Second</strong>, the structural inequality embedded in African markets often means that competition on the merits is illusory without state intervention to protect smaller, sustainable entrants. <strong>Finally</strong>, regional bodies have explicit developmental ambitions that transcend mere price centricity. While critics argue that broadening competition law risks regulatory unpredictability, the emerging consensus is that an effects-based approach must now account for the negative externalities of environmental degradation.</p>

      <br />

      <h2><strong>Sustainability Integration in African Competition Regimes</strong></h2>

      <h2><strong><i>South Africa</i></strong></h2>

      <p>South Africa explicitly incorporates public interest provisions into antitrust review, including the promotion of small businesses owned by historically disadvantaged persons. An example of this is the most recent trend of imposing environmental conditions on mergers, such as mandatory carbon emission commitments or investments in green energy infrastructure as a prerequisite for clearance. This reflects an emerging approach in which sustainability operates as a public interest condition imposed as a prerequisite for merger clearance. However, empirical evidence linking such conditions to measurable welfare improvements remains limited, raising questions about whether they deliver real results or function primarily as political commitments. What this demonstrates is that competition law can be harnessed to pursue developmental and environmental goals, but the legitimacy of this approach depends on developing verifiable theories of harm and robust monitoring frameworks to ensure that public interest conditions produce real outcomes rather than regulatory uncertainty.</p>

      <br />

      <h2><strong><i>Nigeria</i></strong></h2>

      <p>The Federal Competition and Consumer Protection Commission (FCCPC) operates under a broad, multi-functional mandate encompassing both competition enforcement and consumer protection. The FCCPC's engagement with sustainability has been primarily through its consumer protection function, with the FCCPC identifying the increasing prevalence of greenwashing litigation as an area exposing regulatory gaps in the Nigerian market. However, there remains an unexploited opportunity in deploying competition enforcement tools, particularly in abuse of dominance and merger review, to incentivize green innovation and research &amp; development.</p>

      <br />

      <h2><strong><i>Kenya</i></strong></h2>

      <p>Kenya's Competition Authority (CAK) has taken a more interventionist posture, particularly in agriculture. It is the first jurisdiction in Africa to prohibit the abuse of buyer power as a standalone offence. It directly targets dominant buyers imposing unfair trading conditions on smallholder farmers, a concern with clear sustainability dimensions given the link between market concentration in agricultural inputs and food security outcomes. The CAK's joint report with the World Bank on Kenya's fertilizer subsidy programme explicitly recommended strengthening anti-cartel oversight and ensuring that the most vulnerable smallholders benefit from market reforms.</p>

      <br />

      <h2><strong><i>Egypt</i></strong></h2>

      <p>Egypt's Competition Authority (ECA) has historically concentrated its enforcement resources on hard core cartels, as demonstrated by its 2025 prosecution of 162 broiler chick producers and three further price fixing decisions in the egg market. The ECA's 2021–2025 Strategic Plan aligns its mission with Egypt's Sustainable Development Strategy (Vision 2030), and the 2024 overhaul of the merger control regime has significantly strengthened the ECA's institutional toolkit. These developments provide the foundation for sector specific market studies, particularly in Egypt's rapidly expanding renewable energy sector, where barriers to entry for new providers and concentration in generation infrastructure remain significant.</p>

      <br />

      <h2><strong><i>COMESA (Common Market for Eastern and Southern Africa)</i></strong></h2>

      <p>At the regional level, the COMESA Competition and Consumer Commission (the "Commission") is reshaping the landscape through its 2025 Regulations. Amongst all the other changes made, the most important one worth noting here is that for the first time, the Commission is empowered to consider public interest grounds that may justify an otherwise anticompetitive transaction, and these grounds now expressly include environmental protection or sustainability considerations alongside employment, the ability of small and medium-sized firms to be competitive, the ability of industries in the Common Market to compete in international markets, and innovation considerations. The Regulations make clear, however, that the Commission will place greater weight on the outcomes of the competition assessment than on public interest factors, a hierarchy that distinguishes the COMESA framework from South Africa's regime, where the competition and public interest assessments are co-equal.</p>

      <br />

      <p>In practical terms, transactions resulting in significant reductions in greenhouse emissions may be viewed favorably, while those reversing environmental gains or creating barriers to green solutions may attract scrutiny. This matters because it allows the regional regulator to scrutinize mergers not only for their price and competition effects, but for their impact on the continent's green transition, particularly in cross border infrastructure. It should be mentioned that, while this framework is promising, it has been untested, and there are questions about the Commission's technical capacity to conduct prospective analyses of green value chains where competitive effects may be difficult to quantify.</p>

      <br />

      <h2><strong>The Global Value Chain Dimension</strong></h2>

      <p>The debate about sustainability and competition becomes concrete in Global Value Chains (GVCs), where African markets act as critical nodes and structural determinants of economic resilience. Take mining for example: Africa holds a dominant global share of cobalt, lithium, copper, manganese, and rare earths, which are the bedrock of the global green transition. Despite this upstream resource endowment, the mining sector faces a structural concentration problem, where raw extraction is controlled by a combination of global firms and state-backed enterprises, while domestic processing and refining remains negligible. China's midstream dominance in refining creates a bottleneck that confines African markets into a role of pure extraction, often bypassing local environmental standards and foreclosing opportunities for value addition.</p>

      <br />

      <p>African responses signal a move toward legitimate industrial policy ambitions. South Africa's Draft Mineral Resources Development Bill, 2025 seeks to enhance provisions relating to the beneficiation of minerals and mineral products, impose export controls on strategic minerals, and tighten ministerial oversight over the transfer of mineral resources. At the continental level, the African Green Minerals Strategy provides a roadmap for harnessing Africa's mineral wealth to drive value addition at source, regional industrialization, and climate resilience, explicitly targeting critical minerals as levers for inclusive growth.</p>

      <br />

      <p>For competition authorities, the challenge is adjudicating between AfCFTA's open market disciplines and these industrial policy ambitions. Enforcers must therefore adopt a competition analysis that looks beyond current market conditions to assess how they would develop over the next decade, so that new domestic refining ventures are not shut out by global firms that control the entire supply chain.</p>

      <br />

      <p>In agriculture, sustainability is inseparable from how value is distributed along the supply chain. Across many African markets, a small number of dominant processors and retailers control the buying side, enabling them to dictate terms to smallholder farmers who must either adopt unsustainable, high-input farming practices or face exclusion from the value chain entirely. Examples like Kenya's dairy concentration, Nigeria's input markets and Egypt's agribusiness illustrate how a narrow focus on low consumer prices ignores the negative externalities of producer end poverty and soil degradation. Competition law must reshape its buyer power doctrine to internalize these concerns. Recognizing sustainability standardisation agreements as pro-competitive can level the playing field, provided they are not naked restrictions used to fix prices.</p>

      <br />

      <p>In terms of harmonisation, the AfCFTA is the ultimate mechanism for harmonisation. Just as the European Competition Network (ECN) fostered soft convergence across member states, the AfCFTA competition protocol must ensure that national initiatives do not lead to fragmentation in the internal market. True harmonisation requires a shared theory of harm that prioritises the process of competition over immediate price outcomes, recognizing that certain sustainability commitments are necessary to the success of regional green projects.</p>

      <br />

      <h2><strong>Policy Recommendations</strong></h2>

      <p>The foregoing analysis points to several interrelated reforms that competition authorities across the continent and their regional counterparts should consider as the sustainability dimension of enforcement matures. The most foundational reform concerns market definition. Authorities have traditionally defined markets by reference to price, output, and substitutability, but where environmental quality and resource efficiency materially differentiate products, they should be recognised as core quality parameters. Treating sustainability as extraneous to competition ignores its real influence on consumer choice, entry conditions, and long-term market development.</p>

      <br />

      <p>African jurisdictions could also adapt the model introduced by the 2023 EU Horizontal Guidelines, which provide a framework for assessing sustainability agreements under Article 101(3) TFEU. Transparent, non-discriminatory sustainability standards should benefit from a soft safe harbour that gives firms legal certainty to cooperate on green objectives without cartel liability, provided such agreements are not used to disguise price-fixing or market allocation.</p>

      <br />

      <p>In sectors where green innovation is nascent, particularly critical mineral processing and renewable energy infrastructure, authorities should prioritise innovation-based theories of harm that protect the competitive process in research and development rather than focusing narrowly on static price effects.</p>

      <br />

      <p>At the institutional level, the risk of inconsistent enforcement outcomes across jurisdictions calls for a continental referral mechanism. Drawing on the ECN's architecture, such a mechanism would allocate cases to the best-placed authority, reduce duplication, and prevent forum shopping. The AfCFTA Competition Protocol provides the natural institutional home, though operationalisation will require political commitment and sustained capacity-building.</p>

      <br />

      <p>Finally, competition authorities also need expanded market investigation powers to conduct sector inquiries into green mineral value chains and agricultural supply networks before anticompetitive harm crystallises.</p>

      <br />

      <h2><strong>Conclusion</strong></h2>

      <p>Rethinking African markets in the age of green value chains requires competition law to pivot from being a passive observer of price fluctuations. Instead, it must be a proactive lever for sustainable development. By moving from a narrow consumer welfare logic to a framework that prioritises innovation, quality, and market structure, African competition authorities can ensure the continent is a leader in the creation of sustainable, resilient markets.</p>
    `,
    references: [
      "Sunside Acquisitions/NBL Investment Holdings and the Distell beverage businesses (Competition Tribunal of South Africa, Case No LM136Dec21, 8 March 2023).",
      "COMESA Competition and Consumer Protection Regulations 2025.",
      "Competition Act 89 of 1998 (South Africa), as amended by the Competition Amendment Act 18 of 2018.",
      "Competition Act No 12 of 2010 (Kenya), as amended by the Competition Amendment Act No 27 of 2019.",
      "Consolidated Version of the Treaty on the Functioning of the European Union, art 101.",
      "Draft Mineral Resources Development Bill 2025 (South Africa).",
      "Renewable Energy Law No 203 of 2014 (Egypt).",
      "European Commission, 'Guidelines on the Applicability of Article 101 of the Treaty on the Functioning of the European Union to Horizontal Co-operation Agreements' [2023] OJ C259/1.",
      "Lina M Khan, 'Amazon's Antitrust Paradox' (2017) 126 Yale LJ 710.",
      "Fox EM and Bakhoum M, Making Markets Work for Africa: Markets, Development, and Competition Law in Sub-Saharan Africa (OUP 2019).",
      "Bonakele T and others, 'Introduction: African Competition Policy' (2022) 60 Review of Industrial Organization 1.",
      "Raslan A, 'Competition Policy and Inequality: Developing Countries in the Spotlight' (2017) CPI Antitrust Chronicle.",
      "African Union, 'Africa's Green Minerals Strategy (AGMS)' (March 2025).",
      "Kigwiru VK, 'Supranational or Cooperative? Rethinking the African Continental Free Trade Area Agreement Competition Protocol Institutional Design' (2024) 12(1) Journal of Antitrust Enforcement 68.",
      "Competition Authority of Kenya and World Bank, 'Fertiliser Subsidy Faces Reform Calls to Boost Competition and Protect Farmer Choice' (November 2025).",
      "Helmy, Hamza and Partners, 'Egypt: The Egyptian Competition Authority Issues Its Largest Price Fixing Cartel Decision and Expands the Scope of Commercially Sensitive Information' (Lexology, 27 February 2025).",
    ],
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
  {
    slug: "omowonuola-adekanmbi",
    name: "Omowonuola Adekanmbi",
    title: "LLM Candidate, Bettany Centre for Entrepreneurship, Cranfield University",
    bio: "Omowonuola is an LLM candidate whose research and writing focus on competition law, regulatory policy, and sustainable development across African markets.",
    longBio: `Omowonuola Adekanmbi is an LLM candidate whose work explores how competition law can be reimagined as a lever for sustainable development across African markets.

Her research examines how African competition authorities, from South Africa and Nigeria to Kenya and Egypt, are broadening their mandates to integrate environmental sustainability and public interest considerations into merger review and enforcement, particularly within the green minerals and agricultural value chains that anchor Africa's role in global trade.

She is interested in the intersection of regulatory policy, industrial development, and continental harmonisation efforts such as the AfCFTA Competition Protocol.`,
    image: "/images/blog-authors/wonuola.jpg",
    location: "Cranfield, UK",
    expertise: [
      "Competition Law",
      "Regulatory Policy",
      "Sustainable Development",
      "African Markets",
    ],
    posts: blogPosts.filter(
      (post) => post.authorSlug === "omowonuola-adekanmbi"
    ),
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
