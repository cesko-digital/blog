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
};
