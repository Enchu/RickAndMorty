import { useEffect, useRef, useState } from 'react';

import { StatusDown, StatusUp } from '@/assets';

import './StatusInput.css';

type StatusOption = {
  value: string;
  color?: 'green' | 'red' | 'orange';
};

type StatusInputProps = {
  title: string;
  options: StatusOption[];
  variant?: 'big' | 'small';
};

const StatusInput = ({ title, options, variant = 'big' }: StatusInputProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<StatusOption | null>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: StatusOption) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div
      className={`input input--${variant}`}
      ref={wrapperRef}
    >
      <div
        className='input__control'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <input
          className='input__title'
          placeholder={title}
          value={selected?.value || ''}
          type='text'
          readOnly
        />

        {variant === 'small' && (
          <span className={`input__dot input__dot--${selected?.color}`} />
        )}

        <div className='input__icon'>
          {isOpen ? (
            <StatusUp
              width={10}
              height={10}
            />
          ) : (
            <StatusDown
              width={10}
              height={10}
            />
          )}
        </div>
      </div>
      {isOpen && (
        <ul className='input__dropdown'>
          {options.map((option) => (
            <li
              key={option.value}
              className='input__option'
              onClick={() => handleSelect(option)}
            >
              {option.value}
              {variant === 'small' && (
                <span className={`input__dot input__dot--${option.color}`} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StatusInput;
