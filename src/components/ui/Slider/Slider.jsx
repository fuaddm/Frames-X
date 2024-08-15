'use client';
import React, { useCallback, useEffect, useRef } from 'react';
import { SliderUI } from './SliderUI';

const Slider = ({ minValue, maxValue }) => {
  const rangeThumbRef = useRef(null);
  const rangeThumbNumRef = useRef(null);
  const blueLineRef = useRef(null);
  const rangeLineRef = useRef(null);
  const rangeRef = useRef(0);
  const lastClientXRef = useRef(0);
  const numTimeOutRef = useRef(null);
  const maxRangePxRef = useRef(0);

  const deleteThumbNum = useCallback(() => {
    clearTimeout(numTimeOutRef.current);
    numTimeOutRef.current = setTimeout(() => {
      rangeThumbNumRef.current.style.visibility = 'invisible';
      rangeThumbNumRef.current.style.opacity = '0';
      rangeThumbRef.current.style.outline = '';
    }, 1000);
  });

  const createThumbNum = useCallback(() => {
    rangeThumbNumRef.current.style.visibility = 'visible';
    rangeThumbNumRef.current.style.opacity = '1';
    rangeThumbRef.current.style.outline = '2px solid var(--blue-600)';
    deleteThumbNum();
  });

  const transformThumbAndBlueLine = useCallback((range) => {
    rangeThumbRef.current.style.transform = `translateY(-50%) translateX(${range}px)`;
    blueLineRef.current.style.transform = `translateX(${range}px)`;
  });

  const createPercentageNum = useCallback((range, maxRangePx) => {
    minValue = minValue == undefined ? 0 : minValue;
    maxValue = maxValue == undefined ? 100 : maxValue;

    const percentageOfRange = Math.round(
      minValue + (range / maxRangePx) * (maxValue - minValue)
    );
    rangeThumbNumRef.current.innerText = percentageOfRange;
  });

  // Mouse control
  useEffect(() => {
    if (rangeLineRef.current && rangeThumbRef.current) {
      function moveMouse(e) {
        rangeRef.current += e.clientX - lastClientXRef.current;
        lastClientXRef.current = e.clientX;

        if (
          rangeRef.current <= maxRangePxRef.current &&
          rangeRef.current >= 0
        ) {
          transformThumbAndBlueLine(rangeRef.current);
        } else if (rangeRef.current > maxRangePxRef.current) {
          rangeRef.current = maxRangePxRef.current;
          transformThumbAndBlueLine(rangeRef.current);
        } else if (rangeRef.current < 0) {
          rangeRef.current = 0;
          transformThumbAndBlueLine(rangeRef.current);
        }

        createPercentageNum(rangeRef.current, maxRangePxRef.current);

        createThumbNum();
      }

      function downMouse(e) {
        lastClientXRef.current = e.clientX;

        document.addEventListener('mousemove', moveMouse);

        createThumbNum();
      }

      function upMouse() {
        document.removeEventListener('mousemove', moveMouse);
      }

      function downMouseLine(e) {
        if (lastClientXRef.current == 0) {
          rangeRef.current = e.offsetX - rangeThumbRef.current.offsetWidth / 2;
          lastClientXRef.current = e.clientX;
        } else {
          rangeRef.current += e.clientX - lastClientXRef.current;
          lastClientXRef.current = e.clientX;
        }

        if (
          rangeRef.current <= maxRangePxRef.current &&
          rangeRef.current >= 0
        ) {
          transformThumbAndBlueLine(rangeRef.current);
        } else if (rangeRef.current > maxRangePxRef.current) {
          rangeRef.current = maxRangePxRef.current;
          transformThumbAndBlueLine(rangeRef.current);
        } else if (rangeRef.current < 0) {
          rangeRef.current = 0;
          transformThumbAndBlueLine(rangeRef.current);
        }

        createPercentageNum(rangeRef.current, maxRangePxRef.current);

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
    if (rangeLineRef.current && rangeThumbRef.current) {
      function moveTouch(e) {
        rangeRef.current += e.targetTouches[0].clientX - lastClientXRef.current;
        lastClientXRef.current = e.targetTouches[0].clientX;

        if (
          rangeRef.current <= maxRangePxRef.current &&
          rangeRef.current >= 0
        ) {
          transformThumbAndBlueLine(rangeRef.current);
        } else if (rangeRef.current > maxRangePxRef.current) {
          rangeRef.current = maxRangePxRef.current;
          transformThumbAndBlueLine(rangeRef.current);
        } else if (rangeRef.current < 0) {
          rangeRef.current = 0;
          transformThumbAndBlueLine(rangeRef.current);
        }

        createPercentageNum(rangeRef.current, maxRangePxRef.current);

        createThumbNum();
      }

      function startTouch(e) {
        lastClientXRef.current = e.targetTouches[0].clientX;

        document.addEventListener('touchmove', moveTouch);

        createThumbNum();
      }

      function endTouch() {
        document.removeEventListener('touchmove', moveTouch);
      }

      rangeThumbRef.current.addEventListener('touchstart', startTouch);
      document.addEventListener('touchend', endTouch);
      document.addEventListener('touchcancel', endTouch);

      return () => {
        if (rangeLineRef.current && rangeThumbRef.current) {
          rangeThumbRef.current.removeEventListener('touchstart', startTouch);
        }
        document.removeEventListener('touchend', endTouch);
        document.removeEventListener('touchcancel', endTouch);
      };
    }
  }, [rangeThumbRef.current, rangeThumbNumRef.current]);

  //
  useEffect(() => {
    if (rangeLineRef.current && rangeThumbRef.current) {
      maxRangePxRef.current =
        rangeLineRef.current.offsetWidth - rangeThumbRef.current.offsetWidth;
      createPercentageNum(rangeRef.current, maxRangePxRef.current);
    }
  }, []);

  return (
    <SliderUI
      minValue={minValue}
      maxValue={maxValue}
      rangeLineRef={rangeLineRef}
      rangeThumbRef={rangeThumbRef}
      rangeThumbNumRef={rangeThumbNumRef}
      blueLineRef={blueLineRef}
    />
  );
};

export { Slider };
