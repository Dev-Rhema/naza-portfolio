import Button from "../Button";
import glass from "../assets/images/footerImgs/glass.webp";
import glassMobile from "../assets/images/footerImgs/glassMobile.webp";
import reflection from "../assets/images/footerImgs/reflection.webp";
import nazaSitting from "../assets/images/footerImgs/NazaSitting.webp";
import { works, me, socials } from "../data";

export function Footer() {
  return (
    <footer className="relative h-234.5 overflow-hidden px-6 pt-8 md:h-181.75 md:px-20 md:pt-[2.53125rem]">
      <img
        loading="lazy"
        src={reflection}
        alt=""
        className="pointer-events-none absolute top-75 left-1/2 -ml-180 hidden w-360 max-w-none select-none md:block"
      />
      <img
        loading="lazy"
        src={glass}
        alt=""
        className="pointer-events-none absolute top-33 left-1/2 -ml-160.5 hidden w-321.75 max-w-none opacity-45 select-none md:block"
      />
      <img
        loading="lazy"
        src={glassMobile}
        alt=""
        className="pointer-events-none absolute top-[23.85625rem] left-[0.3rem] w-105.5 max-w-none opacity-45 select-none md:hidden"
      />
      <img
        loading="lazy"
        src={nazaSitting}
        alt=""
        className="pointer-events-none absolute top-144 left-9 w-83 max-w-none select-none md:top-[21.09375rem] md:left-1/2 md:-ml-63.25 md:w-114.25"
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
