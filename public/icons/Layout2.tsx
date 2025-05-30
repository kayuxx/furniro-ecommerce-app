import { SVGProps } from "react";

type SvgIconProps = SVGProps<SVGSVGElement> & {
color?: string;
size?: number;
};

const SvgLayout2 = ({
  color = "currentColor",
  size = 20,
  ...props
}: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M13.667 17.167a3.5 3.5 0 1 1 0-7.001 3.5 3.5 0 0 1 0 7Zm-9.334 0a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m9.334-9.334a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m-9.334 0a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7"
    />
  </svg>
);
export default SvgLayout2;
