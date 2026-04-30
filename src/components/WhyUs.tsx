import { useRef } from "react";
import { Gem, Package, Monitor, HeadphonesIcon } from "lucide-react";
import { useIsVisible } from "@/hooks/useIsVisible";

const features = [
  {
    icon: Gem,
    title: "Nici najwyższej jakości",
    desc: "Korzystamy wyłącznie z nici Madeira i Ariadna — trwałe kolory i perfekcyjne wykończenie.",
  },
  {
    icon: Package,
    title: "Już od 1 sztuki",
    desc: "Realizujemy zamówienia od pojedynczych sztuk po duże serie hurtowe — bez minimalnego progu. Ceny ustalamy indywidualnie po bezpłatnej wycenie.",
  },
  {
    icon: Monitor,
    title: "Wizualizacja cyfrowa",
    desc: "Przed produkcją otrzymujesz podgląd — akceptujesz i masz pewność efektu.",
  },
  {
    icon: HeadphonesIcon,
    title: "Bezpłatna konsultacja",
    desc: "Doradzamy w doborze techniki, materiału i kolorów — bez zobowiązań.",
  },
];

const WhyUs = () => {
  const [ref, inView] = useIsVisible<HTMLElement>({ margin: "-80px" });

  return (
    <section className="py-14 md:py-20" ref={ref}>
      <div className="container">
        <h2 className={`sa sa-ysm ${inView ? "vis" : ""} mb-16 text-center text-3xl font-bold text-foreground md:text-4xl`}>
          Dlaczego <span className="text-primary">my</span>?
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`sa sa-y ${inView ? "vis" : ""} flex gap-4`}
              style={{ transitionDelay: inView ? `${i * 100}ms` : "0ms" }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
