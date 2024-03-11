import Image from "next/image";
import React, { FC } from "react";
import NavigationItem from "../atom/NavigationItem";
import { RiHome5Fill } from "react-icons/ri";
import IconHome from "@/assets/iconHome";
import IconNote from "@/assets/iconNote";
import IconGallery from "@/assets/iconGallery";
import IconBook from "@/assets/iconBook";
import { IoGameControllerOutline } from "react-icons/io5";
import Link from "next/link";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="container mx-auto py-11">
      <nav className="flex w-full items-center justify-between">
        <Link href={"/"}>
          <h1 className="cursor-pointer" aria-label="HABIT">
            <Image
              width={48}
              height={43}
              quality={100}
              alt="HABIT-Logo"
              src={"/logo.png"}
            />
          </h1>
        </Link>
        <ul className="flex items-center gap-4">
          <li>
            <Link href={'/'}>
              <NavigationItem isActive>
                <IconHome className="w-16 h-16" />
              </NavigationItem>
            </Link>
          </li>
          <li>
            <Link href={"/topup"}>
              <NavigationItem>
                {/* <IconNote className="w-16 h-16" /> */}
                <IoGameControllerOutline className="w-16 h-16 text-slate-300" />
              </NavigationItem>
            </Link>
          </li>
          {/* <li>
            <NavigationItem>
              <IconGallery className="w-16 h-16" />
            </NavigationItem>
          </li>
          <li>
            <NavigationItem>
              <IconBook className="w-16 h-16" />
            </NavigationItem>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
