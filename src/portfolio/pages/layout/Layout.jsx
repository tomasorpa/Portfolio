import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useEffect } from "react";
import { setupLenis } from "../../../utils/setupLenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react/dist";
import { gsap } from "gsap";
import { ReactLenis } from "lenis/dist/lenis-react.mjs";
import { useScrollToHash } from "../../../hooks/useScrollToHash";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export const Layout = () => {
  const params = useParams();
  const appPage = params.size == 0 ? "Home" : "Projects";

  const location = useLocation();

  useEffect(() => {
    const lenis = setupLenis();

    // Refresca ScrollTrigger en cada cambio de ruta
    const refresh = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refresh);
      lenis.destroy();
    };
  }, [location.pathname]);

  // Tus animaciones reveal-up
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  }, [location.pathname]);
  useScrollToHash();
  return (
    <>
      <ReactLenis root>
        <Header appPage={appPage} />
        <main className="section ">
          <Outlet />
        </main>
        <Footer />
      </ReactLenis>
    </>
  );
};
