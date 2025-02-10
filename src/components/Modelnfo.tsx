import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FlowDiagram from '@/assets/FlowDiagram';

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
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

  const paragraphs = [
    'We have created a positive flywheel, turning news into profits.',
    'We monitor real-time news and trends from various sources.',
    'We then cross-reference these trends with historically successful token launches.',
    'Our model learns what works, what doesn`t, and why.',
    'Over time, our hit rate will improve, and Friday AI will become the leading deployer of successful tokens.',
    'We use profits to buy back and burn $FRIDAY.',
  ];

  return (
    <div className="w-full relative h-full pt-28">
      <section
        className="w-[90%] mx-auto py-4 px-5 h-full flex items-center justify-center gap-28 max-md:flex-col z-10 relative"
        id="how-it-works"
      >
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
          className="w-full md:w-1/2 max-w-[800px]"
        >
          <FlowDiagram className="w-full h-auto" />
        </motion.div>
      </section>
      <div className="dotted-background w-full h-full absolute inset-0 z-0"></div>
      <div className="gradient-to-bottom absolute inset-0 w-full h-full z-[2]"></div>
    </div>
  );
};

export default ModelInfo;
