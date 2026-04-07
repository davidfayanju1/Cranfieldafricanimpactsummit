// types/speaker.ts
export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  bio: string[]; // Array of paragraphs
  image: string;
  panel?: string;
  achievements?: string[];
  isKeynote?: boolean;
  linkedin?: string;
}

// data/speakers.ts
export const speakersData: Speaker[] = [
  {
    id: "mojisola-hunponu-wusu",
    name: "Mojisola Hunponu-Wusu",
    role: "President",
    organization: "Woodhall Capital Group",
    isKeynote: true,
    image: "/images/speakers/mojisola.jpeg",
    bio: [
      "President Mojisola Hunponu-Wusu is a distinguished investment banker, entrepreneur, and philanthropist with over 30 years of experience in international finance.",
      "She began her career in the City of London, holding positions at Goldman Sachs and Deutsche Bank, where she built expertise in risk management, structured finance, and strategic advisory.",
      "Driven by a vision to connect emerging markets with global capital, she founded Woodhall Capital Group — comprising Woodhall Capital, Woodhall Finance Company, and the Woodhall Capital Foundation — with offices in Lagos, London, Dubai, and Abuja.",
      "Through the Woodhall Capital Foundation, President Hunponu-Wusu has spent eight years supporting 3,000 individuals worldwide through education, healthcare, and economic empowerment.",
      "President Hunponu-Wusu is a committed advocate for women in leadership. Over the past three years, she has personally mentored hundreds of women through dedicated programmes such as Her Executive Edge.",
    ],
    achievements: [
      "Raised over $6 billion for governments, financial institutions, and corporates across Africa",
      "100% client retention rate",
      "Supported 3,000 individuals worldwide through education, healthcare, and economic empowerment",
      "Impacted over 1,500 young Africans aged 16-35 through the GRIP Mentorship Programme",
      "Expanded GRIP reach through the GRIP Diaspora Series connecting diaspora professionals with Africa's economy",
    ],
  },
  {
    id: "jermaine-craig",
    name: "Jermaine Craig",
    role: "Founder",
    organization: "Kwanda",
    panel:
      "From Policy to Execution: Innovation, Skills, and Africa's Young Workforce",
    image: "/images/speakers/jermain.jpeg",
    bio: [
      "Jermaine is the founder of Kwanda, a funding platform that connects the African diaspora with locally-led solutions across the continent.",
      "He's building a transparent, community-driven model for development that shifts power to those closest to the problems.",
      "Jermaine is passionate about systems change, collective agency, and reimagining how impact is funded.",
      "Jermaine Craig is building at the intersection of innovation, skills development, and Africa's future workforce driving practical solutions that empower young people with the tools, capabilities, and opportunities needed to thrive in a rapidly evolving economy.",
    ],
    achievements: [
      "Deployed £194,070 into 17 countries",
      "Improved 22,774 lives across 17 countries",
      "Funded a health clinic in Nigeria delivering free healthcare to 7,418 people",
      "Funded 3 clean water sites in Tanzania delivering clean water to 8,648 Tanzanians",
      "Funded health education and sustainable menstrual kits for 1,810 girls in Kenya",
      "Distributed 75 loans to small business owners in Sierra Leone",
      "Funded 200 scholarships for female design students across Africa",
    ],
  },
  {
    id: "lilian-auwor",
    name: "Lilian Auwor",
    role: "Product Manager",
    organization: "Tesco Technology",
    image: "/images/speakers/lillian.jpeg",
    bio: [
      "Lilian Auwor is a payments and product innovation leader with 7+ years of experience spanning financial services, emerging technologies, and large-scale customer-centric financial technology products.",
      "She currently serves as a Product Manager at Tesco Technology, where she leads the development of secure, scalable, and user-focused payment solutions used across the organisation's retail ecosystem in the UK and Central Europe.",
      "With a background in the Financial Technology sector in the UK and the broader EEMEA market, Lilian brings a unique blend of technical expertise, strategic thinking, and market insight.",
      "Recognised for her collaborative leadership and ability to translate complex challenges into actionable product strategies, Lilian is passionate about nurturing the next generation of African and global change-makers.",
    ],
    achievements: [
      "Leads payment solutions across UK and Central European retail ecosystem",
      "Recognised for collaborative leadership and strategic product innovation",
    ],
  },
  {
    id: "kehinde-ayeni",
    name: "Kehinde Ayeni",
    role: "CEO",
    organization: "LEAP Africa",
    image: "/images/speakers/kehinde.jpeg",
    bio: [
      "Kehinde Ayeni leads LEAP Africa, a nonprofit organisation nurturing young African leaders and advancing sustainable development across the continent.",
      "Under her leadership, LEAP Africa delivers high-impact programmes across more than 30 African countries, reaching thousands of young people annually through its core focus areas and strategic pillars.",
      "Kehinde brings nearly 20 years of experience in the social impact sector, with a strong track record in strategy execution, organisational leadership, business development, operations, and corporate communications.",
      "She has held senior leadership roles, including Chief Operating Officer and Head of Communications and PR, where she has helped build an agile organisation, strengthened brand influence, and unlocked strategic opportunities that enable long-term socio-economic transformation.",
      "Her work is grounded in a deep belief in African youth's agency and resilience as transformative change drivers.",
    ],
    achievements: [
      "Leads LEAP Africa delivering high-impact programmes across 30+ African countries",
      "Nearly 20 years of experience in the social impact sector",
      "2021 Fellow of the Praxis Nonprofit Accelerator Program",
      "Holds postgraduate degrees and professional certifications from Lagos Business School, IESE Business School, and Pan-Atlantic University",
    ],
  },
  {
    id: "dr-jennifer-daniel",
    name: "Dr Jennifer Daniel",
    role: "Researcher and Policy Thinker",
    organization: "SASIE",
    image: "/images/speakers/jennifer.jpeg",
    bio: [
      "Dr Jennifer Daniel is a researcher and policy thinker focused on the design and performance of inclusion and entrepreneurship programmes within governments and development finance institutions.",
      "Her work examines how governments, universities, and development institutions design programmes intended to support entrepreneurs, innovation, and inclusion and why many of these initiatives struggle to demonstrate measurable economic outcomes.",
      "Her research focuses on the relationship between programme architecture, measurement frameworks, and institutional incentives, particularly in entrepreneurship and innovation ecosystems across Africa and the UK.",
      "She has led and contributed to research projects on entrepreneurial toolkits, participatory policy design, and innovation-driven approaches to social impact.",
      "Alongside her research work, she founded SASIE, a platform that translates research insights into practical discussions on technology, entrepreneurship, and innovation in Africa.",
    ],
    achievements: [],
  },

  {
    id: "olu-omoyele",
    name: "Olu Omoyele",
    role: "Project Leader",
    organization: "",
    image: "/images/speakers/olu.jpeg",
    bio: [
      "Olu Omoyele is a project leader working at the intersection of international development, climate finance, and private capital mobilisation.",
      "He currently manages donor-funded programmes focused on unlocking investment through public markets, with experience spanning origination, investment due diligence, ESG analysis, and stakeholder engagement across emerging markets.",
      "Olu previously worked in financial services, including with the Lagos and London insurance markets, and holds an MBA from Aston Business School.",
    ],
    achievements: [],
  },
  {
    id: "jesusoorefunmi-soore-olaoye",
    name: "Jesusoorefunmi (Soore) Olaoye",
    role: "Co-Founder",
    organization: "Energyz Black & Energyzer",
    image: "/images/speakers/olaoye.jpeg",
    bio: [
      "Jesusoorefunmi (Soore) Olaoye is an energy and sustainability professional with a decade of experience delivering energy projects.",
      "His corporate work experience and unique mix of entrepreneurship cuts across Telecommunications, Renewables, and Management consulting in countries in Sub Saharan Africa, Middle East and Europe.",
      "Given his dedication to sustainable development, he has been instrumental in developing other businesses and social change initiatives, serving as a volunteer, mentor, and strategist over the past 10 years.",
      "He is the Co-Founder of Energyz Black, the United Kingdom's first and largest organization dedicated to accelerating the advancement of Black talent within the energy sector.",
      "Furthering this mission, he co-founded Energyzer, an AI platform that democratizes access to career guidance, specialized training, and mentorship, ensuring the energy transition is powered by a diverse and future ready workforce.",
      "Soore is super passionate about connecting talents to opportunities in the energy sector to create change for people and the planet.",
      "He currently serves on the External Advisory board for Sustainability West Midlands and sits on the board of Milton Keynes Community Energy, where he influences regional sustainability policy and community led energy initiatives.",
    ],
    achievements: [
      "edie's 30 under 30 Award in Energy and Sustainability 2025",
      "Rising star Award in Energy by CHARGE Brands 2024",
      "Equity, Diversity & Inclusion Focus Sponsored by Policy by Murray 2024",
    ],
  },
  {
    id: "dr-aisha-ekundayo",
    name: "Dr. Aisha Ekundayo",
    role: "Data Analytics Manager",
    organization: "EPAM Systems",
    image: "/images/speakers/aisha.jpeg",
    bio: [
      "Aisha Ekundayo is an AI and data leader with over a decade of experience delivering enterprise AI solutions across global markets.",
      "She is a Data Analytics Manager at EPAM Systems, where she leads LLM-powered products, including the Artworks Assistant GenAI platform, leveraging Claude and GPT to transform marketing operations for global enterprises.",
      "With deep expertise in generative AI, RAG architectures, and responsible AI development, Aisha has led cross-functional teams of up to 20 people and worked across high-growth startups and major consulting engagements with organisations such as Reckitt, Kantar, Virgin Red, and British Gas.",
      "A passionate advocate for ethical AI, Aisha holds a PhD in Applied Econometrics and is currently completing the Oxford AI Ethics, Regulation and Compliance programme at Said Business School.",
      "She is a published researcher, leadership programme alumna, and an active mentor, focused on how AI can be deployed responsibly to solve complex, real-world challenges.",
    ],
    achievements: [],
  },
  {
    id: "promise-akwaowo",
    name: "Promise Akwaowo",
    role: "Business Process Analyst and Product Owner",
    organization: "",
    image: "/images/speakers/promise.jpeg",
    bio: [
      "Promise Akwaowo is a CBAP-certified Business Process Analyst and Product Owner specialising in intelligent automation, AI-enabled process improvement, and large-scale digital transformation in regulated environments.",
      "He currently works within an automation function helping to design and scale enterprise workflows across operations, customer journeys, and back-office functions using platforms such as Salesforce, RPA and low-code automation.",
      "Over the past few years, Promise has supported digital initiatives across several sectors including supporting product innovation and AI, with a strong focus on governance, risk, and value realisation.",
      "He is passionate about the intersection of AI, product innovation, and business transformation, and regularly contributes to the wider tech community through speaking, mentoring, and involvement in industry events.",
      "Promise is also an Independent Researcher as he has contributed to several academic discourse.",
    ],
    achievements: [],
  },
  {
    id: "kayode-adeniyi",
    name: "Kayode Adeniyi",
    role: "Fellow",
    organization: "The London School of Economics and Political Science",
    image: "/images/speakers/kayode.jpeg",
    bio: [
      "Kayode Adeniyi is a Fellow at The London School of Economics and Political Science.",
      "He works at the intersection of AI governance, digital public infrastructure, and technology policy.",
      "At the United Nations Development Programme, he developed AI readiness frameworks and strategies.",
    ],
    achievements: [],
  },
  {
    id: "dr-desmond-bisandu",
    name: "Dr Desmond Bisandu",
    role: "Assistant Professor in Digital Technologies",
    organization: "Cranfield University",
    image: "/images/speakers/desmond.jpeg",
    bio: [
      "Dr Desmond Bisandu holds a PhD in Artificial Intelligence (Data Science) from Cranfield University, alongside an MSc and a BSc in Computer Science from the University of Jos and the American University of Nigeria, respectively.",
      "He previously served as a Postdoctoral Research Fellow in Artificial Intelligence and Scientific Computing at Cranfield University immediately after completing his PhD, where he was actively involved in both teaching and research, conducting advanced work at the intersection of AI and data-driven modelling to address complex digital aviation and aerospace challenges using advanced computational methods.",
      "He is currently an Assistant Professor in Digital Technologies and DTS Apprentices Open Cohorts Lead.",
      "His work bridges the gap between theoretical research, applied teaching, and real-world practice, focusing on leveraging advanced computational and digital technologies to address socio-economic and industry-driven challenges.",
    ],
    achievements: [],
  },
  {
    id: "dr-uyioghosa-igie",
    name: "Dr Uyioghosa Igie",
    role: "Programme Director",
    organization: "Cranfield University",
    image: "/images/speakers/igie.jpeg",
    bio: [
      "Dr Uyioghosa Igie is the Programme Director of the Thermal Power and Propulsion MSc courses at Cranfield University.",
      "He gained his PhD in Gas Turbine Engineering from the same university in 2012.",
      "His area of expertise is gas turbine performance, operations and maintenance, flexibility, as well as compressor and combustor design.",
      "Dr Igie has supervised more than 80 post-graduates (12 PhD and ~70 MSc) as the primary supervisor.",
      "He has published widely in several top journals in energy and turbomachinery and has collaborated with major manufacturers like Airbus, Mitsubishi Power and Rolls-Royce.",
      "Additionally, Dr Igie has consulted for engine operators like the Electricity Generating Authority of Thailand, R-MC Power Recovery Ltd, Camfil Air Filters and PIC Group.",
    ],
    achievements: [
      "His research project at Cranfield University has attracted more than £1.2M in research funding as Principal Investigator",
    ],
  },
  {
    id: "ayantola-alayande",
    name: "Ayantola Alayande",
    role: "Researcher",
    organization: "Global Center on AI Governance",
    image: "/images/speakers/ayantola.jpeg",
    bio: [
      "Ayantola Alayande is a researcher at the Global Center on AI Governance, where his work focuses on state-led approaches to AI governance, responsible AI policy measurement, and international AI cooperation.",
      "At the GCG, Ayantola has worked on a variety of AI research and advisory projects in Africa with partners including the IDRC, the Gates Foundation, Meta, Google, Luminate, the Atlantic Council, among others.",
      "His previous work in data consulting and market research spanned the private sector and civic tech in Africa and the UK, including roles at Kantar UK, Research ICT Africa, the Bennett Institute of Public Policy at Cambridge University, and Dataphyte.",
      "At Dataphyte, Ayantola led innovation and research partnerships on key projects like NubiaAI, the Foreign Influence in Africa Index, and digital technology and elections in Nigeria.",
      "His PhD at the University of Oxford, funded by the Clarendon-Trinity College Scholarship, examines how South Africa and India navigate geopolitical tensions in their AI governance approaches.",
    ],
    achievements: [],
  },
  {
    id: "ifeoluwa-ogunbunumi",
    name: "Ifeoluwa Ogunbunumi",
    role: "Founder & Chief Strategist",
    organization: "SWIF",
    image: "/images/speakers/ifeoluwa.jpeg",
    bio: [
      "Ifeoluwa Ogunbunumi is a Global Startup Strategist and AI Ecosystem Advisor, operating at the intersection of startups, investment, innovation, and public policy.",
      "As Founder & Chief Strategist of SWIF, she has advised over 200 startups across 23 countries, working closely with global accelerators, venture programs, governments, and investment platforms.",
      "Her portfolio includes collaborations with institutions such as Barclays Eagle Labs (UK), LEAP Saudi Arabia, Stanford Women in Tech, Global Ventures (Dubai), UK Department for Business & Trade, Founder Institute Europe, AfricArena (South Africa), Lagos Innovates, Startup Yale, and Amazon Web Services (London).",
      "This deep, hands-on advisory experience gives her a rare edge on stage: she doesn't just chair conversations; she understands the realities behind them.",
      "Ifeoluwa has hosted and chaired large-scale global tech and innovation conferences, convening thousands of investors, policymakers, corporate leaders, and founders, including: LEAP Saudi Arabia, Nigeria Investment Day (New York), London Tech Week, GITEX Nigeria, aws First Incubator Austria, FounderFest London, GITEX Africa Morocco.",
      "She is known for her ability to engage senior stakeholders, ask incisive questions, maintain momentum, and translate complex ideas into compelling, accessible dialogue for diverse global audiences.",
      "At the recent UN General Assembly (UNGA) week in New York, she hosted exclusive high-level delegate summits, facilitating closed-door conversations among global leaders.",
      "What sets Ifeoluwa apart is not just presence, but precision. She brings strategic clarity, commercial awareness, and a results-driven mindset to the stage.",
    ],
    achievements: [
      "Advised over 200 startups across 23 countries",
      "Hosted and chaired large-scale global tech conferences including LEAP Saudi Arabia, London Tech Week, GITEX Africa Morocco",
      "Hosted exclusive high-level delegate summits during UN General Assembly week in New York",
    ],
  },
];
