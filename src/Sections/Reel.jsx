import sectionIcon from "../assets/images/sectionIcon.svg";
import painting from "../assets/images/reelPainting.png";
import cornerTL from "../assets/images/reelCornerTL.png";
import cornerTR from "../assets/images/reelCornerTR.png";
import cornerBL from "../assets/images/reelCornerBL.png";
import cornerBR from "../assets/images/reelCornerBR.png";

export function Reel() {
  return (
    <section className="px-6 py-10 md:px-20 md:py-22">
      <p className="flex items-center justify-center gap-1.75 font-helvetica text-[0.875rem] font-medium md:gap-2 md:text-[1rem] leading-none tracking-[-0.04em] text-white">
        <img src={sectionIcon} alt="" className="size-4 md:size-4.5" />
        <span className="pt-0.5">A DRAMATIC PRODUCT REEL</span>
      </p>

      <div className="relative mt-4 aspect-392/335 md:mt-8 md:aspect-1280/725">
        <img src={painting} alt="" className="pointer-events-none absolute inset-0 size-full object-cover select-none" />
        <img src={cornerTL} alt="" className="pointer-events-none absolute top-0 left-0 w-10 select-none md:w-14" />
        <img src={cornerTR} alt="" className="pointer-events-none absolute top-0 right-0 w-10 select-none md:w-14" />
        <img src={cornerBL} alt="" className="pointer-events-none absolute bottom-0 left-0 w-10 select-none md:w-14" />
        <img src={cornerBR} alt="" className="pointer-events-none absolute right-0 bottom-0 w-10 select-none md:w-14" />
        <div className="absolute inset-x-[1.0625rem] top-10 bottom-10 flex items-center justify-center rounded-2xl border border-white/25 bg-[#030303] md:inset-x-14 md:top-13 md:bottom-14.25 md:rounded-xl">
          <button
            type="button"
            aria-label="Play reel"
            className="flex size-14 items-center justify-center rounded-full border border-white/25 bg-linear-to-b from-[#4c4c4c] to-[#0c0c0c]"
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-white">
              <svg viewBox="0 0 24 24" className="ml-px size-4">
                <path
                  d="M6 4.5v15l13-7.5z"
                  fill="#0a0a0a"
                  stroke="#0a0a0a"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Reel;
