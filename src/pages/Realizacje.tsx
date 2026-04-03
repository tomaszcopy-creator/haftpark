import { useState, useEffect, useCallback } from "react";
import { useCanonical } from "@/hooks/useCanonical";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

import ewcia from "@/assets/realizacje/Ewcia.webp";
import kosaMotocykle from "@/assets/realizacje/Kosa_motocykle.webp";
import buszu from "@/assets/realizacje/Buszu.webp";
import dsf0037 from "@/assets/realizacje/DSF0037.webp";
import dsf0038 from "@/assets/realizacje/DSF0038.webp";
import dsf0034 from "@/assets/realizacje/DSF0034-2.webp";
import joker from "@/assets/realizacje/Joker-2.webp";
import helenowka from "@/assets/realizacje/Helenowka-2.webp";
import img8473 from "@/assets/realizacje/IMG_8473.webp";
import img6381 from "@/assets/realizacje/IMG_6381.webp";

const gallery = [
  { src: ewcia, alt: "Haft na bluzie — Ewcia", w: 600, h: 575 },
  { src: kosaMotocykle, alt: "Haft motocyklowy — Kosa", w: 600, h: 335 },
  { src: buszu, alt: "Haft personalizowany — Buszu", w: 600, h: 236 },
  { src: dsf0037, alt: "Realizacja haftu na odzieży", w: 600, h: 450 },
  { src: dsf0038, alt: "Haft na kurtce", w: 450, h: 600 },
  { src: dsf0034, alt: "Detale haftu maszynowego", w: 450, h: 600 },
  { src: joker, alt: "Haft Joker na bluzie", w: 338, h: 600 },
  { src: helenowka, alt: "Haft dla Helenówka", w: 600, h: 450 },
  { src: img8473, alt: "Haft na czapce", w: 600, h: 450 },
  { src: img6381, alt: "Haft firmowy na odzieży roboczej", w: 450, h: 600 },
];

const Realizacje = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = useCallback(() => setSelectedIndex(null), []);
  const prev = useCallback(
    () => setSelectedIndex((i) => (i !== null ? (i - 1 + gallery.length) % gallery.length : null)),
    []
  );
  const next = useCallback(
    () => setSelectedIndex((i) => (i !== null ? (i + 1) % gallery.length : null)),
    []
  );

  useEffect(() => {
    if (selectedIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [selectedIndex, close, prev, next]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedIndex]);

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

          {/* Masonry gallery */}
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="mb-4 break-inside-avoid"
              >
                <button
                  onClick={() => setSelectedIndex(i)}
                  className="group relative block w-full overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={item.w}
                    height={item.h}
                    loading="lazy"
                    className="w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/30">
                    <ZoomIn className="h-8 w-8 text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
            onClick={close}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute right-4 top-4 z-10 rounded-full bg-muted p-2 text-foreground transition-colors hover:bg-muted-foreground/20"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 z-10 rounded-full bg-muted p-2 text-foreground transition-colors hover:bg-muted-foreground/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 z-10 rounded-full bg-muted p-2 text-foreground transition-colors hover:bg-muted-foreground/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              src={gallery[selectedIndex].src}
              alt={gallery[selectedIndex].alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            />

            {/* Counter */}
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-muted-foreground">
              {selectedIndex + 1} / {gallery.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Realizacje;
