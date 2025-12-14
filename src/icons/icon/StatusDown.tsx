import { Svg, type IconProps } from '../Svg';

export const StatusDown = ({ ...props }: IconProps) => {
  return (
    <Svg {...props}>
      <svg
        viewBox='0 0 24 24'
        fillRule='evenodd'
      >
        <path d='M7 10L12 15L17 10H7Z' />
      </svg>
    </Svg>
  );
};
