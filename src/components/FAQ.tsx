import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsVisible } from "@/hooks/useIsVisible";

const faqs = [
  {
    q: "Jakie jest minimalne zamówienie?",
    a: "Nie ma minimalnego zamówienia — realizujemy zlecenia już od 1 sztuki. Obsługujemy zarówno klientów indywidualnych, jak i duże serie hurtowe.",
  },
  {
    q: "Ile trwa realizacja zamówienia?",
    a: "Standardowy czas realizacji to 5–10 dni roboczych od akceptacji wizualizacji. Przy pilnych zamówieniach oferujemy tryb ekspresowy.",
  },
  {
    q: "Na jakich materiałach można haftować?",
    a: "Haftujemy na szerokim zakresie tkanin: bawełna, poliester, polar, softshell, dżins i wiele innych. Doradzimy najlepsze rozwiązanie dla Twojego materiału.",
  },
  {
    q: "Czy mogę zobaczyć wizualizację przed produkcją?",
    a: "Tak — każde zamówienie poprzedzamy cyfrową wizualizacją haftu, którą przesyłamy do akceptacji. Produkcja rusza dopiero po Twoim zatwierdzeniu.",
  },
  {
    q: "Jakich nici używacie?",
    a: "Używamy nici Madeira i Ariadna — to producenci klasy premium, gwarantujący trwałość kolorów, odporność na pranie i doskonałe wykończenie.",
  },
  {
    q: "Czy oferujecie dostawę?",
    a: "Tak, realizujemy wysyłki na terenie całej Polski. Możliwy jest także odbiór osobisty w naszej siedzibie w Myszkowie.",
  },
];

const FAQ = () => {
  const [ref, inView] = useIsVisible<HTMLElement>({ margin: "-80px" });

  return (
    <section id="faq" className="bg-secondary/50 py-14 md:py-20" ref={ref}>
      <div className="container">
        <h2 className={`sa sa-ysm ${inView ? "vis" : ""} mb-12 text-center text-3xl font-bold text-foreground md:text-4xl`}>
          Najczęściej zadawane <span className="text-primary">pytania</span>
        </h2>

        <div
          className={`sa sa-ysm ${inView ? "vis" : ""} mx-auto max-w-2xl`}
          style={{ transitionDelay: inView ? "150ms" : "0ms" }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
