import { useGSAP } from "@gsap/react";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Noise from "../noise";
import { Hero } from "../Sections/Hero";
import { About } from "../Sections/About";
import { Reel } from "../Sections/Reel";
import { Footer } from "../Sections/Footer";

export const Home = ({ loaded }) => {
  useGSAP(() => {
    ScrollSmoother.create({ smooth: 1.5 });
    ScrollTrigger.refresh();
  });

  return (
    <main className="overflow-x-clip">
      <Noise visible={loaded} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <About />
          <Reel />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
