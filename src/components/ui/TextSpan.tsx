import clsx from "clsx";
import React, { FC, ReactNode } from "react";

interface TextSpanProps {
  className?: string;
  children: ReactNode;
  isDark?: boolean;
}

const TextSpan: FC<TextSpanProps> = ({ className, children,isDark }) => {
  return (
    <span
      className={clsx(
        `text-black font-sf-ui-medium py-2 px-4 border border-black  rounded-full ${isDark ? "bg-black text-white" : "bg-transparent"}`,
        className
      )}
    >

      {children}
    </span>
  );
};

export default TextSpan;
