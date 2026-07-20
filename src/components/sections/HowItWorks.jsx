const STEPS = [
  {
    n: "01",
    time: "Instant",
    title: "Verify your profile",
    body: "Quick verification keeps fake profiles out. You’re real, so your matches are real too.",
  },
  {
    n: "02",
    time: "A few seconds",
    title: "Get curated matches",
    body: "We don’t show thousands of profiles. Just a few high-quality people you’re actually likely to connect with.",
  },
  {
    n: "03",
    time: "When it feels right",
    title: "Start a conversation",
    body: "No pressure, no awkwardness. Chat only when there’s mutual interest.",
  },
  {
    n: "04",
    time: "Real life",
    title: "Meet in person",
    body: "Once both feel comfortable, we suggest a nearby spot for a low-pressure first meet.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-paper text-ink py-24 sm:py-32 overflow-hidden"
    >
      {/* soft glow background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F6761B]/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F6761B]/10 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* header */}
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-[#F6761B] mb-4">
            A normal day in love, start to finish
          </p>

          <h2 className="font-display text-4xl sm:text-5xl leading-tight">
            From opening the app to dinner reservation.
          </h2>
        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.n}
              className="group relative bg-white/70 backdrop-blur-xl border border-black/5 rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* glow hover */}
              <div className="absolute inset-0 rounded-2xl bg-[#F6761B]/0 group-hover:bg-[#F6761B]/5 transition" />

              {/* top row */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-3xl text-[#F6761B]">
                  {step.n}
                </span>

                <span className="font-mono text-[11px] text-ink/40 tracking-wide">
                  {step.time}
                </span>
              </div>

              {/* title */}
              <h3 className="font-display text-xl mb-3 leading-snug">
                {step.title}
              </h3>

              {/* body */}
              <p className="font-body text-sm text-ink/60 leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}