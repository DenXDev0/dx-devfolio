import { FaQuestion } from "react-icons/fa";
import styles from "./Skills.module.scss";
import techStack from "./TechIconMap";
import { useTranslations } from "next-intl";
import LearningPlans from "./LearningPlans";
import { GoDotFill } from "react-icons/go";

function getTechByName(name) {
  return techStack.find((tech) => tech.name === name);
}

export default function Skills() {
  const t = useTranslations("skills");
  const skills = t.raw("items");
  const info = t.raw("info");

  const allTech = Array.from(
    new Set(skills.flatMap(({ tech }) => tech))
  );

  return (
    <section id="skills" className={styles.skills}>
      <h2>{t("title")}</h2>

      <div className={styles.iconList}>
        {allTech.map((name) => {
          const tech = getTechByName(name);
          const Icon = tech?.icon;
          return (
            <div key={name} title={`${name} (${tech?.status || "unknown"})`}>
              {Icon ? <Icon /> : <FaQuestion />}
            </div>
          );
        })}
      </div>

      <div className={styles.info}>
        {info.map((item, i) => (
            <span className={styles[item.toLowerCase().replace(/\s+/g, '-')]} key={i}>{item}</span>
        ))}
      </div>

      {skills.map(({ title, tech }) => (
        <div key={title} className={styles.category}>
          <h3>{title}</h3>
          <ul>
            {tech.map((name) => {
              const techItem = getTechByName(name);
              const Icon = techItem?.icon;
              return (
                <li key={name}>
                  {Icon ? <Icon /> : <FaQuestion />}
                  <span
                    className={
                      techItem?.status === "learning"
                        ? styles.learningText
                        : techItem?.status === "plan"
                        ? styles.planText
                        : styles.using
                    }
                  >
                    {name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      
      <LearningPlans />
    </section>
  );
}
