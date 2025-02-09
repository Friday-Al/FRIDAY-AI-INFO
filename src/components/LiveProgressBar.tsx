'use client';
import { motion } from 'framer-motion';
import React from 'react';

const LiveProgressBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-md py-3 px-4 text-white flex items-center gap-3 border border-white border-opacity-10"
    >
      <p className="font-normal text-[10px] leading-3 tracking-[0px] whitespace-nowrap">
        LIVE RELEASE PROGRESS
      </p>
      <div className="w-[127px] bg-white/20">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '50%' }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-[3px] bg-white"
        />
      </div>
    </motion.div>
  );
};

export default LiveProgressBar;
