import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="absolute font-sf-ui-thin z-30 bottom-0 md:right-0 flex w-full flex-col text-[9px] md:text-sm">
      Design Reference IG : @uxui_howard.le
      <span>Build by O. Riastanjung using NextJS</span>
    </footer>
  );
};

export default Footer;
