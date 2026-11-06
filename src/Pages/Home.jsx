import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Noise from "../noise";
import { Navbar } from "../Navbar";
import { Hero } from "../Sections/Hero";
import { About } from "../Sections/About";
import { Reel } from "../Sections/Reel";

export const Home = ({ loaded }) => {
  useGSAP(() => {
    ScrollSmoother.create({ smooth: 1.5 });
  });

  return (
    <main className="overflow-x-clip">
      <Noise visible={loaded} />
      <Navbar loaded={loaded} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <About />
          <Reel />
        </div>
      </div>
    </main>
  );
};
