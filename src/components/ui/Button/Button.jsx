import React from 'react';
import styles from './button.module.css';
import cn from 'classnames';

const Button = ({
  type = 'primary',
  size = 'default',
  classNames,
  children,
  ...props
}) => {
  return (
    <button
      className={cn({
        [styles.primary]: type == 'primary',
        [styles.secondary]: type == 'secondary',
        [styles.destructive]: type == 'destructive',
        [styles.ghost]: type == 'ghost',
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
