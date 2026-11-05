import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import statue from "./assets/images/loaderStatue.webp";
import { createLoaderTimeline } from "./animations";

gsap.registerPlugin(useGSAP);

function Reveal({ id, className, children }) {
  return (
    <div
      className={`absolute -mx-4 overflow-hidden px-4 whitespace-nowrap ${className}`}
    >
      <div className={`will-change-transform ${id}`}>{children}</div>
    </div>
  );
}

export function Loader({ onComplete }) {
  const root = useRef(null);
  const statueRef = useRef(null);

  useGSAP(
    () => {
      const tl = createLoaderTimeline(root.current, { onComplete });
      let cancelled = false;

      Promise.all([
        document.fonts.ready,
        statueRef.current.decode().catch(() => {}),
      ]).then(() => {
        if (!cancelled) requestAnimationFrame(() => !cancelled && tl.play());
      });

      return () => {
        cancelled = true;
      };
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="fixed inset-0 z-50 overflow-hidden bg-[#030303]"
      aria-label="Loading"
      role="status"
    >
      <img
        ref={statueRef}
        src={statue}
        alt=""
        className="pointer-events-none absolute -bottom-1 left-1/2 h-256 w-234.5 max-w-none -translate-x-1/2 opacity-0 select-none will-change-transform statue"
      />

      <Reveal
        id="quem"
        className="top-21.5 left-20 font-kalnia text-[96px] leading-[1.2] font-medium text-white h-29.25 font-stretch-100%"
      >
        QUEM
      </Reveal>
      <p className="absolute top-[80.7px] right-20 font-helvetica text-[24px] leading-[1.2] text-[#4d4d4d] will-change-[opacity] fade">
        <span className="count">0</span>%
      </p>

      <Reveal
        id="name"
        className="top-1/2 mt-[-1.65px] left-20 font-helvetica text-[48px] leading-[1.2] tracking-[-0.0105em] text-white h-[50.6px]"
      >
        Chinaza Icheke
      </Reveal>
      <Reveal
        id="como"
        className="top-1/2 mt-[-55.4px] inset-x-0 text-center font-kalnia text-[96px] leading-[1.2] font-medium text-white h-[119.4px] font-stretch-100%"
      >
        COMO
      </Reveal>
      <Reveal
        id="role"
        className="top-1/2 mt-[2.8px] right-[81.4px] font-helvetica text-[40px] leading-[1.2] tracking-[-0.0285em] text-[#4d4d4d] h-[46.2px]"
      >
        Product Designer
      </Reveal>

      <p className="absolute bottom-[71.6px] left-20 font-helvetica text-[24px] leading-[1.2] tracking-[-0.0056em] text-[#4d4d4d] will-change-[opacity] fade">
        Loading
      </p>
      <Reveal
        id="deus"
        className="right-20 bottom-[77.1px] font-kalnia text-[96px] leading-[1.2] font-medium text-white font-stretch-100%"
      >
        DEUS
      </Reveal>

      <div className="absolute inset-0 flex">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="relative h-full flex-1">
            <div className="absolute inset-0 origin-bottom bg-[#e85626] will-change-transform decor" />
            <div className="absolute inset-y-0 left-0 -right-px origin-bottom bg-[#030303] will-change-transform final" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loader;
