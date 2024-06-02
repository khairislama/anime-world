import Image from "next/image";

function Hero() {
  return (
    <header className="py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full">
      <div className="flex-1 flex flex-col">
        <h1 className="lg:text-6xl text-5xl text-foreground lg:max-w-lg font-semibold leading-[120%]">
          Explore The <span className="text-destructive">Diverse Realms</span>{" "}
          of Anime Magic
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center mt-4">
        <Image
          src="/banner.jpg"
          alt="anime"
          fill
          sizes="100vw, (max-width: 1500px) 70vw, (max-width: 1200px) 50vw,(max-width: 768px) 30vw"
          className="object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
