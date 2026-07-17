const STEPS = [
  {
    title: "Share your code",
    body: "Invite friends using your unique referral link or code.",
  },
  {
    title: "They join Love Today",
    body: "Your friend installs the app and completes sign-up with your code.",
  },
  {
    title: "Bonus for both",
    body: "They may receive a fixed Bonus Credit; you earn ₹100 Referral Bonus on successful activation.",
  },
];

export default function ReferralProgram() {
  return (
    <section className="relative bg-surface text-paper py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F6761B]/15 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#F6761B] mb-4">
              Refer & earn
            </p>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-5">
              Referral & Scratch Card Bonus Program
            </h2>
            <p className="font-body text-muted leading-relaxed mb-6">
              Share Love Today with someone special. When they join successfully,
              you both benefit — with fixed, pre-determined rewards (not chance-based).
            </p>

            
          </div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {STEPS.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-ink-soft bg-ink/30 p-5 hover:border-[#F6761B]/40 transition-colors"
              >
                <span className="font-display text-2xl text-[#F6761B]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg mt-2 mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
