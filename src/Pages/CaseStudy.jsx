import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navbar from "../Navbar";
import Noise from "../noise";
import { createSmoother, createWipe, wipeLines } from "../animations";
import Wipe from "../Wipe";
import { Footer } from "../Sections/Footer";
import { caseStudies } from "../data";

const Images = ({ images, className }) => (
  <div className={`grid gap-10 md:grid-cols-2 md:gap-12 tablet:mt-[3.515625rem] ${className}`}>
    {images.map((image, i) => (
      <Wipe key={image.img.src} delay={(i % 2) * 0.05} className="relative reveal">
        <picture className="w-full">
          <source type="image/avif" srcSet={image.sources.avif} sizes="(min-width: 768px) 43vw, 89vw" />
          <img srcSet={image.sources.jpeg} sizes="(min-width: 768px) 43vw, 89vw" alt="" loading="lazy" decoding="async" className="aspect-616/480 w-full" />
        </picture>
      </Wipe>
    ))}
  </div>
);

const Recording = ({ background, className, children }) => (
  <Wipe delay={0.03} release className={`relative tablet:mt-[3.515625rem] reveal ${className}`}>
    <div className="relative w-full">
      <picture>
        <source type="image/avif" srcSet={background.sources.avif} sizes="88vw" />
        <img srcSet={background.sources.jpeg} sizes="88vw" alt="" loading="lazy" decoding="async" className="aspect-1280/690 w-full painting" />
      </picture>
      {children}
    </div>
  </Wipe>
);

const Video = ({ src, poster }) => {
  const video = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: video.current,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) => (self.isActive ? video.current.play().catch(() => {}) : video.current.pause()),
    });
  });

  return (
    <video
      ref={video}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      className="absolute top-1/2 left-1/2 aspect-1120/566 w-[87.5%] -translate-1/2 rounded-lg object-cover shadow-card screen"
    />
  );
};

const Text = ({ title, paragraphs }) => (
  <div className="reveal">
    {title && (
      <h2 className="text-[1.125rem] leading-[1.2] text-white md:text-[1.5rem] 2xl:text-[1.875rem]">
        <Wipe className="relative w-fit">
          <span>{title}</span>
        </Wipe>
      </h2>
    )}
    <div
      className={`${title ? "mt-4 md:mt-1" : "-mt-3.75 md:mt-8.25"} flex flex-col gap-4.25 text-[0.875rem] leading-4.25 tracking-[-0.035em] text-[#7d7d7d] md:gap-3.5 md:tracking-[-0.04em] md:text-[1.25rem] md:leading-6`}
    >
      {paragraphs.map((paragraph, i) => (
        <p key={i} data-delays={0.05 + i * 0.1} className="case-copy">
          {paragraph}
        </p>
      ))}
    </div>
  </div>
);

export const CaseStudy = ({ study, loaded }) => {
  const page = useRef(null);

  useGSAP(() => {
    createSmoother();
  });

  useGSAP(
    () => {
      gsap.utils.toArray(".reveal").forEach((block) => {
        let wipe, played;
        const build = () => {
          wipe = createWipe(block.matches(".wipe") ? [block] : gsap.utils.toArray(".wipe", block)).paused(!played);
          if (!block.querySelector(".painting")) return wipe;
          return wipe
            .fromTo(block.querySelector(".painting"), { opacity: 0.001 }, { opacity: 1, duration: 0.88, ease: "reelFade", clearProps: "opacity" }, 0.36)
            .fromTo(block.querySelectorAll(".screen"), { scale: 0.9 }, { scale: 1, duration: 0.76, ease: "reelScale", clearProps: "transform" }, 0.42);
        };
        const copy = block.querySelectorAll(".case-copy");
        if (copy.length) {
          SplitText.create(copy, {
            type: "lines",
            autoSplit: true,
            onSplit: (split) => {
              wipeLines(split.lines);
              return build();
            },
          });
        } else build();
        if (loaded)
          ScrollTrigger.create({
            trigger: block,
            start: block.querySelector("img") ? "top 60%" : "top 80%",
            once: true,
            onEnter: () => {
              played = true;
              wipe.play();
            },
          });
      });
    },
    { scope: page, dependencies: [loaded] },
  );

  return (
    <main ref={page} className="overflow-x-clip">
      <Noise visible={loaded} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section
            className={`relative px-6 pt-28 pb-6.5 font-helvetica font-normal tracking-tighter md:px-20 md:pt-31.5 ${study.newDesign ? "md:pb-7.25" : "md:pb-7.75"}`}
          >
            <Navbar minimal loaded={loaded} />

            <div className="reveal">
              <Wipe release className="relative w-fit">
                <a href="/" className="flex w-fit items-center gap-2 text-[0.875rem] leading-none md:text-[1.25rem] text-[#7d7d7d] 2xl:text-[1.5625rem]">
                  <span className="flex size-6 items-center justify-center rounded-full bg-[#1f1f1f] shadow-button 2xl:[zoom:1.25]">
                    <svg viewBox="0 0 24 24" className="mr-0.5 size-3.5 fill-none stroke-white stroke-2">
                      <path d="M15 5l-7 7 7 7" />
                    </svg>
                  </span>
                  Back
                </a>
              </Wipe>

              <h1
                data-delays="0.05,0.09,0.15"
                className="case-copy mt-10 text-[1.5rem] leading-[1.1] tracking-[-0.04em] text-[#353535] md:mt-10.25 md:text-[3rem] 2xl:text-[3.75rem]"
              >
                <span className="text-white">{study.name}:</span> {study.title}
              </h1>

              <Wipe delay={0.15} className="relative mt-6 md:mt-10 tablet:mt-[3.515625rem]">
                <div className="relative w-full">
                  <picture>
                    <source type="image/avif" srcSet={study.banner.sources.avif} sizes="(min-width: 768px) 88vw, 131vw" />
                    <img
                      srcSet={study.banner.sources.jpeg}
                      sizes="(min-width: 768px) 88vw, 131vw"
                      alt=""
                      fetchPriority="high"
                      className={`aspect-196/129 w-full object-cover md:aspect-1280/572 ${study.bannerPosition ?? ""}`}
                    />
                  </picture>
                  {study.website && (
                    <a
                      href={study.website}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute bottom-2 left-2 rounded-full p-1 shadow-glass backdrop-blur-sm md:bottom-8 md:left-8 md:p-2 2xl:[zoom:1.25]"
                    >
                      <span className="flex h-8 w-27 items-center justify-center rounded-full bg-[#1f1f1f] text-[0.875rem] leading-none tracking-[-0.01em] text-white shadow-button md:h-11 md:w-38 md:justify-start md:pl-4 md:text-[1.125rem]">
                        <span className="pt-1">Visit Website</span>
                        <svg viewBox="0 0 10 16" className="ml-2.5 hidden h-4 w-2.5 fill-none stroke-white stroke-[1.5] md:block">
                          <path d="M1.5 1.5l7 6.5-7 6.5" />
                        </svg>
                      </span>
                    </a>
                  )}
                </div>
              </Wipe>
            </div>

            <div className={`mt-9.5 grid gap-8 md:mt-9.25 md:grid-cols-2 tablet:mt-[3.515625rem] ${study.newDesign ? "md:gap-x-12" : "md:gap-x-20"}`}>
              <Text title="Overview" paragraphs={study.overview} />
              <div className="reveal">
                <h2 className="text-[1.125rem] leading-[1.2] text-white md:text-[1.5rem] 2xl:text-[1.875rem]">
                  <Wipe className="relative w-fit">
                    <span>Key Metrics</span>
                  </Wipe>
                </h2>
                <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 md:mt-3.25 md:gap-y-3.5">
                  {study.metrics.map((metric, i) => (
                    <div key={metric.label}>
                      <dt className="text-[0.875rem] leading-[1.2] md:text-[1rem] text-[#7d7d7d] uppercase 2xl:text-[1.25rem]">
                        <Wipe delay={0.05 + i * 0.04} className="relative w-fit">
                          <span>{metric.label}</span>
                        </Wipe>
                      </dt>
                      <dd
                        className={`mt-2.25 text-[1.125rem] md:text-[1.5rem] leading-[1.2] text-white 2xl:text-[1.875rem] ${study.newDesign ? "md:mt-1.5" : "md:mt-1.75"}`}
                      >
                        <Wipe delay={0.09 + i * 0.04} className="relative w-fit">
                          <span>{metric.value}</span>
                        </Wipe>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <Images images={study.images} className={`mt-8 ${study.newDesign ? "md:mt-8.25" : "md:mt-7.25"}`} />

            <div className="mt-9.5 md:mt-9.25 md:w-150 tablet:mt-[3.515625rem]">
              <Text title="The Problem" paragraphs={study.problem} />
            </div>

            {study.problemImages && <Images images={study.problemImages} className="mt-8.75 md:mt-8.25" />}

            {study.recording && (
              <Recording background={study.recording} className="mt-8.75 md:mt-8.25">
                {study.recordingVideo && <Video src={study.recordingVideo.src} poster={study.recordingVideo.poster} />}
              </Recording>
            )}

            <div className={`mt-9.5 grid gap-8 md:mt-9 md:grid-cols-2 tablet:mt-[3.515625rem] ${study.newDesign ? "md:gap-x-12" : "md:gap-x-20"}`}>
              <Text title="My Impact" paragraphs={study.impact} />
              {study.outcome && <Text title={study.outcomeTitle} paragraphs={study.outcome} />}
            </div>

            {study.video && (
              <Recording background={study.video.background} className="mt-8.75 md:mt-8.25">
                <Video src={study.video.src} poster={study.video.poster} />
              </Recording>
            )}

            {study.impactImages && <Images images={study.impactImages} className={`mt-8.75 ${study.video ? "md:mt-10" : "md:mt-8.25"}`} />}

            {study.impactImage && (
              <Wipe className={`relative mt-8.75 tablet:mt-[3.515625rem] reveal ${study.impactImages ? "md:mt-10" : "md:mt-8.25"}`}>
                <picture className="w-full">
                  <source type="image/avif" srcSet={study.impactImage.sources.avif} sizes="88vw" />
                  <img
                    srcSet={study.impactImage.sources.jpeg}
                    sizes="88vw"
                    width={study.impactImage.img.w}
                    height={study.impactImage.img.h}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="w-full"
                  />
                </picture>
              </Wipe>
            )}

            <h2
              className={`mt-8.25 text-[1.125rem] md:text-[1.5rem] tablet:mt-[3.515625rem] leading-[1.2] text-white reveal 2xl:text-[1.875rem] ${study.moreSpacing}`}
            >
              <Wipe className="relative w-fit">
                <span>More Case Studies</span>
              </Wipe>
            </h2>
            <div className={`mt-4.25 grid gap-4.5 md:grid-cols-2 md:gap-12 ${study.newDesign ? "md:mt-7.75" : "md:mt-8"}`}>
              {study.more.map((slug, i) => (
                <a key={slug} href={`/works/${slug}`} className="reveal">
                  <Wipe delay={i * 0.05} className="relative">
                    <picture className="w-full">
                      <source type="image/avif" srcSet={caseStudies[slug].cover.sources.avif} sizes="(min-width: 768px) 43vw, 89vw" />
                      <img
                        srcSet={caseStudies[slug].cover.sources.jpeg}
                        sizes="(min-width: 768px) 43vw, 89vw"
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="aspect-616/480 w-full"
                      />
                    </picture>
                  </Wipe>
                  <Wipe delay={0.05 + i * 0.05} className="relative mt-5.5 w-fit text-[1rem] leading-[1.2] text-[#7d7d7d] md:mt-9.5 2xl:text-[1.25rem]">
                    <p>{caseStudies[slug].name}</p>
                  </Wipe>
                  <h3
                    data-delays={0.09 + i * 0.05}
                    className="case-copy mt-1.75 text-[1.25rem] leading-6 md:mt-1.25 md:text-[2rem] md:leading-9.5 tracking-[-0.04em] text-white 2xl:text-[2.5rem] 2xl:leading-[2.96875rem]"
                  >
                    {caseStudies[slug].tagline}
                  </h3>
                </a>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </main>
  );
};

export default CaseStudy;
