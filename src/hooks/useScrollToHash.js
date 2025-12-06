import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "lenis";

export const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis();

    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          lenis.scrollTo(element, { offset: -80 }); // -80 para evitar que tape el header
        }, 400);
      }
    }

    return () => lenis.destroy();
  }, [location]);
};
