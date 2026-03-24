import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground py-10 text-primary-foreground">
      <div className="container">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo-haft-park.jpg"
              alt="Haft Park"
              width={80}
              height={40}
              loading="lazy"
              className="h-10 w-auto brightness-0 invert"
            />
          </div>

          <div className="text-center text-sm text-primary-foreground/60 md:text-right">
            <p>ul. Parkowa 36, 42-300 Myszków</p>
            <p>
              Tel:{" "}
              <a href="tel:+48510751008" className="transition-colors hover:text-primary-foreground">
                +48 510 751 008
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 border-t border-primary-foreground/10 pt-6">
          <div className="flex gap-6 text-xs text-primary-foreground/60">
            <Link to="/regulamin" className="transition-colors hover:text-primary-foreground">
              Regulamin
            </Link>
            <Link to="/polityka-prywatnosci" className="transition-colors hover:text-primary-foreground">
              Polityka prywatności
            </Link>
          </div>
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Haft Park. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
