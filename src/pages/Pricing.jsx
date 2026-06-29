import Button from "../components/ui/Button.jsx";

const PLANS = [
  {
    n: "01",
    name: "1 Month",
    price: "₹499",
    sub: "₹499 / mo",
    features: ["Unlimited daily matches", "5 Super Likes a day", "See who liked you"],
  },
  {
    n: "02",
    name: "3 Months",
    price: "₹999",
    sub: "₹333 / mo",
    features: ["Everything in 1 Month", "Weekly profile Boost", "Priority support"],
    popular: true,
  },
  {
    n: "03",
    name: "12 Months",
    price: "₹2,999",
    sub: "₹250 / mo",
    features: ["Everything in 3 Months", "Monthly Boosts", "Read receipts"],
  },
];

export default function Pricing() {
  return (
    <section className="relative bg-paper text-ink pt-36 pb-28 sm:pt-44 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-coral mb-4">
            Simple, honest pricing
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight">
            One plan for every kind of ready.
          </h1>
          <p className="font-body text-ink/60 mt-4 leading-relaxed">
            All prices in INR, taxes included. Cancel auto-renewal anytime from
            your account settings.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-px bg-ink/10 rounded-lg overflow-hidden">
          {PLANS.map((plan) => (
            <div
              key={plan.n}
              className={`p-7 sm:p-8 flex flex-col ${
                plan.popular ? "bg-honey/10" : "bg-paper"
              }`}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-3xl text-coral">{plan.n}</span>
                {plan.popular && (
                  <span className="font-mono text-[11px] uppercase tracking-widest text-coral">
                    Most popular
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl mb-1">{plan.name}</h3>
              <p className="font-display text-3xl mt-2">{plan.price}</p>
              <p className="font-mono text-[11px] text-ink/40 mb-6">{plan.sub}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="font-body text-sm text-ink/60">
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="w-full">
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <p className="font-mono text-[11px] text-ink/40 mt-10">
          Payments processed securely. See our Refund Policy for cancellation
          and billing details.
        </p>
      </div>
    </section>
  );
}