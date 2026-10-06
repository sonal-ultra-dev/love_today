import { useState } from "react";
import Button from "../components/ui/Button.jsx";
import { submitContactToGoogleSheets } from "../lib/submitContactToGoogleSheets.js";
import { COMPANY } from "../components/content/legal.jsx";

const emptyForm = { name: "", gender: "", phone: "", email: "", message: "" };

const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
  { value: "prefer-not-to-say", label: "Prefer not to say" },
];

const fieldClass =
  "w-full px-4 py-3.5 rounded-2xl bg-[#FFF8F2] border border-ink/10 text-ink placeholder:text-ink/35 font-body outline-none transition focus:border-[#F6761B] focus:ring-4 focus:ring-[#F6761B]/15";

export default function PreRegistration() {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleGenderChange(value) {
    setForm((prev) => ({ ...prev, gender: prev.gender === value ? "" : value }));
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
    <section className="relative min-h-screen overflow-hidden bg-paper text-ink pt-32 pb-20 sm:pt-40 sm:pb-28 px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[420px] bg-[#F6761B]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-honey/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-xl mx-auto">
        <div className="rounded-[32px] border border-ink/10 bg-white/90 backdrop-blur-sm p-7 sm:p-10 shadow-[0_24px_70px_rgba(31,27,46,0.12)]">
          <p className="font-mono text-xs uppercase tracking-widest text-[#F6761B] mb-3">
            We're here to help
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-3">
            Contact us
          </h1>
          <p className="font-body text-ink/60 mb-8 leading-relaxed">
            Email us at{" "}
            <a className="text-[#F6761B] underline" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>{" "}
            or call{" "}
            <a
              className="text-[#F6761B] underline"
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
            >
              {COMPANY.phone}
            </a>
            .
          </p>

          {submitted ? (
            <p className="font-body text-[#F6761B]">
              Thanks — we'll get back to you within 24–48 hours.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={fieldClass}
              />

              <fieldset className="space-y-3">
                <legend className="font-body text-sm text-ink/70">Gender (optional)</legend>
                <div className="flex flex-wrap gap-2.5">
                  {GENDER_OPTIONS.map((option) => {
                    const selected = form.gender === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleGenderChange(option.value)}
                        className={`px-4 py-2.5 rounded-full border font-body text-sm transition-all ${
                          selected
                            ? "bg-[#F6761B] text-white border-[#F6761B] shadow-md shadow-[#F6761B]/20"
                            : "bg-white border-ink/10 text-ink/70 hover:border-[#F6761B]/50"
                        }`}
                      >
                        {option.label}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number (optional)"
                className={fieldClass}
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email (optional)"
                className={fieldClass}
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help? (optional)"
                rows={4}
                className={`${fieldClass} resize-none`}
              />
              {error && <p className="font-body text-sm text-red-600">{error}</p>}
              <Button type="submit" variant="primary" disabled={loading} className="w-full">
                {loading ? "Sending..." : "Send message"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
