'use client';
import React, { useRef } from 'react';
import SvgArrow from '@/svg/SvgArrow';
import styles from './accordion.module.css';

const Accordion = ({ name, title, description, children, isBig }) => {
  const ref = useRef(null);

  function handleClick(e) {
    if (ref.current != null) {
      e.preventDefault();
      ref.current.checked = !ref.current.checked;
    }
  }

  return (
    <label
      onClick={handleClick}
      className={`${!isBig ? 'p-4 hover:outline-2' : 'p-6 pt-5 hover:outline-[3px]'} ${styles.accordion} group relative h-fit w-full overflow-hidden rounded-xl bg-gray-50 shadow-sm outline outline-1 outline-gray-200 transition-[outline-color] hover:outline-blue-300 has-[:checked]:bg-alpha-light-900`}>
      {name && (
        <input
          type="radio"
          className="hidden"
          name={name}
          ref={ref}
        />
      )}
      {!name && (
        <input
          type="checkbox"
          className="hidden"
        />
      )}
      <div className="grid w-full grid-cols-[1fr_min-content] items-center gap-3">
        <span className="text-base font-medium text-alpha-dark-900 md:text-lg">
          {title}
        </span>
        <div className="h-6 w-6">
          <SvgArrow className="h-full w-full -rotate-90 fill-gray-400 transition group-hover:fill-gray-600 group-has-[:checked]:rotate-90" />
        </div>
      </div>
      <div className="h-0 group-has-[:checked]:h-full">
        <div className="h-3"></div>
        <div className={styles.appear}>
          {description && (
            <span className="text-base font-normal text-alpha-dark-700">
              {description}
            </span>
          )}
          {children}
        </div>
      </div>
    </label>
  );
};

export { Accordion };
