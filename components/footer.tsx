const socialLinks = [
  {
    url: "https://www.facebook.com/cesko.digital",
    name: "Facebook",
  },
  {
    url: "https://twitter.com/CeskoDigital",
    name: "Twitter",
  },
  {
    url: "https://www.linkedin.com/company/cesko-digital/",
    name: "LinkedIn",
  },
  {
    url: "http://github.com/cesko-digital",
    name: "GitHub",
  },
];

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-row">
          {socialLinks.map((item, index) => (
            <div className="footer-item" key={index}>
              <a className="footer-link" href={item.url}>
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div className="footer-row">
          <div className="cookie-note">
            Tento web používá k poskytování služeb a analýze návštěvnosti
            soubory cookie. Používáním tohoto webu s tím souhlasíte.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
