import { SVGProps } from "react";

type SvgIconProps = SVGProps<SVGSVGElement> & {
color?: string;
size?: number;
};

const SvgTrash = ({
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
      d="M20.625 4h-3.5V1.812c0-.965-.785-1.75-1.75-1.75h-8.75c-.965 0-1.75.785-1.75 1.75V4h-3.5a.874.874 0 0 0-.875.875v.875c0 .12.098.219.219.219H2.37l.676 14.3a1.75 1.75 0 0 0 1.747 1.669h12.414c.935 0 1.703-.733 1.747-1.668l.676-14.301h1.651a.22.22 0 0 0 .219-.219v-.875A.874.874 0 0 0 20.625 4m-5.469 0H6.844V2.031h8.312z"
    />
  </svg>
);
export default SvgTrash;
