import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './Project.module.scss';
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import PlannedProjects from './PlannedProjects';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import { truncateText } from '@/utils/truncateText';

const selectedProject = new Set([
  "KubeShell7en",
  "Choropleth Map",
  "Markdown Previewer",
  "25 + 5 Clock",
  "Random Quote Machine",
]);


export default function ProjectList() {
  const t = useTranslations();
  const projects = t.raw('projects.items');
  const plannedProjects = t.raw('plannedProjects');

  const limitedProjects = projects.filter(project => selectedProject.has(project.title));

  return (
    <section id="projects" className={styles.projects}>
      <h2>{`Recent ${t('projects.title')}`}</h2>

      <ul>
        {limitedProjects.map((project, i) => (
          <li key={i}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.image}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.info}>
                <div className={styles.title}>
                  <h3>{project.title}</h3>
                  <FiArrowUpRight />
                </div>
                <p>{truncateText(project.description, 150)}</p>
                <div className={styles.tags}>
                  {project.tech.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
      <Link href={'/project'} className={styles.LinkFullProject}><span>View Full Project Archive</span><FaArrowRightLong /></Link>
      <PlannedProjects plannedProjects={plannedProjects} />
    </section>
  );
}
