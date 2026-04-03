import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, HardHat, Trophy, Shirt, Gift, Medal, Tag, Layers, Cpu, Droplets, ShieldCheck, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const applications = [
  { icon: Trophy, title: "Czapki z daszkiem", desc: "Klasyka haftu 3D — wypukłe logo na panelu frontowym.", bestseller: true },
  { icon: Shirt, title: "Bluzy i koszulki", desc: "Logo na piersi lub rękawie — efektowny akcent marki." },
  { icon: HardHat, title: "Odzież robocza", desc: "Kamizelki, kurtki firmowe — widoczne oznakowanie w terenie." },
  { icon: Gift, title: "Gadżety i nagrody eventowe", desc: "Unikalne upominki z trójwymiarowym logo." },
  { icon: Medal, title: "Odzież sportowa", desc: "Herby klubów, nazwiska — prestiżowe oznakowanie drużyn." },
  { icon: Tag, title: "Kolekcje odzieżowe marek", desc: "Haft 3D jako wyróżnik kolekcji premium." },
];

const techPoints = [
  { icon: Layers, title: "Podkład piankowy EVA", desc: "Specjalna pianka umieszczana pod haftem tworzy charakterystyczną wypukłość." },
  { icon: Cpu, title: "Specjalna digitalizacja", desc: "Inny program niż haft płaski — zoptymalizowany pod efekt 3D." },
  { icon: ShieldCheck, title: "Grubsze ściegi wierzchnie", desc: "Ostra, wyraźna krawędź wzoru — logo wygląda jak odlane z metalu." },
  { icon: Droplets, title: "Trwałość jak zwykły haft", desc: "Pianka EVA jest wodoodporna i odporna na pranie — efekt na lata." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const Haft3D = () => {
  useEffect(() => {
    document.title = "Haft 3D na Czapkach i Odzieży | Haft Park Myszków";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Efektowny haft 3D na czapkach z daszkiem, bluzach i odzieży roboczej. Wypukłe logo i napisy, które przyciągają wzrok. Zamów próbkę i wycenę bez zobowiązań.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Efektowny haft 3D na czapkach z daszkiem, bluzach i odzieży roboczej. Wypukłe logo i napisy, które przyciągają wzrok. Zamów próbkę i wycenę bez zobowiązań.";
      document.head.appendChild(meta);
    }
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.haftpark.com/haft-3d";

    return () => {
      document.title = "Haft Park";
      canonical?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="container pt-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Haft Park</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Haft 3D</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* HERO */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <motion.p {...fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Haft 3D · Premium
              </motion.p>
              <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Haft 3D — logo <span className="text-primary">które wystaje</span>
              </motion.h1>
              <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Wypukły, trójwymiarowy haft komputerowy na czapkach, bluzach i odzieży roboczej. Efekt głębi, który przyciąga wzrok i wyróżnia markę.
              </motion.p>
              <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mb-16 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="gap-2 px-8 text-base">
                  <a href="tel:+48510751008">
                    <Phone className="h-4 w-4" />
                    Zadzwoń po wycenę
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 px-8 text-base">
                  <a href="#contact">
                    <ArrowRight className="h-4 w-4" />
                    Wyślij projekt
                  </a>
                </Button>
              </motion.div>

              {/* Comparison */}
              <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }} className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-card p-6">
                  <span className="mb-3 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Standard
                  </span>
                  <h3 className="mb-3 text-xl font-bold text-foreground">Haft płaski</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />Trwały i precyzyjny</li>
                    <li className="flex items-start gap-2"><span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />Odporny na pranie</li>
                    <li className="flex items-start gap-2"><span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />Leży płasko na tkaninie</li>
                  </ul>
                </div>
                <div className="rounded-lg border-2 border-primary bg-card p-6 shadow-md">
                  <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    Premium
                  </span>
                  <h3 className="mb-3 text-xl font-bold text-foreground">Haft 3D</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2"><span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Wszystko co płaski</li>
                    <li className="flex items-start gap-2"><span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Trójwymiarowy efekt wypukłości</li>
                    <li className="flex items-start gap-2"><span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Widoczny z daleka</li>
                    <li className="flex items-start gap-2"><span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Idealny na czapki z daszkiem</li>
                    <li className="flex items-start gap-2"><span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />Wyróżnia markę na tle konkurencji</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ZASTOSOWANIA */}
        <section className="border-y border-border bg-secondary/50 py-20 md:py-28">
          <div className="container">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
              Idealne zastosowania <span className="text-primary">haftu 3D</span>
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mx-auto mb-16 max-w-lg text-center text-muted-foreground">
              Sprawdź, gdzie haft 3D robi największe wrażenie
            </motion.p>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {applications.map((item, i) => (
                <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }} className="relative rounded-lg border border-border bg-card p-6">
                  {item.bestseller && (
                    <span className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                      Bestseller
                    </span>
                  )}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* JAK TO DZIAŁA */}
        <section className="py-20 md:py-28">
          <div className="container">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
              Technologia <span className="text-primary">haftu 3D</span>
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mx-auto mb-16 max-w-lg text-center text-muted-foreground">
              Co sprawia, że haft 3D jest wyjątkowy
            </motion.p>
            <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                {techPoints.map((item, i) => (
                  <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Info box */}
              <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="rounded-lg border border-primary/30 bg-primary/5 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Co nadaje się do haftu 3D?</h3>
                </div>
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <div>
                    <p className="mb-1 font-semibold text-foreground">✓ Najlepiej sprawdzają się:</p>
                    <p>Proste, grube kształty, duże litery, wyraźne logo bez drobnych detali.</p>
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-foreground">✗ Nie nadaje się:</p>
                    <p>Cienkie linie poniżej 3 mm, drobne detale i skomplikowane wzory.</p>
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-foreground">Optymalne rozmiary:</p>
                    <p>Od 3×3 cm do 12×10 cm — w tym zakresie efekt 3D wygląda najlepiej.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="border-t border-border bg-primary py-16 md:py-20">
          <div className="container text-center">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Chcesz zobaczyć jak haft 3D wygląda na Twoim logo?
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8 text-lg text-primary-foreground/80">
              Wyślij projekt — bezpłatna wizualizacja i wycena w 24h.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary" className="gap-2 px-8 text-base">
                <a href="tel:+48510751008">
                  <Phone className="h-4 w-4" />
                  510 751 008
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground/30 px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link to="/#contact">
                  Formularz kontaktowy
                </Link>
              </Button>
            </motion.div>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="mt-8 text-sm text-primary-foreground/60">
              Działamy w całej Polsce • Dostawa kurierem
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Haft3D;
