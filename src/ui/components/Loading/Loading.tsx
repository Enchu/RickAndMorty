import BigLoading from '../../../icons/icon/BigLoading.svg?react';

const Loading = () => {
  return (
    <div className='loading'>
      <BigLoading className='loading__icon' />
      <h2>🌀 Loading character card...</h2>;
    </div>
  );
};

export default Loading;
