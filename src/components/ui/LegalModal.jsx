import { useEffect } from "react";
import { LEGAL_CONTENT } from "../../components/content/legal";

export default function LegalModal({ contentKey, onClose }) {
  const data = contentKey ? LEGAL_CONTENT[contentKey] : null;
  console.log("contentKey:", contentKey);
console.log("LEGAL_CONTENT:", LEGAL_CONTENT);
console.log("data:", data);

  useEffect(() => {
    if (!data) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center bg-ink/80 backdrop-blur-sm px-4 py-10 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-paper text-ink rounded-lg max-w-2xl w-full p-7 sm:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-ink/40 hover:text-ink transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M5 5L17 17M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <p className="font-mono text-xs uppercase tracking-widest text-coral mb-3">Legal</p>
        <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-2">{data.label}</h2>
        <p className="font-mono text-[11px] text-ink/40 mb-8">{data.updated}</p>

        <div className="space-y-8 max-h-[50vh] overflow-y-auto pr-2">
          {data.sections.map((s) => (
            <div key={s.title} className="border-t border-ink/10 pt-5">
              <h3 className="font-display text-lg mb-2">{s.title}</h3>
              <p className="font-body text-sm text-ink/60 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        {data.footnote && (
          <p className="font-mono text-[11px] text-ink/40 mt-8">{data.footnote}</p>
        )}
      </div>
    </div>
  );
}