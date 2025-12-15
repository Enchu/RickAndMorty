import { SmallLogo, Sun } from '../../icons';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='container header_top'>
        <div className='header_logo'>
          <SmallLogo
            width={48}
            height={50}
          />
        </div>

        <div className='header_right'>
          <div className='header_sun'>
            <Sun
              width={25}
              height={25}
            />
          </div>
          <div className='header_sun'>
            <h2>РУ</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
