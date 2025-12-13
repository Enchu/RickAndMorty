import { Suspense } from 'react';
import './CharacterInfo.css';
import BigLoading from '../../../assets/BigLoading.svg?react';
import { Back } from '../../../icons';
import { redirect } from 'react-router-dom';

// Dynamic import
//const CatAvatar = React.lazy(() => import('./path/to/cat/avatar'));

function Loading() {
  return (
    <div className='loading'>
      <BigLoading className='loading__icon' />
      <h2>🌀 Loading character card...</h2>;
    </div>
  );
}

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
