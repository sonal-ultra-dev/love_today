import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../ui/Button";
import LegalModal from "../ui/LegalModal";
import logo from "../../assets/logo.png"

const NAV_LINKS = [
  { label: "How it works", hash: "how-it-works" },
  { label: "About us", hash: "stories" },
  { label: "Safety", hash: "safety" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", key: "privacy" },
  { label: "Terms of Service", key: "terms" },
  { label: "Refund Policy", key: "refund" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (e, hash) => {
    e.preventDefault();
    setOpen(false);

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

  const openLegalModal = (key) => {
  console.log("Opening modal:", key);

  setLegalOpen(false);
  setOpen(false);
  setActiveModal(key);
};

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-md border-b border-ink-soft">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-6">
          {/* Logo */}
          <Link
  to="/"
  className="flex items-center gap-3"
>
  <div className="w-11 h-11 rounded-xl bg-[#F6761B] flex items-center justify-center shadow-lg">
    <img
      src={logo}
      alt="LoveToday"
      className="w-7 h-7 object-contain"
    />
  </div>

  <div className="flex flex-col leading-none">
    <span className="font-display text-2xl font-bold text-white">
      Love
      <span className="text-[#F6761B]">Today</span>
    </span>
  </div>
</Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.hash}>
                <a
                  href={`#${link.hash}`}
                  onClick={(e) => handleAnchorClick(e, link.hash)}
                  className="font-body text-sm text-paper/80 hover:text-paper transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <Link
                to="/pricing"
                className="font-body text-sm text-paper/80 hover:text-paper transition-colors"
              >
                Pricing
              </Link>
            </li>

            {/* Legal Dropdown */}
            <li className="relative">
              <button
  type="button"
  onClick={() => setLegalOpen((prev) => !prev)}
  className="font-body text-sm text-paper/80 hover:text-paper transition-colors flex items-center gap-1"
>
                Legal

                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className={`transition-transform ${
                    legalOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {legalOpen && (
                <div className="absolute right-0 top-full mt-3 w-52 rounded-xl border border-ink-soft bg-surface shadow-xl overflow-hidden">
                  {LEGAL_LINKS.map((item) => (
  <button
    key={item.key}
    type="button"
    onClick={() => {
      console.log("Clicked:", item.key);
      openLegalModal(item.key);
    }}
    className="block w-full px-4 py-3 text-left text-sm text-paper/80 hover:bg-ink-soft hover:text-paper"
  >
    {item.label}
  </button>
))}
                </div>
              )}
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
        
            <Button variant="primary" className="!px-6 !py-2.5 text-sm">
              Get the app
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden text-paper p-2"
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
              {open ? (
                <path
                  d="M6 6L20 20M20 6L6 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 8H22M4 13H22M4 18H22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-ink border-t border-ink-soft px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.hash}
                href={`#${link.hash}`}
                onClick={(e) => handleAnchorClick(e, link.hash)}
                className="font-body text-paper/90 text-base"
              >
                {link.label}
              </a>
            ))}

            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="font-body text-paper/90 text-base"
            >
              Pricing
            </Link>

            <div className="border-t border-ink-soft pt-4">
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
                Legal
              </p>

              <div className="flex flex-col gap-3">
                {LEGAL_LINKS.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => openLegalModal(item.key)}
                    className="text-left font-body text-paper/90"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}
      </header>

      <LegalModal
        contentKey={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </>
  );
}