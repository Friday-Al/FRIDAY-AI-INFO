'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';
import { useIsMobile } from '@/hooks/use-mobile';

interface Slogan {
  text: string;
  color: string;
  bgColor?: string;
  href?: string;
}

const DashboardShow = () => {
  const router = useRouter();
  const imageControls = useAnimation();
  const textControls = useAnimation();
  const [currentSloganIndex, setCurrentSloganIndex] = useState(0);

  const isMobile = useIsMobile();

  const [imageRef, imageInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [textRef, textInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (imageInView) {
      imageControls.start('visible');
    }
  }, [imageControls, imageInView]);

  useEffect(() => {
    if (textInView) {
      textControls.start('visible');
    }
  }, [textControls, textInView]);

  const staticSlogans: Slogan[] = [
    {
      text: '15 TOKENS LAUNCHED',
      color: '#FFFFFF',
    },
    {
      text: '$16K PROFITS',
      color: '#2FEF92',
    },
    {
      text: '2.5M $FRIDAY BURNED',
      color: '#FF5843',
    },
  ];

  const buyButton: Slogan = {
    text: 'BUY $FRIDAY   >',
    color: '#FFFFFF',
    bgColor: '#d8d8d814',
    href: 'https://jup.ag/swap/SOL-B29VFNAL4vh7rNcZMCmsHkZaYzUaVj3UinU3dFh6pump',
  };

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSloganIndex((prev) => (prev + 1) % staticSlogans.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const slideVariants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const onItemClick = (href?: string) => {
    if (!href) return;
    router.push(href);
  };

  return (
    <div>
      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={imageControls}
        variants={imageVariants}
        className="relative w-full aspect-[2200/1109] max-w-[90%] mx-auto"
      >
        <Image
          src="/images/dashboard.png"
          fill
          alt="dashboard"
          className="object-fit"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          quality={100}
          priority
        />
      </motion.div>

      <div className="border-y border-white border-opacity-[0.06] w-full bg-black">
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={containerVariants}
          className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center py-4 md:py-7 space-y-4 md:space-y-0"
        >
          {isMobile ? (
            <div className="w-full flex flex-col gap-4">
              <div className="w-full h-[33px] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSloganIndex}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="absolute w-full"
                  >
                    <div
                      className="font-normal text-sm leading-[16.8px] tracking-[0px] py-2 px-4 rounded-[4px] text-center w-full"
                      style={{
                        color: staticSlogans[currentSloganIndex].color,
                        backgroundColor:
                          staticSlogans[currentSloganIndex].bgColor,
                      }}
                    >
                      {staticSlogans[currentSloganIndex].text}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer font-normal text-sm leading-[16.8px] tracking-[0px] py-2 px-4 rounded-[4px] text-center w-full"
                style={{
                  color: buyButton.color,
                  backgroundColor: buyButton.bgColor,
                }}
                onClick={() => onItemClick(buyButton.href)}
              >
                {buyButton.text}
              </motion.div>
            </div>
          ) : (
            [...staticSlogans, buyButton].map((slogan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  font-normal text-sm leading-[16.8px] tracking-[0px] py-2 px-4 rounded-[4px] text-center md:text-left w-full md:w-auto
                  ${slogan.href && 'cursor-pointer'}`}
                style={{
                  color: slogan.color,
                  backgroundColor: slogan.bgColor,
                }}
                onClick={() => onItemClick(slogan.href)}
              >
                {slogan.text}
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardShow;
