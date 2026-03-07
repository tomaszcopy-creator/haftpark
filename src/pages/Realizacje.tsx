import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ImageIcon } from "lucide-react";

const Realizacje = () => {
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

          <div className="mx-auto flex max-w-lg flex-col items-center gap-6 rounded-lg border border-border bg-card p-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <ImageIcon className="h-8 w-8 text-primary" />
            </div>
            <p className="text-lg font-semibold text-foreground">Galeria w przygotowaniu</p>
            <p className="text-muted-foreground">
              Wkrótce dodamy zdjęcia naszych realizacji. Prześlij nam swoje zdjęcia, a my je tu
              umieścimy.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Realizacje;
