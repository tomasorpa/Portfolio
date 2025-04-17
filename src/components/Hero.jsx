import { ButtonPrimary, ButtonOutline } from "./Button";
import resume from "../../public/resume/Tomas Ortega - Junior Position - Resume.pdf";

const Hero = () => {
  return (
    <section id="home" className="pt-24 lg:pt-0">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-tomas.png"
                width={40}
                height={40}
                alt="Tomas Ortega portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Junior Programmer ready to make an impact.
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              href={resume}
              label="Download CV"
              icon="download"
              target="blank"
            />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[380px] ml-auto bg-gradient-to-t from-transparent via-violet-400/50 to-transparent rounded-[60px] overflow-hidden">
            <img
              src="/images/tomasorpa-hero.png"
              width="656"
              height="600"
              alt="Tomas Ortega"
              className="w-full mask-img"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
