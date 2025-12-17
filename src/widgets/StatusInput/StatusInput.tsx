import { StatusDown } from '../../assets';
import './StatusInput.css';

type StatusInputProps = {
  title: string;
};

const StatusInput = ({ title }: StatusInputProps) => {
  return (
    <div className='input'>
      <h2 className='input__title'>{title}</h2>
      <div className='input__icon'>
        <StatusDown
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default StatusInput;
