import { SVGProps } from "react";

type SvgIconProps = SVGProps<SVGSVGElement> & {
color?: string;
size?: number;
};

const SvgLocation = ({
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
      d="M11 .12A11.1 11.1 0 0 0 3.226 3.3 10.77 10.77 0 0 0 0 10.959a10.63 10.63 0 0 0 2.216 6.504s.3.39.349.446L11 27.712l8.439-9.808c.044-.052.345-.44.345-.44l.001-.003A10.63 10.63 0 0 0 22 10.96a10.77 10.77 0 0 0-3.226-7.661A11.1 11.1 0 0 0 11 .12m0 14.781a4.04 4.04 0 0 1-2.222-.664 3.96 3.96 0 0 1-1.474-1.769 3.9 3.9 0 0 1-.227-2.277 3.92 3.92 0 0 1 1.095-2.019 4 4 0 0 1 2.048-1.078 4.06 4.06 0 0 1 2.31.224 4 4 0 0 1 1.796 1.452c.44.648.674 1.41.674 2.19a3.92 3.92 0 0 1-1.173 2.785A4.04 4.04 0 0 1 11 14.901"
    />
  </svg>
);
export default SvgLocation;
