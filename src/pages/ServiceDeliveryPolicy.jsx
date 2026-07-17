import { LEGAL_CONTENT } from "../components/content/legal";
import LegalPageLayout from "../components/content/LegalPageLayout.jsx";

export default function ServiceDeliveryPolicy() {
  const { label, updated, intro, sections, footnote } = LEGAL_CONTENT.serviceDelivery;
  return (
    <LegalPageLayout
      label={label}
      updated={updated}
      intro={intro}
      sections={sections}
      footnote={footnote}
      activePath="/service-delivery-policy"
    />
  );
}
