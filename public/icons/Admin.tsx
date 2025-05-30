import { SVGProps } from "react";

type SvgIconProps = SVGProps<SVGSVGElement> & {
  color?: string;
  size?: number;
};

const SvgAdmin = ({
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
      d="M8 7.25c-2.27 0-2.73-3.44-2.73-3.44C5 2.02 5.82 0 7.97 0c2.16 0 2.98 2.02 2.71 3.81 0 0-.41 3.44-2.68 3.44m0 2.57L10.72 8c2.39 0 4.52 2.33 4.52 4.53v2.49S11.59 16.15 8 16.15c-3.65 0-7.24-1.13-7.24-1.13v-2.49c0-2.25 1.94-4.48 4.47-4.48z"
    />
  </svg>
);
export default SvgAdmin;
