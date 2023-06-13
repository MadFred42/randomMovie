import { Dispatch, ReactNode, SetStateAction } from 'react';
import { ConfigObject } from 'shared/types/types.ts';

export interface OwnProps {
  values: string[];
  children: ReactNode;
  setConfig: Dispatch<SetStateAction<ConfigObject>>;
}
