/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [new URL('http://localhost:3333/files/**')],
//   },
// };

const nextConfig = {
  images: {
    remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3333',
            pathname: '/files/**',
          }
        ],
    dangerouslyAllowLocalIP: true,
  },
}

module.exports = nextConfig;
