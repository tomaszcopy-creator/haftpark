

## Problem

Plik `Helenówka-2.webp` zawiera polski znak diakrytyczny **ó** w nazwie. Vite przy budowaniu koduje ten znak w haślu pliku, ale serwer produkcyjny (lub CDN) nie obsługuje poprawnie znaków Unicode w ścieżkach — stąd **404 Not Found**.

## Rozwiązanie

Zmienić nazwę pliku z `Helenówka-2.webp` na `Helenowka-2.webp` (bez polskich znaków) i zaktualizować import.

### Pliki do edycji

1. **Zmiana nazwy pliku**: `src/assets/realizacje/Helenówka-2.webp` → `src/assets/realizacje/Helenowka-2.webp`
2. **`src/pages/Realizacje.tsx`** — linia 14: zmiana importu z `Helenówka-2.webp` na `Helenowka-2.webp`

Żadne inne zmiany nie są potrzebne — alt text i reszta kodu pozostają bez zmian.

