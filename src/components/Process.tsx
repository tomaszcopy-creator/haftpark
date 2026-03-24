import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Cpu, Eye, Scissors } from "lucide-react";
import konsultacjaImg from "@/assets/process/konsultacja.webp";
import digitalizacjaImg from "@/assets/process/digitalizacja.webp";
import akceptacjaImg from "@/assets/process/akceptacja.webp";
import realizacjaImg from "@/assets/process/realizacja.webp";

const steps = [
  {
    icon: MessageSquare,
    title: "Konsultacja",
    desc: "Omawiamy Twoje potrzeby i dobieramy najlepsze rozwiązanie.",
    image: konsultacjaImg,
  },
  {
    icon: Cpu,
    title: "Digitalizacja",
    desc: "Tworzenie cyfrowego wzoru haftu z Twojego projektu graficznego.",
    image: digitalizacjaImg,
  },
  {
    icon: Eye,
    title: "Akceptacja",
    desc: "Przedstawiamy wizualizację do zatwierdzenia przed produkcją.",
    image: akceptacjaImg,
  },
  {
    icon: Scissors,
    title: "Realizacja",
    desc: "Precyzyjne haftowanie z kontrolą jakości każdego elementu.",
    image: realizacjaImg,
  },
];

const Process = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="bg-secondary/50 py-20 md:py-28" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl"
        >
          Jak wygląda <span className="text-primary">współpraca</span>?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-16 max-w-lg text-center text-muted-foreground"
        >
          Cztery proste kroki od pomysłu do gotowego haftu
        </motion.p>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-border bg-card text-center"
            >
              {/* Step image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  width={400}
                  height={300}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-primary">
                  Krok {i + 1}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
