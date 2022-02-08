const navigationItems = [
  {
    url: "https://cesko.digital/projects",
    name: "Projekty",
  },
  {
    name: "Blog",
    url: "/",
  },
  {
    url: "https://www.darujme.cz/projekt/1203553",
    name: "Přispět",
  },
];

const NavigationBar: React.FC = () => (
  <div className="header-wrapper">
    <div className="navigation-bar">
      <div>
        <a href={"https://cesko.digital"} className="logo" />
      </div>
      <div>
        <div className="toolbar-links">
          {navigationItems.map((item, index) => (
            <a className="toolbar-link" key={index} href={item.url}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default NavigationBar;
