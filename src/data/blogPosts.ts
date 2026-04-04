export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  content: BlogSection[];
}

export interface BlogSection {
  type: "p" | "h2" | "h3" | "ul";
  text?: string;
  items?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "haft-komputerowy-vs-nadruk",
    title: "Haft komputerowy vs nadruk — co wybrać dla firmy?",
    metaTitle: "Haft komputerowy vs nadruk — porównanie metod znakowania | Haft Park",
    metaDescription: "Porównujemy haft komputerowy i nadruk na odzieży firmowej. Dowiedz się, która metoda jest trwalsza, bardziej prestiżowa i lepsza dla Twojej marki.",
    excerpt: "Porównujemy dwie najpopularniejsze metody znakowania odzieży firmowej — haft komputerowy i nadruk. Która jest trwalsza i bardziej opłacalna?",
    date: "2025-03-15",
    content: [
      { type: "p", text: "Wybór metody znakowania odzieży firmowej to jedna z kluczowych decyzji, która wpływa na wizerunek marki. Dwie najpopularniejsze opcje to haft komputerowy i nadruk (sitodruk, DTG, termotransfer). Każda z nich ma swoje zalety — ale dla większości firm haft okazuje się lepszym wyborem." },
      { type: "h2", text: "Trwałość — haft wygrywa bezapelacyjnie" },
      { type: "p", text: "Haft komputerowy to nici wplecione bezpośrednio w tkaninę. Nie blakną pod wpływem UV, nie łuszczą się po praniu, nie odchodzą od materiału. Dobry haft wytrzymuje setki cykli prania — nawet przemysłowego." },
      { type: "p", text: "Nadruk, zwłaszcza tańsze metody jak termotransfer, zaczyna tracić jakość już po 20–30 praniach. Sitodruk jest trwalszy, ale przy intensywnym użytkowaniu i tak nie dorównuje haftowi." },
      { type: "h2", text: "Prestiż i postrzeganie marki" },
      { type: "p", text: "Haft dodaje odzieży trójwymiarową fakturę, która od razu kojarzy się z jakością i profesjonalizmem. To dlatego marki premium, hotele 5-gwiazdkowe i firmy, którym zależy na wizerunku, wybierają właśnie haft." },
      { type: "h2", text: "Kiedy nadruk ma sens?" },
      { type: "ul", items: [
        "Duże, wielokolorowe grafiki (fotorealistyczne wzory)",
        "Jednorazowe eventy i akcje promocyjne",
        "Bardzo duże nakłady w niskiej cenie",
        "Materiały, na których haft jest niemożliwy (np. cienka folia)",
      ]},
      { type: "h2", text: "Podsumowanie" },
      { type: "p", text: "Jeśli zależy Ci na trwałości, prestiżu i profesjonalnym wizerunku — wybierz haft komputerowy. Jeśli potrzebujesz dużej, kolorowej grafiki na krótki czas — nadruk może być lepszym rozwiązaniem. W Haft Park pomożemy dobrać optymalną metodę do Twoich potrzeb." },
    ],
  },
  {
    slug: "jak-przygotowac-logo-do-haftu",
    title: "Jak przygotować logo do haftu komputerowego?",
    metaTitle: "Jak przygotować logo do haftu? Poradnik | Haft Park",
    metaDescription: "Dowiedz się, jak przygotować logo firmy do haftu komputerowego. Format pliku, kolory, rozmiar — praktyczny poradnik od Haft Park.",
    excerpt: "Praktyczny poradnik: jakie pliki wysłać, na co zwrócić uwagę przy kolorach i rozmiarze logo, żeby haft wyglądał idealnie.",
    date: "2025-02-20",
    content: [
      { type: "p", text: "Dobry haft zaczyna się od dobrze przygotowanego projektu. Nawet najlepsza maszyna nie odda szczegółów, jeśli logo nie jest odpowiednio przygotowane do digitalizacji. Oto kilka zasad, które pomogą Ci uzyskać idealny efekt." },
      { type: "h2", text: "Format pliku — co wysłać?" },
      { type: "p", text: "Najlepiej sprawdzają się pliki wektorowe: AI, EPS, SVG lub PDF z wektorami. Dzięki nim digitalizator (osoba przygotowująca wzór haftu) może precyzyjnie odwzorować każdy detal." },
      { type: "p", text: "Jeśli nie masz wektora — wyślij plik PNG lub JPG w jak najwyższej rozdzielczości (min. 300 DPI). Unikaj małych plików z internetu — będą niewyraźne." },
      { type: "h2", text: "Kolory — mniej znaczy lepiej" },
      { type: "p", text: "Haft komputerowy najlepiej oddaje wzory o ograniczonej palecie kolorów. 1–6 kolorów to optymalna liczba. Gradienty i cieniowania nie są możliwe w hafcie — zastąpimy je najbliższym kolorem nici." },
      { type: "h3", text: "Paleta nici Madeira i Ariadna" },
      { type: "p", text: "Korzystamy z ponad 500 kolorów nici Madeira i Ariadna. W 95% przypadków znajdziemy idealnie pasujący odcień do Twojego logo." },
      { type: "h2", text: "Rozmiar haftu" },
      { type: "p", text: "Minimalny rozmiar szczegółu w hafcie to ok. 1 mm. Bardzo drobne napisy (poniżej 5 mm wysokości) mogą być nieczytelne. Przy digitalizacji doradzamy optymalne wymiary, żeby zachować czytelność i estetykę." },
      { type: "h2", text: "Podsumowanie" },
      { type: "p", text: "Wyślij nam logo w wektorze, z ograniczoną paletą kolorów i podaj pożądany rozmiar haftu. Resztą zajmiemy się my — przygotujemy digitalizację i wyślemy Ci wizualizację do akceptacji przed produkcją." },
    ],
  },
  {
    slug: "haft-na-czapkach-co-warto-wiedziec",
    title: "Haft na czapkach — co warto wiedzieć przed zamówieniem?",
    metaTitle: "Haft na czapkach — poradnik przed zamówieniem | Haft Park",
    metaDescription: "Wszystko, co musisz wiedzieć o hafcie na czapkach: rodzaje czapek, techniki haftu, haft 3D puff i praktyczne wskazówki od Haft Park.",
    excerpt: "Rodzaje czapek, techniki haftu, haft 3D puff — wszystko, co musisz wiedzieć przed zamówieniem haftowanych czapek dla firmy.",
    date: "2025-01-10",
    content: [
      { type: "p", text: "Haftowane czapki to jeden z najpopularniejszych gadżetów firmowych. Są praktyczne, widoczne i świetnie budują rozpoznawalność marki. Zanim jednak złożysz zamówienie, warto poznać kilka istotnych kwestii." },
      { type: "h2", text: "Rodzaje czapek do haftu" },
      { type: "ul", items: [
        "Czapki z daszkiem (baseball cap) — klasyka, idealna pod haft na froncie",
        "Czapki trucker — siatka z tyłu, haft na panelu przednim",
        "Czapki zimowe (beanie) — haft na mankiecie lub bezpośrednio na dzianinie",
        "Czapki snapback i fitted — różne profile (nisko-/wysokoprofilowe)",
      ]},
      { type: "h2", text: "Haft płaski vs haft 3D (puff)" },
      { type: "p", text: "Haft płaski to standardowa technika — nici leżą płasko na materiale. Sprawdza się przy większości logotypów i napisów." },
      { type: "p", text: "Haft 3D (puff) wykorzystuje specjalną piankę pod nicią, dzięki czemu litery i kształty są wypukłe. Efekt jest bardzo premium — idealny dla marek sportowych, streetwear i firm, które chcą się wyróżnić." },
      { type: "h2", text: "Umiejscowienie haftu na czapce" },
      { type: "ul", items: [
        "Front — główne logo, najczęściej wybierane miejsce",
        "Bok — mniejsze logo lub napis dodatkowy",
        "Tył — nad regulatorem, idealne na stronę www lub hasło",
        "Pod daszkiem — ukryty detal premium",
      ]},
      { type: "h2", text: "Ile sztuk trzeba zamówić?" },
      { type: "p", text: "W Haft Park nie mamy minimalnego nakładu zamówienia. Haftujemy nawet pojedyncze czapki — co jest idealne na próbę lub personalizowane upominki." },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
