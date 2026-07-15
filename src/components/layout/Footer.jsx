import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png"
const FOOTER_COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "How it works", hash: "how-it-works" },
      { label: "Safety", hash: "safety" },
      { label: "Stories", hash: "stories" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Refund Policy", to: "/refund-policy" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Follow",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "X / Twitter", href: "#" },
    ],
  },
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (e, hash) => {
    e.preventDefault();

    if (location.pathname === "/") {
      document.getElementById(hash)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      navigate("/");

      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);
    }
  };

  return (
    <footer className="bg-ink border-t border-ink-soft pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Logo */}
          <div className="lg:col-span-1">
  <Link to="/" className="flex items-center gap-3">

    {/* Logo Badge */}
    <div className="w-11 h-11 rounded-xl bg-[#F6761B] flex items-center justify-center shadow-lg">
      <img
        src={logo}
        alt="LoveToday"
        className="w-7 h-7 object-contain"
      />
    </div>

    {/* Brand Name */}
    <span className="font-display text-2xl text-paper">
      Love<span className="text-[#F6761B]">Today</span>
    </span>

  </Link>

  <p className="font-body text-sm text-muted mt-4 leading-relaxed max-w-[220px]">
    A dating app for people who'd rather meet someone than keep swiping.
  </p>
</div>

          {/* Footer Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
                {column.heading}
              </h4>

              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="font-body text-sm text-paper/80 hover:text-paper transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : link.hash ? (
                      <a
                        href={`#${link.hash}`}
                        onClick={(e) => handleAnchorClick(e, link.hash)}
                        className="font-body text-sm text-paper/80 hover:text-paper transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm text-paper/80 hover:text-paper transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-ink-soft pt-8 flex flex-col sm:flex-row justify-between gap-4">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} LoveToday. All rights reserved.
          </p>

          <p className="font-mono text-xs text-muted">
            Made for people who'd rather meet today than someday.
          </p>
        </div>
      </div>
    </footer>
  );
}