const HIGHLIGHTS = [
  {
    icon: "fa-heart",
    title: "Real connections",
    body: "Meaningful matches over endless swiping.",
  },
  {
    icon: "fa-shield-halved",
    title: "Verified profiles",
    body: "Selfie verification and liveness detection.",
  },
  {
    icon: "fa-mobile-screen",
    title: "Built for mobile",
    body: "A seamless iOS and Android experience.",
  },
  {
    icon: "fa-comments",
    title: "Real-time chat",
    body: "Smart matching with instant conversation.",
  },
];

const STATS = [
  { value: "18+", label: "Age verified community" },
  { value: "100%", label: "Profile verification" },
  { value: "24/7", label: "Safe, active platform" },
];

export default function AboutUs() {
  return (
    <section id="about-us" className="relative bg-paper text-ink py-24 sm:py-32 overflow-hidden">
      <div className="pricing-orb absolute top-10 right-[5%] w-80 h-80 bg-[#F6761B]/12 blur-[120px] rounded-full pointer-events-none" />
      <div className="pricing-orb pricing-orb-delay absolute bottom-0 left-[0%] w-96 h-96 bg-coral/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
          {/* Left visual panel */}
          <div className="pricing-fade-up relative">
            <div className="rounded-[32px] border border-ink/10 bg-gradient-to-br from-[#1F1B2E] via-[#2D2438] to-[#1F1B2E] p-8 sm:p-10 text-paper shadow-2xl overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#F6761B]/25 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-honey/15 blur-3xl rounded-full pointer-events-none" />

              <div className="relative">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#F6761B] mb-4">
                  Love Today
                </p>
                <h3 className="font-display text-3xl sm:text-4xl leading-tight mb-3">
                  Dating that feels{" "}
                  <span className="italic text-honey">human</span> again.
                </h3>
                <p className="font-body text-sm text-paper/55 leading-relaxed mb-8">
                  Simple, safe, and built for people who want to meet — not just swipe.
                </p>

                <div className="grid grid-cols-3 gap-3 mb-8">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl bg-paper/5 border border-paper/10 p-3 text-center"
                    >
                      <p className="font-display text-xl sm:text-2xl text-[#F6761B]">
                        {stat.value}
                      </p>
                      <p className="font-mono text-[9px] uppercase tracking-wide text-paper/40 mt-1 leading-snug">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {["iOS", "Android", "Verified", "Premium"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-paper/15 bg-paper/5 text-paper/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pricing-float absolute -bottom-5 -right-3 sm:right-4 hidden sm:flex w-16 h-16 rounded-2xl bg-[#FFF2E9] border border-[#F6761B]/20 items-center justify-center shadow-lg">
              <i className="fa-solid fa-heart text-[#F6761B] text-2xl" />
            </div>
          </div>

          {/* Right content */}
          <div className="pricing-fade-up" style={{ animationDelay: "120ms" }}>
            <p className="font-mono text-xs uppercase tracking-widest text-[#F6761B] mb-4">
              Who we are
            </p>
            <h2 className="font-display text-4xl sm:text-5xl xl:text-6xl leading-tight mb-8">
              About{" "}
              <span className="italic text-[#F6761B]">Us</span>
            </h2>

            <div className="space-y-5 rounded-[28px] border border-ink/10 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-lg">
              <p className="font-body text-base sm:text-lg text-ink/70 leading-relaxed">
                Love Today is a modern dating and social connection platform designed to
                help people find real, meaningful relationships — not endless swiping.
                Built with a mobile-first experience for iOS and Android, we combine
                smart, preference-based matching with real-time chat to help you connect
                with people who are genuinely worth meeting.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-[#F6761B]/25 to-transparent" />
              <p className="font-body text-base sm:text-lg text-ink/70 leading-relaxed">
                We take authenticity and safety seriously. Every profile goes through
                selfie-based verification and liveness detection, so you can focus on the
                connection, not the noise. Whether you&apos;re browsing for free or
                unlocking premium features like swipes, boosts, and priority visibility,
                Love Today is built to make dating today feel simple, safe, and
                worthwhile.
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pricing-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-ink/10 bg-white/75 backdrop-blur-sm p-5 hover:border-[#F6761B]/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-[#FFF2E9] border border-[#F6761B]/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className={`fa-solid ${item.icon} text-[#F6761B]`} />
              </div>
              <h3 className="font-display text-lg mb-2">{item.title}</h3>
              <p className="font-body text-sm text-ink/60 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
