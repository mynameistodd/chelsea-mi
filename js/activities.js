/**
 * Chelsea, MI Activities & Community Directory Data
 * 
 * Global Settings & Form Links
 */
const SITE_CONFIG = {
  // Replace this with your actual Google Form URL (e.g. https://forms.gle/XXXXXX)
  suggestActivityFormUrl: "https://forms.google.com/",
  contactEmail: "info@chelseami.us"
};

/**
 * Activities Dataset
 * To add a new activity, add an object to the ACTIVITIES array below.
 */
const ACTIVITIES = [
  {
    id: "cub-scout-pack-455",
    title: "Cub Scout Pack 455",
    shortName: "Pack 455",
    category: "scouting",
    categoryLabel: "Scouting & Youth",
    icon: "🏕️",
    accentColor: "#f59e0b",
    badge: "Grades K–5",
    tagline: "Pinewood derby racers, rocket builders, and outdoor adventurers.",
    description: "Chelsea's Cub Scout Pack 455 brings boys and girls in Kindergarten through 5th grade together for camping trips, hands-on STEM experiments, community service, and our famous annual Pinewood Derby race!",
    quirkyFact: "Over 50+ hand-carved Pinewood Derby cars hit the track every winter in Chelsea!",
    location: {
      venue: "Beach Middle School / North Creek & Chelsea Fairgrounds",
      city: "Chelsea, MI 48118",
      mapUrl: "https://maps.google.com/?q=Beach+Middle+School+Chelsea+MI"
    },
    schedule: {
      timing: "Pack Meetings 1x/month (Mondays @ 6:30 PM), Den Meetings bi-weekly",
      season: "Year-Round (Active school year + Summer camps)"
    },
    contact: {
      role: "Cubmaster & Committee",
      email: "chelseapack455@gmail.com",
      phone: ""
    },
    links: [
      { label: "Join Pack 455 (BeAScout.org)", url: "https://beascout.scouting.org/", primary: true },
      { label: "Pack Calendar & Events", url: "#", primary: false },
      { label: "Email Leadership", url: "mailto:chelseapack455@gmail.com", primary: false }
    ],
    tags: ["scouts", "camping", "derby", "kids", "outdoor", "stem", "pack 455", "elementary"]
  },
  {
    id: "field-hockey",
    title: "Chelsea Field Hockey",
    shortName: "Field Hockey",
    category: "sports",
    categoryLabel: "Sports & Athletics",
    icon: "🏑",
    accentColor: "#0284c7",
    badge: "Youth to Varsity",
    tagline: "Fast turf, sharp sticks, and proud Chelsea Bulldog spirit.",
    description: "Chelsea Field Hockey offers competitive and developmental field hockey programs for youth through high school. Learn stick skills, tactical passing, and team camaraderie on the turf.",
    quirkyFact: "Field hockey balls can travel upwards of 90 mph off a clean drive!",
    location: {
      venue: "Chelsea High School Stadium / Athletic Fields",
      city: "Chelsea, MI 48118",
      mapUrl: "https://maps.google.com/?q=Chelsea+High+School+Chelsea+MI"
    },
    schedule: {
      timing: "Practices 3-4x/week after school; Game days Tuesdays & Thursdays",
      season: "Fall Season (August – October) + Spring Skills Clinics"
    },
    contact: {
      role: "Head Coach & Booster Club",
      email: "chelseafieldhockey@gmail.com",
      phone: ""
    },
    links: [
      { label: "Team Schedule & Roster", url: "https://chelseaathletics.net", primary: true },
      { label: "Registration & Gear Guide", url: "#", primary: false },
      { label: "Contact Coaching Staff", url: "mailto:chelseafieldhockey@gmail.com", primary: false }
    ],
    tags: ["field hockey", "sports", "bulldogs", "turf", "fall", "athletics", "girls sports"]
  },
  {
    id: "lacrosse-lacroix",
    title: "Chelsea Lacrosse (\"Lacroix\")",
    shortName: "Bulldogs Lacrosse",
    category: "sports",
    categoryLabel: "Sports & Athletics",
    icon: "🥍",
    accentColor: "#10b981",
    badge: "Boys & Girls Youth / HS",
    tagline: "The fastest game on two feet (sparkling with Bulldog grit).",
    description: "From cradling and fast breaks to stingy defense, Chelsea Bulldogs Lacrosse welcomes youth and high school players looking to master North America's oldest team sport.",
    quirkyFact: "Pronounce it Lacrosse or 'Lacroix' — either way, it's 100% pure Bulldog speed and energy.",
    location: {
      venue: "Pierce Lake Fields & CHS Stadium",
      city: "Chelsea, MI 48118",
      mapUrl: "https://maps.google.com/?q=Pierce+Lake+Elementary+Chelsea+MI"
    },
    schedule: {
      timing: "Weeknights 5:30 - 7:30 PM, Weekend Tournaments & Home Games",
      season: "Spring Season (March – June) + Winter Indoor Conditioning"
    },
    contact: {
      role: "Chelsea Lacrosse Club Board",
      email: "chelsealacrosseclub@gmail.com",
      phone: ""
    },
    links: [
      { label: "Spring Registration", url: "#", primary: true },
      { label: "Game Schedules & Tournaments", url: "#", primary: false },
      { label: "Equipment Checklist", url: "#", primary: false }
    ],
    tags: ["lacrosse", "lacroix", "lax", "spring sports", "athletics", "bulldogs", "youth sports"]
  },
  {
    id: "beach-ms-drama",
    title: "Beach Middle School Drama",
    shortName: "BMS Drama Club",
    category: "arts",
    categoryLabel: "Arts & Theater",
    icon: "🎭",
    accentColor: "#ec4899",
    badge: "Grades 6–8",
    tagline: "Center stage spotlights, backstage magic, and epic standing ovations.",
    description: "Beach Middle School Drama puts on spectacular fall plays and energetic spring musicals. Whether you want to sing, act, run stage lighting, manage sound, or build sets, there's a spotlight for everyone.",
    quirkyFact: "Over 80+ BMS students participate each year between cast, tech crew, pit band, and set painters!",
    location: {
      venue: "Beach Middle School Auditorium",
      city: "Chelsea, MI 48118",
      mapUrl: "https://maps.google.com/?q=Beach+Middle+School+Chelsea+MI"
    },
    schedule: {
      timing: "Rehearsals Monday–Thursday 3:15 – 5:15 PM leading up to show weekend",
      season: "Fall Play (Nov) & Spring Musical (March/April)"
    },
    contact: {
      role: "Drama Directors & BMS Boosters",
      email: "bmsdrama@chelsea.k12.mi.us",
      phone: ""
    },
    links: [
      { label: "Ticket Box Office & Showtimes", url: "#", primary: true },
      { label: "Audition & Crew Signups", url: "#", primary: false },
      { label: "Rehearsal Master Schedule", url: "#", primary: false }
    ],
    tags: ["drama", "theater", "acting", "musical", "bms", "beach middle school", "stage crew", "arts"]
  },
  {
    id: "dirt-dogz-baseball",
    title: "Dirt Dogz Baseball",
    shortName: "Dirt Dogz",
    category: "sports",
    categoryLabel: "Sports & Athletics",
    icon: "⚾",
    accentColor: "#ef4444",
    badge: "Youth & Travel Baseball",
    tagline: "Dusty cleats, solid fundamentals, and clutch tournament extra-base hits.",
    description: "Dirt Dogz Baseball is Chelsea's hard-working youth travel baseball team. Dedicated to player development, sportsmanship, competitive tournament play, and having a blast on the diamond.",
    quirkyFact: "If your uniform isn't covered in red clay and diamond dust by the 4th inning, were you even playing?",
    location: {
      venue: "Chelsea Community Fields & Regional Tournament Parks",
      city: "Chelsea & Southeast Michigan",
      mapUrl: "https://maps.google.com/?q=Chelsea+MI+Community+Fields"
    },
    schedule: {
      timing: "Practices 2x/week, Weekend Doubleheaders & Regional Tournaments",
      season: "Spring & Summer Season (April – July) + Winter Hitting Workouts"
    },
    contact: {
      role: "Team Manager & Coaching Staff",
      email: "dirtdogzbaseball@gmail.com",
      phone: ""
    },
    links: [
      { label: "Roster & Schedule", url: "#", primary: true },
      { label: "Tryouts & Camp Info", url: "#", primary: false },
      { label: "Contact Manager", url: "mailto:dirtdogzbaseball@gmail.com", primary: false }
    ],
    tags: ["baseball", "dirt dogz", "travel ball", "youth baseball", "sports", "summer", "tournaments"]
  }
];

// Categories definition
const CATEGORIES = [
  { id: "all", label: "All Activities", icon: "✨" },
  { id: "sports", label: "Sports & Athletics", icon: "⚡" },
  { id: "scouting", label: "Scouting & Outdoors", icon: "🏕️" },
  { id: "arts", label: "Arts & Theater", icon: "🎭" }
];
