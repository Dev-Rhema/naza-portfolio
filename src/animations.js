import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);

CustomEase.create("loaderText", "0.85,0,0.15,1");
CustomEase.create("loaderFade", "0.5,0,0.03,1");
CustomEase.create("loaderDecor", "0.85,0,0.15,1");

export function createLoaderTimeline(scope, { onComplete } = {}) {
  const q = gsap.utils.selector(scope);
  const text = { duration: 2, ease: "loaderText" };
  const wipe = { scaleY: 0, duration: 1.4, ease: "loaderDecor", stagger: (i) => i * 0.1 + (i >= 10 ? 0.1 : 0) };

  return gsap
    .timeline({ paused: true, onComplete })
    .set(q(".statue"), { opacity: 1 }, 0)
    .from(q(".fade"), { opacity: 0, duration: 1, ease: "loaderFade" }, 0)
    .to(q(".count"), { textContent: 100, duration: 2.39, ease: "none", snap: { textContent: 1 } }, 0)
    .from(q(".quem"), { y: 123, ...text }, 0)
    .from(q(".como"), { y: 124, ...text }, 0.1)
    .from(q(".deus"), { y: 124, ...text }, 0.2)
    .from(q(".name"), { y: 136, ...text }, 0.3)
    .from(q(".role"), { y: 134, ...text }, 0.38)
    .from(q(".decor"), { ...wipe }, 2.39)
    .from(q(".final"), { ...wipe }, 2.49);
}
