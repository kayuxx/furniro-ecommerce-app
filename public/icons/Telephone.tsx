import { SVGProps } from "react";

type SvgIconProps = SVGProps<SVGSVGElement> & {
color?: string;
size?: number;
};

const SvgTelephone = ({
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
      d="m22.61 18.425-5.082-4.62a1.25 1.25 0 0 0-1.739.054l-2.991 3.076c-.72-.137-2.168-.589-3.658-2.075-1.49-1.491-1.94-2.942-2.075-3.657L10.14 8.21a1.25 1.25 0 0 0 .054-1.739l-4.619-5.08a1.25 1.25 0 0 0-1.739-.109L1.123 3.61a1.25 1.25 0 0 0-.363.811c-.018.312-.376 7.715 5.364 13.458 5.008 5.006 11.28 5.372 13.008 5.372.252 0 .407-.008.448-.01a1.24 1.24 0 0 0 .81-.364l2.325-2.713a1.246 1.246 0 0 0-.106-1.738Z"
    />
  </svg>
);
export default SvgTelephone;
