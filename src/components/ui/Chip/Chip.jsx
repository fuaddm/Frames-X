'use client';
import SvgClose from '@/svg/SvgClose';
import React, { useState } from 'react';
import cn from 'classnames';
import styles from './chip.module.css';

const Chip = ({
  size,
  classNames,
  children,
  isActive = false,
  onClose = () => {},
  ...props
}) => {
  const [isActivated, setIsActivated] = useState(isActive);
  return (
    <div
      onClick={() => setIsActivated((prev) => !prev)}
      tabIndex={0}
      className={cn({
        [styles.sm]: size == 'sm' || !['sm', 'md', 'lg', 'xl'].includes(size),
        [styles.md]: size == 'md',
        [styles.lg]: size == 'lg',
        [styles.xl]: size == 'xl',
        [styles.chip]: true,
        [styles.active]: isActivated,
        [classNames]: true,
      })}
      {...props}>
      <span>{children}</span>
      <SvgClose onClick={onClose} />
    </div>
  );
};

export { Chip };
