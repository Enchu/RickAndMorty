import './CharacterList.css';
import Media from '../../assets/icons/Media.png';
import { EllipseGreen } from '../../assets';

export const Gender = {
  male: 'Male',
  female: 'Female'
} as const;

export type Gender = (typeof Gender)[keyof typeof Gender];

type CharacterListProps = {
  title: string;
  gender: Gender;
  species: string;
  location: string;
  status: string;
};

const CharacterList = ({
  title,
  gender,
  species,
  location,
  status
}: CharacterListProps) => {
  return (
    <div className='character'>
      <div className='character_image'>
        <img
          src={Media}
          alt='Character logo'
        />
      </div>
      <div className='character_list'>
        <h2 className='character_list-title'>{title}</h2>
        <div className='character_list_item'>
          <p>Gender</p>
          <h3>{gender}</h3>
        </div>
        <div className='character_list_item'>
          <p>Species</p>
          <h3>{species}</h3>
        </div>
        <div className='character_list_item'>
          <p>Location</p>
          <h3>{location}</h3>
        </div>
        <div className='character_list_item'>
          <p>Status</p>
          <div className='character_list_item-status'>
            <h3>{status}</h3>
            <EllipseGreen
              width={10}
              height={10}
              fill='#12B800'
              aria-label='Status logo'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
