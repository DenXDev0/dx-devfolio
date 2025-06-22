import styles from './PlannedProjects.module.scss';

export default function PlannedProjects({ plannedProjects }) {
  return (
    <div className={styles.plannedProjects}>
      <h2>{plannedProjects.title}</h2>
      <ul>
        {plannedProjects.items.map(({ title, description }) => (
          <li key={title} className={styles.plannedItem}>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
