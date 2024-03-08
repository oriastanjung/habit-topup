import clsx from "clsx";
import React, { FC, ReactNode } from "react";

interface NavigationItemProps {
  isActive?: boolean;
  className?: string;
  children: ReactNode;
}

const NavigationItem: FC<NavigationItemProps> = ({
  children,
  className,
  isActive,
}) => {
  return <div className={clsx(`w-10 h-10 p-2 md:w-16 md:h-16 md:p-4 rounded-full  cursor-pointer hover:bg-[#F5F5FB] duration-300 ease-in-out transition-all ${isActive ? "bg-[#F5F5FB]" : "border"} border-[#E0E0EA] flex items-center justify-center`, className)}> {children} </div>;
};

export default NavigationItem;
