import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export const Button = ({ href, className = "", children }) => {
  const root = useRef(null);
  const { contextSafe } = useGSAP({ scope: root });

  const roll = contextSafe((yPercent) => {
    gsap.to(".char", {
      yPercent,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.03,
      overwrite: true,
    });
  });

  return (
    <a
      ref={root}
      href={href}
      aria-label={children}
      onMouseEnter={() => roll(-100)}
      onMouseLeave={() => roll(0)}
      className={`relative flex h-12 w-32.25 items-center justify-center rounded-full bg-[#e85626] pt-0.75 font-helvetica text-[1.0625rem] font-medium leading-none text-white shadow-[inset_0_4px_4px_rgba(255,255,255,0.11),inset_0_-4px_1px_rgba(0,0,0,0.13)] ${className}`}
    >
      <span aria-hidden="true" className="flex overflow-hidden">
        {[...children].map((char, i) =>
          char === " " ? (
            <span key={i} className="whitespace-pre">
              {" "}
            </span>
          ) : (
            <span
              key={i}
              data-char={char}
              className="char relative will-change-transform after:absolute after:top-full after:left-0 after:content-[attr(data-char)]"
            >
              {char}
            </span>
          ),
        )}
      </span>
    </a>
  );
};

export default Button;
