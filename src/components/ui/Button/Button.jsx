import React from 'react';
import styles from './button.module.css';
import cn from 'classnames';

const Button = ({ type = 'primary', size = 'default', children, ...props }) => {
  return (
    <button
      className={cn({
        [styles.primary]: type == 'primary',
        [styles.secondary]: type == 'secondary',
        [styles.destructive]: type == 'destructive',
        [styles.ghost]: type == 'ghost',
        [styles.small]: size == 'small',
        [styles.default]: size == 'default',
        [styles.large]: size == 'large',
        [styles.xl]: size == 'xl',
        [styles.button]: true,
      })}
      {...props}>
      {children}
    </button>
  );
};

export { Button };
