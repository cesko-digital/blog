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
      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-140227366-2" />
      <Script id="google-analytcs">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-140227366-2', { client_storage: 'none', anonymize_ip: true });
        `}
      </Script>
      <Script
        data-domain="blog.cesko.digital"
        src="https://plausible.io/js/plausible.js"
      />
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
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS"
        href="https://blog.cesko.digital/rss.xml"
      ></link>
    </NextHead>
  );
};

export default Layout;
