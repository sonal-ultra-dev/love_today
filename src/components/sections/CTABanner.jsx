import Button from "../ui/Button.jsx";

export default function CTABanner() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden" style={{ background: "#F6761B" }}>
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full opacity-20 blur-2xl pointer-events-none"
        style={{ background: "var(--color-honey)" }}
      />
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-tight mb-6">
          Today is as good a day as any.
        </h2>
        <p className="font-body text-ink/70 text-lg max-w-md mx-auto mb-10">
          Join free, meet your matches in minutes, and see where the day
          takes you.
        </p>
        {/* <Button variant="dark" className="!bg-ink !text-paper hover:!bg-[#15121f]">
          Get the app — it's free
        </Button> */}
      </div>
    </section>
  );
}
