import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

document.addEventListener("click", (e) => {
  const link = (e.target as HTMLElement).closest("a[href^='tel:']");
  if (link && typeof window.gtag === "function") {
    window.gtag("event", "phone_click", { event_category: "contact" });
  }
});

createRoot(document.getElementById("root")!).render(<App />);
