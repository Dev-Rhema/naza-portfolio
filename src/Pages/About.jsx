import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Button from "../Button";
import Navbar from "../Navbar";
import Noise from "../noise";
import RippleDistortion from "../RippleDistortion";
import { Footer } from "../Sections/Footer";
import sectionIcon from "../assets/images/sectionIcon.svg";
import heroSketch from "../assets/images/aboutPageImgs/aboutHeroSketch.png";
import photo from "../assets/images/aboutPageImgs/fineBoyNaza.png";
import photoOverlay from "../assets/images/aboutPageImgs/photoOverlay.svg";
import hatIcon from "../assets/images/aboutPageImgs/aboutPageIcons/hat.png";
import brushIcon from "../assets/images/aboutPageImgs/aboutPageIcons/brush.png";
import hexagonIcon from "../assets/images/aboutPageImgs/aboutPageIcons/hexagon.png";
import megaphoneIcon from "../assets/images/aboutPageImgs/aboutPageIcons/megaphone.png";
import pendulumIcon from "../assets/images/aboutPageImgs/aboutPageIcons/pendulum.png";
import experienceIllustration from "../assets/images/aboutPageImgs/experienceIllustration.png";
import taoIcon from "../assets/images/aboutPageImgs/aboutPageIcons/tao.svg";
import vidaioIcon from "../assets/images/aboutPageImgs/aboutPageIcons/vidaio.svg";
import hippiusIcon from "../assets/images/aboutPageImgs/aboutPageIcons/hippius.svg";
import premblyIcon from "../assets/images/aboutPageImgs/aboutPageIcons/premly.svg";
import footiumIcon from "../assets/images/aboutPageImgs/aboutPageIcons/footium.svg";

const experiences = [
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

const Icon = ({ src, className }) => (
  <span className="relative -my-1 mr-0.5 ml-[0.3125rem] inline-block size-10 align-middle md:size-12">
    <img src={src} alt="" className={`pointer-events-none absolute -top-[0.41667rem] -z-10 max-w-none select-none md:-top-2 ${className}`} />
  </span>
);

const wide = "-left-[12.23958rem] w-[26.97917rem] md:-left-58.75 md:w-129.5";

export const About = ({ loaded }) => {
  useGSAP(() => {
    ScrollSmoother.create({ smooth: 1.5 });
  });

  return (
    <main className="overflow-x-clip">
      <Noise visible={loaded} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section className="relative px-6 pt-28 pb-10 md:px-20 md:pt-[7.375rem] md:pb-[2.3125rem]">
            <Navbar />

            <img src={heroSketch} alt="" className="pointer-events-none w-full select-none md:w-160" />

            <h1 className="relative z-10 mt-4 font-helvetica text-[2.5rem] font-normal leading-none tracking-[-0.04em] text-white md:-mt-14 md:text-[4.5rem] 2xl:-mt-24 2xl:text-[7.5rem]">
              Product Designer creating <br className="hidden md:block" />
              interfaces that challenge <br className="hidden md:block" />
              the norm
            </h1>
            <p className="mt-4 font-helvetica text-[1.125rem] font-normal leading-[1.2] tracking-[-0.04em] text-[#7d7d7d] md:mt-3 md:w-125 md:text-[1.5rem]">
              Design should make us better. Design should draw out positive emotions from our users. These have been some of my guides over the years
            </p>
            <Button href="#contact" className="mt-6 md:mt-[1.40625rem]">
              Book a Call
            </Button>

            <div className="relative mt-10 aspect-600/800 w-full md:absolute md:top-[7.375rem] md:right-20 md:mt-0 md:w-150">
              <RippleDistortion src={photo} className="absolute inset-0" />
              <img src={photoOverlay} alt="" className="pointer-events-none absolute inset-0 size-full select-none" />
            </div>
          </section>

          <section className="px-6 py-10 md:px-20 md:pt-22 md:pb-40">
            <p className="flex items-center gap-1.75 font-helvetica text-[0.875rem] font-medium leading-none tracking-[-0.04em] text-white md:gap-2 md:text-[1rem]">
              <img src={sectionIcon} alt="" className="size-4 md:size-4.5" />
              <span className="pt-0.5">THE DESIGNER</span>
            </p>
            <p className="isolate mt-5 font-helvetica text-[1.75rem] font-normal leading-[1.2] tracking-[-0.04em] text-[#4f4f4f] md:mt-[2.15625rem] md:text-[3rem] md:leading-[3.125rem]">
              While I wear many hats <Icon src={hatIcon} className={wide} /> depending on the situation my areas of expertise are in{" "}
              <span className="whitespace-nowrap text-white">
                <Icon src={brushIcon} className={wide} /> Product Design,
              </span>{" "}
              <span className="whitespace-nowrap text-white">
                <Icon src={hexagonIcon} className={wide} /> Design Systems,
              </span>{" "}
              <span className="whitespace-nowrap text-white">
                <Icon src={megaphoneIcon} className="-left-[4.16667rem] w-[18.90625rem] md:-left-20 md:w-[22.6875rem]" /> Pitch Decks,
              </span>{" "}
              <span className="whitespace-nowrap text-white">
                <Icon src={pendulumIcon} className={wide} /> Motion for Interfaces
              </span>
            </p>
            <Button href="#resume" className="mt-8 bg-[#262626]! md:mt-[2.59375rem]">
              My Resume
            </Button>
          </section>

          <section className="flex flex-col gap-12 px-6 pb-10 md:flex-row md:gap-0 md:px-20 md:pb-[4.3125rem]">
            <div className="relative md:w-170">
              <p className="flex items-center gap-1.75 font-helvetica text-[0.875rem] font-medium leading-none tracking-[-0.04em] text-white md:gap-2 md:text-[1rem]">
                <img src={sectionIcon} alt="" className="size-4 md:size-4.5" />
                <span className="pt-0.5">MY EXPERIENCE</span>
              </p>
              <h2 className="mt-4 font-helvetica text-[2rem] font-normal leading-[1.1] tracking-[-0.04em] text-white md:mt-[1.5625rem] md:text-[3rem]">
                Over the years I have helped
                <br />
                brands go from 0 - 1
              </h2>
              <p className="mt-4 font-helvetica text-[1.125rem] font-normal leading-[1.2] tracking-[-0.04em] text-[#7d7d7d] md:mt-[0.84375rem] md:ml-30 md:w-[27.5rem] md:text-[1.25rem]">
                My experience has usually revolved around assisting startups define their visual language and establish a cohesive identity that is
                impossible to ignore
              </p>
              <img
                src={experienceIllustration}
                alt=""
                className="pointer-events-none mt-8 w-[12.75rem] select-none md:absolute md:top-40 md:left-0 md:mt-0"
              />
            </div>

            <ol className="flex flex-col gap-[1.40625rem] md:flex-1 md:pt-[2.125rem]">
              {experiences.map((experience) => (
                <li key={experience.name}>
                  <div className="flex h-10 items-center font-helvetica tracking-[-0.04em]">
                    <img src={experience.icon} alt="" className="size-10" />
                    <h3 className="ml-4 text-[1.5rem] font-medium leading-none text-white md:text-[2rem]">{experience.name}</h3>
                    <p className="ml-auto text-[0.875rem] font-normal leading-none text-[#7d7d7d] italic md:text-[1rem]">{experience.dates}</p>
                  </div>
                  <div className="relative mt-4 pt-[0.15625rem] pl-14 font-helvetica tracking-[-0.04em] text-[#7d7d7d]">
                    <div className="absolute inset-y-0 left-2 flex w-6 flex-col items-center">
                      <span className="size-6 shrink-0 rounded-full bg-[#1f1f1f] shadow-[inset_0_-3px_2px_rgba(0,0,0,0.25),inset_0_2px_2px_rgba(179,179,179,0.25)]" />
                      <span className="-my-px w-1 flex-1 bg-[#1f1f1f]" />
                      <span className="size-6 shrink-0 rounded-full bg-[#1f1f1f] shadow-[inset_0_-3px_2px_rgba(0,0,0,0.25),inset_0_2px_2px_rgba(179,179,179,0.25)]" />
                    </div>
                    <p className="text-[1.125rem] font-normal leading-[1.2] md:text-[1.25rem]">{experience.role}</p>
                    <p className="mt-[1.7125rem] text-[0.875rem] font-normal leading-[1.2] md:w-[31.75rem] md:text-[1rem]">{experience.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <Footer />
        </div>
      </div>
    </main>
  );
};

export default About;
