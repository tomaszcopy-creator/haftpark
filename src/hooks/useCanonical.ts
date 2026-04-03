import { useEffect } from "react";

const BASE = "https://www.haftpark.com";

export function useCanonical(path: string) {
  useEffect(() => {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `${BASE}${path}`;
    return () => {
      link?.remove();
    };
  }, [path]);
}
