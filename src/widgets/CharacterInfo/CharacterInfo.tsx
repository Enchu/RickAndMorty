import { Suspense } from 'react';
import './CharacterInfo.css';
import { ArrowBack } from '@/assets';
import { useNavigate } from 'react-router-dom';
import Media from '@/assets/icons/Media.png';
import Loading from '../Loading/Loading';

const CharacterInfo = () => {
  const navigate = useNavigate();

  return (
    <div className='character-info'>
      <div
        className='character-info__back'
        onClick={() => navigate(-1)}
      >
        <ArrowBack
          height={16}
          width={16}
          aria-label='Back to previous page'
        />
        <h2>GO BACK</h2>
      </div>
      <Suspense fallback={<Loading />}>
        <div className='character-info__container'>
          <div className='character-info__image'>
            <img
              src={Media}
              alt='Rick Sanchez logo'
            />
          </div>
          <div className='character-info__container-title'>
            <h2 className='character-info__title'>Rick Sanchez</h2>
          </div>

          <p className='character-info__subtitle'>Information</p>
          <div className='character-info__list'>
            <div className='character-info__list-item'>
              <p>Gender</p>
              <h3>Male</h3>
            </div>
            <div className='character-info__list-item'>
              <p>Status</p>
              <h3>Alive</h3>
            </div>
            <div className='character-info__list-item'>
              <p>Specie</p>
              <h3>Human</h3>
            </div>
            <div className='character-info__list-item'>
              <p>Origin</p>
              <h3>Earth (C-137)</h3>
            </div>
            <div className='character-info__list-item'>
              <p>Type</p>
              <h3>Unknown</h3>
            </div>
            <div className='character-info__list-item'>
              <p>Location</p>
              <h3>Earth (Replacement Dimension)</h3>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default CharacterInfo;
