import { LEGAL_CONTENT } from "../components/content/legal";
import LegalPageLayout from "../components/content/LegalPageLayout.jsx";

export default function PrivacyPolicy() {
  const { label, updated, intro, sections, footnote } = LEGAL_CONTENT.privacy;
  return (
    <LegalPageLayout
      label={label}
      updated={updated}
      intro={intro}
      sections={sections}
      footnote={footnote}
      activePath="/privacy-policy"
    />
  );
}
