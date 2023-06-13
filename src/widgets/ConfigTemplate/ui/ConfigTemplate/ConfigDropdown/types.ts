import { Dispatch, ReactNode, SetStateAction } from 'react';
import { ConfigObject } from 'shared/types/types.ts';

export type OwnProps = {
  type: 'rating' | 'genres' | 'type';
  values: string[];
  children: ReactNode;
  setConfig: Dispatch<SetStateAction<ConfigObject>>;
};
