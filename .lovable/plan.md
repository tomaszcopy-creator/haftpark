

## Problem

Plik `public/favicon.ico` nadal istnieje i zawiera domyślną ikonę Lovable. Przeglądarki często preferują `/favicon.ico` z cache lub domyślnie szukają tego pliku, ignorując tag `<link rel="icon">`.

## Rozwiązanie

1. **Nadpisać `public/favicon.ico`** zawartością pliku `public/logo-haft-park.jpg` — albo lepiej, wygenerować z logo prawidłowy plik `.ico`/`.png` i zapisać jako `favicon.ico`.
2. Alternatywnie: usunąć `public/favicon.ico` i dodać drugi tag `<link>` z typem `image/x-icon` wskazujący na logo, aby przeglądarki nie wracały do starego pliku.

### Konkretne kroki
- Skopiować `logo-haft-park.jpg` jako nowy `favicon.ico` (lub wygenerować PNG favicon z logo)
- Upewnić się, że w `index.html` tag `<link rel="icon">` jest poprawny
- Po opublikowaniu może być potrzebne wyczyszczenie cache przeglądarki (Ctrl+Shift+R)

### Uwaga
Po wdrożeniu zmian, stary favicon może być jeszcze widoczny z powodu cache przeglądarki — wystarczy wyczyścić cache lub otworzyć stronę w trybie incognito.

