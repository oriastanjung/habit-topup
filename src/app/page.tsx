import Hero from "@/components/organism/Hero";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import TextSpan from "@/components/ui/TextSpan";
import { FaCheck } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
export default function Home() {
  return (
    <main className="relative top-0 ">
      <section className="flex flex-col  items-start absolute md:left-10 2xl:left-32 z-[2] md:z-[1]">
        <h1 className="text-5xl font-sf-ui-medium"> Today is</h1>
        <TextSpan className="text-5xl">a best</TextSpan>
        <TextSpan className="text-5xl ml-10">day to win</TextSpan>
      </section>
      <Hero />
      <section className="absolute top-[28rem] md:top-auto right-0 z-[20] md:z-[0]">
        <Card className="px-4 md:px-8 2xl:px-12 h-[20rem] md:h-96 2xl:h-[40rem] 2xl:w-[23rem] flex flex-col items-start justify-center">
          <div>
            <h2 className="flex items-center gap-1 font-sf-ui-medium text-3xl">
              Why <TextSpan>Habit?</TextSpan>
            </h2>
          </div>
          <div className="mt-3">
            <p className="font-sf-ui">It is all you need to top up games!</p>
          </div>
          <div className="mt-6 flex flex-col w-full">
            <div className="flex">
              <TextSpan
                isDark
                className="px-2 py-3 flex font-sf-ui text-xs items-center gap-1 w-1/3 text-center"
              >
                <FaCheck className="text-white text-[9px]" />
                Secure
              </TextSpan>
              <TextSpan
                isDark
                className="px-2 py-3 flex font-sf-ui text-xs items-center gap-1 w-2/3 text-center"
              >
                <FaCheck className="text-white text-[9px]" />
                Easy for Paying
              </TextSpan>
            </div>
            <div className="flex">
              <TextSpan className="px-2 py-3 flex font-sf-ui text-xs items-center gap-1 w-full text-center">
                <FaCheck className="text-black text-[9px]" />
                The Best Top-up Platform
              </TextSpan>
            </div>
            <div className="flex">
              <TextSpan
                className="px-2 py-3 flex font-sf-ui text-xs items-center gap-1 w-1/2 text-center"
              >
                <FaCheck className="text-black text-[9px]" />
                Fast Progress
              </TextSpan>
              <TextSpan
                className="px-2 py-3 flex font-sf-ui text-xs items-center gap-1 w-1/2 text-center"
              >
                <FaCheck className="text-black text-[9px]" />
                Only Few Clicks
              </TextSpan>
            </div>
          </div>
        </Card>
      </section>
      <section className="absolute top-48 md:left-auto left-28 md:top-[40rem] md:w-full flex md:justify-center z-[30]">
        <Button className="flex items-center">Top-Up Now <GoChevronRight /></Button>
      </section>
    </main>
  );
}
