/*
 * ============================================================
 *  SITE CONFIGURATION — SHIVPARVATI APARTMENTS
 *  All editable content for MahaRERA, Construction Progress,
 *  Home Loan, Lucky Draw Offer, Legal/Quality, FAQs, and Contacts
 * ============================================================
 */

// ─── CORE PROJECT INFO ──────────────────────────────────────
export const PROJECT_NAME = "Shivparvati Apartments";
export const PROJECT_TAGLINE = "YOUR DREAM HOME IN PUNE";
export const PROJECT_SUBTITLE = "Premium 1 & 2 BHK residential apartments designed for comfortable modern living in Kondhwa, Pune.";
export const PROJECT_RERA = "MahaRERA Reg. No: PR1260002601322";
export const BROCHURE_URL = "/pdf/Binder 1.pdf";
export const BROCHURE_FILENAME = "Shivparvati-Apartments-Brochure.pdf";

// ─── BUILDER / DEVELOPER INFO ───────────────────────────────
export const BUILDER_NAME = "Shivparvati Developers";
export const BUILDER_DESCRIPTION = `Shivparvati Developers is dedicated to creating high-quality residential spaces that combine modern architecture, top-tier amenities, and prime connectivity in Pune. With an unyielding focus on customer satisfaction and structural excellence, Shivparvati Apartments is built to be your lifetime sanctuary.`;
export const BUILDER_EXPERIENCE = "15+";
export const BUILDER_COMPLETED_PROJECTS = "20+";
export const BUILDER_HAPPY_FAMILIES = "1,500+";
export const BUILDER_AWARDS = "8+";

// ─── CONTACT INFORMATION ────────────────────────────────────
export const WHATSAPP_NUMBER = "919623553952"; // Official WhatsApp number with country code
export const DISPLAY_WHATSAPP = "96235 53952";
export const PHONE_NUMBER = "+91 96235 53952";
export const ADDITIONAL_PHONES = ["+91 98606 96699", "+91 73870 99810", "+91 98505 01536"];
export const EMAIL = "inquiry@shivparvatidevelopers.com";
export const OFFICE_HOURS = "Mon – Sun: 9:30 AM – 7:00 PM";

// ─── ADDRESS & LOCATION ─────────────────────────────────────
export const ADDRESS = {
  line1: "Sr.No.49, Katraj Kondhwa Rd, Near Shivparvati Mangal Karyalaya",
  line2: "Gokulnagar, Kondhwa Bk",
  line3: "Pune, Maharashtra – 411046",
  full: "Sr.No.49, Katraj Kondhwa Rd, Near Shivparvati Mangal Karyalaya, Gokulnagar, Kondhwa Bk, Pune-411046",
};

export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.444973516091!2d73.8767905!3d18.4635676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea5f5e274643%3A0x6e25f82b4293f9c6!2sKatraj%20-%20Kondhwa%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000";

export const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=18.4635676,73.8767905";

// ─── SOCIAL MEDIA ───────────────────────────────────────────
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  linkedin: "https://linkedin.com",
};

// ─── STATS STRIP ─────────────────────────────────────────────
export const PROJECT_STATS = [
  { label: "Configuration Options", value: "1 & 2 BHK", subtitle: "Optimum Layouts" },
  { label: "Rooftop Lifestyle", value: "5+ Amenities", subtitle: "Terrace Deck & Gym" },
  { label: "Prime Connectivity", value: "1 Min", subtitle: "To Katraj-Kondhwa Rd" },
  { label: "Legal Title", value: "100% Clear", subtitle: "MahaRERA Approved" },
];

// ─── 1. MAHARERA SECTION CONFIGURATION ──────────────────────
export const RERA_CONFIG = {
  title: "MahaRERA Registered Project",
  subtitle: "100% Transparency & Legal Compliance Assured by the Government of Maharashtra",
  reraNumber: "PR1260002601322",
  projectName: "Shiv Parvati Apartment",
  promoter: "Shiv Parvati Developers",
  location: "Sr. No. 49, Kondhwa Budruk, Pune 411046",
  validity: "27/07/2026 to 31/12/2030",
  certificatePdfUrl: "/docs/maharera-certificate.pdf",
  downloadFileName: "Shivparvati-MahaRERA-Certificate.pdf",
  mahareraPortalUrl: "https://maharerait.maharashtra.gov.in/",
  highlights: [
    "Clear & marketable title verified by legal counsel",
    "Stage-wise construction updates audited under MahaRERA",
    "Escrow account compliance for timely project delivery",
    "Standardized buyer agreements as per government guidelines",
  ],
};

// ─── 2. CONSTRUCTION PROGRESS CONFIGURATION ─────────────────
export const CONSTRUCTION_CONFIG = {
  title: "Live Construction Updates",
  tag: "Progress as of October 2026",
  subtitle: "Witness our rapid on-ground progress with real site photographs updated every month.",
  disclaimerNote: "Photos are actual site images. Progress is updated monthly.",
  // Timeline stage status options: 'done' | 'in_progress' | 'upcoming'
  stages: [
    { id: "foundation", label: "Foundation", status: "done", completion: "100%" },
    { id: "plinth", label: "Plinth", status: "done", completion: "100%" },
    { id: "slab", label: "Slab Work", status: "in_progress", completion: "60%" },
    { id: "masonry", label: "Masonry (AAC Blocks)", status: "in_progress", completion: "30%" },
    { id: "plastering", label: "Plastering", status: "upcoming", completion: "0%" },
    { id: "finishing", label: "Finishing & Electrical", status: "upcoming", completion: "0%" },
    { id: "possession", label: "Possession", status: "upcoming", completion: "0%" },
  ],
  photos: [
    {
      id: 1,
      src: "/images/construction/site-1.jpg",
      thumbnail: "/images/construction/site-1.jpg",
      caption: "Structural RCC column and slab framework on upper floor level.",
      stageTag: "RCC Slab Work",
      date: "October 2026",
    },
    {
      id: 2,
      src: "/images/construction/site-2.jpg",
      thumbnail: "/images/construction/site-2.jpg",
      caption: "High-grade AAC block masonry underway with precision alignment.",
      stageTag: "Block Masonry",
      date: "October 2026",
    },
    {
      id: 3,
      src: "/images/construction/site-3.jpg",
      thumbnail: "/images/construction/site-3.jpg",
      caption: "Reinforced shuttering & steel binding for the next residential slab.",
      stageTag: "Shuttering & Steel",
      date: "October 2026",
    },
    {
      id: 4,
      src: "/images/construction/site-4.jpg",
      thumbnail: "/images/construction/site-4.jpg",
      caption: "External facade perspective showing robust RCC frame & column strength.",
      stageTag: "Superstructure",
      date: "October 2026",
    },
    {
      id: 5,
      src: "/images/construction/site-5.jpg",
      thumbnail: "/images/construction/site-5.jpg",
      caption: "Interior corridor and room partitioning with eco-friendly AAC blocks.",
      stageTag: "Internal Partition",
      date: "October 2026",
    },
    {
      id: 6,
      src: "/images/construction/site-6.jpg",
      thumbnail: "/images/construction/site-6.jpg",
      caption: "Ground access and entry plinth development with staging area.",
      stageTag: "Plinth & Access",
      date: "October 2026",
    },
    {
      id: 7,
      src: "/images/construction/site-7.jpg",
      thumbnail: "/images/construction/site-7.jpg",
      caption: "Panoramic site overview overlooking Katraj-Kondhwa road corridor.",
      stageTag: "Site Overview",
      date: "October 2026",
    },
  ],
};

// ─── 3. EASY HOME LOAN CONFIGURATION ────────────────────────
export const HOME_LOAN_CONFIG = {
  title: "Easy Home Loan Assistance",
  subtitle: "Hassle-free financing with leading nationalized and private banks at attractive interest rates.",
  disclaimer: "Loan approval is subject to bank terms and eligibility. Interest rates vary by lender.",
  features: [
    {
      icon: "Building2",
      title: "Bank Tie-ups",
      description: "Pre-approved home loans from SBI, HDFC, ICICI, Bank of Maharashtra, Axis Bank & more.",
    },
    {
      icon: "FileCheck",
      title: "Quick Documentation",
      description: "Transparent paperwork and express loan processing with minimal turnaround time.",
    },
    {
      icon: "Calculator",
      title: "Eligibility Guidance",
      description: "Dedicated loan executives to evaluate eligibility, co-applicant benefits, and PMAY subsidies.",
    },
    {
      icon: "BadgePercent",
      title: "Paperwork Assistance",
      description: "Complete end-to-end doorstep document pickup and doorstep bank sanction support.",
    },
  ],
  calculatorDefaults: {
    minAmount: 1000000,
    maxAmount: 10000000,
    defaultAmount: 3500000,
    stepAmount: 50000,
    minRate: 7.0,
    maxRate: 14.0,
    defaultRate: 8.5,
    stepRate: 0.1,
    minTenure: 5,
    maxTenure: 30,
    defaultTenure: 20,
    stepTenure: 1,
  },
};

// ─── 4. LUCKY DRAW / BOOKING OFFER CONFIGURATION ────────────
export const LUCKY_DRAW_CONFIG = {
  badge: "Special Festive Booking Offer",
  headline: "Book Your Home. Win an Activa!",
  subheadline: "Book your 1 or 2 BHK home at Shivparvati Apartments and get an assured entry into the grand Lucky Draw!",
  activaImage: "/images/offers/activa.png",
  drawDate: "2026-12-31T18:00:00+05:30", // Countdown target date (ISO format)
  drawDateDisplay: "31st December 2026, 6:00 PM",
  steps: [
    {
      stepNumber: "01",
      title: "Book Your Flat",
      description: "Reserve your 1 or 2 BHK home with initial token booking amount.",
    },
    {
      stepNumber: "02",
      title: "Get Lucky Coupon",
      description: "Receive your official serialized Lucky Draw coupon at the site office.",
    },
    {
      stepNumber: "03",
      title: "Attend The Draw",
      description: "Join us for the live, transparent lucky draw event on 31st Dec 2026.",
    },
    {
      stepNumber: "04",
      title: "Drive Home Activa",
      description: "Lucky winner receives the keys to a brand-new Honda Activa 6G!",
    },
  ],
  termsAndConditions: [
    "The lucky draw offer is valid on confirmed bookings made during the promotional period.",
    "One lucky draw coupon will be issued per registered apartment booking.",
    "The vehicle offered is a brand new Honda Activa standard model.",
    "Registration charges, insurance, and applicable road taxes shall be as per local RTO regulations.",
    "Prize cannot be exchanged for cash or transferred to any other person.",
    "The developer reserves the right to amend the event schedule with prior notice to all ticket holders.",
    "Subject to Pune jurisdiction only.",
  ],
};

// ─── 5. LEGAL & QUALITY CONFIGURATION ───────────────────────
export const LEGAL_QUALITY_CONFIG = {
  title: "Legal & Construction Quality",
  subtitle: "Uncompromising standards in engineering, transparency, and statutory approvals.",
  checklistPdfUrl: "/docs/documents-checklist.pdf",
  checklistFileName: "Shivparvati-Document-Checklist.pdf",
  legalPoints: [
    { title: "MahaRERA Registered Project", description: "Registered under MahaRERA No. PR1260002601322 with verified project timeline.", enabled: true },
    { title: "Sanctioned Building Plans", description: "Complete architectural and municipal building sanctions in compliance with PMC / PMRDA norms.", enabled: true },
    { title: "Registered Agreement for Sale", description: "Standard transparent sale agreements adhering to all MahaRERA guidelines and clauses.", enabled: true },
    { title: "Conveyance Deed as per RERA", description: "Assurance of society formation and timely conveyance deed handover to apartment owners.", enabled: true },
    { title: "Clear & Marketable Title", description: "Full legal title search report verified by Adv. Kalyan Shinde with zero encumbrances.", enabled: true },
  ],
  qualityPoints: [
    { title: "RCC Earthquake Resistant Frame", description: "Designed by structural consultant Abhijeet Navpute conforming to IS seismic zone specifications.", enabled: true },
    { title: "Eco-Friendly AAC Block Masonry", description: "Superior thermal insulation, sound dampening, fire resistance, and crack-proof wall strength.", enabled: true },
    { title: "Quality-Tested Materials", description: "High-grade Fe-500 TMT steel, branded OPC/PPC cement, and certified aggregate mixes.", enabled: true },
    { title: "Stage-Wise Quality Inspections", description: "Rigorous cube compressive tests, slump tests, and independent supervisor verifications.", enabled: true },
    { title: "Premium Branded Fixtures", description: "Concealed copper wiring with modular switches, anti-skid tiles, and chrome-plated plumbing fittings.", enabled: true },
  ],
};

// ─── PROJECT HIGHLIGHTS ─────────────────────────────────────
export const PROJECT_HIGHLIGHTS = {
  totalFloors: "G + 4 Floors",
  totalApartments: "Exclusive Units",
  configurations: "1 & 2 BHK",
  possessionDate: "Nearing Possession (Dec 2026 onwards)",
  status: "Under Active Construction",
  plotArea: "Prime Gated Community",
};

// ─── ABOUT PROJECT ──────────────────────────────────────────
export const PROJECT_DESCRIPTION = `${PROJECT_NAME} by ${BUILDER_NAME} is an exclusive residential community located along the Katraj-Kondhwa Road in Gokulnagar, Pune. Featuring thoughtfully engineered 1 BHK and 2 BHK residences, the project provides rooftop amenities including a yoga deck, children's play area, open-air gym, and gazebos with landscaped gardens — giving your family peace, security, and effortless connectivity.`;

export const PROJECT_FEATURES = [
  {
    title: "1 & 2 BHK Homes",
    description: "Spacious layouts with optimum cross-ventilation, expansive balconies, and natural light.",
    icon: "Home",
  },
  {
    title: "Modern Architecture",
    description: "Contemporary elevation with aesthetic facade lighting, elegant entrance gate, and premium finishes.",
    icon: "Building2",
  },
  {
    title: "Prime Location",
    description: "Situated 1 minute from Katraj-Kondhwa Highway near Shivparvati Mangal Karyalaya.",
    icon: "MapPin",
  },
  {
    title: "Rooftop Amenities",
    description: "Dedicated rooftop yoga deck, children's play area, open-air gym, and garden gazebos.",
    icon: "Sparkles",
  },
];

// ─── APARTMENT CONFIGURATIONS (ONLY 1 & 2 BHK) ──────────────
export const APARTMENTS = [
  {
    id: "1bhk",
    type: "1 BHK",
    carpetArea: "Spacious Layout",
    price: "Pricing On Request",
    priceNote: "Attractive Payment Plans",
    image: "/images/WhatsApp Image 2026-08-18 at 11.08.20 PM.jpeg",
    floorPlan: "/images/WhatsApp Image 2026-08-18 at 11.08.20 PM (1).jpeg",
    features: [
      "Well-planned Living & Dining",
      "Comfortable Master Bedroom",
      "Modular Kitchen Provision",
      "Private Balcony with Open Views",
      "Branded Electrical & Sanitary Fittings",
    ],
  },
  {
    id: "2bhk",
    type: "2 BHK",
    carpetArea: "Premium Spacious Area",
    price: "Pricing On Request",
    priceNote: "Attractive Payment Plans",
    image: "/images/WhatsApp Image 2026-08-18 at 11.08.19 PM (1).jpeg",
    floorPlan: "/images/WhatsApp Image 2026-08-18 at 11.08.19 PM.jpeg",
    features: [
      "Expansive Living & Dining Room",
      "Master Bedroom with Attached Bathroom",
      "Second Bedroom for Family / Kids",
      "Dual Balconies for Cross Ventilation",
      "Premium Flooring & Designer Finishes",
    ],
  },
];

// ─── AMENITIES WITH REAL RENDERS ────────────────────────────
export const AMENITIES = [
  {
    name: "Yoga & Meditation Deck",
    icon: "Flower2",
    description: "Serene wooden rooftop deck designed for daily yoga and mindfulness amidst sunrise views.",
    image: "/images/WhatsApp Image 2026-08-18 at 11.08.17 PM.jpeg",
  },
  {
    name: "Children's Play Area",
    icon: "Baby",
    description: "Vibrant and safe rooftop play zone equipped with multi-play equipment for kids.",
    image: "/images/WhatsApp Image 2026-08-18 at 11.08.18 PM (2).jpeg",
  },
  {
    name: "Outdoor Gymnasium",
    icon: "Dumbbell",
    description: "Open-air fitness zone with outdoor gym equipment for healthy everyday routines.",
    image: "/images/WhatsApp Image 2026-08-18 at 11.08.18 PM (3).jpeg",
  },
  {
    name: "Garden & Gazebo Pavilion",
    icon: "TreePine",
    description: "Lush green rooftop lawn with illuminated wooden gazebo for evening relaxation.",
    image: "/images/WhatsApp Image 2026-08-18 at 11.08.18 PM (1).jpeg",
  },
  {
    name: "Club Lounge & Pergola",
    icon: "Coffee",
    description: "Designer shaded terrace sit-out area with ambient lighting for community bonding.",
    image: "/images/WhatsApp Image 2026-08-18 at 11.08.18 PM.jpeg",
  },
  {
    name: "3D Aerial Rooftop View",
    icon: "Eye",
    description: "Thoughtfully planned multi-activity rooftop landscape maximizing open space.",
    image: "/images/WhatsApp Image 2026-08-18 at 11.08.20 PM (1).jpeg",
  },
  {
    name: "24/7 Gated Security",
    icon: "ShieldCheck",
    description: "Controlled entrance gate with CCTV surveillance and round-the-clock security guard.",
    image: null,
  },
  {
    name: "Covered Parking",
    icon: "Car",
    description: "Spacious ground-level covered car and two-wheeler parking spaces.",
    image: null,
  },
  {
    name: "High-Speed Elevators",
    icon: "ArrowUpDown",
    description: "Modern automated passenger lift with battery backup.",
    image: null,
  },
  {
    name: "Power Backup",
    icon: "Zap",
    description: "Inverter / generator backup for common area lighting and elevator.",
    image: null,
  },
  {
    name: "Rainwater Harvesting",
    icon: "Droplets",
    description: "Eco-friendly rainwater harvesting system for sustainable water management.",
    image: null,
  },
  {
    name: "Solar Water Heating",
    icon: "Sun",
    description: "Energy-efficient solar water heating provision for master bathrooms.",
    image: null,
  },
];

// ─── GALLERY IMAGES (ACTUAL 3D RENDERS) ─────────────────────
export const GALLERY_IMAGES = [
  {
    src: "/images/WhatsApp Image 2026-08-18 at 11.08.19 PM (1).jpeg",
    alt: `${PROJECT_NAME} — Night Elevation with Grand Entrance`,
    category: "Exterior",
  },
  {
    src: "/images/WhatsApp Image 2026-08-18 at 11.08.20 PM.jpeg",
    alt: `${PROJECT_NAME} — Daytime Building Perspective View`,
    category: "Exterior",
  },
  {
    src: "/images/WhatsApp Image 2026-08-18 at 11.08.21 PM (1).jpeg",
    alt: `${PROJECT_NAME} — Sunset Architectural View`,
    category: "Exterior",
  },
  {
    src: "/images/WhatsApp Image 2026-08-18 at 11.08.20 PM (1).jpeg",
    alt: `${PROJECT_NAME} — 3D Aerial View of Rooftop Amenities`,
    category: "Amenities",
  },
  {
    src: "/images/WhatsApp Image 2026-08-18 at 11.08.17 PM.jpeg",
    alt: "Rooftop Yoga & Meditation Deck at Sunrise",
    category: "Amenities",
  },
  {
    src: "/images/WhatsApp Image 2026-08-18 at 11.08.18 PM (2).jpeg",
    alt: "Children's Colorful Rooftop Play Area",
    category: "Amenities",
  },
  {
    src: "/images/WhatsApp Image 2026-08-18 at 11.08.18 PM (3).jpeg",
    alt: "Outdoor Rooftop Gymnasium & Fitness Equipment",
    category: "Amenities",
  },
  {
    src: "/images/WhatsApp Image 2026-08-18 at 11.08.18 PM (1).jpeg",
    alt: "Illuminated Gazebo Pavilion & Garden Lawn",
    category: "Amenities",
  },
  {
    src: "/images/WhatsApp Image 2026-08-18 at 11.08.18 PM.jpeg",
    alt: "Terrace Lounge with Wooden Pergola & Seating",
    category: "Amenities",
  },
  {
    src: "/images/WhatsApp Image 2026-08-18 at 11.08.20 PM (2).jpeg",
    alt: `${PROJECT_NAME} — Front Elevation Architectural View`,
    category: "Exterior",
  },
  {
    src: "/images/WhatsApp Image 2026-08-18 at 11.08.21 PM.jpeg",
    alt: `${PROJECT_NAME} — Landscape Perspective View`,
    category: "Exterior",
  },
  {
    src: "/images/WhatsApp Image 2026-08-18 at 11.08.22 PM (1).jpeg",
    alt: `${PROJECT_NAME} — Facade Balcony Details at Night`,
    category: "Exterior",
  },
  {
    src: "/images/WhatsApp Image 2026-08-18 at 11.08.19 PM.jpeg",
    alt: `${PROJECT_NAME} — Location Map & Master Connectivity`,
    category: "Location & Plan",
  },
];

// ─── FLOOR PLANS & PROJECT PLANS ────────────────────────────
export const FLOOR_PLANS = [
  {
    id: "1bhk-plan",
    label: "1 BHK Layout Plan",
    image: "/images/WhatsApp Image 2026-08-18 at 11.08.20 PM (1).jpeg",
  },
  {
    id: "2bhk-plan",
    label: "2 BHK Layout Plan",
    image: "/images/WhatsApp Image 2026-08-18 at 11.08.19 PM.jpeg",
  },
  {
    id: "aerial-plan",
    label: "Rooftop Amenities Master Layout",
    image: "/images/WhatsApp Image 2026-08-18 at 11.08.20 PM (1).jpeg",
  },
];

// ─── NEARBY LANDMARKS ───────────────────────────────────────
export const NEARBY_LANDMARKS = [
  {
    category: "Highway & Transit",
    items: [
      { name: "Katraj Kondhwa Main Highway", distance: "1 Min" },
      { name: "Shivparvati Mangal Karyalaya", distance: "1 Min" },
      { name: "Gokul Nagar", distance: "3 Min" },
      { name: "Khadi Machine Chowk", distance: "5 Min" },
      { name: "Katraj Chowk / Bus Stop", distance: "9 Min" },
    ],
  },
  {
    category: "Temples & Landmarks",
    items: [
      { name: "International ISKCON Mandir", distance: "3 Min" },
      { name: "Katraj Lake", distance: "8 Min" },
      { name: "Rajiv Gandhi Zoological Park", distance: "12 Min" },
    ],
  },
  {
    category: "Education & Hospitals",
    items: [
      { name: "Pride Multispeciality Hospital", distance: "4 Min" },
      { name: "PGKM School", distance: "7 Min" },
      { name: "VIT College Kondhwa Campus", distance: "12 Min" },
      { name: "Bharati Hospital", distance: "10 Min" },
    ],
  },
  {
    category: "Shopping & Retail",
    items: [
      { name: "D Mart Kondhwa", distance: "6 Min" },
      { name: "Croma Katraj", distance: "10 Min" },
      { name: "Reliance Digital", distance: "11 Min" },
      { name: "D Mart Satara Road", distance: "12 Min" },
    ],
  },
];

// ─── CREDITS & CONSULTANTS ──────────────────────────────────
export const PROJECT_CREDITS = {
  architect: "Ar. Vastudeep Associate",
  rccConsultant: "Abhijeet Navpute",
  legalAdvisor: "Adv. Kalyan Shinde",
  reraStatus: "MahaRERA Registered Project (PR1260002601322)",
};

// ─── TESTIMONIALS (Toggleable: false by default until real reviews added) ──
export const SHOW_TESTIMONIALS = false;
export const TESTIMONIALS = [
  {
    name: "Suresh Gaikwad",
    review: "Shivparvati Apartments has an unbeatable location in Kondhwa with direct highway access. The rooftop amenities for kids and elderly parents are fantastic.",
    rating: 5,
    config: "2 BHK Resident",
  },
  {
    name: "Sunita More",
    review: "We booked our 1 BHK apartment here. The floor layout is very practical, spacious, and the entire team at Shivparvati Developers has been very supportive.",
    rating: 5,
    config: "1 BHK Resident",
  },
];

// ─── FAQS ───────────────────────────────────────────────────
export const FAQS = [
  {
    question: "What apartment configurations and price ranges are available at Shivparvati Apartments?",
    answer: "Shivparvati Apartments exclusively offers premium 1 BHK and 2 BHK residences with spacious floor plans, cross ventilation, and scenic balconies. Pricing is customized with attractive festive payment plans. Connect directly on WhatsApp (7387099810) for instant price sheets.",
  },
  {
    question: "What is the expected possession timeline for Shivparvati Apartments?",
    answer: "The project is currently under rapid construction with RCC slab and AAC masonry work underway. Possession is slated starting December 2026 onwards in stage-wise compliance with MahaRERA.",
  },
  {
    question: "Is home loan assistance available with major banks?",
    answer: "Yes, we provide 100% complete home loan assistance with top nationalized and private banks including SBI, HDFC Bank, ICICI Bank, Bank of Maharashtra, and Axis Bank. Doorstep documentation and eligibility calculation support are provided.",
  },
  {
    question: "Is Shivparvati Apartments registered under MahaRERA?",
    answer: "Yes, Shivparvati Apartments is fully registered under MahaRERA Registration No. PR1260002601322. You can verify all project sanctions and developer credentials directly on the official MahaRERA portal (maharerait.maharashtra.gov.in).",
  },
  {
    question: "What are the car and two-wheeler parking provisions?",
    answer: "The project features dedicated covered ground-level parking spaces designed for convenient vehicle movement, round-the-clock CCTV surveillance, and secure automated gate access.",
  },
  {
    question: "How do I schedule a personalized site visit?",
    answer: "You can easily schedule a site visit by clicking 'Book a Site Visit' on this website or sending a WhatsApp message to +91 7387099810. Our project executives are on site 7 days a week from 9:30 AM to 7:00 PM.",
  },
];

// ─── NAVIGATION LINKS (Includes new sections) ───────────────
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "RERA", href: "#rera" },
  { label: "1 & 2 BHK", href: "#apartments" },
  { label: "Progress", href: "#progress" },
  { label: "Loan", href: "#loan" },
  { label: "Amenities", href: "#amenities" },
  { label: "Offer", href: "#offer" },
  { label: "Quality", href: "#legal-quality" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// ─── FOOTER LEGAL DISCLAIMER ────────────────────────────────
export const FOOTER_DISCLAIMER = "Images and renders shown are artist's impressions for representational purposes. Project is registered under MahaRERA No. PR1260002601322. Please verify all details at maharerait.maharashtra.gov.in.";

// ─── WHATSAPP INTEGRATION HELPERS ───────────────────────────
export const getWhatsAppUrl = (message = "") => {
  const defaultMsg = `Hello Shivparvati Developers, I am interested in Shivparvati Apartments (Katraj-Kondhwa Rd, Pune). Please share details.`;
  const encoded = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};

export const get1BHKWhatsAppUrl = () => {
  return getWhatsAppUrl(`Hello Shivparvati Developers, I am interested in the 1 BHK apartment at Shivparvati Apartments. Please share the floor plan and price details.`);
};

export const get2BHKWhatsAppUrl = () => {
  return getWhatsAppUrl(`Hello Shivparvati Developers, I am interested in the 2 BHK apartment at Shivparvati Apartments. Please share the floor plan and price details.`);
};

export const getLoanWhatsAppUrl = ({ amount, rate, tenure, emi }) => {
  const formatINR = (val) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  const text = `Hello Shivparvati Developers, I checked my home loan eligibility for Shivparvati Apartments:

- Loan Amount: ${formatINR(amount)}
- Interest Rate: ${rate}% p.a.
- Tenure: ${tenure} Years
- Estimated Monthly EMI: ${formatINR(emi)}

Please guide me with bank tie-ups, current lowest interest rates, and eligibility criteria.`;
  return getWhatsAppUrl(text);
};

export const getOfferWhatsAppUrl = () => {
  return getWhatsAppUrl(`Hello Shivparvati Developers, I would like to know more about the Festive Booking Offer (Win an Activa on booking a 1 or 2 BHK home). Please share terms and booking procedure.`);
};

export const getInquiryWhatsAppUrl = ({ name, phone, config, message }) => {
  const text = `Hello Shivparvati Developers, I am submitting an inquiry for Shivparvati Apartments.

- Full Name: ${name}
- Phone Number: ${phone}
- Interested Configuration: ${config}
${message ? `- Message / Requirements: ${message}` : ""}`;
  return getWhatsAppUrl(text);
};

export const getSiteVisitWhatsAppUrl = ({ name, phone, date, time }) => {
  const text = `Hello Shivparvati Developers, I would like to schedule a site visit for Shivparvati Apartments.

- Full Name: ${name}
- Mobile Number: ${phone}
- Preferred Date: ${date}
- Preferred Time Slot: ${time}`;
  return getWhatsAppUrl(text);
};
