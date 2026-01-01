import clsx from 'clsx';

import { Close } from '@/assets';

import './Filter.css';

type FilterProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  mode?: 'bordered' | 'underlined';
  size?: 'big' | 'small';
  icon?: React.ReactNode;
};

const Filter = ({
  value,
  onChange,
  placeholder,
  size = 'big',
  mode = 'bordered',
  icon
}: FilterProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleCleanValue = () => {
    onChange('');
  };

  return (
    <div
      className={clsx('filter', { 'filter-underlined': mode === 'underlined' })}
    >
      {icon && <div className='filter__icon'>{icon}</div>}
      <input
        value={value}
        onChange={handleInputChange}
        type='text'
        placeholder={placeholder}
        className={clsx({
          ['filter__input']: size === 'big',
          ['filter__input-small']: size === 'small'
        })}
      />
      {icon && (
        <button
          className={clsx('filter__close', { 'filter__close-hidden': !value })}
          onClick={handleCleanValue}
        >
          <Close />
        </button>
      )}
    </div>
  );
};

export default Filter;
