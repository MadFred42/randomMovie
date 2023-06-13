import { FC, useEffect, useRef, useState } from 'react';

import { useOutsideClick } from 'shared/hooks/useOutsideClick.ts';
import { useToggle } from 'shared/hooks/useToggle.ts';
import { OwnProps } from './types.ts';
import { VideoTypes } from 'shared/types/types.ts';

import DropdownList from './DropdownList';
import ConfigDropdownButton from '../ConfigDropdownButton';

export const ConfigDropdown: FC<OwnProps> = ({
  values,
  children,
  type,
  setConfig,
}) => {
  const [dropdownValue, setDropdownValue] = useState<string | VideoTypes>('');
  const [isToggle, toggle] = useToggle();
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(dropDownRef, () => toggle(false));

  useEffect(() => {
    if (!dropdownValue) return;

    toggle(!isToggle);

    switch (type) {
      case 'type':
        setConfig((prevState) => {
          return { ...prevState, [type]: dropdownValue as VideoTypes };
        });
        break;
      case 'rating':
        setConfig((prevState) => {
          return { ...prevState, [type]: dropdownValue };
        });
        break;
    }
  }, [dropdownValue]);

  const onClickHandler = () => {
    toggle(!isToggle);
  };

  return (
    <>
      <header className="italic">{children}</header>
      <div className="flex-col w-72 relative mb-4" ref={dropDownRef}>
        <label className="w-full">
          <div className="text-center h-8 bg-white leading-8 rounded-md">
            {dropdownValue}
          </div>
          <ConfigDropdownButton
            isToggle={isToggle}
            onClickHandler={onClickHandler}
          />
        </label>
        {isToggle && (
          <DropdownList values={values} setDropdownValue={setDropdownValue} />
        )}
      </div>
    </>
  );
};
