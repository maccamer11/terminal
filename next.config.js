/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env: {
    CMC_API_KEY: process.env.CMC_API_KEY,
  },
};

module.exports = nextConfig
