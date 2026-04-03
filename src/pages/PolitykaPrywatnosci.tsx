import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCanonical } from "@/hooks/useCanonical";

const PolitykaPrywatnosci = () => {
  useCanonical("/polityka-prywatnosci");
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-16 md:py-24">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl">Polityka Prywatności</h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-foreground/80">
          <section>
            <h2 className="text-xl font-semibold text-foreground">1. Administrator danych osobowych</h2>
            <p>
              Administratorem danych osobowych jest firma Haft Park z siedzibą przy ul. Parkowej 36,
              42-300 Myszków. Kontakt: telefon +48 510 751 008.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">2. Zakres zbieranych danych</h2>
            <p>
              Zbieramy dane osobowe podane dobrowolnie przez użytkowników za pośrednictwem formularza
              kontaktowego: imię i nazwisko, adres e-mail, numer telefonu oraz treść wiadomości.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">3. Cel przetwarzania danych</h2>
            <p>Dane osobowe przetwarzane są w celu:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Odpowiedzi na zapytania przesłane przez formularz kontaktowy</li>
              <li>Realizacji zamówień na usługi haftu komputerowego</li>
              <li>Kontaktu telefonicznego lub mailowego w sprawie zamówienia</li>
              <li>Wystawiania dokumentów księgowych</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">4. Podstawa prawna przetwarzania</h2>
            <p>
              Przetwarzanie danych odbywa się na podstawie art. 6 ust. 1 lit. a) RODO (zgoda osoby),
              art. 6 ust. 1 lit. b) RODO (wykonanie umowy) oraz art. 6 ust. 1 lit. f) RODO
              (uzasadniony interes administratora).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">5. Okres przechowywania danych</h2>
            <p>
              Dane osobowe przechowywane są przez okres niezbędny do realizacji celów, dla których
              zostały zebrane, nie dłużej niż przez okres wymagany przepisami prawa (w przypadku
              dokumentów księgowych — 5 lat).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Prawa użytkownika</h2>
            <p>Użytkownik ma prawo do:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Dostępu do swoich danych osobowych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych („prawo do bycia zapomnianym")</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Wniesienia sprzeciwu wobec przetwarzania</li>
              <li>Cofnięcia zgody w dowolnym momencie</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">7. Pliki cookies</h2>
            <p>
              Strona internetowa może wykorzystywać pliki cookies w celu zapewnienia prawidłowego
              działania serwisu oraz analizy ruchu na stronie. Użytkownik może w każdej chwili
              zmienić ustawienia dotyczące plików cookies w swojej przeglądarce internetowej.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">8. Kontakt</h2>
            <p>
              W sprawach dotyczących ochrony danych osobowych prosimy o kontakt telefoniczny:
              +48 510 751 008 lub osobisty pod adresem: ul. Parkowa 36, 42-300 Myszków.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PolitykaPrywatnosci;
