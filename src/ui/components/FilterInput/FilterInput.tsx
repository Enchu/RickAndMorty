import { Filter } from '../../../icons';
import './FileInput.css';

const FilterInput = () => {
  return (
    <div className='filter'>
      <div className='filter_logo'>
        <Filter
          width={24}
          height={24}
        />
      </div>
      <div>
        <input
          type='text'
          placeholder='Filter by name...'
          className='filter_input'
        />
      </div>
    </div>
  );
};

export default FilterInput;
