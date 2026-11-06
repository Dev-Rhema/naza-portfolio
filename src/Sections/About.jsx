import sectionIcon from "../assets/images/sectionIcon.svg";
import aboutHand from "../assets/images/aboutIcons/aboutHand.svg";
import aboutTorch from "../assets/images/aboutIcons/aboutTorch.svg";
import aboutUser from "../assets/images/aboutIcons/aboutUser.svg";

export function About() {
  return (
    <section className="relative px-20 py-22">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-34 bg-linear-to-b from-[#030303] to-transparent" />

      <p className="flex items-center gap-2 font-helvetica text-[16px] font-medium leading-none tracking-[-0.04em] text-white">
        <img src={sectionIcon} alt="" className="size-4.5" />
        <span className="pt-0.5">ABOUT ME</span>
      </p>

      <h2 className="isolate mt-6 font-helvetica text-[48px] font-normal leading-[1.2] tracking-[-0.04em] text-white">
        Design is an avenue to create memories{" "}
        <span className="relative mr-[4.5px] ml-1.75 inline-block size-12 align-middle">
          <img src={aboutHand} alt="" className="absolute -top-2 -left-58.75 -z-10 max-w-none" />
        </span>{" "}
        and for 7 years I have always searched{" "}
        <span className="relative mr-[4.5px] ml-1.75 inline-block size-12 align-middle">
          <img src={aboutTorch} alt="" className="absolute -top-2 -left-58.75 -z-10 max-w-none" />
        </span>{" "}
        for ways to create not just interfaces but wholesome experiences for users{" "}
        <span className="relative mr-[4.5px] ml-1.75 inline-block size-12 align-middle">
          <img src={aboutUser} alt="" className="absolute -top-2 -left-58.75 -z-10 max-w-none" />
        </span>
      </h2>

      <div className="mt-12 flex items-end justify-between">
        <a
          href="#about"
          className="flex h-10 w-32.25 items-center justify-center rounded-full bg-[#e85626] pt-0.75 font-helvetica text-[17px] font-medium leading-none text-white shadow-[inset_0_4px_4px_rgba(255,255,255,0.11),inset_0_-4px_1px_rgba(0,0,0,0.13)]"
        >
          About Me
        </a>
        <p className="mb-[-5.5px] w-120 font-helvetica text-[16px] leading-4.75 tracking-[-0.04em] text-[#7d7d7d]">
          With experience in designing for various sectors, I am able to provide solutions that are adaptable. The sectors I have worked in include{" "}
          <span className="text-white">blockchain</span>, <span className="text-white">security</span>,{" "}
          <span className="text-white">gaming</span> and <span className="text-white">more</span>
        </p>
      </div>
    </section>
  );
}

export default About;
