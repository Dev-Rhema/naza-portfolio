import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
    gsap.matchMedia().add("(min-width: 768px)", () => {
      createHeroScroll(section.current);
    });
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
          className="absolute top-[17.03125rem] right-6 aspect-145/180 w-[4.1875rem] min-w-0 will-change-transform md:static md:w-auto md:flex-145 nft"
        />
        <div className="w-[84.11%] min-w-0 overflow-hidden md:w-auto md:flex-487">
          <img
            src={icheke}
            alt="Icheke"
            className="aspect-487/180 w-full will-change-transform slide"
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

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-86 bg-linear-to-b from-transparent to-[#030303]" />

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
