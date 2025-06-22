import React from 'react';
import styles from './CarouselItem.module.scss';
import { truncateText } from '@/utils/truncateText';

const CarouselItems = ({ projects, activeIndex, containerRef }) => {
  return (
    <div ref={containerRef} className={styles.wrapper}>
      {projects.map((project, i) => {
        const isActive = i === activeIndex;

        return (
          <div
            key={i}
            className={`${styles.carouselItem} ${isActive ? styles.active : ''}`}
            data-index={i}
          >
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            {isActive && (
              <div className={styles.content}>
                <p>{truncateText(project.description, 170)}</p>
                <div className={styles.wrapperTech}>                  
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className={styles.ButtonGroup}>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.BtnSource}
                    >
                      Source
                    </a>
                  )}
                  {project.linkDemo && (
                    <a
                      href={project.linkDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.BtnDemo}
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CarouselItems;
