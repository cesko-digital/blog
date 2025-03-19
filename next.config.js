module.exports = {
  images: {
    remotePatterns: [{ hostname: "assets.cesko.digital" }],
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
