import { Link } from "react-router-dom";
import { COMPANY } from "./legal.jsx";
import LegalSectionList from "./LegalSectionList.jsx";

const LEGAL_NAV = [
  { label: "Terms", to: "/terms" },
  { label: "Privacy", to: "/privacy-policy" },
  { label: "Refund", to: "/refund-policy" },
  { label: "Service Delivery", to: "/service-delivery-policy" },
  { label: "Contact", to: "/contact" },
];

export default function LegalPageLayout({ label, updated, intro, sections, footnote, activePath }) {
  return (
    <section className="relative bg-paper text-ink pt-32 pb-28 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#F6761B]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-coral/10 blur-[160px] rounded-full" />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8">
        <div className="rounded-2xl border border-ink/10 bg-white/80 backdrop-blur-xl p-6 sm:p-8 mb-10 shadow-sm">
          <div className="flex flex-wrap gap-2 mb-5">
            {LEGAL_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full border transition-colors ${
                  activePath === item.to
                    ? "bg-[#F6761B] text-white border-[#F6761B]"
                    : "border-ink/15 text-ink/50 hover:border-[#F6761B]/40 hover:text-[#F6761B]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <p className="font-mono text-xs uppercase tracking-widest text-[#F6761B] mb-3">
            Legal & Compliance
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-3">{label}</h1>
          <p className="font-mono text-[11px] text-ink/40 mb-4">{updated}</p>
          {intro && (
            <p className="font-body text-sm text-ink/65 leading-relaxed">{intro}</p>
          )}

          <div className="mt-6 pt-6 border-t border-ink/10 grid sm:grid-cols-2 gap-3 text-xs font-body text-ink/55">
            <p>
              <span className="font-semibold text-ink/80">{COMPANY.name}</span>
            </p>
            <p>CIN: {COMPANY.cin}</p>
            <p>GSTIN: {COMPANY.gstin}</p>
            <p>
              <a href={`mailto:${COMPANY.email}`} className="text-[#F6761B] hover:underline">
                {COMPANY.email}
              </a>
            </p>
          </div>
        </div>

        <LegalSectionList sections={sections} />

        {footnote && (
          <p className="font-mono text-[11px] text-ink/40 mt-12 pt-8 border-t border-ink/10">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
