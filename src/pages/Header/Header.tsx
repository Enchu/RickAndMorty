import { SmallLogo, Sun } from '@/assets';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__top'>
        <div className='header__logo'>
          <SmallLogo
            width={48}
            height={50}
            aria-label='Rick and Morty logo'
          />
        </div>

        <div className='header__controls'>
          <div className='header__theme'>
            <Sun
              width={25}
              height={25}
              aria-label='Sun logo'
            />
          </div>
          <div className='header__lang'>
            <h2>РУ</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
