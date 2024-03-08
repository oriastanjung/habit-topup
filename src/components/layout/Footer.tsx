import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="overflow-hidden absolute font-sf-ui-thin md:font-sf-ui-medium  z-30 bottom-0 md:right-0 flex md:w-full flex-col text-[9px] md:text-sm justify-start md:items-end">
      Design Reference IG : @uxui_howard.le
      <span>Build by O. Riastanjung using NextJS</span>
    </footer>
  );
};

export default Footer;
