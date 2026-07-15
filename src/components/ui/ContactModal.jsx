import { useEffect, useState } from "react";
import Button from "./Button.jsx";

export default function ContactModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setSubmitted(false);
  }, [open]);

  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center bg-ink/80 backdrop-blur-sm px-4 py-10 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-paper text-ink rounded-lg max-w-lg w-full p-7 sm:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-ink/40 hover:text-ink transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M5 5L17 17M17 5L5 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <p className="font-mono text-xs uppercase tracking-widest text-coral mb-3">
          We're here to help
        </p>
        <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-3">
          Contact us
        </h2>
        <p className="font-body text-ink/60 mb-8 leading-relaxed">
          Email us at{" "}
          <a
            className="text-coral underline"
            href="mailto:support@yourdatingapp.com"
          >
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
              type="number"
              placeholder="Phone number"
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
              rows={4}
              className="w-full px-4 py-3 rounded-sm bg-surface border border-ink-soft text-paper font-body outline-none focus:border-coral"
            />
            <Button type="submit" variant="primary">
              Send message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
