import { useEffect } from "react";
import { useCanonical } from "@/hooks/useCanonical";
import { motion } from "framer-motion";
import { Phone, ArrowRight, HardHat, Store, Users, MapPin, Eye, AlignLeft, CircleDot, Shirt, ShoppingBag, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const capTypes = [
  { title: "Czapki z daszkiem", desc: "Five-panel, six-panel, trucker, snapback, dad hat — każdy krój, haft płaski lub 3D.", icon: HardHat },
  { title: "Czapki zimowe i beanie", desc: "Dzianinowe czapki zimowe — idealne jako gadżety firmowe na chłodne miesiące.", icon: Shirt },
  { title: "Czapki sportowe", desc: "Czapki do biegania, jeździeckie, polo — lekkie i funkcjonalne z Twoim logo.", icon: Trophy },
];

const positions = [
  { title: "Panel frontowy", desc: "Główne logo firmy — najczęściej wybierana pozycja.", icon: Eye },
  { title: "Tył czapki", desc: "Strona www, tagline lub małe logo uzupełniające.", icon: AlignLeft },
  { title: "Lewy bok", desc: "Inicjały, rok założenia marki, subtelny detal.", icon: CircleDot },
  { title: "Daszek — underbrim lub top", desc: "Efekt zaskoczenia — haft widoczny przy zdjęciu czapki.", icon: MapPin },
];

const audiences = [
  { title: "Firmy i marki", items: ["Gadżety firmowe", "Odzież pracownicza", "Eventy i konferencje", "Merchandise"], icon: Store },
  { title: "Sklepy i dystrybutorzy", items: ["Własna linia czapek", "White-label", "Uzupełnienie kolekcji"], icon: ShoppingBag },
  { title: "Kluby i organizacje", items: ["Herby i emblematy", "Drużyny sportowe", "Pamiątki i kibice"], icon: Users },
];

const faqs = [
  { q: "Czy mogę dostarczyć własne czapki?", a: "Tak, haftujemy na czapkach klienta — przyjmujemy każdy rodzaj." },
  { q: "Od ilu sztuk przyjmujecie zamówienia?", a: "Od 1 sztuki, bez minimum." },
  { q: "Czy haft 3D jest możliwy na każdej czapce?", a: "Najlepiej sprawdza się na czapkach z daszkiem z twardym panelem. Na beanie efekt 3D jest słabiej widoczny." },
  { q: "Jak duże może być logo?", a: "Standardowo 7×5 cm do 10×7 cm, przy hafcie 3D ok. 6×4 cm." },
  { q: "Ile trwa realizacja?", a: "7–14 dni roboczych. Małe nakłady często realizujemy szybciej." },
];

const HaftNaCzapkach = () => {
  useCanonical("/haft-na-czapkach");
  useEffect(() => {
    document.title = "Haft na Czapkach z Daszkiem i Zimowych | Haft Park";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Haftujemy logo, napisy i wzory na czapkach z daszkiem, zimowych i beanie. Własny projekt lub gotowy wzór. Realizacja seryjnych zamówień dla firm i sklepów odzieżowych.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Haftujemy logo, napisy i wzory na czapkach z daszkiem, zimowych i beanie. Własny projekt lub gotowy wzór. Realizacja seryjnych zamówień dla firm i sklepów odzieżowych.";
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
                <BreadcrumbPage>Haft na czapkach</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* HERO */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <motion.p {...fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Czapki · Haft komputerowy
              </motion.p>
              <motion.h1 {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Czapki z haftowanym logo — <span className="text-primary">Twoja marka na głowach klientów</span>
              </motion.h1>
              <motion.p {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Haftujemy logo na czapkach z daszkiem, zimowych i beanie. Haft płaski lub 3D — trwały, profesjonalny i widoczny z daleka.
              </motion.p>
              <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="mb-16 flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="gap-2 px-8 text-base">
                  <a href="tel:+48510751008">
                    <Phone className="h-4 w-4" />
                    Zadzwoń po wycenę
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2 px-8 text-base">
                  <Link to="/haft-3d">
                    <ArrowRight className="h-4 w-4" />
                    Zobacz haft 3D
                  </Link>
                </Button>
              </motion.div>

              {/* Cap types */}
              <div className="grid gap-6 sm:grid-cols-3">
                {capTypes.map((item, i) => (
                  <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }} className="rounded-lg border border-border bg-card p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* POZYCJE HAFTU */}
        <section className="border-y border-border bg-secondary/50 py-20 md:py-28">
          <div className="container">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
              Gdzie możemy haftować <span className="text-primary">na czapce</span>
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mx-auto mb-16 max-w-lg text-center text-muted-foreground">
              Wybierz pozycję haftu — lub kilka naraz
            </motion.p>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
              {positions.map((item, i) => (
                <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }} className="flex gap-4 rounded-lg border border-border bg-card p-6">
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

        {/* DLA KOGO */}
        <section className="py-20 md:py-28">
          <div className="container">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
              Dla kogo robimy <span className="text-primary">czapki z haftem</span>
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mx-auto mb-16 max-w-lg text-center text-muted-foreground">
              Obsługujemy firmy, sklepy i organizacje w całej Polsce
            </motion.p>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
              {audiences.map((group, i) => (
                <motion.div key={group.title} {...fadeUp} transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }} className="rounded-lg border border-border bg-card p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <group.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-foreground">{group.title}</h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-y border-border bg-secondary/50 py-20 md:py-28">
          <div className="container">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
              Najczęstsze <span className="text-primary">pytania</span>
            </motion.h2>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }} className="mx-auto max-w-2xl">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-base">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-primary py-16 md:py-20">
          <div className="container text-center">
            <motion.h2 {...fadeUp} transition={{ duration: 0.5 }} className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
              Zamów czapki z haftowanym logo
            </motion.h2>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8 text-lg text-primary-foreground/80">
              Wyślij projekt — wycenimy w 24h. Od 1 sztuki.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary" className="gap-2 px-8 text-base">
                <a href="tel:+48510751008">
                  <Phone className="h-4 w-4" />
                  510 751 008
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-primary-foreground px-8 text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/#contact">
                  Formularz kontaktowy
                </Link>
              </Button>
            </motion.div>
            <motion.p {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="mt-8 text-sm text-primary-foreground/60">
              Haft płaski i 3D • Twoje lub nasze czapki
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default HaftNaCzapkach;
