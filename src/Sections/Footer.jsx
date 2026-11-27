import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button";
import Wipe from "../Wipe";
import { createWipe, underline } from "../animations";
import saint1 from "../assets/images/footerImgs/saint1.png?format=webp&lossless=true";
import saint2 from "../assets/images/footerImgs/saint2.png?format=webp&lossless=true";
import saint3 from "../assets/images/footerImgs/saint3.png?format=webp&lossless=true";
import cross from "../assets/images/footerImgs/cross.png?format=webp&lossless=true";
import saint4 from "../assets/images/footerImgs/saint4.png?format=webp&lossless=true";
import saint5 from "../assets/images/footerImgs/saint5.png?format=webp&lossless=true";
import saint6 from "../assets/images/footerImgs/saint6.png?format=webp&lossless=true";
import body from "../assets/images/footerImgs/body.svg";
import head from "../assets/images/footerImgs/head.svg";
import bookCover from "../assets/images/footerImgs/bookCover.jpg?w=80&format=webp";
import musicCover from "../assets/images/footerImgs/musicCover.jpg?w=80&format=webp";
import { works, me, socials } from "../data";

const windows = [
  { src: saint1, name: "Saint Andrew" },
  { src: saint2, name: "Saint Anthony" },
  { src: saint3, name: "Saint Michael" },
  { src: cross, name: "Son of The Father" },
  { src: saint4, name: "Saint Rita" },
  { src: saint5, name: "Saint John Paul II" },
  { src: saint6, name: "Saint Agatha" },
];
const saints = windows.filter((saint) => saint.src !== cross);
const left = Math.floor(Math.random() * saints.length);
const right = (left + 1 + Math.floor(Math.random() * (saints.length - 1))) % saints.length;

const mobileWindows = [saints[left], windows[3], saints[right]];
const fades = [0, 0.06, 0.11, 0.17];

const Credit = ({ label, name, right = false, className = "" }) => (
  <div className={className}>
    <Wipe delay={0.07} className={`relative w-max ${right ? "ml-auto" : ""}`}>
      <p className="font-normal text-[#4f4f4f] md:text-[1rem] 2xl:text-[1.25rem]">{label}</p>
    </Wipe>
    <Wipe delay={0.07} className={`relative mt-3 w-max md:mt-[0.73125rem] ${right ? "ml-auto" : ""}`}>
      <p className="font-medium text-white md:text-[1.125rem] 2xl:text-[1.40625rem]">{name}</p>
    </Wipe>
  </div>
);

export function Footer() {
  const active = useRef(null);
  const footer = useRef(null);
  const { contextSafe } = useGSAP(() => {
    const reveal = createWipe(gsap.utils.toArray(".wipe", footer.current))
      .fromTo("[data-fade]", { opacity: 0.001 }, { opacity: 1, duration: 0.9, ease: "archFade", delay: (i, el) => +el.dataset.fade, clearProps: "opacity" }, 0)
      .pause();
    ScrollTrigger.create({ trigger: footer.current, start: "top 80%", once: true, onEnter: () => reveal.play() });
    gsap.set(".card", { y: "0.375rem" });
    gsap.set([".sway", ".head"], { transformOrigin: "95.38% 78.31%" });
    gsap
      .timeline({ repeat: -1, repeatRefresh: true })
      .to(".head", { rotation: () => gsap.utils.random(-4, -2.2), duration: () => gsap.utils.random(0.3, 0.38), ease: "sine.inOut" })
      .to(".head", { rotation: () => gsap.utils.random(-0.4, 0.3), duration: () => gsap.utils.random(0.38, 0.46), ease: "sine.inOut" });
    gsap.to(".sway", { rotation: -1.2, duration: 2.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
  }, { scope: footer });

  const show = contextSafe((key) => {
    gsap.to("[data-show]", { autoAlpha: (i, el) => (el.dataset.show === key ? 1 : 0), duration: 0.3, ease: "power2.out", overwrite: true });
    gsap.to(".card", { y: (i, el) => (el.dataset.show === key ? 0 : "0.375rem"), duration: 0.3, ease: "power2.out" });
    gsap.to("[data-glow]", { opacity: (i, el) => (el.dataset.glow === key ? 1 : 0.45), duration: 0.4, ease: "power2.out", overwrite: true });
  });

  const pick = (key) => {
    active.current = key;
    show(key);
  };

  const hover = (e, key) => {
    if (e.pointerType === "mouse") pick(key);
  };

  const tap = (e, key) => {
    if (e.pointerType === "mouse") return;
    e.stopPropagation();
    pick(active.current === key ? null : key);
  };

  return (
    <footer ref={footer} onPointerUp={(e) => e.pointerType !== "mouse" && active.current && pick(null)} className="relative h-234.5 overflow-hidden px-6 pt-8 md:h-190.75 2xl:h-228 md:px-20 md:pt-[2.53125rem]">
      <div className="absolute top-42 left-1/2 -ml-160.5 hidden w-321.75 items-end gap-4 select-none md:flex 2xl:origin-top 2xl:scale-125">
        {windows.map(({ src, name }, i) => (
          <div key={name} data-fade={fades[Math.abs(i - 3)]} onPointerEnter={(e) => hover(e, name)} onPointerLeave={(e) => hover(e, null)} onPointerUp={(e) => tap(e, name)} className={`relative ${src === cross ? "w-53.25" : "w-40.75"}`}>
            <img src={src} alt={name} data-glow={name} loading="lazy" decoding="async" className="w-full opacity-45" />
            <span data-show={name} className="pointer-events-none invisible absolute bottom-full left-1/2 mb-2.75 -translate-x-1/2 flex h-7.5 items-center rounded-full bg-[#141414] px-3.5 pt-1 font-helvetica text-[0.875rem] font-normal leading-none whitespace-nowrap text-white opacity-0">
              {name}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute top-[23.85625rem] left-[0.3rem] flex h-[19.27rem] w-105.5 items-end gap-[0.734rem] overflow-x-clip pl-[0.367rem] select-none md:hidden">
        {mobileWindows.map(({ src, name }, i) => (
          <div key={name} data-fade={fades[Math.abs(i - 1)]} onPointerUp={(e) => tap(e, `mobile ${name}`)} className={`relative shrink-0 ${src === cross ? "w-[9.769rem]" : "w-[7.477rem]"}`}>
            <img src={src} alt={name} data-glow={`mobile ${name}`} loading="lazy" decoding="async" className="w-full opacity-45" />
            <span data-show={`mobile ${name}`} className="pointer-events-none invisible absolute bottom-full left-1/2 mb-2.75 -translate-x-1/2 flex h-7.5 items-center rounded-full bg-[#141414] px-3.5 pt-1 font-helvetica text-[0.875rem] font-normal leading-none whitespace-nowrap text-white opacity-0 2xl:text-[1.09375rem]">
              {name}
            </span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute top-144 left-9 aspect-914/780 w-83 select-none md:top-[23.34375rem] md:left-1/2 md:-ml-63.25 md:w-114.25 2xl:origin-[15.8125rem_-12.84375rem] 2xl:scale-125">
        <div data-fade={0.25} className="absolute inset-0 mask-[linear-gradient(to_bottom,black_60.9%,transparent_90%)]">
          <div className="absolute top-0 left-[66.41%] w-[19.756%] will-change-transform sway">
            <img loading="lazy" src={head} alt="" className="w-full will-change-transform head" />
          </div>
          <img loading="lazy" src={body} alt="" className="absolute top-[5%] left-[0.219%] w-[99.79%] max-w-none" />
        </div>
        <div
          onPointerEnter={(e) => hover(e, "music")}
          onPointerLeave={(e) => hover(e, null)}
          onPointerUp={(e) => tap(e, "music")}
          className="pointer-events-auto absolute top-0 left-[66.41%] h-[32.3%] w-[19.756%]"
        />
        <div
          onPointerEnter={(e) => hover(e, "book")}
          onPointerLeave={(e) => hover(e, null)}
          onPointerUp={(e) => tap(e, "book")}
          className="pointer-events-auto absolute top-[27.7%] left-[36.3%] h-[22.6%] w-[18.4%]"
        />
        <div data-show="music" className="invisible absolute bottom-[110.3%] left-[69.8%] flex w-max -translate-x-1/2 translate-y-1.5 items-center gap-2.5 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] py-2 pr-2.5 pl-2 font-helvetica leading-none whitespace-nowrap opacity-0 card">
          <img src={musicCover} alt="" className="size-10 rounded-lg" />
          <div>
            <p className="text-[0.875rem] text-white 2xl:text-[1.09375rem]">Fork In The Road</p>
            <p className="mt-2 text-[0.75rem] text-[#7d7d7d] 2xl:text-[0.9375rem]">NOISEMAKER</p>
          </div>
        </div>
        <div data-show="book" className="invisible absolute right-[45.3%] bottom-[69.5%] flex w-max translate-y-1.5 items-center gap-2.5 rounded-xl border border-[#2a2a2a] bg-[#0f0f0f] py-2 pr-2.5 pl-2 font-helvetica leading-none whitespace-nowrap opacity-0 card">
          <img src={bookCover} alt="" className="size-10 rounded-lg" />
          <div>
            <p className="text-[0.875rem] text-white 2xl:text-[1.09375rem]">Assassin’s Apprentice</p>
            <p className="mt-2 text-[0.75rem] text-[#7d7d7d] 2xl:text-[0.9375rem]">Robin Hobb</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <h2 className="font-helvetica text-[2rem] font-normal leading-[1.1] tracking-[-0.04em] text-white 2xl:text-[2.5rem]">
          <Wipe delay={0.07} className="relative w-fit">
            <span>Let us make something</span>
          </Wipe>
          <Wipe delay={0.13} className="relative w-fit">
            <span>that outlives us</span>
          </Wipe>
        </h2>
        <div className="mt-[1.44375rem] flex items-center gap-4 md:mt-5.75">
          <Wipe delay={0.22} className="relative rounded-full">
            <Button href="#contact">Book a Call</Button>
          </Wipe>
          {socials
            .filter((social) => social.icon)
            .map((social) => (
              <Wipe key={social.name} delay={0.28} className="relative rounded-full">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="flex size-11.5 items-center justify-center rounded-full bg-[#1f1f1f] shadow-button 2xl:[zoom:1.25]"
                >
                  <svg viewBox="0 0 24 24" className="size-4.25 fill-white">
                    <path d={social.icon} />
                  </svg>
                </a>
              </Wipe>
            ))}
        </div>

        <div className="mt-[2.425rem] flex font-helvetica leading-none tracking-[-0.04em] md:absolute md:top-[-0.28125rem] md:right-0 md:mt-0">
          <div className="w-34 2xl:w-42.5">
            <Wipe delay={0.07} className="relative w-fit">
              <p className="text-[0.875rem] font-normal text-[#4f4f4f] md:text-[1rem] 2xl:text-[1.25rem]">Works</p>
            </Wipe>
            <ul className="mt-[1.1375rem] flex flex-col gap-4.25 text-[1rem] font-medium text-white md:mt-5 md:text-[1.125rem] 2xl:text-[1.40625rem]">
              {works
                .filter((work) => work.footer)
                .map((work, i) => (
                  <li key={work.name} className="last:hidden md:last:block">
                    <Wipe delay={i === 0 ? 0.12 : 0.17} className="relative w-fit">
                      <a href={work.href} onMouseEnter={(e) => underline(e, "100%")} onMouseLeave={(e) => underline(e, "0%")}>
                        <span className="bg-[linear-gradient(white,white)] bg-size-[var(--line)_0.0625rem] bg-position-[0_calc(100%-0.125em)] bg-no-repeat [--line:0%] underline-line">{work.name}</span>
                      </a>
                    </Wipe>
                  </li>
                ))}
            </ul>
          </div>
          <div className="md:w-22 2xl:w-27.5">
            <Wipe delay={0.17} className="relative w-fit">
              <p className="text-[0.875rem] font-normal text-[#4f4f4f] md:text-[1rem] 2xl:text-[1.25rem]">Me</p>
            </Wipe>
            <ul className="mt-[1.1375rem] flex flex-col gap-4.25 text-[1rem] font-medium text-white md:mt-5 md:text-[1.125rem] 2xl:text-[1.40625rem]">
              {me.map((item) => (
                <li key={item.name}>
                  <Wipe delay={0.17} className="relative w-fit">
                    <a href={item.href} onMouseEnter={(e) => underline(e, "100%")} onMouseLeave={(e) => underline(e, "0%")}>
                      <span className="bg-[linear-gradient(white,white)] bg-size-[var(--line)_0.0625rem] bg-position-[0_calc(100%-0.125em)] bg-no-repeat [--line:0%] underline-line">{item.name}</span>
                    </a>
                  </Wipe>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-6 bottom-9 flex flex-col gap-y-3 font-helvetica text-[0.875rem] leading-none tracking-[-0.04em] md:inset-x-20 md:bottom-[2.71875rem] md:flex-row md:items-end md:justify-between md:gap-0 md:text-[1rem] 2xl:text-[1.25rem]">
        <div className="flex gap-6 md:gap-0">
          <Credit label="Built by" name="Rhema" />
          <Credit label="3D art by" name="Kewve" className="md:ml-[2.34375rem]" />
        </div>
        <div className="flex gap-6 md:contents">
          <Credit label="Illustrations by" name="Rhema, Omolade" className="w-20.25 whitespace-nowrap md:mr-auto md:ml-[2.09375rem] md:w-auto" />
          <Credit label="Stained Glass Illustrations From" name="Stained Glass Inc" right className="text-right" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
