module.exports = {
  async redirects() {
    return [
      {
        source: '/rss.xml',
        destination: '/api/feed',
        permanent: false,
      },
    ]
  },
}
