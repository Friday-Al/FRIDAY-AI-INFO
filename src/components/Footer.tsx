'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FOOTER_ITEMS } from '@/constants';

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
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

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="w-full border-t border-white/10 pt-16 pb-6"
    >
      <div className="w-[90%] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {/* Logo Section */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 md:col-span-1 max-md:flex max-md:items-center max-md:justify-center"
          >
            <Link href="/">
              <Image
                src="/images/f-logo.png"
                alt="Friday AI"
                width={24}
                height={24}
                className="mb-4"
              />
            </Link>
          </motion.div>

          {/* Menu Sections */}
          {FOOTER_ITEMS.map((section, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col gap-4"
            >
              <h3 className="font-normal text-sm leading-[16.8px] text-white/40">
                {section.title}
              </h3>
              <div className="flex flex-col gap-4">
                {section.links.map((link, linkIndex) => (
                  <motion.div
                    key={linkIndex}
                    variants={itemVariants}
                    className="flex items-center gap-2"
                  >
                    <Link
                      href={link.href}
                      className={`font-normal text-sm leading-[16.8px] ${
                        link.isActive
                          ? 'text-white hover:text-white/80'
                          : 'text-white/40 cursor-not-allowed'
                      } transition-colors`}
                    >
                      {link.label}
                    </Link>
                    {link.badge && (
                      <span className="px-1.5 py-0.5 bg-white/10 rounded font-normal text-[10px] leading-3 text-white/40">
                        {link.badge}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Copyright */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <p className="font-normal text-[10px] leading-3 text-white/40">
            © 2025 FRIDAY AI. ALL RIGHTS RESERVED.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
