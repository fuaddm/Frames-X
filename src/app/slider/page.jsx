import React from 'react';
import { Slider } from '@/components/ui/Slider/Slider';

const Page = () => {
  return (
    <div className="mx-auto flex max-w-[700px] select-none flex-col justify-center gap-10 px-10 py-20">
      <div className="flex w-full flex-col gap-10">
        <Slider />
        <Slider minValue={0} />
        <Slider maxValue={100} />
        <Slider
          minValue={500}
          maxValue={1000}
        />
        <Slider
          minValue={0}
          maxValue={10}
        />
      </div>
    </div>
  );
};

export default Page;
