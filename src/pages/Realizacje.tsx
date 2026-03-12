import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import r1 from "@/assets/realizacje/realizacja-1.jpg";
import r2 from "@/assets/realizacje/realizacja-2.jpg";
import r3 from "@/assets/realizacje/realizacja-3.jpg";
import r4 from "@/assets/realizacje/realizacja-4.jpg";
import r5 from "@/assets/realizacje/realizacja-5.jpg";
import r6 from "@/assets/realizacje/realizacja-6.jpg";
import r7 from "@/assets/realizacje/realizacja-7.jpg";
import r8 from "@/assets/realizacje/realizacja-8.webp";
import r9 from "@/assets/realizacje/realizacja-9.webp";
import r10 from "@/assets/realizacje/realizacja-10.webp";
import r11 from "@/assets/realizacje/realizacja-11.jpg";

const gallery = [
  { src: r1, alt: "Haft – litery na różowym tle", rotate: 180 },
  { src: r2, alt: "Haft – buldog", rotate: 0 },
  { src: r3, alt: "Haft – mrówka MM93", rotate: 0 },
  { src: r4, alt: "Haft – postać z kwiatami", rotate: 0 },
  { src: r5, alt: "Haft – Joker napis", rotate: 0 },
  { src: r6, alt: "Haft – Kosa motocykle", rotate: 0 },
  { src: r7, alt: "Haft – Plicha logo", rotate: 0 },
  { src: r8, alt: "Haft – For Animals naszywka", rotate: 0 },
  { src: r9, alt: "Haft – Helenówka napis", rotate: 180 },
  { src: r10, alt: "Haft – Joker komiks", rotate: 0 },
  { src: r11, alt: "Haft – Montessori Pre-School", rotate: 0 },
];

const Realizacje = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-20 md:py-28">
        <div className="container">
          <h1 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            Nasze <span className="text-primary">Realizacje</span>
          </h1>
          <p className="mx-auto mb-14 max-w-md text-center text-muted-foreground">
            Ponad 2000 projektów — oto wybrane przykłady naszej pracy
          </p>

          <div className="mx-auto columns-2 gap-4 sm:columns-3 lg:columns-4 max-w-6xl">
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelected(i)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-300 hover:scale-105"
                  style={item.rotate ? { transform: `rotate(${item.rotate}deg)` } : undefined}
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 rounded-full bg-background/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-background/40"
              onClick={() => setSelected(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={gallery[selected].src}
              alt={gallery[selected].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Realizacje;
