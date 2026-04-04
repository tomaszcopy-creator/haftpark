import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NavLink from "@/components/NavLink";

const ofertaLinks = [
  { label: "Haft na odzieży", href: "/haft-na-odziezy" },
  { label: "Haft na czapkach", href: "/haft-na-czapkach" },
  { label: "Haft 3D", href: "/haft-3d" },
];

const mainLinks = [
  { label: "Realizacje", href: "/realizacje" },
  { label: "Sklep", href: "/sklep" },
  { label: "Blog", href: "/blog" },
  { label: "O nas", href: "/#stats" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakt", href: "/#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ofertaMobileOpen, setOfertaMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo-haft-park.webp"
            alt="Haft Park - Profesjonalny Haft Komputerowy"
            width={120}
            height={64}
            className="h-14 w-auto md:h-16 object-cover object-top"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {/* Oferta dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-primary">
              Oferta
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="pointer-events-none absolute left-1/2 top-full pt-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 -translate-x-1/2">
              <div className="min-w-[200px] rounded-lg border border-border bg-background p-2 shadow-lg">
                {ofertaLinks.map((l) => (
                  <NavLink
                    key={l.href}
                    href={l.href}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {mainLinks.map((l) => (
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
            {/* Oferta accordion */}
            <button
              onClick={() => setOfertaMobileOpen(!ofertaMobileOpen)}
              className="flex items-center justify-between text-base font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Oferta
              <ChevronDown className={`h-4 w-4 transition-transform ${ofertaMobileOpen ? "rotate-180" : ""}`} />
            </button>
            {ofertaMobileOpen && (
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-primary/20">
                {ofertaLinks.map((l) => (
                  <NavLink
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            )}

            {mainLinks.map((l) => (
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
