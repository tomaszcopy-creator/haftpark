import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-background">
      {/* Subtle accent line */}
      <div className="absolute left-0 top-0 h-1 w-full bg-primary/20" />

      <div className="container py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary"
          >
            Haft komputerowy · Myszków
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            Profesjonalny haft
            <br />
            <span className="text-primary">komputerowy dla firm</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Szybko. Precyzyjnie. Z klasą. Haftuj logo na odzieży
            — od&nbsp;1&nbsp;sztuki po serie hurtowe. Z&nbsp;pomocą doświadczonego zespołu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Button asChild size="lg" className="px-8 text-base">
              <a href="#contact">Bezpłatna konsultacja</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 text-base">
              <a href="tel:+48510751008">Zadzwoń: 510 751 008</a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 text-sm text-muted-foreground"
          >
            Dla agencji reklamowych, marek odzieżowych i&nbsp;lokalnych firm
          </motion.p>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#stats" aria-label="Przewiń niżej">
          <ArrowDown className="h-5 w-5 animate-bounce text-muted-foreground" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
