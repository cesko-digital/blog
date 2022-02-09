import Footer from "./footer";
import NavigationBar from "./navigation-bar";
import { default as NextHead } from "next/head";
import Script from "next/script";

interface PageProps {
  title: string;
  description: string;
  coverUrl?: string;
}

/** Main page layout with head, navigation and footer */
const Layout: React.FC<PageProps> = (props) => {
  return (
    <>
      <Head {...props} />
      <div className="main-wrapper">
        <NavigationBar />
        <div className="content-wrapper">{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

const Head: React.FC<PageProps> = (props) => {
  const { title, description, coverUrl } = props;
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={coverUrl} />
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      <script
        defer
        data-domain="blog.cesko.digital"
        src="https://plausible.io/js/plausible.js"
      ></script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', 'GTM-KW2XL65');
      `}
      </Script>
    </NextHead>
  );
};

export default Layout;
