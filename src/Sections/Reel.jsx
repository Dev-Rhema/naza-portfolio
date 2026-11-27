import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Wipe from "../Wipe";
import { createWipe } from "../animations";
import sectionIcon from "../assets/images/sectionIcon.svg";
import painting from "../assets/images/reelPainting.webp?w=1280;1920&format=avif;jpg&as=picture";
import corner from "../assets/images/corner.webp";

export function Reel() {
  const section = useRef(null);

  useGSAP(
    () => {
      const wipe = createWipe(gsap.utils.toArray(".wipe", section.current))
        .fromTo(".painting", { opacity: 0.001 }, { opacity: 1, duration: 0.88, ease: "reelFade", clearProps: "opacity" }, 0.36)
        .fromTo(".screen", { scale: 0.9 }, { scale: 1, duration: 0.76, ease: "reelScale", clearProps: "transform" }, 0.42)
        .pause();
      ScrollTrigger.create({ trigger: section.current, start: "top 80%", once: true, onEnter: () => wipe.play() });
    },
    { scope: section },
  );

  return (
    <section ref={section} className="px-6 py-10 md:px-20 md:py-22">
      <Wipe className="relative mx-auto w-fit">
        <p className="flex items-center justify-center gap-1.75 font-helvetica text-[0.875rem] font-medium md:gap-2 md:text-[1rem] leading-none tracking-[-0.04em] text-white 2xl:text-[1.25rem]">
          <img src={sectionIcon} alt="" className="size-4 md:size-4.5" />
          <span className="pt-0.5">A DRAMATIC PRODUCT REEL</span>
        </p>
      </Wipe>

      <Wipe delay={0.03} release className="relative mt-4 md:mx-auto md:mt-8 md:w-288">
        <div className="relative aspect-392/335 w-full md:aspect-1280/725">
          <picture>
            <source type="image/avif" srcSet={painting.sources.avif} sizes="(min-width: 768px) 80vw, 134vw" />
            <img
              srcSet={painting.sources.jpeg}
              sizes="(min-width: 768px) 80vw, 134vw"
              alt=""
              loading="lazy"
              decoding="async"
              className="pointer-events-none absolute inset-0 size-full object-cover select-none painting"
            />
          </picture>
          <img src={corner} alt="" loading="lazy" className="pointer-events-none absolute top-0 left-0 w-10 select-none md:w-[3.15rem] painting" />
          <img src={corner} alt="" loading="lazy" className="pointer-events-none absolute top-0 right-0 w-10 -scale-x-100 select-none md:w-[3.15rem] painting" />
          <img src={corner} alt="" loading="lazy" className="pointer-events-none absolute bottom-0 left-0 w-10 -scale-y-100 select-none md:w-[3.15rem] painting" />
          <img src={corner} alt="" loading="lazy" className="pointer-events-none absolute right-0 bottom-0 w-10 rotate-180 select-none md:w-[3.15rem] painting" />
          <div className="absolute inset-x-4.25 top-10 bottom-10 flex items-center justify-center rounded-2xl border border-white/25 bg-[#030303] md:inset-x-[3.15rem] md:top-[2.925rem] md:bottom-[3.20625rem] md:rounded-[0.675rem] screen">
            <button
              type="button"
              aria-label="Play reel"
              className="flex size-14 items-center justify-center rounded-full border border-white/25 bg-linear-to-b from-[#4c4c4c] to-[#0c0c0c]"
            >
              <span className="flex size-7 items-center justify-center rounded-full bg-white">
                <svg viewBox="0 0 24 24" className="ml-px size-4">
                  <path d="M6 4.5v15l13-7.5z" fill="#0a0a0a" stroke="#0a0a0a" strokeWidth="3" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </Wipe>
    </section>
  );
}

export default Reel;
