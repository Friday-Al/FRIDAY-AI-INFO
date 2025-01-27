import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex flex-col gap-3 w-full py-6 max-md:pt-4 border-t border-white border-opacity-10 justify-center items-center">
      <Image src="/images/f-logo.png" alt="logo" width={50} height={45} />
      <p className="text-[10px] font-normal leading-3 text-center text-secondary">
        © 2025 FRIDAY AI. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
