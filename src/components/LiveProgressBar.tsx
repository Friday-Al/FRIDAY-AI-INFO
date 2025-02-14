'use client';

import ArrowDownIcon from '@/assets/ArrowDownIcon';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';

type Phase = {
  name: string;
  completed: boolean;
  align: 'left' | 'center' | 'right';
};

const LiveProgressBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phases: Phase[] = [
    { name: 'ROADMAP', completed: true, align: 'left' },
    { name: 'GITHUB RELEASE', completed: true, align: 'center' },
    { name: 'DEMO', completed: true, align: 'center' },
    { name: 'BETA', completed: false, align: 'center' },
    { name: 'PLATFORM RELEASE', completed: false, align: 'right' },
  ];

  return (
    <div className="relative flex justify-center no-scrollbar">
      <motion.div
        initial={{ width: 'auto' }}
        animate={{ width: isOpen ? '600px' : 'auto' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative sm:w-auto md:min-w-[280px]"
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`w-full py-3 px-4 text-white flex items-center gap-3 border border-white border-opacity-10 bg-black focus:outline-none no-scrollbar ${isOpen ? 'rounded-t-md' : 'rounded-md'
            }`}
        >
          <p className="font-normal text-[10px] leading-3 tracking-[0px] whitespace-nowrap">
            LIVE RELEASE PROGRESS
          </p>
          {!isOpen && (
            <div className="w-[127px] bg-white/20 block">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '60%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[3px] bg-white"
              />
            </div>
          )}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="ml-auto"
          >
            <ArrowDownIcon />
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{ marginTop: -1 }}
              className="absolute top-full left-0 right-0 w-full z-10"
            >
              <div className="rounded-b-md border border-white border-opacity-10 bg-black px-4 py-3 space-y-7 overflow-x-auto no-scrollbar">
                {/* Progress Steps */}
                <div className="relative min-w-[500px] md:min-w-0">
                  <div className="flex justify-between relative z-10">
                    {phases.map((phase, index) => (
                      <div
                        key={phase.name}
                        className={`flex flex-col ${phase.name === 'GITHUB RELEASE' ||
                          phase.name === 'PLATFORM RELEASE'
                          ? 'basis-36'
                          : 'basis-24'
                          }`}
                      >
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className={`font-normal text-xs leading-[14.4px] tracking-[0px] whitespace-nowrap ${phase.completed ? 'text-white' : 'text-white/40'
                            }`}
                          style={{
                            textAlign: phase.align,
                          }}
                        >
                          {phase.name}
                        </motion.p>
                      </div>
                    ))}
                  </div>

                  {/* Progress Line */}
                  <div className="absolute top-[26px] left-0 right-0 h-[3px] bg-white/20">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: '57%' }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-white"
                    />
                  </div>
                </div>

                {/* Next Phase Text */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start gap-2 min-w-[500px] md:min-w-0"
                >
                  <span className="font-normal text-[10px] leading-3 tracking-[0px] text-white/40 whitespace-nowrap">
                    NEXT PHASE:
                  </span>
                  <span className="font-normal text-[10px] leading-3 tracking-[0px] text-white whitespace-nowrap">
                    BETA AVAILABLE TO ALL TOKEN HOLDERS
                  </span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default LiveProgressBar;
