import Logo from '@/assets/Logo';
import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col gap-3 w-full pt-6 max-md:pt-4 border-t border-white border-opacity-10 justify-center items-center">
      <Logo width={75} height={34} />
      <p className="text-[10px] font-normal leading-3 text-center text-secondary">
        © 2025 FRIDAY AI. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
