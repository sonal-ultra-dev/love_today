// src/pages/PrivacyPolicy.jsx
import { LEGAL_CONTENT } from "../components/content/legal";

export default function PrivacyPolicy() {
  const { label, updated, sections, footnote } = LEGAL_CONTENT.privacy;

  return (
    <section className="relative bg-paper text-ink pt-36 pb-28 sm:pt-44 sm:pb-32">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-coral mb-4">Legal</p>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-3">{label}</h1>
        <p className="font-mono text-[11px] text-ink/40 mb-12">{updated}</p>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title} className="border-t border-ink/10 pt-6">
              <h2 className="font-display text-xl mb-3">{s.title}</h2>
              <p className="font-body text-sm text-ink/60 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="font-mono text-[11px] text-ink/40 mt-12">{footnote}</p>
      </div>
    </section>
  );
}