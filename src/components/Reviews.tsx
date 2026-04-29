const REVIEWS = [
  {
    author: "Natalux",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjXLTb3fDoUUTB9n8FuAcATzQPfA-Xd9uI_UVeW",
    rating: 5,
    text: "Współpracujemy już wiele lat i szczerze polecam! Bardzo profesjonalna obsługa, na czas, perfekcyjnie wykonane hafty, bardzo konkurencyjne ceny, skomplikowane zlecenia nie stanowią żadnego problemu!",
    time: "tydzień temu",
  },
  {
    author: "Karolina Kołkowska-Selega",
    photo: "https://lh3.googleusercontent.com/a/ACg8ocIbBPHTsL6BvciFJN2KMoEgViUB9favqBP0t-B5",
    rating: 5,
    text: "Jestem bardzo zadowolona z haftu — profesjonalne podejście do klienta, bardzo mili ludzie, szybko zrealizowane zamówienie. Polecam gorąco!",
    time: "tydzień temu",
  },
  {
    author: "Kamil Ujma",
    photo: "https://lh3.googleusercontent.com/a-/ALV-UjXSZW0D3U1fgEoqCIebqv-agcMDoO8UHw488Pk",
    rating: 5,
    text: "Świetna jakość haftu, szybko i bezproblemowo.",
    time: "tydzień temu",
  },
  {
    author: "SOJER84",
    photo: "https://lh3.googleusercontent.com/a/ACg8ocLWdcGvSsPCBway9Dol6kfpy4yN1hyWJi47UmQZ",
    rating: 5,
    text: "Serdecznie polecam firmę! Szybka realizacja zamówienia jak i dostawa.",
    time: "tydzień temu",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5" aria-label={`Ocena ${count} na 5`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="h-4 w-4 fill-[#FBBC04]" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const GoogleLogo = () => (
  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const Reviews = () => (
  <section className="bg-background py-20 md:py-28">
    <div className="container mx-auto max-w-5xl px-4">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Opinie klientów</p>
        <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
          Co mówią nasi <span className="text-primary">klienci?</span>
        </h2>
        <a
          href="https://www.google.com/maps/place/?q=place_id:ChIJu4R0E9E7F0cRoe-VxQCGb0g"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition hover:border-primary hover:text-foreground"
          aria-label="Zobacz profil Haft Park na Google Maps"
        >
          <GoogleLogo />
          <Stars count={5} />
          <span className="font-semibold text-foreground">5,0</span>
          <span>· 4 opinie w Google</span>
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {REVIEWS.map((rev) => (
          <div
            key={rev.author}
            className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <Stars count={rev.rating} />
            <p className="flex-1 text-base leading-relaxed text-foreground">
              &ldquo;{rev.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <img
                src={rev.photo}
                alt={rev.author}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold text-foreground">{rev.author}</p>
                <p className="text-xs text-muted-foreground">{rev.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.google.com/maps/place/?q=place_id:ChIJu4R0E9E7F0cRoe-VxQCGb0g"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          Zobacz wszystkie opinie na Google →
        </a>
      </div>
    </div>
  </section>
);

export default Reviews;
