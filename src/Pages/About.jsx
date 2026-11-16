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
import captionTop from "../assets/images/aboutPageImgs/photoCaptionTop.svg";
import captionBottom from "../assets/images/aboutPageImgs/photoCaptionBottom.svg";
import barcodeTop from "../assets/images/aboutPageImgs/photoBarcodeTop.svg";
import barcodeBottom from "../assets/images/aboutPageImgs/photoBarcodeBottom.svg";
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
  <span className="relative -my-1 inline-block size-8 align-middle md:mr-0.5 md:ml-1.25 md:size-12">
    <img src={src} alt="" className={`pointer-events-none absolute top-[-0.33333rem] -z-10 max-w-none select-none md:-top-2 ${className}`} />
  </span>
);

const wide = "left-[-9.79167rem] w-[21.58333rem] md:-left-58.75 md:w-129.5";

const megaphone = "left-[-3.33333rem] w-60.5 md:-left-20 md:w-90.75";

export const About = ({ loaded }) => {
  useGSAP(() => {
    ScrollSmoother.create({ smooth: 1.5 });
  });

  return (
    <main className="overflow-x-clip">
      <Noise visible={loaded} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section className="relative px-6 pt-24 pb-7.5 md:px-20 md:pt-29.5 md:pb-9.25">
            <Navbar />

            <div className="relative aspect-392/406 w-full md:absolute md:top-29.5 md:right-20 md:aspect-600/800 md:w-150">
              <RippleDistortion src={photo} className="absolute inset-0" />
              <img src={captionTop} alt="" className="pointer-events-none absolute top-2 left-2 w-39.25 select-none md:top-3.75 md:left-4 md:w-50.5" />
              <img src={barcodeTop} alt="" className="pointer-events-none absolute top-2 right-1.75 h-12.5 w-40.25 select-none md:top-4 md:right-4 md:h-25 md:w-61.5" />
              <img src={barcodeBottom} alt="" className="pointer-events-none absolute bottom-2 left-2 h-12.75 w-44 select-none md:bottom-4 md:left-4 md:h-25 md:w-67" />
              <img src={captionBottom} alt="" className="pointer-events-none absolute right-2.5 bottom-1.75 w-26 select-none md:right-4.5 md:bottom-7 md:w-33.5" />
            </div>

            <img src={heroSketch} alt="" className="pointer-events-none hidden w-160 select-none md:block" />

            <h1 className="relative z-10 mt-[2.03125rem] font-helvetica text-[2.5rem] font-normal leading-[0.9] tracking-[-0.03em] text-white md:-mt-14 md:tracking-[-0.04em] md:leading-none md:text-[4.5rem] 2xl:-mt-24 2xl:text-[7.5rem]">
              Product Designer creating <br className="hidden md:block" />
              interfaces that challenge <br className="hidden md:block" />
              the norm
            </h1>
            <p className="mt-4.75 font-helvetica text-[1.125rem] font-normal leading-[1.2] tracking-[-0.04em] text-[#7d7d7d] md:mt-3 md:w-125 md:text-[1.5rem]">
              Design should make us better. Design should draw out positive emotions from our users. These have been some of my guides over the years
            </p>
            <Button href="#contact" className="mt-[1.59375rem] md:mt-[1.40625rem]">
              Book a Call
            </Button>

          </section>

          <section className="px-6 pt-10 pb-[5.03125rem] md:px-20 md:pt-22 md:pb-40">
            <p className="flex items-center gap-1.75 font-helvetica text-[0.875rem] font-medium leading-none tracking-[-0.04em] text-white md:gap-2 md:text-[1rem]">
              <img src={sectionIcon} alt="" className="size-4 md:size-4.5" />
              <span className="pt-0.5">THE DESIGNER</span>
            </p>
            <p className="isolate mt-3.75 font-helvetica text-[2rem] font-normal leading-10 tracking-[-0.04em] text-[#4f4f4f] md:hidden">
              While I wear many hats <Icon src={hatIcon} className={wide} /> depending on the situation my areas of expertise are in{" "}
              <span className="text-white">
                Product Design <Icon src={brushIcon} className={wide} /> , Design Systems <Icon src={hexagonIcon} className={wide} /> , Pitch Decks{" "}
                <Icon src={megaphoneIcon} className={megaphone} /> <span className="whitespace-nowrap">, and</span> Motion for Interfaces <Icon src={pendulumIcon} className={wide} />
              </span>
            </p>
            <p className="isolate hidden font-helvetica font-normal tracking-[-0.04em] text-[#4f4f4f] md:mt-[2.15625rem] md:block md:text-[3rem] md:leading-12.5">
              While I wear many hats <Icon src={hatIcon} className={wide} /> depending on the situation my areas of expertise are in{" "}
              <span className="whitespace-nowrap text-white">
                <Icon src={brushIcon} className={wide} /> Product Design,
              </span>{" "}
              <span className="whitespace-nowrap text-white">
                <Icon src={hexagonIcon} className={wide} /> Design Systems,
              </span>{" "}
              <span className="whitespace-nowrap text-white">
                <Icon src={megaphoneIcon} className={megaphone} /> Pitch Decks,
              </span>{" "}
              <span className="whitespace-nowrap text-white">
                <Icon src={pendulumIcon} className={wide} /> Motion for Interfaces
              </span>
            </p>
            <Button href="#resume" className="mt-7.25 bg-[#262626]! md:mt-[2.59375rem]">
              My Resume
            </Button>
          </section>

          <section className="flex flex-col gap-[0.96875rem] px-6 pb-[2.34375rem] md:flex-row md:gap-0 md:px-20 md:pb-17.25">
            <div className="relative md:w-170">
              <p className="flex items-center gap-1.75 font-helvetica text-[0.875rem] font-medium leading-none tracking-[-0.04em] text-white md:gap-2 md:text-[1rem]">
                <img src={sectionIcon} alt="" className="size-4 md:size-4.5" />
                <span className="pt-0.5">MY EXPERIENCE</span>
              </p>
              <h2 className="mt-[1.05rem] font-helvetica text-[1.75rem] font-normal leading-[1.1] tracking-[-0.04em] text-white md:mt-6.25 md:text-[3rem]">
                Over the years I have helped
                <br />
                brands go from 0 - 1
              </h2>
              <p className="mt-[1.15625rem] font-helvetica text-[0.875rem] font-normal leading-[1.2] tracking-[-0.04em] text-[#7d7d7d] md:mt-[0.84375rem] md:ml-30 md:w-110 md:text-[1.25rem]">
                My experience has usually revolved around assisting startups define their visual language and establish a cohesive identity that is
                impossible to ignore
              </p>
              <img
                src={experienceIllustration}
                alt=""
                className="pointer-events-none absolute top-40 left-0 hidden w-51 select-none md:block"
              />
            </div>

            <ol className="flex flex-col gap-5.25 md:flex-1 md:gap-[1.40625rem] md:pt-8.5">
              {experiences.map((experience) => (
                <li key={experience.name}>
                  <div className="flex h-8 items-center font-helvetica tracking-[-0.04em] md:h-10">
                    <img src={experience.icon} alt="" className="size-8 md:size-10" />
                    <h3 className="ml-2 text-[1.5rem] font-medium leading-none text-white md:ml-4 md:text-[2rem]">{experience.name}</h3>
                    <p className="ml-auto text-[1rem] font-normal leading-none text-[#7d7d7d] italic">{experience.dates}</p>
                  </div>
                  <div className="relative mt-[0.84375rem] pl-10 font-helvetica tracking-[-0.04em] text-[#7d7d7d] md:mt-4 md:pt-[0.15625rem] md:pl-14">
                    <div className="absolute inset-y-0 left-1.75 flex w-4.5 flex-col items-center md:left-2 md:w-6">
                      <span className="size-4.5 shrink-0 rounded-full bg-[#1f1f1f] md:size-6 shadow-[inset_0_-3px_2px_rgba(0,0,0,0.25),inset_0_2px_2px_rgba(179,179,179,0.25)]" />
                      <span className="-my-px w-0.75 flex-1 bg-[#1f1f1f] md:w-1" />
                      <span className="size-4.5 shrink-0 rounded-full bg-[#1f1f1f] md:size-6 shadow-[inset_0_-3px_2px_rgba(0,0,0,0.25),inset_0_2px_2px_rgba(179,179,179,0.25)]" />
                    </div>
                    <p className="text-[1rem] font-normal leading-[1.2] md:text-[1.25rem]">{experience.role}</p>
                    <p className="mt-1.5 pr-5 text-[0.875rem] font-normal leading-[1.2] md:mt-[1.7125rem] md:pr-0 md:w-127 md:text-[1rem]">{experience.description}</p>
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
