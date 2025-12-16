import { Suspense } from 'react';
import './Main.css';
import Logo from '../../assets/icons/Logo.svg?react';
import SmallLoading from '../../assets/icons/SmallLoading.svg?react';
import MainList from '../MainList/MainList';
import Loading from '../../widgets/Loading/Loading';
import { FilterInput, StatusInput } from '../../widgets';

const Main = () => {
  return (
    <div className='main'>
      <div className='main_logo'>
        <Logo aria-label='Rick and Morty logo' />
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
        <SmallLoading
          className='main_loading'
          aria-label='Loading logo'
        />
      </div>
    </div>
  );
};

export default Main;
