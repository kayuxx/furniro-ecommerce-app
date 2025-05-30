import { SVGProps } from "react";

type SvgIconProps = SVGProps<SVGSVGElement> & {
color?: string;
size?: number;
};

const SvgCoupon = ({
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
      d="M9.897 18.968c-.53.002-1.04-.21-1.414-.586L.646 10.547a2 2 0 0 1-.58-1.567l.5-6.566A1.99 1.99 0 0 1 2.414.573l6.566-.5c.052-.011.103-.011.155-.011.53 0 1.037.21 1.41.586l7.838 7.834a2 2 0 0 1 0 2.829l-7.072 7.071a1.99 1.99 0 0 1-1.414.586M5.654 3.654a2 2 0 1 0 1.415 3.414l.007-.006.007-.007-.008.007a2 2 0 0 0-1.421-3.408"
    />
  </svg>
);
export default SvgCoupon;
