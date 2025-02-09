import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ModelInfo = () => {
  const textControls = useAnimation();
  const imageControls = useAnimation();

  const [textRef, textInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [imageRef, imageInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (textInView) {
      textControls.start('visible');
    }
  }, [textControls, textInView]);

  useEffect(() => {
    if (imageInView) {
      imageControls.start('visible');
    }
  }, [imageControls, imageInView]);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const paragraphs = [
    'We have created a positive flywheel, turning news into profits.',
    'We monitor real-time news and trends from various sources.',
    'We then cross-reference these trends with historically successful token launches.',
    'Our model learns what works, what doesn`t, and why.',
    'Over time, our hit rate will improve, and Friday AI will become the leading deployer of successful tokens.',
    'We use profits to buy back and burn $FRIDAY.',
  ];

  return (
    <div className="w-[90%] mx-auto py-4 px-5 h-full flex items-center justify-between gap-10 max-md:flex-col">
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={textControls}
        variants={textVariants}
        className="w-full max-w-md text-white space-y-6"
      >
        <motion.h2
          variants={paragraphVariants}
          className="font-normal text-[50px] leading-[55.7px] tracking-[0px] text-left"
        >
          The Model
        </motion.h2>
        <div className="flex flex-col w-full gap-4 font-semibold text-base leading-5 tracking-[-1px]">
          {paragraphs.map((text, index) => (
            <motion.p key={index} variants={paragraphVariants}>
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={imageControls}
        variants={imageVariants}
        className="w-full md:w-1/2"
      >
        <Image
          src="/images/diagram.png"
          alt="model"
          width={704}
          height={768}
          quality={100}
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
};

export default ModelInfo;
