import { useEffect } from "react";

const STORAGE_KEY = "hp-loader";

const Loader = () => {
  useEffect(() => {
    const el = document.getElementById("app-loader");
    if (!el) return;
    const alreadyShown = !!sessionStorage.getItem(STORAGE_KEY);
    el.style.opacity = "0";
    const t = setTimeout(() => {
      el.remove();
      sessionStorage.setItem(STORAGE_KEY, "1");
    }, alreadyShown ? 0 : 250);
    return () => clearTimeout(t);
  }, []);
  return null;
};

export default Loader;
