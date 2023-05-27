import React, { FC, useRef } from 'react';
import { OwnProps } from './types.ts';

export const DropdownList: FC<OwnProps> = ({ values, setDropdownValue }) => {
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const clickHandler: React.MouseEventHandler = (event: React.MouseEvent) => {
    const target = event.target as HTMLSpanElement;

    setDropdownValue(target.id);
  };

  return (
    <div
      ref={dropDownRef}
      className="flex flex-col w-72 bg-blue-300 absolute hidden"
    >
      {values.map((value) => (
        <span key={value} id={value} onClick={clickHandler}>
          {value}
        </span>
      ))}
    </div>
  );
};
