import { Link } from "react-router-dom";

export const LEGAL_NAV = [
  { label: "Terms", to: "/terms", key: "terms" },
  { label: "Privacy", to: "/privacy-policy", key: "privacy" },
  { label: "Refund", to: "/refund-policy", key: "refund" },
  { label: "Service Delivery", to: "/service-delivery-policy", key: "serviceDelivery" },
];

export default function LegalNavTabs({ activePath, activeKey, onNavigate, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-2.5 max-w-full ${className}`}>
      {LEGAL_NAV.map((item) => {
        const isActive = activePath
          ? activePath === item.to
          : activeKey === item.key;

        if (onNavigate) {
          return (
            <button
              key={item.to}
              type="button"
              onClick={() => onNavigate(item.key)}
              className={`font-mono text-[11px] uppercase tracking-wider px-4 py-2.5 rounded-full border transition-all duration-300 ${
                isActive
                  ? "bg-[#F6761B] text-white border-[#F6761B] shadow-md shadow-[#F6761B]/25"
                  : "border-ink/15 text-ink/50 bg-white hover:border-[#F6761B]/40 hover:text-[#F6761B] hover:bg-[#FFF2E9]/50"
              }`}
            >
              {item.label}
            </button>
          );
        }

        return (
          <Link
            key={item.to}
            to={item.to}
            className={`font-mono text-[11px] uppercase tracking-wider px-4 py-2.5 rounded-full border transition-all duration-300 ${
              isActive
                ? "bg-[#F6761B] text-white border-[#F6761B] shadow-md shadow-[#F6761B]/25"
                : "border-ink/15 text-ink/50 bg-white hover:border-[#F6761B]/40 hover:text-[#F6761B] hover:bg-[#FFF2E9]/50"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
