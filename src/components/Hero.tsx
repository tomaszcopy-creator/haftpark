import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img
          src="/hero-collage.webp"
          srcSet="/hero-collage-mobile.webp 768w, /hero-collage.webp 1600w"
          sizes="100vw"
          alt="Kolaż realizacji haftu komputerowego"
          className="h-full w-full object-cover"
          fetchPriority="high"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="absolute left-0 top-0 h-1 w-full bg-primary/20" />

      <div className="container relative z-10 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="hero-anim mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary" style={{ animationDelay: "0ms" }}>
            Haft komputerowy · Myszków
          </p>

          <h1 className="hero-anim mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl" style={{ animationDelay: "100ms" }}>
            Profesjonalny haft
            <br />
            <span className="text-primary">komputerowy dla firm</span>
            <br />
            <span className="font-sans text-lg font-medium tracking-normal text-muted-foreground md:text-2xl lg:text-3xl">
              — Myszków i cała Polska
            </span>
          </h1>

          <p className="hero-anim mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl" style={{ animationDelay: "200ms" }}>
            Szybko. Precyzyjnie. Z klasą. Haftuj logo na odzieży
            — od&nbsp;1&nbsp;sztuki po serie hurtowe. Z&nbsp;pomocą doświadczonego zespołu.
          </p>

          <div className="hero-anim flex flex-col items-center gap-4 sm:flex-row sm:justify-center" style={{ animationDelay: "300ms" }}>
            <Button asChild size="lg" className="px-8 text-base">
              <a href="#contact">Bezpłatna wycena w 24h</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 text-base">
              <a href="tel:+48510751008">Zadzwoń: 510 751 008</a>
            </Button>
          </div>

          <p className="hero-anim mt-10 text-sm text-muted-foreground" style={{ animationDelay: "500ms" }}>
            Dla firm, agencji reklamowych, marek odzieżowych i&nbsp;klientów indywidualnych
          </p>
        </div>
      </div>

      <div className="hero-anim absolute bottom-8 left-1/2 z-10 -translate-x-1/2" style={{ animationDelay: "1000ms" }}>
        <a href="#stats" aria-label="Przewiń niżej">
          <ArrowDown className="h-5 w-5 animate-bounce text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
