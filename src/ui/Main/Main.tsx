import './Main.css';
import Logo from '../../assets/Logo.svg?react';
import FilterInput from '../components/FilterInput/FilterInput';
import { StatusInput } from '../components';
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

      <MainList />
    </div>
  );
};

export default Main;
