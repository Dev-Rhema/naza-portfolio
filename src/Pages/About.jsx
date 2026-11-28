import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Button from "../Button";
import Navbar from "../Navbar";
import Noise from "../noise";
import { createSmoother, createWipe, wipeLines } from "../animations";
import Wipe from "../Wipe";
import RippleDistortion from "../RippleDistortion";
import { Footer } from "../Sections/Footer";
import sectionIcon from "../assets/images/sectionIcon.svg";
import heroSketch from "../assets/images/aboutPageImgs/aboutHeroSketch.webp";
import photo from "../assets/images/aboutPageImgs/fineBoyNaza.jpg";
import captionTop from "../assets/images/aboutPageImgs/photoCaptionTop.svg";
import captionBottom from "../assets/images/aboutPageImgs/photoCaptionBottom.svg";
import barcodeTop from "../assets/images/aboutPageImgs/photoBarcodeTop.svg";
import barcodeBottom from "../assets/images/aboutPageImgs/photoBarcodeBottom.svg";
import hatIcon from "../assets/images/aboutPageImgs/aboutPageIcons/hat.webp";
import brushIcon from "../assets/images/aboutPageImgs/aboutPageIcons/brush.webp";
import hexagonIcon from "../assets/images/aboutPageImgs/aboutPageIcons/hexagon.webp";
import megaphoneIcon from "../assets/images/aboutPageImgs/aboutPageIcons/megaphone.webp";
import pendulumIcon from "../assets/images/aboutPageImgs/aboutPageIcons/pendulum.webp";
import experienceIllustration from "../assets/images/aboutPageImgs/experienceIllustration.webp";
import { experiences } from "../data";

const Icon = ({ src, className }) => (
  <span className="relative -my-1 inline-block size-8 align-middle md:mr-0.5 md:ml-1.25 md:size-12">
    <img
      src={src}
      alt=""
      loading="lazy"
      className={`pointer-events-none absolute top-[-0.33333rem] -z-10 max-w-none select-none md:-top-2 ${className}`}
    />
  </span>
);

const wide = "left-[-9.79167rem] w-[21.58333rem] md:-left-58.75 md:w-129.5";

const megaphone = "left-[-3.33333rem] w-60.5 md:-left-20 md:w-90.75";

const timings = [
  { head: 0, role: 0, lines: "0.01,0.04,0.09" },
  { head: 0.04, role: 0.04, lines: "0.09,0" },
  { head: 0.09, role: 0.14, lines: "0.14,0.13" },
  { head: 0.14, role: 0.18, lines: "0.21,0.25" },
  { head: 0.19, role: 0.18, lines: "0.34,0.35" },
];

export const About = ({ loaded }) => {
  const hero = useRef(null);
  const designer = useRef(null);
  const career = useRef(null);

  useGSAP(() => {
    createSmoother();
  });

  useGSAP(
    () => {
      const reveal = createWipe(
        gsap.utils.toArray(".wipe:not(header *)", hero.current),
      ).fromTo(
        "[data-fade]",
        { opacity: 0.001 },
        {
          opacity: 1,
          duration: (i, el) => (+el.dataset.fade ? 0.96 : 1.2),
          ease: "archFade",
          delay: (i, el) => +el.dataset.fade,
          clearProps: "opacity",
        },
        0,
      );
      if (!loaded) reveal.pause();
    },
    { scope: hero, dependencies: [loaded] },
  );

  useGSAP(
    () => {
      let wipe, played;
      SplitText.create(".designer-copy", {
        type: "lines",
        autoSplit: true,
        onSplit: (split) => {
          wipeLines(split.lines);
          wipe = createWipe(
            gsap.utils.toArray(".wipe", designer.current),
          ).paused(!played);
          return wipe;
        },
      });
      ScrollTrigger.create({
        trigger: designer.current,
        start: innerWidth < 768 ? "top 95%" : "top 80%",
        once: true,
        onEnter: () => {
          played = true;
          wipe.play();
        },
      });
    },
    { scope: designer },
  );

  useGSAP(
    () => {
      let wipe, played;
      SplitText.create(".experience-copy", {
        type: "lines",
        autoSplit: true,
        onSplit: (split) => {
          wipeLines(split.lines);
          wipe = createWipe(gsap.utils.toArray(".wipe", career.current))
            .fromTo(
              ".timeline",
              { opacity: 0.001 },
              {
                opacity: 1,
                duration: 1,
                ease: "reelFade",
                clearProps: "opacity",
              },
              0.04,
            )
            .fromTo(
              ".illustration",
              { opacity: 0.001 },
              {
                opacity: 1,
                duration: 0.84,
                ease: "archFade",
                clearProps: "opacity",
              },
              0.28,
            )
            .paused(!played);
          return wipe;
        },
      });
      ScrollTrigger.create({
        trigger: career.current,
        start: innerWidth < 768 ? "top 95%" : "top 80%",
        once: true,
        onEnter: () => {
          played = true;
          wipe.play();
        },
      });
      if (innerWidth < 768) return;
      const gap = () =>
        5.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
      const illustration = career.current.querySelector(".illustration");
      ScrollTrigger.create({
        trigger: career.current.firstElementChild,
        start: () => `top ${gap()}px`,
        endTrigger: career.current.lastElementChild,
        end: () =>
          `bottom ${gap() + illustration.offsetTop + illustration.offsetHeight}px`,
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
    },
    { scope: career },
  );

  return (
    <main className="overflow-x-clip">
      <Noise visible={loaded} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section
            ref={hero}
            className="relative px-6 pt-24 pb-7.5 md:h-[59.6875rem] md:px-20 md:pt-29.5 md:pb-9.25 2xl:h-[calc(9.6875rem+46.6667vw)]"
          >
            <Navbar loaded={loaded} />

            <Wipe className="relative w-full md:absolute md:top-29.5 md:right-20 md:w-150 2xl:w-[35vw]">
              <div className="relative aspect-392/406 w-full md:aspect-600/800">
                <RippleDistortion src={photo} className="absolute inset-0" />
                <img
                  src={captionTop}
                  alt=""
                  className="pointer-events-none absolute top-2 left-2 w-39.25 select-none md:top-3.75 md:left-4 md:w-50.5 2xl:top-[0.875vw] 2xl:left-[0.9333vw] 2xl:w-[11.783vw]"
                />
                <img
                  src={barcodeTop}
                  alt=""
                  className="pointer-events-none absolute top-2 right-1.75 h-12.5 w-40.25 select-none md:top-4 md:right-4 md:h-25 md:w-61.5 2xl:top-[0.9333vw] 2xl:right-[0.9333vw] 2xl:h-[5.8333vw] 2xl:w-[14.35vw]"
                />
                <img
                  src={barcodeBottom}
                  alt=""
                  className="pointer-events-none absolute bottom-2 left-2 h-12.75 w-44 select-none md:bottom-4 md:left-4 md:h-25 md:w-67 2xl:bottom-[0.9333vw] 2xl:left-[0.9333vw] 2xl:h-[5.8333vw] 2xl:w-[15.633vw]"
                />
                <img
                  src={captionBottom}
                  alt=""
                  className="pointer-events-none absolute right-2.5 bottom-1.75 w-26 select-none md:right-4.5 md:bottom-7 md:w-33.5 2xl:right-[1.05vw] 2xl:bottom-[1.6333vw] 2xl:w-[7.8167vw]"
                />
              </div>
            </Wipe>

            <div className="pointer-events-none hidden w-160 select-none md:flex 2xl:w-240">
              <div data-fade={0} className="w-1/2 overflow-hidden">
                <img
                  src={heroSketch}
                  alt=""
                  className="w-160 max-w-none 2xl:w-240"
                />
              </div>
              <div data-fade={0.38} className="w-1/2 overflow-hidden">
                <img
                  src={heroSketch}
                  alt=""
                  className="-ml-80 w-160 max-w-none 2xl:-ml-120 2xl:w-240"
                />
              </div>
            </div>

            <div className="md:absolute md:bottom-9.25 md:left-20">
              <h1 className="relative z-10 mt-[2.03125rem] font-helvetica text-[2.5rem] font-normal leading-10 tracking-[-0.03em] text-white md:mt-0 md:tracking-[-0.04em] md:leading-none md:text-[4.5rem] min-[96rem]:text-[7.5rem] 2xl:text-[6.25vw]">
                <div className="hidden md:block">
                  <Wipe delay={0.05} className="relative -mb-[0.2em] w-fit">
                    <span className="pb-[0.2em]">
                      Product Designer creating
                    </span>
                  </Wipe>
                  <Wipe delay={0.09} className="relative -mb-[0.2em] w-fit">
                    <span className="pb-[0.2em]">
                      interfaces that challenge
                    </span>
                  </Wipe>
                  <Wipe delay={0.15} className="relative -mb-[0.2em] w-fit">
                    <span className="pb-[0.2em]">the norm</span>
                  </Wipe>
                </div>
                <div className="md:hidden">
                  <Wipe delay={0.05} className="relative -mb-[0.2em] w-fit">
                    <span className="pb-[0.2em]">Product Designer</span>
                  </Wipe>
                  <Wipe delay={0.09} className="relative -mb-[0.2em] w-fit">
                    <span className="pb-[0.2em]">creating interfaces that</span>
                  </Wipe>
                  <Wipe delay={0.15} className="relative -mb-[0.2em] w-fit">
                    <span className="pb-[0.2em]">challenge the norm</span>
                  </Wipe>
                </div>
              </h1>
              <div className="mt-4.75 font-helvetica text-[1.125rem] font-normal leading-[1.2] tracking-[-0.04em] text-[#7d7d7d] md:mt-3 md:w-125 2xl:mt-4.5 2xl:w-187.5 md:text-[1.5rem] 2xl:text-[2.25rem]">
                <Wipe delay={0.06} className="relative w-fit">
                  <span>Design should make us better. Design should draw</span>
                </Wipe>
                <Wipe delay={0.11} className="relative w-fit">
                  <span>out positive emotions from our users. These have</span>
                </Wipe>
                <Wipe delay={0.15} className="relative w-fit">
                  <span>been some of my guides over the years</span>
                </Wipe>
              </div>
              <Wipe
                delay={0.28}
                className="relative mt-[1.59375rem] w-fit rounded-full md:mt-[1.40625rem] 2xl:[zoom:1.2]"
              >
                <Button href="#contact">Book a Call</Button>
              </Wipe>
            </div>
          </section>

          <section
            ref={designer}
            className="px-6 pt-10 pb-[5.03125rem] md:px-20 md:pt-22 md:pb-40"
          >
            <Wipe className="relative w-fit">
              <p className="flex items-center gap-1.75 font-helvetica text-[0.875rem] font-medium leading-none tracking-[-0.04em] text-white md:gap-2 md:text-[1rem] 2xl:text-[1.25rem]">
                <img src={sectionIcon} alt="" className="size-4 md:size-4.5" />
                <span className="pt-0.5">THE DESIGNER</span>
              </p>
            </Wipe>
            <p
              className="isolate mt-3.75 font-helvetica text-[2rem] font-normal leading-10 tracking-[-0.04em] text-[#4f4f4f] md:hidden designer-copy 2xl:text-[2.5rem] 2xl:leading-12.5"
              data-delays="0.05"
            >
              While I wear many hats <Icon src={hatIcon} className={wide} />{" "}
              depending on the situation my areas of expertise are in{" "}
              <span className="text-white">
                Product Design <Icon src={brushIcon} className={wide} /> ,
                Design Systems <Icon src={hexagonIcon} className={wide} /> ,
                Pitch Decks <Icon src={megaphoneIcon} className={megaphone} />{" "}
                <span className="whitespace-nowrap">, and</span> Motion for
                Interfaces <Icon src={pendulumIcon} className={wide} />
              </span>
            </p>
            <p
              className="isolate hidden font-helvetica font-normal tracking-[-0.04em] text-[#4f4f4f] md:mt-[2.15625rem] md:block md:text-[3rem] md:leading-12.5 designer-copy 2xl:text-[3.75rem] 2xl:leading-[3.90625rem]"
              data-delays="0.05"
            >
              While I wear many hats <Icon src={hatIcon} className={wide} />{" "}
              depending on the situation my areas of expertise are in{" "}
              <span className="whitespace-nowrap text-white">
                <Icon src={brushIcon} className={wide} /> Product Design,
              </span>{" "}
              <span className="whitespace-nowrap text-white">
                <Icon src={hexagonIcon} className={wide} /> Design Systems,
              </span>{" "}
              <span className="whitespace-nowrap text-white">
                <Icon src={megaphoneIcon} className={megaphone} /> Pitch Decks,
              </span>{" "}
              <span className="whitespace-nowrap text-white">
                <Icon src={pendulumIcon} className={wide} /> Motion for
                Interfaces
              </span>
            </p>
            <Wipe
              delay={0.3}
              className="relative mt-7.25 w-fit rounded-full md:mt-[2.59375rem]"
            >
              <Button href="#resume" className="bg-[#262626]!">
                My Resume
              </Button>
            </Wipe>
          </section>

          <section
            ref={career}
            className="flex flex-col gap-[0.96875rem] px-6 pb-[2.34375rem] md:flex-row md:gap-0 md:px-20 md:pb-17.25"
          >
            <div className="relative md:w-170 md:self-start 2xl:w-255">
              <Wipe className="relative w-fit">
                <p className="flex items-center gap-1.75 font-helvetica text-[0.875rem] font-medium leading-none tracking-[-0.04em] text-white md:gap-2 md:text-[1rem] 2xl:gap-3 2xl:text-[1.5rem]">
                  <img
                    src={sectionIcon}
                    alt=""
                    className="size-4 md:size-4.5 2xl:size-6.75"
                  />
                  <span className="pt-0.5">MY EXPERIENCE</span>
                </p>
              </Wipe>
              <h2 className="mt-[1.05rem] font-helvetica text-[1.75rem] font-normal leading-[1.1] tracking-[-0.04em] text-white md:mt-6.25 md:text-[3rem] 2xl:mt-[2.34375rem] 2xl:text-[4.5rem]">
                <Wipe delay={0.02} className="relative w-fit">
                  <span>Over the years I have helped</span>
                </Wipe>
                <Wipe delay={0.14} className="relative w-fit">
                  <span>brands go from 0 - 1</span>
                </Wipe>
              </h2>
              <p
                data-delays="0.18,0.25,0.3"
                className="mt-[1.15625rem] font-helvetica text-[0.875rem] font-normal leading-[1.2] tracking-[-0.04em] text-[#7d7d7d] md:mt-[0.84375rem] md:ml-30 md:w-110 md:text-[1.25rem] experience-copy 2xl:mt-[1.265625rem] 2xl:ml-45 2xl:w-165 2xl:text-[1.875rem]"
              >
                My experience has usually revolved around assisting startups
                define their visual language and establish a cohesive identity
                that is impossible to ignore
              </p>
              <img
                src={experienceIllustration}
                alt=""
                loading="lazy"
                className="pointer-events-none absolute top-40 left-0 hidden aspect-408/900 w-51 select-none md:block 2xl:top-60 2xl:w-76.5 illustration"
              />
            </div>

            <ol className="flex flex-col gap-5.25 md:flex-1 md:gap-[1.40625rem] md:pt-8.5">
              {experiences.map((experience, i) => (
                <li key={experience.name}>
                  <Wipe delay={timings[i].head} className="relative">
                    <div className="flex h-8 w-full items-center font-helvetica tracking-[-0.04em] md:h-10">
                      <img
                        src={experience.icon}
                        alt=""
                        loading="lazy"
                        className="size-8 md:size-10"
                      />
                      <h3 className="ml-2 pt-1.25 text-[1.5rem] font-medium leading-none text-white md:ml-4 md:pt-0 md:text-[2rem] 2xl:text-[2.5rem]">
                        {experience.name}
                      </h3>
                      <p className="ml-auto pt-1.5 text-[1rem] font-normal leading-none text-[#7d7d7d] italic md:pt-0 2xl:text-[1.25rem]">
                        {experience.dates}
                      </p>
                    </div>
                  </Wipe>
                  <div className="relative mt-[0.84375rem] pl-10 font-helvetica tracking-[-0.04em] text-[#7d7d7d] md:mt-4 md:pt-[0.15625rem] md:pl-14">
                    <div className="absolute inset-y-0 left-1.75 flex w-4.5 flex-col items-center md:left-2 md:w-6 timeline">
                      <span className="size-4.5 shrink-0 rounded-full bg-[#1f1f1f] md:size-6 shadow-dot" />
                      <span className="-my-px w-0.75 flex-1 bg-[#1f1f1f] md:w-1" />
                      <span className="size-4.5 shrink-0 rounded-full bg-[#1f1f1f] md:size-6 shadow-dot" />
                    </div>
                    <Wipe delay={timings[i].role} className="relative w-fit">
                      <p className="text-[1rem] font-normal leading-[1.2] md:text-[1.25rem] 2xl:text-[1.5625rem]">
                        {experience.role}
                      </p>
                    </Wipe>
                    <p
                      data-delays={timings[i].lines}
                      className="mt-1.5 pr-5 text-[0.875rem] font-normal leading-[1.2] md:mt-[1.7125rem] md:pr-0 md:w-127 md:text-[1rem] experience-copy 2xl:text-[1.25rem]"
                    >
                      {experience.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <Footer />
        </div>
      </div>
    </main>
  );
};

export default About;
