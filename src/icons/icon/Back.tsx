import { Svg, type IconProps } from '../Svg';

export const Back = ({ ...props }: IconProps) => {
  return (
    <Svg
      {...props}
      viewBox='0 0 16 16'
    >
      <path
        d='M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z'
        fillRule='evenodd'
      />
    </Svg>
  );
};
