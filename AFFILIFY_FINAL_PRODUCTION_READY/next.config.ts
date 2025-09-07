/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Removed TurboPack configuration completely
  serverExternalPackages: ['mongodb', 'jsonwebtoken', 'bcryptjs'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
      }
    }
    return config
  },
  // Disable experimental features that might cause issues
  experimental: {
    serverComponentsExternalPackages: ['mongodb', 'jsonwebtoken', 'bcryptjs']
  }
}

module.exports = nextConfig

