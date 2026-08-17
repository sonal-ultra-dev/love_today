const STEPS = [
  {
    n: "01",
    time: "Instant",
    title: "Verify your profile",
    body: "A quick verification keeps the fake profiles out.",
  },
  {
  n: "02",
  time: "A few seconds",
  title: "Get curated matches",
  body: "No more scrolling through thousands of random profiles. Just a few carefully chosen matches that fit you.",
},
  {
    n: "03",
    time: "When there’s a spark",
    title: "Start a conversation",
    body: "Okay, you matched. Don’t fumble now.",
  },
  {
  n: "04",
  time: "IRL",
  title: "Take the vibe offline",
  body: "Chat going suspiciously well? When you’re both ready, we’ll suggest a nearby spot for an easy first meet. Coffee, dinner, or a quick drink that turns into the whole evening.",
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
            How it works on Love Today
          </p>

          <h2 className="font-display text-4xl sm:text-5xl leading-tight">
            First, prove you’re really you.
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