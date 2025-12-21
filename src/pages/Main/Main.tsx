import { Banner, SmallLoading } from '@/assets';
import { FilterInput, StatusInput } from '@/shared/components';

import MainList from '../../shared/components/MainList/MainList';

import './Main.css';

const SPECIES_OPTIONS = [
  { value: 'Human' },
  { value: 'Alien' },
  { value: 'Humanoid' },
  { value: 'Animal' },
  { value: 'Robot' }
];
const GENDER_OPTIONS = [
  { value: 'Female' },
  { value: 'Male' },
  { value: 'Genderless' },
  { value: 'Unknown' }
];
const STATUS_OPTIONS = [
  { value: 'Alive' },
  { value: 'Dead' },
  { value: 'Unknown' }
];

const Main = () => {
  return (
    <div className='main'>
      <img
        src={Banner}
        alt='Rick and Morty banner'
        className='main__logo'
      />

      <div className='main__filtered'>
        <FilterInput />
        <StatusInput
          title='Species'
          options={SPECIES_OPTIONS}
        />
        <StatusInput
          title='Gender'
          options={GENDER_OPTIONS}
        />
        <StatusInput
          title='Status'
          options={STATUS_OPTIONS}
        />
      </div>

      <MainList />

      <img
        src={SmallLoading}
        alt='Loading logo'
        className='main__loading'
      />
    </div>
  );
};

export default Main;
