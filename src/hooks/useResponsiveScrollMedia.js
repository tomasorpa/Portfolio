import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useResponsiveScrollMedia = () => {
  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add(
      {
        isDesktopXL: "(min-width: 1440px)",
        isDesktop: "(min-width: 1024px) and (max-width: 1439px)",
        isTablet: "(min-width: 770px) and (max-width: 1023px)",
        isMobileL: "(min-width: 425px) and (max-width: 769px)",
        isMobileM: "(min-width: 375px) and (max-width: 424px)",
        isSmallMobile: "(max-width: 320px)",
      },
      (context) => {
        let {
          isDesktopXL,
          isDesktop,
          isTablet,
          isMobileL,
          isMobileM,
          isSmallMobile,
        } = context.conditions;

        let xValue = "-1060"; // Valor por defecto

        if (isDesktopXL) xValue = "-1060";
        else if (isDesktop) xValue = "-1190";
        else if (isTablet) xValue = "-1000";
        else if (isMobileL) xValue = "-922";
        else if (isMobileM) xValue = "-1305";
        else if (isSmallMobile) xValue = "-1360";

        const animation = gsap.to(".scrub-slide", {
          scrollTrigger: {
            trigger: ".scrub-slide",
            start: "top center",
            end: "bottom top",
            scrub: true,
            pin: true,
          },
          x: xValue,
        });
        return () => {
          animation.revert(); // Limpia la animación previa
        };
      }
    );
  });
};
