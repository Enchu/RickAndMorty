import { SmallLogo, Sun } from '@/assets';
import { LABELS } from '@/shared/constants';

import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__content'>
        <SmallLogo
          width={48}
          height={50}
          aria-label='Rick and Morty logo'
          className='header__logo'
        />

        <div className='header__controls'>
          <div className='header__theme'>
            <Sun
              width={25}
              height={25}
              aria-label='Sun logo'
            />
          </div>
          <div className='header__lang'>
            <h2 className='header__lang-ru'>{LABELS.ruLang}</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
