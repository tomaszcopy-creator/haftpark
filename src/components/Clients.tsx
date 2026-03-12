import { motion } from "framer-motion";

import bro from "@/assets/klienci/bro.webp";
import solidis from "@/assets/klienci/solidis-pro.webp";
import natalux from "@/assets/klienci/natalux.webp";
import montessori from "@/assets/klienci/montessori.webp";
import loriz from "@/assets/klienci/loriz.webp";

const clients = [
  { src: bro, alt: "Bro", name: "Bro" },
  { src: solidis, alt: "Solidis PRO", name: "Solidis PRO" },
  { src: natalux, alt: "Natalux", name: "Natalux" },
  { src: montessori, alt: "Montessori Pre-School", name: "Montessori Pre-School" },
  { src: loriz, alt: "Loriz Tyre Warmers", name: "Loriz Tyre Warmers" },
];

const Clients = () => {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Zaufali nam
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Współpracujemy z najlepszymi
          </h2>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex h-20 w-36 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 md:h-24 md:w-44"
            >
              <img
                src={client.src}
                alt={client.alt}
                className="max-h-full max-w-full object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
