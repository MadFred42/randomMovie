import { Dispatch, SetStateAction } from 'react';

export type OwnProps = {
  values: string[];
  setDropdownValue: Dispatch<SetStateAction<string>>;
  setIsList: Dispatch<SetStateAction<boolean>>;
  isList: boolean;
};
