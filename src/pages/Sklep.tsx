import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import bluzaClassic from "@/assets/bluza-classic.png";
import bluzaBoxy from "@/assets/bluza-boxy.png";
import bluzaBaggy from "@/assets/bluza-baggy.png";

const products = [
  {
    name: "Bluza Classic",
    image: bluzaClassic,
    price: "120 zł",
    description: "Ze sznurkami i kieszenią",
  },
  {
    name: "Bluza Boxy",
    image: bluzaBoxy,
    price: "150 zł",
    description: "Bez sznurków i kieszeni",
  },
  {
    name: "Bluza Baggy",
    image: bluzaBaggy,
    price: "160 zł",
    description: "Ze sznurkami i kieszenią",
  },
];

const specs = [
  "280g/m2",
  "90% bawełna 10% poliester",
  "Polskie materiały",
  "Wyprodukowane w Polsce",
];

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
            Bluzy dostępne w różnych kolorach i rozmiarach
          </p>

          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.name} className="overflow-hidden border-border">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-foreground">{product.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
                  <p className="mt-3 text-xl font-bold text-primary">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-lg rounded-lg border border-border bg-card p-8 text-center">
            <h2 className="mb-4 text-xl font-bold text-foreground">Specyfikacja bluz</h2>
            <ul className="space-y-2 text-muted-foreground">
              {specs.map((spec) => (
                <li key={spec}>• {spec}</li>
              ))}
            </ul>
            <div className="mt-6 border-t border-border pt-6">
              <p className="mb-2 text-sm text-muted-foreground">Zamów teraz — skontaktuj się z nami</p>
              <a
                href="tel:+48510751008"
                className="text-lg font-semibold text-primary transition-colors hover:text-primary/80"
              >
                +48 510 751 008
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sklep;
