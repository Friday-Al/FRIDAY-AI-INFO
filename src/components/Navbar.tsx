'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import TwitterIcon from '@/assets/TwitterIcon';
import GitHubIcon from '@/assets/GitHubIcon';
import DexscreenerIcon from '@/assets/DexscreenerIcon';
import DiscordIcon from '@/assets/DiscordIcon';
import LiveProgressBar from './LiveProgressBar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const socialLinks = [
    {
      href: 'https://x.com/friday_dot_run',
      icon: <TwitterIcon />,
      label: 'Twitter',
    },
    {
      href: 'https://discord.gg/CSpxET3D6u',
      icon: <DiscordIcon />,
      label: 'Discord',
    },
    {
      href: 'https://github.com/Friday-Al',
      icon: <GitHubIcon />,
      label: 'GitHub',
    },
    {
      href: 'https://dexscreener.com/solana/fdqkxnuypejdhuxwvx1sscfxeuzhsmtmsralhesdffnh',
      icon: <DexscreenerIcon />,
      label: 'Dexscreener',
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="flex justify-between items-center px-4 py-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={150}
            height={50}
            priority
          />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <LiveProgressBar />
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  className="transform transition-transform duration-200 hover:scale-110 hover:opacity-80"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-white"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-0.5 bg-white"
            />
            <motion.span
              animate={
                isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
              }
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
            className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-white/10"
          >
            <div className="p-4 space-y-4">
              <LiveProgressBar />
              <div className="flex justify-center gap-6">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      className="transform transition-transform duration-200 hover:scale-110 hover:opacity-80"
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
