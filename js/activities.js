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
    tagline: "Pinewood derby racers, service projects, and outdoor adventurers.",
    description: "Chelsea's Cub Scout Pack 455 brings boys and girls in Kindergarten through 5th grade together for camping trips, hands-on STEM experiments, community service, and our famous annual Pinewood Derby race!",
    quirkyFact: "Over 50+ hand-carved Pinewood Derby cars hit the track every winter in Chelsea!",
    location: {
      venue: "North Creek Elementary School",
      city: "Chelsea, MI 48118",
      mapUrl: "https://maps.google.com/?q=North+Creek+Elementary+School+Chelsea+MI"
    },
    schedule: {
      timing: "Pack Meetings 1x/month (First Wednesday of the month @ 6:00 PM), Den Meetings vary",
      season: "Year-Round (Active school year + Summer camps)"
    },
    contact: {
      role: "Cubmaster & Committee",
      email: "pack455chelsea@gmail.com",
      phone: ""
    },
    links: [
      { label: "Join Pack 455 (BeAScout.org)", url: "https://beascout.scouting.org/units/402915b9-577d-4cc8-acdf-8e3a56627ad4", primary: true },
      { label: "Pack Calendar & Events", url: "https://www.facebook.com/cubscoutspack455", primary: false },
      { label: "Email Leadership", url: "mailto:pack455chelsea@gmail.com", primary: false }
    ],
    tags: ["scouts", "camping", "derby", "kids", "outdoor", "stem", "pack 455", "elementary"]
  },
  {
    id: "field-hockey",
    title: "Middle School Field Hockey",
    shortName: "Field Hockey",
    category: "sports",
    categoryLabel: "Sports & Athletics",
    icon: "🏑",
    accentColor: "#0284c7",
    badge: "Grades 6-8",
    tagline: "Fast turf, sharp sticks, and proud Chelsea Bulldog spirit.",
    description: "Chelsea Field Hockey offers competitive and developmental field hockey programs for middle school students. Learn stick skills, tactical passing, and team camaraderie on the turf.",
    quirkyFact: "Field hockey balls can travel upwards of 90 mph off a clean drive!",
    location: {
      venue: "Various Locations (Home & Away Venues)",
      city: "Chelsea & Travel (Check sportsYou for each game/practice)",
      mapUrl: "https://sportsyou.com/teams/te-c0c6c546-4cdf-489f-9b3d-40991873b98b"
    },
    schedule: {
      timing: "Times & locations vary — check sportsYou for live daily updates",
      season: "Fall Season (August – October) + Spring Skills Clinics"
    },
    contact: {
      role: "Coach Leslie Fry",
      email: "lsfry6@gmail.com",
      phone: ""
    },
    links: [
      { label: "Live Schedule on sportsYou", url: "https://sportsyou.com/teams/te-c0c6c546-4cdf-489f-9b3d-40991873b98b", primary: true },
      { label: "Chelsea Bulldogs Athletics (chelseabulldogs.org)", url: "https://chelseabulldogs.org/", primary: false },
      { label: "Email Coach Fry (lsfry6@gmail.com)", url: "mailto:lsfry6@gmail.com", primary: false }
    ],
    tags: ["field hockey", "sports", "bulldogs", "turf", "fall", "athletics", "girls sports"]
  },
  {
    id: "chelsea-girls-lacrosse",
    title: "Chelsea Girls Lacrosse",
    shortName: "Girls Lacrosse",
    category: "sports",
    categoryLabel: "Sports & Athletics",
    icon: "🥍",
    accentColor: "#10b981",
    badge: "10U – 14U Girls",
    tagline: "The fastest game on two feet (powered by Bulldog grit).",
    description: "Chelsea Girls Lacrosse program for 10U through 14U players. Learn cradling, stick skills, shooting, and competitive team play for the upcoming spring season!",
    quirkyFact: "Lacrosse is North America's oldest organized sport, and Chelsea girls bring serious speed to the turf!",
    location: {
      venue: "Chelsea Athletic Fields (Home & Away Venues)",
      city: "Chelsea, MI 48118",
      mapUrl: "https://sportsyou.com/teams/te-0351f523-524d-45de-be90-e649f04a039d"
    },
    schedule: {
      timing: "Spring season schedule & practice times will be posted on sportsYou as spring approaches",
      season: "Spring Season (March – June)"
    },
    contact: {
      role: "Coach Amielia Haas",
      email: "ahaas@chelseaschools.org",
      phone: ""
    },
    links: [
      { label: "Live Team Hub on sportsYou", url: "https://sportsyou.com/teams/te-0351f523-524d-45de-be90-e649f04a039d", primary: true },
      { label: "Chelsea Bulldogs Athletics", url: "https://chelseabulldogs.org/", primary: false },
      { label: "Email Coach Haas (ahaas@chelseaschools.org)", url: "mailto:ahaas@chelseaschools.org", primary: false }
    ],
    tags: ["lacrosse", "lax", "girls lacrosse", "10u", "12u", "14u", "spring sports", "athletics", "bulldogs"]
  },
  {
    id: "beach-ms-drama",
    title: "Beach Middle School Drama",
    shortName: "BMS Drama Club",
    category: "arts",
    categoryLabel: "Arts & Theater",
    icon: "🎭",
    accentColor: "#ec4899",
    badge: "Grades 6–8 (Middle School)",
    tagline: "Center stage spotlights, backstage magic, and epic standing ovations.",
    description: "Beach Middle School Drama brings 6th–8th grade students together for an annual spring production. Whether you want to act, sing, run stage lighting, handle sound, or build sets, there's a place for everyone!",
    quirkyFact: "From auditions to opening night, BMS students take charge of both the stage and backstage tech crew!",
    location: {
      venue: "Beach Middle School Auditorium",
      city: "Chelsea, MI 48118",
      mapUrl: "https://maps.google.com/?q=Beach+Middle+School+Chelsea+MI"
    },
    schedule: {
      timing: "Annual production typically runs in March — rehearsal and audition schedules announced as showtime approaches",
      season: "Annual Spring Show (Typically March)"
    },
    contact: {
      role: "Director Jessica DeLand",
      email: "jdeland@chelseaschools.org",
      phone: ""
    },
    links: [
      { label: "Email Director DeLand (jdeland@chelseaschools.org)", url: "mailto:jdeland@chelseaschools.org", primary: true },
      { label: "Beach Middle School Portal", url: "https://www.chelsea.k12.mi.us/beach-middle-school", primary: false }
    ],
    tags: ["drama", "theater", "acting", "musical", "bms", "beach middle school", "stage crew", "arts", "middle school", "jessica deland"]
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
