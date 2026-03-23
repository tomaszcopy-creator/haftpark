import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavLink from "@/components/NavLink";

const navLinks = [
  { label: "Realizacje", href: "/realizacje" },
  { label: "Sklep", href: "/sklep" },
  { label: "O nas", href: "/#stats" },
  { label: "Proces", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakt", href: "/#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo-haft-park.jpg"
            alt="Haft Park - Profesjonalny Haft Komputerowy"
            className="h-20 w-auto md:h-24"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild size="sm" className="gap-2">
            <a href="tel:+48510751008">
              <Phone className="h-3.5 w-3.5" />
              510 751 008
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <NavLink
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild className="mt-2 gap-2">
              <a href="tel:+48510751008">
                <Phone className="h-4 w-4" />
                510 751 008
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
