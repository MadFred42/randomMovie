import { FC, useEffect, useRef } from 'react';
import dropdownButton from 'shared/icons/dropdown-button.svg';
import { OwnProps } from './types.ts';

export const ConfigDropdownButton: FC<OwnProps> = ({
  isToggle,
  onClickHandler,
}) => {
  const dropdownButtonRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (isToggle) {
      dropdownButtonRef.current?.classList.remove('rotate-180');
      dropdownButtonRef.current?.classList.add('rotate-0');
      return;
    }

    dropdownButtonRef.current?.classList.remove('rotate-0');
    dropdownButtonRef.current?.classList.add('rotate-180');
  }, [isToggle]);

  return (
    <img
      ref={dropdownButtonRef}
      onClick={onClickHandler}
      alt="dropdown_button"
      className="absolute right-0 top-0 w-8 bg-blue-300 select-none"
      src={dropdownButton}
    />
  );
};
