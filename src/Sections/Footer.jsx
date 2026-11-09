import Button from "../Button";
import Halftone from "../Halftone";
import glass from "../assets/images/footerImgs/glass.png";
import reflection from "../assets/images/footerImgs/reflection.png";
import nazaSitting from "../assets/images/footerImgs/NazaSitting.png";

export function Footer() {
  return (
    <footer className="relative h-[727px] overflow-hidden px-20 pt-[40.5px]">
      <img src={reflection} alt="" className="pointer-events-none absolute top-75 left-1/2 -ml-180 w-360 max-w-none select-none" />
      <img src={glass} alt="" className="pointer-events-none absolute top-33 left-1/2 -ml-160.5 w-321.75 max-w-none opacity-45 select-none" />
      <Halftone src={nazaSitting} width={457} height={390} className="pointer-events-none absolute top-[337.5px] left-1/2 -ml-63.25 h-97.5 w-114.25 max-w-none select-none" />

      <div className="relative">
        <h2 className="font-helvetica text-[32px] font-normal leading-[1.1] tracking-[-0.04em] text-white">
          Let us make something
          <br />
          that outlives us
        </h2>
        <Button href="#contact" className="mt-5.75">
          Book a Call
        </Button>
      </div>

      <div className="absolute top-9.75 right-[81.5px] font-helvetica leading-none tracking-[-0.04em]">
        <p className="text-[16px] font-normal text-[#4f4f4f]">Socials</p>
        <ul className="mt-4.75 flex flex-col gap-4.25 text-[18px] font-medium text-white">
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

      <div className="absolute inset-x-20 bottom-[43.5px] flex items-end justify-between font-helvetica leading-none tracking-[-0.04em]">
        <div className="flex">
          <div>
            <p className="text-[16px] font-normal text-[#4f4f4f]">Built by</p>
            <p className="mt-[11.7px] text-[18px] font-medium text-white">Rhema</p>
          </div>
          <div className="ml-[37.5px]">
            <p className="text-[16px] font-normal text-[#4f4f4f]">3D art by</p>
            <p className="mt-[11.7px] text-[18px] font-medium text-white">Kewve</p>
          </div>
          <div className="ml-[33.5px]">
            <p className="text-[16px] font-normal text-[#4f4f4f]">Illustrations by</p>
            <p className="mt-[11.7px] text-[18px] font-medium text-white">Rhema, Omolade</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[16px] font-normal text-[#4f4f4f]">Stained Glass Illustrations From</p>
          <p className="mt-[11.7px] text-[18px] font-medium text-white">Stained Glass Inc</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
