

## Plan: Optymalizacja wydajności strony (Performance z 84 do ~95+)

Lighthouse wykrył kilka problemów, które można naprawić w kodzie. Oto co zrobimy:

### 1. Preload i fetchpriority dla hero-collage (LCP fix)
Obraz hero-collage to Largest Contentful Paint element, ale przeglądarka odkrywa go za późno (bo jest importowany przez JS, nie widoczny w HTML).

- Dodać `<link rel="preload">` w `index.html` dla hero-collage
- Dodać `fetchPriority="high"` na `<img>` w Hero.tsx

### 2. Google Fonts - usunięcie render-blocking (390ms oszczędności)
Czcionki Google Fonts blokują renderowanie. Zmiana na `display=swap` + `preconnect` + asynchroniczne ładowanie.

- Dodać `<link rel="preconnect" href="https://fonts.googleapis.com">` i `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` w `index.html`
- Sprawdzić gdzie ładowane są fonty (prawdopodobnie w CSS) i dodać `&display=swap`

### 3. Wymiary obrazów klientów (CLS fix)
Loga klientów nie mają explicit `width` i `height`, co powoduje layout shifts.

- Dodać `width` i `height` atrybuty do `<img>` w Clients.tsx
- Dodać `width` i `height` do logo w Header.tsx i Footer.tsx

### 4. Lazy loading dla obrazów poniżej fold
Obrazy w sekcjach Process, Clients (poniżej viewport) powinny mieć `loading="lazy"`.

### Uwaga
Kompresja samego pliku hero-collage (2MB → ~200KB) wymaga przetworzenia pliku graficznego — to osobny krok wymagający nowego uploadu mniejszego pliku. Redirect z lovable.app → haftpark.com to kwestia infrastruktury, nie kodu.

### Pliki do edycji
- `index.html` — preload hero, preconnect fonts
- `src/components/Hero.tsx` — fetchPriority="high"
- `src/components/Clients.tsx` — width/height na img
- `src/components/Header.tsx` — width/height na logo
- `src/components/Footer.tsx` — width/height na logo

