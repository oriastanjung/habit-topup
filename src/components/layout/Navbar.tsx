import Image from "next/image";
import React, { FC } from "react";
import NavigationItem from "../atom/NavigationItem";
import { RiHome5Fill } from "react-icons/ri";
import IconHome from "@/assets/iconHome";
import IconNote from "@/assets/iconNote";
import IconGallery from "@/assets/iconGallery";
import IconBook from "@/assets/iconBook";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="container mx-auto py-11">
      <nav className="flex w-full items-center justify-between">
        <h1 className="cursor-pointer" aria-label="HABIT">
          <Image
            width={48}
            height={43}
            quality={100}
            alt="HABIT-Logo"
            src={"/logo.png"}
          />
        </h1>
        <ul className="flex items-center gap-4">
          <li>
            <NavigationItem isActive>
              <IconHome className="w-16 h-16" />
            </NavigationItem>
          </li>
          <li>
            <NavigationItem>
              <IconNote className="w-16 h-16" />
            </NavigationItem>
          </li>
          <li>
            <NavigationItem>
              <IconGallery className="w-16 h-16" />
            </NavigationItem>
          </li>
          <li>
            <NavigationItem>
              <IconBook className="w-16 h-16" />
            </NavigationItem>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
