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
        `text-black font-sf-ui-medium py-2 px-4 border border-black bg-transparent rounded-full ${isDark ? "bg-black text-white" : ""}`,
        className
      )}
    >

      {children}
    </span>
  );
};

export default TextSpan;
