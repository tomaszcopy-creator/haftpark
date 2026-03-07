import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Package, Monitor, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Nici najwyższej jakości",
    desc: "Korzystamy wyłącznie z nici Madeira i Ariadna — trwałe kolory i perfekcyjne wykończenie.",
  },
  {
    icon: Package,
    title: "Od 6 sztuk",
    desc: "Minimalne zamówienie już od 6 sztuk. Idealne dla małych i dużych serii.",
  },
  {
    icon: Monitor,
    title: "Wizualizacja cyfrowa",
    desc: "Przed produkcją otrzymujesz podgląd — akceptujesz i masz pewność efektu.",
  },
  {
    icon: HeadphonesIcon,
    title: "Bezpłatna konsultacja",
    desc: "Doradzamy w doborze techniki, materiału i kolorów — bez zobowiązań.",
  },
];

const WhyUs = () => {
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
          Dlaczego <span className="text-primary">my</span>?
        </motion.h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
