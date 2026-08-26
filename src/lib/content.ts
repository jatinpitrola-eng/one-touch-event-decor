// ============================================================
// ONE TOUCH EVENT DÉCOR — Editable Content Schema
// All text + image URLs on the website are editable via admin panel.
// Defaults are defined here. Admin edits override via localStorage.
// ============================================================

export type GalleryItem = {
  id: string;
  url: string;
  category: "Weddings" | "Birthdays" | "Baby Showers" | "Corporate" | "Family" | "Anniversary";
  title: string;
};

export type Service = {
  id: string;
  icon: string; // lucide icon name
  title: string;
  tagline: string;
  desc: string;
  image: string;
  span: string;
};

export type Testimonial = {
  id: string;
  name: string;
  event: string;
  rating: number;
  text: string;
};

export type Faq = {
  id: string;
  q: string;
  a: string;
};

export type PricingPackage = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  highlight: boolean;
  features: string[];
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type ProcessStep = {
  id: string;
  icon: string;
  step: string;
  title: string;
  desc: string;
};

export type DecorStyle = {
  id: string;
  name: string;
  desc: string;
  image: string;
};

export type SiteContent = {
  // Brand
  brandName: string;
  brandScript: string;
  brandTagline: string;
  logoUrl: string;
  phone: string;
  email: string;
  address: string;
  instagram: string;
  facebook: string;

  // Hero
  heroEyebrow: string;
  heroLine1: string;
  heroLine2: string;
  heroLine3: string;
  heroSub: string;
  heroCta1: string;
  heroCta2: string;
  heroImage1: string;
  heroImage2: string;
  heroBadgeText: string;
  heroBadgeSub: string;
  heroPriceLabel: string;
  heroPriceValue: string;
  heroPriceSub: string;
  heroStats: string;
  heroStatsRating: string;

  // Stats bar
  stats: { value: number; suffix: string; label: string }[];

  // About
  aboutEyebrow: string;
  aboutTitle1: string;
  aboutTitle2: string;
  aboutP1: string;
  aboutP2: string;
  aboutImage1: string;
  aboutImage2: string;
  aboutSince: string;
  aboutPillars: { icon: string; title: string; text: string }[];

  // Services
  servicesEyebrow: string;
  servicesTitle1: string;
  servicesTitle2: string;
  servicesSub: string;
  services: Service[];
  servicesCtaText: string;
  servicesCtaButton: string;

  // Family functions
  familyEyebrow: string;
  familyTitle1: string;
  familyTitle2: string;
  familyP: string;
  familyMoments: { icon: string; title: string; desc: string }[];
  familyImage1: string;
  familyImage2: string;
  familyCtaButton: string;
  familyTestimonialText: string;
  familyTestimonialName: string;

  // Decor styles
  decorEyebrow: string;
  decorTitle1: string;
  decorTitle2: string;
  decorSub: string;
  decorStyles: DecorStyle[];

  // Masterpiece
  masterpieceEyebrow: string;
  masterpieceTitle1: string;
  masterpieceTitle2: string;
  masterpieceImage: string;
  masterpieceQuote: string;
  masterpieceMeta: string;
  masterpieceMaterials: string;
  masterpieceMaterialsValue: string;
  masterpieceShades: string;
  masterpieceShadesValue: string;
  masterpieceSpecs: { num: string; label: string }[];

  // Behind studio
  studioEyebrow: string;
  studioTitle1: string;
  studioTitle2: string;
  studioSub: string;
  studioTeam: TeamMember[];
  studioStats: { num: string; label: string }[];

  // Process
  processEyebrow: string;
  processTitle1: string;
  processTitle2: string;
  processSub: string;
  processSteps: ProcessStep[];

  // Gallery
  galleryEyebrow: string;
  galleryTitle1: string;
  galleryTitle2: string;
  gallerySub: string;
  gallery: GalleryItem[];

  // Testimonials
  testimonialsEyebrow: string;
  testimonialsTitle1: string;
  testimonialsTitle2: string;
  testimonials: Testimonial[];

  // Pricing
  pricingEyebrow: string;
  pricingTitle1: string;
  pricingTitle2: string;
  pricingSub: string;
  packages: PricingPackage[];
  pricingNote: string;

  // Why choose us
  whyEyebrow: string;
  whyTitle1: string;
  whyTitle2: string;
  whyFeatures: { icon: string; title: string; desc: string }[];
  whyBottomText: string;
  whyBottomSub: string;

  // FAQ
  faqEyebrow: string;
  faqTitle1: string;
  faqTitle2: string;
  faqs: Faq[];
  faqCtaText: string;
  faqCtaButton: string;

  // Final CTA
  finalCtaEyebrow: string;
  finalCtaTitle1: string;
  finalCtaTitle2: string;
  finalCtaSub: string;
  finalCtaButton1: string;
  finalCtaButton2: string;
  finalCtaBgImage: string;

  // Booking
  bookingEyebrow: string;
  bookingTitle1: string;
  bookingTitle2: string;
  bookingSub: string;
  bookingSuccessTitle: string;
  bookingSuccessText: string;

  // Footer
  footerDesc: string;
  footerCopyright: string;

  // Press logos
  pressTitle: string;
  pressLogos: string[];
};

// Default content — used on first load and as fallback
export const DEFAULT_CONTENT: SiteContent = {
  brandName: "One Touch",
  brandScript: "One Touch",
  brandTagline: "EVENT DÉCOR",
  logoUrl: "/logo.png",
  phone: "+91 99999 99999",
  email: "hello@onetouchevents.in",
  address: "Studio 12, Linking Road, Bandra West, Mumbai 400050",
  instagram: "#",
  facebook: "#",

  heroEyebrow: "LUXURY BALLOON ARTISTRY",
  heroLine1: "Where Every",
  heroLine2: "Moment",
  heroLine3: "Takes Flight",
  heroSub: "Bespoke balloon installations and luxury event décor crafted to turn ordinary celebrations into extraordinary memories. From intimate gatherings to grand celebrations — One Touch transforms spaces with breathtaking artistry.",
  heroCta1: "Book Your Event",
  heroCta2: "View Gallery",
  heroImage1: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/844637d304e8.jpg",
  heroImage2: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/720e4ca5c2f9.jpg",
  heroBadgeText: "100% Custom",
  heroBadgeSub: "BESPOKE DESIGNS",
  heroPriceLabel: "STARTING FROM",
  heroPriceValue: "₹4,999",
  heroPriceSub: "per event",
  heroStats: "500+ events styled",
  heroStatsRating: "4.9/5 rating",

  stats: [
    { value: 500, suffix: "+", label: "Events Styled" },
    { value: 8, suffix: " yrs", label: "Of Craft" },
    { value: 150, suffix: "+", label: "Custom Themes" },
    { value: 98, suffix: "%", label: "Happy Clients" },
  ],

  aboutEyebrow: "OUR STORY",
  aboutTitle1: "Where Artistry",
  aboutTitle2: "Meets Celebration",
  aboutP1: "One Touch Event Décor was born from a simple belief — that every celebration deserves to feel extraordinary. What began as a single balloon arch in a friend's backyard has grown into a full-service luxury décor studio trusted by families, brands, and brides across the country.",
  aboutP2: "Our signature lies in the unseen details — the curve of an arch, the weight of a garland, the harmony of a palette. We don't decorate spaces; we compose experiences that linger long after the last guest has gone home.",
  aboutImage1: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5df40339872d.jpg",
  aboutImage2: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/91268f7efbc4.jpg",
  aboutSince: "2017",
  aboutPillars: [
    { icon: "Sparkles", title: "Bespoke Designs", text: "Every installation begins with a blank canvas. No templates, no shortcuts — only original concepts tailored to your story." },
    { icon: "Leaf", title: "Premium Materials", text: "We source luxury-grade balloons, silks, and floral elements from trusted artisans worldwide for unmatched finish." },
    { icon: "Award", title: "White-Glove Service", text: "From first consultation to teardown, our team manages every detail with discretion and obsessive attention." },
  ],

  servicesEyebrow: "SIGNATURE SERVICES",
  servicesTitle1: "One Studio,",
  servicesTitle2: "Every Occasion",
  servicesSub: "Six pillars of décor mastery — each crafted with the same obsessive attention to detail. Pick one, mix several, or let us design a one-of-a-kind experience around your celebration.",
  services: [
    { id: "s1", icon: "Heart", title: "Weddings", tagline: "Vows made visible", desc: "Ceremony arches, mandap drapes, sweetheart tablescapes, and grand entrance florals — designed to frame forever.", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a17fe7db470b.jpg", span: "lg:col-span-2 lg:row-span-2" },
    { id: "s2", icon: "Cake", title: "Birthdays", tagline: "Year another chapter", desc: "From sweet sixteens to milestone fiftieths — pastel dreams, confetti ceilings, and number sculptures.", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/af3d47add123.jpg", span: "" },
    { id: "s3", icon: "Baby", title: "Baby Showers", tagline: "Welcoming little wonders", desc: "Cloud garlands, teddy bear columns, and gender-reveal installations.", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/cf845b0572ab.jpg", span: "" },
    { id: "s4", icon: "Building", title: "Corporate", tagline: "Brand-worthy moments", desc: "Stage backdrops, launch activations, conference décor, and award-night statements.", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/959cadbe9eb6.jpg", span: "" },
    { id: "s5", icon: "Gift", title: "Anniversaries", tagline: "Years worth reliving", desc: "Romantic balcony installations, candle-lit arches, and surprise-reveal moments.", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fcb871946fc3.jpg", span: "" },
    { id: "s6", icon: "Sparkles", title: "Custom Themes", tagline: "Imagination, unlimited", desc: "Have a vision? We design around it — cultural, fantasy, seasonal, or avant-garde.", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/86d9cda17a14.jpg", span: "lg:col-span-2" },
  ],
  servicesCtaText: "Don't see exactly what you imagined?",
  servicesCtaButton: "Tell Us Your Vision",

  familyEyebrow: "BECAUSE FAMILY IS FOREVER",
  familyTitle1: "Family Functions,",
  familyTitle2: "Elevated",
  familyP: "Some of our most-loved celebrations are the ones held at home — surrounded by grandparents, cousins, and the smell of mum's cooking. We specialize in turning everyday living rooms, terraces, and community halls into spaces worthy of the love your family shares. From intimate pujas to multi-day wedding functions, every corner of your home becomes a stage.",
  familyMoments: [
    { icon: "Users", title: "Family Reunions", desc: "Multi-generational gatherings styled with warmth — welcome arches, photo walls, and memory corners." },
    { icon: "PartyPopper", title: "Festivals & Pujas", desc: "Diwali rangoli installs, Ganesh mandap, Onam floral arches, Christmas wonderlands, Eid iftar décors." },
    { icon: "Heart", title: "Engagements & Roka", desc: "Intimate ring-ceremony backdrops, candle-lit pathways, and pastel florals for the first yes." },
    { icon: "Sparkles", title: "Milestone Celebrations", desc: "First birthdays, half-birthdays, naming ceremonies, housewarmings — every little first, styled." },
  ],
  familyImage1: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e7d4483ade44.jpg",
  familyImage2: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bf9b46ee4646.jpg",
  familyCtaButton: "Plan a Family Celebration",
  familyTestimonialText: "They turned our tiny terrace into a wedding wonderland. Every aunty asked for their number!",
  familyTestimonialName: "SHARMA FAMILY",

  decorEyebrow: "DÉCOR ARSENAL",
  decorTitle1: "Six Forms of",
  decorTitle2: "Balloon Artistry",
  decorSub: "Each event draws from these signature styles — mixed, matched, and customised to your palette and venue. Hover to preview.",
  decorStyles: [
    { id: "d1", name: "Balloon Arches", desc: "Sculptural entrances that frame your moment — classic, organic, or spiral.", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2f54945a3284.jpg" },
    { id: "d2", name: "Garlands & Swags", desc: "Lush layered garlands that drape walls, tables, and ceilings.", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/cf845b0572ab.jpg" },
    { id: "d3", name: "Columns & Pillars", desc: "Twin sentinels for stages, photo walls, and entrance frames.", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4acdddc808c3.jpg" },
    { id: "d4", name: "Ceiling Installations", desc: "Floating clouds and chandelier clusters overhead.", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/60ebb6d2e378.jpg" },
    { id: "d5", name: "Backdrops & Walls", desc: "Photogenic walls — balloon mosaics, floral runs, and themed sets.", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2cfbd5ac00ab.jpg" },
    { id: "d6", name: "Tablescapes", desc: "Centerpieces, runners, and chair décor for intimate tableaus.", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5ff84a42f5d2.jpg" },
  ],

  masterpieceEyebrow: "THE MASTERPIECE",
  masterpieceTitle1: "A Single Piece,",
  masterpieceTitle2: "A Thousand Memories",
  masterpieceImage: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/54855a71f393.jpeg",
  masterpieceQuote: "This 18-foot spiral arch — built from 1,400 individual balloons across nine shades of blush, terracotta, and sage — greeted 600 guests at the Sharma wedding reception.",
  masterpieceMeta: "FEATURED INSTALLATION · DEC 2024",
  masterpieceMaterials: "MATERIALS",
  masterpieceMaterialsValue: "1,400 balloons",
  masterpieceShades: "SHADES",
  masterpieceShadesValue: "9 custom tones",
  masterpieceSpecs: [
    { num: "18ft", label: "Height" },
    { num: "32 hrs", label: "Build Time" },
    { num: "1,400", label: "Balloons Used" },
    { num: "600", label: "Guests Welcomed" },
  ],

  studioEyebrow: "BEHIND THE STUDIO",
  studioTitle1: "The Hands Behind",
  studioTitle2: "Every Detail",
  studioSub: "A studio of nine obsessive stylists, florists, and dreamers — each obsessed with the same thing: making your celebration unforgettable. Here are three of them.",
  studioTeam: [
    { id: "t1", name: "Aanya Verma", role: "Founder & Lead Stylist", bio: "8 years crafting balloon installations. Started One Touch from her Bandra studio with a single balloon arch and a borrowed air pump.", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/72314cc1b0fd.jpg" },
    { id: "t2", name: "Rohan Desai", role: "Creative Director", bio: "Background in set design for Bollywood. Brings film-grade visual storytelling to every installation.", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/49d7e54dd51f.jpg" },
    { id: "t3", name: "Meera Iyer", role: "Head of Floral Integration", bio: "Trained at the Covent Garden Academy of Flowers. Marries fresh florals with balloon artistry for one-of-a-kind pieces.", image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5288f94f87a5.jpg" },
  ],
  studioStats: [
    { num: "9", label: "Stylists" },
    { num: "2", label: "Studios" },
    { num: "12k+", label: "Balloons in Stock" },
    { num: "24/7", label: "On Call" },
  ],

  processEyebrow: "HOW WE WORK",
  processTitle1: "From Hello to",
  processTitle2: "Reveal",
  processSub: "Four steps, eight years of refinement. The result is a process so smooth, you might just forget we're there until the moment matters most.",
  processSteps: [
    { id: "p1", icon: "Phone", step: "01", title: "Consultation", desc: "We begin with a 30-minute discovery call to understand your vision, palette, venue, and budget. No deposit, no pressure — just listening." },
    { id: "p2", icon: "PencilRuler", step: "02", title: "Design Proposal", desc: "Within 48 hours, you receive a custom mood board, layout sketch, and transparent quote. We refine together until every detail sings." },
    { id: "p3", icon: "Package", step: "03", title: "Sourcing & Prep", desc: "Our team hand-selects every balloon, fabric, and floral element. Pre-builds happen in-studio so on-site time stays minimal." },
    { id: "p4", icon: "Sparkles", step: "04", title: "Setup & Reveal", desc: "We arrive early, install quietly, and step back for the big reveal. You walk in and gasp — every single time." },
  ],

  galleryEyebrow: "THE GALLERY",
  galleryTitle1: "Moments We've",
  galleryTitle2: "Styled",
  gallerySub: "A curated peek into real events styled for real clients. Filter by category or browse the full collection.",
  gallery: [
    { id: "g1", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a17fe7db470b.jpg", category: "Weddings", title: "Crimson Vows Arch" },
    { id: "g2", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/844637d304e8.jpg", category: "Weddings", title: "Garden Romance Entrance" },
    { id: "g3", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2f54945a3284.jpg", category: "Weddings", title: "Pearl Aisle Frame" },
    { id: "g4", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/78c9eb0b49f0.jpeg", category: "Weddings", title: "Ceremony Backdrop" },
    { id: "g5", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2fd84e0a6c96.jpg", category: "Weddings", title: "Sage & Blush Arch" },
    { id: "g6", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/af3d47add123.jpg", category: "Birthdays", title: "Sweet Sixteen Burst" },
    { id: "g7", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/616385329708.jpg", category: "Birthdays", title: "Milestone 30th Glow" },
    { id: "g8", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/720e4ca5c2f9.jpg", category: "Birthdays", title: "Pastel Dream Wall" },
    { id: "g9", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/29e554526e8d.jpg", category: "Birthdays", title: "Confetti Ceiling" },
    { id: "g10", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2cfbd5ac00ab.jpg", category: "Birthdays", title: "Number Sculpture" },
    { id: "g11", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/cf845b0572ab.jpg", category: "Baby Showers", title: "Welcome Little One" },
    { id: "g12", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2495487eacd5.jpg", category: "Baby Showers", title: "Cloud Nine Garland" },
    { id: "g13", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5288f94f87a5.jpg", category: "Baby Showers", title: "Pastel Pop Arch" },
    { id: "g14", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/959cadbe9eb6.jpg", category: "Corporate", title: "Brand Launch Stage" },
    { id: "g15", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/69fdb4de0deb.jpg", category: "Corporate", title: "Conference Backdrop" },
    { id: "g16", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/95e16bf86583.jpg", category: "Corporate", title: "Award Night Glow" },
    { id: "g17", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/91268f7efbc4.jpg", category: "Family", title: "Family Reunion Arch" },
    { id: "g18", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e7d4483ade44.jpg", category: "Family", title: "Festive Home Decor" },
    { id: "g19", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/bf9b46ee4646.jpg", category: "Family", title: "Ritual Mandap" },
    { id: "g20", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fcb871946fc3.jpg", category: "Anniversary", title: "Silver Jubilee Glow" },
    { id: "g21", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5ff84a42f5d2.jpg", category: "Anniversary", title: "Romantic Balcony" },
    { id: "g22", url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/467bb354ac9d.jpg", category: "Anniversary", title: "Candlelit Arch" },
  ],

  testimonialsEyebrow: "KIND WORDS",
  testimonialsTitle1: "Loved by Families,",
  testimonialsTitle2: "Trusted by Brands",
  testimonials: [
    { id: "r1", name: "Priya & Arjun Mehta", event: "Wedding · Udaipur", rating: 5, text: "One Touch transformed our wedding mandap into a living garden. Guests are still talking about it months later. The team understood our vision in the very first call and elevated it beyond what we imagined possible." },
    { id: "r2", name: "Sneha Kapoor", event: "Daughter's 1st Birthday", rating: 5, text: "From the cloud-themed entrance to the dessert table backdrop, every single detail was perfect. My daughter kept pointing at the balloons and laughing. Worth every rupee and then some." },
    { id: "r3", name: "Rohit Sharma, HDFC Life", event: "Annual Conference", rating: 5, text: "We've worked with many decorators over the years. None match One Touch for professionalism and creative ambition. They built a 20-foot stage backdrop overnight without disrupting the venue." },
    { id: "r4", name: "Ananya Iyer", event: "Baby Shower", rating: 5, text: "Soft, dreamy, and completely Instagram-worthy. The pastel garland was so lush my mother-in-law asked if the flowers were real. Cannot recommend enough." },
    { id: "r5", name: "Vikram & Reshma Rao", event: "25th Anniversary", rating: 5, text: "They recreated our wedding colours from a faded 25-year-old photograph. My husband cried when he walked in. That's all you need to know about One Touch." },
    { id: "r6", name: "Kavya Reddy", event: "Engagement", rating: 5, text: "Booked them 3 weeks before the function. They delivered a custom-built backdrop, aisle florals, and entrance arch in 5 days. Magic workers, honestly." },
  ],

  pricingEyebrow: "PACKAGES",
  pricingTitle1: "Pick Your",
  pricingTitle2: "Experience",
  pricingSub: "Transparent pricing. No hidden charges. Every package is fully customisable — add a balloon wall here, swap a colour palette there. Final quotes are confirmed after consultation.",
  packages: [
    { id: "pk1", name: "Essential", tagline: "Intimate gatherings up to 30 guests", price: "4,999", period: "starting from", highlight: false, features: ["1 balloon arch (8 ft)", "2 balloon columns", "Basic backdrop (6×4 ft)", "1 themed centrepiece", "Setup & teardown included", "4-hour on-site service"] },
    { id: "pk2", name: "Signature", tagline: "Most popular for birthdays & showers", price: "14,999", period: "starting from", highlight: true, features: ["Organic balloon arch (12 ft)", "4 balloon columns", "Premium photo backdrop (8×6 ft)", "Ceiling installation (1 zone)", "3 themed centrepieces", "Custom signage & name cutouts", "6-hour on-site service", "Dedicated stylist + 2 assistants"] },
    { id: "pk3", name: "Bespoke", tagline: "Weddings & large celebrations", price: "Custom", period: "tailored quote", highlight: false, features: ["Unlimited arches & installations", "Multi-zone ceiling décor", "Stage backdrop & mandap styling", "Floral integration", "Custom fabrication & props", "Lighting coordination", "Full-day on-site team", "Personal designer + 5+ stylists"] },
  ],
  pricingNote: "All packages include free design consultation, premium materials, and GST. Travel & logistics quoted separately for venues 25 km+ outside city limits.",

  whyEyebrow: "WHY ONE TOUCH",
  whyTitle1: "The Little Things,",
  whyTitle2: "Done Exceptionally",
  whyFeatures: [
    { icon: "Clock", title: "On-Time Promise", desc: "Setup complete 2 hours before your first guest arrives — guaranteed. We've never been late in 8 years." },
    { icon: "Truck", title: "Free Local Delivery", desc: "Complimentary transport & setup within city limits. No surprise logistics fees on the invoice." },
    { icon: "ShieldCheck", title: "Quality Guarantee", desc: "Every balloon is helium-tested and pre-inflated overnight. If anything deflates before your event, we replace it free." },
    { icon: "Palette", title: "Custom Colour Mixing", desc: "We hand-blend shades to match your outfit, brand, or wedding palette. No off-the-shelf colour kits." },
    { icon: "Leaf", title: "Eco-Conscious Materials", desc: "Latex balloons biodegrade at the same rate as oak leaves. We recycle all foils and structures after every event." },
    { icon: "HeartHandshake", title: "Discreet, Polite Crew", desc: "Our stylists arrive in uniform, work quietly, and clean up after themselves. Many clients forget we were there." },
    { icon: "Camera", title: "Photo-Ready Layouts", desc: "Every installation is built with photography in mind — angles, lighting, and guest flow all pre-planned." },
    { icon: "Sparkles", title: "Surprise Reveals", desc: "Specialising in jaw-dropping surprise reveals for proposals, birthdays, and homecomings." },
  ],
  whyBottomText: "8 years, 500+ events, zero complaints.",
  whyBottomSub: "We don't take that record lightly.",

  faqEyebrow: "QUESTIONS, ANSWERED",
  faqTitle1: "Before You",
  faqTitle2: "Ask Us",
  faqs: [
    { id: "f1", q: "How early should I book my event?", a: "For weddings and large celebrations, we recommend booking 8–12 weeks in advance to secure your date and allow ample design time. For birthdays, baby showers, and smaller functions, 3–4 weeks is usually sufficient. Last-minute requests (under 7 days) are accepted based on availability and may carry a 15% express fee." },
    { id: "f2", q: "Do you travel for destination events?", a: "Absolutely. We've styled events across India — from Udaipur palace weddings to Goa beach parties and Bangalore corporate galas. Travel, accommodation, and logistics are quoted transparently in your final proposal. For international destinations, please reach us 4+ months in advance." },
    { id: "f3", q: "Can I see my design before the event day?", a: "Yes. Every Signature and Bespoke package includes a custom mood board and layout sketch delivered 48 hours after your consultation. We refine together over email or video call until you're completely happy. For Essential package clients, we share a colour palette reference and reference image gallery." },
    { id: "f4", q: "What happens if a balloon pops during my event?", a: "We pre-inflate and quality-check every balloon overnight before your event. Our latex balloons have a 72+ hour float time. In the rare case something deflates, we leave a small emergency repair kit on-site for Essential clients, and a stylist stays on standby within 30 minutes for Signature and Bespoke packages." },
    { id: "f5", q: "Do you offer payment plans or EMI?", a: "Yes. We accept 25% advance to block your date, 50% two weeks before the event, and 25% on installation day. For Bespoke packages above ₹1 lakh, we offer 3-month no-interest EMI plans via select banking partners. Ask us during your consultation for details." },
    { id: "f6", q: "Are your materials safe for children and pets?", a: "All our latex balloons are 100% biodegradable natural rubber and safe for indoor use. We use only helium-grade inflation for ceiling installations (never hydrogen). Foil balloons are kept out of reach of children and pets. We brief every client on safe disposal and offer post-event balloon pickup free of charge." },
    { id: "f7", q: "Can you work with a specific theme or colour palette?", a: "That's our specialty. Bring us a Pinterest board, a wedding outfit swatch, your brand colours, or even a faded old photo — and we'll custom-mix balloon shades to match. Bespoke package clients receive up to 9 custom-mixed shades included in their quote." },
    { id: "f8", q: "Do you handle teardown after the event?", a: "Yes, every package includes teardown. Our crew returns the next morning (or after the event end-time) to dismantle, clean, and responsibly dispose of all installations. There is no extra charge for this — it's part of our service." },
  ],
  faqCtaText: "Still have a question?",
  faqCtaButton: "Chat With Us",

  finalCtaEyebrow: "LET'S CREATE MAGIC",
  finalCtaTitle1: "Your Moment",
  finalCtaTitle2: "Awaits One Touch",
  finalCtaSub: "Book a complimentary consultation today. Tell us about your dream celebration — we'll bring the balloons, the magic, and the unforgettable. No deposit. No pressure. Just imagination.",
  finalCtaButton1: "Book Free Consultation",
  finalCtaButton2: "WhatsApp Us",
  finalCtaBgImage: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/49d7e54dd51f.jpg",

  bookingEyebrow: "BOOK A CONSULTATION",
  bookingTitle1: "Let's Plan",
  bookingTitle2: "Your Moment",
  bookingSub: "Share a few details and our lead stylist will reach out within 24 hours with ideas, a mood board, and a transparent quote. No deposit required for the first consultation.",
  bookingSuccessTitle: "Inquiry Received!",
  bookingSuccessText: "Our lead stylist will personally reach out within 24 hours to begin crafting your bespoke experience.",

  footerDesc: "Bespoke balloon installations and luxury event décor. Turning ordinary celebrations into extraordinary memories since 2017.",
  footerCopyright: "One Touch Event Décor. All rights reserved.",

  pressTitle: "AS FEATURED IN",
  pressLogos: ["VOGUE INDIA", "BRIDES TODAY", "WEDDING AFFAIR", "ELLE", "FEMINA", "HARPER'S BAZAAR", "THE KNOT", "GQ INDIA"],
};

// ============================================================
// Admin credentials (stored as hash for basic security)
// In production, replace with real backend auth
// ============================================================
export const ADMIN_CREDENTIALS = {
  email: "admin@onetouchevents.in",
  password: "onetouch2024",
  accessCode: "741852",
};

// Simple hash for basic obfuscation (not cryptographically secure)
export function simpleHash(str: string): string {
  return str; // Direct comparison — use the plain values above
}

export const STORAGE_KEY = "one_touch_content";
export const AUTH_KEY = "one_touch_auth";
