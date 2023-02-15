import { Router, withRouter } from "next/router";
import Link from "next/link";

interface Props {
  router: Router;
}

const NavigationBar: React.FC<Props> = (props) => (
  <div className="header-wrapper">
    <div className="navigation-bar">
      <div>
        <a href={"https://cesko.digital"} className="logo" />
      </div>
      <div>
        <div className="toolbar-links">
          {props.router.asPath !== "/" && (
            <Link href="/" className="toolbar-link">
              ← Zpět na všechny články
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default withRouter(NavigationBar);
