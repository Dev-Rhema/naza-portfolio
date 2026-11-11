import { useState } from "react";
import musicIcon from "./assets/images/musicIcon.svg";
import Button from "./Button";
import Menu from "./Menu";
import Hamburger from "./Hamburger";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-40 flex h-30 items-start justify-between px-6 pt-8 md:px-20 md:pt-10">
      <a href="/" aria-label="Home">
        <img src="/nazaLogo.png" alt="Naza" className="size-10 md:size-12" />
      </a>

      <div className="flex h-10 items-center md:h-12">
        <p className="hidden font-mono text-[1rem] leading-none tracking-widest text-[#666666] md:block">
          MUSIC <span className="text-white">ON</span>
        </p>
        <button type="button" aria-label="Toggle music" className="size-10 rounded-full md:ml-6 md:size-12">
          <img src={musicIcon} alt="" className="size-10 md:size-12" />
        </button>
        <div className="hidden md:block">
          <Button href="#contact" className="ml-5.5">
            Let’s Chat
          </Button>
        </div>
        <Hamburger onClick={() => setOpen(true)} className="ml-4" />
      </div>
      {open && <Menu onClose={() => setOpen(false)} />}
    </header>
  );
};

export default Navbar;
