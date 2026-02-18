import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
     reactStrictMode: false,
     output: 'export',
     basePath: '/A2T-Website',
     trailingSlash: true,
     images: {
          unoptimized: true,
     },
}

export default nextConfig
