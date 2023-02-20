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
    url: "https://www.instagram.com/cesko.digital/",
    name: "Instagram",
  },
  {
    url: "https://www.youtube.com/c/ČeskoDigital",
    name: "YouTube",
  },
  {
    url: "https://anchor.fm/poslouchatdigital",
    name: "Podcast",
  },
  {
    url: "https://www.cocuma.cz/company/cesko-digital/jobs/",
    name: "Cocuma",
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
      </div>
    </div>
  );
};

export default Footer;
