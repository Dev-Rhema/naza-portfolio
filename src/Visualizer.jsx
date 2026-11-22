import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const bars = [1, 3, 5, 8, 1, 1, 11, 1, 8, 1, 4, 1, 12, 8, 1, 1, 8, 1];
const bins = [11, 7, 4, 8, 14, 17, 3, 12, 5, 16, 9, 18, 2, 6, 13, 19, 10, 15];

export const Visualizer = ({ analyser, playing }) => {
  const root = useRef(null);

  useGSAP(
    () => {
      const rects = gsap.utils.toArray(".bar", root.current);
      if (!playing) {
        gsap.to(rects, { attr: { y: (i) => 26 - bars[i] / 2, height: (i) => bars[i] }, duration: 0.6, ease: "power2.out" });
        return;
      }
      const levels = new Uint8Array(analyser.frequencyBinCount);
      const peaks = bars.map(() => 1);
      const draw = () => {
        analyser.getByteFrequencyData(levels);
        rects.forEach((rect, i) => {
          const level = levels[bins[i]];
          peaks[i] = Math.max(level, peaks[i] * 0.995);
          const height = 1 + (level / peaks[i]) ** 1.5 * 22;
          rect.setAttribute("y", 26 - height / 2);
          rect.setAttribute("height", height);
        });
      };
      gsap.ticker.add(draw);
      return () => gsap.ticker.remove(draw);
    },
    { dependencies: [playing], revertOnUpdate: true },
  );

  return (
    <svg ref={root} viewBox="0 0 52 52" className="size-full">
      <circle cx="26" cy="26" r="26" fill="black" />
      {bars.map((height, i) => (
        <rect key={i} x={i * 3} y={26 - height / 2} width="2" height={height} rx="1" fill="white" className="bar" />
      ))}
      <circle cx="26" cy="26" r="25.5" fill="none" stroke="#1a1a1a" />
    </svg>
  );
};

export default Visualizer;
