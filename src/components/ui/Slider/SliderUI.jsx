import React from 'react';

const SliderUI = ({ minValue, maxValue, ...props }) => {
  const gridStyle = {
    gridTemplateColumns: `${minValue != undefined ? 'min-content' : ''} 1fr ${maxValue != undefined ? 'min-content' : ''}`,
  };
  return (
    <div
      style={gridStyle}
      className="grid touch-none grid-cols-[min-content_1fr_min-content] items-center gap-4">
      {minValue != undefined && (
        <div className="rounded-xl border border-solid border-gray-200 bg-alpha-light-900 px-4 py-2.5 text-base font-medium text-alpha-dark-700 shadow-sm">
          {minValue}
        </div>
      )}
      <div className="relative">
        <div
          ref={props.rangeLineRef}
          className="relative h-1.5 w-full overflow-hidden rounded-md bg-gray-200">
          <div
            ref={props.blueLineRef}
            className="absolute right-full top-0 h-full w-full bg-blue-600 will-change-transform"></div>
        </div>
        <div
          ref={props.rangeThumbRef}
          className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center justify-center gap-0.5 rounded-[10px] border border-solid border-gray-400 bg-alpha-light-900 px-4 py-2 outline outline-0 -outline-offset-1 outline-blue-300 transition-colors will-change-transform hover:outline-2">
          <div className="h-2.5 w-px rounded-xl bg-gray-400"></div>
          <div className="h-2.5 w-px rounded-xl bg-gray-400"></div>
          <div className="h-2.5 w-px rounded-xl bg-gray-400"></div>
          <div
            ref={props.rangeThumbNumRef}
            className="invisible absolute bottom-full left-1/2 w-11 -translate-x-1/2 -translate-y-2 rounded-xl border border-solid border-gray-200 bg-alpha-light-900 py-1.5 text-center text-sm font-medium text-alpha-dark-700 opacity-0 shadow-sm transition-all duration-300">
            0
          </div>
        </div>
      </div>
      {maxValue != undefined && (
        <div className="rounded-xl border border-solid border-gray-200 bg-alpha-light-900 px-4 py-2.5 text-base font-medium text-alpha-dark-700 shadow-sm">
          {maxValue}
        </div>
      )}
    </div>
  );
};

export { SliderUI };
