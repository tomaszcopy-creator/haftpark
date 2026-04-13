import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 8, suffix: "", label: "Lat doświadczenia" },
  { value: 2000, suffix: "+", label: "Zrealizowanych projektów" },
  { value: 0, suffix: "", label: "Zwrotów i reklamacji" },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(target); // Start with target for SSR/Googlebot

  useEffect(() => {
    if (!inView) return;
    if (target === 0) { setCount(0); return; }

    // Reset to 0 and animate up
    setCount(0);
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString("pl-PL")}
      {suffix}
    </span>
  );
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
              <p className="text-4xl font-bold text-primary md:text-5xl">
                <Counter target={stat.value} suffix={stat.suffix} inView={inView} />
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
