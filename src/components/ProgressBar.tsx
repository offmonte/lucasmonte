import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const h = el.scrollHeight - el.clientHeight;
      const v = h > 0 ? el.scrollTop / h : 0;
      setP(v);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1 bg-black/10 dark:bg-white/10">
      <div
        className="h-full origin-left bg-foreground transition-transform"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}
