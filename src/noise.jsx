import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export function Noise({ visible }) {
  const canvas = useRef(null);

  useGSAP(() => {
    if (visible) gsap.to(canvas.current, { opacity: 1, duration: 0.5, ease: "power1.out" });
  }, [visible]);

  useGSAP(() => {
    const el = canvas.current;
    const ctx = el.getContext("2d");
    const size = 512;
    const tile = document.createElement("canvas");
    tile.width = size;
    tile.height = size;
    const tileCtx = tile.getContext("2d");
    const grain = tileCtx.createImageData(size, size);

    for (let i = 0; i < grain.data.length; i += 4) {
      grain.data[i] = 255;
      grain.data[i + 1] = 255;
      grain.data[i + 2] = 255;
      grain.data[i + 3] = Math.random() * 10.2;
    }

    tileCtx.putImageData(grain, 0, 0);
    const pattern = ctx.createPattern(tile, "repeat");

    const draw = () => {
      const x = Math.floor(Math.random() * size);
      const y = Math.floor(Math.random() * size);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, el.width, el.height);
      ctx.setTransform(1, 0, 0, 1, -x, -y);
      ctx.fillStyle = pattern;
      ctx.fillRect(x, y, el.width, el.height);
    };

    const resize = () => {
      el.width = Math.round(innerWidth * devicePixelRatio);
      el.height = Math.round(innerHeight * devicePixelRatio);
      draw();
    };

    resize();
    addEventListener("resize", resize);

    if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.to({}, { duration: 1 / 24, repeat: -1, onRepeat: draw });
    }

    return () => removeEventListener("resize", resize);
  });

  return (
    <canvas
      ref={canvas}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-0"
    />
  );
}

export default Noise;
