import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./Button";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import Visualizer from "./Visualizer";
import painting from "./assets/images/menuImgs/menuPainting.webp?w=800;1600&format=webp&lossless=true&as=srcset";
import crest from "./assets/images/menuImgs/menuCrest.webp";
import corner from "./assets/images/corner.webp";
import background from "./assets/images/menuImgs/menuBg.webp";

let audio;
let analyser;

export const Navbar = ({ minimal = false }) => {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(() => Boolean(audio && !audio.paused));
  const { contextSafe } = useGSAP();

  const toggleSound = () => {
    if (!audio) {
      audio = new Audio("/nazaSound.mp3");
      audio.loop = true;
      const context = new AudioContext();
      analyser = context.createAnalyser();
      analyser.fftSize = 64;
      analyser.smoothingTimeConstant = 0.5;
      analyser.maxDecibels = -20;
      context.createMediaElementSource(audio).connect(analyser);
      const volume = context.createGain();
      volume.gain.value = 0.5;
      analyser.connect(volume).connect(context.destination);
    }
    analyser.context.resume();
    if (playing) audio.pause();
    else audio.play();
    setPlaying(!playing);
  };

  const hint = contextSafe((e, show) => {
    if (e.pointerType !== "mouse") return;
    gsap.to(e.currentTarget.lastChild, { autoAlpha: show ? 1 : 0, duration: 0.3, ease: "power2.out", overwrite: true });
  });

  useEffect(() => {
    const preload = () => {
      (innerWidth < 768 ? [background] : [painting, crest, corner, background]).forEach((src) => {
        Object.assign(new Image(), { sizes: "55vw", srcset: src });
      });
    };
    if (document.readyState === "complete") preload();
    else addEventListener("load", preload, { once: true });
    return () => removeEventListener("load", preload);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-40 flex h-30 items-start justify-between px-6 pt-8 md:px-20 md:pt-10">
      <a href="/" aria-label="Home">
        <img src="/nazaLogo.png" alt="Naza" className="size-10 md:size-12" />
      </a>

      <div className="flex h-10 items-center md:h-12">
        {!minimal && (
          <button
            type="button"
            onClick={toggleSound}
            onPointerEnter={(e) => hint(e, true)}
            onPointerLeave={(e) => hint(e, false)}
            className="relative hidden font-mono text-[1rem] leading-none tracking-widest text-[#666666] md:block"
          >
            SOUND
            <span className="invisible absolute bottom-full left-1/2 mb-1 flex h-6.5 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-[#1f1f1f] text-[0.875rem] tracking-wider text-white opacity-0 shadow-button">
              {playing ? "ON" : "OFF"}
            </span>
          </button>
        )}
        <button
          type="button"
          aria-label="Toggle sound"
          aria-pressed={playing}
          onClick={toggleSound}
          className={`size-10 overflow-hidden rounded-full md:ml-6 md:size-12 ${minimal ? "md:hidden" : ""}`}
        >
          <Visualizer analyser={analyser} playing={playing} />
        </button>
        {!minimal && (
          <div className="hidden md:block">
            <Button href="#contact" className="ml-5.5">
              Let’s Chat
            </Button>
          </div>
        )}
        <Hamburger onClick={() => setOpen(true)} className="ml-4" />
      </div>
      {open && <Menu onClose={() => setOpen(false)} />}
    </header>
  );
};

export default Navbar;
