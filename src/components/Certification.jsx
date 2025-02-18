import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CertificationCard from "./CertificationCard";
import { useResponsiveScrollMedia } from "../hooks";
import { certificationItems } from "../data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Certification = () => {
  useResponsiveScrollMedia();

  return (
    <section id="certifications" className="section overflow-hidden">
      <div className="container ">
        <h2 className="headline-2 mb-8 reveal-up">Top Certifications</h2>
        <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
          Completing certifications proves my skills, enhances career
          opportunities, builds credibility, and keeps me updated with industry
          standards and best practices.
        </p>
        <div className="scrub-slide flex  gap-3 w-fit">
          {certificationItems.map(
            (
              {
                certificationDescription,
                certificationName,
                certificationImgSrc,
                certificationCompany,
                certificationUrl,
              },
              key
            ) => (
              <CertificationCard
                key={key}
                certificationUrl={certificationUrl}
                certificationName={certificationName}
                certificationImgSrc={certificationImgSrc}
                certificationCompany={certificationCompany}
                certificationDescription={certificationDescription}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Certification;
