import React from 'react';
import styles from './tooltip.module.css';
import cn from 'classnames';

const Tooltip = ({
  content,
  position = 'top',
  offset = 0,
  children,
  showArrow = false,
  ...props
}) => {
  const allPositions = [
    'top',
    'topLeft',
    'topRight',
    'bottom',
    'bottomLeft',
    'bottomRight',
  ];
  return (
    <div className="group relative w-fit">
      {children}
      <div
        style={{
          top:
            ['top', 'topLeft', 'topRight'].includes(position) ||
            !allPositions.includes(position)
              ? ''
              : `calc(100% + ${offset}px)`,
          bottom: ['bottom', 'bottomLeft', 'bottomRight'].includes(position)
            ? ''
            : `calc(100% + ${offset}px)`,
        }}
        className={cn({
          'group-hover:visible group-hover:opacity-100': true,
          [styles.tooltipWrapper]: true,
          [styles.top]: position == 'top' || !allPositions.includes(position),
          [styles.topLeft]: position == 'topLeft',
          [styles.topRight]: position == 'topRight',
          [styles.bottom]: position == 'bottom',
          [styles.bottomLeft]: position == 'bottomLeft',
          [styles.bottomRight]: position == 'bottomRight',
        })}>
        <div
          {...props}
          className={cn({
            [styles.tooltip]: true,
            [styles.tooltipArrow]: showArrow,
          })}>
          {content}
        </div>
      </div>
    </div>
  );
};

export { Tooltip };
