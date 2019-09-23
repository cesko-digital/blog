const config = {
  siteTitle: "Blog >Česko.Digital", // Site title.
  siteTitleAlt: "Blog >Česko.Digital", // Alternative site title for SEO.
  siteLogo: "/logos/logo.svg", // Logo used for SEO and manifest.
  siteUrl: "https://blog.cesko.digital/", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Články ze světa komunity měnící Česko skrze jedničky a nuly...", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  postDefaultCategoryID: "Blog", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD-HH-mm", // Date format used in the frontmatter.
  twitter: "CeskoDigital", // Optionally renders "Follow Me" in the UserInfo segment.
  copyright: "Copyright © 2019. >Česko.Digital", // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
