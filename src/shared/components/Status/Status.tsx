import './Status.css';

export type StatusType = 'Alive' | 'Dead' | 'unknown';

export type StatusProps = {
  status: string;
};

const Status = ({ status = 'unknown' }: StatusProps) => {
  return <span className={`status status-${status}`}></span>;
};

export default Status;
