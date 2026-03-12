

## Plan: Galeria realizacji z 10 nowymi zdjęciami WebP

### Pliki do skopiowania
Skopiowanie 10 zdjęć do `src/assets/realizacje/`:
- Ewcia.webp, Kosa_motocykle.webp, Buszu.webp, DSF0037.webp, DSF0038.webp, DSF0034-2.webp, Joker-2.webp, Helenówka-2.webp, IMG_8473.webp, IMG_6381.webp

### Zmiany w `src/pages/Realizacje.tsx`
- Import wszystkich 10 zdjęć z `@/assets/realizacje/`
- Tablica `gallery` z danymi: src, alt (opis haftu)
- Responsywny układ masonry (`columns-1 sm:columns-2 lg:columns-3 xl:columns-4`) z `break-inside-avoid`
- Każde zdjęcie z animacją wejścia (Framer Motion `fade-in` + `y` offset, staggered)
- Lightbox: kliknięcie otwiera pełnoekranowy overlay z `AnimatePresence`, nawigacja strzałkami lewo/prawo, zamknięcie przez X lub kliknięcie tła
- Hover: delikatny scale + overlay z ikoną lupy

### Szczegóły techniczne
- Framer Motion do animacji galerii i lightboxa (już zainstalowany)
- Ikony `X`, `ChevronLeft`, `ChevronRight`, `ZoomIn` z lucide-react
- `object-cover` + `rounded-lg` dla miniatur
- Nawigacja klawiaturą w lightboxie (Escape, strzałki)

