import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground py-12 text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Kolumna 1: Logo + kontakt + godziny */}
          <div>
            <img
              src="/logo-haft-park.webp"
              alt="Haft Park"
              width={80}
              height={40}
              loading="lazy"
              className="h-10 w-auto brightness-0 invert"
            />
            <ul className="mt-5 space-y-2 text-sm text-primary-foreground/60">
              <li>ul. Parkowa 36, 42-300 Myszków</li>
              <li>
                <a href="tel:+48510751008" className="transition-colors hover:text-primary-foreground">
                  +48 510 751 008
                </a>
              </li>
              <li className="pt-1">
                <span className="text-primary-foreground/40 text-xs font-semibold uppercase tracking-wider">Godziny otwarcia</span>
              </li>
              <li>Pon–Pt: 08:00–20:00</li>
            </ul>
          </div>

          {/* Kolumna 2: Usługi */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary-foreground/40">
              Usługi
            </h3>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>
                <Link to="/haft-na-odziezy" className="transition-colors hover:text-primary-foreground">
                  Haft na odzieży
                </Link>
              </li>
              <li>
                <Link to="/haft-na-czapkach" className="transition-colors hover:text-primary-foreground">
                  Haft na czapkach
                </Link>
              </li>
              <li>
                <Link to="/haft-3d" className="transition-colors hover:text-primary-foreground">
                  Haft 3D
                </Link>
              </li>
              <li>
                <Link to="/realizacje" className="transition-colors hover:text-primary-foreground">
                  Realizacje
                </Link>
              </li>
              <li>
                <Link to="/sklep" className="transition-colors hover:text-primary-foreground">
                  Sklep
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolumna 3: Firma */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary-foreground/40">
              Firma
            </h3>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li>
                <Link to="/blog" className="transition-colors hover:text-primary-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/haftpark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary-foreground"
                >
                  Facebook
                </a>
              </li>
              <li>
                <Link to="/regulamin" className="transition-colors hover:text-primary-foreground">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link to="/polityka-prywatnosci" className="transition-colors hover:text-primary-foreground">
                  Polityka prywatności
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Haft Park. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
