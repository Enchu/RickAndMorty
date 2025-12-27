import { useEffect, useRef, useState } from 'react';

import { StatusDown, StatusUp } from '@/assets';

import './Select.css';

type SelectOption<T> = {
  label: string;
  value: T;
};

type SelectOptionContentProps<T> = {
  option: SelectOption<T>;
};

export const DefaultSelectOptionContent = <T,>({
  option
}: SelectOptionContentProps<T>) => {
  return <>{option.label}</>;
};

type SelectProps<T> = {
  placeholder: string;
  options: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  variant?: 'big' | 'small';
  SelectOptionContentComponent?: React.FC<SelectOptionContentProps<T>>;
};

const Select = <T,>(props: SelectProps<T>) => {
  const {
    placeholder,
    value,
    onChange,
    options,
    variant = 'big',
    SelectOptionContentComponent = DefaultSelectOptionContent
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

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

  const handleSelect = (option: SelectOption<T>) => {
    if (!onChange) {
      setIsOpen(false);
      return;
    }

    if (option.value === value) {
      onChange('' as T);
    } else {
      onChange(option.value);
    }

    setIsOpen(false);
  };

  const optionsList = options.map((option, index) => {
    return (
      <div
        key={String(option.value) || index}
        className='select__option'
        onClick={() => handleSelect(option)}
      >
        <SelectOptionContentComponent option={option} />
      </div>
    );
  });

  return (
    <div
      className={`select select--${variant}`}
      ref={wrapperRef}
    >
      <div
        className='select__control'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className='select__title'>
          {selectedOption ? (
            <SelectOptionContentComponent option={selectedOption} />
          ) : (
            placeholder
          )}
        </div>

        {isOpen ? <StatusUp /> : <StatusDown />}
      </div>
      {isOpen && <div className='select__dropdown'>{optionsList}</div>}
    </div>
  );
};

export default Select;
