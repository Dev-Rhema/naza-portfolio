import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(CustomEase, ScrollTrigger, ScrollSmoother);

CustomEase.create("loaderText", "0.85,0,0.15,1");
CustomEase.create("loaderFade", "0.5,0,0.03,1");
CustomEase.create("loaderDecor", "0.65,0,0.35,1");

export function createLoaderTimeline(scope, { onComplete } = {}) {
  const q = gsap.utils.selector(scope);
  const text = { duration: 2, ease: "loaderText" };
  const columns = { duration: 0.915, ease: "loaderDecor", stagger: (i) => i * 0.065 + (i >= 10 ? 0.065 : 0) };

  gsap.set(q(".slice-inner"), { xPercent: (i) => (-i * 100) / 12 });

  return gsap
    .timeline({ onComplete })
    .set(q(".statue"), { opacity: 1 }, 0)
    .from(q(".fade"), { opacity: 0, duration: 1, ease: "loaderFade" }, 0)
    .to(q(".count"), { textContent: 100, duration: 2.39, ease: "none", snap: { textContent: 1 } }, 0)
    .from(q(".quem"), { yPercent: 106.77, ...text }, 0)
    .from(q(".como"), { yPercent: 107.64, ...text }, 0.1)
    .from(q(".deus"), { yPercent: 107.64, ...text }, 0.2)
    .from(q(".name"), { yPercent: 236.11, ...text }, 0.3)
    .from(q(".role"), { yPercent: 279.17, ...text }, 0.38)
    .from(q(".decor"), { scaleY: 0, ...columns }, 2.39)
    .to(q(".slice"), { height: 0, ...columns }, 2.455);
}

export function createHeroScroll(section) {
  const arch = section.querySelector(".arch");
  const nft = section.querySelector(".nft");
  const bottom = () => section.offsetHeight - 26;

  return gsap
    .timeline({ scrollTrigger: { trigger: section, start: "top top", end: "+=75%", pin: true, scrub: true, invalidateOnRefresh: true } })
    .to(arch, { y: () => bottom() - arch.offsetHeight - arch.offsetTop, ease: "none" })
    .to(section.querySelectorAll(".slide"), { yPercent: 100, ease: "none" }, 0)
    .set(nft, { x: () => arch.offsetLeft + arch.offsetWidth / 2 - nft.offsetLeft - nft.offsetWidth / 2 })
    .to(nft, {
      y: () => bottom() - arch.offsetHeight * 0.232 - nft.offsetTop - nft.offsetHeight / 2,
      scale: () => (arch.offsetWidth * 0.198) / nft.offsetWidth,
      duration: 0.25,
      ease: "none",
    });
}
