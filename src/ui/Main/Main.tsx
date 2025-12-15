import { Suspense } from 'react';
import './Main.css';
import FilterInput from '../components/FilterInput/FilterInput';
import { StatusInput } from '../components';
import Logo from '../../icons/icon/Logo.svg?react';
import SmallLoading from '../../icons/icon/SmallLoading.svg?react';
import Loading from '../components/Loading/Loading';
import MainList from '../MainList/MainList';

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
