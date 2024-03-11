import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import React from "react";

interface CardProps {
  className?: string;
  icon: string;
  price: number;
  title: string;
}

function CardItem({ icon, price, title, className }: CardProps) {
  return (
    <Badge className="flex flex-col items-center w-full justify-center cursor-pointer rounded-2xl gap-3 py-3 hover:border-black bg-white" variant={"outline"}>
      <p className="font-sf-ui-semibold font-semibold text-xl">{title}</p>
      <Image src={icon} alt="title" width={500} height={500} quality={100} className="w-16 h-16 object-cover object-center" />
      <p className="font-sf-ui-bold font-bold text-2xl">Rp{price}</p>
    </Badge>
  );
}

export default CardItem;
