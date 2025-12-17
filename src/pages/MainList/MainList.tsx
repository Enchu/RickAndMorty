import { useNavigate } from 'react-router-dom';
import './MainList.css';
import { CharacterCard } from '@/widgets';

const MainList = () => {
  const navigate = useNavigate();
  return (
    <div
      className='main__list'
      onClick={() => navigate('/info')}
    >
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
