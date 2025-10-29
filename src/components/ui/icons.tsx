import * as React from "react";
import { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

export const Star = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
    className={twMerge("", className)}
  >
    <path
      fill="#00AAEF"
      d="m11.489 0 3.102 8.386 8.386 3.103-8.386 3.102-3.102 8.386-3.103-8.386L0 11.49l8.386-3.103L11.489 0Z"
    />
  </svg>
);
