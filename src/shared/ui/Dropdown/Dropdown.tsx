import { FC, useState } from 'react';
import { OwnProps } from './types.ts';
import { DropdownList } from './DropdownList/DropdownList.tsx';

export const Dropdown: FC<OwnProps> = ({ values, type }) => {
  const [dropdownValue, setDropdownValue] = useState<string>('');

  return (
    <div className="flex-col w-72 relative">
      <div className="text-center w-full h-8 bg-white">{dropdownValue}</div>
      <p className="font-thin italic">Please choose a {type}</p>
      <DropdownList values={values || ''} setDropdownValue={setDropdownValue} />
    </div>
  );
};
