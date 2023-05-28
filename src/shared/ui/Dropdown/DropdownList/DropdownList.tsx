import React, { FC } from 'react';
import { OwnProps } from './types.ts';

export const DropdownList: FC<OwnProps> = ({
  values,
  setDropdownValue,
  setIsList,
  isList,
}) => {
  const listClass = `
    border border-black min-h-10 max-h-32 overflow-scroll absolute flex flex-col top-8 w-72 bg-white z-20 ${
      isList ? '' : 'hidden'
    }
  `;

  const clickHandler: React.MouseEventHandler = (event: React.MouseEvent) => {
    const target = event.target as HTMLSpanElement;

    setDropdownValue(target.id);
    setIsList(false);
  };

  return (
    <div className={listClass}>
      {values.map((value) => (
        <span
          key={value}
          id={value}
          onClick={clickHandler}
          className="my-1 h-fit text-center w-full border-b-emerald-400 hover:bg-blue-300"
        >
          {value}
        </span>
      ))}
    </div>
  );
};
