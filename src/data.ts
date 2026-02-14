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
  bio?: string
  slug: string
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
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/Steve-Hayes.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "steve-hayes",
    bio: "Steve Hayes serves as CEO and editor of The Dispatch, which he co-founded in 2019. He spent 18 years at The Weekly Standard covering Washington politics and national security, and is an accomplished author with two New York Times bestsellers. Hayes currently contributes as a political analyst at NBC News.",
  },
  {
    id: "2",
    name: "Jonah Goldberg",
    title: "Editor-in-Chief",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/Jonah-Goldberg.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "jonah-goldberg",
    bio: "Jonah Goldberg serves as editor-in-chief and co-founder of The Dispatch, based in Washington, D.C. Prior to founding the publication, he spent two decades at National Review as a senior editor. He is a bestselling author, longtime columnist for the Los Angeles Times, commentator for CNN, and senior fellow at the American Enterprise Institute.",
  },
  {
    id: "3",
    name: "Declan Garvey",
    title: "Executive Editor",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/Declan-Garvey.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "declan-garvey",
    bio: "Declan Garvey serves as Executive Editor of The Dispatch, based in Washington, D.C. Prior to joining in 2019, he gained experience in public affairs at Hamilton Place Strategies and market research at Echelon Insights. Outside work, he enjoys Cubs baseball, podcasts at accelerated speeds, and cooking with his wife.",
  },
  {
    id: "4",
    name: "Michael Reneau",
    title: "Managing Editor",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/Michael-Reneau.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "michael-reneau",
    bio: "Michael Reneau serves as Managing Editor at The Dispatch, based in Greeneville, Tennessee. Prior to joining in 2022, he held the position of editor at WORLD Magazine and spent several years leading a daily newspaper in East Tennessee. He balances his editorial work with family life alongside his wife and four children.",
  },
  {
    id: "5",
    name: "Rachael Larimore",
    title: "Managing Editor",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/Rachael-Larimore.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "rachael-larimore",
    bio: "Rachael Larimore serves as Managing Editor at The Dispatch based in the Cincinnati area. She served in similar roles at Slate, The Weekly Standard, and The Bulwark before joining The Dispatch in 2019. She is married with three sons.",
  },
  {
    id: "6",
    name: "Wendy Lane Cook",
    title: "Deputy Managing Editor",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/Wendy-Lane-Cook.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "wendylcook",
    bio: "Wendy Lane Cook serves as Deputy Managing Editor at The Dispatch, based in Washington, D.C. She joined in 2024 after working as managing editor of the San Antonio Report, and has experience as an editor at The Washington Post and as a writer and editor at the Associated Press. Outside work, she enjoys caring for her cats and visiting bookstores.",
  },
  {
    id: "7",
    name: "Kevin D. Williamson",
    title: "National Correspondent",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/11/cropped-Dispatch-Portraits-Nov-1.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "kevin-d-williamson",
    bio: "Kevin D. Williamson serves as National Correspondent at The Dispatch, based in Virginia. He brings extensive journalism experience from 15 years at National Review, work as theater critic at the New Criterion, and a lengthy career in local newspapers. He holds a writer-in-residence position at the Competitive Enterprise Institute and produces the Wanderland newsletter.",
  },
  {
    id: "8",
    name: "Sarah Isgur",
    title: "Senior Editor",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/Sarah-Isgur.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "sarah-isgur",
    bio: "Sarah Isgur serves as Senior Editor at The Dispatch based in northern Virginia. She brings extensive government experience across federal branches and three presidential campaigns, along with her role as an ABC News contributor. She authored 'Last Branch Standing,' a comprehensive examination of Supreme Court operations.",
  },
  {
    id: "9",
    name: "Nick Catoggio",
    title: "Staff Writer",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/Nick-Catoggio.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "nick-catoggio",
    bio: "Nick Catoggio is a staff writer at The Dispatch based in Texas. He joined in 2022 after spending 16 years at Hot Air. His primary focus involves writing daily political newsletters, particularly his signature publication 'Boiling Frogs,' which offers sharp commentary on populism, polarization, and contemporary American conservatism.",
  },
  {
    id: "10",
    name: "Michael Warren",
    title: "Senior Editor",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/Michael-Warren.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "michael-warren",
    bio: "Michael Warren serves as Senior Editor at The Dispatch, based in Washington, D.C. He joined in 2023 after working as an on-air reporter at CNN and a senior writer at the Weekly Standard. Beyond his editorial duties, Warren contributes to podcasting and reporting while balancing family life with his wife and three sons.",
  },
  {
    id: "11",
    name: "John McCormack",
    title: "Senior Editor",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/John-McCormack.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "john-mccormack",
    bio: "John McCormack serves as Senior Editor at The Dispatch, based in Washington, D.C. He previously worked as Washington correspondent for National Review and senior writer at The Weekly Standard. He also holds a position as visiting fellow at the Ethics and Public Policy Center, focusing his reporting on politics and policy.",
  },
  {
    id: "12",
    name: "David M. Drucker",
    title: "Senior Writer",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/David-Drucker.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "david-drucker",
    bio: "David M. Drucker serves as Senior Writer at The Dispatch, based in Washington, D.C. He joined in 2023 after working as a senior correspondent for the Washington Examiner, where he covered American politics. Outside work, he balances time with his two sons and enjoys music selected by his wife.",
  },
  {
    id: "13",
    name: "Charlotte Lawson",
    title: "Associate Editor",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/10/cropped-Charlotte-Lawson-Dispatch-revised-1.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "charlotte-lawson",
    bio: "Charlotte Lawson is an Associate Editor at The Dispatch currently based in Florida. She has extensive international reporting experience from Turkey and Israel. Prior to joining in 2020, she earned a degree in history and global security from the University of Virginia, and pursues oil painting as a personal creative interest.",
  },
  {
    id: "14",
    name: "Valerie Pavilonis",
    title: "Ideas Editor",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/cropped-cropped-Dispatch-Val-Revised-2025-1.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "valerie-pavilonis",
    bio: "Valerie Pavilonis serves as Ideas Editor at The Dispatch, based in New York City. Before joining in 2025, she worked at The New York Times and NewsGuard Technologies, and currently holds a Novak Fellowship through The Fund for American Studies. She enjoys people-watching in cafes and planning themed parties.",
  },
  {
    id: "15",
    name: "Ross Anderson",
    title: "Editor, The Morning Dispatch",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/07/cropped-cropped-Dispatch-Portrait-July-1.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "ross-anderson",
    bio: "Ross Anderson serves as Editor of The Morning Dispatch, based in London. He joined in 2025 after working as an editor at The Spectator, serving as a columnist for The New York Sun, and completing a fellowship at Tablet. When not editing, he pursues technology exploration, weightlifting, and spending time with his cat, Teddy.",
  },
  {
    id: "16",
    name: "Grayson Logue",
    title: "Staff Writer",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/Grayson-Logue.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "grayson-logue",
    bio: "Grayson Logue serves as a staff writer for The Dispatch based in Philadelphia. Prior to joining in 2023, he worked in political risk consulting advising major corporations, and was an assistant editor at Providence Magazine. He is currently pursuing a Master's degree in history at the University of Edinburgh.",
  },
  {
    id: "17",
    name: "Alex Demas",
    title: "Reporter",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/Alex-Demas.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "alex-demas",
    bio: "Alex Demas serves as a reporter at The Dispatch based in Washington, D.C. He joined in 2023 after working as a financial journalist in England, where he earned his MA in Political Economy from King's College London. He focuses on combating misinformation online while covering economics and politics.",
  },
  {
    id: "18",
    name: "James P. Sutton",
    title: "The Morning Dispatch Reporter",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/cropped-New-Dispatch-Hire-1.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "james-p-sutton",
    bio: "James P. Sutton serves as a Morning Dispatch Reporter based in Washington D.C. He holds a Master's degree in history from the University of Oxford and has experience teaching high school history in suburban Philadelphia. He has completed internships at National Review and the Foreign Policy Research Institute.",
  },
  {
    id: "19",
    name: "Charles Hilu",
    title: "Reporter",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/Charles-Hilu.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "charles-hilu",
    bio: "Charles Hilu serves as a reporter for The Dispatch based in Washington, D.C., having joined in 2024. Prior to this role, he gained experience as a Collegiate Network Fellow at the Washington Free Beacon and completed internships at National Review and the Washington Examiner. When not chasing down lawmakers on Capitol Hill, he listens to show tunes and follows University of Michigan and Detroit sports.",
  },
  {
    id: "20",
    name: "Peter Gattuso",
    title: "The Morning Dispatch Reporter",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/cropped-Peter-Gattuso.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "peter295841",
    bio: "Peter Gattuso serves as a Morning Dispatch reporter based in Washington, D.C. Prior to joining in 2024, he gained experience through internships at The Dispatch, National Review, the Cato Institute, and the Competitive Enterprise Institute. When not fact-checking, he pursues interests in baseball, vinyl records, and maritime trade policy.",
  },
  {
    id: "21",
    name: "Jonathan Gibson",
    title: "Reporter",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/11/cropped-Dispatch-Portraits-Nov-2.png?w=600",
    category: "Dispatch Editorial Staff",
    slug: "jonathan-gibson",
    bio: "Jonathan Gibson is a reporter at The Dispatch based in Washington, D.C., specializing in artificial intelligence coverage. He holds a bachelor's degree in politics and international relations from the London School of Economics and Political Science. Beyond journalism, he pursues interests in table tennis, climbing, and reading, while receiving support from the Tarbell Center for AI Journalism.",
  },
  // Multimedia Team
  {
    id: "22",
    name: "Marguerite Howell",
    title: "VP of Multimedia",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/09/cropped-Dispatch-Portrait-Marguerite-August-.png?w=600",
    category: "Multimedia Team",
    slug: "marguerite-howell",
    bio: "Marguerite Howell serves as Vice President of Multimedia at The Dispatch, based in San Jose, California. She joined in 2025 after playing a key role developing social video and podcasting at The Economist, where she co-launched and co-founded 'The Intelligence.' Outside work, she enjoys mountain biking and frequenting her local library.",
  },
  {
    id: "23",
    name: "Victoria Holmes",
    title: "Associate Audio/Video Editor",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/Victoria-Holmes.png?w=600",
    category: "Multimedia Team",
    slug: "victoria-holmes",
    bio: "Victoria Holmes serves as an Associate Audio/Video Editor at The Dispatch, based in Washington, D.C. She joined in 2022 after working as a TV news reporter and podcast host. Holmes focuses on producing and editing podcasts and multimedia content when not enjoying restaurant discovery and beach trips.",
  },
  {
    id: "24",
    name: "Noah Hickey",
    title: "Visuals Editor",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/03/Noah-Hickey.png?w=600",
    category: "Multimedia Team",
    slug: "noah-hickey",
    bio: "Noah Hickey serves as the Visuals Editor at The Dispatch, based in Tampa, Florida. He joined in 2024 after interning there and previously working as a musician while attending Polk State College. Beyond his editorial role, Hickey is an active musician who plays slide guitar and writes music for his band Foxhall.",
  },
  {
    id: "25",
    name: "Justin Colman",
    title: "Social Media Manager",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/05/cropped-Dispatch-Portraits-May-3.png?w=600",
    category: "Multimedia Team",
    slug: "justin-colman",
    bio: "Justin Colman serves as Social Media Manager at The Dispatch, based in Warren, New Jersey. He joined in 2025, having previously held a similar position at Barstool Sports. Outside work, he enjoys spending time with family and friends, supporting Washington D.C. sports teams, and maintaining a fitness routine.",
  },
  {
    id: "26",
    name: "Peter Bonaventure",
    title: "Audio Engineer",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2026/01/cropped-Dispatch-Portrait-4-Jan-2026-.png?w=600",
    category: "Multimedia Team",
    slug: "peter-bonaventure",
    bio: "Peter Bonaventure serves as Audio Engineer at The Dispatch. He is a new staff member focused on audio production and engineering for the publication's podcast and multimedia content.",
  },
  // SCOTUSblog Editorial Staff
  {
    id: "27",
    name: "Amy Howe",
    title: "Reporter",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/05/cropped-Dispatch-Portraits-May-1.png?w=600",
    category: "SCOTUSblog Editorial Staff",
    slug: "amy-howe",
    bio: "Amy Howe serves as a reporter at SCOTUSblog, which became part of The Dispatch in 2025. She previously held positions as both reporter and editor at SCOTUSblog. With a background in law, she has argued two cases before the Supreme Court and specializes in covering Supreme Court opinions and emergency appeals.",
  },
  {
    id: "28",
    name: "Zachary Shemtob",
    title: "Executive Editor",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/09/cropped-Dispatch-Portraits-May-2.png?w=600",
    category: "SCOTUSblog Editorial Staff",
    slug: "zachary-shemtob",
    bio: "Zachary Shemtob serves as executive editor at SCOTUSblog, a position he assumed in 2025. Prior to this role, he practiced law at a boutique New York firm. Based in Summit, New Jersey, he balances his professional responsibilities with personal interests including heavy metal music, horror films, and time with his children.",
  },
  {
    id: "29",
    name: "Kelsey Dallas",
    title: "Managing Editor",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/09/cropped-Dispatch-Portraits-June03.png?w=600",
    category: "SCOTUSblog Editorial Staff",
    slug: "kelsey-dallas",
    bio: "Kelsey Dallas serves as Managing Editor at SCOTUSblog as of 2025 and is located in Madison, Wisconsin. Previously, she worked as assistant managing editor and religion reporter for the Deseret News. Outside work, she enjoys reading, spending time with her two sons, and watching reality television.",
  },
  {
    id: "30",
    name: "Nora Collins",
    title: "Editorial Assistant",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/09/cropped-Dispatch-Portrait-Nocollin-August-.png?w=600",
    category: "SCOTUSblog Editorial Staff",
    slug: "nora-collins",
    bio: "Nora Collins is an editorial assistant at SCOTUSblog, based in Washington, D.C. Prior to her current role in 2025, she gained experience as a Medical News Journalism Fellow at the Journal of the American Medical Association and interned at the Foundation for Individual Rights and Expression. When not updating legal case materials, she enjoys swimming and listening to the Advisory Opinions podcast.",
  },
  // Business Team
  {
    id: "31",
    name: "Michael Rothman",
    title: "President",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/04/cropped-Dispatch-Portraits-Rothman.png?w=600",
    category: "Business Team",
    slug: "michael-rothman",
    bio: "Michael Rothman serves as President of The Dispatch, based in New York. Prior to taking this full-time role in 2024, he had advised the company since its 2019 inception. His background includes founding and running Fatherly and scaling Thrillist from startup to 200 employees, along with serving as an investor and advisor to numerous digital-first consumer brands.",
  },
  {
    id: "32",
    name: "Campbell Rawlins",
    title: "Chief of Staff",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/04/cropped-Dispatch-Portraits-April-5.png?w=600",
    category: "Business Team",
    slug: "campbell-rawlins",
    bio: "Campbell Rawlins serves as Chief of Staff at The Dispatch, based in Chapel Hill, North Carolina. He joined in 2025 after holding strategy and operations roles at POLITICO, where he was most recently Senior Director of Business Strategy & Growth. Outside work, he enjoys trail running, cooking, and outdoor activities with his family.",
  },
  {
    id: "33",
    name: "Brittany Prime",
    title: "Director, Commercial Partnerships",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/04/cropped-Dispatch-Portraits-April-New.png?w=600",
    category: "Business Team",
    slug: "brittany-prime",
    bio: "Brittany Prime holds the position of Director, Commercial Partnerships at The Dispatch. She manages commercial partnership relationships and business development initiatives for the publication.",
  },
  {
    id: "34",
    name: "James Scimecca",
    title: "Audience Engagement Editor",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/04/cropped-Dispatch-Portraits-April-2-1.png?w=600",
    category: "Business Team",
    slug: "jscimecca",
    bio: "James Scimecca serves as the audience engagement editor at The Dispatch and is based in Washington, D.C. He joined in 2023, having previously worked as director of communications at the Empire Center for Public Policy. Outside work, he enjoys running along the Potomac River, experimenting with recipes, and frequenting karaoke venues.",
  },
  {
    id: "35",
    name: "Olivia Geno",
    title: "Manager, People & Operations",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2026/01/cropped-Dispatch-Portrait-1-Jan-2026.png?w=600",
    category: "Business Team",
    slug: "olivia-geno",
    bio: "Olivia Geno serves as Manager, People & Operations at The Dispatch, based in Washington, D.C. She joined in 2025 after working in growth strategy at AllSides. Outside her operational responsibilities, she enjoys fishing, mountain climbing, and improving her pool skills.",
  },
  {
    id: "36",
    name: "Lily Thompson",
    title: "Partnerships Manager",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2026/01/cropped-Dispatch-Portrait-3-Jan-2026.png?w=600",
    category: "Business Team",
    slug: "lily-thompson",
    bio: "Lily Thompson serves as a Partnerships Manager at The Dispatch, based in San Francisco. She joined in 2026 after working in account management for POLITICO's professional subscriptions team. Outside work, she enjoys pottery, running, and exploring local cafés.",
  },
  {
    id: "37",
    name: "Hannah Cudal",
    title: "Community Manager",
    imageUrl: "https://thedispatch.com/wp-content/uploads/2025/04/cropped-Dispatch-Portraits-April-3.png?w=600",
    category: "Business Team",
    slug: "hannah-cudal",
    bio: "Hannah Cudal serves as Community Manager at The Dispatch, based in Southeast Asia. She joined in 2024 after working with small business startups where she tackled complex operational challenges. Beyond managing member accounts and subscriber benefits, she pursues personal interests in aquascaping and fundraising for overseas humanitarian initiatives.",
  },
]
