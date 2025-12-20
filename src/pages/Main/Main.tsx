import './Main.css';
import MainList from '../../shared/components/MainList/MainList';
import { FilterInput, StatusInput } from '@/shared/components';
import { Banner, SmallLoading } from '@/assets';

const Main = () => {
  return (
    <div className='main'>
      <img
        src={Banner}
        alt='Rick and Morty banner'
        className='main__logo'
      />

      <div className='main__filtered'>
        <FilterInput />
        <StatusInput title='Species' />
        <StatusInput title='Gender' />
        <StatusInput title='Status' />
      </div>

      <MainList />

      <img
        src={SmallLoading}
        alt='Loading logo'
        className='main__loading'
      />
    </div>
  );
};

export default Main;
