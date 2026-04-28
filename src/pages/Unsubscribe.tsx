import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useSeoMeta } from "@/hooks/useSeoMeta";

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  useSeoMeta({ title: "Wypisanie z listy | Haft Park", description: "", path: "/unsubscribe", noindex: true });
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    fetch(`${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${token}`, {
      headers: { apikey: anonKey },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.valid === false && data.reason === "already_unsubscribed") setStatus("already");
        else if (data.valid) setStatus("valid");
        else setStatus("invalid");
      })
      .catch(() => setStatus("invalid"));
  }, [token]);

  const handleUnsubscribe = async () => {
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    if (error || data?.error) setStatus("error");
    else if (data?.reason === "already_unsubscribed") setStatus("already");
    else setStatus("success");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-lg border border-border bg-card p-8 text-center">
        {status === "loading" && <p className="text-muted-foreground">Ładowanie…</p>}
        {status === "valid" && (
          <>
            <h1 className="mb-4 text-xl font-bold text-foreground">Wypisanie z listy</h1>
            <p className="mb-6 text-muted-foreground">Czy na pewno chcesz przestać otrzymywać wiadomości e-mail?</p>
            <Button onClick={handleUnsubscribe}>Potwierdź wypisanie</Button>
          </>
        )}
        {status === "success" && (
          <>
            <h1 className="mb-2 text-xl font-bold text-primary">Gotowe!</h1>
            <p className="text-muted-foreground">Zostałeś wypisany z listy mailingowej.</p>
          </>
        )}
        {status === "already" && (
          <>
            <h1 className="mb-2 text-xl font-bold text-foreground">Już wypisano</h1>
            <p className="text-muted-foreground">Ten adres e-mail został już wcześniej wypisany.</p>
          </>
        )}
        {status === "invalid" && (
          <>
            <h1 className="mb-2 text-xl font-bold text-destructive">Nieprawidłowy link</h1>
            <p className="text-muted-foreground">Link jest nieprawidłowy lub wygasł.</p>
          </>
        )}
        {status === "error" && (
          <>
            <h1 className="mb-2 text-xl font-bold text-destructive">Błąd</h1>
            <p className="text-muted-foreground">Wystąpił błąd. Spróbuj ponownie później.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
