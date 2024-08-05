import React from 'react';
import styles from './button.module.css';
import cn from 'classnames';

const Button = ({
  variant = 'primary',
  size = 'default',
  classNames,
  children,
  ...props
}) => {
  return (
    <button
      className={cn({
        [styles.primary]: variant == 'primary',
        [styles.secondary]: variant == 'secondary',
        [styles.destructive]: variant == 'destructive',
        [styles.ghost]: variant == 'ghost',
        [styles.sm]: size == 'sm',
        [styles.md]: size == 'md',
        [styles.lg]: size == 'lg',
        [styles.xl]: size == 'xl',
        [styles.button]: true,
        [classNames]: true,
      })}
      {...props}>
      {children}
    </button>
  );
};

export { Button };
