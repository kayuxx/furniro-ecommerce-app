import { SVGProps } from "react";

type SvgIconProps = SVGProps<SVGSVGElement> & {
color?: string;
size?: number;
};

const SvgCalendar = ({
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
      d="M.667 14.833c0 1.417 1.083 2.5 2.5 2.5h11.667c1.416 0 2.5-1.083 2.5-2.5V8.167H.667zm14.167-12.5h-1.667V1.5c0-.5-.333-.833-.833-.833S11.5 1 11.5 1.5v.833h-5V1.5c0-.5-.333-.833-.833-.833S4.834 1 4.834 1.5v.833H3.167c-1.417 0-2.5 1.084-2.5 2.5V6.5h16.667V4.833c0-1.416-1.084-2.5-2.5-2.5"
    />
  </svg>
);
export default SvgCalendar;
