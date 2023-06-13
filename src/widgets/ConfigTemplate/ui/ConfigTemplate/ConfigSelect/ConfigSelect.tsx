import { FC, MouseEvent, MouseEventHandler, useEffect, useState } from 'react';

import { useToggle } from 'shared/hooks/useToggle.ts';
import { isEmpty } from 'shared/lib/isEmpty';
import { OwnProps } from './types.ts';

import ConfigDropdownButton from 'widgets/ConfigTemplate/ui/ConfigTemplate/ConfigDropdownButton';
import { Button } from 'shared/ui/Button/Button.tsx';

export const ConfigSelect: FC<OwnProps> = ({ values, children, setConfig }) => {
  const [selectValues, setSelectValues] = useState<string[]>([]);
  const [isToggle, toggle] = useToggle();

  useEffect(() => {
    if (isEmpty(selectValues)) return;

    setConfig((prevState) => {
      return { ...prevState, genres: selectValues };
    });
  }, [selectValues]);

  const onSelectValue: MouseEventHandler = (event) => {
    const target = event.target as HTMLLIElement;
    const isValueExist = selectValues.indexOf(target.id) > -1;

    if (!isValueExist) {
      toggle(false);
      setSelectValues((prevState) => [...prevState, target.id]);
    }
  };

  const onToggleHandler = () => {
    toggle(!isToggle);
  };

  const onDeleteSelectedValue = (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    const valueIndex = selectValues.indexOf(target.parentElement!.id);

    if (valueIndex > -1) {
      setSelectValues((prevState) =>
        prevState.filter((_, index) => index !== valueIndex),
      );
    }
  };

  return (
    <>
      <header className="italic">{children}</header>
      <div className="flex-col w-72 relative mb-4">
        <div className="w-full">
          <div className="text-center h-8 bg-white rounded-md flex items-center">
            {selectValues.map((value) => (
              <div
                key={value}
                id={value}
                className="ml-4 h-7 bg-blue-300 w-24 rounded flex flex-row justify-around leading-7"
              >
                <p>{value}</p>{' '}
                <Button
                  styleType="text-white text-center"
                  onClick={onDeleteSelectedValue}
                >
                  x
                </Button>
              </div>
            ))}
          </div>
          {isToggle && (
            <ul className="border border-black min-h-10 max-h-32 overflow-scroll absolute flex flex-col top-8 w-72 bg-white z-20">
              {values.map((value) => (
                <li
                  key={value}
                  id={value}
                  onClick={onSelectValue}
                  className="my-1 h-fit text-center w-full border-b-emerald-400 hover:bg-blue-300"
                >
                  {value}
                </li>
              ))}
            </ul>
          )}
          <ConfigDropdownButton
            isToggle={isToggle}
            onClickHandler={onToggleHandler}
          />
        </div>
      </div>
    </>
  );
};
