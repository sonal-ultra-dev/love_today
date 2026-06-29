import { useState } from "react";
import Button from "../components/ui/Button.jsx";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // TODO: wire this to a backend or form service (Formspree, Resend, your own API)
  }

  return (
    <section className="relative bg-paper text-ink pt-36 pb-28 sm:pt-44 sm:pb-32">
      <div className="max-w-2xl mx-auto px-6 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-coral mb-4">
          We're here to help
        </p>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-4">
          Contact support
        </h1>
        <p className="font-body text-ink/60 mb-10 leading-relaxed">
          Email us directly at{" "}
          <a className="text-coral underline" href="mailto:support@yourdatingapp.com">
            support@yourdatingapp.com
          </a>{" "}
          or send a message below.
        </p>

        {submitted ? (
          <p className="font-body text-coral">
            Thanks — we'll get back to you within 24–48 hours.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-sm bg-surface border border-ink-soft text-paper font-body outline-none focus:border-coral"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full px-4 py-3 rounded-sm bg-surface border border-ink-soft text-paper font-body outline-none focus:border-coral"
            />
            <textarea
              placeholder="How can we help?"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-sm bg-surface border border-ink-soft text-paper font-body outline-none focus:border-coral"
            />
            <Button type="submit" variant="primary">
              Send message
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}