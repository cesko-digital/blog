import Footer from "app/footer";
import NavigationBar from "app/navigation-bar";
import PartnerSection, { decodePartner } from "./partners";
import { array } from "typescript-json-decoder";
import "../global.css";

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const partners = (await getAllPartners())
    // Only take main partners
    .filter((p) => p.categories.includes("homepage"));
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
          <PartnerSection partners={partners} />
          <Footer />
        </div>
      </body>
    </html>
  );
}

const getAllPartners = async () =>
  await fetch("https://cesko.digital/api/partners")
    .then((response) => response.json())
    .then(array(decodePartner));
