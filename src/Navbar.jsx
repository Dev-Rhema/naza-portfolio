import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./Button";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import Visualizer from "./Visualizer";
import Wipe from "./Wipe";
import { createWipe } from "./animations";
import painting from "./assets/images/menuImgs/menuPainting.webp?w=800;1600&format=webp&lossless=true&as=srcset";
import crest from "./assets/images/menuImgs/menuCrest.webp";
import corner from "./assets/images/corner.webp";
import background from "./assets/images/menuImgs/menuBg.webp";

let audio;
let analyser;

export const Navbar = ({ minimal = false, loaded }) => {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(() => Boolean(audio && !audio.paused));
  const roll = useRef(null);
  const first = useRef(true);
  const header = useRef(null);
  const { contextSafe } = useGSAP();

  useGSAP(
    () => {
      const wipe = createWipe(gsap.utils.toArray(".wipe", header.current));
      if (!loaded) wipe.pause();
    },
    { scope: header, dependencies: [loaded] },
  );

  useGSAP(
    () => {
      if (first.current || !roll.current) {
        first.current = false;
        return;
      }
      gsap.fromTo(roll.current, { y: "-3.25rem" }, { y: 0, duration: 0.7, ease: "soundRoll", overwrite: true });
    },
    { dependencies: [playing] },
  );

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
    else audio.play().catch(() => setPlaying(false));
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
    <header ref={header} className="absolute inset-x-0 top-0 z-40 flex h-30 items-start justify-between px-6 pt-8 md:px-20 md:pt-10">
      <Wipe className="relative rounded-[27%]">
        <a href="/" aria-label="Home">
          <img src="/nazaLogo.png" alt="Naza" className="size-10 md:size-12" />
        </a>
      </Wipe>

      <div className="flex h-10 items-center md:h-12">
        {!minimal && (
          <button
            type="button"
            onClick={toggleSound}
            onPointerEnter={(e) => hint(e, true)}
            onPointerLeave={(e) => hint(e, false)}
            className="relative font-mono text-[1rem] leading-none tracking-widest text-[#666666] 2xl:text-[1.25rem]"
          >
            <Wipe delay={0.23} className="relative -my-0.5">
              <span className="py-0.5">SOUND</span>
            </Wipe>
            <span className="invisible absolute bottom-full left-1/2 mb-1 h-6.5 w-12 -translate-x-1/2 overflow-hidden rounded-full bg-[#1f1f1f] text-[0.875rem] tracking-wider text-white opacity-0 2xl:text-[1.09375rem]">
              <span ref={roll} className="flex flex-col gap-6.5">
                <span className="flex h-6.5 items-center justify-center">{playing ? "ON" : "OFF"}</span>
                <span className="flex h-6.5 items-center justify-center">{playing ? "OFF" : "ON"}</span>
              </span>
            </span>
          </button>
        )}
        <Wipe delay={0.11} className={`relative ml-4 rounded-full md:ml-6 ${minimal ? "md:hidden" : ""}`}>
          <button type="button" aria-label="Toggle sound" aria-pressed={playing} onClick={toggleSound} className="size-10 overflow-hidden rounded-full md:size-12">
            <Visualizer analyser={analyser} playing={playing} />
          </button>
        </Wipe>
        {!minimal && (
          <Wipe delay={0.32} className="relative ml-5.5 hidden rounded-full md:block">
            <Button href="#contact">Let’s Chat</Button>
          </Wipe>
        )}
        <Wipe delay={0.41} className="relative ml-4 rounded-full">
          <Hamburger onClick={() => setOpen(true)} />
        </Wipe>
      </div>
      {open && <Menu onClose={() => setOpen(false)} />}
    </header>
  );
};

export default Navbar;
