import Dropdown from '../../../shared/ui/Dropdown';
import { GENRES, RATINGS, TYPE } from '../consts';

export const ConfigTemplate = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <header className="text-center m-4">
        Here you can adjust config for you
      </header>
      <Dropdown values={RATINGS}>Choose rating</Dropdown>
      <Dropdown values={TYPE}>Choose type</Dropdown>
      <Dropdown values={GENRES}>Choose genre</Dropdown>
    </div>
  );
};
