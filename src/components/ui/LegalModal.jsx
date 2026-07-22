import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { LEGAL_CONTENT, COMPANY } from "../../components/content/legal";
import LegalSectionList from "../../components/content/LegalSectionList.jsx";
import { LegalBackButton, LegalCloseButton } from "../content/LegalPageControls.jsx";
import LegalNavTabs, { LEGAL_NAV } from "../content/LegalNavTabs.jsx";

const MODAL_KEYS = Object.fromEntries(LEGAL_NAV.map((item) => [item.key, item.to]));

export default function LegalModal({ contentKey, onClose, onNavigate }) {
  const data = contentKey ? LEGAL_CONTENT[contentKey] : null;
  const fullPageLink = contentKey ? MODAL_KEYS[contentKey] : null;
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current?.scrollTo({ top: 0 });
  }, [contentKey]);

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
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center bg-ink/80 backdrop-blur-md px-4 sm:px-6 py-8 sm:py-10 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-paper text-ink rounded-[28px] max-w-3xl w-full shadow-2xl border border-ink/10 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header — matches full page layout */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-xl border-b border-ink/10">
          <div className="flex items-center justify-between gap-4 px-5 sm:px-7 py-4">
            <LegalBackButton onClick={onClose} />
            {fullPageLink ? (
              <Link
                to={fullPageLink}
                onClick={onClose}
                className="hidden sm:inline-flex font-mono text-[10px] uppercase tracking-widest text-[#F6761B] hover:underline px-2"
              >
                Open full page
              </Link>
            ) : (
              <p className="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-ink/40">
                Legal documents
              </p>
            )}
            <LegalCloseButton onClick={onClose} />
          </div>

          <div className="px-5 sm:px-7 py-4 sm:py-5 border-t border-ink/5 bg-white/80">
            <LegalNavTabs
              activeKey={contentKey}
              onNavigate={onNavigate}
            />
          </div>
        </div>

        {/* Scrollable content */}
        <div ref={contentRef} className="max-h-[min(70vh,720px)] overflow-y-auto px-5 sm:px-8 py-7 sm:py-9">
          <div className="flex items-start gap-4 sm:gap-5 mb-6">
            <span className="shrink-0 w-11 h-11 rounded-2xl bg-[#FFF2E9] border border-[#F6761B]/20 flex items-center justify-center text-[#F6761B] font-display">
              §
            </span>
            <div className="min-w-0 pt-0.5">
              <p className="font-mono text-xs uppercase tracking-widest text-coral mb-2 sm:mb-3">
                Legal & Compliance
              </p>
              <h2 className="font-display text-2xl sm:text-3xl leading-tight">{data.label}</h2>
            </div>
          </div>

          <p className="font-mono text-[11px] text-ink/40 mb-5 sm:mb-6">{data.updated}</p>

          {data.intro && (
            <p className="font-body text-sm sm:text-base text-ink/65 leading-relaxed mb-6 sm:mb-8 rounded-2xl bg-white/80 border border-ink/5 px-5 py-5 sm:px-6 sm:py-6">
              {data.intro}
            </p>
          )}

          <p className="font-mono text-[10px] text-ink/40 mb-7 sm:mb-8 px-1">
            {COMPANY.name} · {COMPANY.email}
          </p>

          <LegalSectionList sections={data.sections} />

          {data.footnote && (
            <p className="font-mono text-[11px] text-ink/40 mt-10 pt-7 border-t border-ink/10 leading-relaxed">
              {data.footnote}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
