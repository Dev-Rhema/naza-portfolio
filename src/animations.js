import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(CustomEase, ScrollTrigger, ScrollSmoother);

CustomEase.create("loaderText", "0.85,0,0.15,1");
CustomEase.create("loaderFade", "0.5,0,0.03,1");
CustomEase.create("loaderDecor", "0.85,0,0.15,1");

export function createLoaderTimeline(scope, { onComplete } = {}) {
  const q = gsap.utils.selector(scope);
  const text = { duration: 2, ease: "loaderText" };
  const columns = { duration: 1.4, ease: "loaderDecor", stagger: (i) => i * 0.1 + (i >= 10 ? 0.1 : 0) };

  gsap.set(q(".slice-inner"), { xPercent: (i) => (-i * 100) / 12 });

  return gsap
    .timeline({ onComplete })
    .set(q(".statue"), { opacity: 1 }, 0)
    .from(q(".fade"), { opacity: 0, duration: 1, ease: "loaderFade" }, 0)
    .to(q(".count"), { textContent: 100, duration: 2.39, ease: "none", snap: { textContent: 1 } }, 0)
    .from(q(".quem"), { y: 123, ...text }, 0)
    .from(q(".como"), { y: 124, ...text }, 0.1)
    .from(q(".deus"), { y: 124, ...text }, 0.2)
    .from(q(".name"), { y: 136, ...text }, 0.3)
    .from(q(".role"), { y: 134, ...text }, 0.38)
    .from(q(".decor"), { scaleY: 0, ...columns }, 2.39)
    .to(q(".slice"), { height: 0, ...columns }, 2.49);
}

export function createHeroScroll(section) {
  const q = gsap.utils.selector(section);
  const arch = q(".arch")[0];
  const nft = q(".nft")[0];
  const archEnd = () => section.offsetHeight - 26 - arch.offsetHeight;

  return gsap
    .timeline({ scrollTrigger: { trigger: section, start: "top top", end: "+=75%", pin: true, scrub: true, invalidateOnRefresh: true } })
    .to(arch, { y: () => archEnd() - arch.offsetTop, ease: "none" })
    .to(q(".slide"), { yPercent: 100, ease: "none" }, 0)
    .set(nft, { x: () => arch.offsetLeft + arch.offsetWidth / 2 - nft.offsetLeft - nft.offsetWidth / 2 })
    .to(nft, {
      y: () => archEnd() + arch.offsetHeight * 0.768 - nft.offsetTop - nft.offsetHeight / 2,
      scale: () => (arch.offsetWidth * 0.198) / nft.offsetWidth,
      duration: 0.25,
      ease: "none",
    });
}
