import React from 'react';
import styles from './button.module.css';
import cn from 'classnames';

const Button = ({
  variant = 'primary',
  size = 'md',
  classNames,
  children,
  ...props
}) => {
  const allSizes = ['sm', 'md', 'lg', 'xl'];
  return (
    <button
      className={cn({
        [styles.primary]: variant == 'primary',
        [styles.secondary]: variant == 'secondary',
        [styles.destructive]: variant == 'destructive',
        [styles.ghost]: variant == 'ghost',
        [styles.sm]: size == 'sm',
        [styles.md]: size == 'md' || !allSizes.includes(size),
        [styles.lg]: size == 'lg',
        [styles.xl]: size == 'xl',
        [styles.button]: true,
        'w-fit': true,
        [classNames]: true,
      })}
      {...props}>
      {children}
    </button>
  );
};

export { Button };
