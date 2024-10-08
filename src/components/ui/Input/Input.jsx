import React from 'react';
import styles from './input.module.css';
import cn from 'classnames';

const Input = ({
  size = 'sm',
  type = 'text',
  isDisabled = false,
  classNames,
  ...props
}) => {
  return (
    <input
      type={type}
      {...props}
      disabled={isDisabled}
      className={cn({
        [styles.sm]: size == 'sm' || !['sm', 'md', 'lg'].includes(size),
        [styles.md]: size == 'md',
        [styles.lg]: size == 'lg',
        [styles.input]: true,
        [styles.disabled]: isDisabled,
        [classNames]: true,
      })}
    />
  );
};

export { Input };
