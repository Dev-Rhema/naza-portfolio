import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import arch from "../assets/images/HeaderImgs/Arch.svg";
import chinaza from "../assets/images/HeaderImgs/CHINAZA.svg";
import icheke from "../assets/images/HeaderImgs/ICHEKE.svg";
import nft from "../assets/images/HeaderImgs/nft.webp?w=440;866&format=webp&lossless=true&as=srcset";
import tao from "../assets/images/HeaderImgs/tao.svg";
import footium from "../assets/images/HeaderImgs/footium.svg";
import vidaio from "../assets/images/HeaderImgs/vidaio.svg";
import { createHeroScroll, createWipe } from "../animations";
import Navbar from "../Navbar";
import Button from "../Button";
import Wipe from "../Wipe";

export function Hero({ loaded }) {
  const section = useRef(null);

  useGSAP(() => {
    createHeroScroll(section.current);
  });

  useGSAP(
    () => {
      const wipe = createWipe(gsap.utils.toArray(".wipe:not(header *)", section.current)).fromTo(
        ".arch",
        { opacity: 0.001 },
        { opacity: 1, duration: 0.96, ease: "archFade" },
        0.63,
      );
      if (!loaded) wipe.pause();
    },
    { scope: section, dependencies: [loaded] },
  );

  return (
    <section
      ref={section}
      className="relative flex h-screen flex-col overflow-hidden px-6 pt-28 pb-5.5 md:px-20 md:pt-32 md:pb-6.5"
    >
      <Navbar loaded={loaded} />

      <div className="flex shrink-0 flex-wrap items-start gap-y-4 md:flex-nowrap md:gap-[2.1775rem]">
        <Wipe className="relative z-10 w-full min-w-0 md:w-auto md:flex-579">
          <img
            src={chinaza}
            alt="Chinaza"
            className="aspect-579/180 w-full will-change-transform slide"
          />
        </Wipe>
        <Wipe
          delay={innerWidth < 768 ? 1.6 : 0.11}
          className="absolute top-0 left-0 z-0 w-[17.16%] min-w-0 will-change-transform md:relative md:order-0 md:mt-0 md:w-auto md:flex-145 md:self-auto md:z-auto nft"
        >
          <img srcSet={nft} sizes="(min-width: 768px) 15vw, 33vw" alt="" fetchPriority="high" className="aspect-145/180 w-full" />
        </Wipe>
        <Wipe delay={0.22} className="relative z-10 w-[84.11%] min-w-0 md:w-auto md:flex-487">
          <img
            src={icheke}
            alt="Icheke"
            className="aspect-487/180 w-full max-w-none will-change-transform md:w-full slide"
          />
        </Wipe>
      </div>

      <div className="mt-8 hidden shrink-0 items-baseline justify-between md:flex overflow-hidden font-helvetica text-[1.5rem] leading-none tracking-[-0.04em]">
        <Wipe delay={0.27} className="relative">
          <p className="pb-1 font-medium text-white will-change-transform slide">Product Designer</p>
        </Wipe>
        <Wipe delay={0.28} className="relative mr-0.5">
          <p className="pb-1 font-normal text-[#595959] will-change-transform slide">Design as a means to solve problems</p>
        </Wipe>
      </div>

      <div className="relative z-10 mt-3.75 aspect-1100/737 w-185 max-w-none shrink-0 self-center will-change-transform md:mt-6.5 md:w-[85.9375%] arch">
        <img src={arch} alt="" className="pointer-events-none size-full select-none" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-linear-to-b from-transparent to-[#030303] to-100% md:h-86" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-64 bg-linear-to-b from-transparent to-[#030303] md:h-86" />

      <div className="absolute bottom-9.75 left-20 z-20 hidden font-helvetica md:block text-[1.5rem] font-normal leading-[1.8rem] tracking-[-0.04em] whitespace-nowrap text-[#7d7d7d]">
        <Wipe delay={0.32} className="relative w-fit">
          <span>Creating to inspire has always been my drive. This has</span>
        </Wipe>
        <Wipe delay={0.37} className="relative -mt-px w-fit">
          <span>
            guided my works at{" "}
            <img src={tao} alt="" className="mr-1 ml-[0.21875rem] inline size-6 align-[-0.1875rem]" />
            <span className="text-white">taostats,</span>{" "}
            <img src={footium} alt="" className="mr-1 ml-[0.21875rem] inline size-6 align-[-0.1875rem]" />
            <span className="text-white">Footium,</span>
          </span>
        </Wipe>
        <Wipe delay={0.42} className="relative mt-0.5 w-fit">
          <span>
            <img src={vidaio} alt="" className="mr-1 inline size-6 align-[-0.1875rem]" />
            <span className="text-white">Vidaio</span> , and others
          </span>
        </Wipe>
      </div>

      <div className="absolute right-6 bottom-19 left-6 z-20 font-helvetica text-[1.25rem] font-normal leading-6.5 tracking-[-0.04em] text-[#7d7d7d] md:hidden hero-copy">
        <Wipe delay={0.32} className="relative w-fit">
          <span>Creating to inspire has always been my drive.</span>
        </Wipe>
        <Wipe delay={0.37} className="relative w-fit">
          <span>
            This has guided my works at{" "}
            <img src={tao} alt="" className="mr-1 ml-[0.21875rem] -my-1 inline size-6 align-[-0.1875rem]" />
            <span className="text-white">taostats,</span>
          </span>
        </Wipe>
        <Wipe delay={0.42} className="relative w-fit">
          <span>
            <img src={footium} alt="" className="mr-1 -my-1 inline size-6 align-[-0.1875rem]" />
            <span className="text-white">Footium,</span>{" "}
            <img src={vidaio} alt="" className="mr-1 -my-1 inline size-6 align-[-0.1875rem]" />
            <span className="text-white">Vidaio</span> , and others
          </span>
        </Wipe>
      </div>
      <Wipe delay={0.46} className="absolute bottom-2.5 left-6 z-20 rounded-full md:hidden">
        <Button href="#contact">Let’s Chat</Button>
      </Wipe>
    </section>
  );
}

export default Hero;
