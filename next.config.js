/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: 'http://pmo-dev.us-east-1.elasticbeanstalk.com/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },
  images: {
    remotePatterns: [
      // {
      // 	protocol: 'https',
      // 	hostname: 'tailwindui.com',
      // 	port: '',
      // 	pathname: '/img/logos/**',
      // },
    ],
  },
}

module.exports = nextConfig
