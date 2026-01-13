import { useNavigate } from 'react-router-dom';

import { Edit } from '@/assets';
import Media from '@/assets/icons/Media.png';
import { Status } from '@/shared/components';

import './CharacterCard.scss';

export const Gender = {
  male: 'Male',
  female: 'Female'
} as const;

export type Gender = (typeof Gender)[keyof typeof Gender];

type CharacterCardProps = {
  title: string;
  gender: Gender;
  species: string;
  location: string;
  status: string;
};

const CharacterCard = ({
  title,
  gender,
  species,
  location,
  status
}: CharacterCardProps) => {
  const navigate = useNavigate();

  return (
    <div className='character'>
      <div className='character__image'>
        <img
          src={Media}
          alt='Character logo'
        />
      </div>
      <div className='character__info'>
        <h2
          className='character__name'
          onClick={() => navigate('/info')}
        >
          {title}
        </h2>
        <div className='character__info-item'>
          <p>Gender</p>
          <h3>{gender}</h3>
        </div>
        <div className='character__info-item'>
          <p>Species</p>
          <h3>{species}</h3>
        </div>
        <div className='character__info-item'>
          <p>Location</p>
          <h3>{location}</h3>
        </div>
        <div className='character__info-item'>
          <p>Status</p>
          <div className='character__status'>
            <h3>{status}</h3>
            <Status status={status} />
          </div>
        </div>
        <Edit className='character__info-edit' />
      </div>
    </div>
  );
};

export default CharacterCard;
