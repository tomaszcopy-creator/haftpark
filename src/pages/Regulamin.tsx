import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Regulamin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-16 md:py-24">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">Regulamin</h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-foreground/80">
          <section>
            <h2 className="text-xl font-semibold text-foreground">§1 Postanowienia ogólne</h2>
            <p>
              Niniejszy regulamin określa zasady korzystania ze strony internetowej haftpark.com
              oraz zasady świadczenia usług haftu komputerowego przez firmę Haft Park z siedzibą
              przy ul. Parkowej 36, 42-300 Myszków (dalej: „Usługodawca").
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">§2 Definicje</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Klient</strong> — osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z usług Usługodawcy.</li>
              <li><strong>Usługa</strong> — haft komputerowy wykonywany na zlecenie Klienta.</li>
              <li><strong>Zamówienie</strong> — zlecenie wykonania usługi haftu złożone przez Klienta.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">§3 Zakres usług</h2>
            <p>
              Usługodawca świadczy usługi haftu komputerowego, w tym digitalizację projektów,
              przygotowanie wizualizacji oraz realizację haftu na odzieży i tekstyliach.
              Minimalne zamówienie wynosi 6 sztuk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">§4 Składanie zamówień</h2>
            <p>
              Zamówienia przyjmowane są telefonicznie pod numerem +48 510 751 008, przez formularz
              kontaktowy na stronie lub drogą mailową. Po złożeniu zamówienia Klient otrzymuje
              wizualizację haftu do akceptacji przed rozpoczęciem produkcji.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">§5 Ceny i płatności</h2>
            <p>
              Ceny usług ustalane są indywidualnie na podstawie złożoności projektu, liczby sztuk
              oraz rodzaju materiału. Wycena jest bezpłatna i niezobowiązująca. Płatność
              realizowana jest przelewem bankowym lub gotówką przy odbiorze.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">§6 Realizacja zamówień</h2>
            <p>
              Termin realizacji ustalany jest indywidualnie i zależy od wielkości zamówienia.
              Standardowy czas realizacji wynosi od 3 do 10 dni roboczych od momentu akceptacji
              wizualizacji przez Klienta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">§7 Reklamacje</h2>
            <p>
              Reklamacje należy zgłaszać w ciągu 14 dni od daty odbioru zamówienia. Reklamacja
              powinna zawierać opis wady oraz dokumentację fotograficzną. Usługodawca rozpatruje
              reklamację w terminie 14 dni roboczych.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">§8 Postanowienia końcowe</h2>
            <p>
              Usługodawca zastrzega sobie prawo do zmiany niniejszego regulaminu. Zmiany wchodzą
              w życie z dniem ich opublikowania na stronie internetowej. W sprawach nieuregulowanych
              niniejszym regulaminem zastosowanie mają przepisy prawa polskiego.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Regulamin;
