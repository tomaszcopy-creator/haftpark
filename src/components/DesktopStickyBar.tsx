import { useState, useEffect } from "react";
import { Phone, MessageSquare } from "lucide-react";

const DesktopStickyBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 720);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
        hidden md:flex fixed bottom-0 left-0 right-0 z-40
        items-center justify-between gap-4
        border-t border-border bg-background/95 backdrop-blur
        px-8 py-3 shadow-[0_-2px_16px_rgba(0,0,0,0.06)]
        transition-transform duration-300
        ${visible ? "translate-y-0" : "translate-y-full"}
      `}
      aria-hidden={!visible}
    >
      <p className="text-sm text-muted-foreground">
        <span className="font-semibold text-foreground">Haft Park</span>
        {" · "}Profesjonalny haft komputerowy — Myszków i cała Polska
      </p>
      <div className="flex items-center gap-3 shrink-0">
        <a
          href="#contact"
          className="flex items-center gap-2 rounded-md border border-border px-4 py-1.5 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
        >
          <MessageSquare className="h-4 w-4" />
          Bezpłatna wycena
        </a>
        <a
          href="tel:+48510751008"
          className="flex items-center gap-2 rounded-md bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          <Phone className="h-4 w-4" />
          510 751 008
        </a>
      </div>
    </div>
  );
};

export default DesktopStickyBar;
