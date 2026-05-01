import { useSeoMeta, useServiceJsonLd, useBreadcrumbJsonLd, useFaqJsonLd } from "@/hooks/useSeoMeta";
import { Phone, ArrowRight, Shirt, HardHat, Trophy, Hotel, Tag, Gift, Leaf, Zap, Scissors as ScissorsIcon, Ruler, ShieldCheck, Sparkles, Palette, Target, Eye, CheckCircle, MessageSquare, Cpu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { useIsVisible } from "@/hooks/useIsVisible";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const faqs = [
  { q: "Na jakiej odzieży można zrobić haft komputerowy?", a: "Haftujemy na praktycznie każdym materiale tekstylnym — bawełnie, polarze, softshell, denimu, nylonie i poliester. Koszulki, bluzy, kurtki, kamizelki BHP, kombinezony, fartuchy, odzież robocza." },
  { q: "Od ilu sztuk można zamówić haft na odzieży?", a: "Od 1 sztuki, bez minimalnego progu zamówienia. Obsługujemy zarówno klientów indywidualnych, jak i firmy zamawiające setki sztuk." },
  { q: "Ile kosztuje haft logo na koszulce?", a: "Małe logo od 3 zł/szt., standardowe logo na pierś ok. 8–15 zł/szt. Cena zależy od rozmiaru wzoru i wielkości serii. Bezpłatna wycena online lub tel. +48 510 751 008." },
  { q: "Czy mogę dostarczyć własną odzież do haftowania?", a: "Tak, haftujemy na odzieży dostarczonej przez klienta — koszulkach, bluzach, kurtkach, odzieży roboczej i każdym innym wyrobie tekstylnym." },
  { q: "Jak długo trwa realizacja haftu na odzieży?", a: "Standardowo 5–10 dni roboczych od akceptacji wizualizacji. Dostępny tryb ekspresowy przy pilnych zamówieniach." },
];

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

const HaftNaOdziezy = () => {
  const [heroRef, heroInView] = useIsVisible<HTMLElement>({ margin: "-80px" });
  const [coRef, coInView] = useIsVisible<HTMLElement>({ margin: "-80px" });
  const [matRef, matInView] = useIsVisible<HTMLElement>({ margin: "-80px" });
  const [dlaczegoRef, dlaczegoInView] = useIsVisible<HTMLElement>({ margin: "-80px" });
  const [procesRef, procesInView] = useIsVisible<HTMLElement>({ margin: "-80px" });
  const [faqRef, faqInView] = useIsVisible<HTMLElement>({ margin: "-80px" });
  const [ctaRef, ctaInView] = useIsVisible<HTMLElement>({ margin: "-80px" });

  useSeoMeta({
    title: "Haft na Odzieży Firmowej i Roboczej | Haft Park",
    description: "Haft komputerowy logo i napisów na koszulkach, bluzach, polarach i odzieży roboczej. Trwałe znakowanie odzieży dla firm, agencji i marek odzieżowych. Wycena gratis.",
    path: "/haft-na-odziezy",
  });
  useServiceJsonLd("Haft na odzieży firmowej");
  useFaqJsonLd(faqs);
  useBreadcrumbJsonLd([
    { name: "Haft Park", url: "https://www.haftpark.com/" },
    { name: "Haft na odzieży", url: "https://www.haftpark.com/haft-na-odziezy" },
  ]);

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
        <section className="py-16 md:py-24" ref={heroRef}>
          <div className="container">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <p className={`sa sa-ysm ${heroInView ? "vis" : ""} mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary`}>
                  Haft komputerowy · Cała Polska
                </p>
                <h1
                  className={`sa sa-ysm ${heroInView ? "vis" : ""} mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl`}
                  style={{ transitionDelay: heroInView ? "100ms" : "0ms" }}
                >
                  Haft na odzieży <span className="text-primary">firmowej i roboczej</span>
                </h1>
                <p
                  className={`sa sa-ysm ${heroInView ? "vis" : ""} mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground`}
                  style={{ transitionDelay: heroInView ? "200ms" : "0ms" }}
                >
                  Trwałe znakowanie haftem komputerowym — koszulki, bluzy, polary, odzież robocza. Logo lub napis, który przetrwa setki prań.
                </p>
                <div
                  className={`sa sa-ysm ${heroInView ? "vis" : ""} flex flex-col gap-4 sm:flex-row`}
                  style={{ transitionDelay: heroInView ? "300ms" : "0ms" }}
                >
                  <Button asChild size="lg" className="gap-2 px-8 text-base">
                    <a href="tel:+48510751008">
                      <Phone className="h-4 w-4" />
                      Zadzwoń po wycenę
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2 px-8 text-base">
                    <Link to="/#contact">
                      <ArrowRight className="h-4 w-4" />
                      Wyślij projekt
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Stats grid */}
              <div
                className={`sa sa-xr ${heroInView ? "vis" : ""} grid grid-cols-2 gap-4`}
                style={{ transitionDelay: heroInView ? "300ms" : "0ms" }}
              >
                {stats.map((s) => (
                  <div key={s.label} className="rounded-lg border border-border bg-card p-6 text-center">
                    <p className="text-3xl font-bold text-primary md:text-4xl">{s.value}</p>
                    <p className="mt-1 text-sm font-medium uppercase tracking-wider text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CO HAFTUJEMY */}
        <section className="border-y border-border bg-secondary/50 py-20 md:py-28" ref={coRef}>
          <div className="container">
            <h2 className={`sa sa-ysm ${coInView ? "vis" : ""} mb-4 text-center text-3xl font-bold text-foreground md:text-4xl`}>
              Co możemy wyhaftować <span className="text-primary">na Twojej odzieży</span>
            </h2>
            <p
              className={`sa sa-ysm ${coInView ? "vis" : ""} mx-auto mb-16 max-w-lg text-center text-muted-foreground`}
              style={{ transitionDelay: coInView ? "100ms" : "0ms" }}
            >
              Obsługujemy firmy, agencje reklamowe, marki odzieżowe i klientów indywidualnych
            </p>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {embroideryTypes.map((item, i) => (
                <div
                  key={item.title}
                  className={`sa sa-y ${coInView ? "vis" : ""} rounded-lg border border-border bg-card p-6`}
                  style={{ transitionDelay: coInView ? `${200 + i * 70}ms` : "0ms" }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MATERIAŁY */}
        <section className="py-20 md:py-28" ref={matRef}>
          <div className="container">
            <h2 className={`sa sa-ysm ${matInView ? "vis" : ""} mb-4 text-center text-3xl font-bold text-foreground md:text-4xl`}>
              Na jakich materiałach <span className="text-primary">haftujemy</span>
            </h2>
            <p
              className={`sa sa-ysm ${matInView ? "vis" : ""} mx-auto mb-16 max-w-lg text-center text-muted-foreground`}
              style={{ transitionDelay: matInView ? "100ms" : "0ms" }}
            >
              Dopasowujemy technikę i podkład do rodzaju tkaniny
            </p>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
              {materials.map((item, i) => (
                <div
                  key={item.title}
                  className={`sa sa-y ${matInView ? "vis" : ""} flex gap-4 rounded-lg border border-border bg-card p-6`}
                  style={{ transitionDelay: matInView ? `${200 + i * 80}ms` : "0ms" }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DLACZEGO HAFT */}
        <section className="border-y border-border bg-secondary/50 py-20 md:py-28" ref={dlaczegoRef}>
          <div className="container">
            <h2 className={`sa sa-ysm ${dlaczegoInView ? "vis" : ""} mb-4 text-center text-3xl font-bold text-foreground md:text-4xl`}>
              Dlaczego haft komputerowy, <span className="text-primary">nie nadruk?</span>
            </h2>
            <p
              className={`sa sa-ysm ${dlaczegoInView ? "vis" : ""} mx-auto mb-16 max-w-lg text-center text-muted-foreground`}
              style={{ transitionDelay: dlaczegoInView ? "100ms" : "0ms" }}
            >
              Haft to inwestycja — podnosi prestiż i wytrzymuje lata użytkowania
            </p>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyEmbroidery.map((item, i) => (
                <div
                  key={item.title}
                  className={`sa sa-y ${dlaczegoInView ? "vis" : ""} flex gap-4`}
                  style={{ transitionDelay: dlaczegoInView ? `${200 + i * 70}ms` : "0ms" }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCES */}
        <section className="py-20 md:py-28" ref={procesRef}>
          <div className="container">
            <h2 className={`sa sa-ysm ${procesInView ? "vis" : ""} mb-4 text-center text-3xl font-bold text-foreground md:text-4xl`}>
              Jak wygląda <span className="text-primary">realizacja</span>
            </h2>
            <p
              className={`sa sa-ysm ${procesInView ? "vis" : ""} mx-auto mb-16 max-w-lg text-center text-muted-foreground`}
              style={{ transitionDelay: procesInView ? "100ms" : "0ms" }}
            >
              Cztery proste kroki od pomysłu do gotowego haftu
            </p>
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((s, i) => (
                <div
                  key={s.title}
                  className={`sa sa-y ${procesInView ? "vis" : ""} text-center`}
                  style={{ transitionDelay: procesInView ? `${200 + i * 100}ms` : "0ms" }}
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-primary">Krok {s.step}</span>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-y border-border bg-secondary/50 py-20 md:py-28" ref={faqRef}>
          <div className="container">
            <h2 className={`sa sa-ysm ${faqInView ? "vis" : ""} mb-4 text-center text-3xl font-bold text-foreground md:text-4xl`}>
              Najczęściej zadawane <span className="text-primary">pytania</span>
            </h2>
            <div
              className={`sa sa-ysm ${faqInView ? "vis" : ""} mx-auto max-w-2xl`}
              style={{ transitionDelay: faqInView ? "150ms" : "0ms" }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-base">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="border-t border-border bg-primary py-16 md:py-20" ref={ctaRef}>
          <div className="container text-center">
            <h2 className={`sa sa-ysm ${ctaInView ? "vis" : ""} mb-4 text-3xl font-bold text-primary-foreground md:text-4xl`}>
              Gotowy na wycenę?
            </h2>
            <p
              className={`sa sa-ysm ${ctaInView ? "vis" : ""} mb-8 text-lg text-primary-foreground/80`}
              style={{ transitionDelay: ctaInView ? "100ms" : "0ms" }}
            >
              Odpowiadamy w 24h. Wycena gratis, bez zobowiązań.
            </p>
            <div
              className={`sa sa-ysm ${ctaInView ? "vis" : ""} flex flex-col items-center gap-4 sm:flex-row sm:justify-center`}
              style={{ transitionDelay: ctaInView ? "200ms" : "0ms" }}
            >
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
            </div>
            <p
              className={`sa sa-ysm ${ctaInView ? "vis" : ""} mt-8 text-sm text-primary-foreground/60`}
              style={{ transitionDelay: ctaInView ? "300ms" : "0ms" }}
            >
              Działamy w całej Polsce • Dostawa kurierem
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default HaftNaOdziezy;
