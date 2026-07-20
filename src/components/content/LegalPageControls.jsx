import { useNavigate } from "react-router-dom";

export function LegalCloseIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LegalBackIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 6L9 12L15 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LegalBackButton({ onClick, className = "" }) {
  const navigate = useNavigate();

  function handleClick() {
    if (onClick) {
      onClick();
      return;
    }
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/90 px-4 py-2.5 font-body text-sm font-medium text-ink/75 shadow-sm transition-all hover:border-[#F6761B]/35 hover:text-[#F6761B] hover:shadow-md active:scale-[0.98] ${className}`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF2E9] text-[#F6761B]">
        <LegalBackIcon />
      </span>
      Back
    </button>
  );
}

export function LegalCloseButton({ onClick, className = "" }) {
  const navigate = useNavigate();

  function handleClick() {
    if (onClick) {
      onClick();
      return;
    }
    navigate("/");
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Close and return home"
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/90 text-ink/50 shadow-sm transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-500 hover:shadow-md active:scale-95 ${className}`}
    >
      <LegalCloseIcon className="w-5 h-5" />
    </button>
  );
}
