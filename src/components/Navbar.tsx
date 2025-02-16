'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import LiveProgressBar from './LiveProgressBar';
import { SOCIAL_LINKS } from '@/constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <div className="flex justify-between items-center px-1 py-2 md:py-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={150}
            height={50}
            className="w-[120px] md:w-[150px]"
            priority
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <LiveProgressBar />
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  className="hover:opacity-50 ease-out transition-all duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-3 flex flex-col justify-between">
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-white"
            />

            <motion.span
              animate={
                isMenuOpen ? { rotate: -220, y: -5 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.3 }}
              className="w-full h-0.5 bg-white"
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-[-1.25rem] menu-width right-0 bg-black border-b border-white/10"
          >
            <div className="p-4 space-y-4">
              <LiveProgressBar />
              <div className="flex justify-center gap-6 pt-[26px] pb-2">
                {SOCIAL_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex justify-center items-center"
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      className="transform transition-transform duration-200 hover:scale-110 hover:opacity-50 "
                      aria-label={link.label}
                    >
                      {link.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
