import Footer from "./footer";
import NavigationBar from "./navigation-bar";
import { default as NextHead } from "next/head";

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
    </NextHead>
  );
};

export default Layout;
