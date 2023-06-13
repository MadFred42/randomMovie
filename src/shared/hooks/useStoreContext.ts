import { useContext } from 'react';
import { StoreContext } from 'app/App.tsx';

export const useStoreContext = () => {
  return useContext(StoreContext);
};
