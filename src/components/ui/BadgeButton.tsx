import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

import Spinner from "./Spinner";

interface ButtonPropTypes {
  children: React.ReactNode;
  className?: string;
  as?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  dotColor?: string;
}

const BadgeButton: FC<ButtonPropTypes> = (props) => {
  const {
    className,
    children,
    onClick,
    isLoading = false,
    disabled = false,
    dotColor = "bg-secondary",
  } = props;

  const isDisabled = isLoading || disabled;

  return (
    <button
      className={twMerge(
        "bg-primary cursor-pointer flex rounded-tr-none rounded-bl-none  h-[62px] w-[211px] gap-[10px] px-[10px] py-[16px] items-center justify-center rounded-tl-[12px] rounded-br-[12px] tracking-[0.3%] text-[12px] leading-[16px] md:text-[14px] md:leading-[22px] text-off-white transition-opacity font-semibold shadow-[0px_5px_50px_-12px_#053556]",
        isDisabled && "cursor-not-allowed opacity-50",
        className
      )}
      onClick={onClick}
      disabled={isDisabled}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <Spinner className="h-4 w-4" />
          <span>Loading...</span>
        </div>
      ) : (
        <>
          <div
            className={twMerge(
              "shrink-0 w-[10px] h-[10px] rounded-full",
              dotColor
            )}
          />
          {children}
        </>
      )}
    </button>
  );
};

export default BadgeButton;
