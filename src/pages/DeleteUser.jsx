import { Link } from "react-router-dom";
import { LEGAL_CONTENT } from "../components/content/legal";
import LegalPageLayout from "../components/content/LegalPageLayout.jsx";

const actionLinkClass =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body font-semibold transition-all duration-300 text-center w-full sm:w-auto";

export default function DeleteUser() {
  const { label, updated, intro, sections, footnote } = LEGAL_CONTENT.deleteUser;

  const footerActions = (
    <>
      <Link
        to="/contact"
        className={`${actionLinkClass} bg-[#F6761B] text-white hover:bg-[#E76810] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#F6761B]/25`}
      >
        Raise a Request
      </Link>
      <Link
        to="/contact"
        className={`${actionLinkClass} border border-[#F6761B] text-[#F6761B] bg-white hover:bg-[#F6761B] hover:text-white hover:-translate-y-0.5`}
      >
        Help & Support
      </Link>
    </>
  );

  return (
    <LegalPageLayout
      label={label}
      updated={updated}
      intro={intro}
      sections={sections}
      footnote={footnote}
      showLegalNav={false}
      showCompanyBlock={false}
      categoryLabel="Account"
      footerActions={footerActions}
    />
  );
}
