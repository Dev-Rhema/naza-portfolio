import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export const Halftone = ({ src, width, height, gap = 4, radius = 60, className = "" }) => {
  const canvas = useRef(null);

  useGSAP(() => {
    const ctx = canvas.current.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.current.width = width * dpr;
    canvas.current.height = height * dpr;
    ctx.scale(dpr, dpr);

    const tint = gsap.utils.interpolate("#f4f3f3", "#e85626");
    const dots = [];
    let shape = null;
    let px = -1e5;
    let py = -1e5;
    let awake = false;

    const image = new Image();
    image.src = src;
    image.onload = () => {
      shape = document.createElement("canvas");
      shape.width = width;
      shape.height = height;
      const s = shape.getContext("2d", { willReadFrequently: true });
      s.drawImage(image, 0, 0, width, height);
      const data = s.getImageData(0, 0, width, height).data;
      for (let y = gap / 2; y < height; y += gap) {
        for (let x = gap / 2; x < width; x += gap) {
          const i = (Math.floor(y) * width + Math.floor(x)) * 4;
          const tone = ((data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255) * (data[i + 3] / 255);
          if (tone > 0.04) dots.push({ x, y, vx: 0, vy: 0, hx: x, hy: y, r: Math.sqrt(tone) * gap * 0.56 });
        }
      }
      s.globalCompositeOperation = "source-in";
      s.fillStyle = "#030303";
      s.fillRect(0, 0, width, height);
      awake = true;
    };

    const draw = () => {
      if (!awake) return;
      awake = px > -radius && px < width + radius && py > -radius && py < height + radius;
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(shape, 0, 0);
      for (const d of dots) {
        const dx = d.x - px;
        const dy = d.y - py;
        const dist = Math.hypot(dx, dy) + 0.001;
        if (dist < radius) {
          const force = (1 - dist / radius) * 2.6;
          d.vx += (dx / dist) * force;
          d.vy += (dy / dist) * force;
        }
        d.vx = (d.vx + (d.hx - d.x) * 0.05) * 0.84;
        d.vy = (d.vy + (d.hy - d.y) * 0.05) * 0.84;
        d.x += d.vx;
        d.y += d.vy;
        const warmth = Math.min(1, Math.hypot(d.x - d.hx, d.y - d.hy) / 28);
        if (warmth > 0.002 || Math.abs(d.vx) + Math.abs(d.vy) > 0.02) awake = true;
        ctx.fillStyle = tint(warmth);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const move = (e) => {
      const box = canvas.current.getBoundingClientRect();
      px = e.clientX - box.left;
      py = e.clientY - box.top;
      if (shape) awake = true;
    };

    window.addEventListener("pointermove", move);
    gsap.ticker.add(draw);
    return () => {
      window.removeEventListener("pointermove", move);
      gsap.ticker.remove(draw);
    };
  });

  return <canvas ref={canvas} aria-hidden="true" className={className} />;
};

export default Halftone;
