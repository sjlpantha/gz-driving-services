export const COMPANY = {
  name: "GZ Driving Services",
  tagline: "Learn and Drive with Confidence",
  phone: "0414 356 344",
  phoneClean: "0414356344",
  phoneIntl: "+61414356344",
  whatsapp: "https://wa.me/61414356344",
  location: "Canberra, ACT, Australia",
  email: "info@gzdrivingservices.com.au",
  abn: "",
};

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export const STATS = [
  { value: "500+", label: "Lessons delivered" },
  { value: "97%", label: "First-attempt pass rate" },
  { value: "5.0★", label: "Average rating" },
  { value: "5yr", label: "Years experience" },
];

export const SERVICES = [
  {
    id: "learner",
    icon: "🎓",
    title: "Learner Lessons",
    shortDesc: "Build confidence from the ground up with structured, patient instruction tailored to complete beginners.",
    fullDesc: "Our learner lessons are designed for new drivers who are just starting their journey. We cover everything from basic vehicle controls through to navigating busy intersections, roundabouts, and highways — all at your pace.",
    included: [
      "Pre-lesson briefing and goal-setting",
      "Dual-control Mazda 3 (you're always safe)",
      "Structured lesson plan aligned with NSW logbook",
      "Post-lesson debrief and personalised feedback",
      "Tips for practising with your supervising driver",
    ],
    duration: "1 hour per session (multi-hour available)",
    slug: "learner-lessons",
  },
  {
    id: "test-prep",
    icon: "✅",
    title: "Licence Test Prep",
    shortDesc: "Targeted preparation for your RMS driving test, including a practice run on the actual test route.",
    fullDesc: "Nervous about your upcoming driving test? Our test preparation lessons focus exactly on what the RMS examiner looks for — head checks, safe following distance, smooth braking and steering, and confident decision-making at intersections.",
    included: [
      "Mock test on the actual Orange RMS test route",
      "Examiner-criteria breakdown and coaching",
      "Common test failure point correction",
      "Pre-test warm-up lesson on test day",
      "Use of our car for the licence test (on request)",
    ],
    duration: "1–2 hours recommended",
    slug: "licence-test-prep",
  },
  {
    id: "refresher",
    icon: "🔄",
    title: "Refresher Lessons",
    shortDesc: "Regain confidence after a break, accident, or simply brush up on skills you've let slide.",
    fullDesc: "Life gets busy. If you've held your licence for years but haven't driven much — or if an accident knocked your confidence — our refresher lessons will quickly rebuild your skills and get you driving comfortably again.",
    included: [
      "Skill assessment in the first 10 minutes",
      "Targeted drills for your weak areas",
      "Highway and freeway driving (if applicable)",
      "Parking and reverse manoeuvres",
      "Confidence-building exercises",
    ],
    duration: "1–2 hours (assessment first)",
    slug: "refresher-lessons",
  },
  {
    id: "defensive",
    icon: "🛡️",
    title: "Defensive Driving",
    shortDesc: "Go beyond the basics — learn hazard perception, space management, and safe following techniques.",
    fullDesc: "Defensive driving is about anticipating what other drivers will do before they do it. This advanced session helps you develop the mindset and skill set to significantly reduce your risk on the road — ideal for new licence holders and anxious drivers alike.",
    included: [
      "Hazard identification and scanning techniques",
      "Safe following distance and space cushions",
      "Wet weather and night driving awareness",
      "Decision-making under pressure",
      "Managing distractions and fatigue",
    ],
    duration: "2 hours recommended",
    slug: "defensive-driving",
  },
];

export const PRICING_PACKAGES = [
  {
    id: "casual",
    name: "Casual Lesson",
    price: 80,
    per: "per hour",
    originalPrice: null,
    savings: null,
    badge: null,
    featured: false,
    description: "Perfect for trying us out or booking one-off sessions as you need them.",
    features: [
      "Any service type",
      "Pick-up & drop-off included",
      "Dual-control Mazda 3",
      "No commitment required",
    ],
    cta: "Book a lesson",
  },
  {
    id: "pack5",
    name: "5-Lesson Pack",
    price: 340,
    per: "pack",
    originalPrice: 400,
    savings: 60,
    badge: null,
    featured: true,
    description: "Our most popular choice for learners working towards their P-plates.",
    features: [
      "5 × 1-hour lessons",
      "Save $60 vs casual rate",
      "Priority booking",
      "Progress report included",
      "Mix & match services",
    ],
    cta: "Get the 5-pack",
  },
  {
    id: "pack10",
    name: "10-Lesson Pack",
    price: 640,
    per: "pack",
    originalPrice: 800,
    savings: 160,
    badge: "Best value",
    featured: false,
    description: "The complete package for learners who want to go from zero to licence-ready.",
    features: [
      "10 × 1-hour lessons",
      "Save $160 vs casual rate",
      "Priority booking",
      "Full progress tracking",
      "Free test-prep session included",
      "Mix & match services",
    ],
    cta: "Get the 10-pack",
  },
];

export const FAQS = [
  {
    question: "How many lessons do I need?",
    answer: "It varies from person to person. NSW recommends at least 120 hours of supervised driving, but most learners find 10–20 professional lessons significantly accelerate their progress. We'll assess your skill level in the first lesson and give you a realistic estimate.",
  },
  {
    question: "What car do you use?",
    answer: "We use a dual-control Mazda 3 — a modern, reliable hatchback that's easy to drive and familiar to most learners. The dual controls mean there's always an instructor brake and clutch available, so you're always safe.",
  },
  {
    question: "Do you pick me up?",
    answer: "Yes! Pick-up and drop-off is included in every lesson price. We service Orange and the surrounding suburbs — just let us know your address when you book.",
  },
  {
    question: "What if I fail my driving test?",
    answer: "Don't worry — it's more common than you think. We'll debrief on what went wrong and book extra sessions focused on those specific areas. Many students pass confidently on their second attempt after targeted coaching.",
  },
  {
    question: "Can I use your car for the driving test?",
    answer: "Yes, subject to availability. This is a popular option since you'll already be comfortable in the car. There is an additional charge for use of the vehicle during the test itself — ask us for current pricing.",
  },
  {
    question: "How do I book?",
    answer: "The easiest way is to WhatsApp or call us directly on 0414 356 344. You can also fill in the contact form on our booking page and we'll get back to you within a few hours.",
  },
  {
    question: "Do lesson packages expire?",
    answer: "No — once purchased, your lesson pack doesn't expire. Life gets busy, and we don't want you to feel rushed. Just contact us when you're ready to book your next session.",
  },
  {
    question: "What areas do you cover?",
    answer: "We are based in Canberra, ACT and service Belconnen, Gungahlin, Tuggeranong, Woden, Weston Creek, Inner North, Inner South, and surrounding suburbs. Not sure if we cover your area? Just ask — we'll always try to accommodate.",
  },
  {
    question: "What if I need to cancel or reschedule?",
    answer: "We ask for at least 24 hours notice for cancellations or rescheduling. Cancellations with less than 24 hours notice may incur a partial charge. We understand life happens — just communicate with us and we'll always try to work something out.",
  },
  {
    question: "Is there a minimum age requirement?",
    answer: "In NSW you can apply for your learner licence at 16 years old. We accept students from age 16 upwards. If you're booking for a minor, a parent or guardian will need to be present for the first lesson.",
  },
];

export const WHY_GZ = [
  "Patient, calm instruction style — no yelling, no pressure",
  "Dual-control Mazda 3 for maximum safety",
  "Flexible scheduling including evenings and weekends",
  "Pick-up and drop-off included in every lesson",
  "Structured lessons aligned with the ACT logbook requirements",
];

export const SERVICE_AREAS = [
  "Belconnen", "Gungahlin", "Tuggeranong", "Woden", "Weston Creek",
  "Inner North", "Inner South", "Bruce", "Civic", "Fyshwick",
];
