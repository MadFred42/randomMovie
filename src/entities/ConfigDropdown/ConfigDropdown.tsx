import { FC, useEffect, useRef, useState } from 'react';

import { OwnProps } from './types.ts';
import DropdownList from './DropdownList';
import dropdownButton from 'shared/icons/dropdown-button.svg';
import { isEmpty } from 'shared/lib/isEmpty';
import { useStoreContext } from 'features/hooks/useStoreContext.ts';
import { VideoTypes } from 'shared/types/types.ts';
import { useOutsideClick } from 'features/hooks/useOutsideClick.ts';
import { useToggle } from 'features/hooks/useToggle.ts';

export const ConfigDropdown: FC<OwnProps> = ({ values, children, type }) => {
  const [dropdownValue, setDropdownValue] = useState<string | VideoTypes>('');
  const [isToggle, toggle] = useToggle();
  const { config } = useStoreContext();
  const dropdownButtonRef = useRef<HTMLImageElement | null>(null);
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(dropDownRef, () => toggle(false));

  useEffect(() => {
    if (isEmpty(dropdownValue)) return;

    toggle(!isToggle);

    switch (type) {
      case 'type':
        config.setType(dropdownValue as VideoTypes);
        break;
      case 'rating':
        config.setRating(dropdownValue);
        break;
    }
  }, [dropdownValue]);

  useEffect(() => {
    if (isToggle) {
      dropdownButtonRef.current?.classList.remove('rotate-180');
      dropdownButtonRef.current?.classList.add('rotate-0');
      return;
    }

    dropdownButtonRef.current?.classList.remove('rotate-0');
    dropdownButtonRef.current?.classList.add('rotate-180');
  }, [isToggle]);

  const onClickHandler = () => {
    toggle(!isToggle);
  };

  return (
    <div className="flex-col w-72 relative my-4" ref={dropDownRef}>
      <label className="w-full">
        <div className="text-center h-8 bg-white leading-8 rounded-md">
          {dropdownValue.length > 0 ? (
            dropdownValue
          ) : (
            <span className="italic font-light">{children}</span>
          )}
        </div>
        <img
          ref={dropdownButtonRef}
          onClick={onClickHandler}
          className="absolute right-0 top-0 w-8 bg-blue-300 select-none"
          src={dropdownButton}
        ></img>
      </label>
      <DropdownList
        values={values}
        isToggle={isToggle}
        setDropdownValue={setDropdownValue}
      />
    </div>
  );
};
