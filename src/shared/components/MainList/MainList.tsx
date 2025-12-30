import { CharacterCard } from '@/shared/components';

import './MainList.css';

const MainList = () => {
  return (
    <div className='main__list'>
      <CharacterCard
        title='Rick Sanchez'
        gender='Male'
        species='Human'
        location='Earth'
        status='Alive'
      />
      <CharacterCard
        title='Rick Sanchez'
        gender='Male'
        species='Human'
        location='Earth'
        status='Alive'
      />
      <CharacterCard
        title='Rick Sanchez'
        gender='Male'
        species='Human'
        location='Earth'
        status='Alive'
      />
      <CharacterCard
        title='Rick Sanchez'
        gender='Male'
        species='Human'
        location='Earth'
        status='Alive'
      />
    </div>
  );
};

export default MainList;
