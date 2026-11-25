import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Noise from "../noise";
import { createSmoother } from "../animations";
import { Hero } from "../Sections/Hero";
import { About } from "../Sections/About";
import { Reel } from "../Sections/Reel";
import { Footer } from "../Sections/Footer";

export const Home = ({ loaded }) => {
  useGSAP(() => {
    createSmoother();
    ScrollTrigger.refresh();
  });

  return (
    <main className="overflow-x-clip">
      <Noise visible={loaded} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero loaded={loaded} />
          <About />
          <Reel />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;
