import { SVGProps } from "react";

type SvgIconProps = SVGProps<SVGSVGElement> & {
color?: string;
size?: number;
};

const SvgBag = ({
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
      d="M8.313 1.188a2.97 2.97 0 0 1 2.968 2.968v.594H5.344v-.594a2.97 2.97 0 0 1 2.968-2.968Zm4.156 3.562v-.594a4.156 4.156 0 1 0-8.313 0v.594H0v11.875A2.375 2.375 0 0 0 2.375 19H14.25a2.375 2.375 0 0 0 2.375-2.375V4.75zM1.188 5.938h14.25v10.687a1.19 1.19 0 0 1-1.188 1.188H2.375a1.187 1.187 0 0 1-1.188-1.188z"
    />
  </svg>
);
export default SvgBag;
