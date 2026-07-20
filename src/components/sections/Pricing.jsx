import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";

const PLANS = [
  {
    n: "01",
    name: "Basic",
    tagline: "Start matching at your own pace",
    accent: "from-slate-100 to-white",
    icon: "✦",
    popular: false,
    price: "Free",
    priceSub: "No subscription required",
    features: [
      { label: "Likes", value: "15 / day" },
      { label: "See who likes", value: "No" },
      { label: "Priority likes", value: "No" },
      { label: "Rewinds", value: "No" },
      { label: "Boost", value: "1 per month" },
      { label: "Super likes", value: "2 per month" },
      { label: "Comment", value: "No" },
      { label: "Passport", value: "No" },
    ],
  },
  {
    n: "02",
    name: "Gold",
    tagline: "More matches, more momentum",
    accent: "from-[#FFF2E9] via-honey/20 to-paper",
    icon: "★",
    popular: true,
    price: "₹1,499",
    priceSub: "per month · GST inclusive",
    features: [
      { label: "Likes", value: "Unlimited" },
      { label: "See who likes", value: "Yes" },
      { label: "Priority likes", value: "No" },
      { label: "Rewinds", value: "Yes" },
      { label: "Boost", value: "3 per month" },
      { label: "Super likes", value: "5 per month" },
      { label: "Comment", value: "No" },
      { label: "Passport", value: "Yes" },
    ],
  },
  {
    n: "03",
    name: "Platinum",
    tagline: "Priority access & premium visibility",
    accent: "from-[#1F1B2E] to-[#2D2438]",
    icon: "♛",
    dark: true,
    popular: false,
    price: "₹2,499",
    priceSub: "per month · GST inclusive",
    features: [
      { label: "Likes", value: "Unlimited" },
      { label: "See who likes", value: "Yes" },
      { label: "Priority likes", value: "Yes" },
      { label: "Rewinds", value: "Yes" },
      { label: "Boost", value: "5 per month" },
      { label: "Super likes", value: "10 per month" },
      { label: "Comment", value: "7 per month" },
      { label: "Passport", value: "Yes" },
    ],
  },
];

function FeatureValue({ value, dark }) {
  const isYes = value === "Yes";
  const isNo = value === "No";

  if (isYes) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[#F6761B] font-semibold">
        <span className="w-5 h-5 rounded-full bg-[#F6761B]/15 flex items-center justify-center text-[10px]">
          ✓
        </span>
        Yes
      </span>
    );
  }
  if (isNo) {
    return (
      <span className={`inline-flex items-center gap-1.5 ${dark ? "text-paper/35" : "text-ink/30"}`}>
        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${dark ? "bg-paper/10" : "bg-ink/5"}`}>
          —
        </span>
        No
      </span>
    );
  }
  return (
    <span className={`font-semibold ${dark ? "text-honey" : "text-ink/85"}`}>
      {value}
    </span>
  );
}

function PricingCard({ plan, index, isActive, onHover, onLeave }) {
  const dark = plan.dark;

  return (
    <article
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      tabIndex={0}
      style={{ animationDelay: `${index * 120}ms` }}
      className={`pricing-fade-up pricing-card relative rounded-[28px] p-[1px] outline-none focus-visible:ring-2 focus-visible:ring-[#F6761B]/50 ${
        plan.popular ? "pricing-glow md:-mt-4 md:mb-4" : ""
      } ${isActive ? "pricing-card-active" : ""}`}
    >
      {plan.popular && (
        <div className="absolute -inset-[1px] rounded-[28px] pricing-shimmer opacity-80 -z-10" />
      )}

      <div
        className={`relative h-full rounded-[27px] p-7 sm:p-8 flex flex-col overflow-hidden bg-gradient-to-br ${plan.accent} ${
          dark ? "text-paper border border-paper/10" : "text-ink border border-ink/8"
        } ${plan.popular ? "backdrop-blur-xl" : "backdrop-blur-sm shadow-lg"}`}
      >
        {plan.popular && (
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F6761B]/20 blur-3xl rounded-full pointer-events-none" />
        )}

        {plan.popular && (
          <span className="absolute -top-px left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest pricing-shimmer text-white px-4 py-1.5 rounded-b-xl shadow-md">
            Most popular
          </span>
        )}

        <div className="flex items-start justify-between mb-6 mt-2">
          <div>
            <span className={`font-mono text-[11px] uppercase tracking-widest ${dark ? "text-honey" : "text-coral"}`}>
              Plan {plan.n}
            </span>
            <h3 className="font-display text-3xl mt-1">{plan.name}</h3>
            <p className={`font-body text-sm mt-1 ${dark ? "text-paper/55" : "text-ink/50"}`}>
              {plan.tagline}
            </p>
          </div>
          <span
            className={`pricing-float w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${
              dark
                ? "bg-paper/10 text-honey border border-paper/10"
                : "bg-[#FFF2E9] text-[#F6761B] border border-[#F6761B]/15"
            }`}
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            {plan.icon}
          </span>
        </div>

        <div className={`rounded-2xl p-4 mb-6 ${dark ? "bg-paper/5 border border-paper/10" : "bg-white/60 border border-ink/5"}`}>
          <p className={`font-display text-3xl ${dark ? "text-honey" : "text-ink"}`}>
            {plan.price}
          </p>
          <p className={`font-mono text-[11px] mt-1 ${dark ? "text-paper/40" : "text-ink/40"}`}>
            {plan.priceSub}
          </p>
        </div>

        <ul className={`space-y-1 mb-8 flex-1 rounded-2xl p-1 ${dark ? "bg-paper/5" : "bg-white/40"}`}>
          {plan.features.map((feature, i) => (
            <li
              key={feature.label}
              className={`flex items-center justify-between gap-3 font-body text-sm px-3 py-2.5 rounded-xl transition-colors duration-300 ${
                dark ? "hover:bg-paper/5" : "hover:bg-white/80"
              }`}
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              <span className={dark ? "text-paper/55" : "text-ink/55"}>{feature.label}</span>
              <FeatureValue value={feature.value} dark={dark} />
            </li>
          ))}
        </ul>

        <Button
          variant={plan.popular || dark ? "primary" : "secondary"}
          className={`w-full ${plan.popular ? "contact-btn-pulse" : ""}`}
        >
          Get {plan.name}
        </Button>
      </div>
    </article>
  );
}

export default function PricingSection({ embedded = false }) {
  const [activePlan, setActivePlan] = useState("02");
  const HeadingTag = embedded ? "h2" : "h1";

  return (
    <section
      id="pricing"
      className={`relative bg-paper text-ink overflow-hidden ${
        embedded ? "py-24 sm:py-32" : "pt-36 pb-28 sm:pt-44 sm:pb-32"
      }`}
    >
      <div className="pricing-orb absolute top-20 left-[8%] w-72 h-72 bg-[#F6761B]/15 blur-[100px] rounded-full pointer-events-none" />
      <div className="pricing-orb pricing-orb-delay absolute bottom-10 right-[5%] w-96 h-96 bg-coral/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-honey/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-16 pricing-fade-up">
          <p className="font-mono text-xs uppercase tracking-widest text-coral mb-4">
            Simple, honest pricing
          </p>
          <HeadingTag className="font-display text-4xl sm:text-5xl xl:text-6xl leading-tight">
            Choose the plan that{" "}
            <span className="italic text-[#F6761B]">fits you.</span>
          </HeadingTag>
          <p className="font-body text-ink/60 mt-4 leading-relaxed max-w-xl">
            All prices in INR, inclusive of applicable GST. Subscriptions auto-renew
            unless cancelled at least 24 hours before renewal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PLANS.map((plan, index) => (
            <PricingCard
              key={plan.n}
              plan={plan}
              index={index}
              isActive={activePlan === plan.n}
              onHover={() => setActivePlan(plan.n)}
              onLeave={() => setActivePlan("02")}
            />
          ))}
        </div>

        <div className="max-w-5xl mt-14 grid sm:grid-cols-2 gap-4 pricing-fade-up" style={{ animationDelay: "400ms" }}>
          <div className="group rounded-3xl border border-ink/10 bg-white/70 backdrop-blur-sm p-6 sm:p-7 hover:border-[#F6761B]/25 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 rounded-xl bg-[#FFF2E9] text-[#F6761B] font-display text-lg flex items-center justify-center">
                1:1
              </span>
              <p className="font-mono text-[10px] uppercase tracking-widest text-coral">
                1:1 Club
              </p>
            </div>
            <h3 className="font-display text-xl mb-2">Balanced community, by design</h3>
            <p className="font-body text-sm text-ink/65 leading-relaxed">
              We aim to keep a healthy gender balance in each region. The ratio can
              vary as signups and activity change — it is an intention, not a
              guarantee. A one-time joining fee applies; details are shown in the
              app before you enroll.
            </p>
          </div>

          <div className="group rounded-3xl border border-ink/10 bg-white/70 backdrop-blur-sm p-6 sm:p-7 hover:border-[#F6761B]/25 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-10 rounded-xl bg-[#FFF2E9] text-[#F6761B] text-lg flex items-center justify-center">
                ↗
              </span>
              <p className="font-mono text-[10px] uppercase tracking-widest text-coral">
                Referral program
              </p>
            </div>
            <h3 className="font-display text-xl mb-2">Refer & Scratch Card Bonus</h3>
            <p className="font-body text-sm text-ink/65 leading-relaxed">
              Share your unique referral code with friends. When they sign up
              successfully, you both receive fixed bonus credits — pre-determined
              rewards, not chance-based. Some new users may need an account
              activation step; terms are shown at sign-up in the app.
            </p>
          </div>
        </div>

        {/* <p
          className="font-mono text-[11px] text-ink/40 mt-8 pricing-fade-up"
          style={{ animationDelay: "500ms" }}
        >
          Payments via Razorpay. See{" "}
          <Link to="/refund-policy" className="text-coral underline hover:text-[#F6761B] transition-colors">
            Refund Policy
          </Link>{" "}
          and{" "}
          <Link to="/service-delivery-policy" className="text-coral underline hover:text-[#F6761B] transition-colors">
            Service Delivery Policy
          </Link>
          .
        </p> */}
      </div>
    </section>
  );
}
