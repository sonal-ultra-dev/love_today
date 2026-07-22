import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import LegalModal from "../ui/LegalModal";
import logo from "../../assets/logo.png";

const NAV_LINKS = [
  { label: "How it works", hash: "how-it-works" },
  { label: "About us", hash: "about-us" },
  { label: "Testimonials", hash: "testimonials" },
  { label: "Safety", hash: "safety" },
  { label: "Pricing", hash: "pricing" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", key: "privacy" },
  { label: "Terms of Service", key: "terms" },
  { label: "Refund Policy", key: "refund" },
  { label: "Service Delivery", key: "serviceDelivery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const legalRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setLegalOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!legalOpen) return;

    function handleClickOutside(e) {
      if (legalRef.current && !legalRef.current.contains(e.target)) {
        setLegalOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [legalOpen]);

  function handleAnchorClick(e, hash) {
    e.preventDefault();
    setOpen(false);
    setLegalOpen(false);

    if (location.pathname === "/") {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }

  function openLegalModal(key) {
    setLegalOpen(false);
    setOpen(false);
    setActiveModal(key);
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-ink/90 backdrop-blur-md border-b border-ink-soft">
        <nav className="max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 sm:px-8 py-4 sm:py-5">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-11 h-11 rounded-xl bg-[#F6761B] flex items-center justify-center shadow-lg">
              <img src={logo} alt="LoveToday" className="w-7 h-7 object-contain" />
            </div>
            <span className="font-display text-2xl font-bold text-white leading-none">
              Love<span className="text-[#F6761B]">Today</span>
            </span>
          </Link>

          {/* Desktop nav — centered */}
          <ul className="hidden lg:flex items-center justify-center gap-5 xl:gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.hash}>
                <a
                  href={`#${link.hash}`}
                  onClick={(e) => handleAnchorClick(e, link.hash)}
                  className="font-body text-sm text-paper/80 hover:text-[#F6761B] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li className="relative" ref={legalRef}>
              <button
                type="button"
                onClick={() => setLegalOpen((prev) => !prev)}
                className="font-body text-sm text-paper/80 hover:text-[#F6761B] transition-colors flex items-center gap-1.5 whitespace-nowrap"
                aria-expanded={legalOpen}
                aria-haspopup="true"
              >
                Legal
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  className={`transition-transform duration-200 ${
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
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 rounded-xl border border-ink-soft bg-surface shadow-xl overflow-hidden z-50">
                  {LEGAL_LINKS.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => openLegalModal(item.key)}
                      className="block w-full px-4 py-3 text-left text-sm text-paper/80 hover:bg-ink-soft hover:text-paper transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Right side — Contact + mobile toggle */}
          <div className="flex items-center justify-end gap-2">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center rounded-full border border-[#F6761B]/40 bg-[#F6761B]/10 px-4 py-2 font-body text-sm font-medium text-[#F6761B] hover:bg-[#F6761B] hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="lg:hidden text-paper p-2 -mr-2 hover:text-[#F6761B] transition-colors"
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
          </div>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-ink border-t border-ink-soft px-6 py-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.hash}
                  href={`#${link.hash}`}
                  onClick={(e) => handleAnchorClick(e, link.hash)}
                  className="font-body text-paper/90 text-base py-3 border-b border-ink-soft/50 hover:text-[#F6761B] transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="font-body text-paper/90 text-base py-3 border-b border-ink-soft/50 hover:text-[#F6761B] transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="pt-5 mt-2">
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
                Legal
              </p>
              <div className="flex flex-col gap-2">
                {LEGAL_LINKS.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => openLegalModal(item.key)}
                    className="text-left font-body text-paper/90 py-2 hover:text-[#F6761B] transition-colors"
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
        onNavigate={setActiveModal}
      />
    </>
  );
}
