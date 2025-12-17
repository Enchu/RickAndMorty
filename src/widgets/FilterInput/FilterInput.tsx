import { Filter } from '../../assets';
import './FileInput.css';

const FilterInput = () => {
  return (
    <div className='filter'>
      <Filter
        width={24}
        height={24}
      />
      <input
        type='text'
        placeholder='Filter by name...'
        className='filter__input'
      />
    </div>
  );
};

export default FilterInput;
