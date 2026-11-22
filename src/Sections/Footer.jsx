import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../Button";
import saint1 from "../assets/images/footerImgs/saint1.png?format=webp&lossless=true";
import saint2 from "../assets/images/footerImgs/saint2.png?format=webp&lossless=true";
import saint3 from "../assets/images/footerImgs/saint3.png?format=webp&lossless=true";
import cross from "../assets/images/footerImgs/cross.png?format=webp&lossless=true";
import saint4 from "../assets/images/footerImgs/saint4.png?format=webp&lossless=true";
import saint5 from "../assets/images/footerImgs/saint5.png?format=webp&lossless=true";
import saint6 from "../assets/images/footerImgs/saint6.png?format=webp&lossless=true";
import nazaSitting from "../assets/images/footerImgs/NazaSitting.webp";
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
const saints = [saint1, saint2, saint3, saint4, saint5, saint6];
const left = Math.floor(Math.random() * saints.length);
const right = (left + 1 + Math.floor(Math.random() * (saints.length - 1))) % saints.length;

export function Footer() {
  const { contextSafe } = useGSAP();

  const glow = contextSafe((e, on) => {
    if (e.pointerType !== "mouse" || !matchMedia("(hover: hover) and (min-width: 768px)").matches) return;
    const [image, label] = e.currentTarget.children;
    gsap.to(image, { opacity: on ? 1 : 0.45, duration: 0.4, ease: "power2.out", overwrite: true });
    gsap.to(label, { autoAlpha: on ? 1 : 0, duration: 0.3, ease: "power2.out", overwrite: true });
  });

  return (
    <footer className="relative h-234.5 overflow-hidden px-6 pt-8 md:h-190.75 md:px-20 md:pt-[2.53125rem]">
      <div className="absolute top-42 left-1/2 -ml-160.5 hidden w-321.75 items-end gap-4 select-none md:flex">
        {windows.map(({ src, name }) => (
          <div key={name} onPointerEnter={(e) => glow(e, true)} onPointerLeave={(e) => glow(e, false)} className={`relative ${src === cross ? "w-53.25" : "w-40.75"}`}>
            <img src={src} alt={name} loading="lazy" decoding="async" className="w-full opacity-45" />
            <span className="pointer-events-none invisible absolute bottom-full left-1/2 mb-2.75 -translate-x-1/2 flex h-10.5 items-center rounded-full bg-[#1f1f1f] px-5 font-helvetica text-[0.875rem] leading-none whitespace-nowrap text-white opacity-0 shadow-button">
              {name}
            </span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute top-[23.85625rem] left-[0.3rem] flex h-[19.27rem] w-105.5 items-end gap-[0.734rem] overflow-hidden pl-[0.367rem] opacity-45 select-none md:hidden">
        <img src={saints[left]} alt="" loading="lazy" decoding="async" className="w-[7.477rem] shrink-0" />
        <img src={cross} alt="" loading="lazy" decoding="async" className="w-[9.769rem] shrink-0" />
        <img src={saints[right]} alt="" loading="lazy" decoding="async" className="w-[7.477rem] shrink-0" />
      </div>
      <img
        loading="lazy"
        src={nazaSitting}
        alt=""
        className="pointer-events-none absolute top-144 left-9 w-83 max-w-none select-none md:top-[23.34375rem] md:left-1/2 md:-ml-63.25 md:w-114.25"
      />

      <div className="relative">
        <h2 className="font-helvetica text-[2rem] font-normal leading-[1.1] tracking-[-0.04em] text-white">
          Let us make something
          <br />
          that outlives us
        </h2>
        <div className="mt-[1.44375rem] flex items-center gap-4 md:mt-5.75">
          <Button href="#contact">Book a Call</Button>
          {socials
            .filter((social) => social.icon)
            .map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="flex size-11.5 items-center justify-center rounded-full bg-[#1f1f1f] shadow-button"
              >
                <svg viewBox="0 0 24 24" className="size-4.25 fill-white">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
        </div>

        <div className="mt-[2.425rem] flex font-helvetica leading-none tracking-[-0.04em] md:absolute md:top-[-0.28125rem] md:right-0 md:mt-0">
          <div className="w-34">
            <p className="text-[0.875rem] font-normal text-[#4f4f4f] md:text-[1rem]">Works</p>
            <ul className="mt-[1.1375rem] flex flex-col gap-4.25 text-[1rem] font-medium text-white md:mt-5 md:text-[1.125rem]">
              {works
                .filter((work) => work.footer)
                .map((work) => (
                  <li key={work.name} className="last:hidden md:last:block">
                    <a href={work.href}>{work.name}</a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="md:w-22">
            <p className="text-[0.875rem] font-normal text-[#4f4f4f] md:text-[1rem]">Me</p>
            <ul className="mt-[1.1375rem] flex flex-col gap-4.25 text-[1rem] font-medium text-white md:mt-5 md:text-[1.125rem]">
              {me.map((item) => (
                <li key={item.name}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-6 bottom-9 flex flex-col gap-y-3 font-helvetica text-[0.875rem] leading-none tracking-[-0.04em] md:inset-x-20 md:bottom-[2.71875rem] md:flex-row md:items-end md:justify-between md:gap-0 md:text-[1rem]">
        <div className="flex gap-6 md:gap-0">
          <div>
            <p className="font-normal text-[#4f4f4f] md:text-[1rem]">
              Built by
            </p>
            <p className="mt-3 font-medium text-white md:mt-[0.73125rem] md:text-[1.125rem]">
              Rhema
            </p>
          </div>
          <div className="md:ml-[2.34375rem]">
            <p className="font-normal text-[#4f4f4f] md:text-[1rem]">
              3D art by
            </p>
            <p className="mt-3 font-medium text-white md:mt-[0.73125rem] md:text-[1.125rem]">
              Kewve
            </p>
          </div>
        </div>
        <div className="flex gap-6 md:contents">
          <div className="w-20.25 whitespace-nowrap md:mr-auto md:ml-[2.09375rem] md:w-auto">
            <p className="font-normal text-[#4f4f4f] md:text-[1rem]">
              Illustrations by
            </p>
            <p className="mt-3 font-medium text-white md:mt-[0.73125rem] md:text-[1.125rem]">
              Rhema, Omolade
            </p>
          </div>
          <div className="text-right">
            <p className="font-normal text-[#4f4f4f] md:text-[1rem]">
              Stained Glass Illustrations From
            </p>
            <p className="mt-3 font-medium text-white md:mt-[0.73125rem] md:text-[1.125rem]">
              Stained Glass Inc
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
