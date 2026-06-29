export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body font-semibold transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F6761B]/50 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-[#F6761B] text-white hover:bg-[#E76810] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F6761B]/30 active:translate-y-0",

    secondary:
      "border border-[#F6761B] text-[#F6761B] bg-transparent hover:bg-[#F6761B] hover:text-white hover:-translate-y-1",

    dark:
      "bg-[#1F1B2E] text-white border border-white/10 hover:bg-[#2D2438] hover:border-[#F6761B]",

    white:
      "bg-white text-[#F6761B] hover:bg-gray-100 hover:-translate-y-1",

    ghost:
      "bg-transparent text-white hover:bg-white/10",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}