'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Settings, Github, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

interface Section {
  icon: React.ReactNode;
  title: string;
  content: string[];
}

interface Line {
  start: { x: number; y: number };
  end: { x: number; y: number };
  dots: { x: number; y: number }[];
}

interface BoxProps {
  icon: React.ReactNode;
  title: string;
  content: string[] | string[];
  className?: string;
}

const InfoSection = () => {
  const sections: Section[] = [
    {
      icon: <Settings className="w-5 h-5 text-white" />,
      title: 'CORE DIRECTIVE',
      content: [
        'Launch tokens on pump fun based on current news and market trends. Our AI gathers information and analyzes data from various sources using different AI systems and techniques.',
        'This means FRIDAY learns from different behaviors and will exponentially outperform over time. As FRIDAY is the dev of each token launched, there is no downside or risk of loss.',
      ],
    },
    {
      icon: <Github className="w-5 h-5 text-white" />,
      title: 'OPEN SOURCE',
      content: [
        "The source code for this AI agent will be made publicly available, enabling developers to fork it and contribute to FRIDAY's ongoing development. By encouraging collaboration and innovation, we aim to build a versatile ecosystem where users can expand upon the foundation we've created.",
        'Developers will also be able to use FRIDAY to launch their own tokens, leveraging the same model outlined above and tailoring it to different use cases.',
      ],
    },
    {
      icon: <Eye className="w-5 h-5 text-white" />,
      title: 'VISION',
      content: [
        "This AI agent is more than just a tool-it's a catalyst for innovation. By integrating real-time insights, advanced automation, and open-source accessibility, we empower users and developers to transform how tokens are launched and managed.",
        'Our vision is to foster a positive flywheel effect, where each successful launch drives further advancements and opportunities. By building a collaborative ecosystem, we aim to redefine the role of AI in token creation, unlocking new possibilities for creativity, growth, and community-driven development.',
      ],
    },
  ];

  const features: string[] = [
    'Gathers information from multiple data sources.',
    'Launches tokens based on market trends and current news events.',
    'Analyzes market trends and tokens using multiple AI agents with different approaches.',
    'Improves exponentially over time.',
    'Buys back and burns $FRIDAY by taking profits from successful launches.',
    "Uses different wallets for each launch, ensuring it's not apparent that FRIDAY is the dev until after each token's success (promoting fair distribution and reducing sniping).",
    "$FRIDAY's value will increase over time.",
  ];

  const [lines, setLines] = useState<Line[]>([]);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const calculateLines = () => {
      if (boxRefs.current.length < 4) return;

      const boxes = boxRefs.current.map((ref) => ref?.getBoundingClientRect());
      const containerRect =
        boxRefs.current[0]?.parentElement?.getBoundingClientRect();

      if (!boxes[0] || !containerRect) return;

      const getRelativePosition = (rect: DOMRect | undefined) => {
        if (!rect || !containerRect) return { x: 0, y: 0, width: 0, height: 0 };
        return {
          x: rect.x - containerRect.x,
          y: rect.y - containerRect.y,
          width: rect.width,
          height: rect.height,
        };
      };

      const boxPositions = boxes.map(getRelativePosition);

      const newLines = [
        // Core Directive to Key Features
        {
          start: {
            x: boxPositions[0].x + boxPositions[0].width,
            y: boxPositions[0].y + boxPositions[0].height / 2,
          },
          end: {
            x: boxPositions[1].x,
            y: boxPositions[1].y + boxPositions[1].height / 2,
          },
          dots: [
            {
              x: boxPositions[0].x + boxPositions[0].width + 40,
              y: boxPositions[0].y + boxPositions[0].height / 2,
            },
            {
              x: boxPositions[1].x - 40,
              y: boxPositions[1].y + boxPositions[1].height / 2,
            },
          ],
        },
        // Key Features to Open Source
        {
          start: {
            x: boxPositions[1].x,
            y: boxPositions[1].y + boxPositions[1].height,
          },
          end: {
            x: boxPositions[2].x + boxPositions[2].width,
            y: boxPositions[2].y,
          },
          dots: [
            {
              x: boxPositions[1].x - 40,
              y: boxPositions[1].y + boxPositions[1].height + 40,
            },
            {
              x: boxPositions[2].x + boxPositions[2].width + 40,
              y: boxPositions[2].y - 40,
            },
          ],
        },
        // Open Source to Vision
        {
          start: {
            x: boxPositions[2].x + boxPositions[2].width,
            y: boxPositions[2].y + boxPositions[2].height / 2,
          },
          end: {
            x: boxPositions[3].x,
            y: boxPositions[3].y + boxPositions[3].height / 2,
          },
          dots: [
            {
              x: boxPositions[2].x + boxPositions[2].width + 40,
              y: boxPositions[2].y + boxPositions[2].height / 2,
            },
            {
              x: boxPositions[3].x - 40,
              y: boxPositions[3].y + boxPositions[3].height / 2,
            },
          ],
        },
      ];

      setLines(newLines);
    };

    calculateLines();
    window.addEventListener('resize', calculateLines);
    return () => window.removeEventListener('resize', calculateLines);
  }, []);

  const Box: React.FC<BoxProps> = ({
    icon,
    title,
    content,
    className = '',
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative bg-black rounded-2xl p-6 border border-white/10 ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl opacity-10 bg-grid" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h2 className="text-white font-mono text-sm tracking-[0.2em]">
            {title}
          </h2>
        </div>
        {Array.isArray(content) ? (
          <div className="space-y-4">
            {content.map((paragraph, i) => (
              <p
                key={i}
                className="text-white/80 font-mono text-xs leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="text-white/80 font-mono text-xs leading-relaxed flex items-start"
              >
                <span className="mr-2">-</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="relative">
        {/* Core Directive - Left */}
        <div
          className="w-full max-w-lg mb-32"
          ref={(el: HTMLDivElement | null) => {
            if (boxRefs.current) boxRefs.current[0] = el;
          }}
        >
          <Box
            icon={sections[0].icon}
            title={sections[0].title}
            content={sections[0].content}
          />
        </div>

        {/* Key Features - Right */}
        <div
          className="w-full max-w-lg ml-auto mb-32"
          ref={(el: HTMLDivElement | null) => {
            if (boxRefs.current) boxRefs.current[1] = el;
          }}
        >
          <Box
            icon={<Settings className="w-5 h-5 text-white" />}
            title="KEY FEATURES"
            content={features}
          />
        </div>

        {/* Open Source - Left */}
        <div
          className="w-full max-w-lg mb-32"
          ref={(el: HTMLDivElement | null) => {
            if (boxRefs.current) boxRefs.current[2] = el;
          }}
        >
          <Box
            icon={sections[1].icon}
            title={sections[1].title}
            content={sections[1].content}
          />
        </div>

        {/* Vision - Right */}
        <div
          className="w-full max-w-lg ml-auto"
          ref={(el: HTMLDivElement | null) => {
            if (boxRefs.current) boxRefs.current[3] = el;
          }}
        >
          <Box
            icon={sections[2].icon}
            title={sections[2].title}
            content={sections[2].content}
          />
        </div>

        {/* Connecting Lines */}
        <motion.svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block -z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {lines.map((line, index) => (
            <motion.path
              key={index}
              d={`M ${line.start.x},${line.start.y} 
          C ${line.dots[0].x},${line.dots[0].y} 
            ${line.dots[1].x},${line.dots[1].y} 
            ${line.end.x},${line.end.y}`}
              className="stroke-white/20"
              fill="none"
              strokeWidth="1"
              variants={{
                hidden: { pathLength: 0 },
                visible: {
                  pathLength: 1,
                  transition: { duration: 0.5, delay: 0.3 * index },
                },
              }}
            />
          ))}
        </motion.svg>
      </div>

      <style jsx>{`
        .bg-grid {
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default InfoSection;
