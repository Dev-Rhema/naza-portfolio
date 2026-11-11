import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import arch from "../assets/images/HeaderImgs/Arch.svg";
import chinaza from "../assets/images/HeaderImgs/CHINAZA.svg";
import icheke from "../assets/images/HeaderImgs/ICHEKE.svg";
import nft from "../assets/images/HeaderImgs/nft.png";
import tao from "../assets/images/HeaderImgs/tao.svg";
import footium from "../assets/images/HeaderImgs/footium.svg";
import vidaio from "../assets/images/HeaderImgs/vidaio.svg";
import { createHeroScroll } from "../animations";
import Navbar from "../Navbar";
import Button from "../Button";

export function Hero() {
  const section = useRef(null);

  useGSAP(() => {
    createHeroScroll(section.current);
  });

  return (
    <section
      ref={section}
      className="relative flex flex-col overflow-hidden px-6 pt-28 pb-5.5 md:h-screen md:px-20 md:pt-32 md:pb-6.5"
    >
      <Navbar />

      <div className="flex shrink-0 flex-wrap items-start gap-y-4 md:flex-nowrap md:gap-[2.1775rem]">
        <div className="w-full min-w-0 overflow-hidden md:w-auto md:flex-579">
          <img
            src={chinaza}
            alt="Chinaza"
            className="aspect-579/180 w-full will-change-transform slide"
          />
        </div>
        <img
          src={nft}
          alt=""
          className="order-last mt-[1.66%] aspect-145/180 w-[17.16%] min-w-0 self-center will-change-transform md:order-none md:mt-0 md:w-auto md:flex-145 md:self-auto nft"
        />
        <div className="w-[82.84%] min-w-0 overflow-y-clip md:w-auto md:flex-487 md:overflow-hidden">
          <img
            src={icheke}
            alt="Icheke"
            className="aspect-487/180 w-[101.53%] max-w-none will-change-transform md:w-full slide"
          />
        </div>
      </div>

      <div className="mt-8 hidden shrink-0 items-baseline justify-between md:flex overflow-hidden font-helvetica text-[1.5rem] leading-none tracking-[-0.04em]">
        <p className="pb-1 font-medium text-white will-change-transform slide">
          Product Designer
        </p>
        <p className="mr-0.5 pb-1 font-normal text-[#595959] will-change-transform slide">
          Design as a means to solve problems
        </p>
      </div>

      <img
        src={arch}
        alt=""
        className="pointer-events-none relative z-10 mt-[0.9375rem] aspect-1100/737 w-[46.25rem] max-w-none md:mt-6.5 md:w-[85.9375%] shrink-0 self-center select-none will-change-transform arch"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[10.625rem] bg-linear-to-b from-transparent to-[#030303] to-60% md:h-86 md:to-100%" />

      <p className="absolute bottom-9.75 left-20 z-20 hidden font-helvetica md:block text-[1.5rem] font-normal leading-[1.8rem] tracking-[-0.04em] whitespace-nowrap text-[#7d7d7d]">
        <span className="block">
          Creating to inspire has always been my drive. This has
        </span>
        <span className="-mt-px block">
          guided my works at{" "}
          <img
            src={tao}
            alt=""
            className="mr-1 ml-[0.21875rem] inline size-6 align-[-0.1875rem]"
          />
          <span className="text-white">taostats,</span>{" "}
          <img
            src={footium}
            alt=""
            className="mr-1 ml-[0.21875rem] inline size-6 align-[-0.1875rem]"
          />
          <span className="text-white">Footium,</span>
        </span>
        <span className="mt-0.5 block">
          <img
            src={vidaio}
            alt=""
            className="mr-1 inline size-6 align-[-0.1875rem]"
          />
          <span className="text-white">Vidaio</span> , and others
        </span>
      </p>

      <p className="relative z-20 -mt-[7.775rem] font-helvetica text-[1.25rem] font-normal leading-[1.625rem] tracking-[-0.04em] text-[#7d7d7d] md:hidden">
        Creating to inspire has always been my drive.
        <br />
        This has guided my works at{" "}
        <img src={tao} alt="" className="mr-1 ml-[0.21875rem] -my-1 inline size-6 align-[-0.1875rem]" />
        <span className="text-white">taostats,</span>
        <br />
        <img src={footium} alt="" className="mr-1 -my-1 inline size-6 align-[-0.1875rem]" />
        <span className="text-white">Footium,</span>{" "}
        <img src={vidaio} alt="" className="mr-1 -my-1 inline size-6 align-[-0.1875rem]" />
        <span className="text-white">Vidaio</span> , and others
      </p>
      <Button href="#contact" className="relative z-20 mt-[1.425rem] md:hidden">
        Let’s Chat
      </Button>
    </section>
  );
}

export default Hero;
