import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Navbar from "../Navbar";
import Noise from "../noise";
import { Footer } from "../Sections/Footer";
import { caseStudies } from "../data";

const Images = ({ images, className }) => (
  <div className={`grid gap-10 md:grid-cols-2 md:gap-12 tablet:mt-[3.515625rem] ${className}`}>
    {images.map((image) => (
      <picture key={image.img.src}>
        <source type="image/avif" srcSet={image.sources.avif} sizes="(min-width: 768px) 43vw, 89vw" />
        <img srcSet={image.sources.jpeg} sizes="(min-width: 768px) 43vw, 89vw" alt="" loading="lazy" decoding="async" className="aspect-616/480 w-full" />
      </picture>
    ))}
  </div>
);

const Text = ({ title, paragraphs }) => (
  <div>
    {title && <h2 className="text-[1.125rem] leading-[1.2] text-white md:text-[1.5rem]">{title}</h2>}
    <div
      className={`${title ? "mt-4 md:mt-1" : "-mt-3.75 md:mt-8.25"} flex flex-col gap-4.25 text-[0.875rem] leading-4.25 tracking-[-0.035em] text-[#7d7d7d] md:gap-3.5 md:tracking-[-0.04em] md:text-[1.25rem] md:leading-6`}
    >
      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  </div>
);

export const CaseStudy = ({ study, loaded }) => {
  useGSAP(() => {
    ScrollSmoother.create({ smooth: 1.5 });
  });

  return (
    <main className="overflow-x-clip">
      <Noise visible={loaded} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section className={`relative px-6 pt-28 pb-6.5 font-helvetica font-normal tracking-tighter md:px-20 md:pt-31.5 ${study.newDesign ? "md:pb-7.25" : "md:pb-7.75"}`}>
            <Navbar minimal loaded={loaded} />

            <a href="/" className="flex w-fit items-center gap-2 text-[0.875rem] leading-none md:text-[1.25rem] text-[#7d7d7d]">
              <span className="flex size-6 items-center justify-center rounded-full bg-[#1f1f1f] shadow-button">
                <svg viewBox="0 0 24 24" className="mr-0.5 size-3.5 fill-none stroke-white stroke-2">
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </span>
              Back
            </a>

            <h1 className="mt-10 text-[1.5rem] leading-[1.1] tracking-[-0.04em] text-[#353535] md:mt-10.25 md:text-[3rem]">
              <span className="text-white">{study.name}:</span> {study.title}
            </h1>

            <div className="relative mt-6 md:mt-10 tablet:mt-[3.515625rem]">
              <picture>
                <source media="(min-width: 768px)" type="image/avif" srcSet={study.banner.sources.avif} sizes="88vw" />
                <source media="(min-width: 768px)" srcSet={study.banner.sources.jpeg} sizes="88vw" />
                <source type="image/avif" srcSet={study.mobileBanner.sources.avif} />
                <img src={study.mobileBanner.img.src} alt="" fetchPriority="high" className="aspect-196/129 w-full md:aspect-1280/572" />
              </picture>
              {study.website && (
                <a
                  href={study.website}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-2 left-2 rounded-full p-1 shadow-glass backdrop-blur-sm md:bottom-8 md:left-8 md:p-2"
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

            <div className={`mt-9.5 grid gap-8 md:mt-9.25 md:grid-cols-2 tablet:mt-[3.515625rem] ${study.newDesign ? "md:gap-x-12" : "md:gap-x-20"}`}>
              <Text title="Overview" paragraphs={study.overview} />
              <div>
                <h2 className="text-[1.125rem] leading-[1.2] text-white md:text-[1.5rem]">Key Metrics</h2>
                <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 md:mt-3.25 md:gap-y-3.5">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt className="text-[0.875rem] leading-[1.2] md:text-[1rem] text-[#7d7d7d] uppercase">{metric.label}</dt>
                      <dd className={`mt-2.25 text-[1.125rem] md:text-[1.5rem] leading-[1.2] text-white ${study.newDesign ? "md:mt-1.5" : "md:mt-1.75"}`}>{metric.value}</dd>
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
              <div className="relative mt-8.75 md:mt-8.25 tablet:mt-[3.515625rem]">
                <picture>
                  <source type="image/avif" srcSet={study.recording.sources.avif} sizes="88vw" />
                  <img srcSet={study.recording.sources.jpeg} sizes="88vw" alt="" loading="lazy" decoding="async" className="aspect-1280/690 w-full" />
                </picture>
                {study.placeholder && (
                  <picture>
                    <source type="image/avif" srcSet={study.placeholder.sources.avif} sizes="78vw" />
                    <img
                      srcSet={study.placeholder.sources.jpeg}
                      sizes="78vw"
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="absolute top-1/2 left-1/2 aspect-1120/566 w-[87.5%] -translate-1/2 rounded-lg shadow-card"
                    />
                  </picture>
                )}
              </div>
            )}

            <div className={`mt-9.5 grid gap-8 md:mt-9 md:grid-cols-2 tablet:mt-[3.515625rem] ${study.newDesign ? "md:gap-x-12" : "md:gap-x-20"}`}>
              <Text title="My Impact" paragraphs={study.impact} />
              {study.outcome && <Text title={study.outcomeTitle} paragraphs={study.outcome} />}
            </div>

            {study.impactImages && <Images images={study.impactImages} className="mt-8.75 md:mt-8.25" />}

            {study.impactImage && (
              <picture>
                <source type="image/avif" srcSet={study.impactImage.sources.avif} sizes="88vw" />
                <img
                  srcSet={study.impactImage.sources.jpeg}
                  sizes="88vw"
                  width={study.impactImage.img.w}
                  height={study.impactImage.img.h}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={`mt-8.75 w-full tablet:mt-[3.515625rem] ${study.impactImages ? "md:mt-10" : "md:mt-8.25"}`}
                />
              </picture>
            )}

            <h2 className={`mt-8.25 text-[1.125rem] md:text-[1.5rem] tablet:mt-[3.515625rem] leading-[1.2] text-white ${study.moreSpacing}`}>More Case Studies</h2>
            <div className={`mt-4.25 grid gap-4.5 md:grid-cols-2 md:gap-12 ${study.newDesign ? "md:mt-7.75" : "md:mt-8"}`}>
              {study.more.map((slug) => (
                <a key={slug} href={`/works/${slug}`}>
                  <picture>
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
                  <p className="mt-5.5 text-[1rem] leading-[1.2] text-[#7d7d7d] md:mt-9.5">{caseStudies[slug].name}</p>
                  <h3 className="mt-1.75 text-[1.25rem] leading-6 md:mt-1.25 md:text-[2rem] md:leading-9.5 tracking-[-0.04em] text-white">{caseStudies[slug].tagline}</h3>
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
