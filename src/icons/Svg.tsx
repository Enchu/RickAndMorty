import * as React from 'react';
import { cn } from '../utils/cn';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Svg = ({ className, children, ...rest }: IconProps) => {
  return (
    <svg
      viewBox='0 0 24 24'
      className={cn({ className })}
      {...rest}
    >
      {children}
    </svg>
  );
};
