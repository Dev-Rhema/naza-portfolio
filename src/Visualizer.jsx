import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const bins = [11, 7, 4, 14, 8, 17, 3, 12, 5, 16, 9, 18];

export const Visualizer = ({ analyser, playing }) => {
  const root = useRef(null);
  const draw = useRef(null);

  useGSAP(
    () => {
      const rects = gsap.utils.toArray(".bar", root.current);
      gsap.ticker.remove(draw.current);
      if (!playing) {
        gsap.to(rects, { attr: { y: 44, height: 4 }, duration: 0.6, ease: "power2.out" });
        return;
      }
      const levels = new Uint8Array(analyser.frequencyBinCount);
      const peaks = bins.map(() => 1);
      draw.current = () => {
        analyser.getByteFrequencyData(levels);
        rects.forEach((rect, i) => {
          const level = levels[bins[i]];
          peaks[i] = Math.max(level, peaks[i] * 0.995);
          const height = 4 + (level / peaks[i]) ** 1.5 * 44;
          rect.setAttribute("y", 46 - height / 2);
          rect.setAttribute("height", height);
        });
      };
      gsap.ticker.add(draw.current);
      return () => gsap.ticker.remove(draw.current);
    },
    { dependencies: [playing] },
  );

  return (
    <svg ref={root} viewBox="0 0 92 92" className="size-full">
      <circle cx="46" cy="46" r="46" fill="black" />
      {bins.map((bin, i) => (
        <rect key={bin} x={1 + i * 8} y="44" width="4" height="4" rx="2" fill="white" className="bar" />
      ))}
      <circle cx="46" cy="46" r="45.1" fill="none" stroke="#1a1a1a" strokeWidth="1.8" />
    </svg>
  );
};

export default Visualizer;
