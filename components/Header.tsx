import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./Theme-switch";
import Search from "./clients/Search";

function Header() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-background shadow-sm">
      {/* LOGO */}
      <Link href="/" className="flex items-center" prefetch={false}>
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="object-contain"
        />
        <span className="sr-only">Anime world</span>
      </Link>

      {/* SEARCH */}
      <Search />

      {/* THEME TOGGLER */}
      <ModeToggle />
    </nav>
  );
}

export default Header;
