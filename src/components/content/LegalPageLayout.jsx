import { COMPANY } from "./legal.jsx";
import LegalSectionList from "./LegalSectionList.jsx";
import { LegalBackButton, LegalCloseButton } from "./LegalPageControls.jsx";
import LegalNavTabs from "./LegalNavTabs.jsx";

export default function LegalPageLayout({ label, updated, intro, sections, footnote, activePath }) {
  return (
    <section className="relative bg-paper text-ink min-h-[calc(100vh-5rem)] pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#F6761B]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-coral/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-ink/10 bg-white shadow-xl">
          {/* Sticky controls + tabs — lives inside the card so content never overlaps */}
          <div className="sticky top-[4.75rem] sm:top-20 z-30 rounded-t-[28px] bg-white/95 backdrop-blur-xl border-b border-ink/10">
            <div className="flex items-center justify-between gap-3 px-5 sm:px-8 py-4">
              <LegalBackButton />
              <p className="hidden sm:block font-mono text-[10px] uppercase tracking-widest text-ink/40 shrink-0">
                Legal documents
              </p>
              <LegalCloseButton />
            </div>

            <div className="px-5 sm:px-8 py-4 sm:py-5 border-t border-ink/5">
              <LegalNavTabs activePath={activePath} />
            </div>
          </div>

          {/* Main content — padded inset from card edges */}
          <div className="px-5 sm:px-8 lg:px-10 py-8 sm:py-10">
            <div className="flex items-start gap-4 sm:gap-5 mb-6 sm:mb-8">
              <span className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#FFF2E9] border border-[#F6761B]/20 flex items-center justify-center text-[#F6761B] font-display text-lg">
                §
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="font-mono text-xs uppercase tracking-widest text-[#F6761B] mb-2 sm:mb-3">
                  Legal & Compliance
                </p>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight break-words">
                  {label}
                </h1>
              </div>
            </div>

            <p className="font-mono text-[11px] text-ink/40 mb-6 sm:mb-8">{updated}</p>

            {intro && (
              <p className="font-body text-sm sm:text-base text-ink/65 leading-relaxed mb-8 rounded-2xl bg-[#FFF8F2] border border-ink/5 px-5 py-5 sm:px-6 sm:py-6">
                {intro}
              </p>
            )}

            <div className="grid sm:grid-cols-2 gap-4 text-xs font-body text-ink/55 rounded-2xl bg-[#FFF2E9]/30 border border-[#F6761B]/10 px-5 py-5 sm:px-6 sm:py-6 mb-10 sm:mb-12">
              <p>
                <span className="font-semibold text-ink/80 block mb-1">{COMPANY.name}</span>
                Operated by Brift Technologies
              </p>
              <p className="break-words">CIN: {COMPANY.cin}</p>
              <p className="break-words">GSTIN: {COMPANY.gstin}</p>
              <p>
                <a href={`mailto:${COMPANY.email}`} className="text-[#F6761B] hover:underline font-medium break-all">
                  {COMPANY.email}
                </a>
              </p>
            </div>

            <LegalSectionList sections={sections} />

            {footnote && (
              <div className="mt-12 sm:mt-14 pt-8 sm:pt-10 border-t border-ink/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <p className="font-mono text-[11px] text-ink/40 leading-relaxed">{footnote}</p>
                <LegalBackButton className="self-start sm:self-auto shrink-0" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
