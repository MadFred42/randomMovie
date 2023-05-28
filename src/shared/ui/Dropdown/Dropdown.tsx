import { FC, useEffect, useRef, useState } from 'react';
import { OwnProps } from './types.ts';
import { DropdownList } from './DropdownList/DropdownList.tsx';
import dropdownButton from '../../icons/dropdown-button.svg';

export const Dropdown: FC<OwnProps> = ({ values, children }) => {
  const [dropdownValue, setDropdownValue] = useState<string>('');
  const [isList, setIsList] = useState<boolean>(false);
  const dropdownButtonRef = useRef<HTMLImageElement | null>(null);

  const toggleHandler = () => {
    setIsList((prevState) => !prevState);
  };

  useEffect(() => {
    if (isList) {
      dropdownButtonRef.current?.classList.remove('rotate-180');
      dropdownButtonRef.current?.classList.add('rotate-0');
      return;
    }

    dropdownButtonRef.current?.classList.remove('rotate-0');
    dropdownButtonRef.current?.classList.add('rotate-180');
  }, [isList]);

  return (
    <div className="flex-col w-72 relative my-4">
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
          onClick={toggleHandler}
          className="absolute right-0 top-0 w-8 bg-blue-300"
          src={dropdownButton}
        ></img>
      </label>
      <DropdownList
        values={values || ''}
        setDropdownValue={setDropdownValue}
        setIsList={setIsList}
        isList={isList}
      />
    </div>
  );
};
