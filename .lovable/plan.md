

## Plan: Połączenie formularza kontaktowego z e-mailem

### Co robimy
Gdy klient wypełni formularz kontaktowy, na Twój adres e-mail zostanie wysłana wiadomość z danymi klienta (imię, e-mail, telefon, treść wiadomości). Wykorzystamy wbudowany system e-mail Lovable — nie potrzebujesz żadnych zewnętrznych kont ani kluczy API.

### Kroki

1. **Włączenie Lovable Cloud** — potrzebne do obsługi backendu (edge functions i wysyłki e-mail)

2. **Konfiguracja domeny e-mail** — ustawienie domeny nadawcy, żeby wiadomości przychodziły z Twojej domeny (np. notify@haftpark.com)

3. **Utworzenie infrastruktury e-mail** — baza danych i kolejka do niezawodnej wysyłki

4. **Utworzenie szablonu e-mail** — szablon "nowe zapytanie z formularza" zawierający dane klienta (imię, e-mail, telefon, wiadomość), wysyłany na Twój adres

5. **Podłączenie formularza** — zmiana w `src/components/Contact.tsx`:
   - Po walidacji formularza wywołanie edge function `send-transactional-email` z danymi klienta
   - E-mail trafi na Twój adres z pełnymi danymi zapytania
   - Dodanie obsługi błędów (jeśli wysyłka się nie powiedzie, użytkownik zobaczy komunikat)

6. **Strona unsubscribe** — wymagana przez system, zostanie dodana automatycznie

### Szczegóły techniczne
- Edge function: `send-transactional-email` (jedna uniwersalna funkcja)
- Szablon React Email w `supabase/functions/_shared/transactional-email-templates/`
- Adres odbiorcy (Twój e-mail) zostanie ustawiony w szablonie jako stały
- Formularz będzie wysyłał dane przez `supabase.functions.invoke()`

### Co będziesz musiał zrobić
- Podać swój adres e-mail, na który mają trafiać wiadomości
- Skonfigurować domenę e-mail (pojawi się okno konfiguracji)

