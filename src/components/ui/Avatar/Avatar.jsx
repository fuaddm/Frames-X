import React from 'react';
import Image from 'next/image';

const Avatar = ({
  size = 'base',
  src,
  isOnline,
  isReverse,
  name,
  caption,
  alt = '',
}) => {
  let avatarWidth;
  let onlineWidth;
  let gap;
  let fontSize;
  let fontWeight;

  switch (size) {
    case 'xs':
      avatarWidth = 28;
      onlineWidth = '8px';
      gap = 8;
      fontSize = 12;
      fontWeight = 500;
      break;
    case 'sm':
      avatarWidth = 32;
      onlineWidth = '10px';
      gap = 10;
      fontSize = 14;
      fontWeight = 500;
      break;
    case 'base':
      avatarWidth = 40;
      onlineWidth = '12px';
      gap = 16;
      fontSize = 16;
      fontWeight = 500;
      break;
    case 'md':
      avatarWidth = 44;
      onlineWidth = '14px';
      gap = 16;
      fontSize = 16;
      fontWeight = 500;
      break;
    case 'lg':
      avatarWidth = 56;
      onlineWidth = '16px';
      gap = 16;
      fontSize = 18;
      fontWeight = 500;
      break;
    case 'xl':
      avatarWidth = 72;
      onlineWidth = '20px';
      gap = 16;
      fontSize = 20;
      fontWeight = 600;
      break;
    default:
      avatarWidth = 40;
      onlineWidth = '12px';
      gap = 16;
      fontSize = 16;
      fontWeight = 500;
      break;
  }

  if (name != undefined || caption != undefined) {
    return (
      <div
        style={{ gap: gap + 'px' }}
        className={`${isReverse ? 'flex-row-reverse' : 'flex-row'} flex items-start`}>
        <div
          style={{ width: avatarWidth + 'px', height: avatarWidth + 'px' }}
          className="relative rounded-full border border-gray-200 bg-gray-100">
          {isOnline != undefined && (
            <div
              style={{ width: onlineWidth, height: onlineWidth }}
              className={`${isOnline ? 'bg-green-600' : 'bg-gray-200'} absolute bottom-0 right-0 rounded-full border-2 border-alpha-light-900`}></div>
          )}
          <div className="h-full w-full overflow-hidden rounded-full">
            {src && (
              <Image
                src={src}
                width={avatarWidth}
                height={avatarWidth}
                alt={alt}
              />
            )}
          </div>
        </div>
        <div
          className={`${isReverse ? 'items-end' : 'items-start'} flex flex-col justify-between`}>
          <span
            style={{ fontSize: fontSize + 'px', fontWeight }}
            className="text-alpha-dark-900">
            {name}
          </span>
          <span
            style={{ fontSize: fontSize + 'px', fontWeight: 500 }}
            className="text-alpha-dark-500">
            {caption}
          </span>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{ width: avatarWidth + 'px', height: avatarWidth + 'px' }}
      className="relative rounded-full border border-gray-200 bg-gray-100">
      {isOnline != undefined && (
        <div
          style={{ width: onlineWidth, height: onlineWidth }}
          className={`${isOnline ? 'bg-green-600' : 'bg-gray-200'} absolute bottom-0 right-0 rounded-full border-2 border-alpha-light-900`}></div>
      )}
      <div className="h-full w-full overflow-hidden rounded-full">
        {src && (
          <Image
            src={src}
            width={avatarWidth}
            height={avatarWidth}
            alt={alt}
          />
        )}
      </div>
    </div>
  );
};

export default Avatar;
