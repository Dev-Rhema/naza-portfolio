import Button from "../Button";
import sectionIcon from "../assets/images/sectionIcon.svg";
import aboutHand from "../assets/images/aboutIcons/aboutHand.png";
import aboutTorch from "../assets/images/aboutIcons/aboutTorch.png";
import aboutUser from "../assets/images/aboutIcons/aboutUser.png";

export function About() {
  return (
    <section className="relative px-6 pt-10 pb-[2.3125rem] md:px-20 md:py-22">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-34 bg-linear-to-b from-[#030303] to-transparent" />

      <p className="flex items-center gap-1.75 font-helvetica text-[0.875rem] font-medium md:gap-2 md:text-[1rem] leading-none tracking-[-0.04em] text-white">
        <img src={sectionIcon} alt="" className="size-4 md:size-4.5" />
        <span className="pt-0.5">ABOUT ME</span>
      </p>

      <h2 className="isolate mt-[1.03125rem] font-helvetica text-[2rem] font-normal md:mt-6 md:text-[3rem] leading-[1.2] tracking-[-0.04em] text-white">
        Design is an avenue to create memories{" "}
        <span className="relative mr-px ml-0.5 inline-block size-10 align-middle md:mr-[0.28125rem] md:ml-1.75 md:size-12">
          <img src={aboutHand} alt="" className="pointer-events-none absolute -top-[0.41667rem] -left-[12.23958rem] -z-10 w-[26.97917rem] max-w-none select-none md:-top-2 md:-left-58.75 md:w-129.5" />
        </span>{" "}
        and for 7 years I have always searched{" "}
        <span className="relative mr-px ml-0.5 inline-block size-10 align-middle md:mr-[0.28125rem] md:ml-1.75 md:size-12">
          <img src={aboutTorch} alt="" className="pointer-events-none absolute -top-[0.41667rem] -left-[12.23958rem] -z-10 w-[26.97917rem] max-w-none select-none md:-top-2 md:-left-58.75 md:w-129.5" />
        </span>{" "}
        for ways to create not just interfaces but wholesome experiences for users{" "}
        <span className="relative mr-px ml-0.5 inline-block size-10 align-middle md:mr-[0.28125rem] md:ml-1.75 md:size-12">
          <img src={aboutUser} alt="" className="pointer-events-none absolute -top-[0.41667rem] -left-[12.23958rem] -z-10 w-[26.97917rem] max-w-none select-none md:-top-2 md:-left-58.75 md:w-129.5" />
        </span>
      </h2>

      <div className="mt-[1.78125rem] flex flex-col-reverse items-start gap-[1.65625rem] md:mt-12 md:flex-row md:items-end md:justify-between md:gap-0">
        <Button href="#about">About Me</Button>
        <p className="font-helvetica text-[0.875rem] leading-[1.0625rem] md:mb-[-0.34375rem] md:w-120 md:text-[1rem] md:leading-4.75 tracking-[-0.04em] text-[#7d7d7d]">
          With experience in designing for various sectors, I am able to provide solutions that are adaptable. The sectors I have worked in include{" "}
          <span className="text-white">blockchain</span>, <span className="text-white">security</span>,{" "}
          <span className="text-white">gaming</span> and <span className="text-white">more</span>
        </p>
      </div>
    </section>
  );
}

export default About;
