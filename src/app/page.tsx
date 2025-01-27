'use client';
import { motion, useInView } from 'framer-motion';
import DevelopmentProgress from '@/components/DevelopmentProgress';
import HeroText from '@/components/HeroText';
import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import FlowDiagram from '@/assets/FlowDiagram';

const InfoSection = dynamic(() => import('@/components/InfoSection'), {
  ssr: false,
});

// Creating a reusable animated component
const AnimatedSection = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col gap-20 large-container">
      <div className="small-container space-y-20">
        <AnimatedSection>
          <HeroText />
        </AnimatedSection>

        <AnimatedSection>
          <FlowDiagram />
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <DevelopmentProgress />
      </AnimatedSection>

      <AnimatedSection>
        <InfoSection />
      </AnimatedSection>
    </div>
  );
};

export default Page;
