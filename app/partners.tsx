import {
  array,
  record,
  string,
  union,
  decodeType,
  optional,
} from "typescript-json-decoder";

const partnerCategories = [
  "homepage",
  "financial.main",
  "financial.grants",
  "financial.regular",
  "experts.submitters",
  "experts.supporters",
] as const;

type Partner = decodeType<typeof decodePartner>;

export const decodePartner = record({
  id: string,
  name: string,
  logoUrl: string,
  linkUrl: optional(string),
  categories: array(union(...partnerCategories)),
});

const PartnerSection = ({ partners }: { partners: Partner[] }) => {
  return (
    <div className="partner-section">
      <h2>Partneři</h2>
      <div className="partner-logos">
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.linkUrl}
            className="partner-logo-card"
          >
            <img src={partner.logoUrl} alt={partner.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PartnerSection;
