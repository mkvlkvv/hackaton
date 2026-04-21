// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,  // обязательно для статического экспорта
  },
};

module.exports = nextConfig;
