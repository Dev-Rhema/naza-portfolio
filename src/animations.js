import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(CustomEase, ScrollTrigger, ScrollSmoother, SplitText);
ScrollTrigger.config({ ignoreMobileResize: true });

CustomEase.create("loaderText", "0.85,0,0.15,1");
CustomEase.create("loaderFade", "0.5,0,0.03,1");
CustomEase.create("loaderDecor", "0.85,0,0.15,1");
CustomEase.create("menuReveal", "0.91,0,0.05,1");
CustomEase.create("menuCorners", "0.5,0,0.6,1");
CustomEase.create("menuCrest", "0.3,0,0.8,1");
CustomEase.create("menuText", "0.6,0.3,0.3,1");
CustomEase.create("menuLabels", "0.76,0,0.24,1");
CustomEase.create("menuItems", "0.55,0.01,0.24,1");
CustomEase.create("menuBanner", "0.85,0,0.08,1");
CustomEase.create("menuHover", "0.94,0,0.13,1");
CustomEase.create("soundRoll", "1,0,0.24,1");
CustomEase.create("archFade", "0.5,0,0.3,1");
CustomEase.create("wipe", "0.85,0,0.15,1");
CustomEase.create("reelFade", "0.5,0,0.46,1");
CustomEase.create("reelScale", "1,0,0.15,1");

export const columnCount = () => (innerWidth < 768 ? 4 : 12);

const columnDelay = (i, count) => (count === 12 ? i * 0.065 + (i >= 10 ? 0.065 : 0) : i * 0.1);

export function createLoaderTimeline(scope, { onComplete, onReveal } = {}) {
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
    .addLabel("columns", 2.39)
    .from(q(".decor"), { scaleY: 0, ...columns }, "columns")
    .to(q(".slice"), { height: 0, ...columns }, "columns+=0.065")
    .call(() => onReveal?.(), null, columnCount() === 12 ? ">-0.72" : ">-0.5");
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
    .addLabel("content", columnCount() === 12 ? 0.99 : 0.51)
    .from(q(".menu-corner"), { opacity: 0, duration: 1.075, ease: "menuCorners" }, "content")
    .fromTo(q(".menu-painting"), { height: "0%" }, { height: "100%", duration: 1.03, ease: "menuBanner" }, "content+=0.015")
    .fromTo(q(".menu-bar"), { width: "0%" }, { width: "100%", duration: 0.96, ease: "menuReveal" }, "content+=0.425")
    .from(q(".menu-label"), { y: "1.3333em", autoAlpha: 0, ...text, ease: "menuLabels", stagger: 0.3 }, "content+=0.41")
    .from(q(".menu-item"), { y: "1.3333em", autoAlpha: 0, ...text, ease: "menuItems", stagger: (i) => (i + (i >= 5 ? 1 : 0)) * 0.05 }, "content+=0.41")
    .from(q(".menu-caption"), { y: "2.875rem", ...text, stagger: 0.055 }, "content+=0.435")
    .from(q(".menu-crest"), { opacity: 0, duration: 1.06, ease: "menuCrest" }, "content+=0.61");
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

export function createSmoother() {
  if (ScrollTrigger.isTouch !== 1) ScrollSmoother.create({ smooth: 1.5 });
}

export function createWipe(wipes) {
  const q = (part) => wipes.map((el) => el.querySelector(part));
  const delay = (i, el) => +el.closest(".wipe").dataset.delay;
  const content = { duration: 1.07, ease: "wipe", delay };
  const orange = { duration: 1, ease: "wipe", delay };
  const released = wipes.filter((el) => el.dataset.release);
  const done = (i, el) => delay(i, el) + 1.07;

  return gsap
    .timeline()
    .fromTo(q(".wipe-window"), { yPercent: -100, y: -2 }, { yPercent: 0, y: 0, ...content }, 0)
    .fromTo(q(".wipe-inner"), { yPercent: 100, y: 2 }, { yPercent: 0, y: 0, ...content }, 0)
    .fromTo(q(".wipe-band"), { yPercent: 0, y: -2 }, { yPercent: 100, y: 0, ...content }, 0)
    .fromTo(q(".wipe-band-inner"), { yPercent: 0, y: 2 }, { yPercent: -100, y: 0, ...content }, 0)
    .fromTo(q(".wipe-band-fill"), { yPercent: -100, y: -2 }, { yPercent: 0, y: 0, ...orange }, 0)
    .to(q(".wipe-band"), { autoAlpha: 1, duration: 0, delay }, 0)
    .to(q(".wipe-band"), { autoAlpha: 0, duration: 0, delay: done }, 0)
    .to([...q(".wipe-window"), ...q(".wipe-inner")], { clearProps: "transform", duration: 0, delay: done }, 0)
    .to([...released, ...released.map((el) => el.querySelector(".wipe-window"))], { overflow: "visible", duration: 0, delay: done }, 0);
}

export function wipeLines(lines) {
  lines.forEach((line) => {
    line.dataset.delay = 0.05 + [...line.parentNode.children].indexOf(line) * 0.055;
    line.dataset.release = true;
    line.classList.add("wipe", "relative", "w-fit", "overflow-hidden");
    line.innerHTML = `<div class="pointer-events-none invisible absolute inset-0 overflow-hidden wipe-band"><div class="size-full wipe-band-inner"><div class="size-full bg-[#e85626] wipe-band-fill"></div></div></div><div class="relative overflow-hidden wipe-window"><div class="flex wipe-inner"><span>${line.innerHTML}</span></div></div>`;
  });
}

export function createHeroScroll(section) {
  const arch = section.querySelector(".arch");
  const nft = section.querySelector(".nft");
  const copy = section.querySelector(".hero-copy");
  const style = getComputedStyle(section);
  const mobile = innerWidth < 768;
  const rem = () => parseFloat(getComputedStyle(document.documentElement).fontSize);
  const archTop = () =>
    mobile ? copy.offsetTop - arch.offsetHeight - 1.33 * rem() : section.clientHeight - parseFloat(style.paddingBottom) - arch.offsetHeight;
  const nftCenterX = () => arch.offsetLeft + arch.offsetWidth / 2 - nft.offsetLeft - nft.offsetWidth / 2;
  const nftCenterY = () =>
    archTop() + arch.offsetHeight * 0.768 - nft.offsetTop - nft.offsetHeight / 2;
  const nftScale = () => (arch.offsetWidth * 0.198) / nft.offsetWidth;

  const timeline = gsap
    .timeline({ scrollTrigger: { trigger: section, start: "top top", end: mobile ? "+=75%" : "+=100%", pin: true, anticipatePin: 1, scrub: true, invalidateOnRefresh: true } })
    .to(arch, { y: () => archTop() - arch.offsetTop, ease: "none" })
    .to(section.querySelectorAll(".slide"), { yPercent: 100, y: 2, ease: "none" }, 0);

  if (mobile) {
    return timeline.fromTo(
      nft,
      { x: nftCenterX, y: () => arch.offsetTop - nft.offsetTop },
      { x: nftCenterX, y: nftCenterY, scale: nftScale, duration: 0.75, ease: "wipe" },
      0,
    );
  }

  return timeline
    .to(nft, { y: nftCenterY, scale: nftScale, duration: 0.5, ease: "wipe" }, 0.5)
    .set(nft, { x: nftCenterX }, 0.62);
}
