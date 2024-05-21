import Link from "next/link";
import Footer from "./footer";
import "./global.css";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html>
      <head>
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="https://blog.cesko.digital/rss.xml"
        ></link>
        <script
          data-domain="blog.cesko.digital"
          src="https://plausible.io/js/plausible.js"
          defer
        />
      </head>
      <body>
        <div className="main-wrapper">
          <NavigationBar />
          <div className="content-wrapper">{children}</div>
          <PartnerSection />
          <Footer />
        </div>
      </body>
    </html>
  );
}

const PartnerSection = () => {
  const partners = [
    {
      id: "ppf",
      linkUrl: "https://nadaceppf.cz/",
      name: "Nadace PPF",
      logoUrl:
        "https://data.cesko.digital/web/sections/partners/zna__ka_nadace_ppf.png",
    },
    {
      id: "google",
      linkUrl: "https://www.google.org/",
      name: "Google.org",
      logoUrl:
        "https://data.cesko.digital/web/sections/partners/google.org_color_852x272px.png",
    },
  ];

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

//
// Navigation
//

const NavigationBar = () => {
  return (
    <div className="navigation-wrapper">
      <div className="navigation-bar">
        <a href="/" className="logo-full" />
        <a href="/" className="logo-square" />
        <ul className="navigation-menu">
          <li>
            <Link href="https://cesko.digital" className="typo-link">
              Co děláme
            </Link>
          </li>
          <li>
            <Link href="https://app.cesko.digital/" className="typo-link">
              Zapojte se
            </Link>
          </li>
          <li>
            <Link href="/" className="font-semibold">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
