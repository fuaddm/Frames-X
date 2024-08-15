import React from 'react';
import cn from 'classnames';
import styles from './badge.module.css';

const Badge = ({
  size,
  variant, // warning, success, error
  type,
  classNames,
  children,
  ...props
}) => {
  return (
    <div
      tabIndex={0}
      className={cn({
        [styles.badge]: true,
        [styles.sm]: size == 'sm' || !['sm', 'md', 'lg', 'xl'].includes(size),
        [styles.md]: size == 'md',
        [styles.lg]: size == 'lg',
        [styles.xl]: size == 'xl',
        [styles.warning]: variant == 'warning',
        [styles.success]: variant == 'success',
        [styles.error]: variant == 'error',
        [styles.ghost]: type == 'ghost',
        [classNames]: true,
      })}
      {...props}>
      {children}
    </div>
  );
};

export { Badge };
