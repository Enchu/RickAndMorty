import { useState } from 'react';

import { Banner, Search, SmallLoading } from '@/assets';
import { FilterInput, Select } from '@/shared/components';
import {
  GENDER_OPTIONS,
  SPECIES_OPTIONS,
  STATUS_OPTIONS
} from '@/shared/constants';

import MainList from '../../shared/components/MainList/MainList';

import './Main.css';

const Main = () => {
  const [filterValue, setFilterValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  return (
    <div className='main'>
      <img
        src={Banner}
        alt='Rick and Morty banner'
        className='main__logo'
      />

      <div className='main__filtered'>
        <FilterInput
          placeholder='Filter by name...'
          value={filterValue}
          onChange={handleInputChange}
          icon={<Search />}
          size='big'
        />
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
