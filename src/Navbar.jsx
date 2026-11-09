import musicIcon from "./assets/images/musicIcon.svg";
import Button from "./Button";

export const Navbar = () => {
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
        <button
          type="button"
          aria-label="Open menu"
          className="ml-4 flex size-12 flex-col items-center justify-center gap-1 rounded-full bg-[#333333] shadow-[inset_0_4px_4px_rgba(255,255,255,0.11),inset_0_-4px_1px_rgba(0,0,0,0.13)]"
        >
          <span className="h-0.5 w-4.5 rounded-full bg-[#d9d9d9]" />
          <span className="h-0.5 w-4.5 rounded-full bg-[#d9d9d9]" />
          <span className="h-0.5 w-4.5 rounded-full bg-[#d9d9d9]" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
