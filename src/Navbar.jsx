import musicIcon from "./assets/images/musicIcon.svg";
import Noise from "./noise";

export const Navbar = ({ loaded }) => {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-30 items-start justify-between bg-[#030303] px-20 pt-10">
      <Noise visible={loaded} className="absolute inset-0" />

      <a href="/" aria-label="Home" className="relative">
        <img src="/nazaLogo.svg" alt="Naza" className="size-10" />
      </a>

      <div className="relative flex h-10 items-center">
        <p className="font-mono text-[16px] leading-none tracking-widest text-[#666666]">
          MUSIC <span className="text-white">ON</span>
        </p>
        <button type="button" aria-label="Toggle music" className="ml-6 size-10 rounded-full">
          <img src={musicIcon} alt="" className="size-10" />
        </button>
        <a
          href="#contact"
          className="ml-5.5 flex h-10 w-32.25 items-center justify-center rounded-full bg-[#e85626] pt-0.75 font-helvetica text-[17px] font-medium leading-none text-white shadow-[inset_0_4px_4px_rgba(255,255,255,0.11),inset_0_-4px_1px_rgba(0,0,0,0.13)]"
        >
          Let’s Chat
        </a>
        <button
          type="button"
          aria-label="Open menu"
          className="ml-4 flex size-10 flex-col items-center justify-center gap-1 rounded-full bg-[#333333] shadow-[inset_0_4px_4px_rgba(255,255,255,0.11),inset_0_-4px_1px_rgba(0,0,0,0.13)]"
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
