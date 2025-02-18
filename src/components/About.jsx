import { aboutItems } from "../data/aboutItems";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Tomas, driven by a relentless pursuit of growth, I
            embrace challenges as opportunities to improve and create meaningful
            results. My experience in volunteer initiatives has shaped my
            ability to adapt, lead, and contribute to outstanding solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-violet-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="ml-auto md:w-[40px] md:h-[40px] lg:w-[80px] lg:h-[80px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
