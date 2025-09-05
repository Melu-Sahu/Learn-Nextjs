import { HomeIcon, Sprout } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="sticky top-0 w-full border-b backdrop-blur bg-background/95 support-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo  */}
        <div className="flex h-16 justify-between items-center">
          <Link href="/" className="flex-shrink-0">
            <span className="text-xl font-bold text-primary font-mono tracking-wider">
              CRUD App
            </span>
          </Link>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
            >
              <Link href="/" className="flex items-center gap-2">
                <HomeIcon className="w-4 h-4" />
                <span className=" hidden lg:inline "> Home</span>
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="sm"
            >
              <Link href="/plants" className="flex items-center gap-2">
                <Sprout className="w-4 h-4" />
                <span className=" hidden lg:inline "> plants</span>
              </Link>
            </Button>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
