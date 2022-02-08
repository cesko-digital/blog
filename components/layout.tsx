import Footer from "./footer";
import NavigationBar from "./navigation-bar";

const Layout: React.FC = (props) => {
  return (
    <div className="main-wrapper">
      <NavigationBar />
      <div className="content-wrapper">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
