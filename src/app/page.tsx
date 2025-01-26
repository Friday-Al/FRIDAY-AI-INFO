import CryptoFlowDiagram from '@/components/CryptoFlowDiagram';
import DevelopmentProgress from '@/components/DevelopmentProgress';
import HeroText from '@/components/HeroText';
import InfoSection from '@/components/InfoSection';
import React from 'react';

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col gap-16 large-container">
      <div className="small-container">
        <HeroText />
        <CryptoFlowDiagram />
      </div>
      <DevelopmentProgress />
      <InfoSection />
    </div>
  );
};

export default Page;
