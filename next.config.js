module.exports = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: "/config.yml",
        destination: "/admin/config.yml",
        permanent: false,
      },
    ];
  },
};
