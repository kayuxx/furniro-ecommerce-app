import { SVGProps } from "react";

type SvgIconProps = SVGProps<SVGSVGElement> & {
color?: string;
size?: number;
};

const SvgLoop = ({
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
      stroke={color}
      strokeLinecap="round"
      strokeWidth={2}
      d="m23.5 23.5-5.234-5.243m2.9-7.007a9.916 9.916 0 1 1-19.832 0 9.916 9.916 0 0 1 19.833 0z"
    />
  </svg>
);
export default SvgLoop;
