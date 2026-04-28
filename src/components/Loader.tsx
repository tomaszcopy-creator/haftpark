import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "hp-loader";

const NeedleSvg = () => (
  <svg
    className="hp-loader__needle"
    width="22"
    height="72"
    viewBox="0 0 22 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Eye of needle — oval frame */}
    <ellipse cx="11" cy="9" rx="7" ry="4.5" stroke="currentColor" strokeWidth="2" />
    {/* Eye hole */}
    <ellipse cx="11" cy="9" rx="3.5" ry="2" fill="white" />
    {/* Needle shaft */}
    <rect x="10" y="13" width="2" height="50" rx="1" fill="currentColor" />
    {/* Needle point */}
    <path d="M10 63 L11 72 L12 63Z" fill="currentColor" />
  </svg>
);

const Loader = () => {
  const alreadyShown = typeof window !== "undefined" && !!sessionStorage.getItem(STORAGE_KEY);
  const [mounted, setMounted] = useState(!alreadyShown);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mounted) return;

    const fadeTimer = setTimeout(() => {
      ref.current?.classList.add("hp-loader--out");
    }, 1100);

    const unmountTimer = setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setMounted(false);
    }, 1400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div ref={ref} className="hp-loader" role="status" aria-label="Ładowanie">
      <div className="hp-loader__inner">
        <div className="hp-loader__needle-wrap">
          <NeedleSvg />
          <div className="hp-loader__thread" />
        </div>
        <p className="hp-loader__brand">Haft Park</p>
      </div>
    </div>
  );
};

export default Loader;
