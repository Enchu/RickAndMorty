import './Loading.css';
import BigLoading from '../../assets/icons/BigLoading.svg?react';

const Loading = () => {
  return (
    <div className='loading'>
      <BigLoading className='loading__icon' />
      <h2 className='loading__title'>Loading character card...</h2>
    </div>
  );
};

export default Loading;
