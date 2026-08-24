export const site = {
  name: 'DevProdigee eCommerce',
  shortName: 'DP eCommerce',
  email: 'hello@devprodigee.com',
  phone: '+92 300 000 0000',
  location: 'Serving eCommerce brands worldwide',
  navigation: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'About Us', to: '/about' },
    { label: 'Contact Us', to: '/contact' },
  ],
}

export const platforms = [
  { name: 'Amazon', logo: '/platforms/amazon.svg', code: 'A', tone: 'orange' },
  { name: 'Walmart', logo: '/platforms/walmart.svg', code: 'W', tone: 'blue' },
  { name: 'Shopify', logo: '/platforms/shopify.svg', code: 'S', tone: 'green' },
  { name: 'eBay', logo: '/platforms/ebay.svg', code: 'e', tone: 'multi' },
  { name: 'Etsy', logo: '/platforms/etsy.svg', code: 'E', tone: 'amber' },
  { name: 'TikTok Shop', logo: '/platforms/tiktok.svg', code: 'T', tone: 'dark', qualifier: 'Shop' },
  { name: 'WooCommerce', logo: '/platforms/woocommerce.svg', code: 'Woo', tone: 'purple' },
]

export const services = [
  {
    slug: 'marketplace-management',
    icon: 'store',
    title: 'Marketplace Management',
    description:
      'Day-to-day marketplace control across Amazon, Walmart, eBay, Etsy and TikTok Shop, including catalogue, account health, inventory and orders.',
    bestFor: 'You need reliable control of daily marketplace work.',
    outcome: 'Fewer operational gaps and clearer account ownership.',
    features: ['Account setup and health', 'Catalogue and listing upkeep', 'Inventory and order workflows', 'Performance monitoring'],
  },
  {
    slug: 'store-development',
    icon: 'code',
    title: 'Store Development',
    description:
      'Shopify and WooCommerce builds or redesigns focused on mobile UX, speed, checkout flow and conversion.',
    bestFor: 'Your current store is slow, dated or difficult to buy from.',
    outcome: 'A faster storefront with a clearer path to purchase.',
    features: ['Custom storefront design', 'App and payment integrations', 'Speed and UX optimisation', 'Ongoing technical support'],
  },
  {
    slug: 'listing-optimisation',
    icon: 'search',
    title: 'Listing Optimisation & SEO',
    description:
      'Search-led titles, attributes and product copy built around how buyers actually find and compare products.',
    bestFor: 'Products are live but not earning enough visibility or clicks.',
    outcome: 'Stronger search relevance and easier product comparison.',
    features: ['Marketplace keyword research', 'SEO-led product copy', 'Categories and item specifics', 'Continuous listing refinement'],
  },
  {
    slug: 'ppc-advertising',
    icon: 'target',
    title: 'PPC & Performance Advertising',
    description:
      'Campaign setup, budgets and ongoing optimisation with spend tied to agreed commercial KPIs.',
    bestFor: 'Spend is active but profitable growth is difficult to judge.',
    outcome: 'Campaign decisions tied to agreed commercial KPIs.',
    features: ['Campaign setup and structure', 'Bid and budget optimisation', 'Search term analysis', 'Actionable reporting'],
  },
  {
    slug: 'creative-branding',
    icon: 'palette',
    title: 'Creative Design & Branding',
    description:
      'Storefront graphics, product imagery and marketplace content built to explain the product quickly and clearly.',
    bestFor: 'Your product looks inconsistent or is difficult to understand.',
    outcome: 'Clearer visual communication across listings and storefronts.',
    features: ['Marketplace creative', 'Amazon A+ Content', 'Storefront visual assets', 'Brand-consistent design systems'],
  },
  {
    slug: 'analytics-reporting',
    icon: 'chart',
    title: 'Analytics & Reporting',
    description:
      'Lean reporting that shows which KPIs changed, why they changed and what action should come next.',
    bestFor: 'You receive data but still do not know what to do next.',
    outcome: 'Focused reporting with clear practical priorities.',
    features: ['KPI tracking', 'Growth opportunity analysis', 'Channel performance reviews', 'Transparent monthly reporting'],
  },
]

export const platformServices = [
  {
    platform: 'Amazon',
    summary: 'Build, optimise and manage a high-performing Amazon presence.',
    items: ['Account management', 'Listing optimisation', 'A+ Content', 'Brand Registry guidance', 'PPC management', 'Storefront design'],
  },
  {
    platform: 'Walmart Marketplace',
    summary: 'Launch and grow with structured catalogue and performance management.',
    items: ['Marketplace onboarding', 'Listing optimisation', 'Walmart Ads', 'Account performance', 'Catalog management', 'WFS guidance'],
  },
  {
    platform: 'Shopify',
    summary: 'Create a fast, responsive storefront built to convert.',
    items: ['Custom store development', 'Store redesign', 'Speed optimisation', 'App integrations', 'Shopify Plus', 'Conversion optimisation'],
  },
  {
    platform: 'WooCommerce',
    summary: 'Flexible WordPress commerce solutions with scalable functionality.',
    items: ['Custom development', 'Store migration', 'Plugin integrations', 'Maintenance and security', 'API integrations', 'Performance tuning'],
  },
  {
    platform: 'TikTok Shop',
    summary: 'Turn social discovery into a structured sales channel.',
    items: ['Shop setup', 'Catalog compliance', 'Affiliate management', 'Campaign support', 'Creator outreach', 'Catalog sync'],
  },
  {
    platform: 'Etsy',
    summary: 'Improve store presentation, organic visibility and advertising efficiency.',
    items: ['Store setup', 'Etsy SEO', 'Listing optimisation', 'Etsy Ads', 'Digital products', 'Seasonal strategy'],
  },
  {
    platform: 'eBay',
    summary: 'Manage listings, operations and marketplace growth using Seller Hub data.',
    items: ['Store management', 'Listing optimisation', 'Order workflows', 'Promoted Listings', 'Seller standards', 'Inventory organisation'],
  },
]

export const processSteps = [
  { number: '01', title: 'Discovery & Strategy', text: 'We clarify your goals, current performance, target customer and the marketplaces that matter most.' },
  { number: '02', title: 'Research & Planning', text: 'We review competitors, keywords, catalogue structure, customer journey and growth opportunities.' },
  { number: '03', title: 'Build & Optimise', text: 'Our specialists develop stores, improve listings, create assets and configure campaigns or workflows.' },
  { number: '04', title: 'Launch & Manage', text: 'We implement the agreed roadmap while keeping communication, ownership and approvals transparent.' },
  { number: '05', title: 'Measure & Improve', text: 'Performance data guides continuous optimisation, reporting and the next growth priorities.' },
]

export const caseStudies = [
  {
    id: 'ebay-transformation',
    eyebrow: 'eBay Store Management',
    title: 'Transforming an Underperforming eBay Store into a Growing Marketplace Business',
    summary:
      'A structured programme of listing optimisation, Seller Hub analysis and operational improvements created measurable year-over-year growth.',
    image: '/case-studies/ebay-case-1.png',
    metrics: [
      { value: '100%', label: 'year-over-year growth' },
      { value: '£1,716.15', label: 'gross sales' },
      { value: '301', label: 'units sold' },
    ],
    challenge:
      'The earlier reporting period showed room for improvement in product visibility and sales momentum. The store needed a repeatable optimisation strategy instead of occasional listing updates.',
    solution: [
      'Optimised product titles, descriptions, keywords and item specifics.',
      'Used Seller Hub analytics to refine listings based on real performance data.',
      'Improved inventory organisation and day-to-day operating workflows.',
    ],
    result:
      'The store achieved 100% year-over-year growth, generated £1,716.15 in gross sales and sold 301 units during the reporting period.',
  },
  {
    id: 'ebay-growth-management',
    eyebrow: 'Marketplace Growth',
    title: 'Scaling an eBay Store Through Data-Driven Marketplace Management',
    summary:
      'Seller Hub insights, listing improvements and more scalable daily operations supported consistent marketplace growth.',
    image: '/case-studies/ebay-case-2.png',
    metrics: [
      { value: '45', label: 'orders in 90 days' },
      { value: '£1,122.53', label: 'revenue generated' },
      { value: '48', label: 'active listings managed' },
    ],
    challenge:
      'Products needed stronger visibility, operational workflows needed to support more orders, and performance data was not being used consistently for decisions.',
    solution: [
      'Improved titles, keywords, descriptions and item specifics.',
      'Monitored Seller Hub reports and refined listings continuously.',
      'Created clearer inventory and order-management workflows.',
    ],
    result:
      'The store processed 45 customer orders in 90 days, generated £1,122.53 in revenue and established a scalable marketplace-management system.',
  },
  {
    id: 'ebay-visibility',
    eyebrow: 'Listing Optimisation',
    title: 'Increasing Marketplace Visibility Through eBay Listing Optimisation',
    summary:
      'Marketplace SEO best practices and continuous performance refinement increased exposure and attracted more qualified buyers.',
    image: '/case-studies/ebay-case-3.png',
    metrics: [
      { value: '3,187,490', label: 'listing impressions' },
      { value: '2,819', label: 'listing views' },
      { value: '1.6%', label: 'sales conversion rate' },
    ],
    challenge:
      'Limited visibility reduced traffic and sales opportunities, while listings needed stronger relevance to compete in marketplace search results.',
    solution: [
      'Enhanced titles, keywords, categories and item specifics.',
      'Monitored impressions, listing views and sales performance.',
      'Refined underperforming listings using analytics.',
    ],
    result:
      'The optimised catalogue generated more than 3.18 million impressions, 2,819 listing views and 45 sales at a 1.6% conversion rate.',
  },
  {
    id: 'ebay-operations',
    eyebrow: 'Operations & Inventory',
    title: 'Building Efficient Order and Inventory Operations for Marketplace Growth',
    summary:
      'Structured order tracking and catalogue organisation prepared the business for more reliable fulfilment and future expansion.',
    image: '/case-studies/ebay-case-4.png',
    metrics: [
      { value: '45', label: 'completed orders' },
      { value: '48', label: 'active listings' },
      { value: '1', label: 'scalable operating system' },
    ],
    challenge:
      'Increasing order volume required better operational control, while manual processes and growing inventory created avoidable inefficiency.',
    solution: [
      'Streamlined order tracking and fulfilment procedures.',
      'Improved inventory synchronisation and reporting.',
      'Organised active listings and product drafts into a scalable catalogue structure.',
    ],
    result:
      'The new workflow supported 45 completed orders, improved fulfilment reliability and organised 48 active listings for future growth.',
  },
]

export const faqs = [
  {
    category: 'General',
    question: 'What services do you offer?',
    answer: 'We provide end-to-end eCommerce services including marketplace management, store development, SEO, PPC, branding, analytics and ongoing support.',
  },
  {
    category: 'General',
    question: 'Do you work with startups as well as established brands?',
    answer: 'Yes. We help new businesses launch their first store and support established brands that want to optimise or expand across multiple channels.',
  },
  {
    category: 'Platforms',
    question: 'Which marketplaces and platforms do you support?',
    answer: 'Our core platform coverage includes Amazon, Walmart Marketplace, Shopify, WooCommerce, TikTok Shop, Etsy and eBay.',
  },
  {
    category: 'Amazon',
    question: 'Can you manage Amazon listings and PPC together?',
    answer: 'Yes. We can combine account management, keyword-led listing optimisation, A+ Content, Storefront design and Sponsored campaign management in one plan.',
  },
  {
    category: 'Stores',
    question: 'Can you build or redesign a Shopify or WooCommerce store?',
    answer: 'Yes. We build responsive, conversion-focused stores from scratch and redesign existing stores to improve speed, usability and conversion performance.',
  },
  {
    category: 'Marketplaces',
    question: 'Do you manage eBay, Walmart, Etsy and TikTok Shop accounts?',
    answer: 'Yes. Support can include onboarding, catalogue management, listing optimisation, advertising guidance, operational workflows and performance reporting.',
  },
  {
    category: 'Growth',
    question: 'Can you improve an existing store instead of rebuilding it?',
    answer: 'Absolutely. We audit the existing customer journey, catalogue, technical setup, content and performance data, then prioritise the changes with the strongest commercial impact.',
  },
  {
    category: 'Pricing',
    question: 'Do you offer custom packages?',
    answer: 'Yes. Every proposal is tailored to the platforms, services, catalogue size and growth goals of the business.',
  },
  {
    category: 'Reporting',
    question: 'Will I receive reports and retain ownership of my assets?',
    answer: 'Yes. We provide transparent reporting with actionable KPIs, and you retain ownership of your website, accounts, data and creative assets.',
  },
]

export const values = [
  { title: 'Measurable Growth', text: 'Strategy and execution are connected to clear commercial goals and performance indicators.' },
  { title: 'Transparent Partnership', text: 'You receive clear communication, practical recommendations and full ownership of your business assets.' },
  { title: 'Platform Expertise', text: 'Specialists apply the right marketplace, storefront and advertising practices to each channel.' },
  { title: 'Scalable Execution', text: 'We build systems and workflows that support today’s priorities and tomorrow’s growth.' },
]

export const platformFaqGroups = [
  {
    name: 'General',
    items: [
      { category: 'General Agency', question: 'What services do you offer?', answer: 'We provide end-to-end eCommerce services including marketplace management, store development, SEO, PPC, branding, analytics and ongoing support.' },
      { category: 'General Agency', question: 'Do you work with startups?', answer: 'Yes. We help new businesses launch and established brands optimise, scale or expand across additional sales channels.' },
      { category: 'General Agency', question: 'Why should I choose your agency?', answer: 'Our approach focuses on measurable growth, transparent communication, clear ownership and long-term commercial improvement.' },
      { category: 'General Agency', question: 'Do you sign NDAs?', answer: 'Yes. We can sign an NDA before discussing confidential marketplace, product or commercial information.' },
      { category: 'General Agency', question: 'How do we get started?', answer: 'Book a free consultation, share your current position and goals, and we will recommend a tailored route forward.' },
    ],
  },
  {
    name: 'Amazon',
    items: [
      { category: 'Amazon', question: 'Do you offer Amazon account management?', answer: 'Yes, including listings, PPC, inventory guidance, storefront support, reporting and account-health monitoring.' },
      { category: 'Amazon', question: 'Can you optimise Amazon listings?', answer: 'Yes. We optimise titles, bullet points, descriptions, search terms, keywords and image recommendations.' },
      { category: 'Amazon', question: 'Do you create A+ Content and Amazon Storefronts?', answer: 'Yes. We design conversion-focused A+ Content and branded Storefront experiences for eligible sellers.' },
      { category: 'Amazon', question: 'Can you help with Brand Registry or suspended accounts?', answer: 'We can guide eligible brands through Brand Registry and support suspension analysis and Plan of Action preparation.' },
      { category: 'Amazon', question: 'Do you manage Amazon PPC?', answer: 'Yes. We create and optimise Sponsored Products, Sponsored Brands and Sponsored Display campaigns.' },
    ],
  },
  {
    name: 'Walmart',
    items: [
      { category: 'Walmart Marketplace', question: 'Do you manage Walmart Marketplace stores?', answer: 'Yes. Support can cover onboarding, catalogue setup, daily management, optimisation and reporting.' },
      { category: 'Walmart Marketplace', question: 'Can you optimise Walmart listings?', answer: 'Yes. We improve listing structure, keywords, content quality and marketplace relevance using Walmart best practices.' },
      { category: 'Walmart Marketplace', question: 'Do you run Walmart Ads?', answer: 'Yes. We can manage Sponsored Search campaigns and optimise performance against agreed KPIs.' },
      { category: 'Walmart Marketplace', question: 'Can you improve account performance?', answer: 'Yes. We monitor marketplace metrics, identify operational issues and implement practical improvements.' },
    ],
  },
  {
    name: 'Shopify',
    items: [
      { category: 'Shopify', question: 'Can you build a Shopify store from scratch?', answer: 'Yes. We create custom, responsive and conversion-focused Shopify stores aligned with your brand and customer journey.' },
      { category: 'Shopify', question: 'Do you redesign existing Shopify stores?', answer: 'Yes. Redesign work can address visual consistency, navigation, mobile UX, conversion flow and technical performance.' },
      { category: 'Shopify', question: 'Can you optimise Shopify speed?', answer: 'Yes. We improve loading performance and prioritise changes that support stronger Core Web Vitals and user experience.' },
      { category: 'Shopify', question: 'Do you support Shopify Plus?', answer: 'Yes. We can work with both standard Shopify plans and Shopify Plus requirements.' },
      { category: 'Shopify', question: 'Can you integrate apps and marketing tools?', answer: 'Yes, including email platforms, payment gateways, shipping tools, analytics and other approved apps.' },
    ],
  },
  {
    name: 'WooCommerce',
    items: [
      { category: 'WooCommerce', question: 'Do you build WooCommerce stores?', answer: 'Yes. We build responsive WooCommerce stores with custom functionality and a scalable WordPress architecture.' },
      { category: 'WooCommerce', question: 'Can you migrate an existing store to WooCommerce?', answer: 'Yes. Migration planning can include products, customers, orders and SEO-friendly redirects.' },
      { category: 'WooCommerce', question: 'Do you provide maintenance and integrations?', answer: 'Yes. We support updates, backups, security, performance tuning, plugins and API integrations.' },
    ],
  },
  {
    name: 'TikTok Shop',
    items: [
      { category: 'TikTok Shop', question: 'Can you set up a TikTok Shop?', answer: 'Yes. We can support shop setup, product catalogue preparation and marketplace-compliance workflows.' },
      { category: 'TikTok Shop', question: 'Do you manage affiliates and creators?', answer: 'Yes. Support can include affiliate onboarding, creator outreach and ongoing programme coordination.' },
      { category: 'TikTok Shop', question: 'Can you run TikTok Shop campaigns?', answer: 'Yes. We can support advertising, promotions, live-shopping planning and catalogue-led campaigns.' },
    ],
  },
  {
    name: 'Etsy',
    items: [
      { category: 'Etsy', question: 'Can you create an Etsy store?', answer: 'Yes. We can support store setup, branding, catalogue organisation and launch preparation.' },
      { category: 'Etsy', question: 'Do you optimise Etsy SEO?', answer: 'Yes. We conduct keyword research and improve titles, tags, descriptions and listing structure.' },
      { category: 'Etsy', question: 'Can you manage Etsy Ads?', answer: 'Yes. We review listing readiness, campaign performance and advertising efficiency.' },
    ],
  },
  {
    name: 'eBay',
    items: [
      { category: 'eBay', question: 'Do you manage eBay stores?', answer: 'Yes. Support can include listings, store optimisation, inventory organisation, Seller Hub reporting and daily workflows.' },
      { category: 'eBay', question: 'Can you optimise eBay listings?', answer: 'Yes. We improve titles, descriptions, keywords, categories and item specifics to support visibility and sales.' },
      { category: 'eBay', question: 'Do you handle order and inventory management?', answer: 'Yes. We can create more structured order-tracking, fulfilment and catalogue-management workflows.' },
    ],
  },
  {
    name: 'Marketing',
    items: [
      { category: 'Marketing & SEO', question: 'Do you provide eCommerce SEO services?', answer: 'Yes. Support can include technical SEO, keyword research, content optimisation and marketplace search visibility.' },
      { category: 'Marketing & SEO', question: 'Do you manage Google and Meta Ads?', answer: 'Yes. These services can be coordinated with marketplace advertising and storefront conversion work.' },
      { category: 'Marketing & SEO', question: 'Can you improve conversion rates?', answer: 'Yes. We use analytics, UX improvements, stronger content and testing priorities to improve conversion performance.' },
      { category: 'Pricing & Support', question: 'Do you provide monthly reports and ongoing support?', answer: 'Yes. Ongoing plans include transparent reports, actionable insights, agreed KPIs and flexible account support.' },
      { category: 'Pricing & Support', question: 'Will I own my website and accounts?', answer: 'Yes. You retain full ownership of your website, marketplace accounts, data and approved creative assets.' },
    ],
  },
]
