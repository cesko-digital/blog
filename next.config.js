module.exports = {
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
