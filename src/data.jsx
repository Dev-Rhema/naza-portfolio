import taoIcon from "./assets/images/aboutPageImgs/aboutPageIcons/tao.svg";
import vidaioIcon from "./assets/images/aboutPageImgs/aboutPageIcons/vidaio.svg";
import hippiusIcon from "./assets/images/aboutPageImgs/aboutPageIcons/hippius.svg";
import premblyIcon from "./assets/images/aboutPageImgs/aboutPageIcons/premly.svg";
import footiumIcon from "./assets/images/aboutPageImgs/aboutPageIcons/footium.svg";
import footiumBanner from "./assets/images/CaseStudyImages/footium/footiumBanner.jpg?w=1280;1920;2560&as=srcset";
import footiumField from "./assets/images/CaseStudyImages/footium/footiumField.jpg?w=640;1024;1232&as=srcset";
import footiumFormation from "./assets/images/CaseStudyImages/footium/footiumFormation.jpg?w=640;1024;1232&as=srcset";
import footiumRecording from "./assets/images/CaseStudyImages/footium/footiumScreenRecording.jpg?w=960;1440;2560&as=srcset";
import taostatsCover from "./assets/images/CaseStudyImages/TaoStat.jpg?w=640;800;1232&as=srcset";
import vidaioCover from "./assets/images/CaseStudyImages/vidaio.jpg?w=640;800;1232&as=srcset";
import taoBanner from "./assets/images/CaseStudyImages/Taostat/taoBanner.jpg?w=1280;1920;2560&as=srcset";
import taoOverviewL from "./assets/images/CaseStudyImages/Taostat/overviewL.jpg?w=640;1024;1232&as=srcset";
import taoOverviewR from "./assets/images/CaseStudyImages/Taostat/overviewR.jpg?w=640;1024;1232&as=srcset";
import taoVideoBg from "./assets/images/CaseStudyImages/Taostat/taoVideoBg.jpg?w=960;1440;2560&as=srcset";
import taoPlaceholder from "./assets/images/CaseStudyImages/Taostat/placeHolder.jpg?w=720;1120;2240&as=srcset";
import hippiusCover from "./assets/images/CaseStudyImages/hippius.jpg?w=640;800;1232&as=srcset";
import ebukaCover from "./assets/images/CaseStudyImages/ebuka.jpg?w=640;800;1232&as=srcset";

export const works = [
  { name: "Taostats", href: "/works/taostats", footer: true },
  { name: "Footium", href: "/works/footium", footer: true },
  { name: "Vidaio", href: "/works/vidaio", footer: true },
  { name: "Hippius", href: "/works/hippius" },
  { name: "Ebuka", href: "/works/ebuka", footer: true },
  { name: "Attention Factory", href: "/works/attention-factory" },
];

export const me = [
  { name: "About Me", href: "/about" },
  { name: "My Games", href: "#" },
  { name: "My Reads", href: "#" },
];

export const socials = [
  {
    name: "Twitter/X",
    href: "#",
    icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: "M5.5 7.5H1v15h4.5zM3.25 1A2.6 2.6 0 0 0 .6 3.6a2.6 2.6 0 0 0 2.65 2.6A2.6 2.6 0 0 0 5.9 3.6 2.6 2.6 0 0 0 3.25 1M23.4 13.9c0-4.1-2.2-6.75-5.7-6.75a5 5 0 0 0-4.45 2.4V7.5H8.9v15h4.5v-7.9c0-2.1.9-3.6 2.85-3.6 1.75 0 2.65 1.25 2.65 3.6v7.9h4.5z",
  },
  { name: "Email", href: "#" },
];

export const experiences = [
  {
    name: "taostats",
    icon: taoIcon,
    dates: "Feb 2025 - Aug 2026",
    role: "Product Designer",
    description: (
      <>
        Designed the landing page for the largest documentary of Bittensor, <span className="font-medium text-white">The Incentive Layer</span> which
        gathered over 61k views. Shedding more light on the importance of an open source intelligence layer
      </>
    ),
  },
  {
    name: "Vidaio",
    icon: vidaioIcon,
    dates: "May 2025 - Aug 2026",
    role: "Product Designer",
    description: "Designed the initial application, website, marketing materials and pitch decks for the product",
  },
  {
    name: "Hippius",
    icon: hippiusIcon,
    dates: "May 2025 - Aug 2026",
    role: "Product Designer",
    description: "Designed the initial web application, desktop application, websites, marketing materials and pitch decks for the product",
  },
  {
    name: "Prembly",
    icon: premblyIcon,
    dates: "Dec 2023 - Jan 2025",
    role: "Product Designer",
    description: "Led the design for various products and created a standardized design system that governed the visual language for the company",
  },
  {
    name: "Footium",
    icon: footiumIcon,
    dates: "Feb 2022 - Feb 2023",
    role: "UI/UX Designer",
    description: "Designed the tactics page of the game, MVP website and pitchdecks for the company",
  },
];

const bold = "font-medium tracking-[-0.02em] text-white";

export const caseStudies = {
  footium: {
    name: "Footium",
    tagline: "The future of football management games",
    title: (
      <>
        The future of football
        <br className="max-md:hidden" /> management games
      </>
    ),
    banner: footiumBanner,
    website: "#",
    overview: [
      "Footium is a novel idea, still one of my favourite blockchain projects till date.",
      "It comes with a simple idea; what if we could take the awesomeness of Football Manager and bring it to the millions of football lovers who are web3 native, while also taking into consideration those that have no experience of web3?",
      "That is the foundation of Footium",
    ],
    metrics: [
      { label: "Industry", value: "Gaming, Blockchain" },
      { label: "Year", value: "2022" },
      { label: "Transfer Volume", value: "$4M+" },
      { label: "No of Players", value: "600+" },
      { label: "Rewards Distributed", value: "$1.5M" },
    ],
    images: [footiumField, footiumFormation],
    problem: [
      "Everyone loves football manager, that is the key to its success. How can we take the best parts of fantasy football, simplify it and ensure it is easily accessible to those who are native to web3 and those who are not",
    ],
    recording: footiumRecording,
    impact: [
      "My focus at Footium was on the Tactics page which is where most of our players will spend their time. My essential idea for this page was the use of iconography and motion to ensure clarity.",
      "Together with the engineering team, marketing teams and senior designer, I was able to come up with a base for the tactics page which evolved over the years. It has served its purpose in being an easily accessible means for players to have an overview of where their players are in terms of fitness, growth and readiness for training.",
    ],
    outcome: [
      "My time at Footium saw the game ready for launch. Now in its 13th season, I am proud of the work I did with the team as I always play Footium",
      <>
        Currently at over <span className={bold}>4,000 users</span> with <span className={bold}>600+ club owners</span>, Footium has been able to
        distribute over <span className={bold}>$1.5M in rewards</span> with a <span className={bold}>transfer volume of $4M+</span>
      </>,
    ],
    more: ["taostats", "vidaio"],
  },
  taostats: {
    name: "Taostats",
    tagline: "Bringing the potential of opensource intelligence to everyone",
    cover: taostatsCover,
    title: (
      <>
        Bringing the power of opensource intelligence
        <br className="max-md:hidden" /> to everyone through <span className="md:text-white">The Incentive Layer</span> documentary
      </>
    ),
    banner: taoBanner,
    website: "#",
    overview: [
      "The era of opensource has brought about the best of innovative technologies known to man. With the emergence of AI, the main players have always been the large corporations with expensive price tags and closed off development",
      "Thence came Bittensor, an outlier in the Web3 space that rewards creators for building technologies on it. Its main purpose is the onboarding of millions into the use of AI without the bottleneck costs",
      "The new installation of the documentary required a website that will show off not just the importance of Bittensor but make visitors be curious enough to want to watch it.",
    ],
    metrics: [
      { label: "Industry", value: "AI, Blockchain" },
      { label: "Year", value: "2025" },
      { label: "Number of Views", value: "61K" },
      { label: "Number of Likes", value: "2.1K" },
    ],
    images: [
      taoOverviewL,
      taoOverviewR,
    ],
    problem: [
      "The need was clear, we wanted to communicate the freedom that comes with building with Bittensor, we wanted to show not just tell by bringing current builders in the ecosystem to speak about their journey so far and how much they love what they do",
      "To do this we needed to complete a website that hosted the video and communicated at a purview what the network was a trailblazer in decentralized compute",
    ],
    recording: taoVideoBg,
    placeholder: taoPlaceholder,
    impact: [
      "With the little time given for engineering and development we were able to deliver a comprehensive website with little to no bugs that allowed for optimal viewing experience on all devices.",
      "I was able to achieve this with the amazing team by asking questions, understanding the problem and utilizing my design thinking tool kit which allowed for quick reiterations and scrapping ideas that do not work or features that do not achieve the main goal of helping communicate value.",
    ],
    outcome: [
      <>
        The documentary gathered over <span className={bold}>61,000 viewers</span> on Youtube with over <span className={bold}>2,000+ likes</span>, with glowing
        reviews from the Bittensor community. The Incentive Layer was a project I was incredibly proud of
      </>,
    ],
    more: ["hippius", "ebuka"],
  },
  vidaio: {
    name: "Vidaio",
    tagline: "Designing the future of video processing powered by Bittensor",
    cover: vidaioCover,
  },
  hippius: {
    name: "Hippius",
    tagline: "Designing for the future of affordable cloud storage built on the blockchain",
    cover: hippiusCover,
  },
  ebuka: {
    name: "Chidube Ebuka",
    tagline: "Creating an online presence for a digital marketer par excellence",
    cover: ebukaCover,
  },
};
