import { useEffect } from "react";
import { useCanonical } from "@/hooks/useCanonical";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Shirt, HardHat, Trophy, Hotel, Tag, Gift, Leaf, Zap, Scissors as ScissorsIcon, Ruler, ShieldCheck, Sparkles, Palette, Target, Eye, CheckCircle, MessageSquare, Cpu } from "lucide-react";
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

const stats = [
  { value: "2000+", label: "Realizacji" },
  { value: "8 lat", label: "Doświadczenia" },
  { value: "Od 1 szt.", label: "Bez minimum" },
  { value: "0", label: "Reklamacji" },
];

const embroideryTypes = [
  { icon: Shirt, title: "Odzież firmowa", desc: "Koszulki polo, bluzy, kurtki z logo — buduj rozpoznawalność marki." },
  { icon: HardHat, title: "Odzież robocza i BHP", desc: "Kamizelki, kombinezony, fartuchy — haft odporny na pranie przemysłowe." },
  { icon: Trophy, title: "Odzież sportowa i klubowa", desc: "Numery, nazwiska, herby klubów — trwałe i prestiżowe oznakowanie." },
  { icon: Hotel, title: "HoReCa i SPA", desc: "Fartuchy, szlafroki, ręczniki z logo hotelu lub restauracji." },
  { icon: Tag, title: "Odzież dla marek", desc: "Haft jako element kolekcji — logo, metkowanie, detale na wykrojach." },
  { icon: Gift, title: "Upominki i gadżety", desc: "Personalizowane prezenty od 1 sztuki — czapki, torby, worki." },
];

const materials = [
  { icon: Leaf, title: "Tkaniny naturalne", desc: "Bawełna, len, wełna, denim — klasyka w najlepszym wydaniu." },
  { icon: Zap, title: "Syntetyczne", desc: "Polar, softshell, poliester, nylon — idealne do odzieży sportowej." },
  { icon: HardHat, title: "Odzież robocza", desc: "Kamizelki BHP, kombinezony, mundury — tkaniny o podwyższonej wytrzymałości." },
  { icon: Ruler, title: "Wykroje i metraż", desc: "Haftujemy również na wykrojach i materiałach metrażowych przed szyciem." },
];

const whyEmbroidery = [
  { icon: ShieldCheck, title: "Trwałość przez lata", desc: "Nie wyblaknie, nie spruje się po setkach prań." },
  { icon: Sparkles, title: "Prestiż i profesjonalizm", desc: "Trójwymiarowa faktura nici podnosi wartość każdej odzieży." },
  { icon: Palette, title: "Nici Madeira i Ariadna", desc: "500+ kolorów, odporne na UV i pranie przemysłowe." },
  { icon: Target, title: "Precyzja do detalu", desc: "Digitalizacja z Twojego projektu graficznego — wierne odwzorowanie." },
  { icon: Gift, title: "Od 1 sztuki", desc: "Bez minimalnego nakładu zamówienia — nawet pojedyncze sztuki." },
  { icon: Eye, title: "Wizualizacja przed produkcją", desc: "Akceptujesz podgląd zanim ruszy maszyna — masz pewność efektu." },
];

const processSteps = [
  { icon: MessageSquare, step: 1, title: "Konsultacja", desc: "Omawiamy potrzeby i dobieramy technikę." },
  { icon: Cpu, step: 2, title: "Digitalizacja", desc: "Tworzymy cyfrowy wzór haftu z Twojego projektu." },
  { icon: Eye, step: 3, title: "Akceptacja", desc: "Przedstawiamy wizualizację do zatwierdzenia." },
  { icon: CheckCircle, step: 4, title: "Realizacja", desc: "Precyzyjne haftowanie z kontrolą jakości." },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const HaftNaOdziezy = () => {
  useCanonical("/haft-na-odziezy");
  useEffect(() => {
    document.title = "Haft na Odzieży Firmowej i Roboczej | Haft Park";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Haft komputerowy logo i napisów na koszulkach, bluzach, polarach i odzieży roboczej. Trwałe znakowanie odzieży dla firm, agencji i marek odzieżowych. Wycena gratis.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Haft komputerowy logo i napisów na koszulkach, bluzach, polarach i odzieży roboczej. Trwałe znakowanie odzieży dla firm, agencji i marek odzieżowych. Wycena gratis.";
      document.head.appendChild(meta);
    }
    return () => {
      document.title = "Haft Park";
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
                <BreadcrumbPage>Haft na odzieży</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* HERO */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <motion.p {...fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Haft komputerowy · Cała Polska
                </motion.p>
                <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                  Haft na odzieży <span className="text-primary">firmowej i roboczej</span>
                </motion.h1>
                <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                  Trwałe znakowanie haftem komputerowym — koszulki, bluzy, polary, odzież robocza. Logo lub napis, który przetrwa setki prań.
                </motion.p>
                <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col gap-4 sm:flex-row">
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
              </div>

              {/* Stats grid */}
              <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-lg border border-border bg-card p-6 text-center">
                    <p className="text-3xl font-bold text-primary md:text-4xl">{s.value}</p>
                    <p className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CO HAFTUJEMY */}
        <section className="border-y border-border bg-secondary/50 py-20 md:py-28">
          <div className="container">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
              Co możemy wyhaftować <span className="text-primary">na Twojej odzieży</span>
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mx-auto mb-16 max-w-lg text-center text-muted-foreground">
              Obsługujemy firmy, agencje reklamowe, marki odzieżowe i klientów indywidualnych
            </motion.p>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {embroideryTypes.map((item, i) => (
                <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }} className="rounded-lg border border-border bg-card p-6">
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

        {/* MATERIAŁY */}
        <section className="py-20 md:py-28">
          <div className="container">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
              Na jakich materiałach <span className="text-primary">haftujemy</span>
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mx-auto mb-16 max-w-lg text-center text-muted-foreground">
              Dopasowujemy technikę i podkład do rodzaju tkaniny
            </motion.p>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
              {materials.map((item, i) => (
                <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }} className="flex gap-4 rounded-lg border border-border bg-card p-6">
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
          </div>
        </section>

        {/* DLACZEGO HAFT */}
        <section className="border-y border-border bg-secondary/50 py-20 md:py-28">
          <div className="container">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
              Dlaczego haft komputerowy, <span className="text-primary">nie nadruk?</span>
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mx-auto mb-16 max-w-lg text-center text-muted-foreground">
              Haft to inwestycja — podnosi prestiż i wytrzymuje lata użytkowania
            </motion.p>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyEmbroidery.map((item, i) => (
                <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }} className="flex gap-4">
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
          </div>
        </section>

        {/* PROCES */}
        <section className="py-20 md:py-28">
          <div className="container">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
              Jak wygląda <span className="text-primary">realizacja</span>
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mx-auto mb-16 max-w-lg text-center text-muted-foreground">
              Cztery proste kroki od pomysłu do gotowego haftu
            </motion.p>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((s, i) => (
                <motion.div key={s.title} {...fadeUp} transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-primary">Krok {s.step}</span>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="border-t border-border bg-primary py-16 md:py-20">
          <div className="container text-center">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Gotowy na wycenę?
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8 text-lg text-primary-foreground/80">
              Odpowiadamy w 24h. Wycena gratis, bez zobowiązań.
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

export default HaftNaOdziezy;
