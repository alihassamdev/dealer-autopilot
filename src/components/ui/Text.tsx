import { twMerge } from "tailwind-merge";

interface TextPropTypes {
  children: React.ReactNode;
  className?: string;
  as?: string;

  id?: string;
  onClick?: () => void;
}

const Text: React.FC<TextPropTypes> = (props) => {
  const { className, children, as, onClick, id } = props;

  if (as === "h1") {
    return (
      <h1
        id={id}
        className={twMerge(
          " text-charcoal tracking-[-0.8%] text-[40px] leading-12  md:tracking-[-1.2%] md:text-[64px] md:leading-[70px] font-bold",
          className
        )}
      >
        {children}
      </h1>
    );
  }

  if (as === "h2") {
    return (
      <h2
        id={id}
        className={twMerge(
          "text-charcoal  text-[28px] leading-9  md:text-[40px] md:leading-12 font-semibold",
          className
        )}
      >
        {children}
      </h2>
    );
  }

  if (as === "h3") {
    return (
      <h3
        id={id}
        className={twMerge(
          "text-charcoal  text-[22px] leading-[30px]  md:text-[28px] md:leading-9 font-semibold",
          className
        )}
      >
        {children}
      </h3>
    );
  }

  if (as === "h4") {
    return (
      <h4
        id={id}
        className={twMerge(
          "text-charcoal text-[18px] leading-[26px]  md:text-[22px] md:leading-[30px] font-medium",
          className
        )}
      >
        {children}
      </h4>
    );
  }

  return (
    <p
      className={twMerge(
        "text-charcoal tracking-[0.2%] text-[14px] leading-[26px] md:text-[16px] md:leading-[26px] font-normal",
        className
      )}
      onClick={onClick}
      id={id}
    >
      {children}
    </p>
  );
};

export default Text;
