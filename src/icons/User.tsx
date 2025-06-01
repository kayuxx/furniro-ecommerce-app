import { SVGProps } from "react";

type SvgIconProps = SVGProps<SVGSVGElement> & {
  color?: string;
  size?: number;
};

const User = ({
  color = "currentColor",
  size = 20,
  ...props
}: SvgIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.333 10V4.167h2.334v7h-2.334m0 4.666h2.334V13.5h-2.334M9.667 11.167c3.115 0 9.333 1.563 9.333 4.666v3.5H.333v-3.5c0-3.103 6.219-4.666 9.334-4.666Zm0-10.5a4.667 4.667 0 1 1 0 9.333 4.667 4.667 0 0 1 0-9.333m0 12.716c-3.465 0-7.117 1.704-7.117 2.45v1.284h14.233v-1.284c0-.746-3.651-2.45-7.116-2.45m0-10.5a2.45 2.45 0 1 0 0 4.9 2.45 2.45 0 0 0 0-4.9Z"
        fill={color}
      />
    </svg>
  );
};

export default User;
