import ConfigDropdown from 'entities/ConfigDropdown';
import { RATINGS, TYPE } from '../consts';

export const ConfigTemplate = () => {
  return (
    <main className="flex flex-col justify-center items-center h-full">
      <header className="text-center m-4">
        Here you can adjust config for you
      </header>
      <ConfigDropdown values={RATINGS} type="rating">
        Choose rating
      </ConfigDropdown>
      <ConfigDropdown values={TYPE} type="type">
        Choose type
      </ConfigDropdown>
    </main>
  );
};
