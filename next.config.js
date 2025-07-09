/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL('http://localhost:3333/files/**')],
  },
};

module.exports = nextConfig;
