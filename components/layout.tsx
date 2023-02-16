import Footer from "./footer";
import NavigationBar from "./navigation-bar";

interface PageProps {
  children?: React.ReactNode;
}

/** Main page layout with head, navigation and footer */
const Layout: React.FC<PageProps> = (props) => {
  return (
    <>
      <div className="main-wrapper">
        <NavigationBar />
        <div className="content-wrapper">{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
