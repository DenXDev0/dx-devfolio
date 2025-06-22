'use client';

import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import styles from './page.module.scss';
import GradientCursor from '@/components/effects/GradientCursor';
import { useCenteredScrollItem } from '@/hooks/useCenteredScrollItem';
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll';
import TimelineBar from './section/TimelineBar';
import CarouselItems from './section/CarouselItem';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

const ProjectCarousel = () => {
  const t = useTranslations('projects');
  const projectTitle = t('title');
  const projectItems = t.raw('items');

  const containerRef = useRef(null);
  const activeIndex = useCenteredScrollItem(containerRef, '[data-index]');
  const { handleWheel } = useHorizontalScroll(containerRef);

  return (
    <div className={styles.Layout} onWheel={handleWheel}>
      <GradientCursor />
      <Header title={projectTitle} />
      <main>
        <TimelineBar items={projectItems} activeIndex={activeIndex} />
        <CarouselItems projects={projectItems} activeIndex={activeIndex} containerRef={containerRef} />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectCarousel;
