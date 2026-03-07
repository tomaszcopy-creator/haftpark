import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingBag } from "lucide-react";

const Sklep = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-20 md:py-28">
        <div className="container">
          <h1 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            Nasz <span className="text-primary">Sklep</span>
          </h1>
          <p className="mx-auto mb-14 max-w-md text-center text-muted-foreground">
            Produkty i usługi hafciarskie — wkrótce dostępne
          </p>

          <div className="mx-auto flex max-w-lg flex-col items-center gap-6 rounded-lg border border-border bg-card p-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <ShoppingBag className="h-8 w-8 text-primary" />
            </div>
            <p className="text-lg font-semibold text-foreground">Sklep w przygotowaniu</p>
            <p className="text-muted-foreground">
              Pracujemy nad ofertą — wkrótce znajdziesz tu nasze produkty i usługi. Skontaktuj się
              z nami, jeśli potrzebujesz wyceny już teraz.
            </p>
            <a
              href="tel:+48510751008"
              className="font-semibold text-primary transition-colors hover:text-primary/80"
            >
              Zadzwoń: +48 510 751 008
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sklep;
