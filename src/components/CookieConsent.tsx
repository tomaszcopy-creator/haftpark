import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const COOKIE_KEY = "haftpark_cookie_consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(COOKIE_KEY, "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="mx-auto max-w-4xl p-4">
        <div className="relative rounded-xl border border-border bg-card p-5 shadow-lg md:p-6">
          <button
            onClick={reject}
            className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Zamknij"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="pr-8">
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              🍪 Ta strona używa plików cookie
            </h3>
            <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
              Używamy plików cookie, aby zapewnić prawidłowe działanie strony oraz analizować ruch
              na witrynie. Korzystając z naszej strony, wyrażasz zgodę na ich użycie zgodnie z{" "}
              <Link
                to="/polityka-prywatnosci"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                Polityką Prywatności
              </Link>
              . Możesz zmienić ustawienia plików cookie w swojej przeglądarce w dowolnym momencie.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={accept}
                className="rounded-lg bg-primary px-5 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Akceptuję wszystkie
              </button>
              <button
                onClick={reject}
                className="rounded-lg border border-border bg-background px-5 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted"
              >
                Tylko niezbędne
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
