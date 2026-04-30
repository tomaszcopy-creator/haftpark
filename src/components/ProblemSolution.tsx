import { useIsVisible } from "@/hooks/useIsVisible";
import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  "Opóźnienia w realizacji zamówień",
  "Niska jakość haftu i blaknące kolory",
  "Brak komunikacji i podglądu projektu",
  "Wysokie minimum zamówienia — brak opcji dla małych zleceń",
];

const solutions = [
  "Terminowa realizacja — bez opóźnień",
  "Nici Madeira i Ariadna — trwałość i precyzja",
  "Cyfrowa wizualizacja przed produkcją",
  "Przyjmujemy zlecenia już od 1 sztuki",
];

const ProblemSolution = () => {
  const [ref, inView] = useIsVisible<HTMLElement>({ margin: "-80px" });

  return (
    <section className="py-14 md:py-20" ref={ref}>
      <div className="container">
        <h2 className={`sa sa-ysm ${inView ? "vis" : ""} mb-16 text-center text-3xl font-bold text-foreground md:text-4xl`}>
          Dlaczego firmy wybierają <span className="text-primary">Haft Park</span>?
        </h2>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* Problems */}
          <div
            className={`sa sa-xl ${inView ? "vis" : ""}`}
            style={{ transitionDelay: inView ? "200ms" : "0ms" }}
          >
            <h3 className="mb-6 text-lg font-semibold uppercase tracking-wider text-muted-foreground">
              Typowe problemy
            </h3>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive/70" />
                  <span className="text-foreground/80">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div
            className={`sa sa-xr ${inView ? "vis" : ""}`}
            style={{ transitionDelay: inView ? "350ms" : "0ms" }}
          >
            <h3 className="mb-6 text-lg font-semibold uppercase tracking-wider text-primary">
              Nasze rozwiązanie
            </h3>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground/80">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
