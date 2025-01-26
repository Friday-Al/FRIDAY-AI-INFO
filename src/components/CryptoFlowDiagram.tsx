'use client';
import React from 'react';
import { motion } from 'framer-motion';

const CryptoFlowDiagram = () => {
  const elementVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  };

  return (
    <div className="w-full p-4 md:p-8">
      <div className="w-full aspect-[705/764] relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 705 764"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* FRIDAY box - First to appear */}
          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <rect
              width="128"
              height="55"
              x=".5"
              y=".898"
              stroke="#fff"
              rx="14.5"
            />
            <text
              x="64"
              y="30"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              FRIDAY
            </text>
          </motion.g>

          {/* Line to Twitter Monitors */}
          <motion.path
            stroke="#fff"
            d="M132 28.398S244.5 34.496 275.5 115"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Twitter Monitors box */}
          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <rect
              width="198"
              height="63"
              x="176.5"
              y="115.5"
              stroke="#fff"
              rx="13.5"
            />
            <text
              x="275.5"
              y="147"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              TWITTER MONITORS
            </text>
          </motion.g>

          {/* Three simultaneous lines to right boxes */}
          <motion.g
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            transition={{ duration: 1, delay: 2 }}
          >
            <path
              stroke="#fff"
              d="M381.85 147s44.314-16.504 73.32-42.502C484.176 78.5 530 69.25 530 69.25"
            />
            <path stroke="#fff" d="M381.85 147.5H530" />
            <path
              stroke="#fff"
              d="M381.85 147.5s51.955 14.039 69.302 42.402C468.5 218.266 506.205 225.25 530 225.25"
            />
          </motion.g>

          {/* Right side boxes */}
          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 3 }}
          >
            <rect
              width="169"
              height="53"
              x="535.5"
              y="42.75"
              stroke="#fff"
              rx="13.5"
            />
            <text
              x="620"
              y="69"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              REALTIME NEWS
            </text>

            <rect
              width="169"
              height="53"
              x="535.5"
              y="120.5"
              stroke="#fff"
              rx="13.5"
            />
            <text
              x="620"
              y="147"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              TRENDS
            </text>

            <rect
              width="169"
              height="53"
              x="535.5"
              y="198.25"
              stroke="#fff"
              rx="13.5"
            />
            <text
              x="620"
              y="225"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              KOLS
            </text>
          </motion.g>

          {/* Line from Twitter Monitors to AI Stack */}
          <motion.path
            stroke="#fff"
            d="M285.5 179s38 80.5 38 132"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            transition={{ duration: 1, delay: 3.5 }}
          />

          {/* Line from FRIDAY to AI Stack */}
          <motion.path
            stroke="#979797"
            strokeDasharray="5 5"
            d="M86 438.758H64.5V69.751"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            transition={{ duration: 1, delay: 3.5 }}
          />

          {/* AI STACK box */}
          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 4.5 }}
          >
            <rect
              width="475"
              height="223"
              x="86"
              y="311"
              stroke="#fff"
              rx="23"
            />
            <text
              x="323.5"
              y="341"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              AI STACK: DATA ANALYSIS
            </text>
          </motion.g>

          {/* AI Tools boxes - Staggered appearance */}
          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 5 }}
          >
            <rect
              width="105.695"
              height="105.695"
              x="121.652"
              y="399.5"
              stroke="#fff"
              rx="13.5"
            />
            <text
              x="174"
              y="385"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              CHATGPT
            </text>
            <circle
              cx="174"
              cy="452"
              r="15"
              stroke="white"
              fill="none"
              strokeWidth="2"
            />
          </motion.g>

          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 5.2 }}
          >
            <rect
              width="105.695"
              height="105.695"
              x="270.652"
              y="399.5"
              stroke="#fff"
              rx="13.5"
            />
            <text
              x="323"
              y="385"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              GROK
            </text>
            <line
              x1="293"
              y1="452"
              x2="353"
              y2="452"
              stroke="white"
              strokeWidth="2"
            />
          </motion.g>

          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 5.4 }}
          >
            <rect
              width="105.695"
              height="105.695"
              x="419.652"
              y="399.5"
              stroke="#fff"
              rx="13.5"
            />
            <text
              x="472"
              y="385"
              className="font-mono"
              fill="white"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              SWARMS
            </text>
            <path
              d="M452,432 L492,472 M452,472 L492,432"
              stroke="white"
              strokeWidth="2"
            />
          </motion.g>

          {/* Line to Pump fun token launch */}
          <motion.path
            stroke="#979797"
            strokeDasharray="5 5"
            d="M45.773 77.916V68.75v538.797H148"
            initial="hidden"
            animate="visible"
            variants={lineVariants}
            transition={{ duration: 1, delay: 5.6 }}
          />

          {/* Green bottom section */}
          <motion.g
            initial="hidden"
            animate="visible"
            variants={elementVariants}
            transition={{ duration: 0.5, delay: 6.6 }}
          >
            <rect
              width="314"
              height="64.5"
              x="170.5"
              y="575.25"
              fill="#000"
              stroke="#59D19B"
              rx="14"
            />
            <rect
              width="54.352"
              height="54.352"
              x="176.5"
              y="580.324"
              fill="#52D395"
              fillOpacity=".221"
              stroke="#53D294"
              rx="10"
            />
            <text
              x="350"
              y="602"
              className="font-mono"
              fill="#59D19B"
              textAnchor="middle"
            >
              Pump fun token launch
            </text>
            <text
              x="355"
              y="623"
              className="font-mono"
              fill="#59D19B"
              textAnchor="middle"
            >
              FRIDAY BUYS 10% AS DEV
            </text>

            {/* Green flow lines and bottom text */}
            <path
              stroke="#59D19B"
              strokeDasharray="5 5"
              d="M202.35 656.518v-9.166 28.796h41.226M202.35 691.518v-9.166V734.148h41.226"
            />
            <text
              x="380"
              y="675"
              className="font-mono"
              fill="#59D19B"
              textAnchor="middle"
            >
              FRIDAY takes profits along
            </text>
            <text
              x="355"
              y="695"
              className="font-mono"
              fill="#59D19B"
              textAnchor="middle"
            >
              any successful launch
            </text>
            <text
              x="360"
              y="730"
              className="font-mono"
              fill="#59D19B"
              textAnchor="middle"
            >
              FRIDAY uses profits to
            </text>
            <text
              x="370"
              y="750"
              className="font-mono"
              fill="#59D19B"
              textAnchor="middle"
            >
              buyback and burn $FRIDAY
            </text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
};

export default CryptoFlowDiagram;
