import { createPortal } from "react-dom";
import painting from "./assets/images/menuImgs/menuPainting.png";
import crest from "./assets/images/menuImgs/menuCrest.png";
import cornerTL from "./assets/images/menuImgs/menuCornerTL.png";
import cornerTR from "./assets/images/menuImgs/menuCornerTR.png";
import cornerBL from "./assets/images/menuImgs/menuCornerBL.png";
import cornerBR from "./assets/images/menuImgs/menuCornerBR.png";
import background from "./assets/images/menuImgs/menuBg.png";

const works = ["Taostats", "Ebuka", "Footium", "Vidaio", "Hippius", "Attention Factory"];
const me = ["About Me", "My Games", "My Reads"];

export const Menu = ({ onClose }) =>
  createPortal(
    <div className="fixed inset-0 z-50 flex bg-[#141414]">
      <img src={background} alt="" className="pointer-events-none absolute inset-0 size-full object-cover select-none" />

      <div className="relative h-full w-[55.5556%] shrink-0">
        <img src={painting} alt="" className="pointer-events-none size-full object-cover select-none" />
        <img src={cornerTL} alt="" className="pointer-events-none absolute top-0 left-0 w-25 select-none" />
        <img src={cornerTR} alt="" className="pointer-events-none absolute top-0 right-0 w-25 select-none" />
        <img src={cornerBL} alt="" className="pointer-events-none absolute bottom-0 left-0 w-25 select-none" />
        <img src={cornerBR} alt="" className="pointer-events-none absolute right-0 bottom-0 w-25 select-none" />
        <img src={crest} alt="" className="pointer-events-none absolute top-1/2 left-1/2 -mt-53.25 -ml-37 w-74 max-w-none select-none" />
        <div className="absolute bottom-18 left-10 font-helvetica leading-none">
          <p className="text-[24px] font-normal text-white">The Coronation of the Virgin</p>
          <p className="mt-4 whitespace-pre text-[16px] font-normal text-[#999999]">Diego Velázquez  1641-1644</p>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col">
        <nav className="min-h-0 flex-1 overflow-y-auto pt-25 pl-10 font-helvetica">
          <p className="font-mono text-[16px] leading-none tracking-[3px] text-[#666666]">WORKS</p>
          <ul className="mt-2 text-[40px] font-normal leading-16.5 text-white">
            {works.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
          <p className="mt-10 font-mono text-[16px] leading-none tracking-[3px] text-[#666666]">ME</p>
          <ul className="mt-2 text-[40px] font-normal leading-16.5 text-white">
            {me.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="grid h-14 shrink-0 grid-cols-3 items-center bg-[#030303] px-10 pt-[5px] font-helvetica text-[19px] font-medium leading-none tracking-[-0.02em] text-white">
          <a href="#">Twitter/X</a>
          <a href="#" className="text-center">
            LinkedIn
          </a>
          <a href="#" className="text-right">
            Email
          </a>
        </div>

        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="absolute top-10.5 right-20 flex size-13 items-center justify-center rounded-full bg-[#333333] shadow-[inset_0_4px_4px_rgba(255,255,255,0.11),inset_0_-4px_1px_rgba(0,0,0,0.13)]"
        >
          <span className="absolute h-px w-4 rotate-45 rounded-full bg-white" />
          <span className="absolute h-px w-4 -rotate-45 rounded-full bg-white" />
        </button>
      </div>
    </div>,
    document.body,
  );

export default Menu;
