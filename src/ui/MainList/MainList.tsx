import { useNavigate } from 'react-router-dom';
import { CharacterList } from '../components';
import './MainList.css';

const MainList = () => {
  const navigate = useNavigate();
  return (
    <div
      className='main_list'
      onClick={() => navigate('/info')}
    >
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
