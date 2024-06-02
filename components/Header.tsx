import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./Theme-switch";
import Search from "./clients/Search";

function Header() {
  return (
    <nav className="bg-background/50 shadow-sm sticky top-0 z-50">
      <div className="px-8 py-2 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image
            src="/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="object-contain"
          />
          <span className="sr-only">Anime world</span>
        </Link>

        {/* SEARCH */}
        <Search />

        {/* THEME TOGGLER */}
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Header;
