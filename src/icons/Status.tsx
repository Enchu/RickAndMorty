import { Svg, type IconProps } from './Svg';

export const Status = ({ ...props }: IconProps) => {
  return (
    <Svg {...props}>
      <svg viewBox='0 0 10 10'>
        <circle
          cx='5'
          cy='5'
          r='5'
          fillRule='evenodd'
        />
      </svg>
    </Svg>
  );
};
