import { useEffect } from "react";

const BASE = "https://www.haftpark.com";
const DEFAULT_OG_IMAGE = "https://www.haftpark.com/hero-collage.webp";

interface SeoMetaOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Gdzie zamówić haft komputerowy w Myszkowie?",
      "acceptedAnswer": { "@type": "Answer", "text": "Haft Park, ul. Parkowa 36, 42-300 Myszków, tel. +48 510 751 008. Czynni poniedziałek–piątek 08:00–20:00. Strona: haftpark.com." }
    },
    {
      "@type": "Question",
      "name": "Gdzie zamówić haft komputerowy na Śląsku?",
      "acceptedAnswer": { "@type": "Answer", "text": "Haft Park w Myszkowie obsługuje cały Śląsk — Katowice, Sosnowiec, Częstochowę, Zawiercie, Dąbrowę Górniczą i okolice. Realizujemy wysyłkę kurierską w całej Polsce." }
    },
    {
      "@type": "Question",
      "name": "Ile kosztuje haft komputerowy?",
      "acceptedAnswer": { "@type": "Answer", "text": "Cena zależy od rozmiaru wzoru, liczby ściegów i ilości sztuk. Małe zlecenia od kilkudziesięciu złotych za sztukę. Bezpłatna wycena: haftpark.com lub tel. +48 510 751 008." }
    },
    {
      "@type": "Question",
      "name": "Jakie jest minimalne zamówienie w Haft Park?",
      "acceptedAnswer": { "@type": "Answer", "text": "Brak minimalnego progu zamówienia — realizujemy od 1 sztuki. Obsługujemy zarówno klientów indywidualnych, jak i firmy zamawiające duże serie." }
    },
    {
      "@type": "Question",
      "name": "Jak długo trwa realizacja haftu komputerowego?",
      "acceptedAnswer": { "@type": "Answer", "text": "Standardowo 5–10 dni roboczych od akceptacji wizualizacji. Dostępny tryb ekspresowy przy pilnych zamówieniach." }
    },
    {
      "@type": "Question",
      "name": "Na jakich materiałach można robić haft komputerowy?",
      "acceptedAnswer": { "@type": "Answer", "text": "Haftujemy na bawełnie, poliester, polarze, softshell, dżinsie, nylonie i innych tekstyliach. Koszulki, bluzy, kurtki, czapki, odzież robocza." }
    },
    {
      "@type": "Question",
      "name": "Czy Haft Park haftuje logo firmy?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tak, haft logo to specjalność firmy. Przyjmujemy pliki wektorowe (AI, EPS, PDF) i rastrowe. Digitalizacja wzoru wliczona w cenę zamówienia." }
    },
    {
      "@type": "Question",
      "name": "Czy można zobaczyć podgląd haftu przed produkcją?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tak — każde zamówienie poprzedza bezpłatna wizualizacja cyfrowa. Produkcja rusza dopiero po zatwierdzeniu przez klienta." }
    },
    {
      "@type": "Question",
      "name": "Czy Haft Park wysyła kurierem?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tak, wysyłka kurierska na terenie całej Polski. Możliwy też odbiór osobisty w Myszkowie, ul. Parkowa 36." }
    },
    {
      "@type": "Question",
      "name": "Co to jest haft 3D (puff embroidery)?",
      "acceptedAnswer": { "@type": "Answer", "text": "Haft 3D (puff embroidery) to technika, w której wzór jest wypukły — pod ściegami podkładana jest pianka EVA. Logo wychodzi z powierzchni materiału. Popularny na czapkach z daszkiem." }
    }
  ]
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.haftpark.com/#business",
  "name": "Haft Park",
  "url": "https://www.haftpark.com",
  "description": "Profesjonalny haft komputerowy dla firm. Haft na odzieży, czapkach i odzieży roboczej. 8 lat doświadczenia. Myszków i cała Polska.",
  "telephone": "+48510751008",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.haftpark.com/logo-haft-park.webp",
    "width": 300,
    "height": 100,
  },
  "image": "https://www.haftpark.com/hero-collage.webp",
  "priceRange": "$$",
  "areaServed": ["Myszków", "Zawiercie", "Częstochowa", "województwo śląskie", "Polska"],
  "sameAs": ["https://www.facebook.com/haftpark"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ul. Parkowa 36",
    "addressLocality": "Myszków",
    "postalCode": "42-300",
    "addressCountry": "PL",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.5609,
    "longitude": 19.3320,
  },
  "hasMap": "https://maps.google.com/?q=Haft+Park+ul.+Parkowa+36+Myszk%C3%B3w",
  "openingHours": "Mo-Fr 08:00-20:00",
};

function setOrCreateMeta(property: string, content: string, isName = false) {
  const attr = isName ? "name" : "property";
  let el = document.querySelector(`meta[${attr}="${property}"]`) as HTMLMetaElement;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function removeMeta(property: string, isName = false) {
  const attr = isName ? "name" : "property";
  document.querySelector(`meta[${attr}="${property}"]`)?.remove();
}

function setOrCreateJsonLd(id: string, data: object) {
  let script = document.getElementById(id) as HTMLScriptElement;
  if (!script) {
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

export function useSeoMeta({ title, description, path, ogImage, noindex }: SeoMetaOptions) {
  useEffect(() => {
    const url = `${BASE}${path}`;
    const img = ogImage || DEFAULT_OG_IMAGE;

    document.title = title;

    if (noindex) {
      setOrCreateMeta("robots", "noindex, nofollow", true);
    } else {
      removeMeta("robots", true);
    }

    setOrCreateMeta("description", description, true);
    setOrCreateMeta("og:title", title);
    setOrCreateMeta("og:description", description);
    setOrCreateMeta("og:url", url);
    setOrCreateMeta("og:type", "website");
    setOrCreateMeta("og:image", img);
    setOrCreateMeta("og:image:width", "1200");
    setOrCreateMeta("og:image:height", "630");
    setOrCreateMeta("og:locale", "pl_PL");
    setOrCreateMeta("og:site_name", "Haft Park");
    setOrCreateMeta("twitter:card", "summary_large_image");
    setOrCreateMeta("twitter:title", title);
    setOrCreateMeta("twitter:description", description);
    setOrCreateMeta("twitter:image", img);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;

    setOrCreateJsonLd("ld-local-business", localBusinessJsonLd);
    if (path === "/") setOrCreateJsonLd("ld-faq", faqPageJsonLd);

    return () => {
      document.title = "Haft Park";
      link?.remove();
      document.getElementById("ld-local-business")?.remove();
      document.getElementById("ld-faq")?.remove();
      document.getElementById("ld-service")?.remove();
      document.getElementById("ld-article")?.remove();
      document.getElementById("ld-breadcrumb")?.remove();
    };
  }, [title, description, path, ogImage, noindex]);
}

export function useServiceJsonLd(serviceType: string) {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": serviceType,
      "provider": {
        "@type": "LocalBusiness",
        "@id": "https://www.haftpark.com/#business",
        "name": "Haft Park",
        "url": "https://www.haftpark.com",
      },
      "areaServed": "Polska",
    };
    setOrCreateJsonLd("ld-service", data);
    return () => { document.getElementById("ld-service")?.remove(); };
  }, [serviceType]);
}

interface ArticleJsonLdOptions {
  headline: string;
  description: string;
  datePublished: string;
  url: string;
  image?: string;
}

export function useArticleJsonLd({ headline, description, datePublished, url, image }: ArticleJsonLdOptions) {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": headline,
      "description": description,
      "datePublished": datePublished,
      "url": url,
      "image": image || DEFAULT_OG_IMAGE,
      "author": {
        "@type": "Organization",
        "@id": "https://www.haftpark.com/#business",
        "name": "Haft Park",
        "url": "https://www.haftpark.com",
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://www.haftpark.com/#business",
        "name": "Haft Park",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.haftpark.com/logo-haft-park.webp",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url,
      },
    };
    setOrCreateJsonLd("ld-article", data);
    return () => { document.getElementById("ld-article")?.remove(); };
  }, [headline, description, datePublished, url, image]);
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function useBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url,
      })),
    };
    setOrCreateJsonLd("ld-breadcrumb", data);
    return () => { document.getElementById("ld-breadcrumb")?.remove(); };
  }, [items]);
}
