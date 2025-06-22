import styles from './LearningPlans.module.scss';
import { useTranslations } from 'next-intl';

export default function LearningPlans() {
  const t = useTranslations('learningPlans');
  const plans = t.raw('items');
  const title = t('title');

  return (
    <div className={styles.learningPlans}>
      <h2>{title}</h2>
      <ul className={styles.planList}>
        {plans.map(({ topic, goal }, i) => (
          <li key={i} className={styles.planItem}>
            <h3>{topic}</h3>
            <p>{goal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
