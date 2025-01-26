'use client';
import React from 'react';
import { motion } from 'framer-motion';

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 w-full">
      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-normal text-center text-white"
      >
        Financial Real-time Insight <span className="text-secondary">&</span>{' '}
        Data Aggregator <span className="text-secondary">for</span> Yield
      </motion.h4>
      <div className="flex flex-col gap-2 sm:gap-3 font-mono">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-sm sm:text-base font-normal leading-tight sm:leading-[19.2px] text-center text-secondary"
        >
          FRIDAY is an AI-driven platform that gathers real-time news insights
          to generate tokens based on current events and market trends.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-sm sm:text-base font-normal leading-tight sm:leading-[19.2px] text-center text-secondary"
        >
          FRIDAY uses profits from successful token launches to buyback and burn
          $FRIDAY
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;
