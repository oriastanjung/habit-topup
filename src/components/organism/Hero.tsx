import Image from "next/image";
import React, { FC } from "react";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <>
      <section className="w-full flex  items-center justify-center absolute top-52 md:top-5 z-[2]">
        <Image
          width={517}
          height={776}
          quality={100}
          src={"/hero.png"}
          alt="habit-hero"
        />
      </section>
      <section className="w-full flex  items-center justify-center absolute top-[32rem] md:top-96  z-[1]">
        <Image
          width={886}
          height={305}
          quality={100}
          src={"/hero-bg.png"}
          alt="habit-hero"
        />
      </section>
    </>
  );
};

export default Hero;
