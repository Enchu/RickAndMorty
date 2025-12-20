import { BigLoading } from '@/assets';
import './Loading.css';

const Loading = () => {
  return (
    <div className='loading'>
      <img
        src={BigLoading}
        alt='Loading logo'
        className='loading__icon'
      />
      <h2 className='loading__title'>Loading character card...</h2>
    </div>
  );
};

export default Loading;
