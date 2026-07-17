export default function OneToOneClub() {
  return (
    <section className="relative bg-paper text-ink pb-24 sm:pb-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F6761B]/8 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-4xl mx-auto rounded-3xl border border-black/5 bg-gradient-to-br from-white/90 to-[#FFF8F2] backdrop-blur-xl p-8 sm:p-12 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#F6761B] mb-3">
                Our community
              </p>
              <h2 className="font-display text-4xl sm:text-5xl leading-tight">
                1 : 1 Club
              </h2>
            </div>

            <div className="shrink-0 w-24 h-24 rounded-2xl bg-[#FFF2E9] border border-[#F6761B]/20 flex flex-col items-center justify-center">
              <span className="font-display text-3xl text-[#F6761B]">1:1</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-ink/45">
                Balance
              </span>
            </div>
          </div>

          <div className="space-y-5">
            <p className="font-body text-base text-ink/65 leading-relaxed">
              Our aim is to keep a healthy balance of genders in each region, and
              we may refer to an approximate 1:1 gender ratio when describing our
              service. Because signups and user activity change from time to time,
              actual numbers depend on who joins, stays active, and uses the app
              in that area, so the gender ratio can and will vary.
            </p>

            <div className="rounded-2xl bg-[#FFF2E9]/60 border border-[#F6761B]/15 p-5">
              <p className="font-body text-sm text-ink/70 leading-relaxed">
                By using the app, you understand that gender balance is an effort
                and intention, not an exact or guaranteed figure. The 1:1 Club
                joining fee is a one-time payment — the current fee is shown on
                the Platform before you join.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
