import { SVGProps } from "react";

type SvgIconProps = SVGProps<SVGSVGElement> & {
color?: string;
size?: number;
};

const SvgAbacus = ({
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
      strokeLinejoin="round"
      d="M20.024 3.143H6.929m-2.381 0H.976m19.048 11.905H6.929m-2.381 0H.976m13.095-5.953H.976m19.048 0h-3.572M5.738.762a1.19 1.19 0 0 1 1.19 1.19v2.381a1.19 1.19 0 1 1-2.38 0v-2.38A1.19 1.19 0 0 1 5.738.761Zm0 11.905a1.19 1.19 0 0 1 1.19 1.19v2.381a1.19 1.19 0 0 1-2.38 0v-2.38a1.19 1.19 0 0 1 1.19-1.191m9.524-5.953a1.19 1.19 0 0 1 1.19 1.19v2.382a1.19 1.19 0 0 1-2.38 0V7.905a1.19 1.19 0 0 1 1.19-1.19Z"
    />
  </svg>
);
export default SvgAbacus;
