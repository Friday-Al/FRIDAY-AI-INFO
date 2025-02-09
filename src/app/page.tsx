'use client';
import HeroText from '@/components/HeroText';
import React from 'react';
import dynamic from 'next/dynamic';
import DashboardShow from '@/components/DashboardShow';
import Modelnfo from '@/components/Modelnfo';

const InfoSection = dynamic(() => import('@/components/InfoSection'), {
  ssr: false,
});

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col gap-20">
      <div className="small-container space-y-20 seperator-line px-10 py-6 max-md:py-4 max-md:px-5">
        <HeroText />
      </div>

      <DashboardShow />
      <Modelnfo />

      <div className="px-10 py-6 max-md:py-4 max-md:px-5 w-full h-full">
        <InfoSection />
      </div>
    </div>
  );
};

export default Page;
