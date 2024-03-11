import CardGame from "@/components/atom/CardGame";
import { GameType, gameDummyList } from "@/constant/game";

export default function Topup() {
  return (
    <main className="relative top-0 min-h-screen z-10">
     
      <section className="w-full container mx-auto md:pl-20 md:pt-6">
        <h2 className="font-sf-ui-bold text-3xl font-bold md:pl-0 pl-5">Choose the game</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 md:gap-24 place-items-center px-4 mt-10">
          {gameDummyList.map((item: GameType, idx: number) => (
            <CardGame key={idx} image={item.image} urlGame={item.page} />
          ))}
        </div>
      </section>
    </main>
  );
}
