import React from 'react';
import styles from './TimelineBar.module.scss';

const TimelineBar = ({ items, activeIndex }) => {
  return (
    <div className={styles.timelineBar}>
      <div className={styles.years}>
        <span>{items[0]?.date?.year}</span>
        <span>{items[items.length - 1]?.date?.year}</span>
      </div>
      <div className={styles.line}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`${styles.dot} ${i === activeIndex ? styles.active : ''}`}
            title={`${item.date.month} ${item.date.year}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineBar;
