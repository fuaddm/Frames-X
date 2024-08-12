import React from 'react';
import { Slider } from '@/components/ui/Slider/Slider';

const Page = () => {
  return (
    <div className="mx-auto flex max-w-[500px] select-none flex-col justify-center gap-10 py-20">
      <div className="flex w-full flex-col gap-4">
        <Slider />
        <input type="range" />
      </div>
    </div>
  );
};

export default Page;
