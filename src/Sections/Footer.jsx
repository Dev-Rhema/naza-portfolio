import Button from "../Button";
import glass from "../assets/images/footerImgs/glass.png";
import glassCenter from "../assets/images/footerImgs/glassCenter.png";
import reflection from "../assets/images/footerImgs/reflection.png";
import nazaSitting from "../assets/images/footerImgs/NazaSitting.png";

export function Footer() {
  return (
    <footer className="relative h-[70.35rem] overflow-hidden px-6 pt-[2.73125rem] md:h-181.75 md:px-20 md:pt-[2.53125rem]">
      <img
        src={reflection}
        alt=""
        className="pointer-events-none absolute top-75 left-1/2 -ml-180 hidden w-360 max-w-none select-none md:block"
      />
      <img
        src={glass}
        alt=""
        className="pointer-events-none absolute top-33 left-1/2 -ml-160.5 hidden w-321.75 max-w-none opacity-45 select-none md:block"
      />
      <img
        src={glassCenter}
        alt=""
        className="pointer-events-none absolute top-[22.2rem] left-1/2 -ml-[7.547rem] w-[15.094rem] max-w-none opacity-45 select-none md:hidden"
      />
      <img
        src={nazaSitting}
        alt=""
        className="pointer-events-none absolute top-[40.6rem] -left-16 w-[27.14rem] max-w-none select-none md:top-[21.09375rem] md:left-1/2 md:-ml-63.25 md:w-114.25"
      />

      <div className="relative">
        <h2 className="font-helvetica text-[2rem] font-normal leading-[1.1] tracking-[-0.04em] text-white">
          Let us make something
          <br />
          that outlives us
        </h2>
        <div className="mt-[1.44375rem] flex items-center gap-4 md:mt-5.75">
          <Button href="#contact">Book a Call</Button>
          <a
            href="#"
            aria-label="X"
            className="flex size-11.5 items-center justify-center rounded-full bg-[#1f1f1f] shadow-[inset_0_4px_4px_rgba(255,255,255,0.11),inset_0_-4px_1px_rgba(0,0,0,0.13)] md:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-4.25 fill-white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex size-11.5 items-center justify-center rounded-full bg-[#1f1f1f] shadow-[inset_0_4px_4px_rgba(255,255,255,0.11),inset_0_-4px_1px_rgba(0,0,0,0.13)] md:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-4.25 fill-white">
              <path d="M5.5 7.5H1v15h4.5zM3.25 1A2.6 2.6 0 0 0 .6 3.6a2.6 2.6 0 0 0 2.65 2.6A2.6 2.6 0 0 0 5.9 3.6 2.6 2.6 0 0 0 3.25 1M23.4 13.9c0-4.1-2.2-6.75-5.7-6.75a5 5 0 0 0-4.45 2.4V7.5H8.9v15h4.5v-7.9c0-2.1.9-3.6 2.85-3.6 1.75 0 2.65 1.25 2.65 3.6v7.9h4.5z" />
            </svg>
          </a>
        </div>

        <div className="mt-[2.425rem] flex font-helvetica leading-none tracking-[-0.04em] md:hidden">
          <div className="w-34">
            <p className="text-[0.875rem] font-normal text-[#4f4f4f]">Works</p>
            <ul className="mt-[1.1375rem] flex flex-col gap-[1.0625rem] text-[1rem] font-medium text-white">
              <li>
                <a href="#">Taostats</a>
              </li>
              <li>
                <a href="#">Footium</a>
              </li>
              <li>
                <a href="#">Vidaio</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[0.875rem] font-normal text-[#4f4f4f]">Me</p>
            <ul className="mt-[1.1375rem] flex flex-col gap-[1.0625rem] text-[1rem] font-medium text-white">
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#">My Games</a>
              </li>
              <li>
                <a href="#">My Books</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute top-9.75 right-[5.09375rem] hidden font-helvetica leading-none tracking-[-0.04em] md:block">
        <p className="text-[1rem] font-normal text-[#4f4f4f]">Socials</p>
        <ul className="mt-4.75 flex flex-col gap-4.25 text-[1.125rem] font-medium text-white">
          <li>
            <a href="#">Twitter/X</a>
          </li>
          <li>
            <a href="#">LinkedIn</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
        </ul>
      </div>

      <div className="absolute inset-x-6 bottom-[2.0625rem] flex flex-wrap gap-x-6 font-helvetica text-[0.875rem] leading-none tracking-[-0.04em] md:inset-x-20 md:text-[1rem] md:bottom-[2.71875rem] md:flex-nowrap md:items-end md:justify-between md:gap-0">
        <div className="contents md:flex">
          <div>
            <p className="font-normal text-[#4f4f4f] md:text-[1rem]">Built by</p>
            <p className="mt-3 font-medium text-white md:mt-[0.73125rem] md:text-[1.125rem]">Rhema</p>
          </div>
          <div className="md:ml-[2.34375rem]">
            <p className="font-normal text-[#4f4f4f] md:text-[1rem]">3D art by</p>
            <p className="mt-3 font-medium text-white md:mt-[0.73125rem] md:text-[1.125rem]">Kewve</p>
          </div>
          <div className="basis-full md:hidden" />
          <div className="mt-3 w-[5.0625rem] whitespace-nowrap md:mt-0 md:ml-[2.09375rem] md:w-auto">
            <p className="font-normal text-[#4f4f4f] md:text-[1rem]">Illustrations by</p>
            <p className="mt-3 font-medium text-white md:mt-[0.73125rem] md:text-[1.125rem]">Rhema, Omolade</p>
          </div>
        </div>
        <div className="mt-3 text-right md:mt-0">
          <p className="font-normal text-[#4f4f4f] md:text-[1rem]">Stained Glass Illustrations From</p>
          <p className="mt-3 font-medium text-white md:mt-[0.73125rem] md:text-[1.125rem]">Stained Glass Inc</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
