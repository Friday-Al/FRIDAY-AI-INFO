'use client';
import React from 'react';
import { motion } from 'framer-motion';

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full">
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-normal text-center text-white"
      >
        Financial Real-time Insight <span className="text-secondary">&</span>{' '}
        Data Aggregator <span className="text-secondary">for</span> Yield
      </motion.h4>
      <div className="flex flex-col gap-2 sm:gap-3 max-w-lg mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="font-normal text-sm leading-5 tracking-[0px] text-center text-secondary"
        >
          Friday AI turns real-time news into tokens. AI-agents analyzes trends,
          mindshare and attention.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="font-normal text-sm leading-5 tracking-[0px] text-center text-secondary"
        >
          FRIDAY uses profits from successful token launches to buyback and burn
          $FRIDAY
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;
