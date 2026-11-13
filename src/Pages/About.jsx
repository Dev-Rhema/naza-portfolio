import Button from "../Button";
import Navbar from "../Navbar";
import RippleDistortion from "../RippleDistortion";
import sectionIcon from "../assets/images/sectionIcon.svg";
import aboutHeroSketch from "../assets/images/aboutPageImgs/aboutHeroSketch.png";
import fineBoyNaza from "../assets/images/aboutPageImgs/fineBoyNaza.png";
import topBarCode from "../assets/images/aboutPageImgs/topBarCode.svg";
import bottomBarCode from "../assets/images/aboutPageImgs/bottomBarCode.svg";
import hatIcon from "../assets/images/aboutPageImgs/aboutPageIcons/hat.png";
import brushIcon from "../assets/images/aboutPageImgs/aboutPageIcons/brush.png";
import hexagonIcon from "../assets/images/aboutPageImgs/aboutPageIcons/hexagon.png";
import megaphoneIcon from "../assets/images/aboutPageImgs/aboutPageIcons/megaphone.png";
import pendulumIcon from "../assets/images/aboutPageImgs/aboutPageIcons/pendulum.png";
import experienceIllustration from "../assets/images/aboutPageImgs/experienceIllustration.png";
import taoIcon from "../assets/images/aboutPageImgs/aboutPageIcons/tao.svg";
import vidaioIcon from "../assets/images/aboutPageImgs/aboutPageIcons/vidaio.svg";
import hippiusIcon from "../assets/images/aboutPageImgs/aboutPageIcons/hippius.svg";
import premblyIcon from "../assets/images/aboutPageImgs/aboutPageIcons/premly.svg";
import footiumIcon from "../assets/images/aboutPageImgs/aboutPageIcons/footium.svg";
import experienceUnion from "../assets/images/aboutPageImgs/aboutPageIcons/Union.svg";

const experiences = [
  {
    name: "taostats",
    icon: taoIcon,
    dates: "Feb 2025 - Aug 2026",
    role: "Product Designer",
    description: (
      <>
        Designed the landing page for the largest documentary of Bittensor,{" "}
        <span className="font-medium text-white">The Incentive Layer</span> which gathered over 61k views. Shedding more light on the importance of an open source intelligence layer
      </>
    ),
  },
  {
    name: "Vidaio",
    icon: vidaioIcon,
    dates: "May 2025 - Aug 2026",
    role: "Product Designer",
    description: "Designed the initial application, website, marketing materials and pitch decks for the product",
  },
  {
    name: "Hippius",
    icon: hippiusIcon,
    dates: "May 2025 - Aug 2026",
    role: "Product Designer",
    description: "Designed the initial web application, desktop application, websites, marketing materials and pitch decks for the product",
  },
  {
    name: "Prembly",
    icon: premblyIcon,
    dates: "Dec 2023 - Jan 2025",
    role: "Product Designer",
    description: "Led the design for various products and created a standardized design system that governed the visual language for the company",
  },
  {
    name: "Footium",
    icon: footiumIcon,
    dates: "Feb 2022 - Feb 2023",
    role: "UI/UX Designer",
    description: "Designed the tactics page of the game, MVP website and pitchdecks for the company",
  },
];

export const About = () => {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#030303]">
      <Navbar />
      <section className="relative min-h-screen overflow-hidden bg-[#030303] px-6 pt-28 pb-12 md:h-[60rem] md:min-h-0 md:px-20 md:pt-0 md:pb-0">
        <img
          src={aboutHeroSketch}
          alt=""
          className="pointer-events-none absolute top-36 -left-24 z-0 w-[32rem] max-w-none opacity-50 select-none md:top-[7.5rem] md:left-20 md:w-[40rem] md:opacity-20"
        />
        <RippleDistortion
          src={fineBoyNaza}
          className="pointer-events-none absolute top-40 -right-36 z-0 aspect-3/4 w-[26rem] md:top-[7.5rem] md:right-20 md:w-[37.5rem]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-40 -right-36 z-0 aspect-3/4 w-[26rem] md:top-[7.5rem] md:right-20 md:w-[37.5rem]"
        >
          <p className="absolute top-[2%] left-[2.5%] w-[44%] font-mono text-[0.875rem] leading-[1.2] tracking-[-0.02em] text-[#7d7d7d] md:text-[1rem]">
            Restraint is nothing
            <br />
            without the strength
            <br />
            to back it
          </p>
          <img
            src={topBarCode}
            alt=""
            className="pointer-events-none absolute top-[2%] right-[2%] w-[41%] select-none"
          />
          <img
            src={bottomBarCode}
            alt=""
            className="pointer-events-none absolute bottom-[2%] left-[2.5%] w-[44.75%] select-none"
          />
          <p className="absolute right-[2.5%] bottom-[4%] w-[24%] font-mono text-[0.75rem] leading-[1.1] tracking-[-0.02em] text-[#b0b0b0] md:text-[1rem]">
            Best picture
            <br />
            taken of me,
            <br />
            in ages
          </p>
        </div>

        <h1 className="relative z-10 font-helvetica text-[3rem] leading-[0.98] tracking-[-0.055em] text-white md:absolute md:top-[33.5rem] md:left-20 md:text-[4.25rem] 2xl:top-[25rem] 2xl:text-[7.5rem]">
          <span className="block md:whitespace-nowrap">
            Product Designer creating
          </span>
          <span className="block md:whitespace-nowrap">
            interfaces that challenge
          </span>
          <span className="block">the norm</span>
        </h1>

        <p className="relative z-10 mt-6 max-w-[31rem] font-helvetica text-[1.125rem] leading-[1.45] tracking-[-0.04em] text-[#7d7d7d] md:absolute md:top-[47.75rem] md:left-20 md:mt-0 md:max-w-none md:text-[1.5rem] md:leading-[1.75rem] 2xl:top-[48rem]">
          Design should make us better. Design should draw
          <br className="hidden md:block" /> out positive emotions from our
          users. These have
          <br className="hidden md:block" /> been some of my guides over the
          years
        </p>

        <div className="relative z-10 mt-6 md:absolute md:top-[54.5rem] md:left-20 md:mt-0 2xl:top-[55.25rem]">
          <Button href="#contact">Book a Call</Button>
        </div>
      </section>

      <section className="bg-[#030303] px-6 pt-12 pb-12 md:px-20 md:pt-[5.25rem] md:pb-[5.875rem]">
        <p className="flex items-center gap-1.5 font-helvetica text-[0.875rem] font-medium leading-none text-white">
          <img src={sectionIcon} alt="" className="size-4" />
          <span>THE DESIGNER</span>
        </p>

        <p className="mt-8 font-helvetica text-[1.375rem] leading-[1.25] tracking-[-0.04em] md:mt-[2.25rem] md:text-[3rem] md:leading-[1.1]">
          <span className="text-[#4f4f4f]">While I wear many hats</span>
          <img
            src={hatIcon}
            alt=""
            className="mx-1.5 inline-block size-9 align-middle md:mx-2 md:size-12"
          />
          <span className="text-[#4f4f4f]">
            depending on the situation my areas of expertise are in
          </span>
          <img
            src={brushIcon}
            alt=""
            className="mx-1.5 inline-block size-9 align-middle md:mx-2 md:size-12"
          />
          <span className="text-white">Product Design,</span>
          <img
            src={hexagonIcon}
            alt=""
            className="mx-1.5 inline-block size-9 align-middle md:mx-2 md:size-12"
          />
          <span className="text-white">Design Systems,</span>
          <img
            src={megaphoneIcon}
            alt=""
            className="mx-1.5 inline-block size-9 align-middle md:mx-2 md:size-12"
          />
          <span className="text-white">Pitch Decks,</span>
          <img
            src={pendulumIcon}
            alt=""
            className="mx-1.5 inline-block size-9 align-middle md:mx-2 md:size-12"
          />
          <span className="text-white">Motion for Interfaces</span>
        </p>

        <Button href="#resume" className="mt-8 bg-[rgb(37_37_37)] md:mt-[3rem]">
          My Resume
        </Button>
      </section>

      <section className="bg-[#030303] px-6 pt-12 pb-12 md:px-20 md:pt-[4.5rem] md:pb-[2rem]">
        <div className="grid gap-10 md:grid-cols-2 md:gap-20">
          <div className="relative md:sticky md:top-0 md:h-fit md:min-h-[43rem] md:self-start">
            <p className="flex items-center gap-1.5 font-helvetica text-[0.875rem] font-medium leading-none text-white">
              <img src={sectionIcon} alt="" className="size-3.5" />
              <span>MY EXPERIENCE</span>
            </p>

            <h2 className="mt-4 font-helvetica text-[2rem] leading-[1.05] tracking-[-0.055em] text-white md:max-w-[38rem] md:text-[3rem]">
              Over the years I have helped
              <br />
              brands go from 0 - 1
            </h2>

            <p className="relative z-10 mt-6 max-w-[25rem] font-helvetica text-[1rem] leading-[1.2] tracking-[-0.04em] text-[#777777] md:absolute md:top-[10.25rem] md:left-[7.5rem] md:mt-0">
              My experience has usually revolved around assisting startups
              define their visual language and establish a cohesive identity
              that is impossible to ignore
            </p>

            <img
              src={experienceIllustration}
              alt=""
              className="pointer-events-none relative mx-auto mt-8 w-[12.75rem] select-none md:absolute md:top-[10.25rem] md:left-0 md:mx-0 md:mt-0"
            />
          </div>

          <ol className="mt-2 grid gap-5 md:mt-0 md:gap-[2.125rem] md:pt-[2.125rem]">
            {experiences.map((experience) => (
              <li
                key={experience.name}
                className="relative"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3 md:gap-[1.25rem]">
                    <img
                      src={experience.icon}
                      alt=""
                      className="size-10 shrink-0 md:size-[3.625rem]"
                    />
                    <h3 className="font-helvetica text-[1.5rem] font-medium leading-none tracking-[-0.055em] text-white md:text-[2.875rem]">
                      {experience.name}
                    </h3>
                  </div>
                  <p className="shrink-0 whitespace-nowrap font-helvetica text-[0.75rem] italic leading-none tracking-[-0.04em] text-[#777777] md:text-[1.375rem]">
                    {experience.dates}
                  </p>
                </div>

                <div className="relative ml-[3.5rem] mt-4 h-[6.5625rem] md:mt-[1.5rem] md:h-[9.375rem]">
                  <img
                    src={experienceUnion}
                    alt=""
                    className="pointer-events-none absolute top-0 -left-12 h-full w-6 select-none md:w-[2.25rem]"
                  />
                  <p className="absolute top-0 left-0 flex h-6 items-center font-helvetica text-[1.25rem] leading-[1.2] tracking-[-0.04em] text-[#777777] md:h-[2.25rem] 2xl:text-[1.75rem]">
                    {experience.role}
                  </p>
                  <p className="absolute right-0 bottom-0 left-0 font-helvetica text-[1rem] leading-[1.15] tracking-[-0.04em] text-[#777777] 2xl:text-[1.5rem]">
                    {experience.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
};

export default About;
