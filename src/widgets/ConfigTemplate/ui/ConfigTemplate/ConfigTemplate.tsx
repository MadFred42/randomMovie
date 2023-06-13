import { useState } from 'react';

import { GENRES, RATINGS, TYPE } from '../../consts';
import { ConfigObject } from 'shared/types/types.ts';

import { Button } from 'shared/ui/Button/Button.tsx';
import ConfigDropdown from './ConfigDropdown';
import ConfigSelect from './ConfigSelect';
import { isObjectFilled } from 'shared/lib/isObjectFilled';

const initialConfig: ConfigObject = {
  rating: '',
  genres: [],
  type: '',
};

export const ConfigTemplate = () => {
  const [config, setConfig] = useState(initialConfig);
  const isDisabled = isObjectFilled(config);

  const onClick = () => {
    console.log(config);
  };

  return (
    <main className="flex flex-col justify-center items-center h-full">
      <header className="text-center m-4">
        Here you can adjust config for you
      </header>
      {Object.keys(initialConfig).map((configName) => {
        if (configName === 'genres') {
          return (
            <ConfigSelect
              key={configName}
              values={GENRES}
              setConfig={setConfig}
            >
              Choose {configName} <b>(max 2)</b>
            </ConfigSelect>
          );
        }

        return (
          <ConfigDropdown
            key={configName}
            values={configName === 'rating' ? RATINGS : TYPE}
            type={configName as 'rating' | 'type'}
            setConfig={setConfig}
          >
            Choose {configName}
          </ConfigDropdown>
        );
      })}
      <Button
        isDisabled={isDisabled}
        styleType={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${
          isDisabled ? 'cursor-not-allowed' : ''
        }`}
        onClick={onClick}
      >
        Apply config
      </Button>
    </main>
  );
};
