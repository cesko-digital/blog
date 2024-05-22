module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "data.cesko.digital",
      },
    ],
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
