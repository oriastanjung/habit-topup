"use client";
import Image from "next/image";
import React, { MouseEventHandler, ReactNode } from "react";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";
interface CardGameProps {
  image: string;
  urlGame: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

function CardGame({ className, image, onClick, urlGame }: CardGameProps) {
  const router = useRouter();
  return (
    <div className="w-full h-full relative top-0 rounded-[48px] overflow-hidden group cursor-pointer">
      <Image
        width={500}
        height={500}
        quality={100}
        className="group-hover:scale-105 w-full h-full ease-in-out transition-all duration-300"
        src={image}
        alt=""
      />
      <div className="absolute translate-y-full group-hover:translate-y-0 flex flex-col items-center justify-center duration-500 ease-in-out transform transition-all h-full bg-black top-0 w-full bg-opacity-35">
        <Badge
          onClick={() => router.push(urlGame)}
          variant={"outline"}
          className="font-sf-ui-medium text-white font-medium text-base"
        >
          Choose
        </Badge>
      </div>
    </div>
  );
}

export default CardGame;
