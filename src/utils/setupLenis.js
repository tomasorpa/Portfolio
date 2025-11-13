import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export const setupLenis = () => {
  const lenis = new Lenis({
    smoothWheel: true,
    smoothTouch: false,
  });

  // Sincronizar ScrollTrigger con Lenis
  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return lenis;
};
