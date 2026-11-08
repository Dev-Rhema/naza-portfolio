import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import statue from "./assets/images/loaderStatue.webp";
import { createLoaderTimeline } from "./animations";

gsap.registerPlugin(useGSAP);

function Reveal({ id, className, children }) {
  return (
    <div className={`absolute -mx-4 overflow-hidden px-4 whitespace-nowrap ${className}`}>
      <div className={id}>{children}</div>
    </div>
  );
}

export function Loader({ onComplete }) {
  const root = useRef(null);

  useGSAP(() => {
    createLoaderTimeline(root.current, { onComplete });
  });

  return (
    <div ref={root} role="status" aria-label="Loading" className="fixed inset-0 z-50 flex overflow-hidden">
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} aria-hidden={i > 0} className="relative h-full flex-1 overflow-hidden slice">
          <div className="absolute top-0 left-0 h-screen w-[1200%] bg-[#030303] slice-inner">
            <img
              src={statue}
              alt=""
              className="pointer-events-none absolute -bottom-1 left-1/2 h-174.75 w-160 max-w-none md:h-256 md:w-234.5 -translate-x-1/2 opacity-0 select-none statue"
            />

            <Reveal
              id="quem"
              className="top-1/2 mt-[-204px] inset-x-0 text-center font-kalnia text-[56px] leading-[1.2] font-medium text-white font-stretch-100% md:top-21.5 md:mt-0 md:right-auto md:left-20 md:text-left md:text-[96px] md:h-29.25"
            >
              QUEM
            </Reveal>
            <p className="absolute top-[22.4px] right-6 font-helvetica font-medium text-[16px] leading-[1.2] text-[#4d4d4d] fade md:top-[80.7px] md:right-20 md:text-[24px]">
              <span className="count">0</span>%
            </p>

            <Reveal
              id="name"
              className="top-1/2 mt-[-97px] inset-x-0 text-center font-helvetica font-normal text-[24px] leading-[1.2] tracking-[-0.0105em] text-white md:mt-[-1.65px] md:right-auto md:font-medium md:left-20 md:text-left md:text-[48px] md:h-[50.6px]"
            >
              Chinaza Icheke
            </Reveal>
            <Reveal
              id="como"
              className="top-1/2 mt-[-35px] inset-x-0 text-center font-kalnia text-[56px] leading-[1.2] font-medium text-white font-stretch-100% md:mt-[-55.4px] md:text-[96px] md:h-[119.4px]"
            >
              COMO
            </Reveal>
            <Reveal
              id="role"
              className="top-1/2 mt-[72.5px] inset-x-0 text-center font-helvetica font-normal text-[24px] leading-[1.2] tracking-[-0.0105em] text-[#4d4d4d] md:mt-[2.8px] md:tracking-[-0.0285em] md:left-auto md:font-medium md:right-[81.4px] md:text-left md:text-[40px] md:h-[46.2px]"
            >
              Product Designer
            </Reveal>

            <p className="absolute bottom-[26.5px] left-6 font-helvetica font-medium text-[16px] leading-[1.2] tracking-[-0.0056em] text-[#4d4d4d] fade md:bottom-[71.6px] md:left-20 md:text-[24px]">
              Loading
            </p>
            <Reveal
              id="deus"
              className="top-1/2 mt-[134.5px] inset-x-0 text-center font-kalnia text-[56px] leading-[1.2] font-medium text-white font-stretch-100% md:top-auto md:mt-0 md:left-auto md:right-20 md:bottom-[77.1px] md:text-left md:text-[96px]"
            >
              DEUS
            </Reveal>
          </div>
          <div className="absolute top-0 left-0 h-screen w-full origin-bottom bg-[#e85626] will-change-transform decor" />
        </div>
      ))}
    </div>
  );
}

export default Loader;
