'use client';
import React, { useLayoutEffect, useRef, useState } from 'react';

const Tabs = ({ tabs, onClick = () => {} }) => {
  const firstTabRef = useRef(null);
  const [mainTab, setMainTab] = useState({
    width: undefined,
    height: undefined,
    transform: undefined,
    tabIndex: 0,
  });

  const [shadowTab, setShadowTab] = useState({
    width: undefined,
    height: undefined,
    transform: undefined,
    display: 'hidden',
    tabIndex: 0,
  });

  const handleClick = (e, index) => {
    setMainTab({
      width: e.currentTarget.offsetWidth + 'px',
      height: e.currentTarget.offsetHeight + 'px',
      transform: `translateX(${e.currentTarget.offsetLeft - 2}px)`,
      opacity: 1,
      tabIndex: index,
    });
    onClick();
  };

  const handleHover = (e, index) => {
    if (index != mainTab.tabIndex) {
      setShadowTab({
        width: e.currentTarget.offsetWidth + 'px',
        height: e.currentTarget.offsetHeight + 'px',
        transform: `translateX(${e.currentTarget.offsetLeft - 2}px)`,
        display: 'block',
        tabIndex: index,
      });
    }
  };

  function handleMouseLeave() {
    setShadowTab({
      width: undefined,
      height: undefined,
      transform: undefined,
      display: 'none',
      tabIndex: 0,
    });
  }

  useLayoutEffect(() => {
    setMainTab({
      width: firstTabRef.current.offsetWidth + 'px',
      height: firstTabRef.current.offsetHeight + 'px',
      transform: `translateX(${firstTabRef.current.offsetLeft - 2}px)`,
      opacity: 1,
      tabIndex: 0,
    });
  }, [firstTabRef.current]);

  return (
    <div
      onMouseLeave={() => handleMouseLeave()}
      className="relative flex items-center gap-0.5 rounded-xl bg-gray-100 p-0.5">
      <div
        style={mainTab}
        className="absolute bottom-0.5 left-0.5 top-0.5 z-20 rounded-xl border border-gray-200 bg-alpha-light-900 opacity-0 transition-[width,height,transform]"></div>
      <div
        style={shadowTab}
        className="absolute bottom-0.5 left-0.5 top-0.5 z-10 hidden rounded-xl bg-alpha-dark-50 transition-[width,height,transform]"></div>
      {tabs.map((tab, index) => {
        return (
          <span
            key={index}
            ref={index == 0 ? firstTabRef : null}
            onClick={(e) => handleClick(e, index)}
            onMouseEnter={(e) => handleHover(e, index)}
            className={`${mainTab.tabIndex == index ? 'text-alpha-dark-900' : 'text-alpha-dark-400'} relative z-30 px-3 py-1.5 text-sm font-medium transition-all`}>
            {tab}
          </span>
        );
      })}
    </div>
  );
};

export { Tabs };
