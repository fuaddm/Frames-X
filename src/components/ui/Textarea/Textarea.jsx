import React from 'react';
import cn from 'classnames';
import styles from './textarea.module.css';

const Textarea = ({
  size = 'sm',
  isDisabled = false,
  classNames,
  ...props
}) => {
  return (
    <textarea
      disabled={isDisabled}
      className={cn({
        [styles.sm]: size == 'sm' || !['sm', 'md', 'lg'].includes(size),
        [styles.md]: size == 'md',
        [styles.lg]: size == 'lg',
        [styles.textarea]: true,
        [styles.disabled]: isDisabled,
        [classNames]: true,
      })}
      {...props}></textarea>
  );
};

export { Textarea };
