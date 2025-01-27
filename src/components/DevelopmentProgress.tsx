import React from 'react';

const DevelopmentProgress = () => {
  const stages = [
    { name: 'ROADMAP', completed: true, className: 'text-left' },
    { name: 'GITHUB', completed: true, className: 'text-left sm:ml-6' },
    { name: 'DEMO', completed: false, className: 'text-center' },
    { name: 'BETA', completed: false, className: 'text-right sm:mr-8' },
    { name: 'RELEASE', completed: false, className: 'text-right' },
  ];

  const progress = 35; // 20% progress

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-full px-4 sm:px-0">
      <div className="hidden sm:block h-[1px] w-full bg-white/10 flex-1 min-w-[10%]"></div>
      <div className="w-full max-w-[1050px] relative bg-black border rounded-[13px] border-white border-opacity-10">
        <div className="relative py-6 sm:py-8">
          {/* Progress title */}
          <div className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.4em] bg-black text-white text-center mb-6 sm:mb-8 absolute -top-2 left-1/2 -translate-x-1/2 px-2">
            DEVELOPMENT PROGRESS: {progress}%
          </div>

          {/* Stages and progress bar container */}
          <div className="px-4 sm:px-6 space-y-2">
            {/* Stage labels */}
            <div className="grid grid-cols-5 gap-2 sm:gap-4 text-white">
              {stages.map((stage) => (
                <span
                  key={stage.name}
                  className={`text-[8px] sm:text-xs font-normal leading-tight ${stage.className}`}
                >
                  {stage.name}
                </span>
              ))}
            </div>

            {/* Progress bar container */}
            <div className="relative h-6 sm:h-8">
              {/* Base line */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[7px] bg-white/10" />

              {/* Progress fill */}
              <div
                className="absolute top-1/2 -translate-y-1/2 left-0 h-[7px] bg-white"
                style={{ width: `${progress}%` }}
              />

              {/* Stage markers */}
              <div className="absolute top-1 left-0 right-0 flex justify-between">
                {stages.map((stage, index) => {
                  const position = (index / (stages.length - 1)) * 100;
                  const isCompleted = position <= progress;

                  return (
                    <div
                      key={stage.name}
                      className="relative"
                      style={{ height: '17px', width: '3px' }}
                    >
                      <div
                        className={`w-full h-1/2 ${
                          isCompleted ? 'bg-white' : 'bg-white/20'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block h-[1px] w-full bg-white/10 flex-1 min-w-[10%]"></div>
    </div>
  );
};

export default DevelopmentProgress;
