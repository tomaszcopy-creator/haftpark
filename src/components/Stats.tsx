import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const stats = [
  { value: 8, suffix: "", label: "Lat doświadczenia", icon: null },
  { value: 2000, suffix: "+", label: "Zrealizowanych projektów", icon: null },
  { value: null, suffix: "", label: "Gwarancja jakości", icon: "shield" },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(target);

  useEffect(() => {
    if (!inView) return;
    setCount(0);
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count.toLocaleString("pl-PL")}{suffix}</span>;
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="border-y border-border bg-secondary/50 py-16 md:py-20" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              {stat.icon === "shield" ? (
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="h-10 w-10 text-primary md:h-12 md:w-12" strokeWidth={1.5} />
                  <p className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="text-xs text-muted-foreground/70">0 zwrotów i reklamacji</p>
                </div>
              ) : (
                <>
                  <p className="text-4xl font-bold text-primary md:text-5xl">
                    <Counter target={stat.value!} suffix={stat.suffix} inView={inView} />
                  </p>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
