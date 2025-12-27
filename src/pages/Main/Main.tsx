import { Banner, SmallLoading } from '@/assets';
import { FilterInput, Select, Status } from '@/shared/components';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from '@/shared/constants';

import MainList from '../../shared/components/MainList/MainList';

import './Main.css';

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
        <Select
          placeholder='Species'
          options={SPECIES_OPTIONS}
          onChange={() => {}}
          value={''}
          variant='big'
        />
        <Select
          placeholder='Gender'
          options={GENDER_OPTIONS}
          onChange={() => {}}
          value={''}
          variant='big'
        />
        <Select
          placeholder='Status'
          options={STATUS_OPTIONS}
          onChange={() => {}}
          value={''}
          variant='big'
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
