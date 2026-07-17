import { LEGAL_CONTENT } from "../components/content/legal";
import LegalPageLayout from "../components/content/LegalPageLayout.jsx";

export default function RefundPolicy() {
  const { label, updated, intro, sections, footnote } = LEGAL_CONTENT.refund;
  return (
    <LegalPageLayout
      label={label}
      updated={updated}
      intro={intro}
      sections={sections}
      footnote={footnote}
      activePath="/refund-policy"
    />
  );
}
