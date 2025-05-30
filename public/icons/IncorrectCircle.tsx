import { SVGProps } from "react";

type SvgIconProps = SVGProps<SVGSVGElement> & {
color?: string;
size?: number;
};

const SvgIncorrectCircle = ({
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
      fillRule="evenodd"
      d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0m3.37 7.915a.91.91 0 0 0-1.285-1.285L10 8.715 7.915 6.63A.91.91 0 1 0 6.63 7.915L8.715 10 6.63 12.085a.91.91 0 1 0 1.285 1.285L10 11.286l2.085 2.084a.91.91 0 0 0 1.285-1.285L11.286 10z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIncorrectCircle;
