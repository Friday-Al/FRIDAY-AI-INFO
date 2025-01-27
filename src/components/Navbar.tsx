import React from 'react';
import Link from 'next/link';
import TwitterIcon from '@/assets/TwitterIcon';
import TelegramIcon from '@/assets/TelegramIcon';
import GitHubIcon from '@/assets/GitHubIcon';
import DexscreenerIcon from '@/assets/DexscreenerIcon';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <Image src="/images/logo.png" alt="logo" width={150} height={50} />
      <div className="flex items-center gap-2">
        <Link href="https://x.com/friday_dot_run" target="_blank">
          <TwitterIcon />
        </Link>
        <Link href="">
          <TelegramIcon />
        </Link>
        <Link href="https://github.com/Friday-Al" target="_blank">
          <GitHubIcon />
        </Link>
        <Link href="">
          <DexscreenerIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
