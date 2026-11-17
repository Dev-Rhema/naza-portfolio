import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Navbar from "../Navbar";
import Noise from "../noise";
import { Footer } from "../Sections/Footer";
import { caseStudies } from "../data";

const Text = ({ title, paragraphs }) => (
  <div>
    <h2 className="text-[1.25rem] leading-[1.2] text-white md:text-[1.5rem]">{title}</h2>
    <div className="mt-1 flex flex-col gap-3 text-[1rem] leading-5 text-[#7d7d7d] md:gap-3.5 md:text-[1.25rem] md:leading-6">
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
          <section className="relative px-6 pt-24 pb-10 font-helvetica font-normal tracking-tighter md:px-20 md:pt-31.5 md:pb-7.75">
            <Navbar minimal />

            <a href="/" className="flex w-fit items-center gap-2 text-[1rem] leading-none md:text-[1.25rem] text-[#7d7d7d]">
              <span className="flex size-6 items-center justify-center rounded-full bg-[#1f1f1f] shadow-button">
                <svg viewBox="0 0 24 24" className="mr-0.5 size-3.5 fill-none stroke-white stroke-2">
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </span>
              Back
            </a>

            <h1 className="mt-6 text-[2rem] leading-[1.1] tracking-[-0.04em] text-[#353535] md:mt-10.25 md:w-150 md:text-[3rem]">
              <span className="text-white">{study.name}:</span> {study.tagline}
            </h1>

            <img src={study.banner} alt="" className="mt-6 md:mt-10 aspect-1280/572 w-full object-cover" />

            <div className="mt-8 grid gap-10 md:mt-9.25 md:grid-cols-2 md:gap-x-20">
              <Text title="Overview" paragraphs={study.overview} />
              <div>
                <h2 className="text-[1.25rem] leading-[1.2] text-white md:text-[1.5rem]">Key Metrics</h2>
                <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-3.5 md:mt-3.25">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dt className="text-[0.875rem] leading-[1.2] md:text-[1rem] text-[#7d7d7d] uppercase">{metric.label}</dt>
                      <dd className="mt-1.5 text-[1.25rem] md:mt-1.75 md:text-[1.5rem] leading-[1.2] text-white">{metric.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:mt-7.25 md:grid-cols-2 md:gap-12">
              {study.images.map((image) => (
                <img key={image} src={image} alt="" loading="lazy" className="aspect-616/480 w-full object-cover" />
              ))}
            </div>

            <div className="mt-10 md:mt-9.25 md:w-150">
              <Text title="The Problem" paragraphs={study.problem} />
            </div>

            <img src={study.recording} alt="" loading="lazy" className="mt-10 md:mt-8.25 aspect-1280/690 w-full object-cover" />

            <div className="mt-10 grid gap-10 md:mt-9 md:grid-cols-2 md:gap-x-20">
              <Text title="My Impact" paragraphs={study.impact} />
              <Text title="Outcome" paragraphs={study.outcome} />
            </div>

            <h2 className="mt-14 text-[1.25rem] md:mt-17.75 md:text-[1.5rem] leading-[1.2] text-white">More Case Studies</h2>
            <div className="mt-6 grid gap-10 md:mt-8 md:grid-cols-2 md:gap-12">
              {study.more.map((slug) => (
                <a key={slug} href={`/works/${slug}`}>
                  <img src={caseStudies[slug].cover} alt="" loading="lazy" className="aspect-616/480 w-full object-cover" />
                  <p className="mt-5 text-[0.875rem] leading-[1.2] text-[#7d7d7d] md:mt-9.5 md:text-[1rem]">{caseStudies[slug].name}</p>
                  <h3 className="mt-1.25 text-[1.5rem] leading-[1.2] md:text-[2rem] md:leading-9.5 tracking-[-0.04em] text-white">{caseStudies[slug].tagline}</h3>
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
