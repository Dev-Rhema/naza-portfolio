import musicIcon from "./assets/images/musicIcon.svg";

export const Navbar = () => {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex h-[96px] items-end justify-between px-[80px]">
      <a href="/" aria-label="Home" className="pointer-events-auto">
        <img src="/nazaLogo.svg" alt="Naza" className="size-[56px]" />
      </a>

      <div className="pointer-events-auto flex h-[56px] items-center">
        <p className="font-mono text-[16px] leading-none tracking-[0.1em] text-[#666666]">
          MUSIC <span className="text-white">ON</span>
        </p>
        <button type="button" aria-label="Toggle music" className="ml-[24px] size-[52px] rounded-full">
          <img src={musicIcon} alt="" className="size-[52px]" />
        </button>
        <a
          href="#contact"
          className="ml-[22px] flex h-[52px] w-[161px] items-center justify-center rounded-full bg-[#e85626] pt-[3px] font-helvetica text-[17px] font-medium leading-none text-white shadow-[inset_0_4px_4px_rgba(255,255,255,0.11),inset_0_-4px_1px_rgba(0,0,0,0.13)]"
        >
          Let’s Chat
        </a>
        <button
          type="button"
          aria-label="Open menu"
          className="ml-[16px] flex size-[52px] flex-col items-center justify-center gap-[4.75px] rounded-full bg-[#333333] shadow-[inset_0_4px_4px_rgba(255,255,255,0.11),inset_0_-4px_1px_rgba(0,0,0,0.13)]"
        >
          <span className="h-[3px] w-[24px] rounded-full bg-[#d9d9d9]" />
          <span className="h-[3px] w-[24px] rounded-full bg-[#d9d9d9]" />
          <span className="h-[3px] w-[24px] rounded-full bg-[#d9d9d9]" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
