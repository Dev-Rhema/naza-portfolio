import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(useGSAP, CustomEase);
CustomEase.create("hamburger", "0.95,0,0.08,1");

export const Hamburger = ({ open = false, onClick, className = "" }) => {
  const root = useRef(null);

  const { contextSafe } = useGSAP(
    () => {
      const [top, middle, bottom] = gsap.utils.toArray(".line", root.current);

      const tl = gsap
        .timeline({ defaults: { ease: "hamburger", overwrite: "auto" } })
        .to([top, middle, bottom], { scaleX: 1, transformOrigin: "50% 50%", duration: 0.3, ease: "power1.out" }, 0);

      if (open) {
        tl.to(top, { y: "0.375rem", duration: 1.1 }, 0)
          .to(bottom, { y: "-0.375rem", duration: 1.1 }, 0)
          .set(middle, { opacity: 0 }, 1)
          .to(top, { rotation: 45, duration: 1.15 }, 1)
          .to(bottom, { rotation: -45, duration: 1.15 }, 1);
      } else {
        tl.to(top, { rotation: 0, duration: 1.15 }, 0)
          .to(bottom, { rotation: 0, duration: 1.15 }, 0)
          .set(middle, { opacity: 1 }, 1)
          .to(top, { y: 0, duration: 1.1 }, 1)
          .to(bottom, { y: 0, duration: 1.1 }, 1);
      }
    },
    { scope: root, dependencies: [open], revertOnUpdate: false },
  );

  const press = contextSafe((button, down) => {
    gsap.to(button, down ? { scale: 0.96, duration: 0.08, ease: "power1.out" } : { scale: 1, duration: 0.13, ease: "power1.inOut" });
  });

  const hover = contextSafe((button) => {
    const lines = button.querySelectorAll(".line");
    if (open || gsap.isTweening(lines)) return;
    const line = { transformOrigin: "0% 50%", duration: 0.725, ease: "circ.inOut", stagger: 0.045 };
    gsap.timeline().to(lines, { scaleX: 0.28, ...line }).to(lines, { scaleX: 1, ...line }, 0.985);
  });

  return (
    <button
      ref={root}
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onClick}
      onMouseEnter={(e) => hover(e.currentTarget)}
      onPointerDown={(e) => press(e.currentTarget, true)}
      onPointerUp={(e) => press(e.currentTarget, false)}
      onPointerLeave={(e) => press(e.currentTarget, false)}
      className={`relative size-10 cursor-pointer md:size-12 rounded-full bg-[#333333] shadow-[inset_0_4px_4px_rgba(255,255,255,0.11),inset_0_-4px_1px_rgba(0,0,0,0.13)] ${className}`}
    >
      <span className="absolute top-1/2 left-1/2 -mt-1.75 -ml-2.5 h-0.5 w-5 md:-ml-2.25 md:w-4.5 rounded-full bg-[#d9d9d9] line" />
      <span className="absolute top-1/2 left-1/2 -mt-px -ml-2.5 h-0.5 w-5 md:-ml-2.25 md:w-4.5 rounded-full bg-[#d9d9d9] line" />
      <span className="absolute top-1/2 left-1/2 mt-1.25 -ml-2.5 h-0.5 w-5 md:-ml-2.25 md:w-4.5 rounded-full bg-[#d9d9d9] line" />
    </button>
  );
};

export default Hamburger;
