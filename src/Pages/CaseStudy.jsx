import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Navbar from "../Navbar";
import Noise from "../noise";
import { Footer } from "../Sections/Footer";
import { caseStudies } from "../data";

const Text = ({ title, paragraphs }) => (
  <div>
    <h2 className="text-[1.125rem] leading-[1.2] text-white md:text-[1.5rem]">{title}</h2>
    <div className="mt-4 flex flex-col gap-4.25 text-[0.875rem] leading-4.25 tracking-[-0.035em] text-[#7d7d7d] md:mt-1 md:gap-3.5 md:tracking-[-0.04em] md:text-[1.25rem] md:leading-6">
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
          <section className="relative px-6 pt-28 pb-6.5 font-helvetica font-normal tracking-tighter md:px-20 md:pt-31.5 md:pb-7.75">
            <Navbar minimal />

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

            <div className="relative mt-6 md:mt-10">
              <img srcSet={study.banner} sizes="(min-width: 768px) 88vw, 131vw" alt="" className="aspect-196/129 w-full object-cover md:aspect-1280/572" />
              <a href={study.website} target="_blank" rel="noreferrer" className="absolute bottom-8 left-8 rounded-full p-2 shadow-glass backdrop-blur-sm">
                <span className="flex h-11 w-38 items-center rounded-full bg-[#1f1f1f] pl-4 text-[1.125rem] leading-none tracking-[-0.01em] text-white shadow-button">
                  <span className="pt-1">Visit Website</span>
                  <svg viewBox="0 0 10 16" className="ml-2.5 h-4 w-2.5 fill-none stroke-white stroke-[1.5]">
                    <path d="M1.5 1.5l7 6.5-7 6.5" />
                  </svg>
                </span>
              </a>
            </div>

            <div className="mt-9.5 grid gap-8 md:mt-9.25 md:grid-cols-2 md:gap-x-20">
              <Text title="Overview" paragraphs={study.overview} />
              <div>
                <h2 className="text-[1.125rem] leading-[1.2] text-white md:text-[1.5rem]">Key Metrics</h2>
                <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 md:mt-3.25 md:gap-y-3.5">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt className="text-[0.875rem] leading-[1.2] md:text-[1rem] text-[#7d7d7d] uppercase">{metric.label}</dt>
                      <dd className="mt-2.25 text-[1.125rem] md:mt-1.75 md:text-[1.5rem] leading-[1.2] text-white">{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mt-8 grid gap-10 md:mt-7.25 md:grid-cols-2 md:gap-12">
              {study.images.map((image) => (
                <img key={image} srcSet={image} sizes="(min-width: 768px) 43vw, 114vw" alt="" loading="lazy" className="aspect-square w-full object-cover md:aspect-616/480" />
              ))}
            </div>

            <div className="mt-9.5 md:mt-9.25 md:w-150">
              <Text title="The Problem" paragraphs={study.problem} />
            </div>

            <img srcSet={study.recording} sizes="(min-width: 768px) 88vw, 109vw" alt="" loading="lazy" className="mt-8.75 md:mt-8.25 aspect-392/259 md:aspect-1280/690 w-full object-cover" />

            <div className="mt-9.5 grid gap-8 md:mt-9 md:grid-cols-2 md:gap-x-20">
              <Text title="My Impact" paragraphs={study.impact} />
              <Text title="Outcome" paragraphs={study.outcome} />
            </div>

            <h2 className="mt-8.25 text-[1.125rem] md:mt-17.75 md:text-[1.5rem] leading-[1.2] text-white">More Case Studies</h2>
            <div className="mt-4.25 grid gap-4.5 md:mt-8 md:grid-cols-2 md:gap-12">
              {study.more.map((slug) => (
                <a key={slug} href={`/works/${slug}`}>
                  <img srcSet={caseStudies[slug].cover} sizes="(min-width: 768px) 43vw, 89vw" alt="" loading="lazy" className="aspect-98/65 w-full object-cover md:aspect-616/480" />
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
