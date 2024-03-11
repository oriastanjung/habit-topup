import CardGame from "@/components/atom/CardGame";
import CardItem from "@/components/atom/CardItem";
import { GameType, gameDummyList } from "@/constant/game";
import { ItemType } from "@/constant/item";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HABIT - PUBGM",
};
export default function Topup() {
  return (
    <main className="relative top-0 min-h-screen z-10">
      <section className="w-full container mx-auto md:pl-20 md:pt-6">
        <h2 className="font-sf-ui-bold text-3xl font-bold pl-5 md:pl-0">
          PUBG Mobile
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center gap-10 place-items-center px-4 mt-10">
          {gameDummyList[2].data.map((item: ItemType, idx: number) => (
            <CardItem
              key={idx}
              icon="/pubgm.png"
              price={item.price}
              title={`UC ${item.data}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
