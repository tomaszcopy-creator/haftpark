import { motion } from "framer-motion";

import bro from "@/assets/klienci/bro.webp";
import solidis from "@/assets/klienci/solidis-pro.webp";
import natalux from "@/assets/klienci/natalux.webp";
import montessori from "@/assets/klienci/montessori.webp";
import loriz from "@/assets/klienci/loriz.webp";
import wikaSerwis from "@/assets/klienci/wika-serwis.webp";
import vsteam from "@/assets/klienci/vsteam.webp";
import vipprint from "@/assets/klienci/vipprint.webp";

const clients = [
  { src: bro, alt: "Bro", name: "Bro" },
  { src: solidis, alt: "Solidis PRO", name: "Solidis PRO" },
  { src: natalux, alt: "Natalux", name: "Natalux" },
  { src: montessori, alt: "Montessori Pre-School", name: "Montessori Pre-School" },
  { src: loriz, alt: "Loriz Tyre Warmers", name: "Loriz Tyre Warmers" },
  { src: wikaSerwis, alt: "Wika Serwis Q Service Castrol", name: "Wika Serwis" },
  { src: vsteam, alt: "V Steam", name: "V Steam" },
  { src: vipprint, alt: "VipPrint.pl", name: "VipPrint" },
];

// Double the array for seamless infinite scroll
const duplicated = [...clients, ...clients];

const Clients = () => {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Zaufali nam
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            Obsługujemy firmy, agencje i klientów indywidualnych
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mb-12 max-w-2xl text-center text-base text-muted-foreground md:text-lg"
        >
          Realizujemy zamówienia hurtowe dla marek odzieżowych i agencji reklamowych, 
          a&nbsp;także <span className="font-semibold text-foreground">przyjmujemy zlecenia już od&nbsp;1&nbsp;sztuki</span>. 
          Niezależnie od skali — dostajesz tę samą jakość i&nbsp;terminowość.
        </motion.p>
      </div>

      {/* Infinite scroll marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-muted/30 to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-muted/30 to-transparent md:w-32" />

        <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-12 hover:[animation-play-state:paused] md:gap-20">
          {duplicated.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex h-16 w-32 shrink-0 items-center justify-center md:h-20 md:w-40"
            >
              <img
                src={client.src}
                alt={client.alt}
                width={160}
                height={80}
                loading="lazy"
                className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-screen"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
