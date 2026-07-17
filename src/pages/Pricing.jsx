import { Link } from "react-router-dom";
import Button from "../components/ui/Button.jsx";

const PLANS = [
  {
    n: "01",
    name: "Love Today Gold",
    tagline: "More matches, more momentum",
    features: [
      "Unlimited likes",
      "See who liked you",
      "Rewinds",
      "3 boosts per month",
      "5 super likes per month",
      "Passport feature",
    ],
  },
  {
    n: "02",
    name: "Love Today Platinum",
    tagline: "Priority access & premium visibility",
    features: [
      "Everything in Gold",
      "Priority likes",
      "5 boosts per month",
      "10 super likes per month",
      "7 comments per month",
      "Passport & top profiles access",
    ],
    popular: true,
  },
];

export default function Pricing() {
  return (
    <section className="relative bg-paper text-ink pt-36 pb-28 sm:pt-44 sm:pb-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#F6761B]/10 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-coral mb-4">
            Simple, honest pricing
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight">
            Premium plans for every kind of ready.
          </h1>
          <p className="font-body text-ink/60 mt-4 leading-relaxed">
            All prices in INR, inclusive of applicable GST. Subscriptions auto-renew
            unless cancelled at least 24 hours before renewal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
          {PLANS.map((plan) => (
            <div
              key={plan.n}
              className={`relative rounded-3xl border p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? "border-[#F6761B]/30 bg-gradient-to-br from-honey/15 to-paper shadow-lg"
                  : "border-ink/10 bg-white/80 backdrop-blur-sm"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-6 font-mono text-[10px] uppercase tracking-widest bg-[#F6761B] text-white px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}

              <span className="font-display text-3xl text-coral mb-2">{plan.n}</span>
              <h3 className="font-display text-2xl mb-1">{plan.name}</h3>
              <p className="font-body text-sm text-ink/50 mb-6">{plan.tagline}</p>

              <p className="font-display text-3xl mb-1">See in app</p>
              <p className="font-mono text-[11px] text-ink/40 mb-6">
                Live pricing on the Platform · GST inclusive
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2.5 font-body text-sm text-ink/65">
                    <span className="text-[#F6761B]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button variant="primary" className="w-full">
                Get {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mt-10 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-ink/10 bg-white/70 p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-coral mb-2">
              1:1 Club
            </p>
            <p className="font-body text-sm text-ink/65 leading-relaxed">
              One-time joining fee shown in the app before you join.
            </p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white/70 p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-coral mb-2">
              Referral program
            </p>
            <p className="font-body text-sm text-ink/65 leading-relaxed">
              Account Activation Fee (currently ₹999) may apply for certain users.
              Referrers earn ₹100 per successful referral.
            </p>
          </div>
        </div>

        <p className="font-mono text-[11px] text-ink/40 mt-8">
          Payments via Razorpay. See{" "}
          <Link to="/refund-policy" className="text-coral underline">
            Refund Policy
          </Link>{" "}
          and{" "}
          <Link to="/service-delivery-policy" className="text-coral underline">
            Service Delivery Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
