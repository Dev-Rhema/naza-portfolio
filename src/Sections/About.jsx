import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../Button";
import Wipe from "../Wipe";
import { createWipe } from "../animations";
import sectionIcon from "../assets/images/sectionIcon.svg";
import aboutHand from "../assets/images/aboutIcons/aboutHand.webp";
import aboutTorch from "../assets/images/aboutIcons/aboutTorch.webp";
import aboutUser from "../assets/images/aboutIcons/aboutUser.webp";

const Icon = ({ src }) => (
  <span className="relative mr-px ml-0.5 inline-block size-10 align-middle md:mr-[0.28125rem] md:ml-1.75 md:size-12">
    <img src={src} alt="" loading="lazy" className="pointer-events-none absolute top-[-0.41667rem] left-[-12.23958rem] -z-10 w-[26.97917rem] max-w-none select-none md:-top-2 md:-left-58.75 md:w-129.5" />
  </span>
);

export function About() {
  const section = useRef(null);

  useGSAP(
    () => {
      const wipe = createWipe(gsap.utils.toArray(".wipe", section.current)).pause();
      ScrollTrigger.create({ trigger: section.current, start: "top 80%", once: true, onEnter: () => wipe.play() });
    },
    { scope: section },
  );

  return (
    <section ref={section} className="relative px-6 pt-10 pb-9.25 md:px-20 md:py-22">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-34 bg-linear-to-b from-[#030303] to-transparent" />

      <Wipe className="relative w-fit">
        <p className="flex items-center gap-1.75 font-helvetica text-[0.875rem] font-medium md:gap-2 md:text-[1rem] leading-none tracking-[-0.04em] text-white">
          <img src={sectionIcon} alt="" className="size-4 md:size-4.5" />
          <span className="pt-0.5">ABOUT ME</span>
        </p>
      </Wipe>

      <h2 className="isolate mt-6 hidden font-helvetica text-[3rem] font-normal leading-[1.2] tracking-[-0.04em] text-white md:block">
        <Wipe delay={0.05} release className="relative w-fit">
          <span>
            Design is an avenue to create memories <Icon src={aboutHand} /> and for 7 years I
          </span>
        </Wipe>
        <Wipe delay={0.11} release className="relative w-fit">
          <span>
            have always searched <Icon src={aboutTorch} /> for ways to create not just interfaces
          </span>
        </Wipe>
        <Wipe delay={0.16} release className="relative w-fit">
          <span>
            but wholesome experiences for users <Icon src={aboutUser} />
          </span>
        </Wipe>
      </h2>

      <h2 className="isolate mt-[1.03125rem] font-helvetica text-[2rem] font-normal leading-[1.2] tracking-[-0.04em] text-white md:hidden">
        <Wipe delay={0.05} className="relative w-fit">
          <span>Design is an avenue to create</span>
        </Wipe>
        <Wipe delay={0.105} release className="relative w-fit">
          <span>
            memories <Icon src={aboutHand} /> and for 7 years
          </span>
        </Wipe>
        <Wipe delay={0.16} release className="relative w-fit">
          <span>
            I have always searched <Icon src={aboutTorch} />
          </span>
        </Wipe>
        <Wipe delay={0.215} className="relative w-fit">
          <span>for ways to create not just</span>
        </Wipe>
        <Wipe delay={0.27} className="relative w-fit">
          <span>interfaces but wholesome</span>
        </Wipe>
        <Wipe delay={0.325} release className="relative w-fit">
          <span>
            experiences for users <Icon src={aboutUser} />
          </span>
        </Wipe>
      </h2>

      <div className="mt-[1.78125rem] flex flex-col-reverse items-start gap-[1.65625rem] md:mt-12 md:flex-row md:items-end md:justify-between md:gap-0">
        <Wipe delay={0.3} className="relative rounded-full">
          <Button href="/about">About Me</Button>
        </Wipe>
        <div className="relative -z-10 font-helvetica text-[0.875rem] leading-4.25 md:mb-[-0.34375rem] md:w-120 md:text-[1rem] md:leading-4.75 tracking-[-0.04em] text-[#7d7d7d]">
          <div className="hidden md:block">
            <Wipe delay={0.1} className="relative w-fit">
              <span>With experience in designing for various sectors, I am able to provide</span>
            </Wipe>
            <Wipe delay={0.15} className="relative w-fit">
              <span>solutions that are adaptable. The sectors I have worked in include</span>
            </Wipe>
            <Wipe delay={0.2} className="relative w-fit">
              <span>
                <span className="text-white">blockchain</span>, <span className="text-white">security</span>, <span className="text-white">gaming</span> and{" "}
                <span className="text-white">more</span>
              </span>
            </Wipe>
          </div>
          <div className="md:hidden">
            <Wipe delay={0.1} className="relative w-fit">
              <span>With experience in designing for various sectors, I am able to</span>
            </Wipe>
            <Wipe delay={0.15} className="relative w-fit">
              <span>provide solutions that are adaptable. The sectors I have worked in</span>
            </Wipe>
            <Wipe delay={0.2} className="relative w-fit">
              <span>
                include <span className="text-white">blockchain</span>, <span className="text-white">security</span>, <span className="text-white">gaming</span> and{" "}
                <span className="text-white">more</span>
              </span>
            </Wipe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
