export default function LegalSectionList({ sections }) {
  return (
    <div className="space-y-6">
      {sections.map((section, index) => (
        <article
          key={section.title}
          className="group rounded-2xl border border-ink/10 bg-white/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-[#F6761B]/25 hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <span className="shrink-0 w-9 h-9 rounded-xl bg-[#FFF2E9] text-[#F6761B] font-display text-sm flex items-center justify-center">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex-1 min-w-0">
              <h2 className="font-display text-xl mb-3 leading-snug">{section.title}</h2>

              {section.body && (
                <p className="font-body text-sm text-ink/65 leading-relaxed whitespace-pre-line">
                  {section.body}
                </p>
              )}

              {section.items?.length > 0 && (
                <ul className={`space-y-2.5 ${section.body ? "mt-4" : ""}`}>
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 font-body text-sm text-ink/65 leading-relaxed"
                    >
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F6761B]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
