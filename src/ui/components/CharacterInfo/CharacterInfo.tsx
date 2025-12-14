import { Suspense } from 'react';
import './CharacterInfo.css';
import { Back } from '../../../icons';
import { redirect } from 'react-router-dom';
import Loading from '../Loading/Loading';

const CharacterInfo = () => {
  return (
    <div className='container'>
      <div
        className='character__back'
        onClick={() => {
          redirect('/');
        }}
      >
        <Back
          height={24}
          width={24}
        />
        <h2>GO BACK</h2>
      </div>
      <Suspense fallback={<Loading />}>
        <div>123</div>
      </Suspense>
    </div>
  );
};

export default CharacterInfo;
