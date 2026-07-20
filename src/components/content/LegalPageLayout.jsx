import { Link } from "react-router-dom";
import { COMPANY } from "./legal.jsx";
import LegalSectionList from "./LegalSectionList.jsx";
import { LegalBackButton, LegalCloseButton } from "./LegalPageControls.jsx";

const LEGAL_NAV = [
  { label: "Terms", to: "/terms" },
  { label: "Privacy", to: "/privacy-policy" },
  { label: "Refund", to: "/refund-policy" },
  { label: "Service Delivery", to: "/service-delivery-policy" },
];

export default function LegalPageLayout({ label, updated, intro, sections, footnote, activePath }) {
  return (
    <section className="relative bg-paper text-ink pt-28 pb-28 sm:pt-32 sm:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#F6761B]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-coral/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-honey/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8">
        {/* Sticky header: controls + legal tabs (won't overlap each other) */}
        <div className="sticky top-[4.5rem] sm:top-24 z-40 mb-8 rounded-2xl border border-ink/10 bg-white/95 backdrop-blur-xl shadow-lg overflow-hidden">
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-ink/10">
            <LegalBackButton />
            <p className="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-ink/40">
              Legal documents
            </p>
            <LegalCloseButton />
          </div>

          <div className="flex flex-wrap gap-2 p-3 sm:p-4 bg-white/80">
            {LEGAL_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-mono text-[11px] uppercase tracking-wider px-3.5 py-2 rounded-full border transition-all duration-300 ${
                  activePath === item.to
                    ? "bg-[#F6761B] text-white border-[#F6761B] shadow-md shadow-[#F6761B]/25"
                    : "border-ink/15 text-ink/50 bg-white hover:border-[#F6761B]/40 hover:text-[#F6761B] hover:bg-[#FFF2E9]/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-ink/10 bg-gradient-to-br from-white/95 via-white/80 to-[#FFF8F2] backdrop-blur-xl p-6 sm:p-9 mb-10 shadow-lg overflow-hidden relative">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#F6761B]/10 blur-3xl rounded-full pointer-events-none" />

          <div className="relative flex items-start gap-4 mb-4">
            <span className="shrink-0 w-12 h-12 rounded-2xl bg-[#FFF2E9] border border-[#F6761B]/20 flex items-center justify-center text-[#F6761B] font-display text-lg">
              §
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#F6761B] mb-2">
                Legal & Compliance
              </p>
              <h1 className="font-display text-4xl sm:text-5xl leading-tight">{label}</h1>
            </div>
          </div>

          <p className="font-mono text-[11px] text-ink/40 mb-4">{updated}</p>

          {intro && (
            <p className="font-body text-sm sm:text-base text-ink/65 leading-relaxed mb-6 rounded-2xl bg-white/70 border border-ink/5 p-4 sm:p-5">
              {intro}
            </p>
          )}

          <div className="grid sm:grid-cols-2 gap-3 text-xs font-body text-ink/55 rounded-2xl bg-[#FFF2E9]/30 border border-[#F6761B]/10 p-4 sm:p-5">
            <p>
              <span className="font-semibold text-ink/80 block mb-0.5">{COMPANY.name}</span>
              Operated by Brift Technologies
            </p>
            <p>CIN: {COMPANY.cin}</p>
            <p>GSTIN: {COMPANY.gstin}</p>
            <p>
              <a href={`mailto:${COMPANY.email}`} className="text-[#F6761B] hover:underline font-medium">
                {COMPANY.email}
              </a>
            </p>
          </div>
        </div>

        <LegalSectionList sections={sections} />

        {footnote && (
          <div className="mt-12 pt-8 border-t border-ink/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="font-mono text-[11px] text-ink/40">{footnote}</p>
            <LegalBackButton className="self-start sm:self-auto" />
          </div>
        )}
      </div>
    </section>
  );
}
