import Link from "next/link";
import Image from "next/image";
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
        <div className="flex flex-col gap-7">
          <NavigationBar />
          <main className="max-w-content px-7 m-auto">{children}</main>
          <Partners />
          <Footer />
        </div>
      </body>
    </html>
  );
}

//
// Navigation
//

const NavigationBar = () => {
  return (
    <div className="w-full bg-pebble lg:pt-6">
      <nav className="max-w-content flex flex-row flex-wrap gap-x-12 gap-y-7 items-center py-10 px-7 m-auto lg:grid lg:grid-cols-3">
        <FullLogo />
        <SquareLogo />
        <Menu />
      </nav>
    </div>
  );
};

const FullLogo = () => (
  <Link href="/" className="-mt-[21px] hidden lg:block">
    <Image
      src="/logo.svg"
      width={255}
      height={53}
      alt="Česko.Digital"
      className="select-none"
    />
  </Link>
);

const SquareLogo = () => (
  <Link href="/" className="lg:hidden">
    <Image src="/favicon.png" width={60} height={60} alt="Česko.Digital" />
  </Link>
);

const Menu = () => (
  <ul className="flex flex-row gap-7 text-xl typo-link">
    <li>
      <Link href="https://cesko.digital">Co děláme</Link>
    </li>
    <li>
      <Link href="https://app.cesko.digital/">Zapojte se</Link>
    </li>
    <li>
      <Link href="/" className="font-bold no-underline">
        Blog
      </Link>
    </li>
  </ul>
);

//
// Partners
//

const Partners = () => {
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
    <div className="bg-pebble py-12 mt-7 -mb-7">
      <div className="w-full max-w-content m-auto px-7 text-center">
        <h2 className="typo-title2 mb-10">Partneři</h2>
        <div className="flex flex-row items-center justify-center gap-7">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.linkUrl}
              className="block w-[160px] h-[100px] relative"
            >
              <Image
                className="object-contain"
                src={partner.logoUrl}
                alt={partner.name}
                fill
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

//
// Footer
//

const Footer = () => {
  return (
    <div className="w-full bg-plum py-12">
      <div className="max-w-content m-auto flex flex-row flex-wrap justify-center items-center gap-10 px-7">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            className="block text-white typo-link"
            href={item.url}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

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
    url: "http://github.com/cesko-digital",
    name: "GitHub",
  },
];
