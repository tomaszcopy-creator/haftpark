import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center text-3xl font-bold text-foreground md:text-4xl"
        >
          Dlaczego firmy wybierają <span className="text-primary">Haft Park</span>?
        </motion.h2>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
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
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
