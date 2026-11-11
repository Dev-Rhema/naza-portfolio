import { useState } from "react";
import musicIcon from "./assets/images/musicIcon.svg";
import Button from "./Button";
import Menu from "./Menu";
import Hamburger from "./Hamburger";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40 flex h-30 items-start justify-between px-20 pt-10">
      <a href="/" aria-label="Home">
        <img src="/nazaLogo.png" alt="Naza" className="size-12" />
      </a>

      <div className="flex h-12 items-center">
        <p className="font-mono text-[16px] leading-none tracking-widest text-[#666666]">
          MUSIC <span className="text-white">ON</span>
        </p>
        <button type="button" aria-label="Toggle music" className="ml-6 size-12 rounded-full">
          <img src={musicIcon} alt="" className="size-12" />
        </button>
        <Button href="#contact" className="ml-5.5">
          Let’s Chat
        </Button>
        <Hamburger onClick={() => setOpen(true)} className="ml-4" />
      </div>
      {open && <Menu onClose={() => setOpen(false)} />}
    </header>
  );
};

export default Navbar;
