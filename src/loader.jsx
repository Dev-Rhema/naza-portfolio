import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import statue from "./assets/images/loaderStatue.webp";
import { columnCount, createLoaderTimeline } from "./animations";

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
      {Array.from({ length: columnCount() }, (_, i) => (
        <div key={i} aria-hidden={i > 0} className="relative h-full flex-1 overflow-hidden slice">
          <div className="absolute top-0 left-0 h-screen w-[400%] md:w-[1200%] bg-[#030303] slice-inner">
            <img
              src={statue}
              alt=""
              className="pointer-events-none absolute -bottom-1 left-1/2 h-174.75 w-160 max-w-none md:h-256 md:w-234.5 -translate-x-1/2 opacity-0 select-none statue"
            />

            <Reveal
              id="quem"
              className="top-1/2 mt-[-12.75rem] inset-x-0 text-center font-kalnia text-[3.5rem] leading-[1.2] font-medium text-white font-stretch-100% md:top-21.5 md:mt-0 md:right-auto md:left-20 md:text-left md:text-[6rem] md:h-29.25"
            >
              QUEM
            </Reveal>
            <p className="absolute top-[1.4rem] right-6 font-helvetica font-medium text-[1rem] leading-[1.2] text-[#4d4d4d] fade md:top-[5.04375rem] md:right-20 md:text-[1.5rem]">
              <span className="count">0</span>%
            </p>

            <Reveal
              id="name"
              className="top-1/2 mt-[-6.0625rem] inset-x-0 text-center font-helvetica font-normal text-[1.5rem] leading-[1.2] tracking-[-0.0105em] text-white md:mt-[-0.103125rem] md:right-auto md:font-medium md:left-20 md:text-left md:text-[3rem] md:h-[3.1625rem]"
            >
              Chinaza Icheke
            </Reveal>
            <Reveal
              id="como"
              className="top-1/2 mt-[-2.1875rem] inset-x-0 text-center font-kalnia text-[3.5rem] leading-[1.2] font-medium text-white font-stretch-100% md:mt-[-3.4625rem] md:text-[6rem] md:h-[7.4625rem]"
            >
              COMO
            </Reveal>
            <Reveal
              id="role"
              className="top-1/2 mt-[4.53125rem] inset-x-0 text-center font-helvetica font-normal text-[1.5rem] leading-[1.2] tracking-[-0.0105em] text-[#4d4d4d] md:mt-[0.175rem] md:tracking-[-0.0285em] md:left-auto md:font-medium md:right-[5.0875rem] md:text-left md:text-[2.5rem] md:h-[2.8875rem]"
            >
              Product Designer
            </Reveal>

            <p className="absolute bottom-[1.65625rem] left-6 font-helvetica font-medium text-[1rem] leading-[1.2] tracking-[-0.0056em] text-[#4d4d4d] fade md:bottom-[4.475rem] md:left-20 md:text-[1.5rem]">
              Loading
            </p>
            <Reveal
              id="deus"
              className="top-1/2 mt-[8.40625rem] inset-x-0 text-center font-kalnia text-[3.5rem] leading-[1.2] font-medium text-white font-stretch-100% md:top-auto md:mt-0 md:left-auto md:right-20 md:bottom-[4.81875rem] md:text-left md:text-[6rem]"
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
