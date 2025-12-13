import { CharacterList } from '../components';
import './MainList.css';

const MainList = () => {
  return (
    <div className='main_list'>
      <CharacterList
        title='Rick Sanchez'
        gender='Male'
        species='Human'
        location='Earth'
        status='Alive'
      />
      <CharacterList
        title='Rick Sanchez'
        gender='Male'
        species='Human'
        location='Earth'
        status='Alive'
      />
      <CharacterList
        title='Rick Sanchez'
        gender='Male'
        species='Human'
        location='Earth'
        status='Alive'
      />
      <CharacterList
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
