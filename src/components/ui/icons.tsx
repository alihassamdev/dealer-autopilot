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

export const FillArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#ECECEC"
      fillRule="evenodd"
      d="M9.75 0C4.365 0 0 4.365 0 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S15.135 0 9.75 0Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06L11.69 9H6a.75.75 0 1 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
      clipRule="evenodd"
    />
  </svg>
);
