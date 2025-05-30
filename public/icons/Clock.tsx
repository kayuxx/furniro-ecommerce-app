import { SVGProps } from "react";

type SvgIconProps = SVGProps<SVGSVGElement> & {
color?: string;
size?: number;
};

const SvgClock = ({
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
      d="M23 11.5a11.5 11.5 0 1 1-23 0 11.5 11.5 0 0 1 23 0M11.5 5.031a.719.719 0 1 0-1.438 0v7.907a.72.72 0 0 0 .363.623l5.031 2.875a.719.719 0 0 0 .713-1.247L11.5 12.52z"
    />
  </svg>
);
export default SvgClock;
