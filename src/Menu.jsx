import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { columnCount, createMenuTimeline, createMenuClose } from "./animations";
import Hamburger from "./Hamburger";
import painting from "./assets/images/menuImgs/menuPainting.png";
import crest from "./assets/images/menuImgs/menuCrest.png";
import corner from "./assets/images/corner.png";
import background from "./assets/images/menuImgs/menuBg.png";

gsap.registerPlugin(useGSAP);

const works = ["Taostats", "Ebuka", "Footium", "Vidaio", "Hippius", "Attention Factory"];
const me = ["About Me", "My Games", "My Reads"];

const MenuContent = ({ band }) => (
  <>
    <div className="relative h-full w-[55.5556%] shrink-0">
      <div className="absolute inset-x-0 top-0 h-full overflow-hidden menu-painting">
        <div className="relative h-screen w-full">
          <img src={painting} alt="" className="pointer-events-none size-full object-cover object-top select-none" />
          <img src={corner} alt="" className="pointer-events-none absolute top-0 left-0 w-[6.03125rem] select-none menu-corner" />
          <img src={corner} alt="" className="pointer-events-none absolute top-0 right-0 w-[6.03125rem] -scale-x-100 select-none menu-corner" />
          <img src={corner} alt="" className="pointer-events-none absolute bottom-0 left-0 w-[6.03125rem] -scale-y-100 select-none menu-corner" />
          <img src={corner} alt="" className="pointer-events-none absolute right-0 bottom-0 w-[6.03125rem] rotate-180 select-none menu-corner" />
        </div>
      </div>
      <img
        src={crest}
        alt=""
        className="pointer-events-none absolute top-1/2 left-1/2 -mt-53.25 -ml-37 w-74 max-w-none select-none menu-crest"
      />
      <div className="absolute bottom-18 left-10 font-helvetica leading-none">
        <p className="overflow-hidden text-[1.5rem] font-normal text-white">
          <span className="block menu-caption">The Coronation of the Virgin</span>
        </p>
        <p className="mt-4 overflow-hidden whitespace-pre text-[1rem] font-normal text-[#999999]">
          <span className="block menu-caption">Diego Velázquez  1641-1644</span>
        </p>
      </div>
    </div>

    <div className="relative flex flex-1 flex-col">
      <nav className="min-h-0 flex-1 overflow-y-auto pt-25 font-helvetica">
        <p className="overflow-hidden pl-10 font-mono text-[1rem] leading-none tracking-[0.1875rem] text-[#666666]">
          <span className="block menu-label">WORKS</span>
        </p>
        <ul className="mt-3 text-[2rem] font-normal leading-13 text-white">
          {works.map((item) => (
            <li key={item} onMouseEnter={(e) => band(e, 1)} onMouseLeave={(e) => band(e, 0)} className="relative overflow-hidden">
              <span className="absolute inset-x-0 inset-y-[0.11em] origin-bottom bg-[#e85626] [transform:scaleY(0)]" />
              <a href="#" className="relative block pl-10 menu-item">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-11 overflow-hidden pl-10 font-mono text-[1rem] leading-none tracking-[0.1875rem] text-[#666666]">
          <span className="block menu-label">ME</span>
        </p>
        <ul className="mt-3 text-[2rem] font-normal leading-13 text-white">
          {me.map((item) => (
            <li key={item} onMouseEnter={(e) => band(e, 1)} onMouseLeave={(e) => band(e, 0)} className="relative overflow-hidden">
              <span className="absolute inset-x-0 inset-y-[0.11em] origin-bottom bg-[#e85626] [transform:scaleY(0)]" />
              <a href="#" className="relative block pl-10 menu-item">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="h-14 shrink-0 overflow-hidden menu-bar">
        <div className="grid h-14 w-[44.4444vw] grid-cols-3 items-center bg-[#030303] px-10 pt-[0.3125rem] font-helvetica text-[1.1875rem] font-medium leading-none tracking-[-0.02em] text-white">
          <a href="#">Twitter/X</a>
          <a href="#" className="text-center">
            LinkedIn
          </a>
          <a href="#" className="text-right">
            Email
          </a>
        </div>
      </div>
    </div>
  </>
);

export const Menu = ({ onClose }) => {
  const root = useRef(null);
  const [closing, setClosing] = useState(false);

  const { contextSafe } = useGSAP(() => {
    createMenuTimeline(root.current);
  });

  useGSAP(
    () => {
      if (closing) createMenuClose(root.current);
    },
    { dependencies: [closing] },
  );

  const band = contextSafe((e, scaleY) => {
    gsap.to(e.currentTarget.firstChild, { scaleY, duration: 0.9, ease: "menuHover", overwrite: true });
  });

  const close = contextSafe(() => {
    setClosing(true);
    gsap.delayedCall(2.1, onClose);
  });

  return createPortal(
    <div ref={root} className="fixed inset-0 z-50">
      <div className={`absolute inset-0 flex ${closing ? "invisible" : ""}`}>
        <div className="absolute inset-0 flex">
          {Array.from({ length: columnCount() }, (_, i) => (
            <div key={i} className="relative h-full flex-1 overflow-hidden">
              <div className="absolute inset-0 origin-top bg-[#e85626] will-change-transform menu-decor" />
              <div className="absolute inset-x-0 top-0 h-full overflow-hidden menu-slice">
                <img
                  src={background}
                  alt=""
                  className="pointer-events-none absolute top-0 left-0 h-screen w-[400%] md:w-[1200%] max-w-none object-cover select-none menu-slice-inner"
                />
              </div>
            </div>
          ))}
        </div>
        <MenuContent band={band} />
      </div>

      {closing && (
        <div className="absolute inset-0 flex">
          {Array.from({ length: columnCount() }, (_, i) => (
            <div key={i} className="relative h-full flex-1 overflow-hidden">
              <div className="absolute inset-0 origin-top bg-[#e85626] menu-close-decor" />
              <div className="absolute inset-x-0 top-0 h-full overflow-hidden menu-close-slice">
                <div className="absolute top-0 left-0 flex h-screen w-[400%] md:w-[1200%] menu-close-inner">
                  <img src={background} alt="" className="pointer-events-none absolute inset-0 size-full object-cover select-none" />
                  <MenuContent band={band} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="absolute top-10 right-20">
        <Hamburger open={!closing} onClick={close} />
      </div>
    </div>,
    document.body,
  );
};

export default Menu;
