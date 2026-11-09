import sectionIcon from "../assets/images/sectionIcon.svg";
import videoContainer from "../assets/images/VideoContainer.png";

export function Reel() {
  return (
    <section className="px-20 py-22">
      <p className="flex items-center justify-center gap-2 font-helvetica text-[16px] font-medium leading-none tracking-[-0.04em] text-white">
        <img src={sectionIcon} alt="" className="size-4.5" />
        <span className="pt-0.5">A DRAMATIC PRODUCT REEL</span>
      </p>

      <div className="relative mt-8">
        <img src={videoContainer} alt="" className="aspect-1280/725 w-full" />
        <div className="absolute inset-x-14 top-13 bottom-14.25 flex items-center justify-center rounded-xl border border-white/25 bg-[#030303]">
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
