/**
 * DiaryCard — the page's signature element.
 * Styled like a torn page from a dated diary, used for testimonials
 * and feature callouts. Subtle rotation + paper texture instead of
 * a generic rounded "card" treatment.
 */
export default function DiaryCard({ date, children, rotate = "-1deg", className = "" }) {
  return (
    <div
      className={`relative bg-paper text-ink rounded-sm shadow-xl px-6 py-7 sm:px-8 sm:py-8 ${className}`}
      style={{
        transform: `rotate(${rotate})`,
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)",
        backgroundSize: "100% 28px",
      }}
    >
      {/* Torn top edge */}
      <div
        className="absolute -top-px left-0 right-0 h-2 bg-ink"
        style={{
          clipPath:
            "polygon(0% 100%, 3% 0%, 7% 100%, 12% 10%, 17% 100%, 23% 0%, 28% 100%, 34% 5%, 39% 100%, 45% 0%, 51% 100%, 57% 10%, 63% 100%, 69% 0%, 75% 100%, 81% 5%, 87% 100%, 93% 0%, 100% 100%)",
        }}
      />
      <p className="font-mono text-xs tracking-widest uppercase text-coral mb-3">
        {date}
      </p>
      <div className="font-display text-base sm:text-lg leading-relaxed">
        {children}
      </div>
    </div>
  );
}
