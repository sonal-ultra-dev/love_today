import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LEGAL_CONTENT, COMPANY } from "../../components/content/legal";
import LegalSectionList from "../../components/content/LegalSectionList.jsx";
import { LegalBackButton, LegalCloseButton } from "../content/LegalPageControls.jsx";

const MODAL_KEYS = {
  privacy: "/privacy-policy",
  terms: "/terms",
  refund: "/refund-policy",
  serviceDelivery: "/service-delivery-policy",
};

export default function LegalModal({ contentKey, onClose }) {
  const data = contentKey ? LEGAL_CONTENT[contentKey] : null;
  const fullPageLink = contentKey ? MODAL_KEYS[contentKey] : null;

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
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center bg-ink/80 backdrop-blur-md px-4 py-8 sm:py-10 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-paper text-ink rounded-[28px] max-w-2xl w-full shadow-2xl border border-ink/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-ink/10 bg-white/95 backdrop-blur-xl px-5 py-4 sm:px-7">
          <LegalBackButton onClick={onClose} />
          {fullPageLink && (
            <Link
              to={fullPageLink}
              onClick={onClose}
              className="hidden sm:inline-flex font-mono text-[10px] uppercase tracking-widest text-[#F6761B] hover:underline"
            >
              Open full page
            </Link>
          )}
          <LegalCloseButton onClick={onClose} />
        </div>

        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          <div className="flex items-start gap-3 mb-4">
            <span className="shrink-0 w-10 h-10 rounded-xl bg-[#FFF2E9] text-[#F6761B] font-display flex items-center justify-center">
              §
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-coral mb-1">
                Legal & Compliance
              </p>
              <h2 className="font-display text-2xl sm:text-3xl leading-tight">{data.label}</h2>
            </div>
          </div>

          <p className="font-mono text-[11px] text-ink/40 mb-3">{data.updated}</p>
          {data.intro && (
            <p className="font-body text-sm text-ink/65 leading-relaxed mb-4 rounded-xl bg-white/80 border border-ink/5 p-4">
              {data.intro}
            </p>
          )}
          <p className="font-mono text-[10px] text-ink/40 mb-6">
            {COMPANY.name} · {COMPANY.email}
          </p>

          <LegalSectionList sections={data.sections} />

          {data.footnote && (
            <p className="font-mono text-[11px] text-ink/40 mt-8 pt-6 border-t border-ink/10">
              {data.footnote}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
