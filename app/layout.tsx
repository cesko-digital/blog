import Footer from "app/footer";
import "../global.css";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./Navigation";

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
          <Navigation/>
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

const Navigation = () => {
  return (
    <nav className="w-full bg-pebble lg:pt-6">
      <div className="m-auto -mb-12 max-w-content px-7 py-10">
        <div className="block md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <DesktopNav />
        </div>
      </div>
    </nav>
  );
};
