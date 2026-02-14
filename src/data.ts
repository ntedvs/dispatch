export interface Article {
  id: string
  title: string
  subtitle?: string
  author: string
  date: string
  category: string
  imageUrl?: string
  readTime: string
  body: string[]
}

export interface PodcastShow {
  id: string
  name: string
  description: string
  color: string
  episodes: PodcastEpisode[]
}

export interface PodcastEpisode {
  id: string
  title: string
  date: string
  duration: string
  showName?: string
}

export interface Newsletter {
  id: string
  name: string
  frequency: string
  description: string
  tags: string[]
}

export interface Author {
  id: string
  name: string
  title: string
  imageUrl: string
  category: string
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Echoes of the America Between the Wars",
    subtitle:
      "What the interwar period can teach us about today\u2019s political moment.",
    author: "Mike Nelson",
    date: "February 13, 2026",
    category: "The Next 250",
    imageUrl: "https://picsum.photos/seed/dispatch1/800/500",
    readTime: "12 min read",
    body: [
      "The parallels between America\u2019s current political moment and the interwar period of the 1920s and 1930s are more striking than most observers care to admit. In both eras, a nation weary of foreign entanglements turned sharply inward, embracing a populist politics that promised to restore an imagined golden age.",
      "The economic anxieties are remarkably similar. Then, as now, rapid technological change disrupted traditional industries and left whole communities behind. The rise of radio transformed political communication just as social media has in our time, enabling demagogues to bypass institutional gatekeepers and speak directly to an agitated public.",
      "But the analogy has its limits, and it is in those limits that we might find reasons for cautious optimism. The institutional infrastructure of American democracy, while strained, remains far more robust than it was a century ago.",
      "The question is not whether our institutions will survive\u2014they almost certainly will\u2014but whether they will emerge from this period stronger or weaker, more responsive to legitimate grievances or more calcified in their resistance to change.",
    ],
  },
  {
    id: "2",
    title:
      "A $266,000 Steer and the Culture of Conflicts in Trump\u2019s Washington",
    author: "Michael Warren",
    date: "February 13, 2026",
    category: "Politics",
    imageUrl: "https://picsum.photos/seed/dispatch2/800/500",
    readTime: "9 min read",
    body: [
      "The purchase price raised eyebrows even by the standards of Washington\u2019s influence economy. A grand champion steer at the Fort Worth Stock Show sold for $266,000 to a group of buyers with extensive business before the federal government.",
      "In any other administration, the transaction might have gone unnoticed. But in Trump\u2019s Washington, where the lines between public service and private enrichment have been systematically erased, it became a symbol of the broader culture of conflicts that has come to define the era.",
      "The buyers included lobbyists for the agriculture industry, political donors with pending regulatory matters, and at least one former administration official now working in the private sector.",
    ],
  },
  {
    id: "3",
    title: "Will Trump\u2019s Immigration Raids Cost Republicans the Senate?",
    author: "John McCormack",
    date: "February 13, 2026",
    category: "Politics",
    imageUrl: "https://picsum.photos/seed/dispatch3/800/500",
    readTime: "8 min read",
    body: [
      "Republican strategists in at least three swing states are quietly raising alarms about the political fallout from the administration\u2019s aggressive immigration enforcement operations.",
      "Internal polling in key Senate battleground states shows that while the raids remain broadly popular among the Republican base, they are generating a significant backlash among suburban voters\u2014the same constituency that powered Democratic gains in the 2022 and 2024 midterms.",
      "The worry is not that Republican voters will switch parties, but that the intensity of the enforcement actions\u2014and the inevitable viral videos of families being separated\u2014could suppress turnout among moderate Republicans and independents.",
    ],
  },
  {
    id: "4",
    title: "Minneapolis and the Sanctuary City Blame Game",
    author: "Grayson Logue",
    date: "February 13, 2026",
    category: "Politics",
    readTime: "7 min read",
    body: [
      "The standoff between federal immigration authorities and the city of Minneapolis has entered its fourth week, with no resolution in sight and both sides escalating their rhetoric.",
      "Mayor Jacob Frey, who initially sought to negotiate a compromise, has now fully embraced the sanctuary city label that his opponents have tried to pin on him. Federal officials, meanwhile, have expanded the scope of their operations beyond their original mandate.",
      "The result is a political stalemate that serves neither side\u2019s interests\u2014but that both sides seem content to perpetuate for the cameras.",
    ],
  },
  {
    id: "5",
    title: "Lefty Kooks 1, Trump Gun Thugs 0",
    subtitle: "The perennial protest left wins the Battle of Minneapolis.",
    author: "Kevin D. Williamson",
    date: "February 13, 2026",
    category: "Politics",
    imageUrl: "https://picsum.photos/seed/dispatch5/800/500",
    readTime: "11 min read",
    body: [
      'The Trump administration has announced that it is abandoning its "surge"\u2014you\'ll remember that term from the Iraq War\u2014in Minneapolis. Other than two dead Americans, millions and millions of dollars in economic losses, and the further erosion of trust in armed federal agencies, what exactly has been accomplished?',
      '"As a result of our efforts here, Minnesota is now less of a sanctuary state for criminals," said border czar Tom Homan, who remains on the job because he is dumb enough to get recorded taking a $50,000 bribe but is still somehow not quite as dumb as Department of Homeland Security Secretary Kristi Noem.',
      "Like most of what one hears from senior figures in the Trump administration, that statement is a lie and is, in fact, something closer to the opposite of the truth.",
    ],
  },
  {
    id: "6",
    title: "Trump\u2019s Second Acquittal: A Day That Should Live in Infamy",
    author: "Gary Schmitt",
    date: "February 13, 2026",
    category: "Law",
    readTime: "6 min read",
    body: [
      "The Senate\u2019s second acquittal of Donald Trump will be remembered as one of the most consequential failures of institutional responsibility in American history.",
      "Not because the outcome was unexpected\u2014it was, by that point, a foregone conclusion\u2014but because of what it revealed about the Republican Party\u2019s relationship with constitutional governance.",
      "The arguments marshaled in Trump\u2019s defense were notable less for their legal reasoning than for their brazen abandonment of principles that Republicans had, until very recently, claimed to hold dear.",
    ],
  },
  {
    id: "7",
    title: "Bangladesh\u2019s Free Election",
    author: "Peter Gattuso & Ross Anderson",
    date: "February 13, 2026",
    category: "The Morning Dispatch",
    readTime: "5 min read",
    body: [
      "Bangladesh held its first genuinely free election in over a decade this week, and the results are already reshaping the political landscape of South Asia.",
      "The election, overseen by an interim government installed after the ouster of former Prime Minister Sheikh Hasina, saw voter turnout exceed 70 percent\u2014a remarkable figure given the country\u2019s recent political turmoil.",
      "International observers from the European Union and the United Nations declared the election broadly free and fair, a sharp contrast to the deeply flawed contests of recent years.",
    ],
  },
]

export const podcastShows: PodcastShow[] = [
  {
    id: "1",
    name: "Advisory Opinions",
    description:
      "A weekly deep dive into law, the courts, and the legal dimensions of politics.",
    color: "#1a3a5c",
    episodes: [
      {
        id: "e1",
        title: "The Minneapolis Standoff and Federal Power",
        date: "Feb 12, 2026",
        duration: "58 min",
        showName: "Advisory Opinions",
      },
      {
        id: "e2",
        title: "SCOTUS Preview: Immigration Cases",
        date: "Feb 10, 2026",
        duration: "52 min",
        showName: "Advisory Opinions",
      },
      {
        id: "e3",
        title: "Executive Authority After the Midterms",
        date: "Feb 7, 2026",
        duration: "61 min",
        showName: "Advisory Opinions",
      },
    ],
  },
  {
    id: "2",
    name: "The Dispatch Podcast",
    description: "Daily news analysis from The Dispatch newsroom.",
    color: "#D1221F",
    episodes: [
      {
        id: "e4",
        title: "Immigration Raids: Political Fallout",
        date: "Feb 13, 2026",
        duration: "34 min",
        showName: "The Dispatch Podcast",
      },
      {
        id: "e5",
        title: "The GOP\u2019s Senate Problem",
        date: "Feb 12, 2026",
        duration: "38 min",
        showName: "The Dispatch Podcast",
      },
      {
        id: "e6",
        title: "Bangladesh Votes",
        date: "Feb 11, 2026",
        duration: "31 min",
        showName: "The Dispatch Podcast",
      },
    ],
  },
  {
    id: "3",
    name: "The Remnant",
    description:
      "Jonah Goldberg\u2019s wide-ranging conversations on politics, culture, and ideas.",
    color: "#2d4a2d",
    episodes: [
      {
        id: "e7",
        title: "The Populist Paradox",
        date: "Feb 11, 2026",
        duration: "72 min",
        showName: "The Remnant",
      },
      {
        id: "e8",
        title: "What Happened to Conservatism?",
        date: "Feb 7, 2026",
        duration: "65 min",
        showName: "The Remnant",
      },
    ],
  },
  {
    id: "4",
    name: "Good on Paper",
    description:
      "Policy wonkery for people who care about getting the details right.",
    color: "#5c4a1a",
    episodes: [
      {
        id: "e10",
        title: "Sanctuary Cities by the Numbers",
        date: "Feb 10, 2026",
        duration: "45 min",
        showName: "Good on Paper",
      },
      {
        id: "e11",
        title: "Trade Policy in the Second Term",
        date: "Feb 6, 2026",
        duration: "42 min",
        showName: "Good on Paper",
      },
    ],
  },
]

export const newsletters: Newsletter[] = [
  {
    id: "1",
    name: "The Morning Dispatch",
    frequency: "Weekdays",
    description:
      "Start your day with the news that matters. A daily briefing on politics, policy, and world events.",
    tags: ["Essential", "Daily"],
  },
  {
    id: "2",
    name: "The G-File",
    frequency: "Weekly",
    description:
      "Jonah Goldberg\u2019s original newsletter on politics, culture, and whatever else is on his mind.",
    tags: ["Introspective", "Witty"],
  },
  {
    id: "3",
    name: "Boiling Frogs",
    frequency: "Twice weekly",
    description:
      "Nick Catoggio\u2019s sharp analysis of the slow-building crises in American politics.",
    tags: ["Analytical", "Incisive"],
  },
  {
    id: "4",
    name: "The Sweep",
    frequency: "Weekly",
    description:
      "Sarah Isgur\u2019s guide to the political landscape, from campaigns to courts.",
    tags: ["Political", "Accessible"],
  },
  {
    id: "5",
    name: "Wanderland",
    frequency: "Weekly",
    description:
      "Kevin D. Williamson\u2019s essays on culture, economics, and the American experiment.",
    tags: ["Literary", "Provocative"],
  },
  {
    id: "6",
    name: "Capitolism",
    frequency: "Weekly",
    description:
      "Scott Lincicome\u2019s deep dives into trade, economics, and industrial policy.",
    tags: ["Policy", "Data-driven"],
  },
]

export const authors: Author[] = [
  // Dispatch Editorial Staff
  {
    id: "1",
    name: "Steve Hayes",
    title: "CEO",
    imageUrl: "https://i.pravatar.cc/300?img=12",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "2",
    name: "Jonah Goldberg",
    title: "Editor-in-Chief",
    imageUrl: "https://i.pravatar.cc/300?img=13",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "3",
    name: "Declan Garvey",
    title: "Executive Editor",
    imageUrl: "https://i.pravatar.cc/300?img=68",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "4",
    name: "Michael Reneau",
    title: "Managing Editor",
    imageUrl: "https://i.pravatar.cc/300?img=33",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "5",
    name: "Rachael Larimore",
    title: "Managing Editor",
    imageUrl: "https://i.pravatar.cc/300?img=5",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "6",
    name: "Wendy Lane Cook",
    title: "Deputy Managing Editor",
    imageUrl: "https://i.pravatar.cc/300?img=47",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "7",
    name: "Kevin D. Williamson",
    title: "National Correspondent",
    imageUrl: "https://i.pravatar.cc/300?img=56",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "8",
    name: "Sarah Isgur",
    title: "Senior Editor",
    imageUrl: "https://i.pravatar.cc/300?img=16",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "9",
    name: "Nick Catoggio",
    title: "Staff Writer",
    imageUrl: "https://i.pravatar.cc/300?img=15",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "10",
    name: "Michael Warren",
    title: "Senior Editor",
    imageUrl: "https://i.pravatar.cc/300?img=60",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "11",
    name: "John McCormack",
    title: "Senior Editor",
    imageUrl: "https://i.pravatar.cc/300?img=52",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "12",
    name: "David M. Drucker",
    title: "Senior Writer",
    imageUrl: "https://i.pravatar.cc/300?img=51",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "13",
    name: "Charlotte Lawson",
    title: "Associate Editor",
    imageUrl: "https://i.pravatar.cc/300?img=9",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "14",
    name: "Valerie Pavilonis",
    title: "Ideas Editor",
    imageUrl: "https://i.pravatar.cc/300?img=20",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "15",
    name: "Ross Anderson",
    title: "Editor, The Morning Dispatch",
    imageUrl: "https://i.pravatar.cc/300?img=59",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "16",
    name: "Grayson Logue",
    title: "Staff Writer",
    imageUrl: "https://i.pravatar.cc/300?img=57",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "17",
    name: "Alex Demas",
    title: "Reporter",
    imageUrl: "https://i.pravatar.cc/300?img=61",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "18",
    name: "James P. Sutton",
    title: "The Morning Dispatch Reporter",
    imageUrl: "https://i.pravatar.cc/300?img=62",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "19",
    name: "Charles Hilu",
    title: "Reporter",
    imageUrl: "https://i.pravatar.cc/300?img=63",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "20",
    name: "Peter Gattuso",
    title: "The Morning Dispatch Reporter",
    imageUrl: "https://i.pravatar.cc/300?img=64",
    category: "Dispatch Editorial Staff",
  },
  {
    id: "21",
    name: "Jonathan Gibson",
    title: "Reporter",
    imageUrl: "https://i.pravatar.cc/300?img=65",
    category: "Dispatch Editorial Staff",
  },
  // Multimedia Team
  {
    id: "22",
    name: "Marguerite Howell",
    title: "VP of Multimedia",
    imageUrl: "https://i.pravatar.cc/300?img=26",
    category: "Multimedia Team",
  },
  {
    id: "23",
    name: "Victoria Holmes",
    title: "Associate Audio/Video Editor",
    imageUrl: "https://i.pravatar.cc/300?img=27",
    category: "Multimedia Team",
  },
  {
    id: "24",
    name: "Noah Hickey",
    title: "Visuals Editor",
    imageUrl: "https://i.pravatar.cc/300?img=69",
    category: "Multimedia Team",
  },
  {
    id: "25",
    name: "Justin Colman",
    title: "Social Media Manager",
    imageUrl: "https://i.pravatar.cc/300?img=70",
    category: "Multimedia Team",
  },
  {
    id: "26",
    name: "Peter Bonaventure",
    title: "Audio Engineer",
    imageUrl: "https://i.pravatar.cc/300?img=71",
    category: "Multimedia Team",
  },
  // SCOTUSblog Editorial Staff
  {
    id: "27",
    name: "Amy Howe",
    title: "Reporter",
    imageUrl: "https://i.pravatar.cc/300?img=28",
    category: "SCOTUSblog Editorial Staff",
  },
  {
    id: "28",
    name: "Zachary Shemtob",
    title: "Executive Editor",
    imageUrl: "https://i.pravatar.cc/300?img=66",
    category: "SCOTUSblog Editorial Staff",
  },
  {
    id: "29",
    name: "Kelsey Dallas",
    title: "Managing Editor",
    imageUrl: "https://i.pravatar.cc/300?img=29",
    category: "SCOTUSblog Editorial Staff",
  },
  {
    id: "30",
    name: "Nora Collins",
    title: "Editorial Assistant",
    imageUrl: "https://i.pravatar.cc/300?img=30",
    category: "SCOTUSblog Editorial Staff",
  },
  // Business Team
  {
    id: "31",
    name: "Michael Rothman",
    title: "President",
    imageUrl: "https://i.pravatar.cc/300?img=31",
    category: "Business Team",
  },
  {
    id: "32",
    name: "Campbell Rawlins",
    title: "Chief of Staff",
    imageUrl: "https://i.pravatar.cc/300?img=32",
    category: "Business Team",
  },
  {
    id: "33",
    name: "Brittany Prime",
    title: "Director, Commercial Partnerships",
    imageUrl: "https://i.pravatar.cc/300?img=48",
    category: "Business Team",
  },
  {
    id: "34",
    name: "James Scimecca",
    title: "Audience Engagement Editor",
    imageUrl: "https://i.pravatar.cc/300?img=67",
    category: "Business Team",
  },
  {
    id: "35",
    name: "Olivia Geno",
    title: "Manager, People & Operations",
    imageUrl: "https://i.pravatar.cc/300?img=49",
    category: "Business Team",
  },
  {
    id: "36",
    name: "Lily Thompson",
    title: "Partnerships Manager",
    imageUrl: "https://i.pravatar.cc/300?img=44",
    category: "Business Team",
  },
  {
    id: "37",
    name: "Hannah Cudal",
    title: "Community Manager",
    imageUrl: "https://i.pravatar.cc/300?img=45",
    category: "Business Team",
  },
]
