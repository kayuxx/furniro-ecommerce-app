import { forwardRef, SVGAttributes } from "react";

type IconProps = SVGAttributes<SVGElement> & {
  size?: number;
};

const Loop = forwardRef<SVGSVGElement, IconProps>(
  ({ color = "currentColor", size = 24, ...rest }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="m23.5 23.5-5.234-5.243m2.9-7.007a9.916 9.916 0 1 1-19.832 0 9.916 9.916 0 0 1 19.833 0v0Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  },
);

Loop.displayName = "Lopp";

export default Loop;
