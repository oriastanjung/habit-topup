import clsx from "clsx";
import React, { FC, ReactNode } from "react";

interface CardProps {
  className?: string;
  children: ReactNode;
}

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "rounded-[48px]  h-full w-full md:bg-gradient-to-br from-white to-[#F5F5FB]   bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
