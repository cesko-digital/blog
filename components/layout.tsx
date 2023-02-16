import Footer from "./footer";
import NavigationBar from "./navigation-bar";
import { default as NextHead } from "next/head";
import Script from "next/script";

interface PageProps {
  children?: React.ReactNode;
}

/** Main page layout with head, navigation and footer */
const Layout: React.FC<PageProps> = (props) => {
  return (
    <>
      <Head {...props} />
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
  return (
    <NextHead>
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
