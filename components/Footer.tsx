import Image from "next/image";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-background">
      <p className="text-base font-bold text-foreground">
        @2024 AnimeWorldProject
      </p>
      <Image
        src="/logo.png"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
        style={{ width: "auto", height: "auto" }}
      />
      <div className="flex items-center gap-6">
        <Image
          src="./tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
          style={{ width: "auto", height: "auto" }}
        />
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
          style={{ width: "auto", height: "auto" }}
        />
        <Image
          src="./twitter.svg"
          alt="logo"
          width={18}
          height={19}
          className="object-contain"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </footer>
  );
}

export default Footer;
