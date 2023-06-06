/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
      appDir: true,
      serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }

    //   process.env.NODE_NO_WARNINGS = 'stream/web';
      return config;
    }
  }
  
  module.exports = nextConfig;