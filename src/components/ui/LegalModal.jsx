import { useEffect } from "react";
import { LEGAL_CONTENT, COMPANY } from "../../components/content/legal";
import LegalSectionList from "../../components/content/LegalSectionList.jsx";

export default function LegalModal({ contentKey, onClose }) {
  const data = contentKey ? LEGAL_CONTENT[contentKey] : null;

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
        className="relative bg-paper text-ink rounded-2xl max-w-2xl w-full p-7 sm:p-10 shadow-2xl border border-ink/10"
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

        <p className="font-mono text-xs uppercase tracking-widest text-coral mb-3">
          Legal & Compliance
        </p>
        <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-2">{data.label}</h2>
        <p className="font-mono text-[11px] text-ink/40 mb-4">{data.updated}</p>
        {data.intro && (
          <p className="font-body text-sm text-ink/60 leading-relaxed mb-4">{data.intro}</p>
        )}
        <p className="font-mono text-[10px] text-ink/40 mb-6">
          {COMPANY.name} · {COMPANY.email}
        </p>

        <div className="max-h-[50vh] overflow-y-auto pr-2">
          <LegalSectionList sections={data.sections} />
        </div>

        {data.footnote && (
          <p className="font-mono text-[11px] text-ink/40 mt-8 pt-6 border-t border-ink/10">
            {data.footnote}
          </p>
        )}
      </div>
    </div>
  );
}
