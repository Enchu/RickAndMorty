import clsx from 'clsx';

import { Close } from '@/assets';

import './Filter.css';

type FilterProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  size?: 'big' | 'small';
  icon?: React.ReactNode;
};

const Filter = ({
  value,
  onChange,
  placeholder,
  size = 'big',
  icon
}: FilterProps) => {
  return (
    <div className='filter'>
      {icon && <div className='filter__icon'>{icon}</div>}
      <input
        value={value}
        onChange={onChange}
        type='text'
        placeholder={placeholder}
        className={clsx({
          ['filter__input']: size === 'big',
          ['filter__input--small']: size === 'small'
        })}
      />
      {icon && (
        <button
          className={clsx('filter__close', { 'filter__close--hidden': !value })}
        >
          <Close />
        </button>
      )}
    </div>
  );
};

export default Filter;
