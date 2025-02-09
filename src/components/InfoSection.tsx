'use client';
import React, { useEffect } from 'react';
import ReactFlow, { Edge, Handle, Position, Node } from 'reactflow';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import GroupIcon from '@/assets/GroupIcon';
import FeatureIcon from '@/assets/FeatureIcon';
import KeyIcon from '@/assets/KeyIcon';
import OneZeroIcon from '@/assets/OneZeroIcon';

import 'reactflow/dist/style.css';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobile: windowSize.width < 768,
  };
};

interface NodeData {
  icon: React.ReactNode;
  title: string;
  content: string[];
  type?: 'features';
  isRightSide?: boolean;
}

interface CustomNodeProps {
  data: NodeData;
}

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
  const { isMobile } = useWindowSize();
  const { icon, title, content, type, isRightSide } = data;
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: isRightSide ? 50 : -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
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
        duration: 0.5,
      },
    },
  };

  return (
    <div className={isMobile ? 'w-[300px] mx-auto' : 'w-[598px]'}>
      {!isMobile &&
        (isRightSide ? (
          <Handle
            type="target"
            position={Position.Left}
            className="!bg-white !border-0 w-2 h-2"
            style={{ left: '-10px' }}
          />
        ) : (
          <Handle
            type="source"
            position={Position.Right}
            className="!bg-white !border-0 w-2 h-2"
            style={{ right: '-10px' }}
          />
        ))}

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative rounded-2xl p-6 md:p-8 border border-white"
      >
        <div className="relative">
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
          >
            {icon}
            <h2 className="text-white font-mono text-[18px] md:text-[21px] font-normal">
              {title}
            </h2>
          </motion.div>

          {type === 'features' ? (
            <motion.ul className="space-y-3 md:space-y-4">
              {content.map((feature: string, index: number) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="text-white/90 text-xs md:text-sm font-normal tracking-wide leading-relaxed text-left flex items-start font-mono"
                >
                  <span className="mr-2 md:mr-3 text-white/50">-</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            <motion.div className="space-y-4 md:space-y-6">
              {content.map((paragraph: string, i: number) => (
                <motion.p
                  key={i}
                  variants={itemVariants}
                  className="text-white/90 text-xs md:text-sm font-normal text-left font-mono tracking-wide leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const InfoSection: React.FC = () => {
  const { isMobile } = useWindowSize();
  const nodeTypes = {
    custom: CustomNode,
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const getMobilePositions = () => ({
    core: { x: 25, y: 50 },
    features: { x: 25, y: 430 },
    vision: { x: 25, y: 1060 },
    opensource: { x: 25, y: 1555 },
  });

  const getDesktopPositions = () => ({
    core: { x: 0, y: 50 },
    features: { x: 750, y: 200 },
    opensource: { x: 0, y: 550 },
    vision: { x: 750, y: 800 },
  });

  const positions = isMobile ? getMobilePositions() : getDesktopPositions();

  const initialNodes: Node<NodeData>[] = [
    {
      id: 'core',
      type: 'custom',
      position: positions.core,
      data: {
        icon: (
          <GroupIcon
            className="w-5 h-5 md:w-6 md:h-6 text-white overflow-visible"
            width={isMobile ? 20 : 24}
            height={isMobile ? 20 : 24}
          />
        ),
        title: 'CORE DIRECTIVE',
        content: [
          'Launch tokens on pump fun based on current news and market trends. Our AI gathers information and analyzes data from various sources using different AI systems and techniques.',
          'This means FRIDAY learns from different behaviors and will exponentially outperform over time. As FRIDAY is the dev of each token launched, there is no downside or risk of loss.',
        ],
        isRightSide: false,
      },
    },
    {
      id: 'features',
      type: 'custom',
      position: positions.features,
      data: {
        icon: (
          <FeatureIcon
            className="w-5 h-5 md:w-6 md:h-6 text-white overflow-visible"
            width={isMobile ? 20 : 24}
            height={isMobile ? 20 : 24}
          />
        ),
        title: 'KEY FEATURES',
        type: 'features',
        content: [
          'Gathers information from multiple data sources.',
          'Launches tokens based on market trends and current news events.',
          'Analyzes market trends and tokens using multiple AI agents with different approaches.',
          'Improves exponentially over time.',
          'Buys back and burns $FRIDAY by taking profits from successful launches.',
          "Uses different wallets for each launch, ensuring it's not apparent that FRIDAY is the dev until after each token's success (promoting fair distribution and reducing sniping).",
          "$FRIDAY's value will increase over time.",
        ],
        isRightSide: !isMobile,
      },
    },
    {
      id: 'opensource',
      type: 'custom',
      position: positions.opensource,
      data: {
        icon: (
          <KeyIcon
            className="w-5 h-5 md:w-6 md:h-6 text-white overflow-visible"
            width={isMobile ? 20 : 24}
            height={isMobile ? 20 : 24}
          />
        ),
        title: 'OPEN SOURCE',
        content: [
          "The source code for this AI agent will be made publicly available, enabling developers to fork it and contribute to FRIDAY's ongoing development. By encouraging collaboration and innovation, we aim to build a versatile ecosystem where users can expand upon the foundation we've created.",
          'Developers will also be able to use FRIDAY to launch their own tokens, leveraging the same model outlined above and tailoring it to different use cases.',
        ],
        isRightSide: false,
      },
    },
    {
      id: 'vision',
      type: 'custom',
      position: positions.vision,
      data: {
        icon: (
          <OneZeroIcon
            className="w-5 h-5 md:w-6 md:h-6 text-white overflow-visible"
            width={isMobile ? 20 : 24}
            height={isMobile ? 20 : 24}
          />
        ),
        title: 'VISION',
        content: [
          "This AI agent is more than just a tool-it's a catalyst for innovation. By integrating real-time insights, advanced automation, and open-source accessibility, we empower users and developers to transform how tokens are launched and managed.",
          'Our vision is to foster a positive flywheel effect, where each successful launch drives further advancements and opportunities. By building a collaborative ecosystem, we aim to redefine the role of AI in token creation, unlocking new possibilities for creativity, growth, and community-driven development.',
        ],
        isRightSide: !isMobile,
      },
    },
  ];

  const initialEdges: Edge[] = !isMobile
    ? [
        {
          id: 'core-features',
          source: 'core',
          target: 'features',
          type: 'simplebezier',
          animated: true,
          style: { stroke: 'rgba(255, 255, 255, 1)', strokeWidth: 1 },
        },
        {
          id: 'features-opensource',
          source: 'opensource',
          target: 'features',
          type: 'simplebezier',
          sourceHandle: 'right',
          targetHandle: 'left',
          animated: true,
          style: { stroke: 'rgba(255, 255, 255, 1)', strokeWidth: 1 },
        },
        {
          id: 'opensource-vision',
          source: 'opensource',
          target: 'vision',
          type: 'simplebezier',
          animated: true,
          style: { stroke: 'rgba(255, 255, 255, 1)', strokeWidth: 1 },
        },
      ]
    : [];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={`w-full max-w-[1350px] mx-auto ${
        isMobile ? 'h-[2000px]' : 'h-[1200px]'
      }`}
    >
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        className="bg-transparent mx-auto w-full"
        minZoom={isMobile ? 1 : 0.8}
        maxZoom={isMobile ? 1 : 0.8}
        defaultViewport={{ x: 0, y: 0, zoom: isMobile ? 1 : 0.8 }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        panOnDrag={false}
        selectionOnDrag={false}
        preventScrolling={false}
        proOptions={{ hideAttribution: true }}
      />
    </motion.div>
  );
};

export default InfoSection;
