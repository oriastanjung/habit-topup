import clsx from "clsx";
import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={clsx(
        `bg-[#C9F5B8] f text-black font-sf-ui-bold border border-white rounded-full px-7 py-5 shadow-[#C9F5B8] shadow-2xl bg-opacity-80 backdrop-blur-sm hover:bg-[#78FF44] duration-300 ease-in-out transition-all hover:bg-opacity-45`,
        className
      )}
    >
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button;
