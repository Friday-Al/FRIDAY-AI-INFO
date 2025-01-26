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
            <g transform="translate(158, 436)">
              <ChatGPTLogo />
            </g>
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
            <g transform="translate(307, 436)">
              <GrokLogo />
            </g>
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
              Hive
            </text>
            <g transform="translate(456, 436)">
              <HiveLogo />
            </g>
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
            <g transform="translate(182, 586) scale(0.11)">
              <PumpfunLogo />
            </g>
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

const ChatGPTLogo = () => (
  <svg viewBox="0 0 32 32" width="32" height="32">
    <path
      fill="#fff"
      d="M29.71,13.09A8.09,8.09,0,0,0,20.34,2.68a8.08,8.08,0,0,0-13.7,2.9A8.08,8.08,0,0,0,2.3,18.9,8,8,0,0,0,3,25.45a8.08,8.08,0,0,0,8.69,3.87,8,8,0,0,0,6,2.68,8.09,8.09,0,0,0,7.7-5.61,8,8,0,0,0,5.33-3.86A8.09,8.09,0,0,0,29.71,13.09Zm-12,16.82a6,6,0,0,1-3.84-1.39l.19-.11,6.37-3.68a1,1,0,0,0,.53-.91v-9l2.69,1.56a.08.08,0,0,1,.05.07v7.44A6,6,0,0,1,17.68,29.91ZM4.8,24.41a6,6,0,0,1-.71-4l.19.11,6.37,3.68a1,1,0,0,0,1,0l7.79-4.49V22.8a.09.09,0,0,1-.05.07L13,26.55A6,6,0,0,1,4.8,24.41ZM3.12,10.53A6,6,0,0,1,6.28,7.9v7.57a1,1,0,0,0,.51.9l7.75,4.47L11.85,22.4a.14.14,0,0,1-.09,0L5.32,18.68a6,6,0,0,1-2.2-8.18Zm22.13,5.14-7.78-4.52L20.16,9.6a.08.08,0,0,1,.09,0l6.44,3.72a6,6,0,0,1-.9,10.81V16.56A1.06,1.06,0,0,0,25.25,15.67Zm2.68-4-.19-.12-6.36-3.7a1,1,0,0,0-1.05,0l-7.78,4.49V9.2a.09.09,0,0,1,.05-.07L19,5.4a6,6,0,0,1,8.91,6.21ZM11.08,17.15,8.38,15.6a.14.14,0,0,1-.05-.07V8.1a6,6,0,0,1,9.84-4.61L18,3.6,11.61,7.28a1,1,0,0,0-.53.91ZM12.54,14,16,12l3.47,2v4L16,20l-3.47-2Z"
    />
  </svg>
);

const GrokLogo = () => (
  <svg
    fill="currentColor"
    fillRule="evenodd"
    height="32px"
    viewBox="0 0 24 24"
    width="32px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Grok</title>
    <path d="M6.469 8.776L16.512 23h-4.464L2.005 8.776H6.47zm-.004 7.9l2.233 3.164L6.467 23H2l4.465-6.324zM22 2.582V23h-3.659V7.764L22 2.582zM22 1l-9.952 14.095-2.233-3.163L17.533 1H22z"></path>
  </svg>
);

const HiveLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none">
    <g fillRule="evenodd">
      <path
        d="M14.219 1.313c.754 0 1.478.311 2.011.864s.833 1.303.833 2.085v19.915c0 .782-.3 1.532-.833 2.085s-1.257.864-2.011.864-1.478-.311-2.011-.864-.833-1.303-.833-2.085V4.261c0-.782.3-1.532.833-2.085s1.257-.864 2.011-.864z"
        fill="url(#A)"
      />
      <path
        d="M5.906 6.125c.754 0 1.478.317 2.011.881s.833 1.329.833 2.126v10.174c0 .798-.3 1.562-.833 2.126s-1.257.881-2.011.881-1.478-.317-2.011-.881-.833-1.329-.833-2.126V9.132c0-.798.3-1.562.833-2.126s1.257-.881 2.011-.881z"
        fill="url(#B)"
      />
      <path
        d="M22.531 6.125c.754 0 1.478.317 2.011.881s.833 1.329.833 2.126v10.174c0 .798-.3 1.562-.833 2.126s-1.257.881-2.011.881-1.477-.317-2.011-.881-.833-1.329-.833-2.126V9.132c0-.798.3-1.562.833-2.126s1.257-.881 2.011-.881z"
        fill="url(#C)"
      />
    </g>
    <defs>
      <linearGradient
        id="A"
        x1="14.219"
        y1="1.313"
        x2="14.219"
        y2="27.125"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#175cff" />
        <stop offset="1" stop-color="#3693f9" />
      </linearGradient>
      <linearGradient
        id="B"
        x1="5.906"
        y1="6.125"
        x2="5.906"
        y2="22.313"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#175cff" />
        <stop offset="1" stop-color="#3693f9" />
      </linearGradient>
      <linearGradient
        id="C"
        x1="22.531"
        y1="6.125"
        x2="22.531"
        y2="22.313"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#175cff" />
        <stop offset="1" stop-color="#3693f9" />
      </linearGradient>
    </defs>
  </svg>
);

const PumpfunLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="389" height="389">
    <path
      fill="#1C3835"
      d="M261.28 4.35795C261.6 4.32955 261.918 4.30776 262.24 4.29661C271.322 3.98188 281.653 3.89572 290.639 5.34927C309.358 8.37684 328.102 18.8913 341.849 31.7351C359.446 48.1761 372.722 70.0151 377.107 93.8777C378.167 99.6468 378.543 105.517 378.739 111.373C378.897 116.059 378.636 120.744 378.4 125.423C377.532 142.579 374.561 155.166 366.507 170.495C358.299 186.119 345.394 199.077 333.519 211.969L301.313 246.716C276.111 274.126 251.407 301.959 225.93 329.12Q216.369 339.299 206.528 349.209C189.607 366.231 176.852 376.582 152.983 382.648C145.918 384.443 138.24 385.817 130.939 386.049Q130.566 386.079 130.193 386.1C101.559 387.717 74.2542 378.888 52.8075 359.754Q51.2153 358.356 49.6751 356.901Q48.135 355.446 46.649 353.935Q45.163 352.425 43.7331 350.861Q42.3033 349.298 40.9315 347.683Q39.5597 346.068 38.2477 344.404Q36.9358 342.74 35.6855 341.03Q34.4352 339.319 33.2482 337.564Q32.0611 335.809 30.939 334.011Q29.8169 332.214 28.7611 330.377Q27.7053 328.54 26.7173 326.665Q25.7293 324.791 24.8104 322.882Q23.8915 320.973 23.0429 319.031Q22.1944 317.09 21.4172 315.118Q20.6401 313.147 19.9355 311.149Q19.2309 309.151 18.5996 307.128Q17.9684 305.105 17.4115 303.061C15.7319 296.913 14.4285 290.624 14.0888 284.246C13.1613 266.832 13.8082 254.236 18.994 237.446C21.2899 230.012 24.1865 222.958 28.048 216.193C38.8592 197.252 56.7925 180.271 71.5183 164.27L128.309 102.321Q147.007 81.6681 166.162 61.4379Q174.677 52.4303 183.475 43.6983C198.98 28.249 212.573 16.8119 233.604 9.48963C238.697 7.71638 244.03 6.11228 249.367 5.27111C253.296 4.65183 257.312 4.55781 261.28 4.35795Z"
    />
    <path
      fill="#B7CACA"
      d="M306.696 28.653C311.463 30.5571 315.89 33.1607 320.158 35.9928C335.949 46.4712 346.664 60.8619 354.071 78.1493C364.251 101.909 363.519 132.349 353.966 156.164C346.862 173.873 334.493 183.965 321.811 197.474Q305.066 215.241 288.612 233.278C282.351 240.045 275.528 246.623 269.875 253.899C263.92 247.018 256.93 240.753 250.167 234.678C253.043 232.048 255.536 228.941 258.21 226.103L279.41 203.309L306.932 174.449C310.698 170.511 314.626 166.677 318.269 162.629C319.067 161.743 319.616 161.006 319.874 159.809C320.313 157.774 322.313 156.093 323.547 154.463C338.376 134.866 342.442 109.668 339.132 85.7195C336.749 68.4826 329.132 50.6888 316.595 38.3949C314.327 36.1707 311.887 34.2123 309.356 32.2961C308.501 31.6492 307.413 31.0792 306.635 30.3747C306.137 29.9241 306.06 29.6535 305.993 29.004L306.696 28.653Z"
    />
    <path
      fill="#34815E"
      d="M237.345 250.845C239.56 252.78 241.586 254.94 243.707 256.977C246.454 259.616 249.296 262.158 252.03 264.81C253.743 266.472 255.375 268.373 257.214 269.882Q235.12 293.972 212.513 317.582C204.412 326.109 196.935 335.23 188.468 343.418C171.891 359.45 151.72 368.656 128.565 369.63C108.781 370.462 90.691 365.823 74.1324 354.887C70.2988 352.355 66.5001 349.689 63.1174 346.569C50.1486 334.604 41.1137 319.663 35.9694 302.86C35.1354 300.136 33.6503 296.704 33.612 293.832C33.6064 293.42 33.6837 293.042 33.7923 292.648C37.7639 300.307 42.3718 307.947 48.3377 314.217C65.0796 331.812 88.3134 343.139 112.741 343.707Q117.551 343.802 122.345 343.399Q127.139 342.996 131.866 342.099C159.275 336.929 174.072 318.521 191.985 299.192L220.57 268.93C226.129 262.973 231.468 256.471 237.345 250.845Z"
    />
    <path
      fill="#5FCB88"
      d="M120.756 138.829C127.83 146.051 135.423 152.857 142.752 159.825L172.555 188.531L226.276 240.082C230.002 243.633 233.593 247.324 237.345 250.845C231.468 256.471 226.129 262.973 220.57 268.93L191.985 299.192C174.072 318.521 159.275 336.929 131.866 342.099Q127.139 342.996 122.345 343.399Q117.551 343.802 112.741 343.707C88.3134 343.139 65.0796 331.812 48.3377 314.217C42.3718 307.947 37.7639 300.307 33.7923 292.648C31.747 288.354 31.3374 279.223 31.2549 274.431C30.8899 253.239 36.5624 231.266 49.6208 214.278C54.3931 208.07 59.9101 202.577 65.3675 196.989L79.6337 182.18C93.3838 167.778 106.912 153.133 120.756 138.829Z"
    />
    <path
      fill="#FEFEFE"
      d="M79.5713 235.436C79.9244 235.455 80.2992 235.509 80.6384 235.611C82.2974 236.109 83.2706 238.138 84.0694 239.524C82.2507 242.809 78.5047 247.188 75.173 248.872Q74.8273 248.788 74.4891 248.677C72.4346 248.021 71.6438 246.739 70.7128 244.938C72.1643 242.069 76.838 237.101 79.5713 235.436Z"
    />
    <path
      fill="#FEFEFE"
      d="M78.1573 309.999C78.552 309.989 78.9684 309.976 79.3574 310.054C81.1904 310.418 87.6213 316.755 88.5673 318.513C89.0751 319.457 89.272 320.564 88.9237 321.598C88.4336 323.052 87.2354 323.814 85.9292 324.437C85.6604 324.486 85.3716 324.502 85.0991 324.467C83.0542 324.202 77.4173 317.874 76.124 316.073C75.5949 315.337 74.7992 314.187 75.0091 313.242C75.3535 311.692 76.9153 310.778 78.1573 309.999Z"
    />
    <path
      fill="#FEFEFE"
      d="M67.324 260.493C68.0619 260.545 68.7495 260.637 69.4321 260.942C70.0734 261.229 70.5784 261.748 70.7967 262.423C71.6465 265.049 70.5844 270.749 70.4888 273.643C70.3307 278.435 70.4136 283.317 71.5309 287.996C72.0394 290.126 73.9237 295.154 72.9167 297.148C72.268 298.434 70.9305 298.938 69.6501 299.354C69.2792 299.336 68.8811 299.316 68.533 299.175C67.2407 298.654 66.398 296.662 65.9326 295.428C63.4154 288.752 61.7681 268.738 64.8699 262.508C65.4632 261.316 66.102 260.946 67.324 260.493Z"
    />
    <path
      fill="#FEFEFE"
      d="M133.815 121.921C139.643 116.011 145.113 109.801 150.774 103.738L185.608 66.608C194.359 57.3122 202.708 47.4647 212.765 39.5201C219.027 34.5737 225.92 30.7826 233.253 27.674Q235.024 26.9354 236.823 26.2706Q238.623 25.6059 240.448 25.0163Q242.274 24.4266 244.123 23.913Q245.971 23.3994 247.839 22.9628Q249.707 22.5262 251.592 22.1673Q253.477 21.8083 255.374 21.5277Q257.272 21.2471 259.18 21.0453Q261.088 20.8435 263.002 20.7208Q264.917 20.5982 266.835 20.5549Q268.753 20.5116 270.671 20.5477Q272.589 20.5838 274.504 20.6993Q276.419 20.8148 278.328 21.0095Q280.236 21.2041 282.135 21.4776Q284.034 21.7511 285.92 22.103Q287.806 22.4549 289.676 22.8845Q291.546 23.3141 293.396 23.8208C297.967 25.0896 302.307 26.8756 306.696 28.653L305.993 29.004C306.06 29.6535 306.137 29.9241 306.635 30.3747C307.413 31.0792 308.501 31.6492 309.356 32.2961C311.887 34.2123 314.327 36.1707 316.595 38.3949C329.132 50.6888 336.749 68.4826 339.132 85.7195C342.442 109.668 338.376 134.866 323.547 154.463C322.313 156.093 320.313 157.774 319.874 159.809C319.616 161.006 319.067 161.743 318.269 162.629C314.626 166.677 310.698 170.511 306.932 174.449L279.41 203.309L258.21 226.103C255.536 228.941 253.043 232.048 250.167 234.678C241.233 227.097 233.107 218.248 224.766 210.017L191.153 177.419C188.204 174.523 185.274 171.576 182.222 168.788C180.11 166.86 177.885 165.054 175.806 163.09Q160.197 148.316 145.108 133.012C141.372 129.278 137.477 125.735 133.815 121.921Z"
    />
  </svg>
);
