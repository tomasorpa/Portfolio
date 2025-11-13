// hooks/useRevealUp.js
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useRevealUp = () => {
  const { pathname } = useLocation();

  useGSAP(
    () => {
      // solo limpia los triggers dentro de este contexto, no todos
      const elements = gsap.utils.toArray(".reveal-up");
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "-200 bottom",
              end: "bottom 80%",
              scrub: true,
            },
          }
        );
      });
    },
    { dependencies: [pathname], revertOnUpdate: true }
  );
};
