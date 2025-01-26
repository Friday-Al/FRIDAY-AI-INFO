import Logo from '@/assets/Logo';
import React from 'react';
import Link from 'next/link';
import TwitterIcon from '@/assets/TwitterIcon';
import TelegramIcon from '@/assets/TelegramIcon';
import GitHubIcon from '@/assets/GitHubIcon';
import DexscreenerIcon from '@/assets/DexscreenerIcon';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <Logo width={75} height={34} />
      <div className="flex items-center gap-2">
        <Link href="">
          <TwitterIcon />
        </Link>
        <Link href="">
          <TelegramIcon />
        </Link>
        <Link href="">
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
