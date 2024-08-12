'use client';
import React, { useEffect, useRef } from 'react';
import styles from './slider.module.css';
import cn from 'classnames';

const Slider = ({}) => {
  const rangeThumbRef = useRef(null);
  const rangeThumbNumRef = useRef(null);
  const blueLineRef = useRef(null);
  const rangeLineRef = useRef(null);

  // Mouse control
  useEffect(() => {
    if (rangeLineRef.current && rangeThumbRef.current) {
      let maxRangePx =
        rangeLineRef.current.offsetWidth - rangeThumbRef.current.offsetWidth;
      let range = 0;
      let numTimeOut;
      let lastClientX = 0;

      function deleteThumbNum() {
        clearTimeout(numTimeOut);
        numTimeOut = setTimeout(() => {
          rangeThumbNumRef.current.style.visibility = 'invisible';
          rangeThumbNumRef.current.style.opacity = '0';
        }, 1000);
      }

      function createThumbNum() {
        rangeThumbNumRef.current.style.visibility = 'visible';
        rangeThumbNumRef.current.style.opacity = '1';
        deleteThumbNum();
      }

      function moveMouse(e) {
        range += e.clientX - lastClientX;
        lastClientX = e.clientX;

        if (range <= maxRangePx && range >= 0) {
          rangeThumbRef.current.style.transform = `translateY(-50%) translateX(${range}px)`;
          blueLineRef.current.style.transform = `translateX(${range}px)`;
        }

        if (range > maxRangePx) {
          range = maxRangePx;
          rangeThumbRef.current.style.transform = `translateY(-50%) translateX(${maxRangePx}px)`;
          blueLineRef.current.style.transform = `translateX(${maxRangePx}px)`;
        }

        if (range < 0) {
          range = 0;
          rangeThumbRef.current.style.transform = `translateY(-50%) translateX(0px)`;
          blueLineRef.current.style.transform = `translateX(0px)`;
        }

        const percentageOfRange = Math.round((range / maxRangePx) * 100);
        rangeThumbNumRef.current.innerText = percentageOfRange;
      }

      function downMouse(e) {
        lastClientX = e.clientX;

        clearTimeout(numTimeOut);

        document.addEventListener('mousemove', moveMouse);

        createThumbNum();
      }

      function upMouse() {
        document.removeEventListener('mousemove', moveMouse);
      }

      function downMouseLine(e) {
        if (lastClientX == 0) {
          range = e.offsetX - rangeThumbRef.current.offsetWidth / 2;
          lastClientX = e.clientX;
        } else {
          range += e.clientX - lastClientX;
          lastClientX = e.clientX;
        }

        if (range <= maxRangePx && range >= 0) {
          rangeThumbRef.current.style.transform = `translateY(-50%) translateX(${range}px)`;
          blueLineRef.current.style.transform = `translateX(${range}px)`;
        } else if (range > maxRangePx) {
          range = maxRangePx;
          rangeThumbRef.current.style.transform = `translateY(-50%) translateX(${maxRangePx}px)`;
          blueLineRef.current.style.transform = `translateX(${maxRangePx}px)`;
        } else if (range < 0) {
          range = 0;
          rangeThumbRef.current.style.transform = `translateY(-50%) translateX(0px)`;
          blueLineRef.current.style.transform = `translateX(0px)`;
        }

        const percentageOfRange = Math.round((range / maxRangePx) * 100);
        rangeThumbNumRef.current.innerText = percentageOfRange;

        createThumbNum();
      }

      rangeLineRef.current.addEventListener('click', downMouseLine);
      rangeThumbRef.current.addEventListener('mousedown', downMouse);
      document.addEventListener('mouseup', upMouse);

      return () => {
        if (rangeLineRef.current && rangeThumbRef.current) {
          rangeLineRef.current.removeEventListener('click', downMouseLine);
          rangeThumbRef.current.removeEventListener('mousedown', downMouse);
        }
        document.removeEventListener('mouseup', upMouse);
      };
    }
  }, [rangeThumbRef.current, rangeThumbNumRef.current]);

  // Touch control
  useEffect(() => {
    let maxRangePx = 0;
    let range = 0;
    let numTimeOut;
    let lastClientX = 0;
  }, [rangeThumbRef.current, rangeThumbNumRef.current]);

  return (
    <div className="grid grid-cols-[min-content_1fr_min-content] items-center gap-4">
      <div className="rounded-xl border border-solid border-gray-200 bg-alpha-light-900 px-4 py-2.5 text-base font-medium text-alpha-dark-700 shadow-sm">
        0
      </div>
      <div className="relative">
        <div
          ref={rangeLineRef}
          className="relative h-1.5 w-full overflow-hidden rounded-md bg-gray-200">
          <div
            ref={blueLineRef}
            className="absolute right-full top-0 h-full w-full bg-blue-600"></div>
        </div>
        <div
          ref={rangeThumbRef}
          className="absolute left-0 top-1/2 flex -translate-y-1/2 items-center justify-center gap-0.5 rounded-[10px] border border-solid border-gray-400 bg-alpha-light-900 px-4 py-2 transition-none">
          <div className="h-2.5 w-px rounded-xl bg-gray-400"></div>
          <div className="h-2.5 w-px rounded-xl bg-gray-400"></div>
          <div className="h-2.5 w-px rounded-xl bg-gray-400"></div>
          <div
            ref={rangeThumbNumRef}
            className="invisible absolute bottom-full left-1/2 w-11 -translate-x-1/2 -translate-y-2 rounded-xl border border-solid border-gray-200 bg-alpha-light-900 py-1.5 text-center text-sm font-medium text-alpha-dark-700 opacity-0 shadow-sm transition-all duration-300">
            0
          </div>
        </div>
      </div>
      <div className="rounded-xl border border-solid border-gray-200 bg-alpha-light-900 px-4 py-2.5 text-base font-medium text-alpha-dark-700 shadow-sm">
        100
      </div>
    </div>
  );
};

export { Slider };
