import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import arch from "../assets/images/HeaderImgs/Arch.svg";
import chinaza from "../assets/images/HeaderImgs/CHINAZA.svg";
import icheke from "../assets/images/HeaderImgs/ICHEKE.svg";
import nft from "../assets/images/HeaderImgs/nft.svg";
import tao from "../assets/images/HeaderImgs/tao.svg";
import footium from "../assets/images/HeaderImgs/footium.svg";
import vidaio from "../assets/images/HeaderImgs/vidaio.svg";
import { createHeroScroll } from "../animations";

export function Hero() {
  const section = useRef(null);

  useGSAP(() => {
    createHeroScroll(section.current);
  });

  return (
    <section ref={section} className="relative flex h-screen flex-col overflow-hidden px-20 pt-32">
      <div className="flex shrink-0 items-start gap-[34.84px]">
        <img src={chinaza} alt="Chinaza" className="aspect-579/180 min-w-0 flex-579" />
        <img src={nft} alt="" className="aspect-145/180 min-w-0 flex-145 will-change-transform nft" />
        <img src={icheke} alt="Icheke" className="aspect-487/180 min-w-0 flex-487" />
      </div>

      <div className="mt-8 flex shrink-0 items-baseline justify-between font-helvetica text-[24px] leading-none tracking-[-0.04em]">
        <p className="font-medium text-white">Product Designer</p>
        <p className="mr-0.5 font-normal text-[#595959]">Design as a means to solve problems</p>
      </div>

      <img
        src={arch}
        alt=""
        className="pointer-events-none relative z-10 mt-6.5 aspect-1300/871 w-[101.5625%] max-w-none shrink-0 self-center select-none will-change-transform arch"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-86 bg-linear-to-b from-transparent to-[#030303]" />

      <p className="absolute bottom-9.75 left-20 z-20 font-helvetica text-[24px] font-medium leading-[28.8px] tracking-[-0.04em] whitespace-nowrap text-[#7d7d7d]">
        <span className="block">Creating to inspire has always been my drive. This has</span>
        <span className="-mt-px block">
          guided my works at <img src={tao} alt="" className="mr-1 ml-[3.5px] inline size-6 align-[-3px]" />
          <span className="text-white">taostats,</span>{" "}
          <img src={footium} alt="" className="mr-1 ml-[3.5px] inline size-6 align-[-3px]" />
          <span className="text-white">Footium,</span>
        </span>
        <span className="mt-0.5 block">
          <img src={vidaio} alt="" className="mr-1 inline size-6 align-[-3px]" />
          <span className="text-white">Vidaio</span> , and others
        </span>
      </p>
    </section>
  );
}

export default Hero;
