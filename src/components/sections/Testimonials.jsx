import DiaryCard from "../ui/DiaryCard.jsx";

const TESTIMONIALS = [
  {
    date: "Matched 6 months ago",
    rotate: "-2deg",
    text: (
      <>
        He opened with a question about my hiking photo instead of "hey." We
        talked for three hours that night. We're hiking that same trail again
        next month — together this time.
      </>
    ),
    name: "Meera & Rohan",
  },
  {
    date: "Matched 3 weeks ago",
    rotate: "1.5deg",
    text: (
      <>
        I almost deleted the app the day before we matched. Glad I gave it
        one more morning. First date turned into a four-hour walk neither of
        us wanted to end.
      </>
    ),
    name: "Sana & Dev",
  },
  {
    date: "Matched last year",
    rotate: "-1deg",
    text: (
      <>
        We moved in together in March. Still keep the screenshot of our first
        message on my phone — "is that your dog or a small horse?"
      </>
    ),
    name: "Ananya & Kabir",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-ink py-24 sm:py-32 overflow-hidden">
      <div className="grain-overlay" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-xl mb-20">
          <p className="font-mono text-xs uppercase tracking-widest text-honey mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-paper leading-tight">
            Real stories from people who found someone worth meeting.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8">
          {TESTIMONIALS.map((story) => (
            <div key={story.name} className="flex flex-col items-center">
              <DiaryCard date={story.date} rotate={story.rotate} className="w-full">
                {story.text}
              </DiaryCard>
              <p className="font-mono text-xs text-muted mt-6 tracking-wide">
                {story.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
