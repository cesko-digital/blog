"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavigationBar = () => {
  const pathName = usePathname();
  return (
    <div className="header-wrapper">
      <div className="navigation-bar">
        <div>
          <a href={"https://cesko.digital"} className="logo" />
        </div>
        <div>
          <div className="toolbar-links">
            {pathName !== "/" && (
              <Link href="/" className="toolbar-link">
                ← Zpět na všechny články
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
