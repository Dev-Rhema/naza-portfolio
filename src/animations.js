import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

CustomEase.create("loaderText", "0.85,0,0.15,1");
CustomEase.create("loaderFade", "0.5,0,0.03,1");
CustomEase.create("loaderDecor", "0.85,0,0.15,1");

const TEXT = [
  ["quem", 0, 123],
  ["como", 0.1, 124],
  ["deus", 0.2, 124],
  ["name", 0.3, 136],
  ["role", 0.38, 134],
];

const DECOR_STARTS = [2.39, 2.49, 2.59, 2.69, 2.79, 2.89, 2.99, 3.09, 3.19, 3.29, 3.49, 3.59];

export function createLoaderTimeline(scope, { onComplete } = {}) {
  const q = gsap.utils.selector(scope);
  const tl = gsap.timeline({ paused: true, onComplete });

  tl.set(q("[data-loader-statue]"), { opacity: 1 }, 0);
  tl.fromTo(q("[data-loader-fade]"), { opacity: 0 }, { opacity: 1, duration: 1, ease: "loaderFade" }, 0);
  tl.fromTo(
    q("[data-loader-count]"),
    { textContent: 0 },
    { textContent: 100, duration: 4.4, ease: "none", snap: { textContent: 1 } },
    0,
  );

  TEXT.forEach(([key, start, y]) => {
    tl.fromTo(q(`[data-loader-text="${key}"]`), { y }, { y: 0, duration: 2, ease: "loaderText" }, start);
  });

  DECOR_STARTS.forEach((start, i) => {
    const grow = { scaleY: 1, duration: 1.4, ease: "loaderDecor" };
    tl.fromTo(q(`[data-loader-decor="${i}"]`), { scaleY: 0 }, grow, start);
    tl.fromTo(q(`[data-loader-final="${i}"]`), { scaleY: 0 }, grow, start + 0.1);
  });

  return tl;
}
