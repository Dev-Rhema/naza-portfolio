import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(CustomEase, ScrollTrigger, ScrollSmoother);

CustomEase.create("loaderText", "0.85,0,0.15,1");
CustomEase.create("loaderFade", "0.5,0,0.03,1");
CustomEase.create("loaderDecor", "0.65,0,0.35,1");
CustomEase.create("menuReveal", "0.91,0,0.05,1");
CustomEase.create("menuCorners", "0.5,0,0.6,1");
CustomEase.create("menuCrest", "0.3,0,0.8,1");
CustomEase.create("menuText", "0.6,0.3,0.3,1");
CustomEase.create("menuLabels", "0.76,0,0.24,1");
CustomEase.create("menuItems", "0.55,0.01,0.24,1");
CustomEase.create("menuBanner", "0.85,0,0.08,1");
CustomEase.create("menuHover", "0.94,0,0.13,1");

export const columnCount = () => (innerWidth < 768 ? 4 : 12);

const columnDelay = (i, count) => (count === 12 ? i * 0.065 + (i >= 10 ? 0.065 : 0) : i * 0.26);

export function createLoaderTimeline(scope, { onComplete } = {}) {
  const q = gsap.utils.selector(scope);
  const text = { duration: 2, ease: "loaderText" };
  const columns = { duration: 0.915, ease: "loaderDecor", stagger: (i, _, all) => columnDelay(i, all.length) };

  gsap.set(q(".slice-inner"), { xPercent: (i, _, all) => (-i * 100) / all.length });

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

export function createMenuTimeline(scope) {
  const q = gsap.utils.selector(scope);
  const columns = { duration: 0.915, ease: "loaderDecor", stagger: (i, _, all) => columnDelay(all.length - 1 - i, all.length) };
  const text = { duration: 1, ease: "menuText" };

  gsap.set(q(".menu-slice-inner"), { xPercent: (i, _, all) => (-i * 100) / all.length });

  return gsap
    .timeline()
    .from(q(".menu-decor"), { scaleY: 0, ...columns }, 0)
    .fromTo(q(".menu-slice"), { height: "0%" }, { height: "100%", ...columns }, 0.065)
    .from(q(".menu-corner"), { opacity: 0, duration: 1.075, ease: "menuCorners" }, 1.29)
    .fromTo(q(".menu-painting"), { height: "0%" }, { height: "100%", duration: 1.03, ease: "menuBanner" }, 1.305)
    .fromTo(q(".menu-bar"), { width: "0%" }, { width: "100%", duration: 0.96, ease: "menuReveal" }, 1.715)
    .from(q(".menu-label"), { y: "1.3333em", ...text, ease: "menuLabels", stagger: 0.3 }, 1.7)
    .from(q(".menu-item"), { y: "1.3333em", ...text, ease: "menuItems", stagger: (i) => (i + (i >= 6 ? 1 : 0)) * 0.05 }, 1.7)
    .from(q(".menu-caption"), { y: "2.875rem", ...text, stagger: 0.055 }, 1.725)
    .from(q(".menu-crest"), { opacity: 0, duration: 1.06, ease: "menuCrest" }, 1.9);
}

export function createMenuClose(scope) {
  const q = gsap.utils.selector(scope);
  const columns = { duration: 0.915, ease: "loaderDecor", stagger: (i, _, all) => columnDelay(all.length - 1 - i, all.length) };

  gsap.set(q(".menu-close-inner"), { xPercent: (i, _, all) => (-i * 100) / all.length });

  return gsap
    .timeline()
    .to(q(".menu-close-slice"), { height: "0%", ...columns }, 0)
    .to(q(".menu-close-decor"), { scaleY: 0, ...columns }, 0.065);
}

export function createHeroScroll(section) {
  const arch = section.querySelector(".arch");
  const nft = section.querySelector(".nft");
  const style = getComputedStyle(section);
  const mobile = innerWidth < 768;
  const archTop = () =>
    mobile ? parseFloat(style.paddingTop) : section.clientHeight - parseFloat(style.paddingBottom) - arch.offsetHeight;

  return gsap
    .timeline({ scrollTrigger: { trigger: section, start: "top top", end: "+=75%", pin: true, scrub: true, invalidateOnRefresh: true } })
    .to(arch, { y: () => archTop() - arch.offsetTop, ease: "none" })
    .to(section.querySelectorAll(".slide"), { yPercent: 100, ease: "none" }, 0)
    .set(nft, { x: () => arch.offsetLeft + arch.offsetWidth / 2 - nft.offsetLeft - nft.offsetWidth / 2 }, mobile ? 0.75 : 0.5)
    .to(
      nft,
      {
        x: () => arch.offsetLeft + arch.offsetWidth / 2 - nft.offsetLeft - nft.offsetWidth / 2,
        y: () => archTop() + arch.offsetHeight * 0.768 - nft.offsetTop - nft.offsetHeight / 2,
        scale: () => (arch.offsetWidth * 0.198) / nft.offsetWidth,
        duration: mobile ? 0.75 : 0.25,
        ease: "none",
      },
      mobile ? 0 : 0.5,
    );
}
