import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "hp-loader";

const HoopSvg = () => (
  <svg
    className="hp-loader__hoop"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle className="hp-loader__hoop-track" cx="50" cy="50" r="40" />
    <circle className="hp-loader__hoop-ring" cx="50" cy="50" r="40" />
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
    }, 1200);

    const unmountTimer = setTimeout(() => {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setMounted(false);
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div ref={ref} className="hp-loader" role="status" aria-label="Ładowanie">
      <div className="hp-loader__inner">
        <div className="hp-loader__hoop-wrap">
          <HoopSvg />
          <div className="hp-loader__hoop-center">
            <p className="hp-loader__brand">Haft Park</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
