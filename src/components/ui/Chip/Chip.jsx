import SvgClose from '@/svg/SvgClose';
import React from 'react';
import cn from 'classnames';
import styles from './chip.module.css';

const Chip = ({ size, classNames, isActive = false, ...props }) => {
  return (
    <div
      tabIndex={0}
      className={cn({
        [styles.sm]: size == 'sm' || !['sm', 'md', 'lg', 'xl'].includes(size),
        [styles.md]: size == 'md',
        [styles.lg]: size == 'lg',
        [styles.xl]: size == 'xl',
        [styles.chip]: true,
        [styles.active]: isActive,
        [classNames]: true,
      })}
      {...props}>
      <span>Label</span>
      <SvgClose />
    </div>
  );
};

export { Chip };
