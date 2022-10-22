/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['heron-static.s3.amazonaws.com']
  }
}

module.exports = nextConfig
