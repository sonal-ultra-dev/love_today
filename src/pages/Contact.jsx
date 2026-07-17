import { useState } from "react";
import Button from "../components/ui/Button.jsx";
import { submitContactToGoogleSheets } from "../lib/submitContactToGoogleSheets.js";
import { COMPANY } from "../components/content/legal.jsx";

const emptyForm = { name: "", phone: "", email: "", message: "" };

const CONTACT_CARDS = [
  {
    label: "Customer support",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    hint: "Legal, privacy & billing",
  },
  {
    label: "Phone",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
    hint: COMPANY.supportHours,
  },
  {
    label: "Website",
    value: COMPANY.website,
    href: `https://${COMPANY.website}`,
    hint: "Official platform",
  },
];

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await submitContactToGoogleSheets(form);
      setSubmitted(true);
      setForm(emptyForm);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative bg-paper text-ink pt-36 pb-28 sm:pt-44 sm:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F6761B]/10 blur-[140px] rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-coral mb-4">
            Section 5 · Contact us
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-4">
            We're here to help
          </h1>
          <p className="font-body text-ink/60 leading-relaxed">
            Reach {COMPANY.brand} support by email, phone, or the form below.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {CONTACT_CARDS.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.label === "Website" ? "_blank" : undefined}
              rel={card.label === "Website" ? "noopener noreferrer" : undefined}
              className="rounded-2xl border border-ink/10 bg-white/80 backdrop-blur-sm p-5 hover:border-[#F6761B]/30 hover:shadow-md transition-all"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-coral mb-2">
                {card.label}
              </p>
              <p className="font-body text-sm font-semibold text-ink mb-1">{card.value}</p>
              <p className="font-body text-xs text-ink/50">{card.hint}</p>
            </a>
          ))}
        </div>

        <div className="rounded-2xl border border-ink/10 bg-white/60 p-6 mb-10 font-body text-sm text-ink/60 leading-relaxed">
          <p className="font-semibold text-ink mb-2">Registered office</p>
          <p>{COMPANY.name}</p>
          <p className="mt-1">{COMPANY.address}</p>
          <p className="mt-3 text-xs">CIN: {COMPANY.cin} · GSTIN: {COMPANY.gstin}</p>
        </div>

        <div className="max-w-2xl rounded-3xl border border-ink/10 bg-white/80 backdrop-blur-sm p-7 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 rounded-full bg-[#FFF2E9] text-[#F6761B] flex items-center justify-center mx-auto mb-4 text-2xl">
                ✓
              </div>
              <p className="font-display text-2xl mb-2">Message sent</p>
              <p className="font-body text-ink/60">
                Thanks — we'll get back to you within 24–48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="font-display text-2xl mb-2">Send a message</h2>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-xl bg-surface border border-ink-soft text-paper font-body outline-none focus:border-coral"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                
                className="w-full px-4 py-3 rounded-xl bg-surface border border-ink-soft text-paper font-body outline-none focus:border-coral"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                
                className="w-full px-4 py-3 rounded-xl bg-surface border border-ink-soft text-paper font-body outline-none focus:border-coral"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help?"
                
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-surface border border-ink-soft text-paper font-body outline-none focus:border-coral"
              />
              {error && (
                <p className="font-body text-sm text-red-600">{error}</p>
              )}
              <Button type="submit" variant="primary" disabled={loading}>
                {loading ? "Sending..." : "Send message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
