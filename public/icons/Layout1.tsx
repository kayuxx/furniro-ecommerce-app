import { SVGProps } from "react";

type SvgIconProps = SVGProps<SVGSVGElement> & {
color?: string;
size?: number;
};

const SvgLayout1 = ({
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
      d="M3.5 4.75h15a3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-4.5a3 3 0 0 1 3-3m0 1.5A1.5 1.5 0 0 0 2 7.75v4.5a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-4.5a1.5 1.5 0 0 0-1.5-1.5zM.5 1a.75.75 0 0 1 .75-.75h19.5a.75.75 0 1 1 0 1.5H1.25A.75.75 0 0 1 .5 1m0 18a.75.75 0 0 1 .75-.75h19.5a.75.75 0 1 1 0 1.5H1.25A.75.75 0 0 1 .5 19"
    />
  </svg>
);
export default SvgLayout1;
