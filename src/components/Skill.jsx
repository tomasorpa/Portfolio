import { skillItems } from "../data";
import SkillCard from "./SkillCard";

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          Essential Technologies I use
        </h2>

        <div className="grid gap-3  grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
          {skillItems.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
