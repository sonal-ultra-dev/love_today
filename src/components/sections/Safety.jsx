const POINTS = [
  {
    title: "Photo verification",
    body: "A quick selfie check confirms every profile is a real, current person — not a five-year-old photo.",
  },
  {
    title: "Block & report, instantly",
    body: "One tap removes someone from your matches and your feed for good. No explanation owed.",
  },
  {
    title: "Share your plans",
    body: "Send your date details to a trusted contact straight from the chat before you meet up.",
  },
];

export default function Safety() {
  return (
    <section id="safety" className="relative bg-surface py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-coral mb-4">
              Built to feel safe
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-paper leading-tight">
              Meeting someone new shouldn't feel risky.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {POINTS.map((p) => (
              <div key={p.title} className="border-t border-ink-soft pt-6">
                <h3 className="font-display text-lg text-paper mb-3">{p.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
