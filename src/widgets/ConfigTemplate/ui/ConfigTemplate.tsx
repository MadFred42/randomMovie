import Dropdown from '../../../shared/ui/Dropdown';
import { RATINGS } from '../consts';

export const ConfigTemplate = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <header className="text-center m-4">
        Here you can adjust config for you
      </header>
      <Dropdown values={RATINGS} type="rating" />
    </div>
  );
};
