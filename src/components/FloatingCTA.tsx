import { Phone } from "lucide-react";

const FloatingCTA = () => {
  return (
    <a
      href="tel:+48510751008"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105 md:hidden"
      aria-label="Zadzwoń teraz"
    >
      <Phone className="h-4 w-4" />
      Zadzwoń
    </a>
  );
};

export default FloatingCTA;
