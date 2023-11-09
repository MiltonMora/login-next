/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites () {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*'
      },
      {
        source: '/:path*',
        destination: '/pages/:path*'
      }
    ]
  }
}

module.exports = nextConfig
