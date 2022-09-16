/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['styles.redditmedia.com'],
  },
}

module.exports = nextConfig
