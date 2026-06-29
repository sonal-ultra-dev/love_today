import { useEffect, useState } from "react";
import Button from "../ui/Button.jsx";
import heroBg from "../../assets/latika.png";
import heroBack from "../../assets/test123.jpg";
// import heroBg from "../../assets/background2.png";

function useTodayLabel() {
  const [label, setLabel] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    setLabel(fmt.format(new Date()));
  }, []);

  return label;
}

export default function Hero() {
  const today = useTodayLabel();

  return (
    <section
  id="top"
  className="relative overflow-hidden pt-24 pb-20 sm:pt-28 sm:pb-24 bg-cover bg-center"
  style={{
    backgroundImage: `url(${heroBack})`,
  }}
>
  {/* Stronger Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

  {/* Glow */}
  <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#F6761B]/20 blur-[140px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#F6761B]/10 blur-[180px] rounded-full" />

  {/* Grain */}
  <div className="grain-overlay absolute inset-0 opacity-20" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
    <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 items-center">

      {/* LEFT (FIXED VISIBILITY) */}
      <div className="bg-black/40  rounded-2xl p-6 sm:p-10">
        <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl leading-tight text-white">
          Don't wait for
          <br />
          <span className="italic text-[#F6761B]">someday.</span>
          <br />
          Start loving today.
        </h1>

        <p className="mt-8 text-lg text-white/80 leading-8 max-w-xl">
          No endless swiping. No stale conversations.
          Meet genuine people nearby and turn online matches into real moments.
        </p>

        <div className="flex gap-5 mt-10 flex-wrap">
          <Button variant="primary">Find your someone</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </div>

      {/* RIGHT unchanged */}
      <div className="hidden lg:flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[#F6761B]/30 blur-3xl rounded-full scale-90" />

          <div className="relative w-[330px] rounded-[42px] bg-white/90 backdrop-blur-xl p-4 shadow-[0_30px_80px_rgba(0,0,0,.45)] border border-white/50">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-display text-[#1F1B2E]">
                Hello there!
              </h2>

              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-xl bg-[#FFF2E9] flex items-center justify-center">
  <i className="fa-regular fa-image text-[#F6761B]"></i>
</div>

<div className="w-10 h-10 rounded-xl bg-[#FFF2E9] flex items-center justify-center">
  <i className="fa-regular fa-bell text-[#F6761B]"></i>
</div>

<div className="w-10 h-10 rounded-xl bg-[#FFF2E9] flex items-center justify-center">
  <i className="fa-solid fa-gear text-[#F6761B]"></i>
</div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[30px]">
              <img
                src={heroBg}
                alt="Profile"
                className="w-full h-[470px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-5">
                <h3 className="text-white text-2xl font-semibold">
                  Latika Rai, 20
                </h3>
                <p className="text-white/90">Delhi NCR</p>
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-5">
  {[
    { icon: "fa-rotate-left", style: "fa-solid" },
    { icon: "fa-xmark", style: "fa-solid" },
    { icon: "fa-star", style: "fa-solid", special: true },
    { icon: "fa-heart", style: "fa-regular" },
    { icon: "fa-comment-dots", style: "fa-regular" },
  ].map((item, index) => (
    <button
      key={index}
      className={`w-14 h-14 rounded-full shadow-lg transition hover:scale-110 flex items-center justify-center ${
        item.special
          ? "bg-[#F6761B] text-white"
          : "bg-white text-[#F6761B]"
      }`}
    >
      <i className={`${item.style} ${item.icon} text-lg`}></i>
    </button>
  ))}
</div>

            <div className="mt-6 bg-[#F6761B] rounded-full py-4 px-8 flex justify-between text-white text-2xl shadow-lg">
  <i className="fa-regular fa-house"></i>
  <i className="fa-regular fa-heart"></i>
  <i className="fa-regular fa-comment-dots"></i>
  <i className="fa-regular fa-user"></i>
</div>

          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  );
}
