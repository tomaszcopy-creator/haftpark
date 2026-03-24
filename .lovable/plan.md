

## Plan: Dodanie sekcji producentów hurtowych do podstrony Sklep

### Co robimy
Dodajemy nową sekcję na podstronie `/sklep`, poniżej specyfikacji bluz, informującą że Haft Park oferuje również odzież od znanych producentów hurtowych — JHK i Promostars — gotową do haftowania.

### Zmiany w pliku `src/pages/Sklep.tsx`

Dodanie nowej sekcji po bloku specyfikacji (po linii 84), zawierającej:

- Nagłówek h2: "Oferujemy również odzież od producentów hurtowych"
- Krótki opis wyjaśniający, że klient może zamówić odzież od JHK lub Promostars z haftem w jednym miejscu
- Dwa "kafelki" z nazwami producentów (JHK i Promostars) w formie stylizowanych kart tekstowych z krótkim opisem każdego
- Przycisk CTA zachęcający do kontaktu w sprawie zamówienia

Styl wizualny będzie spójny z istniejącą sekcją specyfikacji — border, bg-card, zaokrąglone rogi. Nazwy producentów będą wyróżnione jako duże, pogrubione teksty (bez logotypów — na razie tylko tekst).

### Pliki do edycji
- `src/pages/Sklep.tsx` — dodanie sekcji producentów hurtowych

