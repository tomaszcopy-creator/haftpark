import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Podaj imię").max(100),
  email: z.string().trim().email("Podaj poprawny adres e-mail").max(255),
  phone: z.string().trim().min(1, "Podaj numer telefonu").max(20),
  message: z.string().trim().min(1, "Wpisz wiadomość").max(2000),
});

type FormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { toast } = useToast();

  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    try {
      const id = crypto.randomUUID();

      // 1. Powiadomienie do właściciela (haftpark@onet.pl — ustawione w szablonie)
      const { error } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-form-notification",
          recipientEmail: result.data.email,
          idempotencyKey: `contact-notify-${id}`,
          templateData: {
            name: result.data.name,
            email: result.data.email,
            phone: result.data.phone,
            message: result.data.message,
          },
        },
      });

      if (error) throw error;

      // 2. Potwierdzenie do klienta
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "contact-form-confirmation",
          recipientEmail: result.data.email,
          idempotencyKey: `contact-confirm-${id}`,
          templateData: { name: result.data.name },
        },
      });
      setSubmitted(true);
      toast({ title: "Wiadomość wysłana!", description: "Skontaktujemy się z Tobą wkrótce." });
    } catch {
      toast({
        title: "Błąd wysyłania",
        description: "Nie udało się wysłać wiadomości. Spróbuj ponownie lub zadzwoń.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl"
        >
          Skontaktuj się <span className="text-primary">z nami</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-14 max-w-md text-center text-muted-foreground"
        >
          Bezpłatna konsultacja — napisz lub zadzwoń, a dobierzemy najlepsze rozwiązanie
        </motion.p>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-lg border border-border bg-card p-10 text-center">
                <div>
                  <p className="mb-2 text-2xl font-bold text-primary">Dziękujemy!</p>
                  <p className="text-muted-foreground">
                    Twoja wiadomość została wysłana. Odezwiemy się wkrótce.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Imię i nazwisko"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                  {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Adres e-mail"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Numer telefonu"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone}</p>}
                </div>
                <div>
                  <Textarea
                    placeholder="Twoja wiadomość — opisz czego potrzebujesz"
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                  />
                  {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={sending}>
                  {sending ? "Wysyłanie…" : "Wyślij wiadomość"}
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Odpowiadamy w ciągu 24h · Nie wysyłamy spamu
                </p>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-base">Adres</h3>
                <p className="text-muted-foreground">
                  ul. Parkowa 36
                  <br />
                  42-300 Myszków
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-base">Telefon</h3>
                <a
                  href="tel:+48510751008"
                  className="text-primary transition-colors hover:text-primary/80"
                >
                  +48 510 751 008
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-base">Godziny otwarcia</h3>
                <p className="text-muted-foreground">
                  Poniedziałek – Piątek: 08:00 – 20:00
                  <br />
                  Sobota – Niedziela: zamknięte
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
