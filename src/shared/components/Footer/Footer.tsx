import './Footer.css';
import { LABELS } from '@/shared/constants';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__title'>{LABELS.credentials}</p>
    </footer>
  );
};

export default Footer;
