import React, { Suspense } from 'react';
import './Main.css';
import FilterInput from '../components/FilterInput/FilterInput';
import { StatusInput } from '../components';

import Logo from '../../icons/icon/Logo.svg?react';
import BigLoading from '../../icons/icon/BigLoading.svg?react';
import SmallLoading from '../../icons/icon/SmallLoading.svg?react';

const MainList = React.lazy(() => import('../MainList/MainList'));

function Loading() {
  return (
    <div className='loading'>
      <BigLoading className='loading__icon' />
      <h2>🌀 Loading character card...</h2>;
    </div>
  );
}

const Main = () => {
  return (
    <div className='main'>
      <div className='main_logo'>
        <Logo />
      </div>

      <div className='main_filtered'>
        <FilterInput />
        <StatusInput title='Species' />
        <StatusInput title='Gender' />
        <StatusInput title='Status' />
      </div>

      <Suspense fallback={<Loading />}>
        <MainList />
      </Suspense>

      <div className='main_pagination'>
        <SmallLoading className='main_loading' />
      </div>
    </div>
  );
};

export default Main;
