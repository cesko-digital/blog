module.exports = {
  async redirects() {
    return [
      {
        source: "/rss.xml",
        destination: "/api/feed",
        permanent: false,
      },
      {
        source: "/config.yml",
        destination: "/admin/config.yml",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/:path(.*.mjml)",
        destination: "/api/mjml?path=:path",
      },
      {
        source: "/:path(.*.newsletter)",
        destination: "/api/mjml?path=:path&html=y",
      },
    ];
  },
};
